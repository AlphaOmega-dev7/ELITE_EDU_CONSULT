import { n as listPosts } from "./posts.functions-_2Dy4iI0.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cob9rKNV.js
var postsQuery = queryOptions({
	queryKey: ["posts"],
	queryFn: () => listPosts()
});
//#endregion
export { postsQuery as t };
