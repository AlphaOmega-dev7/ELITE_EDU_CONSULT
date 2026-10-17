import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function publicClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) return null;
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_")) {
          if (headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
          headers.set("apikey", key);
        }
        return fetch(input, { ...init, headers });
      },
    },
  });
}


export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_url: string | null;
  author_name: string;
  created_at: string;
};

export const listPosts = createServerFn({ method: "GET" }).handler(async (): Promise<PublicPost[]> => {
  const client = publicClient();
  if (!client) return [];
  const { data, error } = await client
    .from("posts")
    .select("id,title,slug,excerpt,content,cover_url,author_name,created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return [];
  }
  return data ?? [];
});

export const getPost = createServerFn({ method: "GET" })
  .validator((d: { slug: string }) => d)
  .handler(async ({ data }): Promise<PublicPost | null> => {
    const client = publicClient();
    if (!client) return null;
    const { data: post, error } = await client
      .from("posts")
      .select("id,title,slug,excerpt,content,cover_url,author_name,created_at")
      .eq("published", true)
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) console.error(error);
    return post ?? null;
  });
