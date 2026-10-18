const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Parse .env manually
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split(/\r?\n/).forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let value = (match[2] || '').trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (!process.env[match[1]]) {
        process.env[match[1]] = value;
      }
    }
  });
}

// Load credentials from staff-credentials.local.json
const credsPath = path.resolve(__dirname, '../staff-credentials.local.json');
if (!fs.existsSync(credsPath)) {
  console.error('[Error] staff-credentials.local.json not found.');
  process.exit(1);
}

const credentials = JSON.parse(fs.readFileSync(credsPath, 'utf8'));

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!serviceRoleKey || serviceRoleKey.trim() === '') {
  console.log('\n================================================================');
  console.log('NOTICE: SUPABASE_SERVICE_ROLE_KEY is required to provision users');
  console.log('================================================================');
  console.log('Since public sign-up is disabled on this Supabase instance:');
  console.log('1. Open your Supabase Dashboard: https://supabase.com/dashboard/project/kvwdazuujvipzxuugzuj');
  console.log('2. Go to Project Settings -> API -> Project API Keys');
  console.log('3. Copy the "service_role" secret key');
  console.log('4. Add it to your local .env file (it is gitignored):');
  console.log('   SUPABASE_SERVICE_ROLE_KEY="your-secret-key-here"');
  console.log('5. Re-run this script: npm run staff:provision\n');
  console.log('Alternatively, you can manually add the user in the Supabase Dashboard:');
  console.log('Authentication -> Users -> "Add User" with:');
  console.log('Email:', credentials.admin.email);
  console.log('Password:', credentials.admin.password);
  console.log('================================================================\n');
  process.exit(0);
}

const adminClient = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function provision() {
  const target = credentials.admin;
  console.log(`\nProvisioning ${target.role} user: ${target.email}...`);

  // 1. Create or verify auth user
  const { data: userData, error: userError } = await adminClient.auth.admin.createUser({
    email: target.email,
    password: target.password,
    email_confirm: true,
  });

  let userId;
  if (userError) {
    if (userError.message.includes('already exists') || userError.status === 422) {
      console.log('User already exists in Supabase auth. Updating password...');
      const { data: listData } = await adminClient.auth.admin.listUsers();
      const existing = listData?.users?.find(u => u.email === target.email);
      if (existing) {
        userId = existing.id;
        await adminClient.auth.admin.updateUserById(userId, {
          password: target.password,
          email_confirm: true,
        });
        console.log('Password updated successfully.');
      } else {
        throw userError;
      }
    } else {
      throw userError;
    }
  } else {
    userId = userData.user.id;
    console.log('User created successfully in Auth.');
  }

  // 2. Ensure role in user_roles table
  if (userId) {
    const { data: existingRole } = await adminClient
      .from('user_roles')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (!existingRole) {
      const { error: roleError } = await adminClient
        .from('user_roles')
        .insert({ user_id: userId, role: target.role });
      if (roleError) console.warn('Could not insert into user_roles (may already exist or be handled by trigger):', roleError.message);
      else console.log(`Assigned role "${target.role}" to user in user_roles.`);
    } else {
      console.log(`User already has role: "${existingRole.role}".`);
    }
  }

  console.log('\n================================================================');
  console.log('SUCCESS: Staff & Admin account is ready to use!');
  console.log('Portal URL: /staff');
  console.log('Email:', target.email);
  console.log('Password:', target.password);
  console.log('================================================================\n');
}

provision().catch((err) => {
  console.error('Provisioning failed:', err);
  process.exit(1);
});
