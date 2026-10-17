create type public.app_role as enum ('admin', 'staff');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create or replace function public.handle_new_staff()
returns trigger language plpgsql security definer set search_path = public
as $$ begin insert into public.user_roles (user_id, role) values (new.id, 'staff') on conflict do nothing; return new; end $$;
create trigger on_auth_user_created_staff after insert on auth.users for each row execute function public.handle_new_staff();

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content text not null default '',
  cover_url text,
  author_name text not null default 'Elite Edu Consult',
  author_id uuid,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.posts to anon;
grant select, insert, update, delete on public.posts to authenticated;
grant all on public.posts to service_role;
alter table public.posts enable row level security;
create policy "Public reads published posts" on public.posts for select to anon, authenticated using (published = true);
create policy "Staff read all posts" on public.posts for select to authenticated using (public.has_role(auth.uid(), 'staff') or public.has_role(auth.uid(), 'admin'));
create policy "Staff insert posts" on public.posts for insert to authenticated with check (public.has_role(auth.uid(), 'staff') or public.has_role(auth.uid(), 'admin'));
create policy "Staff update posts" on public.posts for update to authenticated using (public.has_role(auth.uid(), 'staff') or public.has_role(auth.uid(), 'admin'));
create policy "Staff delete posts" on public.posts for delete to authenticated using (public.has_role(auth.uid(), 'staff') or public.has_role(auth.uid(), 'admin'));

create or replace function public.touch_updated_at() returns trigger language plpgsql set search_path = public as $$ begin new.updated_at = now(); return new; end $$;
create trigger posts_touch before update on public.posts for each row execute function public.touch_updated_at();

insert into public.posts (title, slug, excerpt, content, author_name) values
('5 Steps to a Winning Scholarship Application', 'winning-scholarship-application', 'Practical tips to make your scholarship essay and documents stand out.', E'Scholarships are competitive, but a well-prepared application makes all the difference.\n\n1. Start early and track every deadline.\n2. Research each scholarship''s values and tailor your essay.\n3. Tell a genuine story about your goals.\n4. Ask for strong recommendation letters in good time.\n5. Proofread everything — then ask someone else to proofread it too.\n\nNeed help? Our team at Elite Edu Consult guides students through every step.', 'Elite Edu Consult'),
('Choosing the Right Course at a Ghana University', 'choosing-the-right-course', 'How to match your strengths and career goals with the right programme.', E'Picking a programme is one of the biggest decisions you will make.\n\nThink about the subjects you enjoy, the careers they lead to, and the entry requirements. Talk to graduates, visit campuses where possible, and book an expert course consultation with us to explore your options.', 'Elite Edu Consult');