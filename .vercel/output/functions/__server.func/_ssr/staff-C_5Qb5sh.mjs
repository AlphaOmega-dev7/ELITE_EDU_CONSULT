import { r as __toESM } from "../_runtime.mjs";
import { o as slugify } from "./site-BNdyCXq-.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { t as supabase } from "./client-2YYzpkUw.mjs";
import { i as cn, n as Input, r as Label, t as Button } from "./label-Cq5SXjoZ.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/staff-C_5Qb5sh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var empty = {
	id: "",
	title: "",
	excerpt: "",
	content: "",
	cover_url: "",
	author_name: "",
	published: true
};
function Staff() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setReady(true);
		});
		const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
		return () => data.subscription.unsubscribe();
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-24 text-center text-muted-foreground",
		children: "Loading…"
	});
	return session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {
		email: session.user.email ?? "",
		userId: session.user.id
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Login, {});
}
function Login() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		setBusy(false);
		if (error) toast.error(error.message);
	}
	async function reset() {
		if (!email) {
			toast.error("Enter your email first");
			return;
		}
		const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
		if (error) toast.error(error.message);
		else toast.success("Check your email for a reset link");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-md px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-t-4 border-t-gold bg-card p-8 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold text-primary",
					children: "Staff sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "For Elite Edu Consult staff and executives to manage the daily blog."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "pw",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "pw",
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							disabled: busy,
							children: busy ? "Signing in…" : "Sign in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: reset,
							className: "w-full text-sm text-muted-foreground hover:text-primary",
							children: "Forgot password?"
						})
					]
				})
			]
		})
	});
}
function Dashboard({ email, userId }) {
	const qc = useQueryClient();
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(empty);
	const [saving, setSaving] = (0, import_react.useState)(false);
	async function load() {
		const { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
		if (error) toast.error(error.message);
		else setPosts(data);
	}
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	async function save(e) {
		e.preventDefault();
		setSaving(true);
		const payload = {
			title: form.title,
			excerpt: form.excerpt,
			content: form.content,
			cover_url: form.cover_url || null,
			author_name: form.author_name || "Elite Edu Consult",
			published: form.published
		};
		const { error } = form.id ? await supabase.from("posts").update(payload).eq("id", form.id) : await supabase.from("posts").insert({
			...payload,
			author_id: userId,
			slug: `${slugify(form.title)}-${Date.now().toString(36)}`
		});
		setSaving(false);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success(form.id ? "Post updated" : "Post published");
		setForm(empty);
		qc.invalidateQueries({ queryKey: ["posts"] });
		load();
	}
	async function remove(id) {
		if (!confirm("Delete this post?")) return;
		const { error } = await supabase.from("posts").delete().eq("id", id);
		if (error) {
			toast.error(error.message);
			return;
		}
		qc.invalidateQueries({ queryKey: ["posts"] });
		load();
	}
	async function signOut() {
		await qc.cancelQueries();
		await supabase.auth.signOut();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold text-primary",
				children: "Blog manager"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: ["Signed in as ", email]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: signOut,
				children: "Sign out"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: save,
				className: "space-y-4 rounded-lg border border-t-4 border-t-gold bg-card p-6 lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: form.id ? "Edit post" : "New post"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						required: true,
						value: form.title,
						onChange: (e) => setForm({
							...form,
							title: e.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Short summary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.excerpt,
						onChange: (e) => setForm({
							...form,
							excerpt: e.target.value
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Content" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						required: true,
						rows: 12,
						value: form.content,
						onChange: (e) => setForm({
							...form,
							content: e.target.value
						}),
						placeholder: "Leave a blank line between paragraphs"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Author name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.author_name,
							onChange: (e) => setForm({
								...form,
								author_name: e.target.value
							}),
							placeholder: "Elite Edu Consult"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Cover image link (optional)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.cover_url,
							onChange: (e) => setForm({
								...form,
								cover_url: e.target.value
							}),
							placeholder: "https://…"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: form.published,
							onCheckedChange: (v) => setForm({
								...form,
								published: v
							})
						}), " Visible on website"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: saving,
							children: saving ? "Saving…" : form.id ? "Update post" : "Publish post"
						}), form.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => setForm(empty),
							children: "Cancel"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "All posts"
				}), posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-primary",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								new Date(p.created_at).toLocaleDateString("en-GB"),
								" · ",
								p.published ? "Live" : "Hidden"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-primary hover:text-gold",
								onClick: () => setForm({
									id: p.id,
									title: p.title,
									excerpt: p.excerpt,
									content: p.content,
									cover_url: p.cover_url ?? "",
									author_name: p.author_name,
									published: p.published
								}),
								children: "Edit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-destructive",
								onClick: () => remove(p.id),
								children: "Delete"
							})]
						})
					]
				}, p.id))]
			})]
		})]
	});
}
//#endregion
export { Staff as component };
