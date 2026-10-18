"use client";

import React from "react";
import { trackCTAClick } from "@/lib/analytics";
import {
  Sparkles,
  ArrowDown,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="overview" className="scroll-mt-24 relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-white via-mosano-surface/40 to-white">
      {/* Decorative Brand Rotated Rectangles matching Mosano brand identity (.left-rec / .right-rec) */}
      <div
        className="absolute -top-12 -right-16 w-64 h-64 opacity-15 rounded-3xl transform rotate-12 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #1E22AA 0%, #E31C79 100%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-1/2 -left-20 w-72 h-72 opacity-10 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FEDC2B 0%, #1E22AA 70%, transparent 100%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline & Value Proposition */}
        <div className="text-center space-y-6">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-mosano-navy tracking-tight leading-[1.12] max-w-4xl mx-auto">
            How Much Does It Cost to Build an MVP in <span className="text-mosano-blue underline decoration-mosano-yellow decoration-4 underline-offset-4">2026?</span>
          </h1>

          <p className="text-base sm:text-lg text-mosano-navy/75 font-normal leading-relaxed max-w-2xl mx-auto">
            Real engineering benchmarks and an interactive scope calculator. Compare Web, Mobile, and AI budgets without generic agency markups.
          </p>

          {/* Scannable Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs text-mosano-navy/80 font-medium max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-mosano-border/80 shadow-sm hover:border-mosano-blue/40 transition-colors">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              Real 2026 benchmarks
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-mosano-border/80 shadow-sm hover:border-mosano-blue/40 transition-colors">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              Web vs. Mobile vs. AI-Native
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-mosano-border/80 shadow-sm hover:border-mosano-blue/40 transition-colors">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              5 hidden cost drivers
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-mosano-border/80 shadow-sm hover:border-mosano-blue/40 transition-colors">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              100% IP ownership
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#budget-calculator"
              onClick={() => trackCTAClick("hero", "use_budget_planner")}
              className="px-6 py-3.5 rounded-xl bg-mosano-blue hover:bg-mosano-navy text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-mosano-hover flex items-center gap-2 group active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-mosano-yellow" />
              <span>Launch Budget Calculator</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#cost-drivers"
              onClick={() => trackCTAClick("hero", "read_cost_guide")}
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-mosano-surface border border-mosano-border text-mosano-navy font-bold text-sm transition-all shadow-sm flex items-center gap-2 active:scale-95"
            >
              <span>Explore Cost Drivers</span>
              <ArrowDown className="w-3.5 h-3.5 text-mosano-blue" />
            </a>
          </div>

          {/* Clean Proof Bar: inline next to each other */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-mosano-navy/70 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-bold text-mosano-navy">4–12 WEEKS</span>
              <span>Average delivery</span>
            </div>
            <span className="text-mosano-navy/40">•</span>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-bold text-mosano-navy">100% IP</span>
              <span>Direct ownership</span>
            </div>
            <span className="text-mosano-navy/40">•</span>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-bold text-mosano-navy">MOSANO</span>
              <span>Global delivery</span>
            </div>
          </div>

          {/* Authentic Studio Photo - Enhanced Size & Clean Visual Appeal */}
          <div className="pt-6 relative group w-full">
            {/* Ambient colorful backdrop glow matching Mosano brand identity */}
            <div className="absolute inset-0 bg-gradient-to-r from-mosano-blue via-mosano-magenta to-mosano-yellow rounded-3xl opacity-25 blur-xl group-hover:opacity-40 transition duration-700 pointer-events-none" />

            <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-2xl bg-mosano-navy w-full">
              <img
                src="/mosano-studio-team.jpg"
                alt="Mosano software engineering and product design team collaborating in the studio"
                className="w-full h-80 sm:h-[460px] lg:h-[540px] xl:h-[580px] object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />
              {/* Mosano subtle vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-mosano-navy/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* KEY TAKEAWAYS Snippet - Distinct container */}
          <div className="mt-8 text-left rounded-2xl bg-white border-2 border-mosano-blue/20 shadow-md overflow-hidden transition-all">
            {/* Header bar */}
            <div className="p-4 sm:px-6 bg-gradient-to-r from-mosano-surface via-white to-mosano-surface border-b border-mosano-border/80 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-mosano-magenta" />
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-mosano-navy">
                KEY TAKEAWAYS
              </h2>
            </div>

            {/* Snippet Content */}
            <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
              {/* Direct self-contained citable passage */}
              <p className="text-mosano-navy/85 leading-relaxed font-normal">
                Building a production-ready software Minimum Viable Product (MVP) in 2026 typically costs between <strong>€18,000 and €58,000</strong> with a delivery timeframe of <strong>4 to 12 weeks</strong> when engineered by Mosano. Pricing scales with multi-platform scope, database architecture, and AI integration depth.
              </p>

              {/* Structured bulleted takeaways */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-mosano-navy/80">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-mosano-surface/50 border border-mosano-border/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-mosano-blue mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-mosano-navy font-semibold block">Web SaaS V1: €18,000 – €32,000</strong>
                    <span className="text-xs">4 to 7 weeks • Next.js, TypeScript, and Supabase for rapid revenue validation.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-mosano-surface/50 border border-mosano-border/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-mosano-magenta mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-mosano-navy font-semibold block">Cross-Platform Mobile + Web: €32,000 – €58,000</strong>
                    <span className="text-xs">7 to 11 weeks • React Native &amp; Node microservices for unified iOS, Android, and web.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-mosano-surface/50 border border-mosano-border/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-mosano-violet mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-mosano-navy font-semibold block">AI-Native Systems: €58,000 – €95,000+</strong>
                    <span className="text-xs">11 to 16 weeks • Custom RAG pipelines, vector caching, agentic evals, and token controls.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-mosano-surface/50 border border-mosano-border/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-mosano-navy font-semibold block">100% IP Transfer &amp; Senior Pods</strong>
                    <span className="text-xs">Direct ownership with zero vendor lock-in, automated CI/CD, and dedicated Mosano pod delivery.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
