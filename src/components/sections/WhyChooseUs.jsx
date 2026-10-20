import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck, Wallet, Headphones, Lock } from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "Certified technicians", description: "CompTIA and Microsoft-certified pros with years of hands-on repair experience." },
  { icon: Clock, title: "Same-day service", description: "Most remote repairs are completed within hours — many in under 30 minutes." },
  { icon: Wallet, title: "Transparent pricing", description: "Upfront quotes with no hidden fees. You approve the price before we start." },
  { icon: ShieldCheck, title: "90-day warranty", description: "Every repair is guaranteed. If the same issue returns, we fix it free." },
  { icon: Lock, title: "Your data stays private", description: "We never access personal files without consent, and wipe sessions after every repair." },
  { icon: Headphones, title: "Friendly support", description: "Real people, plain English, and follow-up help if anything isn't clear." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="border-t border-border py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">03 / Why MRCIT</span>
            <h2 className="mt-5 font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tighter text-balance">
              Repair you can
              <span className="block text-muted-foreground">actually trust</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We built MRCIT to be the computer shop we'd want for our own families — fast, honest, and genuinely helpful.
            </p>
            <div className="mt-8 flex items-center gap-4 border border-border bg-card p-5">
              <div className="flex h-12 w-12 items-center justify-center border border-primary/40 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-primary">98%</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Satisfaction · 3,200+ reviews</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3.5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="border border-border bg-card p-6 hover:border-primary transition-colors"
              >
                <r.icon className="h-7 w-7 text-primary" strokeWidth={1.6} />
                <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-[0.1em]">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}