import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Heart,
  User,
  Image as ImageIcon,
} from "lucide-react";
import { PageHero } from "@/components/site-chrome";
import consultingImg from "@/assets/consulting.jpg";
import { whyUs, contact } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us & Our Team — Elite Edu Consult" },
      {
        name: "description",
        content:
          "Meet the leadership and consulting team at Elite Edu Consult: Patrick K. Sosu, Kirakoe Abdulrahim Halidu, Julius Kpebu, Nana Fremah Agyemang, and Sarah Eyram Agbevade.",
      },
      { property: "og:title", content: "About Elite Edu Consult — Meet Our Team" },
      {
        property: "og:description",
        content:
          "Educational advisory leadership, scholarship mentors, and admissions strategists at Legon Campus.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    text: "We provide honest, transparent evaluations. We never make false promises; we deliver authentic, strategic paths to admissions and funding.",
  },
  {
    icon: Target,
    title: "Student-Centred Mentorship",
    text: "Every student has unique gifts and aspirations. Our advisory programs are tailored to individual goals, academic strengths, and financial profiles.",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    text: "From drafting persuasive personal statements to rigorous SAT coaching, we hold ourselves and our students to the highest global academic standards.",
  },
  {
    icon: Users,
    title: "Lifelong Partnership",
    text: "Our relationship doesn't end at acceptance. We assist with visa filing, accommodation, course registration, and ongoing career guidance.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Founded at Legon Campus",
    text: "Established to guide senior high school leavers through complex university admissions in Ghana.",
  },
  {
    year: "2018",
    title: "International Admissions Expansion",
    text: "Launched study abroad placements across the USA, Canada, and the UK with dedicated scholarship advisory.",
  },
  {
    year: "2021",
    title: "Digital SAT & NSMQ Science Clinics",
    text: "Inaugurated state-of-the-art preparatory masterclasses resulting in multiple 1450+ SAT scores and NSMQ champions.",
  },
  {
    year: "2025+",
    title: "$2.8M+ in Student Scholarships",
    text: "Celebrated placing over 850 students with millions of dollars in financial aid, merit awards, and research assistantships.",
  },
];

export const teamMembers = [
  {
    name: "PATRICK K SOSU",
    role: "FOUNDER",
    initials: "PKS",
    bio: "Welcome — I'm Patrick K. Sosu, Founder of Elite EduConsult. Elite EduConsult was built from a deep passion for guiding students through successful applications and helping them secure admission into their desired programs abroad. I find genuine fulfillment in seeing students take the next step toward their academic goals, and every admission offer feels like a shared victory.\n\nHobbies: Video games, music, movies\nFun Fact: I believe good counseling, quality education, and honest advice can solve almost anything except hunger.",
  },
  {
    name: "KIRAKOE ABDULRAHIM HALIDU",
    role: "CO-FOUNDER & ADVISOR MANAGER",
    initials: "KAH",
    bio: "Co-Founder of Elite Edu Consult and a trained physician. I am passionate about helping individuals from underprivileged backgrounds achieve their academic and career goals through guidance and counseling.\n\nHobbies: research, skating, and riding.\nFun fact: I believe education can heal and transform lives just as powerfully as medicine.",
  },
  {
    name: "JULIUS KPEBU",
    role: "CO-FOUNDER & OPERATION MANAGER",
    initials: "JK",
    bio: "I am currently pursuing a Doctor of Pharmacy degree at the University of Ghana. I love to make life easy for others and to see them win.\n\nHobbies: Research, writing, movies.",
  },
  {
    name: "NANA FREMAH AGYEMANG",
    role: "ESSAY EVALUATOR",
    initials: "NFA",
    bio: "Offering a bachelor's degree in biomedical engineering at University of Ghana. I love poetry, storytelling and human history.\n\nHobbies: Reading, research and listening to music.\nSpecial qualities: public speaking, creative writing.",
  },
  {
    name: "SARAH EYRAM AGBEVADE",
    role: "MARKETING & CUSTOMER RELATIONS MANAGER",
    initials: "SEA",
    bio: "Dedicated to student advocacy, relationship building, and strategic communication. I ensure every prospective student and family receives tailored, empathetic guidance and prompt support throughout their admission journey.\n\nHobbies: Creative strategy, event coordination, and reading.\nFun fact: Connecting people with life-changing educational opportunities is my greatest passion.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Leadership"
        title="Dedicated to Your Academic Future"
        text="Founded on Legon Campus, Elite Edu Consult is led by passionate educators, physicians, and academic advisors bridging ambitious African learners with premier higher education worldwide."
      />

      {/* MEET THE TEAM SECTION - ENLARGED CARDS WITH PHOTO PLACEHOLDERS */}
      <section className="bg-gradient-to-b from-secondary/50 via-background to-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800">
              Leadership & Consultants
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Passionate founders, advisors, and essay strategists devoted to your academic journey and university admissions success.
            </p>
          </div>

          {/* Enlarged Cards Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative flex flex-col justify-between rounded-3xl border-2 border-border/70 bg-card p-8 sm:p-10 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/60"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-gold/40 via-gold to-amber-500 rounded-full" />

                <div>
                  {/* Monogram / Portrait Frame Placeholder ready for new photos */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy via-slate-800 to-navy text-gold shadow-lg font-display text-xl sm:text-2xl font-extrabold border-2 border-gold/30 group-hover:scale-105 group-hover:border-gold transition-all">
                      {member.initials}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-muted-foreground border border-border">
                      <ImageIcon className="h-3 w-3 text-gold" />
                      <span>Photo Update</span>
                    </span>
                  </div>

                  {/* Name & Function */}
                  <div className="mt-6">
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-navy tracking-tight leading-snug group-hover:text-amber-800 transition-colors">
                      {member.name}
                    </h3>
                    <div className="mt-2.5 inline-block">
                      <span className="rounded-full bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 border border-gold/30">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio Paragraphs */}
                  <div className="mt-6 border-t border-border/70 pt-5">
                    <p className="text-sm sm:text-base leading-relaxed text-foreground/80 whitespace-pre-line font-sans">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-8 border-t border-border/50 pt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold text-gold">Elite Edu Consult</span>
                  <span>Legon Campus</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
              Our Vision
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
              Unlocking Access to World-Class Education for Every Deserving Student
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At Elite Edu Consult, we believe that talent and dedication should never be limited by lack of guidance or information. Navigating higher education admissions can be overwhelming — whether deciphering university cut-off points in Ghana or navigating competitive US scholarship pools.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our seasoned consultants provide the roadmap, coaching, and advocacy needed to turn ambition into acceptance letters.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-gold bg-secondary/80 p-6">
              <h3 className="font-display text-xl font-bold text-primary">
                Our Core Mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                To empower students at every stage of their academic journey through ethical advice, personalized mentoring, admissions strategy, scholarship placement, test preparation, and career development.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <img
                src={consultingImg}
                alt="Advisory consultation at Elite Edu Consult"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-gold/40 bg-navy p-5 text-white shadow-xl hidden sm:block">
              <p className="text-xs font-bold text-gold uppercase tracking-wider">
                Headquarters
              </p>
              <p className="font-display text-base font-bold text-white mt-0.5">
                Legon Campus, Accra
              </p>
              <p className="text-xs text-white/70">University of Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
              What Guides Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
              Our Guiding Principles
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Built on transparency, academic rigor, and unwavering commitment to our students' welfare.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-primary">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <div className="text-center">
          <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
            Our Journey
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            A Decade of Student Success
          </h2>
        </div>

        <div className="mt-16 space-y-8 border-l-2 border-gold/40 pl-6 sm:pl-8 ml-4 sm:ml-10">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy shadow-sm">
                <span className="h-2 w-2 rounded-full bg-navy" />
              </div>
              <span className="font-display text-sm font-extrabold text-amber-700">
                {m.year}
              </span>
              <h3 className="mt-0.5 font-display text-xl font-bold text-primary">
                {m.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-navy py-20 text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="rounded-full gold-gradient-badge px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            Begin Your Journey
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Ready to Plan Your Next Step?
          </h2>
          <p className="mt-3 text-sm text-white/80">
            Book an in-person appointment at our Legon Campus office or join us virtually from anywhere in the world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-gold px-7 py-3 font-bold text-navy shadow-lg transition-transform hover:scale-105"
            >
              Talk to a Consultant Today
            </Link>
            <Link
              to="/services"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:border-gold hover:text-gold transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
