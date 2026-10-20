import React from "react";
import { cn } from "@/lib/utils";

export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* red orbital arc */}
      <path d="M9 43C3 24 17 7 32 7s29 17 23 36" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
      {/* monitor */}
      <rect x="17" y="18" width="30" height="20" rx="2" stroke="hsl(var(--foreground))" strokeWidth="2.4" />
      {/* stand */}
      <path d="M32 38v6M25 46h14" stroke="hsl(var(--foreground))" strokeWidth="2.4" strokeLinecap="round" />
      {/* gear inside */}
      <circle cx="32" cy="28" r="5" stroke="hsl(var(--foreground))" strokeWidth="1.9" />
      <g stroke="hsl(var(--foreground))" strokeWidth="1.6" strokeLinecap="round">
        <path d="M32 21.4v1.5M32 33.1v1.5M25.4 28h1.5M37.1 28h1.5" />
        <path d="M27.3 23.3l1.1 1.1M35.6 31.6l1.1 1.1M36.7 23.3l-1.1 1.1M27.3 32.7l1.1-1.1" />
      </g>
      {/* wrench */}
      <path d="M29.6 30.4 34.4 25.6" stroke="hsl(var(--primary))" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function LogoWordmark({ className }) {
  return (
    <span className={cn("font-heading font-extrabold italic tracking-tight leading-none", className)}>
      <span className="text-foreground">M</span>
      <span className="text-primary">RC</span>
      <span className="text-foreground">IT</span>
    </span>
  );
}

export default function Logo({ withTagline = false, className }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <LogoWordmark className="text-xl" />
        {withTagline ? (
          <span className="mt-1.5 flex items-center gap-1.5">
            <span className="h-px w-4 bg-primary" />
            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Computer Repair Shop</span>
            <span className="h-px w-4 bg-primary" />
          </span>
        ) : (
          <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Computer Repair Shop</span>
        )}
      </span>
    </span>
  );
}