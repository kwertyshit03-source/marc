import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import {
  Wrench, Shield, Cpu, Wifi, HardDrive, Laptop, Server, Settings,
  ArrowRight, Loader2, Check,
} from "lucide-react";

const iconMap = { Wrench, Shield, Cpu, Wifi, HardDrive, Laptop, Server, Settings };

const fallbackServices = [
  { title: "Remote Tech Support", description: "Get your computer fixed without leaving home. Secure screen-sharing sessions resolve software issues in real time.", icon: "Wifi", price_from: "₱499", features: ["Secure remote connection", "Software troubleshooting", "Live chat with technician"], featured: true },
  { title: "Virus & Malware Removal", description: "Deep-scan and remove viruses, spyware, and ransomware. We harden your system so it stays clean.", icon: "Shield", price_from: "₱499", features: ["Full system disinfection", "Security hardening", "Real-time protection setup"], featured: false },
  { title: "Hardware Repair & Upgrades", description: "Cracked screens, dead batteries, failing drives — we repair and upgrade laptops and desktops.", icon: "Wrench", price_from: "₱499", features: ["Screen & keyboard replacement", "RAM & SSD upgrades", "Battery replacement"], featured: false },
  { title: "Data Recovery & Backup", description: "Recover lost files from failed drives and set up reliable backups so it never happens again.", icon: "HardDrive", price_from: "₱499", features: ["Failed drive recovery", "Cloud backup setup", "Migration assistance"], featured: false },
  { title: "OS Install & Optimization", description: "Fresh Windows or macOS installs, driver fixes, and performance tuning to make old machines fly.", icon: "Settings", price_from: "₱499", features: ["Clean OS installation", "Driver & update fixes", "Speed optimization"], featured: false },
  { title: "Custom PC Builds", description: "Gaming rigs and workstations tailored to your budget. We source parts and assemble with care.", icon: "Cpu", price_from: "₱499", features: ["Part recommendations", "Professional assembly", "Stress testing & setup"], featured: false },
];

export default function Services() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    let active = true;
    base44.entities.Service
      .filter({}, { sort: "order", limit: 50 })
      .then((page) => {
        if (active && page?.items?.length) setServices(page.items);
        else if (active) setServices(fallbackServices);
      })
      .catch(() => active && setServices(fallbackServices));
    return () => { active = false; };
  }, []);

  const list = services ?? null;

  return (
    <section id="services" className="border-t border-border py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">01 / Our services</span>
          <h2 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter text-balance">
            Everything your devices need
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From quick remote fixes to major hardware overhauls — transparent pricing, certified technicians, no surprises.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {list
            ? list.map((svc, i) => {
                const Icon = iconMap[svc.icon] ?? Wrench;
                return (
                  <motion.div
                    key={svc.title + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                    className="group relative flex flex-col border border-border bg-card p-7 hover:-translate-y-1.5 hover:border-primary transition-all duration-300"
                  >
                    {svc.featured && (
                      <span className="absolute top-5 right-5 inline-flex items-center bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground">
                        Popular
                      </span>
                    )}
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="mt-6 h-9 w-9 text-primary" strokeWidth={1.6} />
                    <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-wide">{svc.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{svc.description}</p>
                    {svc.features?.length > 0 && (
                      <ul className="mt-5 space-y-2">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                            <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-7 pt-5 border-t border-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">From</span>
                        <p className="font-heading text-xl font-extrabold text-primary">{svc.price_from || "Custom"}</p>
                      </div>
                      <Button asChild size="sm" variant="outline" className="text-[10px] font-semibold uppercase tracking-[0.2em] group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                        <Link to="/book">
                          Book
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })
            : Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-border bg-card p-7 h-80 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}