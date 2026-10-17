import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { D as Calendar, c as Share2, h as MessageCircle, j as ArrowLeft, r as User } from "../_libs/lucide-react.mjs";
import { t as Route } from "./blog._slug-DT_fi_Us.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-DnA83r9v.js
var import_jsx_runtime = require_jsx_runtime();
function PostPage() {
	const post = Route.useLoaderData();
	const handleShare = () => {
		if (navigator.share) navigator.share({
			title: post.title,
			text: post.excerpt,
			url: window.location.href
		}).catch(() => {});
		else {
			navigator.clipboard.writeText(window.location.href);
			toast.success("Link copied to clipboard!");
		}
	};
	const shareWhatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${post.title}\nRead more: ${typeof window !== "undefined" ? window.location.href : ""}`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative bg-gradient-to-b from-navy via-navy to-slate-900 py-16 text-navy-foreground md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog",
							className: "inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to All Articles" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl leading-tight",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-6 border-t border-white/10 pt-4 text-xs text-white/75",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(post.created_at).toLocaleDateString("en-GB", { dateStyle: "long" }) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["By ", post.author_name] })]
							})]
						})
					]
				})
			}),
			post.cover_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl px-4 -mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.cover_url,
					alt: post.title,
					className: "max-h-[460px] w-full rounded-2xl object-cover shadow-2xl border border-border"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 pt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose prose-lg max-w-none text-foreground/90 space-y-6 text-base sm:text-lg leading-relaxed",
						children: post.content.split(/\n{2,}/).map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-line leading-relaxed",
							children: para
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-border py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-bold text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Share this article:" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: shareWhatsappUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-700",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleShare,
								className: "rounded-lg border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground hover:bg-secondary",
								children: "Copy Link"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-secondary via-background to-secondary p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-gold/15 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-amber-800",
								children: "Personalized Guidance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl font-bold text-primary",
								children: "Need Help With Your Application?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground max-w-md leading-relaxed",
								children: "Our consultants can review your documents, match eligible scholarships, and prepare you for embassy interviews."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 sm:mt-0 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-navy shadow-md hover:bg-amber-400",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Consultation" })
							})
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { PostPage as component };
