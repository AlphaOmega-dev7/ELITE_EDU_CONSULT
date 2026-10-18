import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Quote,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  MessageCircle,
  GraduationCap,
  Send,
} from "lucide-react";
import { PageHero } from "@/components/site-chrome";
import { testimonials, contact } from "@/lib/site";
import { toast } from "sonner";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Student Success Stories and Testimonials — Elite Edu Consult" },
      {
        name: "description",
        content:
          "Read authentic student reviews and scholarship acceptance stories from Elite Edu Consult clients across Ghana, the UK, USA, and Canada.",
      },
      { property: "og:title", content: "Student Testimonials — Elite Edu Consult" },
      {
        property: "og:description",
        content:
          "Explore real stories of admissions, scholarships, and visa approvals from our students.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const categories = [
  "All Stories",
  "Study Abroad",
  "Ghana Universities",
  "Test Prep and SAT",
  "Visa Guidance",
  "Scholarships",
];

function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    university: "",
    program: "",
    message: "",
  });

  const filtered =
    activeCategory === "All Stories"
      ? testimonials
      : testimonials.filter((t) => t.tag === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.university || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you for sharing your story! Our team will review and publish it.");
    setFormData({ name: "", university: "", program: "", message: "" });
    setFormOpen(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Student Success Stories"
        title="Where Ambition Meets Achievement"
        text="Discover how our educational consultants have empowered hundreds of students to achieve admissions, full scholarships, and visas across Ghana and worldwide."
      />

      <section className="mx-auto max-w-7xl px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border pb-8">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory(c)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${activeCategory === c
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="card-hover relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-0.5 text-[11px] font-bold text-amber-800">
                    {t.tag}
                  </span>
                </div>

                <Quote className="mt-5 h-8 w-8 text-gold/30" />

                <p className="mt-2 text-sm leading-relaxed text-foreground/90 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 border-t border-border/60 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-slate-800 font-display font-bold text-white shadow-xs">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-primary">
                      {t.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{t.program}</p>
                    <p className="text-xs font-semibold text-amber-700">
                      {t.institution}
                    </p>
                  </div>
                </div>

                {t.award && (
                  <div className="mt-4 flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-800">
                    <Award className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                    <span>{t.award}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Share your story CTA box */}
        <div className="mt-20 rounded-2xl border border-gold/30 bg-gradient-to-br from-secondary via-background to-secondary p-8 text-center sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">
            Have You Succeeded With Elite Edu Consult?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            We take immense pride in celebrating our alumni. Share your acceptance story and inspire the next cohort of students!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setFormOpen(!formOpen)}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
            >
              {formOpen ? "Close Form" : "Share Your Story"}
            </button>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/5"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              <span>Send Message on WhatsApp</span>
            </a>
          </div>

          {formOpen && (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 max-w-lg rounded-xl border border-border bg-card p-6 text-left shadow-lg space-y-4"
            >
              <h3 className="font-display text-lg font-bold text-primary">
                Submit Your Testimonial
              </h3>
              <div>
                <label className="block text-xs font-bold text-foreground">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kwame Mensah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-foreground">
                    University / College *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. University of Manchester"
                    value={formData.university}
                    onChange={(e) =>
                      setFormData({ ...formData, university: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground">
                    Programme of Study
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. BSc Computer Science"
                    value={formData.program}
                    onChange={(e) =>
                      setFormData({ ...formData, program: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground">
                  Your Experience / Story *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your journey and how Elite Edu Consult guided you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-2.5 text-sm font-bold text-navy hover:bg-amber-400"
              >
                <Send className="h-4 w-4" />
                <span>Submit My Story</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
