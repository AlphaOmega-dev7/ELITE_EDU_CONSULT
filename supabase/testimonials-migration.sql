-- Elite Edu Consult — Testimonials Table Migration
-- Run in Supabase Dashboard SQL Editor:
-- https://supabase.com/dashboard/project/_/sql/new

-- Create testimonials table
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  institution text not null default '',
  program text not null default '',
  award text,
  quote text not null,
  rating integer not null default 5 check (rating >= 1 and rating <= 5),
  tag text not null default 'Study Abroad',
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select on public.testimonials to anon;
grant select, insert, update, delete on public.testimonials to authenticated;
grant all on public.testimonials to service_role;
alter table public.testimonials enable row level security;

-- Public can read published testimonials
create policy "Public reads published testimonials"
  on public.testimonials
  for select
  to anon, authenticated
  using (published = true);

-- Staff can read all testimonials (including unpublished)
create policy "Staff read all testimonials"
  on public.testimonials
  for select
  to authenticated
  using (public.has_role(auth.uid(), 'staff') or public.has_role(auth.uid(), 'admin'));

-- Staff can insert testimonials
create policy "Staff insert testimonials"
  on public.testimonials
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'staff') or public.has_role(auth.uid(), 'admin'));

-- Staff can update testimonials
create policy "Staff update testimonials"
  on public.testimonials
  for update
  to authenticated
  using (public.has_role(auth.uid(), 'staff') or public.has_role(auth.uid(), 'admin'));

-- Staff can delete testimonials
create policy "Staff delete testimonials"
  on public.testimonials
  for delete
  to authenticated
  using (public.has_role(auth.uid(), 'staff') or public.has_role(auth.uid(), 'admin'));

-- Auto-touch updated_at
drop trigger if exists testimonials_touch on public.testimonials;
create trigger testimonials_touch
  before update on public.testimonials
  for each row execute function public.touch_updated_at();

-- Seed initial testimonials from site.ts data
insert into public.testimonials (id, name, institution, program, award, quote, rating, tag, published, sort_order)
values
  (
    'a1b2c3d4-0001-0001-0001-000000000001',
    'Kwesi Agyemang',
    'University of Toronto, Canada',
    'BSc Computer Science',
    '$40,000 International Scholar Award',
    'Elite Edu Consult made what seemed impossible a reality. From reviewing my essays to drilling me through visa interview questions, their consultants were with me every step of the way.',
    5, 'Study Abroad', true, 1
  ),
  (
    'a1b2c3d4-0002-0002-0002-000000000002',
    'Abena Osei-Bonsu',
    'University of Ghana Medical School',
    'MB ChB Medicine and Surgery',
    'Direct Entry Admission',
    'Getting into UG Medical School is cutthroat. The team at Elite Edu Consult helped me strategize my subject choices, perfect my interview confidence, and navigate the application process seamlessly.',
    5, 'Ghana Universities', true, 2
  ),
  (
    'a1b2c3d4-0003-0003-0003-000000000003',
    'Priscilla Danso',
    'Columbia University, USA',
    'BA Economics and International Relations',
    'SAT Score 1490 and Full Financial Aid',
    'The SAT classes at Elite Edu Consult are easily the best in Accra. My score jumped from 1180 to 1490 in just 10 weeks! That opened the door to my full-ride scholarship at Columbia.',
    5, 'Test Prep and SAT', true, 3
  ),
  (
    'a1b2c3d4-0004-0004-0004-000000000004',
    'Michael Mensah',
    'University of Manchester, UK',
    'MSc Renewable Energy Engineering',
    'UK Tier 4 Visa Approved in 12 Days',
    'I had previously been refused a visa when applying on my own. Elite Edu Consult completely restructured my financial proof of funds and statement of purpose. My visa was granted without a hitch!',
    5, 'Visa Guidance', true, 4
  ),
  (
    'a1b2c3d4-0005-0005-0005-000000000005',
    'Emmanuel Boakye',
    'KNUST, Kumasi',
    'BSc Computer Engineering',
    'Hall and Hostel Placement Secured',
    'They didn''t just help me gain admission to KNUST; they also guided me to secure great hostel accommodation right on campus, which saved my parents immense stress.',
    5, 'Ghana Universities', true, 5
  ),
  (
    'a1b2c3d4-0006-0006-0006-000000000006',
    'Sarah Addo',
    'Arizona State University, USA',
    'BSc Biomedical Sciences',
    '$28,000 Dean''s Merit Scholarship',
    'Professionalism at its peak. The consultants genuinely care about you as an individual. Whenever I had doubts or panic before deadlines, they were just a WhatsApp message away.',
    5, 'Scholarships', true, 6
  )
on conflict (id) do nothing;
