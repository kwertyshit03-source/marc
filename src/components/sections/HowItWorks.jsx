import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, MonitorSmartphone, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book online", description: "Pick a service, tell us about your device and issue, and choose a time that works for you." },
  { icon: MonitorSmartphone, title: "We connect", description: "For remote repairs we securely screen-share. For on-site or drop-off, we confirm your appointment." },
  { icon: Wrench, title: "We fix it", description: "Certified technicians diagnose and repair — most jobs done same-day with transparent pricing." },
  { icon: CheckCircle2, title: "You're back up", description: "We test, clean up, and back up your data. Every repair is backed by a 90-day warranty." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">02 / How it works</span>
          <h2 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter text-balance">
            Four steps to a working computer
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            No tech jargon, no waiting on hold. Just a clear path from broken to fixed.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="border border-border bg-card p-7 hover:border-primary transition-colors"
            >
              <span className="font-heading text-5xl font-extrabold leading-none text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <step.icon className="mt-6 h-7 w-7 text-foreground" strokeWidth={1.6} />
              <h3 className="mt-4 font-heading text-base font-bold uppercase tracking-wide">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}