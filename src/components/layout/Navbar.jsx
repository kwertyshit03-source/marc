import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md border-border" : "bg-background/60 backdrop-blur-sm border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[74px] items-center justify-between gap-6">
          <Link to="/" aria-label="MRCIT home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" className="h-10 px-4 text-[11px] font-semibold uppercase tracking-[0.2em]">
              <a href="tel:09569682750">Call Us</a>
            </Button>
            <Button asChild className="h-10 px-5 text-[11px] font-semibold uppercase tracking-[0.2em]">
              <Link to="/book">Book a Repair</Link>
            </Button>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 border border-border hover:border-primary transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full mt-3 h-11 text-[11px] font-semibold uppercase tracking-[0.2em]">
              <Link to="/book" onClick={() => setOpen(false)}>Book a Repair</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}