"use client";

import React from "react";
import { trackCTAClick } from "@/lib/analytics";
import { ArrowUpRight, Sparkles } from "lucide-react";

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
          className="flex items-center gap-3 group"
        >
          <div className="relative flex items-center">
            {/* Custom SVG Monogram reflecting Mosano geometric M with magenta accent */}
            <svg
              width="36"
              height="34"
              viewBox="0 0 36 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:scale-105"
            >
              <path
                d="M4 30V4L15 19L18 14L8 4H4"
                fill="#1E22AA"
              />
              <path
                d="M18 14L22 8L32 23V30H27V16L18 29L12 21L15 17L18 21L27 9V4L18 14Z"
                fill="#1E22AA"
              />
              {/* Vibrant Magenta signature accent stroke */}
              <path
                d="M22 8L32 23H26L18 11L22 8Z"
                fill="#E31C79"
              />
            </svg>
            <span className="ml-2.5 text-2xl font-black tracking-tight text-mosano-navy">
              MOSANO
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-mosano-surface text-mosano-blue border border-mosano-blue/20">
            2026 Cost Guide
          </span>
        </a>

        {/* Quick Nav Anchors */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-mosano-navy/80">
          <a
            href="#budget-calculator"
            className="hover:text-mosano-blue transition-colors text-mosano-blue font-semibold flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-mosano-magenta" />
            <span>Budget Calculator</span>
          </a>
          <a
            href="#cost-drivers"
            className="hover:text-mosano-blue transition-colors"
          >
            Cost Drivers
          </a>
          <a
            href="#hidden-traps"
            className="hover:text-mosano-blue transition-colors"
          >
            Hidden Traps
          </a>
          <a
            href="#methodology"
            className="hover:text-mosano-blue transition-colors"
          >
            Methodology
          </a>
          <a
            href="#faq"
            className="hover:text-mosano-blue transition-colors"
          >
            FAQ
          </a>
        </nav>

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
          <button
            type="button"
            onClick={() => {
              trackCTAClick("navbar", "scoping_session");
              onOpenContact();
            }}
            className="relative group overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-mosano-blue hover:bg-mosano-navy text-white text-sm font-medium transition-all shadow-md active:translate-y-0.5 flex items-center gap-2"
          >
            <span>discuss your mvp</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-mosano-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </div>
    </header>
  );
};
