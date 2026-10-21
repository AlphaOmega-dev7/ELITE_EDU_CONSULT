# Elite Edu Consult

The official web platform and administrative portal for **Elite Edu Consult**, an educational advisory and international admissions consultancy founded on Legon Campus (Accra, Ghana). The platform connects ambitious students and young professionals across Ghana and worldwide with top-tier undergraduate, graduate, and scholarship opportunities in the USA, UK, Canada, Europe, and Ghana.

---

## Key Features

### 1. Modern Responsive Frontend
- **High-End Aesthetics**: Curated color palette featuring deep navy tones, royal gold accents, and elegant typography (*Playfair Display* & *Manrope*).
- **Smooth Light & Dark Mode**:
  - One-click toggle switch integrated into both desktop navigation and the mobile drawer.
  - Automatic system preference detection (`prefers-color-scheme`) with `localStorage` persistence (`elite-theme`).
  - Seamless 200ms CSS variable transitions across the entire interface.
  - High-contrast, accessibility-first color rendering for cards, badges, and team profiles in both modes.
- **Student Services & Booking**: Full breakdown of consulting packages (Undergraduate, Graduate/Doctorate, Scholarship Mastery, Visa Prep, and Medical School Admissions) with direct WhatsApp and booking forms.
- **Dynamic Testimonials Page** (`/testimonials`): Shows authentic student admissions, scholarship awards, and visa approvals. Dynamically loads live data from Supabase with an automatic fallback to static testimonials.
- **Advisory Blog** (`/blog`): Insights, scholarship deadlines, and admissions strategies.
- **About & Leadership** (`/about`): Full profile of the leadership team, advisors, virtual office operations, core values, and milestones.

### 2. Staff & Admin Dashboard (`/staff`)
Protected portal for authorized consultants and staff to manage site content:
- **Tabbed Management Interface**:
  - **Blog Posts**: Create, edit, publish/draft, and delete admissions guides and announcements.
  - **Testimonials Manager (CRUD)**:
    - Add new student success stories with student name, program, institution, scholarship award, quote, star rating (1–5), category tag, and sort order.
    - Real-time editing of existing testimonials.
    - One-click toggle between **Live** and **Hidden** statuses.
    - Delete testimonials with confirmation safety.
- **Mistake Recovery & Undo System (Audit / Revert)**:
  - Instant **"Undo"** action buttons on notification toasts for updates, creations, and deletions.
  - Dedicated **"History & Revert"** session panel tracking modifications with one-click restoration of previous data.
  - **"Revert edits"** form reset buttons to instantly cancel uncommitted field modifications.
  - History is stored in `sessionStorage` so actions survive tab switches and accidental page refreshes.
- **Enterprise-Grade Security**:
  - Supabase Row-Level Security (RLS) restricting write operations to accounts with `staff` or `admin` roles (`has_role`).
  - Public registration disabled; accounts must be provisioned or added by administrators.

---

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React 19 + Vite)
- **Routing**: [TanStack Router](https://tanstack.com/router) (file-based routing with full type safety)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH color spaces and CSS custom variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend & Database**: [Supabase](https://supabase.com/) (PostgreSQL, Authentication, and Row-Level Security)
- **SSR / Server Deployment**: [Nitro](https://nitro.build/) (configured for Cloudflare Workers and Vercel)
- **Language**: TypeScript

---

## Getting Started

### Prerequisites
- **Node.js**: v20 or higher
- **npm** (or pnpm / bun)
- A **Supabase** project instance

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/AlphaOmega-dev7/ELITE_EDU_CONSULT.git
cd ELITE_EDU_CONSULT
npm install
```

### 2. Environment Variables
Copy `.env.example` to create your local `.env` file:
```bash
cp .env.example .env
```
Fill in your Supabase project credentials:
```env
# Client-side (Vite / Public)
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key_here
VITE_SUPABASE_PROJECT_ID=your-project-id

# Server-side (Nitro & SSR / Secret)
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key_here
SUPABASE_PROJECT_ID=your-project-id
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_secret_key_here
```

### 3. Database Setup & Migrations
In your Supabase Dashboard, go to the **SQL Editor** and execute the migration scripts in order:

1. **`supabase/schema.sql`**:
   - Sets up roles, RLS policies, the `posts` table, and the `has_role` helper function.
2. **`supabase/testimonials-migration.sql`**:
   - Creates the `testimonials` table and indexes.
   - Applies RLS policies allowing public reads for published entries and CRUD permissions for staff/admin users.
   - Seeds the initial student success stories.

### 4. Running the Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to:
**`http://localhost:8080`**

### 5. Staff Provisioning (Optional)
To create or provision a staff user for testing the admin dashboard:
```bash
npm run staff:provision
```
Credentials will be stored locally in `staff-credentials.local.json` (git-ignored).

### 6. Production Build & Deployment
Build the application bundle:
```bash
npm run build
```
- The production server is built via Nitro into the `.output/` directory targeting **Cloudflare Workers** (`cloudflare-module`) by default, or **Vercel** if the `VERCEL` environment variable is set.
- To preview the Cloudflare production worker locally:
  ```bash
  npx wrangler dev
  ```

---

## Project Structure

```
ELITE_EDU_CONSULT/
├── public/                 # Static assets (favicons, images, robots.txt)
├── scripts/                # Utility scripts (staff provisioning, debug helpers)
├── src/
│   ├── components/         # Reusable UI components & navigation chrome
│   │   ├── site-chrome.tsx # TopBar, Navbar, Footer, and theme toggler
│   │   └── ui/             # Radix-based UI components (buttons, dialogs, inputs)
│   ├── hooks/
│   │   └── use-theme.tsx   # Light/dark mode provider & context hook
│   ├── integrations/
│   │   └── supabase/       # Supabase client and TypeScript database types
│   ├── lib/
│   │   ├── posts.functions.ts # SSR functions for blog posts
│   │   └── site.ts         # Static site content, contact info, and navigation links
│   ├── routes/             # TanStack file-based routes
│   │   ├── __root.tsx      # Root layout wrapped with ThemeProvider
│   │   ├── index.tsx       # Landing page (hero, services, testimonials preview, FAQ)
│   │   ├── about.tsx       # About page, team bios, principles, and timeline
│   │   ├── services.tsx    # Detailed service tiers and pricing
│   │   ├── testimonials.tsx# Dynamic student reviews and scholarship acceptance stories
│   │   ├── contact.tsx     # Consultation booking form and contact info
│   │   ├── blog.index.tsx  # Blog post listing
│   │   ├── blog.$slug.tsx  # Single blog article view
│   │   └── staff.tsx       # Admin dashboard (Blog & Testimonials CRUD + Undo/Revert)
│   ├── app.css             # Base application styles
│   ├── styles.css          # Tailwind CSS v4 root, dark variables, & animations
│   └── router.tsx          # TanStack router setup
├── supabase/
│   ├── schema.sql          # Main schema & security policies
│   └── testimonials-migration.sql # Testimonials table migration & seed data
├── vite.config.ts          # Vite and Nitro bundler configuration
└── package.json            # Project dependencies and npm scripts
```

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server on `http://localhost:8080` |
| `npm run build` | Builds the production bundle with Nitro into `.output/` |
| `npm run staff:provision` | Provisions a staff/admin test user for the `/staff` dashboard |
| `npm run test` | Runs the Vitest test suite |
| `npm run lint` | Runs ESLint to check for code quality and formatting issues |
| `npm run format` | Runs Prettier across the codebase |

---

## Security & Roles Guidelines

- **Public Reads**: Handled client-side and via server functions (`src/lib/posts.functions.ts`) using the public publishable key.
- **Admin Writes**: Handled in `/staff` via the browser Supabase client with PostgreSQL Row-Level Security (RLS) enforcing `has_role(auth.uid(), 'staff')` or `'admin'`.
- **Public Registration**: Disabled by default. New staff members must be granted appropriate roles by an administrator.

---

## License

This project is licensed under the [MIT License](LICENSE).
