import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { slugify } from "@/lib/site";

export const Route = createFileRoute("/staff")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Staff Portal — Elite Edu Consult" },
      { name: "description", content: "Staff and executives sign in to write and manage the daily blog." },
      { property: "og:title", content: "Staff Portal — Elite Edu Consult" },
      { property: "og:description", content: "Manage the Elite Edu Consult daily blog." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Staff,
});

type Post = { id: string; title: string; slug: string; excerpt: string; content: string; cover_url: string | null; author_name: string; published: boolean; created_at: string };
const empty = { id: "", title: "", excerpt: "", content: "", cover_url: "", author_name: "", published: true };

function Staff() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);
  if (!ready) return <div className="py-24 text-center text-muted-foreground">Loading…</div>;
  return session ? <Dashboard email={session.user.email ?? ""} userId={session.user.id} /> : <Login />;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) toast.error(error.message);
  }
  async function reset() {
    if (!email) { toast.error("Enter your email first"); return; }
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
    if (error) toast.error(error.message); else toast.success("Check your email for a reset link");
  }
  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <div className="rounded-lg border border-t-4 border-t-gold bg-card p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-primary">Staff sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">For Elite Edu Consult staff and executives to manage the daily blog.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div><Label htmlFor="pw">Password</Label><Input id="pw" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          <Button type="submit" className="w-full" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</Button>
          <button type="button" onClick={reset} className="w-full text-sm text-muted-foreground hover:text-primary">Forgot password?</button>
        </form>
      </div>
    </div>
  );
}

function Dashboard({ email, userId }: { email: string; userId: string }) {
  const qc = useQueryClient();
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);

  async function load() {
    const { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    if (error) toast.error(error.message); else setPosts(data as Post[]);
  }
  useEffect(() => { load(); }, []);

  async function save(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      title: form.title,
      excerpt: form.excerpt,
      content: form.content,
      cover_url: form.cover_url || null,
      author_name: form.author_name || "Elite Edu Consult",
      published: form.published,
    };
    const { error } = form.id
      ? await supabase.from("posts").update(payload).eq("id", form.id)
      : await supabase.from("posts").insert({ ...payload, author_id: userId, slug: `${slugify(form.title)}-${Date.now().toString(36)}` });
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success(form.id ? "Post updated" : "Post published");
    setForm(empty);
    qc.invalidateQueries({ queryKey: ["posts"] });
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this post?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    qc.invalidateQueries({ queryKey: ["posts"] });
    load();
  }

  async function signOut() {
    await qc.cancelQueries();
    await supabase.auth.signOut();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Blog manager</h1>
          <p className="text-sm text-muted-foreground">Signed in as {email}</p>
        </div>
        <Button variant="outline" onClick={signOut}>Sign out</Button>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <form onSubmit={save} className="space-y-4 rounded-lg border border-t-4 border-t-gold bg-card p-6 lg:col-span-3">
          <h2 className="text-xl font-semibold">{form.id ? "Edit post" : "New post"}</h2>
          <div><Label>Title</Label><Input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
          <div><Label>Short summary</Label><Input value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></div>
          <div><Label>Content</Label><Textarea required rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Leave a blank line between paragraphs" /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label>Author name</Label><Input value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })} placeholder="Elite Edu Consult" /></div>
            <div><Label>Cover image link (optional)</Label><Input value={form.cover_url} onChange={(e) => setForm({ ...form, cover_url: e.target.value })} placeholder="https://…" /></div>
          </div>
          <label className="flex items-center gap-2 text-sm"><Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} /> Visible on website</label>
          <div className="flex gap-2">
            <Button type="submit" disabled={saving}>{saving ? "Saving…" : form.id ? "Update post" : "Publish post"}</Button>
            {form.id && <Button type="button" variant="ghost" onClick={() => setForm(empty)}>Cancel</Button>}
          </div>
        </form>
        <div className="space-y-3 lg:col-span-2">
          <h2 className="text-xl font-semibold">All posts</h2>
          {posts.map((p) => (
            <div key={p.id} className="rounded-md border p-4">
              <p className="font-semibold text-primary">{p.title}</p>
              <p className="text-xs text-muted-foreground">{new Date(p.created_at).toLocaleDateString("en-GB")} · {p.published ? "Live" : "Hidden"}</p>
              <div className="mt-2 flex gap-3 text-sm">
                <button className="text-primary hover:text-gold" onClick={() => setForm({ id: p.id, title: p.title, excerpt: p.excerpt, content: p.content, cover_url: p.cover_url ?? "", author_name: p.author_name, published: p.published })}>Edit</button>
                <button className="text-destructive" onClick={() => remove(p.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
