import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Globe2,
  School,
  BookOpenCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { PageHero } from "@/components/site-chrome";
import { international, local, testPrep, type Service } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Educational Services — Elite Edu Consult" },
      {
        name: "description",
        content:
          "Comprehensive admissions advisory, scholarship applications, student visa coaching, Ghana university applications, Digital SAT preparation, and NSMQ training from Legon Campus.",
      },
      { property: "og:title", content: "Services — Elite Edu Consult" },
      {
        property: "og:description",
        content:
          "Explore international education, domestic admissions, and test preparation services.",
      },
    ],
  }),
  component: ServicesPage,
});

type ServiceTab = "all" | "international" | "local" | "testprep";

function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("all");

  const renderServiceCard = (item: Service, categoryBadge: string) => (
    <div
      key={item.id}
      className="card-hover flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold text-amber-800">
            {categoryBadge}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-primary">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.text}
        </p>

        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-6 space-y-2 border-t border-border/60 pt-4">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-foreground/80">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 border-t border-border/60 pt-5">
        <Link
          to="/contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-xs font-bold text-foreground transition-all hover:bg-gold hover:text-navy"
        >
          <span>Inquire About This Service</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <PageHero
        eyebrow="Our Advisory Services"
        title="Tailored Support for Every Academic Journey"
        text="From your first course selection to securing international scholarships and student visas, our specialized consultants provide end-to-end guidance."
      />

      {/* FILTER TABS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-full px-6 py-2.5 text-xs font-bold transition-all ${activeTab === "all"
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
          >
            All Services ({international.length + local.length + testPrep.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("international")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${activeTab === "international"
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
          >
            <Globe2 className="h-3.5 w-3.5" />
            <span>Study Abroad and Scholarships ({international.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("local")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${activeTab === "local"
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
          >
            <School className="h-3.5 w-3.5" />
            <span>Ghana Universities and Colleges ({local.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("testprep")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${activeTab === "testprep"
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
          >
            <BookOpenCheck className="h-3.5 w-3.5" />
            <span>Test Preparation and Classes ({testPrep.length})</span>
          </button>
        </div>

        {/* SERVICES CONTENT */}
        <div className="mt-14 space-y-20">
          {(activeTab === "all" || activeTab === "international") && (
            <div>
              <div className="mb-8 border-b border-border pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold">
                  Global Admissions
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold text-primary sm:text-3xl">
                  International Education and Scholarships
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Applications to leading universities across the United States, Canada, the United Kingdom, Europe, and Australia.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {international.map((i) =>
                  renderServiceCard(i, "International Study")
                )}
              </div>
            </div>
          )}

          {(activeTab === "all" || activeTab === "local") && (
            <div>
              <div className="mb-8 border-b border-border pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold">
                  Domestic Admissions
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold text-primary sm:text-3xl">
                  Ghana Higher Education Admissions
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Expert guidance for public and private Ghanaian universities, nursing training colleges, and colleges of education.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {local.map((l) => renderServiceCard(l, "Ghana Higher Education"))}
              </div>
            </div>
          )}

          {(activeTab === "all" || activeTab === "testprep") && (
            <div>
              <div className="mb-8 border-b border-border pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold">
                  Test Mastery
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold text-primary sm:text-3xl">
                  Standardized Test Preparation and Clinics
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Proven test-taking strategies, mock tests, and subject drills designed for competitive academic success.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {testPrep.map((t) => renderServiceCard(t, "Examination Prep"))}
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM CONSULTATION BANNER */}
        <div className="mt-24 rounded-2xl bg-navy p-8 text-white sm:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="rounded-full gold-gradient-badge px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
              Get Started Today
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              Not sure which programme or service fits your goals?
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Schedule an obligation-free 30-minute profile evaluation with one of our certified consultants.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-gold px-7 py-3 font-bold text-navy shadow-lg transition-transform hover:scale-105"
              >
                Book Your Profile Evaluation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
