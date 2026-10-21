import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  GraduationCap,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  Moon,
  Sun,
} from "lucide-react";
import { contact, nav } from "@/lib/site";
import { useTheme } from "@/hooks/use-theme";

export function TopBar() {
  return (
    <div className="hidden border-b border-navy-foreground/10 bg-navy/95 text-navy-foreground/80 text-xs md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            <span>{contact.location}, University of Ghana, Accra</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold" />
            <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span>{contact.phone}</span>
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gold font-medium hover:underline"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-amber-600 text-gold-foreground shadow-md transition-transform group-hover:scale-105">
        <GraduationCap className="h-6 w-6 stroke-[2.2]" />
        <div className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-navy text-gold">
          <Award className="h-2.5 w-2.5" />
        </div>
      </div>
      <div className="leading-tight">
        <span className="block font-display text-lg font-bold tracking-tight text-white group-hover:text-gold transition-colors">
          Elite Edu Consult
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-widest text-gold/90">
          Academic and Global Admissions
        </span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="sticky top-0 z-50">
      <TopBar />
      <header className="glass-header text-navy-foreground border-b border-white/10 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-sm font-medium text-white/85 transition-colors hover:text-gold"
                activeProps={{
                  className: "text-gold font-semibold after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-gold after:rounded-full",
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="theme-toggle rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-gold"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold via-amber-400 to-amber-500 px-5 py-2.5 text-sm font-bold text-navy shadow-md transition-all hover:scale-[1.02] hover:shadow-gold/25"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="border-t border-white/10 bg-navy/98 px-5 py-6 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-3.5">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold"
                  activeProps={{ className: "bg-white/10 text-gold font-semibold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 border-t border-white/10 pt-5 space-y-3">
              <button
                onClick={toggleTheme}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 py-2.5 text-center text-sm font-semibold text-white/80 hover:bg-white/5"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 text-gold" /> : <Moon className="h-4 w-4 text-gold" />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-3 text-center text-sm font-bold text-navy"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gold/40 py-2.5 text-center text-sm font-semibold text-gold"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-gold bg-navy text-navy-foreground">
      {/* Pre-footer consultation bar */}
      <div className="border-b border-navy-foreground/10 bg-navy/70 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Ready to take the next step in your education?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Speak directly with an accredited educational consultant today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-all hover:bg-amber-400"
            >
              Request Free Consultation
            </Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: About */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-white/75">
            Premier educational consultancy dedicated to empowering students across Ghana and beyond. We guide your pathway to top universities locally and worldwide.
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-gold">
            <ShieldCheck className="h-4 w-4" />
            <span>Accredited Advisory and Certified Mentorship</span>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="font-display text-base font-semibold text-gold">Our Core Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link to="/services" className="hover:text-gold transition-colors">Study Abroad Admissions</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Scholarship Placement and Essays</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Ghana Universities and Colleges</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">SAT and Test Preparation</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">NSMQ and WASSCE Masterclasses</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Student Visa Advisory</Link></li>
          </ul>
        </div>

        {/* Col 3: Quick links */}
        <div>
          <h4 className="font-display text-base font-semibold text-gold">Quick Navigation</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/staff" className="text-xs text-white/50 hover:text-gold transition-colors">
                Staff and Admin Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div className="space-y-3.5 text-sm text-white/80">
          <h4 className="font-display text-base font-semibold text-gold">Consultation Office</h4>
          <p className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 shrink-0 text-gold mt-1" />
            <span>{contact.location}, University of Ghana, Legon, Accra</span>
          </p>
          <p className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-gold" />
            <a href={contact.phoneHref} className="hover:text-gold transition-colors">
              {contact.phone}
            </a>
          </p>
          <p className="flex items-center gap-2.5">
            <Mail className="h-4 w-4 shrink-0 text-gold" />
            <a href={`mailto:${contact.email}`} className="break-all hover:text-gold transition-colors">
              {contact.email}
            </a>
          </p>
          <p className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 shrink-0 text-gold" />
            <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy/90 py-5 text-center text-xs text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Elite Edu Consult. All Rights Reserved.</p>
          <p className="text-[11px] text-white/50">
            Empowering students to achieve their highest academic aspirations.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  ctaText,
  ctaLink,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-slate-900 py-16 text-navy-foreground md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <span className="inline-block rounded-full gold-gradient-badge px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold shadow-sm">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl md:text-6xl max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
        {text && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg leading-relaxed">
            {text}
          </p>
        )}
        {ctaText && ctaLink && (
          <div className="mt-8 flex justify-center">
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-bold text-navy shadow-lg transition-transform hover:scale-105"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function ServiceGrid({
  items,
}: {
  items: { title: string; text: string; icon?: any }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <div
          key={s.title}
          className="card-hover group relative flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-sm"
        >
          <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-gold to-amber-500 rounded-t-xl" />
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary group-hover:text-amber-800 transition-colors">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
          <div className="mt-6 pt-4 border-t border-border/60">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-amber-700 transition-colors"
            >
              <span>Inquire about this</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
