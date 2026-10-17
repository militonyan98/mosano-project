"use client";

import React from "react";
import { trackCTAClick } from "@/lib/analytics";
import { ArrowUpRight, Heart } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-mosano-navy text-white pt-16 pb-12 border-t border-mosano-navy/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tight">
                MOSANO
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-mosano-magenta text-white">
                STUDIO
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Your ride or die Software Studio partner. We build complex, reliable, and highly scalable digital solutions for high-growth startups and enterprises worldwide.
            </p>
            <div className="text-xs text-white/50 space-y-1">
              <p>Based in Portugal 🇵🇹 • Delivering Globally 🌍</p>
              <p>Email: <a href="mailto:hello@mosano.eu" className="text-mosano-mint hover:underline">hello@mosano.eu</a></p>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-mosano-mint uppercase tracking-wider">
              Studio Services
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="https://mosano.eu/#services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Turn Key Product Development</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://mosano.eu/#services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Fractional CTO &amp; Advisory</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://mosano.eu/#services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Senior Team Augmentation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://mosano.eu/#case-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Featured Case Studies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Campaign & Experiment Attribution */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-mosano-yellow uppercase tracking-wider">
              Growth Experiment
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              <strong>MVP Cost Guide &amp; Budget Planner 2026</strong> is an evidence-based growth experiment conceptualized by <strong>Hermine Militonyan</strong> to provide transparent budgeting for non-technical startup founders.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  trackCTAClick("footer", "book_scoping_call");
                  onOpenContact();
                }}
                className="px-4 py-2.5 rounded-lg bg-mosano-magenta hover:bg-pink-600 text-white font-bold text-xs transition-all shadow"
              >
                schedule a founder scoping call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Mosano. All rights reserved. Commitment. Transparency. Professionalism.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://mosano.eu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              mosano.eu
            </a>
            <a href="https://linkedin.com/company/mosano" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <span className="text-white/30">|</span>
            <span className="text-white/40">Next.js &amp; Bun Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
