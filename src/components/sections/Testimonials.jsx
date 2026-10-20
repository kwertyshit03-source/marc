import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", role: "Small business owner", rating: 5, text: "My laptop wouldn't boot before a huge client meeting. MRCIT remote-fixed it in 20 minutes and saved my day. Incredible service." },
  { name: "James T.", role: "Gamer", rating: 5, text: "Built my dream gaming PC and stress-tested it. Runs every title on ultra with zero issues. Worth every penny." },
  { name: "Linda P.", role: "Teacher", rating: 5, text: "They recovered years of family photos from a dead hard drive I thought were gone forever. I actually cried. Thank you, MRCIT." },
  { name: "Marcus D.", role: "Remote worker", rating: 5, text: "Removed a nasty ransomware and set up proper backups. Explained everything in plain English. My go-to from now on." },
  { name: "Priya K.", role: "Designer", rating: 5, text: "Replaced my MacBook screen for half what Apple quoted. Looks brand new. Fast, friendly, and fair pricing." },
  { name: "Tom R.", role: "Retired", rating: 5, text: "Patient, kind, and never made me feel dumb about my computer questions. My whole family uses MRCIT now." },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="border-t border-border py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">04 / Customer reviews</span>
          <h2 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter text-balance">
            Loved by 3,200+ customers
          </h2>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">4.9 average · 3,200+ verified reviews</p>
          </div>
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-3.5 [column-fill:_balance]">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="mb-3.5 break-inside-avoid border border-border bg-card p-6"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90">{r.text}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center border border-primary/40 font-heading font-extrabold text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em]">{r.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{r.role}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}