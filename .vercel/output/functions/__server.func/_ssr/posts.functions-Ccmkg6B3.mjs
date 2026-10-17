import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/posts.functions-Ccmkg6B3.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function publicClient() {
	const url = process.env["SUPABASE_URL"];
	const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!url || !key) return null;
	return createClient(url, key, {
		auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(init?.headers);
			if (key.startsWith("sb_")) {
				if (headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
				headers.set("apikey", key);
			}
			return fetch(input, {
				...init,
				headers
			});
		} }
	});
}
var listPosts_createServerFn_handler = createServerRpc({
	id: "11a3e5221d8be21b9fdddebef660f538b92679319c39b4d5a1df7f1408533287",
	name: "listPosts",
	filename: "src/lib/posts.functions.ts"
}, (opts) => listPosts.__executeServer(opts));
var listPosts = createServerFn({ method: "GET" }).handler(listPosts_createServerFn_handler, async () => {
	const client = publicClient();
	if (!client) return [];
	const { data, error } = await client.from("posts").select("id,title,slug,excerpt,content,cover_url,author_name,created_at").eq("published", true).order("created_at", { ascending: false });
	if (error) {
		console.error(error);
		return [];
	}
	return data ?? [];
});
var getPost_createServerFn_handler = createServerRpc({
	id: "5fa0e1a8f894fe880b3ff84d6a2474de9ec0bf68d0c0f07b627714005af6dffa",
	name: "getPost",
	filename: "src/lib/posts.functions.ts"
}, (opts) => getPost.__executeServer(opts));
var getPost = createServerFn({ method: "GET" }).validator((d) => d).handler(getPost_createServerFn_handler, async ({ data }) => {
	const client = publicClient();
	if (!client) return null;
	const { data: post, error } = await client.from("posts").select("id,title,slug,excerpt,content,cover_url,author_name,created_at").eq("published", true).eq("slug", data.slug).maybeSingle();
	if (error) console.error(error);
	return post ?? null;
});
//#endregion
export { getPost_createServerFn_handler, listPosts_createServerFn_handler };
