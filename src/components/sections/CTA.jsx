import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border px-4 sm:px-6 lg:px-8 py-24 lg:py-36 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">05 / Get started</span>
        <h2 className="mt-7 font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.9] tracking-tighter">
          <span className="block">Fixing today</span>
          <span className="mt-3 block text-primary lg:mt-5">Powering tomorrow</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Book a repair in under two minutes. Free diagnostics, transparent pricing, and a 90-day warranty on every fix.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild size="lg" className="h-12 px-7 text-[11px] font-semibold uppercase tracking-[0.2em]">
            <Link to="/book">
              Book a Repair
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-7 text-[11px] font-semibold uppercase tracking-[0.2em]">
            <a href="tel:09569682750">
              <Phone className="mr-2 h-4 w-4" />
              Call us instead
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}