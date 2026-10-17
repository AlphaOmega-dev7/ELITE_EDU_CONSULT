import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Reset Password — Elite Edu Consult" },
      { name: "description", content: "Set a new password for your staff account." },
      { property: "og:title", content: "Reset Password — Elite Edu Consult" },
      { property: "og:description", content: "Set a new staff password." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Reset,
});

function Reset() {
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  async function submit(e: FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password: pw });
    if (error) { toast.error(error.message); return; }
    toast.success("Password updated");
    navigate({ to: "/staff" });
  }
  return (
    <form onSubmit={submit} className="mx-auto max-w-md space-y-4 px-4 py-20">
      <h1 className="text-3xl font-bold text-primary">Set a new password</h1>
      <div><Label>New password</Label><Input type="password" required minLength={8} value={pw} onChange={(e) => setPw(e.target.value)} /></div>
      <Button type="submit">Save password</Button>
    </form>
  );
}
