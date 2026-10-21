import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { FileText, MessageSquareQuote, LogOut } from "lucide-react";
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

// ─── Types ────────────────────────────────────────────────────────────────────

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_url: string | null;
  author_name: string;
  published: boolean;
  created_at: string;
};

type Testimonial = {
  id: string;
  name: string;
  institution: string;
  program: string;
  award: string | null;
  quote: string;
  rating: number;
  tag: string;
  published: boolean;
  sort_order: number;
  created_at: string;
};

const TESTIMONIAL_TAGS = [
  "Study Abroad",
  "Ghana Universities",
  "Test Prep and SAT",
  "Visa Guidance",
  "Scholarships",
  "Student Mentoring",
];

const emptyPost = { id: "", title: "", excerpt: "", content: "", cover_url: "", author_name: "", published: true };
const emptyTestimonial: Omit<Testimonial, "created_at"> = {
  id: "", name: "", institution: "", program: "", award: "", quote: "", rating: 5, tag: "Study Abroad", published: true, sort_order: 0,
};

type Tab = "blog" | "testimonials";

// ─── Root component ────────────────────────────────────────────────────────────

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

// ─── Login ─────────────────────────────────────────────────────────────────────

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
        <p className="mt-2 text-sm text-muted-foreground">For Elite Edu Consult staff and executives to manage the daily blog and testimonials.</p>
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

// ─── Dashboard ─────────────────────────────────────────────────────────────────

function Dashboard({ email, userId }: { email: string; userId: string }) {
  const qc = useQueryClient();
  const [activeTab, setActiveTab] = useState<Tab>("blog");

  async function signOut() {
    await qc.cancelQueries();
    await supabase.auth.signOut();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground">Signed in as {email}</p>
        </div>
        <Button variant="outline" onClick={signOut} className="gap-2">
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex gap-1 rounded-lg bg-muted p-1 w-fit">
        <button
          onClick={() => setActiveTab("blog")}
          className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all ${
            activeTab === "blog"
              ? "bg-card text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FileText className="h-4 w-4" />
          Blog Posts
        </button>
        <button
          onClick={() => setActiveTab("testimonials")}
          className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all ${
            activeTab === "testimonials"
              ? "bg-card text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <MessageSquareQuote className="h-4 w-4" />
          Testimonials
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === "blog" ? (
          <BlogManager userId={userId} qc={qc} />
        ) : (
          <TestimonialsManager />
        )}
      </div>
    </div>
  );
}

// ─── Blog Manager ──────────────────────────────────────────────────────────────

function BlogManager({ userId, qc }: { userId: string; qc: ReturnType<typeof useQueryClient> }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState(emptyPost);
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
    setForm(emptyPost);
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

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <form onSubmit={save} className="space-y-4 rounded-lg border border-t-4 border-t-gold bg-card p-6 lg:col-span-3">
        <h2 className="text-xl font-semibold">{form.id ? "Edit post" : "New post"}</h2>
        <div><Label>Title</Label><Input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
        <div><Label>Short summary</Label><Input value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></div>
        <div><Label>Content</Label><Textarea required rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Leave a blank line between paragraphs" /></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Author name</Label><Input value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })} placeholder="Elite Edu Consult" /></div>
          <div><Label>Cover image link (optional)</Label><Input value={form.cover_url ?? ""} onChange={(e) => setForm({ ...form, cover_url: e.target.value })} placeholder="https://…" /></div>
        </div>
        <label className="flex items-center gap-2 text-sm"><Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} /> Visible on website</label>
        <div className="flex gap-2">
          <Button type="submit" disabled={saving}>{saving ? "Saving…" : form.id ? "Update post" : "Publish post"}</Button>
          {form.id && <Button type="button" variant="ghost" onClick={() => setForm(emptyPost)}>Cancel</Button>}
        </div>
      </form>
      <div className="space-y-3 lg:col-span-2">
        <h2 className="text-xl font-semibold">All posts</h2>
        {posts.length === 0 && <p className="text-sm text-muted-foreground">No posts yet.</p>}
        {posts.map((p) => (
          <div key={p.id} className="rounded-md border bg-card p-4">
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
  );
}

// ─── Testimonials Manager ──────────────────────────────────────────────────────

function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState<Omit<Testimonial, "created_at">>(emptyTestimonial);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      setTestimonials(data as Testimonial[]);
    }
  }
  useEffect(() => { load(); }, []);

  async function save(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      name: form.name,
      institution: form.institution,
      program: form.program,
      award: form.award || null,
      quote: form.quote,
      rating: form.rating,
      tag: form.tag,
      published: form.published,
      sort_order: form.sort_order,
    };
    const { error } = form.id
      ? await supabase.from("testimonials").update(payload).eq("id", form.id)
      : await supabase.from("testimonials").insert(payload);
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success(form.id ? "Testimonial updated" : "Testimonial added");
    setForm(emptyTestimonial);
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Testimonial deleted");
    load();
  }

  function edit(t: Testimonial) {
    setForm({
      id: t.id,
      name: t.name,
      institution: t.institution,
      program: t.program,
      award: t.award ?? "",
      quote: t.quote,
      rating: t.rating,
      tag: t.tag,
      published: t.published,
      sort_order: t.sort_order,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Form */}
      <form onSubmit={save} className="space-y-4 rounded-lg border border-t-4 border-t-gold bg-card p-6 lg:col-span-3">
        <h2 className="text-xl font-semibold">{form.id ? "Edit testimonial" : "New testimonial"}</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Student name *</Label>
            <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Kwame Mensah" />
          </div>
          <div>
            <Label>Category / Tag</Label>
            <select
              value={form.tag}
              onChange={(e) => setForm({ ...form, tag: e.target.value })}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {TESTIMONIAL_TAGS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>University / Institution *</Label>
            <Input required value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })} placeholder="e.g. University of Toronto" />
          </div>
          <div>
            <Label>Programme of Study</Label>
            <Input value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} placeholder="e.g. BSc Computer Science" />
          </div>
        </div>

        <div>
          <Label>Award / Achievement (optional)</Label>
          <Input value={form.award ?? ""} onChange={(e) => setForm({ ...form, award: e.target.value })} placeholder="e.g. $40,000 International Scholar Award" />
        </div>

        <div>
          <Label>Testimonial quote *</Label>
          <Textarea
            required
            rows={5}
            value={form.quote}
            onChange={(e) => setForm({ ...form, quote: e.target.value })}
            placeholder="Student's testimonial in their own words…"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Star Rating (1–5)</Label>
            <Input
              type="number"
              min={1}
              max={5}
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: Math.min(5, Math.max(1, Number(e.target.value))) })}
            />
          </div>
          <div>
            <Label>Sort Order</Label>
            <Input
              type="number"
              min={0}
              value={form.sort_order}
              onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
              placeholder="0 = first"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} />
          Visible on website
        </label>

        <div className="flex gap-2">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving…" : form.id ? "Update testimonial" : "Add testimonial"}
          </Button>
          {form.id && (
            <Button type="button" variant="ghost" onClick={() => setForm(emptyTestimonial)}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      {/* List */}
      <div className="space-y-3 lg:col-span-2">
        <h2 className="text-xl font-semibold">
          All testimonials{" "}
          <span className="text-base font-normal text-muted-foreground">({testimonials.length})</span>
        </h2>
        {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
        {!loading && testimonials.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No testimonials yet. Run the migration SQL first, then add testimonials here.
          </p>
        )}
        {testimonials.map((t) => (
          <div key={t.id} className={`rounded-md border bg-card p-4 transition-opacity ${t.published ? "" : "opacity-60"}`}>
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="font-semibold text-primary truncate">{t.name}</p>
                <p className="text-xs text-muted-foreground truncate">{t.institution}</p>
                <p className="mt-0.5 text-[11px] font-medium text-gold">{t.tag}</p>
              </div>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${t.published ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-muted text-muted-foreground"}`}>
                {t.published ? "Live" : "Hidden"}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2 italic">"{t.quote}"</p>
            <div className="mt-3 flex gap-3 text-sm">
              <button className="text-primary hover:text-gold font-medium" onClick={() => edit(t)}>Edit</button>
              <button className="text-destructive hover:opacity-80 font-medium" onClick={() => remove(t.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
