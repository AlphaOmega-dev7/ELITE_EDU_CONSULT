import { r as __toESM } from "../_runtime.mjs";
import { l as testimonials, t as contact } from "./site-BNdyCXq-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Star, b as GraduationCap, f as Quote, h as MessageCircle, k as Award, l as Send } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./site-chrome-Dt4zF2mG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-VWww6uZw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All Stories",
	"Study Abroad",
	"Ghana Universities",
	"Test Prep & SAT",
	"Visa Guidance",
	"Scholarships"
];
function TestimonialsPage() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All Stories");
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		university: "",
		program: "",
		message: ""
	});
	const filtered = activeCategory === "All Stories" ? testimonials : testimonials.filter((t) => t.tag === activeCategory);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.name || !formData.university || !formData.message) {
			toast.error("Please fill in all required fields.");
			return;
		}
		toast.success("Thank you for sharing your story! Our team will review and publish it.");
		setFormData({
			name: "",
			university: "",
			program: "",
			message: ""
		});
		setFormOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Student Success Stories",
		title: "Where Ambition Meets Achievement",
		text: "Discover how our educational consultants have empowered hundreds of students to achieve admissions, full scholarships, and visas across Ghana and worldwide."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center justify-center gap-2 border-b border-border pb-8",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActiveCategory(c),
					className: `rounded-full px-5 py-2 text-xs font-bold transition-all ${activeCategory === c ? "bg-primary text-primary-foreground shadow-md scale-105" : "bg-secondary text-foreground hover:bg-secondary/80"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-hover relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-amber-500",
								children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-500" }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-gold/15 px-3 py-0.5 text-[11px] font-bold text-amber-800",
								children: t.tag
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mt-5 h-8 w-8 text-gold/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-relaxed text-foreground/90 italic",
							children: [
								"\"",
								t.quote,
								"\""
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-border/60 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-slate-800 font-display font-bold text-white shadow-xs",
								children: t.name.split(" ").map((n) => n[0]).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-bold text-primary",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.program
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-amber-700",
									children: t.institution
								})
							] })]
						}), t.award && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5 shrink-0 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.award })]
						})]
					})]
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 rounded-2xl border border-gold/30 bg-gradient-to-br from-secondary via-background to-secondary p-8 text-center sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-2xl font-bold text-primary sm:text-3xl",
						children: "Have You Succeeded With Elite Edu Consult?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-xl text-sm text-muted-foreground",
						children: "We take immense pride in celebrating our alumni. Share your acceptance story and inspire the next cohort of students!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFormOpen(!formOpen),
							className: "rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90",
							children: formOpen ? "Close Form" : "Share Your Story"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.whatsapp,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-xl border border-primary/30 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send Message on WhatsApp" })]
						})]
					}),
					formOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mx-auto mt-10 max-w-lg rounded-xl border border-border bg-card p-6 text-left shadow-lg space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-primary",
								children: "Submit Your Testimonial"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold text-foreground",
								children: "Your Full Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								placeholder: "e.g. Kwame Mensah",
								value: formData.name,
								onChange: (e) => setFormData({
									...formData,
									name: e.target.value
								}),
								className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-foreground",
									children: "University / College *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									placeholder: "e.g. University of Manchester",
									value: formData.university,
									onChange: (e) => setFormData({
										...formData,
										university: e.target.value
									}),
									className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold text-foreground",
									children: "Programme of Study"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "e.g. BSc Computer Science",
									value: formData.program,
									onChange: (e) => setFormData({
										...formData,
										program: e.target.value
									}),
									className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold text-foreground",
								children: "Your Experience / Story *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 4,
								placeholder: "Tell us about your journey and how Elite Edu Consult guided you...",
								value: formData.message,
								onChange: (e) => setFormData({
									...formData,
									message: e.target.value
								}),
								className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-2.5 text-sm font-bold text-navy hover:bg-amber-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Submit My Story" })]
							})
						]
					})
				]
			})
		]
	})] });
}
//#endregion
export { TestimonialsPage as component };
