import { n as listPosts } from "./posts.functions-92hjOnWJ.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CKG0GETK.js
var postsQuery = queryOptions({
	queryKey: ["posts"],
	queryFn: () => listPosts()
});
//#endregion
export { postsQuery as t };
