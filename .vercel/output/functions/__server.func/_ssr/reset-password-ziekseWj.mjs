import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as supabase } from "./client-CC6RYlrr.mjs";
import { n as Input, r as Label, t as Button } from "./label-Cq5SXjoZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-ziekseWj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reset() {
	const [pw, setPw] = (0, import_react.useState)("");
	const navigate = useNavigate();
	async function submit(e) {
		e.preventDefault();
		const { error } = await supabase.auth.updateUser({ password: pw });
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Password updated");
		navigate({ to: "/staff" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "mx-auto max-w-md space-y-4 px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold text-primary",
				children: "Set a new password"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "New password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "password",
				required: true,
				minLength: 8,
				value: pw,
				onChange: (e) => setPw(e.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Save password"
			})
		]
	});
}
//#endregion
export { Reset as component };
