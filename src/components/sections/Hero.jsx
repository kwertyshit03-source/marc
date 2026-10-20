import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star, Zap, Wrench } from "lucide-react";

const stats = [
  { value: "10K+", label: "Devices fixed" },
  { value: "4.9★", label: "Avg. rating" },
  { value: "24/7", label: "Remote support" },
  { value: "Same-day", label: "Most repairs" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-44 pb-20">
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Certified IT repair · Online &amp; on-site
            </div>

            <h1 className="mt-6 font-heading text-5xl sm:text-6xl lg:text-8xl font-extrabold uppercase leading-[0.9] tracking-tighter text-balance">
              Your computer,
              <span className="block text-outline">Fixed fast.</span>
            </h1>

            <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span>Fixing today</span>
              <span className="h-3 w-px bg-primary" />
              <span>Powering tomorrow</span>
            </div>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              MRCIT brings expert computer repair to your screen or your doorstep. Viruses, broken hardware, slow performance, data recovery — our certified technicians handle it all.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="h-12 px-7 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <Link to="/book">
                  Book a Repair
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <a href="/#services">Explore Services</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> 90-day warranty</span>
              <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> Free diagnostics</span>
              <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 text-primary" /> 4.9/5 rating</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative border border-border bg-card p-6 shadow-2xl shadow-black/60">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-border text-primary">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em]">Live repair status</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Updated just now</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> In progress
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Diagnostics", done: true },
                  { label: "Virus removal", done: true },
                  { label: "OS optimization", done: true },
                  { label: "Final testing", done: false },
                ].map((step) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className={`flex h-7 w-7 items-center justify-center text-[10px] font-bold ${step.done ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}>
                      {step.done ? "✓" : "•"}
                    </div>
                    <span className={`text-sm uppercase tracking-wide ${step.done ? "text-foreground font-medium" : "text-muted-foreground"}`}>{step.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-border">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em]">
                  <span className="text-muted-foreground">Estimated completion</span>
                  <span className="font-semibold">~25 min</span>
                </div>
                <div className="mt-2 h-1.5 bg-secondary overflow-hidden">
                  <div className="h-full w-3/4 bg-primary" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 border border-border bg-background px-4 py-3 shadow-xl">
              <div className="flex -space-x-2">
                {["bg-primary", "bg-primary/70", "bg-primary/40"].map((c, i) => (
                  <div key={i} className={`h-8 w-8 rounded-full ${c} ring-2 ring-background`} />
                ))}
              </div>
              <div className="text-[10px] uppercase tracking-[0.15em]">
                <p className="font-semibold text-foreground">3,200+ happy</p>
                <p className="text-muted-foreground">customers this year</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px border border-border bg-border"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-7 text-center">
              <p className="font-heading text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-primary">{s.value}</p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}