import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { FileText, MessageSquareQuote, LogOut, RotateCcw, History, Trash2 } from "lucide-react";
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
  author_id?: string | null;
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

export type HistoryAction = {
  id: string;
  timestamp: number;
  entity: "post" | "testimonial";
  type: "update" | "delete" | "create";
  label: string;
  recordId: string;
  previousData?: any;
  newData?: any;
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

// ─── Storage Helpers for History ──────────────────────────────────────────────

function loadHistory(): HistoryAction[] {
  try {
    const raw = sessionStorage.getItem("elite_staff_history");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: HistoryAction[]) {
  try {
    sessionStorage.setItem("elite_staff_history", JSON.stringify(history.slice(0, 30)));
  } catch {}
}

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
  const [history, setHistory] = useState<HistoryAction[]>(() => loadHistory());
  const [showHistory, setShowHistory] = useState(false);
  const [refreshPosts, setRefreshPosts] = useState(0);
  const [refreshTestimonials, setRefreshTestimonials] = useState(0);

  function addHistory(action: Omit<HistoryAction, "id" | "timestamp">): HistoryAction {
    const newAction: HistoryAction = {
      ...action,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: Date.now(),
    };
    setHistory((prev) => {
      const updated = [newAction, ...prev].slice(0, 30);
      saveHistory(updated);
      return updated;
    });
    return newAction;
  }

  function removeHistoryItem(id: string) {
    setHistory((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveHistory(updated);
      return updated;
    });
  }

  async function handleRevert(action: HistoryAction) {
    try {
      if (action.entity === "post") {
        if (action.type === "update" && action.previousData) {
          const { error } = await supabase.from("posts").update({
            title: action.previousData.title,
            excerpt: action.previousData.excerpt,
            content: action.previousData.content,
            cover_url: action.previousData.cover_url,
            author_name: action.previousData.author_name,
            published: action.previousData.published,
          }).eq("id", action.recordId);
          if (error) throw error;
        } else if (action.type === "delete" && action.previousData) {
          const { error } = await supabase.from("posts").insert({
            id: action.previousData.id,
            title: action.previousData.title,
            slug: action.previousData.slug,
            excerpt: action.previousData.excerpt,
            content: action.previousData.content,
            cover_url: action.previousData.cover_url,
            author_name: action.previousData.author_name,
            published: action.previousData.published,
            author_id: action.previousData.author_id ?? userId,
            created_at: action.previousData.created_at,
          });
          if (error) throw error;
        } else if (action.type === "create") {
          const { error } = await supabase.from("posts").delete().eq("id", action.recordId);
          if (error) throw error;
        }
        qc.invalidateQueries({ queryKey: ["posts"] });
        setRefreshPosts((n) => n + 1);
      } else if (action.entity === "testimonial") {
        if (action.type === "update" && action.previousData) {
          const { error } = await supabase.from("testimonials").update({
            name: action.previousData.name,
            institution: action.previousData.institution,
            program: action.previousData.program,
            award: action.previousData.award,
            quote: action.previousData.quote,
            rating: action.previousData.rating,
            tag: action.previousData.tag,
            published: action.previousData.published,
            sort_order: action.previousData.sort_order,
          }).eq("id", action.recordId);
          if (error) throw error;
        } else if (action.type === "delete" && action.previousData) {
          const { error } = await supabase.from("testimonials").insert({
            id: action.previousData.id,
            name: action.previousData.name,
            institution: action.previousData.institution,
            program: action.previousData.program,
            award: action.previousData.award,
            quote: action.previousData.quote,
            rating: action.previousData.rating,
            tag: action.previousData.tag,
            published: action.previousData.published,
            sort_order: action.previousData.sort_order,
            created_at: action.previousData.created_at,
          });
          if (error) throw error;
        } else if (action.type === "create") {
          const { error } = await supabase.from("testimonials").delete().eq("id", action.recordId);
          if (error) throw error;
        }
        setRefreshTestimonials((n) => n + 1);
      }
      removeHistoryItem(action.id);
      toast.success(`Reverted: ${action.label}`);
    } catch (err: any) {
      toast.error(`Failed to revert: ${err.message || "Unknown error"}`);
    }
  }

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
        <div className="flex items-center gap-3">
          <Button
            variant={history.length > 0 ? "secondary" : "outline"}
            onClick={() => setShowHistory(!showHistory)}
            className="gap-2 relative"
          >
            <RotateCcw className="h-4 w-4" />
            <span>History & Revert</span>
            {history.length > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1.5 text-[11px] font-bold text-navy">
                {history.length}
              </span>
            )}
          </Button>
          <Button variant="outline" onClick={signOut} className="gap-2">
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>

      {/* History & Revert Drawer */}
      {showHistory && (
        <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-md transition-all animate-in fade-in-50">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div className="flex items-center gap-2">
              <History className="h-4 w-4 text-gold" />
              <h3 className="font-semibold text-foreground">Action History & Revert</h3>
              <span className="text-xs text-muted-foreground">({history.length} action{history.length === 1 ? "" : "s"} in this session)</span>
            </div>
            {history.length > 0 && (
              <button
                onClick={() => { setHistory([]); saveHistory([]); }}
                className="text-xs text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear history
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">
              No actions recorded yet in this session. When you update, delete, or create posts or testimonials, you can quickly revert or restore them here.
            </p>
          ) : (
            <div className="mt-3 divide-y divide-border/60 max-h-72 overflow-y-auto">
              {history.map((item) => (
                <div key={item.id} className="py-2.5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        item.type === "delete"
                          ? "bg-red-500/10 text-destructive"
                          : item.type === "create"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      }`}>
                        {item.entity}: {item.type}
                      </span>
                      <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {new Date(item.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRevert(item)}
                    className="shrink-0 gap-1.5 h-8 text-xs hover:border-gold hover:text-gold"
                  >
                    <RotateCcw className="h-3 w-3" />
                    {item.type === "delete" ? "Restore" : "Revert"}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

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
          <BlogManager
            userId={userId}
            qc={qc}
            onAddHistory={addHistory}
            onRevert={handleRevert}
            refreshTrigger={refreshPosts}
          />
        ) : (
          <TestimonialsManager
            onAddHistory={addHistory}
            onRevert={handleRevert}
            refreshTrigger={refreshTestimonials}
          />
        )}
      </div>
    </div>
  );
}

// ─── Blog Manager ──────────────────────────────────────────────────────────────

function BlogManager({
  userId,
  qc,
  onAddHistory,
  onRevert,
  refreshTrigger,
}: {
  userId: string;
  qc: ReturnType<typeof useQueryClient>;
  onAddHistory: (action: Omit<HistoryAction, "id" | "timestamp">) => HistoryAction;
  onRevert: (action: HistoryAction) => Promise<void>;
  refreshTrigger: number;
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState(emptyPost);
  const [initialForm, setInitialForm] = useState(emptyPost);
  const [saving, setSaving] = useState(false);

  async function load() {
    const { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    if (error) toast.error(error.message); else setPosts(data as Post[]);
  }
  useEffect(() => { load(); }, [refreshTrigger]);

  function startEdit(p: Post) {
    const editData = {
      id: p.id,
      title: p.title,
      excerpt: p.excerpt,
      content: p.content,
      cover_url: p.cover_url ?? "",
      author_name: p.author_name,
      published: p.published,
    };
    setForm(editData);
    setInitialForm(editData);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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

    if (form.id) {
      const prevPost = posts.find((p) => p.id === form.id);
      const { error } = await supabase.from("posts").update(payload).eq("id", form.id);
      setSaving(false);
      if (error) { toast.error(error.message); return; }

      const action = onAddHistory({
        entity: "post",
        type: "update",
        label: `Updated post "${form.title}"`,
        recordId: form.id,
        previousData: prevPost,
        newData: payload,
      });

      toast.success("Post updated", {
        action: {
          label: "Undo",
          onClick: () => onRevert(action),
        },
      });
    } else {
      const slug = `${slugify(form.title)}-${Date.now().toString(36)}`;
      const { data, error } = await supabase
        .from("posts")
        .insert({ ...payload, author_id: userId, slug })
        .select()
        .single();
      setSaving(false);
      if (error) { toast.error(error.message); return; }

      const action = onAddHistory({
        entity: "post",
        type: "create",
        label: `Created post "${form.title}"`,
        recordId: data?.id,
        newData: data,
      });

      toast.success("Post published", {
        action: {
          label: "Undo",
          onClick: () => onRevert(action),
        },
      });
    }

    setForm(emptyPost);
    setInitialForm(emptyPost);
    qc.invalidateQueries({ queryKey: ["posts"] });
    load();
  }

  async function remove(id: string) {
    const prevPost = posts.find((p) => p.id === id);
    if (!confirm(`Delete post "${prevPost?.title ?? "this post"}"?`)) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }

    if (prevPost) {
      const action = onAddHistory({
        entity: "post",
        type: "delete",
        label: `Deleted post "${prevPost.title}"`,
        recordId: id,
        previousData: prevPost,
      });

      toast.success("Post deleted", {
        action: {
          label: "Undo",
          onClick: () => onRevert(action),
        },
      });
    }

    qc.invalidateQueries({ queryKey: ["posts"] });
    load();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <form onSubmit={save} className="space-y-4 rounded-lg border border-t-4 border-t-gold bg-card p-6 lg:col-span-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{form.id ? "Edit post" : "New post"}</h2>
          {form.id && (
            <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              Editing existing post
            </span>
          )}
        </div>
        <div><Label>Title</Label><Input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
        <div><Label>Short summary</Label><Input value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></div>
        <div><Label>Content</Label><Textarea required rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Leave a blank line between paragraphs" /></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Author name</Label><Input value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })} placeholder="Elite Edu Consult" /></div>
          <div><Label>Cover image link (optional)</Label><Input value={form.cover_url ?? ""} onChange={(e) => setForm({ ...form, cover_url: e.target.value })} placeholder="https://…" /></div>
        </div>
        <label className="flex items-center gap-2 text-sm"><Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} /> Visible on website</label>
        <div className="flex flex-wrap gap-2 pt-2">
          <Button type="submit" disabled={saving}>{saving ? "Saving…" : form.id ? "Update post" : "Publish post"}</Button>
          {form.id && (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => setForm(initialForm)}
                className="gap-1.5"
                title="Undo current edits in form"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Revert edits
              </Button>
              <Button type="button" variant="ghost" onClick={() => { setForm(emptyPost); setInitialForm(emptyPost); }}>Cancel</Button>
            </>
          )}
        </div>
      </form>
      <div className="space-y-3 lg:col-span-2">
        <h2 className="text-xl font-semibold">All posts ({posts.length})</h2>
        {posts.length === 0 && <p className="text-sm text-muted-foreground">No posts yet.</p>}
        {posts.map((p) => (
          <div key={p.id} className="rounded-md border bg-card p-4">
            <p className="font-semibold text-primary">{p.title}</p>
            <p className="text-xs text-muted-foreground">{new Date(p.created_at).toLocaleDateString("en-GB")} · {p.published ? "Live" : "Hidden"}</p>
            <div className="mt-2 flex gap-3 text-sm">
              <button className="text-primary hover:text-gold font-medium" onClick={() => startEdit(p)}>Edit</button>
              <button className="text-destructive font-medium hover:opacity-80" onClick={() => remove(p.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Testimonials Manager ──────────────────────────────────────────────────────

function TestimonialsManager({
  onAddHistory,
  onRevert,
  refreshTrigger,
}: {
  onAddHistory: (action: Omit<HistoryAction, "id" | "timestamp">) => HistoryAction;
  onRevert: (action: HistoryAction) => Promise<void>;
  refreshTrigger: number;
}) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState<Omit<Testimonial, "created_at">>(emptyTestimonial);
  const [initialForm, setInitialForm] = useState<Omit<Testimonial, "created_at">>(emptyTestimonial);
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
  useEffect(() => { load(); }, [refreshTrigger]);

  function edit(t: Testimonial) {
    const editData = {
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
    };
    setForm(editData);
    setInitialForm(editData);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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

    if (form.id) {
      const prev = testimonials.find((t) => t.id === form.id);
      const { error } = await supabase.from("testimonials").update(payload).eq("id", form.id);
      setSaving(false);
      if (error) { toast.error(error.message); return; }

      const action = onAddHistory({
        entity: "testimonial",
        type: "update",
        label: `Updated testimonial for "${form.name}"`,
        recordId: form.id,
        previousData: prev,
        newData: payload,
      });

      toast.success("Testimonial updated", {
        action: {
          label: "Undo",
          onClick: () => onRevert(action),
        },
      });
    } else {
      const { data, error } = await supabase.from("testimonials").insert(payload).select().single();
      setSaving(false);
      if (error) { toast.error(error.message); return; }

      const action = onAddHistory({
        entity: "testimonial",
        type: "create",
        label: `Added testimonial for "${form.name}"`,
        recordId: data?.id,
        newData: data,
      });

      toast.success("Testimonial added", {
        action: {
          label: "Undo",
          onClick: () => onRevert(action),
        },
      });
    }

    setForm(emptyTestimonial);
    setInitialForm(emptyTestimonial);
    load();
  }

  async function remove(id: string) {
    const prev = testimonials.find((t) => t.id === id);
    if (!confirm(`Delete testimonial for "${prev?.name ?? "this student"}"?`)) return;
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }

    if (prev) {
      const action = onAddHistory({
        entity: "testimonial",
        type: "delete",
        label: `Deleted testimonial for "${prev.name}"`,
        recordId: id,
        previousData: prev,
      });

      toast.success("Testimonial deleted", {
        action: {
          label: "Undo",
          onClick: () => onRevert(action),
        },
      });
    }

    load();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Form */}
      <form onSubmit={save} className="space-y-4 rounded-lg border border-t-4 border-t-gold bg-card p-6 lg:col-span-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{form.id ? "Edit testimonial" : "New testimonial"}</h2>
          {form.id && (
            <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              Editing existing testimonial
            </span>
          )}
        </div>

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

        <div className="flex flex-wrap gap-2 pt-2">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving…" : form.id ? "Update testimonial" : "Add testimonial"}
          </Button>
          {form.id && (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => setForm(initialForm)}
                className="gap-1.5"
                title="Undo current edits in form"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Revert edits
              </Button>
              <Button type="button" variant="ghost" onClick={() => { setForm(emptyTestimonial); setInitialForm(emptyTestimonial); }}>
                Cancel
              </Button>
            </>
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
