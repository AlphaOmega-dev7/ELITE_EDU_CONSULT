import { r as __toESM } from "../_runtime.mjs";
import { l as testimonials, n as faqs, s as stats, t as contact, u as whyUs } from "./site-BNdyCXq-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, C as Compass, E as ChevronRight, O as BookOpenCheck, S as Earth, T as CircleCheck, a as Star, b as GraduationCap, d as School, h as MessageCircle, k as Award, o as Sparkles, p as Plane, s as ShieldCheck, x as FileCheckCorner } from "../_libs/lucide-react.mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as postsQuery } from "./routes-Cob9rKNV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C850LDo6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var graduatesImg = "/images/graduates.jpg";
var consultingImg = "/images/consulting.jpg";
var pillars = [
	{
		icon: Earth,
		tag: "Global Opportunities",
		title: "Study Abroad & Scholarships",
		text: "Direct admissions to accredited universities in the US, UK, Canada, and Europe. Comprehensive scholarship matching and visa filing support.",
		link: "/services"
	},
	{
		icon: School,
		tag: "Domestic Excellence",
		title: "All Ghana Universities",
		text: "Targeted application support for UG Legon, KNUST, UCC, Nursing Training Colleges, and Teacher Training institutions across Ghana.",
		link: "/services"
	},
	{
		icon: BookOpenCheck,
		tag: "High-Score Mastery",
		title: "SAT, NSMQ & WASSCE Prep",
		text: "Digital SAT masterclasses (1400+ target), rigorous NSMQ science & math training, and WASSCE/Nov-Dec grade booster classes.",
		link: "/services"
	},
	{
		icon: Award,
		tag: "Financial Support",
		title: "Scholarship Advisory",
		text: "Over $2.8M in financial awards secured. We help you write winning essays, craft persuasive statements, and pass funding interviews.",
		link: "/services"
	}
];
var steps = [
	{
		num: "01",
		title: "Comprehensive Profile Evaluation",
		text: "We evaluate your academic transcripts, career interests, and budget to build a customized admission and funding roadmap.",
		icon: Compass
	},
	{
		num: "02",
		title: "Institution & Scholarship Matching",
		text: "Target matched high-ranking universities and scholarship funds with optimal acceptance probabilities.",
		icon: School
	},
	{
		num: "03",
		title: "Application Dossier & Test Coaching",
		text: "Polishing personal statements, recommendation letters, CVs, and intensive coaching for SAT or entrance exams.",
		icon: FileCheckCorner
	},
	{
		num: "04",
		title: "Visa Preparation & Departure Briefing",
		text: "Rigorous 1-on-1 embassy mock interviews, accommodation booking, and comprehensive pre-departure briefing.",
		icon: Plane
	}
];
function Index() {
	const { data: posts } = useSuspenseQuery(postsQuery);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-navy text-navy-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: graduatesImg,
						alt: "Celebrating African university graduates",
						className: "h-full w-full object-cover object-center opacity-30 brightness-95",
						fetchPriority: "high"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent pointer-events-none" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full gold-gradient-badge px-4 py-1.5 text-xs font-bold text-gold shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Accredited Educational Advisory · Legon Campus" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight",
							children: [
								"Your Gateway to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-gold via-amber-200 to-amber-400 bg-clip-text text-transparent",
									children: "Academic Success"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl",
							children: "Professional guidance, university admissions support, scholarship placement, Digital SAT and NSMQ coaching, and student visa guidance for ambitious learners in Ghana and worldwide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold via-amber-400 to-amber-500 px-7 py-3.5 text-base font-bold text-navy shadow-lg transition-all hover:scale-105 hover:shadow-gold/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Free Consultation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-white/10 hover:text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Services" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: contact.whatsapp,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chat with an Advisor" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-wrap items-center gap-6 border-t border-white/15 pt-8 text-xs text-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Certified Consultants" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "98.4% Visa Approval Rate" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$2.8M+ Scholarships Won" })]
								})
							]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 -mt-10 mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-xl sm:grid-cols-4 sm:p-8",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-r border-border/60 last:border-none px-2 sm:px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-extrabold text-primary sm:text-4xl text-amber-700",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-bold text-foreground",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: s.sub
						})
					]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
						children: "What We Do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl",
						children: "Comprehensive Guidance at Every Stage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-muted-foreground",
						children: "Whether your goal is an Ivy League campus in the USA or admission into University of Ghana Medical School, our experienced team provides strategic support."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: p.link,
					className: "card-hover group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-navy transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-5 block text-xs font-bold uppercase tracking-wider text-gold",
							children: p.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl font-bold text-primary group-hover:text-amber-800 transition-colors",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: p.text
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-gold transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learn more" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					})]
				}, p.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/60 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-border shadow-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: consultingImg,
								alt: "Educational consultant meeting with student",
								className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-6 -right-4 rounded-xl border border-gold/30 bg-navy p-5 text-white shadow-xl max-w-xs hidden sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-white text-sm",
									children: "Legon Campus HQ"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-gold",
									children: "In-Person & Virtual Advisory"
								})] })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
							children: "The Elite Advantage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl",
							children: "Every Student Deserves World-Class Guidance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-muted-foreground",
							children: "We believe that every student possesses unique potential. We strip away the stress, guesswork, and confusion from the admissions process to help you earn your place at the world's best institutions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-3 sm:grid-cols-2",
							children: whyUs.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-foreground leading-snug",
									children: w
								})]
							}, w))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								className: "inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learn about our mission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/testimonials",
								className: "text-sm font-semibold text-primary hover:text-gold transition-colors",
								children: "View student acceptance stories →"
							})]
						})
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
						children: "Proven Process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl",
						children: "Your 4-Step Pathway to Success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-muted-foreground",
						children: "A structured, stress-free methodology refined over a decade of successful student enrollments."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: steps.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-amber-800 font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(st.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-extrabold text-muted-foreground/30",
								children: st.num
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-lg font-bold text-primary",
							children: st.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: st.text
						})
					] })
				}, st.num))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-navy py-24 text-navy-foreground relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full gold-gradient-badge px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold",
							children: "Proven Track Record"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl",
							children: "Real Students. Real Results."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-white/75",
							children: "Read how our consultants have helped Ghanaian students unlock prestigious scholarships and admissions."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/testimonials",
						className: "inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore all student stories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: testimonials.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-hover flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 text-amber-400",
							children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-400" }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-white/90 italic",
							children: [
								"\"",
								t.quote,
								"\""
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border-t border-white/10 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-white text-base",
										children: t.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-gold font-medium",
										children: t.program
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/60",
										children: t.institution
									})
								] })
							}), t.award && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 inline-block rounded-md bg-gold/15 px-2.5 py-1 text-[11px] font-semibold text-gold",
								children: ["🏆 ", t.award]
							})]
						})]
					}, t.id))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-4 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
							children: "Got Questions?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl",
							children: "Frequently Asked Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Clear answers to common questions about study abroad, test preparation, and admissions."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 space-y-4",
					children: faqs.map((f, idx) => {
						const isOpen = openFaq === idx;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenFaq(isOpen ? null : idx),
								className: "flex w-full items-center justify-between p-5 text-left font-display text-base font-bold text-primary hover:text-amber-800 transition-colors",
								"aria-expanded": isOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `h-5 w-5 shrink-0 text-gold transition-transform duration-200 ${isOpen ? "rotate-90" : ""}` })]
							}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-border/50 px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground",
								children: f.a
							})]
						}, f.q);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-xl bg-secondary/80 p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-foreground",
						children: "Have a question that isn't answered here?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: contact.whatsapp,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ask our consultants directly on WhatsApp" })]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
						children: "Insights & Updates"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl",
						children: "Latest from our Educational Blog"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "flex items-center gap-1 text-sm font-bold text-primary hover:text-gold transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View all articles" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: [posts.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: p.slug },
						className: "card-hover group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [p.cover_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.cover_url,
							alt: p.title,
							loading: "lazy",
							className: "h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-40 w-full bg-gradient-to-r from-navy to-slate-800 flex items-center justify-center text-gold/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenCheck, { className: "h-10 w-10" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold text-gold",
									children: [
										new Date(p.created_at).toLocaleDateString("en-GB", { dateStyle: "medium" }),
										" ",
										"· ",
										p.author_name
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-lg font-bold text-primary group-hover:text-amber-800 transition-colors",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground",
									children: p.excerpt
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-6 pb-6 pt-0 flex items-center gap-1 text-xs font-bold text-primary group-hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read article" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					}, p.id)), posts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground col-span-3 text-center py-10",
						children: "New articles and application guides coming soon."
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Index as component };
