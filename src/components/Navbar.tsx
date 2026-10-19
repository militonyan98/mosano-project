"use client";

import React from "react";
import { trackCTAClick } from "@/lib/analytics";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { MosanoLogo } from "./MosanoLogo";

interface NavbarProps {
  currency: "EUR" | "USD";
  onCurrencyToggle: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onCurrencyToggle,
  onOpenContact,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-mosano-border/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="https://mosano.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="brand-2 w-nav-brand w--current"
        >
          <MosanoLogo height={32} className="header-logo" />
        </a>



        {/* Right Actions: Currency Toggle & Scoping CTA */}
        <div className="flex items-center gap-3">
          {/* Currency Toggle */}
          <button
            type="button"
            onClick={onCurrencyToggle}
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold border border-mosano-border hover:border-mosano-blue bg-white text-mosano-navy transition-all shadow-sm active:scale-95"
            title="Toggle between EUR (€) and USD ($)"
          >
            <span className={currency === "EUR" ? "text-mosano-blue font-extrabold" : "text-gray-400"}>
              EUR €
            </span>
            <span className="mx-1 text-gray-300">/</span>
            <span className={currency === "USD" ? "text-mosano-blue font-extrabold" : "text-gray-400"}>
              USD $
            </span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault();
              trackCTAClick("navbar", "scoping_session");
              onOpenContact();
            }}
            className="relative group overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-mosano-blue hover:bg-mosano-navy text-white text-sm font-medium transition-all shadow-md active:translate-y-0.5 flex items-center gap-2"
          >
            <span>discuss your mvp</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-mosano-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        </div>
      </div>
    </header>
  );
};
