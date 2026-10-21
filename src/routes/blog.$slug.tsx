import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, User, MessageCircle, Share2, GraduationCap } from "lucide-react";
import { getPost } from "@/lib/posts.functions";
import { contact } from "@/lib/site";
import { toast } from "sonner";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPost({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Post not found — Elite Edu Consult" },
          { name: "robots", content: "noindex" },
        ],
      };
    const meta = [
      { title: `${loaderData.title} — Elite Edu Consult` },
      { name: "description", content: loaderData.excerpt },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.excerpt },
      { property: "og:type", content: "article" },
    ];
    if (loaderData.cover_url?.startsWith("https://")) {
      meta.push(
        { property: "og:image", content: loaderData.cover_url },
        { name: "twitter:image", content: loaderData.cover_url } as never
      );
    }
    return { meta };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <GraduationCap className="mx-auto h-12 w-12 text-gold" />
      <h1 className="mt-4 font-display text-3xl font-bold text-primary">
        Article Not Found
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The article you are looking for may have been updated or moved.
      </p>
      <Link
        to="/blog"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-navy"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Blog Directory</span>
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const shareWhatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${post.title}\nRead more: ${typeof window !== "undefined" ? window.location.href : ""}`
  )}`;

  return (
    <article className="pb-24">
      {/* HEADER */}
      <header className="relative bg-gradient-to-b from-navy via-navy to-slate-900 py-16 text-navy-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Articles</span>
          </Link>

          <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-white/10 pt-4 text-xs text-white/75">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold" />
              <span>
                {new Date(post.created_at).toLocaleDateString("en-GB", {
                  dateStyle: "long",
                })}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-gold" />
              <span>By {post.author_name}</span>
            </span>
          </div>
        </div>
      </header>

      {/* COVER IMAGE */}
      {post.cover_url && (
        <div className="mx-auto max-w-4xl px-4 -mt-10">
          <img
            src={post.cover_url}
            alt={post.title}
            className="max-h-[460px] w-full rounded-2xl object-cover shadow-2xl border border-border"
          />
        </div>
      )}

      {/* ARTICLE CONTENT */}
      <div className="mx-auto max-w-3xl px-4 pt-12">
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-6 text-base sm:text-lg leading-relaxed">
          {post.content.split(/\n{2,}/).map((para, i) => (
            <p key={i} className="whitespace-pre-line leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Share buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-border py-6">
          <div className="flex items-center gap-2 text-xs font-bold text-foreground">
            <Share2 className="h-4 w-4 text-gold" />
            <span>Share this article:</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={shareWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={handleShare}
              className="rounded-lg border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground hover:bg-secondary"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* CONSULTATION ADVISORY CALLOUT */}
        <div className="mt-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-secondary via-background to-secondary p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <span className="rounded-full bg-gold/15 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              Personalized Guidance
            </span>
            <h3 className="mt-2 font-display text-xl font-bold text-primary">
              Need Help With Your Application?
            </h3>
            <p className="mt-1 text-xs text-muted-foreground max-w-md leading-relaxed">
              Our consultants can review your documents, match eligible scholarships, and prepare you for embassy interviews.
            </p>
          </div>
          <div className="mt-5 sm:mt-0 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-navy shadow-md hover:bg-amber-400"
            >
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
