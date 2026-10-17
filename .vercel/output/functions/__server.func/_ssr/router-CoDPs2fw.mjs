import { _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteFooter, r as SiteHeader } from "./site-chrome-Dt4zF2mG.mjs";
import { t as Route$8 } from "./about-BRA-ENdI.mjs";
import { t as Route$9 } from "./blog._slug-AxvDtygz.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as postsQuery } from "./blog.index-Cyg_tF3d.mjs";
import { t as postsQuery$1 } from "./routes-CKG0GETK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CoDPs2fw.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles--zLEow5v.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Elite Edu Consult — Your Gateway to Academic Success" },
			{
				name: "description",
				content: "Admissions, scholarships, visa guidance, test preparation and career counselling for students in Ghana and abroad."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-CIuK7QD2.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Elite Edu Consult — Premier Admissions & Educational Consultancy" },
		{
			name: "description",
			content: "Accredited educational consultancy based at Legon Campus, University of Ghana. Expert university admissions in Ghana and abroad, scholarships, SAT and NSMQ test prep, and visa advisory."
		},
		{
			property: "og:title",
			content: "Elite Edu Consult — Your Gateway to Academic Success"
		},
		{
			property: "og:description",
			content: "Unlock admission to prestigious universities in Ghana, USA, Canada, and the UK with certified consultants."
		}
	] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(postsQuery$1),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-Bje3R8PE.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us & Book Consultation — Elite Edu Consult" },
		{
			name: "description",
			content: "Book your educational consultation with Elite Edu Consult at Legon Campus, Accra. In-person and virtual advisory for admissions, scholarships, and visa processing."
		},
		{
			property: "og:title",
			content: "Contact Elite Edu Consult"
		},
		{
			property: "og:description",
			content: "Schedule an appointment with our admissions and scholarship consultants at Legon Campus."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./reset-password-DGW7O6CF.mjs");
var Route$4 = createFileRoute("/reset-password")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Reset Password — Elite Edu Consult" },
		{
			name: "description",
			content: "Set a new password for your staff account."
		},
		{
			property: "og:title",
			content: "Reset Password — Elite Edu Consult"
		},
		{
			property: "og:description",
			content: "Set a new staff password."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services-6c-VZC7s.mjs");
var Route$3 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Educational Services — Elite Edu Consult" },
		{
			name: "description",
			content: "Comprehensive admissions advisory, scholarship applications, student visa coaching, Ghana university applications, Digital SAT preparation, and NSMQ training from Legon Campus."
		},
		{
			property: "og:title",
			content: "Services — Elite Edu Consult"
		},
		{
			property: "og:description",
			content: "Explore international education, domestic admissions, and test preparation services."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./staff-C_5Qb5sh.mjs");
var Route$2 = createFileRoute("/staff")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Staff Portal — Elite Edu Consult" },
		{
			name: "description",
			content: "Staff and executives sign in to write and manage the daily blog."
		},
		{
			property: "og:title",
			content: "Staff Portal — Elite Edu Consult"
		},
		{
			property: "og:description",
			content: "Manage the Elite Edu Consult daily blog."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./testimonials-VWww6uZw.mjs");
var Route$1 = createFileRoute("/testimonials")({
	head: () => ({ meta: [
		{ title: "Student Success Stories & Testimonials — Elite Edu Consult" },
		{
			name: "description",
			content: "Read authentic student reviews and scholarship acceptance stories from Elite Edu Consult clients across Ghana, the UK, USA, and Canada."
		},
		{
			property: "og:title",
			content: "Student Testimonials — Elite Edu Consult"
		},
		{
			property: "og:description",
			content: "Explore real stories of admissions, scholarships, and visa approvals from our students."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog.index-VZjJoL-W.mjs");
var Route = createFileRoute("/blog/")({
	head: () => ({ meta: [
		{ title: "Daily Blog & Admissions Insights — Elite Edu Consult" },
		{
			name: "description",
			content: "Daily guidance on university admissions, scholarships, study abroad tips, SAT coaching, and visa interviews from Elite Edu Consult."
		},
		{
			property: "og:title",
			content: "Daily Blog — Elite Edu Consult"
		},
		{
			property: "og:description",
			content: "Educational insights and scholarship updates from our consultants at Legon Campus."
		}
	] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(postsQuery),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$8.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var ResetPasswordRoute = Route$4.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$7
});
var ServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$7
});
var StaffRoute = Route$2.update({
	id: "/staff",
	path: "/staff",
	getParentRoute: () => Route$7
});
var TestimonialsRoute = Route$1.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$7
});
var BlogIndexRoute = Route.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ResetPasswordRoute,
	ServicesRoute,
	StaffRoute,
	TestimonialsRoute,
	BlogSlugRoute: Route$9.update({
		id: "/blog/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$7
	}),
	BlogIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
