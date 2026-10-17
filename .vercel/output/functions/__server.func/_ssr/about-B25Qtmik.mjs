import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Target, k as Award, n as Users, s as ShieldCheck, y as Image } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./site-chrome-Dt4zF2mG.mjs";
import { n as teamMembers } from "./about-BRA-ENdI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-B25Qtmik.js
var import_jsx_runtime = require_jsx_runtime();
var consultingImg = "/images/consulting.jpg";
var values = [
	{
		icon: ShieldCheck,
		title: "Uncompromising Integrity",
		text: "We provide honest, transparent evaluations. We never make false promises; we deliver authentic, strategic paths to admissions and funding."
	},
	{
		icon: Target,
		title: "Student-Centred Mentorship",
		text: "Every student has unique gifts and aspirations. Our advisory programs are tailored to individual goals, academic strengths, and financial profiles."
	},
	{
		icon: Award,
		title: "Commitment to Excellence",
		text: "From drafting persuasive personal statements to rigorous SAT coaching, we hold ourselves and our students to the highest global academic standards."
	},
	{
		icon: Users,
		title: "Lifelong Partnership",
		text: "Our relationship doesn't end at acceptance. We assist with visa filing, accommodation, course registration, and ongoing career guidance."
	}
];
var milestones = [
	{
		year: "2014",
		title: "Founded at Legon Campus",
		text: "Established to guide senior high school leavers through complex university admissions in Ghana."
	},
	{
		year: "2018",
		title: "International Admissions Expansion",
		text: "Launched study abroad placements across the USA, Canada, and the UK with dedicated scholarship advisory."
	},
	{
		year: "2021",
		title: "Digital SAT & NSMQ Science Clinics",
		text: "Inaugurated state-of-the-art preparatory masterclasses resulting in multiple 1450+ SAT scores and NSMQ champions."
	},
	{
		year: "2025+",
		title: "$2.8M+ in Student Scholarships",
		text: "Celebrated placing over 850 students with millions of dollars in financial aid, merit awards, and research assistantships."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Story & Leadership",
			title: "Dedicated to Your Academic Future",
			text: "Founded on Legon Campus, Elite Edu Consult is led by passionate educators, physicians, and academic advisors bridging ambitious African learners with premier higher education worldwide."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-to-b from-secondary/50 via-background to-secondary/30 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800",
							children: "Leadership & Consultants"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl",
							children: "Meet Our Team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground",
							children: "Passionate founders, advisors, and essay strategists devoted to your academic journey and university admissions success."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch",
					children: teamMembers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex flex-col justify-between rounded-3xl border-2 border-border/70 bg-card p-8 sm:p-10 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-gold/40 via-gold to-amber-500 rounded-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy via-slate-800 to-navy text-gold shadow-lg font-display text-xl sm:text-2xl font-extrabold border-2 border-gold/30 group-hover:scale-105 group-hover:border-gold transition-all",
										children: member.initials
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-muted-foreground border border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-3 w-3 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Photo Update" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl sm:text-2xl font-extrabold text-navy tracking-tight leading-snug group-hover:text-amber-800 transition-colors",
										children: member.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2.5 inline-block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 border border-gold/30",
											children: member.role
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 border-t border-border/70 pt-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm sm:text-base leading-relaxed text-foreground/80 whitespace-pre-line font-sans",
										children: member.bio
									})
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 border-t border-border/50 pt-4 flex items-center justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-gold",
									children: "Elite Edu Consult"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Legon Campus" })]
							})
						]
					}, member.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
						children: "Our Vision"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl",
						children: "Unlocking Access to World-Class Education for Every Deserving Student"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: "At Elite Edu Consult, we believe that talent and dedication should never be limited by lack of guidance or information. Navigating higher education admissions can be overwhelming — whether deciphering university cut-off points in Ghana or navigating competitive US scholarship pools."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: "Our seasoned consultants provide the roadmap, coaching, and advocacy needed to turn ambition into acceptance letters."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border-l-4 border-gold bg-secondary/80 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-primary",
							children: "Our Core Mission"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-foreground/90",
							children: "To empower students at every stage of their academic journey through ethical advice, personalized mentoring, admissions strategy, scholarship placement, test preparation, and career development."
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border shadow-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: consultingImg,
							alt: "Advisory consultation at Elite Edu Consult",
							className: "h-full w-full object-cover",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -left-5 rounded-xl border border-gold/40 bg-navy p-5 text-white shadow-xl hidden sm:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold text-gold uppercase tracking-wider",
								children: "Headquarters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-bold text-white mt-0.5",
								children: "Legon Campus, Accra"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/70",
								children: "University of Ghana"
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/60 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
							children: "What Guides Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl",
							children: "Our Guiding Principles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Built on transparency, academic rigor, and unwavering commitment to our students' welfare."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-bold text-primary",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-xs leading-relaxed text-muted-foreground",
								children: v.text
							})
						]
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-5xl px-4 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
					children: "Our Journey"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl",
					children: "A Decade of Student Success"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-8 border-l-2 border-gold/40 pl-6 sm:pl-8 ml-4 sm:ml-10",
				children: milestones.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -left-[31px] sm:-left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-navy" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-extrabold text-amber-700",
							children: m.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0.5 font-display text-xl font-bold text-primary",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: m.text
						})
					]
				}, m.year))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy py-20 text-white text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full gold-gradient-badge px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold",
						children: "Begin Your Journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl font-extrabold sm:text-4xl",
						children: "Ready to Plan Your Next Step?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/80",
						children: "Book an in-person appointment at our Legon Campus office or join us virtually from anywhere in the world."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-xl bg-gold px-7 py-3 font-bold text-navy shadow-lg transition-transform hover:scale-105",
							children: "Talk to a Consultant Today"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:border-gold hover:text-gold transition-colors",
							children: "Explore Our Services"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
