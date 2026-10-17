import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowRight, O as BookOpenCheck, u as Search } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./site-chrome-Dt4zF2mG.mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as postsQuery } from "./blog.index-CdBC2ojf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-AED2w8Pr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Blog() {
	const { data: posts } = useSuspenseQuery(postsQuery);
	const [search, setSearch] = (0, import_react.useState)("");
	const filtered = posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Admissions & Scholarship Guide",
		title: "Insights for Ambitious Students",
		text: "Stay informed with proven application strategies, scholarship deadlines, and test preparation advice from our expert advisory team."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					placeholder: "Search articles by keyword or topic...",
					value: search,
					onChange: (e) => setSearch(e.target.value),
					className: "w-full rounded-xl border border-input bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold shadow-xs"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
			children: [filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog/$slug",
				params: { slug: p.slug },
				className: "card-hover group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [p.cover_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.cover_url,
					alt: p.title,
					loading: "lazy",
					className: "h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-44 w-full bg-gradient-to-r from-navy to-slate-800 flex items-center justify-center text-gold/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenCheck, { className: "h-10 w-10" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-semibold text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(p.created_at).toLocaleDateString("en-GB", { dateStyle: "medium" }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.author_name })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2.5 font-display text-xl font-bold text-primary group-hover:text-amber-800 transition-colors",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground",
							children: p.excerpt
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 pb-6 pt-0 flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-gold transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read complete guide" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })]
				})]
			}, p.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-full py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenCheck, { className: "mx-auto h-12 w-12 text-muted-foreground/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-lg font-bold text-primary",
						children: "No matching articles found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Try searching with different terms or reset your query."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSearch(""),
						className: "mt-4 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-navy",
						children: "Clear Search"
					})
				]
			})]
		})]
	})] });
}
//#endregion
export { Blog as component };
