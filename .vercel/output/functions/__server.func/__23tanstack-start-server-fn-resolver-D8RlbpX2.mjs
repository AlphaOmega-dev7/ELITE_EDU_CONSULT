//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-D8RlbpX2.js
var manifest = {
	"11a3e5221d8be21b9fdddebef660f538b92679319c39b4d5a1df7f1408533287": {
		functionName: "listPosts_createServerFn_handler",
		importer: () => import("./_ssr/posts.functions-t1NraiBN.mjs")
	},
	"5fa0e1a8f894fe880b3ff84d6a2474de9ec0bf68d0c0f07b627714005af6dffa": {
		functionName: "getPost_createServerFn_handler",
		importer: () => import("./_ssr/posts.functions-t1NraiBN.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
