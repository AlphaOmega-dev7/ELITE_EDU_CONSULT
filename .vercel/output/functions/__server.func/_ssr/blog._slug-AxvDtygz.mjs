import { J as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getPost } from "./posts.functions-92hjOnWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-AxvDtygz.js
var $$splitComponentImporter = () => import("./blog._slug-CvRexkTK.mjs");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-BA49TRTh.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: async ({ params }) => {
		const post = await getPost({ data: { slug: params.slug } });
		if (!post) throw notFound();
		return post;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Post not found — Elite Edu Consult" }, {
			name: "robots",
			content: "noindex"
		}] };
		const meta = [
			{ title: `${loaderData.title} — Elite Edu Consult` },
			{
				name: "description",
				content: loaderData.excerpt
			},
			{
				property: "og:title",
				content: loaderData.title
			},
			{
				property: "og:description",
				content: loaderData.excerpt
			},
			{
				property: "og:type",
				content: "article"
			}
		];
		if (loaderData.cover_url?.startsWith("https://")) meta.push({
			property: "og:image",
			content: loaderData.cover_url
		}, {
			name: "twitter:image",
			content: loaderData.cover_url
		});
		return { meta };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
