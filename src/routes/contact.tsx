import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site-chrome";
import { contact } from "@/lib/site";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us and Book Consultation — Elite Edu Consult" },
      {
        name: "description",
        content:
          "Book your educational consultation with Elite Edu Consult at Legon Campus, Accra. In-person and virtual advisory for admissions, scholarships, and visa processing.",
      },
      { property: "og:title", content: "Contact Elite Edu Consult" },
      {
        property: "og:description",
        content:
          "Schedule an appointment with our admissions and scholarship consultants at Legon Campus.",
      },
    ],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "Study Abroad Admissions (USA, UK, Canada, Europe)",
  "Ghana University Applications (UG, KNUST, UCC)",
  "Scholarship Placement and Essay Assistance",
  "Digital SAT Preparation and Coaching",
  "NSMQ Training and Science Classes",
  "WASSCE / Nov-Dec Remedial Classes",
  "Student Visa Processing and Mock Interviews",
  "Career Counselling and Profiling",
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    level: "",
    destination: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please provide your name and phone/WhatsApp number.");
      return;
    }
    if (!formData.service) {
      toast.error("Please select a service of interest.");
      return;
    }
    setIsSubmitted(true);
    toast.success("Consultation request received! Our team will reach out within 24 hours.");
  };

  const whatsappInquiryUrl = `https://wa.me/233540720749?text=${encodeURIComponent(
    `Hello Elite Edu Consult, my name is ${formData.name || "a prospective student"}.${
      formData.service ? ` I am interested in ${formData.service}.` : ""
    } Could we schedule a consultation?`
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Consultation and Inquiries"
        title="Let's Plan Your Academic Future"
        text="Visit our office at Legon Campus, Accra, or book a free 1-on-1 virtual consultation with our accredited educational advisors."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* LEFT: FORM (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Calendar className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-gold">
                  Free Initial Assessment
                </span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
                Schedule Your Consultation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details below and an educational consultant will review your profile and contact you promptly.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                  <h3 className="mt-3 font-display text-xl font-bold text-emerald-900 dark:text-emerald-300">
                    Consultation Request Confirmed!
                  </h3>
                  <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-400">
                    Thank you, <span className="font-bold">{formData.name}</span>. An advisor will contact you at {formData.phone} shortly.
                  </p>
                  <div className="mt-6">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Follow Up Immediately on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ama Mensah"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +233 540 720 749"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. student@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Service of Interest *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="" disabled>
                        Select a service of interest...
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                        Current Education Level
                      </label>
                      <select
                        value={formData.level}
                        onChange={(e) =>
                          setFormData({ ...formData, level: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      >
                        <option value="">
                          Select current education level...
                        </option>
                        <option value="High School Student (Form 2 / Form 3)">
                          High School Student (SHS 2 / SHS 3)
                        </option>
                        <option value="High School Graduate (WASSCE)">
                          High School Graduate (WASSCE)
                        </option>
                        <option value="Undergraduate Student">
                          Current Undergraduate
                        </option>
                        <option value="Bachelor's Degree Holder (Postgraduate)">
                          Bachelor's Degree Holder (Postgraduate)
                        </option>
                        <option value="Parent / Guardian">Parent / Guardian</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                        Target Country / Region
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. USA, Canada, UK, or Ghana"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({ ...formData, destination: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Tell us about your goals or questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your intended course, current grades, or specific concerns..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-base font-bold text-navy shadow-md transition-all hover:bg-amber-400"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Consultation Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: CONTACT DETAILS (5 Cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* WhatsApp Priority Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600 to-teal-800 p-7 text-white shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Fastest Response</h3>
                  <p className="text-xs text-emerald-100">Direct WhatsApp Advisory</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-emerald-50">
                Prefer immediate assistance? Text our lead consultants directly on WhatsApp to get prompt feedback on your questions.
              </p>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-emerald-900 shadow-md transition-all hover:bg-emerald-50"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>

            {/* Office Information Cards */}
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs space-y-6">
              <h3 className="font-display text-lg font-bold text-primary">
                Contact and Office Details
              </h3>

              <div className="flex items-start gap-3.5 text-sm">
                <MapPin className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">Legon Campus Office</p>
                  <p className="text-muted-foreground">{contact.address}</p>
                  <p className="text-xs text-gold font-medium mt-0.5">
                    Close to main student hubs and transportation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm">
                <Phone className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">Phone Consultation</p>
                  <a
                    href={contact.phoneHref}
                    className="font-medium text-primary hover:text-gold"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm">
                <Mail className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">Email Inquiries</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-medium text-primary hover:text-gold break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm">
                <Clock className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">Working Hours</p>
                  <p className="text-muted-foreground">Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM – 4:00 PM</p>
                  <p className="text-xs text-muted-foreground">Sunday: By appointment only</p>
                </div>
              </div>
            </div>

            {/* Virtual Consultation Notice */}
            <div className="rounded-2xl border border-gold/20 bg-amber-500/5 p-6">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                <Sparkles className="h-4 w-4 text-gold" />
                <span>Living Outside Accra?</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                We regularly conduct virtual consultations via Zoom and Google Meet for students and families in Kumasi, Takoradi, Tamale, and abroad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
