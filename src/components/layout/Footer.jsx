import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Mail, Phone, MapPin, Clock, Facebook, User } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo withTagline />
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Fast, reliable computer repair and tech support — online, on-site, and in-shop. We fix it so you can get back to work.
            </p>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Fixing today <span className="text-primary">/</span> Powering tomorrow
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="/#services" className="hover:text-foreground transition-colors">Remote Support</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Virus Removal</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Hardware Repair</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Data Recovery</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Network Setup</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="/#why-us" className="hover:text-foreground transition-colors">Why Choose Us</a></li>
              <li><a href="/#reviews" className="hover:text-foreground transition-colors">Reviews</a></li>
              <li><Link to="/book" className="hover:text-foreground transition-colors">Book a Repair</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <User className="h-4 w-4 text-primary shrink-0" />
                <span>Contact: Marc Lopez</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:09569682750" className="hover:text-foreground transition-colors">09569682750</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:marcangeloudlopez26@gmail.com" className="break-all hover:text-foreground transition-colors">marcangeloudlopez26@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Facebook className="h-4 w-4 text-primary shrink-0" />
                <a href="https://www.facebook.com/search/top?q=MRCIT%20ONLINE" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Facebook · MRCIT ONLINE</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Online &amp; on-site service</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Mon–Fri, 8am–10pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-6 bg-primary" />
            <span>Fast <span className="text-primary">/</span> Reliable <span className="text-primary">/</span> Affordable</span>
            <span className="h-px w-6 bg-primary" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} MRCIT · Computer Repair Shop
          </p>
        </div>
      </div>
    </footer>
  );
}