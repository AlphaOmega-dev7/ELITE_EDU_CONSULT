import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  CheckCircle2,
  Globe2,
  School,
  BookOpenCheck,
  Award,
  ArrowRight,
  ShieldCheck,
  Star,
  MessageCircle,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Users,
  Compass,
  FileCheck2,
  Plane,
} from "lucide-react";
import graduatesImg from "@/assets/graduates.jpg";
import consultingImg from "@/assets/consulting.jpg";
import { stats, testimonials, whyUs, faqs, contact } from "@/lib/site";
import { listPosts } from "@/lib/posts.functions";

const postsQuery = queryOptions({
  queryKey: ["posts"],
  queryFn: () => listPosts(),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Edu Consult — Premier Admissions & Educational Consultancy" },
      {
        name: "description",
        content:
          "Accredited educational consultancy based at Legon Campus, University of Ghana. Expert university admissions in Ghana and abroad, scholarships, SAT and NSMQ test prep, and visa advisory.",
      },
      {
        property: "og:title",
        content: "Elite Edu Consult — Your Gateway to Academic Success",
      },
      {
        property: "og:description",
        content:
          "Unlock admission to prestigious universities in Ghana, USA, Canada, and the UK with certified consultants.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(postsQuery),
  component: Index,
});

const pillars = [
  {
    icon: Globe2,
    tag: "Global Opportunities",
    title: "Study Abroad & Scholarships",
    text: "Direct admissions to accredited universities in the US, UK, Canada, and Europe. Comprehensive scholarship matching and visa filing support.",
    link: "/services",
  },
  {
    icon: School,
    tag: "Domestic Excellence",
    title: "All Ghana Universities",
    text: "Targeted application support for UG Legon, KNUST, UCC, Nursing Training Colleges, and Teacher Training institutions across Ghana.",
    link: "/services",
  },
  {
    icon: BookOpenCheck,
    tag: "High-Score Mastery",
    title: "SAT, NSMQ & WASSCE Prep",
    text: "Digital SAT masterclasses (1400+ target), rigorous NSMQ science & math training, and WASSCE/Nov-Dec grade booster classes.",
    link: "/services",
  },
  {
    icon: Award,
    tag: "Financial Support",
    title: "Scholarship Advisory",
    text: "Over $2.8M in financial awards secured. We help you write winning essays, craft persuasive statements, and pass funding interviews.",
    link: "/services",
  },
];

const steps = [
  {
    num: "01",
    title: "Comprehensive Profile Evaluation",
    text: "We evaluate your academic transcripts, career interests, and budget to build a customized admission and funding roadmap.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Institution & Scholarship Matching",
    text: "Target matched high-ranking universities and scholarship funds with optimal acceptance probabilities.",
    icon: School,
  },
  {
    num: "03",
    title: "Application Dossier & Test Coaching",
    text: "Polishing personal statements, recommendation letters, CVs, and intensive coaching for SAT or entrance exams.",
    icon: FileCheck2,
  },
  {
    num: "04",
    title: "Visa Preparation & Departure Briefing",
    text: "Rigorous 1-on-1 embassy mock interviews, accommodation booking, and comprehensive pre-departure briefing.",
    icon: Plane,
  },
];

function Index() {
  const { data: posts } = useSuspenseQuery(postsQuery);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0">
          <img
            src={graduatesImg}
            alt="Celebrating African university graduates"
            className="h-full w-full object-cover object-center opacity-30 brightness-95"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full gold-gradient-badge px-4 py-1.5 text-xs font-bold text-gold shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>Accredited Educational Advisory · Legon Campus</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
              Your Gateway to <br />
              <span className="bg-gradient-to-r from-gold via-amber-200 to-amber-400 bg-clip-text text-transparent">
                Academic Success
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Professional guidance, university admissions support, scholarship placement, Digital SAT and NSMQ coaching, and student visa guidance for ambitious learners in Ghana and worldwide.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold via-amber-400 to-amber-500 px-7 py-3.5 text-base font-bold text-navy shadow-lg transition-all hover:scale-105 hover:shadow-gold/30"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-white/10 hover:text-gold"
              >
                <span>Explore Services</span>
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat with an Advisor</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/15 pt-8 text-xs text-white/80">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" />
                <span>Certified Consultants</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span>98.4% Visa Approval Rate</span>
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gold" />
                <span>$2.8M+ Scholarships Won</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS IMPACT BAR */}
      <section className="relative z-10 -mt-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-xl sm:grid-cols-4 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="border-r border-border/60 last:border-none px-2 sm:px-4">
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl text-amber-700">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-bold text-foreground">{s.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS OF SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Comprehensive Guidance at Every Stage
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Whether your goal is an Ivy League campus in the USA or admission into University of Ghana Medical School, our experienced team provides strategic support.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link
              key={p.title}
              to={p.link}
              className="card-hover group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm transition-all"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <p.icon className="h-6 w-6" />
                </div>
                <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-gold">
                  {p.tag}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-primary group-hover:text-amber-800 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-gold transition-colors">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US & ABOUT SPLIT */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Consulting image with badge */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
                <img
                  src={consultingImg}
                  alt="Educational consultant meeting with student"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-xl border border-gold/30 bg-navy p-5 text-white shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy font-bold">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Legon Campus HQ</p>
                    <p className="text-xs text-gold">In-Person & Virtual Advisory</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Why Choose Us */}
            <div>
              <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                The Elite Advantage
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
                Every Student Deserves World-Class Guidance
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We believe that every student possesses unique potential. We strip away the stress, guesswork, and confusion from the admissions process to help you earn your place at the world's best institutions.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {whyUs.map((w) => (
                  <div
                    key={w}
                    className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5 shadow-xs"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <span className="text-xs font-semibold text-foreground leading-snug">{w}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <span>Learn about our mission</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/testimonials"
                  className="text-sm font-semibold text-primary hover:text-gold transition-colors"
                >
                  View student acceptance stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP PATHWAY TO UNIVERSITY */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
            Proven Process
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Your 4-Step Pathway to Success
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A structured, stress-free methodology refined over a decade of successful student enrollments.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((st) => (
            <div
              key={st.num}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-amber-800 font-bold">
                    <st.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl font-extrabold text-muted-foreground/30">
                    {st.num}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-primary">
                  {st.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {st.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED TESTIMONIALS SPOTLIGHT */}
      <section className="bg-navy py-24 text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="rounded-full gold-gradient-badge px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                Proven Track Record
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
                Real Students. Real Results.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/75">
                Read how our consultants have helped Ghanaian students unlock prestigious scholarships and admissions.
              </p>
            </div>
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
            >
              <span>Explore all student stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="card-hover flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/90 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-base">{t.name}</p>
                      <p className="text-xs text-gold font-medium">{t.program}</p>
                      <p className="text-xs text-white/60">{t.institution}</p>
                    </div>
                  </div>
                  {t.award && (
                    <div className="mt-3 inline-block rounded-md bg-gold/15 px-2.5 py-1 text-[11px] font-semibold text-gold">
                      🏆 {t.award}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="mx-auto max-w-4xl px-4 py-24">
        <div className="text-center">
          <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
            Got Questions?
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Clear answers to common questions about study abroad, test preparation, and admissions.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-display text-base font-bold text-primary hover:text-amber-800 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <ChevronRight
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border/50 px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl bg-secondary/80 p-6 text-center">
          <p className="text-sm font-medium text-foreground">
            Have a question that isn't answered here?
          </p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:underline"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Ask our consultants directly on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* LATEST FROM BLOG */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                Insights & Updates
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
                Latest from our Educational Blog
              </h2>
            </div>
            <Link
              to="/blog"
              className="flex items-center gap-1 text-sm font-bold text-primary hover:text-gold transition-colors"
            >
              <span>View all articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <Link
                key={p.id}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="card-hover group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div>
                  {p.cover_url ? (
                    <img
                      src={p.cover_url}
                      alt={p.title}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-40 w-full bg-gradient-to-r from-navy to-slate-800 flex items-center justify-center text-gold/50">
                      <BookOpenCheck className="h-10 w-10" />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-gold">
                      {new Date(p.created_at).toLocaleDateString("en-GB", {
                        dateStyle: "medium",
                      })}{" "}
                      · {p.author_name}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-primary group-hover:text-amber-800 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center gap-1 text-xs font-bold text-primary group-hover:text-gold">
                  <span>Read article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}

            {posts.length === 0 && (
              <p className="text-muted-foreground col-span-3 text-center py-10">
                New articles and application guides coming soon.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
