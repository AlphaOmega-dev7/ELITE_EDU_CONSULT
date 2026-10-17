import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CD4vMeN4.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts.functions-92hjOnWJ.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listPosts = createServerFn({ method: "GET" }).handler(createSsrRpc("11a3e5221d8be21b9fdddebef660f538b92679319c39b4d5a1df7f1408533287"));
var getPost = createServerFn({ method: "GET" }).validator((d) => d).handler(createSsrRpc("5fa0e1a8f894fe880b3ff84d6a2474de9ec0bf68d0c0f07b627714005af6dffa"));
//#endregion
export { listPosts as n, getPost as t };
