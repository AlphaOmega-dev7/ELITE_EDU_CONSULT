import { r as __toESM } from "../_runtime.mjs";
import { c as testPrep, i as local, r as international } from "./site-BNdyCXq-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, O as BookOpenCheck, S as Earth, T as CircleCheck, d as School } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./site-chrome-Dt4zF2mG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-6c-VZC7s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("all");
	const renderServiceCard = (item, categoryBadge) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-hover flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold text-amber-800",
					children: categoryBadge
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-xl font-bold text-primary",
				children: item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: item.text
			}),
			item.highlights && item.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2 border-t border-border/60 pt-4",
				children: item.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2 text-xs text-foreground/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h })]
				}, h))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 border-t border-border/60 pt-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-xs font-bold text-foreground transition-all hover:bg-gold hover:text-navy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquire About This Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
			})
		})]
	}, item.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our Advisory Services",
		title: "Tailored Support for Every Academic Journey",
		text: "From your first course selection to securing international scholarships and student visas, our specialized consultants provide end-to-end guidance."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("all"),
						className: `rounded-full px-6 py-2.5 text-xs font-bold transition-all ${activeTab === "all" ? "bg-primary text-primary-foreground shadow-md scale-105" : "bg-secondary text-foreground hover:bg-secondary/80"}`,
						children: [
							"All Services (",
							international.length + local.length + testPrep.length,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("international"),
						className: `flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${activeTab === "international" ? "bg-primary text-primary-foreground shadow-md scale-105" : "bg-secondary text-foreground hover:bg-secondary/80"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Study Abroad & Scholarships (",
							international.length,
							")"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("local"),
						className: `flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${activeTab === "local" ? "bg-primary text-primary-foreground shadow-md scale-105" : "bg-secondary text-foreground hover:bg-secondary/80"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(School, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Ghana Universities & Colleges (",
							local.length,
							")"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("testprep"),
						className: `flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${activeTab === "testprep" ? "bg-primary text-primary-foreground shadow-md scale-105" : "bg-secondary text-foreground hover:bg-secondary/80"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenCheck, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Test Preparation & Classes (",
							testPrep.length,
							")"
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 space-y-20",
				children: [
					(activeTab === "all" || activeTab === "international") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 border-b border-border pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-widest text-gold",
								children: "Global Admissions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl font-bold text-primary sm:text-3xl",
								children: "International Education & Scholarships"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Applications to leading universities across the United States, Canada, the United Kingdom, Europe, and Australia."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: international.map((i) => renderServiceCard(i, "International Study"))
					})] }),
					(activeTab === "all" || activeTab === "local") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 border-b border-border pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-widest text-gold",
								children: "Domestic Admissions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl font-bold text-primary sm:text-3xl",
								children: "Ghana Higher Education Admissions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Expert guidance for public and private Ghanaian universities, nursing training colleges, and colleges of education."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: local.map((l) => renderServiceCard(l, "Ghana Higher Education"))
					})] }),
					(activeTab === "all" || activeTab === "testprep") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 border-b border-border pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-widest text-gold",
								children: "Test Mastery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl font-bold text-primary sm:text-3xl",
								children: "Standardized Test Preparation & Clinics"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Proven test-taking strategies, mock tests, and subject drills designed for competitive academic success."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: testPrep.map((t) => renderServiceCard(t, "Examination Prep"))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-24 rounded-2xl bg-navy p-8 text-white sm:p-12 text-center relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full gold-gradient-badge px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold",
							children: "Get Started Today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl font-bold sm:text-3xl",
							children: "Not sure which programme or service fits your goals?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/80",
							children: "Schedule an obligation-free 30-minute profile evaluation with one of our certified consultants."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-xl bg-gold px-7 py-3 font-bold text-navy shadow-lg transition-transform hover:scale-105",
								children: "Book Your Profile Evaluation"
							})
						})
					]
				})
			})
		]
	})] });
}
//#endregion
export { ServicesPage as component };
