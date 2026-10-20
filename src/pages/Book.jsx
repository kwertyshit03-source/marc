import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CheckCircle2, Loader2, Send, ShieldCheck, Clock, Wallet } from "lucide-react";

const deviceTypes = ["Desktop PC", "Laptop", "MacBook / iMac", "Tablet", "Gaming PC", "Server", "Other"];
const urgencyLevels = [
  { value: "Standard", label: "Standard — within 2-3 days" },
  { value: "Priority", label: "Priority — next day (+₱200)" },
  { value: "Emergency", label: "Emergency — same day (+₱500)" },
];

const trustItems = [
  { icon: ShieldCheck, text: "90-day warranty on every repair" },
  { icon: Clock, text: "Free diagnostics, no obligation" },
  { icon: Wallet, text: "Transparent upfront pricing" },
];

export default function Book() {
  const [services, setServices] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    customer_name: "",
    email: "",
    phone: "",
    device_type: "",
    service_title: "",
    issue_description: "",
    preferred_date: "",
    urgency: "Standard",
  });

  useEffect(() => {
    base44.entities.Service
      .filter({}, { sort: "order", limit: 50, fields: ["title"] })
      .then((page) => setServices(page?.items ?? []))
      .catch(() => setServices([]));
  }, []);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await base44.entities.Booking.create({ ...form, status: "Pending" });
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <section className="relative overflow-hidden py-12 lg:py-16">
          <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/15 blur-[110px]" />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" size="sm" className="mb-7 -ml-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/"><ArrowLeft className="mr-1.5 h-4 w-4" /> Back to home</Link>
            </Button>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Book a repair</span>
            <h1 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[0.95] tracking-tighter text-balance">
              Tell us what's wrong
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Fill in the details below and we'll confirm your booking within one business hour. Free diagnostics, no obligation.
            </p>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-border bg-card p-8 sm:p-12 text-center shadow-2xl shadow-black/60"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-6 font-heading text-2xl font-extrabold uppercase tracking-tight">Booking received</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Thanks{form.customer_name ? `, ${form.customer_name.split(" ")[0]}` : ""}! We've got your repair request. A technician will email{" "}
                  <span className="font-medium text-foreground">{form.email}</span> within one business hour to confirm your appointment.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <Button asChild className="h-11 px-6 text-[11px] font-semibold uppercase tracking-[0.2em]">
                    <Link to="/">Back to home</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-11 px-6 text-[11px] font-semibold uppercase tracking-[0.2em]"
                    onClick={() => {
                      setDone(false);
                      setForm({ customer_name: "", email: "", phone: "", device_type: "", service_title: "", issue_description: "", preferred_date: "", urgency: "Standard" });
                    }}
                  >
                    Book another repair
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/60">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="customer_name" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Full name *</Label>
                    <Input id="customer_name" required value={form.customer_name} onChange={(e) => set("customer_name", e.target.value)} placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Email *</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Phone</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 (000) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="device_type" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Device type *</Label>
                    <Select required value={form.device_type} onValueChange={(v) => set("device_type", v)}>
                      <SelectTrigger id="device_type"><SelectValue placeholder="Select device" /></SelectTrigger>
                      <SelectContent>
                        {deviceTypes.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service_title" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Service needed</Label>
                    <Select value={form.service_title} onValueChange={(v) => set("service_title", v)}>
                      <SelectTrigger id="service_title"><SelectValue placeholder="Choose a service" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>)}
                        <SelectItem value="Not sure / General">Not sure / General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferred_date" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Preferred date</Label>
                    <Input id="preferred_date" type="date" value={form.preferred_date} onChange={(e) => set("preferred_date", e.target.value)} />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="urgency" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Urgency</Label>
                    <Select value={form.urgency} onValueChange={(v) => set("urgency", v)}>
                      <SelectTrigger id="urgency"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((u) => <SelectItem key={u.value} value={u.value}>{u.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="issue_description" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Describe the issue *</Label>
                    <Textarea
                      id="issue_description" required rows={5}
                      value={form.issue_description}
                      onChange={(e) => set("issue_description", e.target.value)}
                      placeholder="e.g. My laptop freezes after 10 minutes and the fan gets really loud. It started last week after an update…"
                    />
                  </div>
                </div>

                {error && (
                  <div className="mt-5 border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Button type="submit" size="lg" disabled={submitting} className="h-12 px-7 text-[11px] font-semibold uppercase tracking-[0.2em]">
                    {submitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…</>) : (<>Submit booking <Send className="ml-2 h-4 w-4" /></>)}
                  </Button>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">By submitting you agree to our service terms. We never share your data.</p>
                </div>

                <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-3 gap-4">
                  {trustItems.map((t) => (
                    <div key={t.text} className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      <t.icon className="h-5 w-5 text-primary shrink-0" />
                      <span>{t.text}</span>
                    </div>
                  ))}
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}