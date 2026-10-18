import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BookOpenCheck, ArrowRight, Search, Clock, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site-chrome";
import { listPosts } from "@/lib/posts.functions";

const postsQuery = queryOptions({
  queryKey: ["posts"],
  queryFn: () => listPosts(),
});

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Daily Blog and Admissions Insights — Elite Edu Consult" },
      {
        name: "description",
        content:
          "Daily guidance on university admissions, scholarships, study abroad tips, SAT coaching, and visa interviews from Elite Edu Consult.",
      },
      { property: "og:title", content: "Daily Blog — Elite Edu Consult" },
      {
        property: "og:description",
        content:
          "Educational insights and scholarship updates from our consultants at Legon Campus.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(postsQuery),
  component: Blog,
});

function Blog() {
  const { data: posts } = useSuspenseQuery(postsQuery);
  const [search, setSearch] = useState("");

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero
        eyebrow="Admissions and Scholarship Guide"
        title="Insights for Ambitious Students"
        text="Stay informed with proven application strategies, scholarship deadlines, and test preparation advice from our expert advisory team."
      />

      <section className="mx-auto max-w-7xl px-4 py-16">
        {/* Search bar */}
        <div className="mx-auto max-w-md">
          <div className="relative">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by keyword or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-input bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold shadow-xs"
            />
          </div>
        </div>

        {/* Posts grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.id}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="card-hover group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div>
                {p.cover_url ? (
                  <img
                    src={p.cover_url}
                    alt={p.title}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-44 w-full bg-gradient-to-r from-navy to-slate-800 flex items-center justify-center text-gold/40">
                    <BookOpenCheck className="h-10 w-10" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                    <span>
                      {new Date(p.created_at).toLocaleDateString("en-GB", {
                        dateStyle: "medium",
                      })}
                    </span>
                    <span>·</span>
                    <span>{p.author_name}</span>
                  </div>

                  <h2 className="mt-2.5 font-display text-xl font-bold text-primary group-hover:text-amber-800 transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-gold transition-colors">
                <span>Read complete guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <BookOpenCheck className="mx-auto h-12 w-12 text-muted-foreground/40" />
              <p className="mt-4 font-display text-lg font-bold text-primary">
                No matching articles found
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try searching with different terms or reset your query.
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-4 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-navy"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
