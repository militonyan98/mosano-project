"use client";

import React from "react";
import { trackCTAClick } from "@/lib/analytics";
import {
  Sparkles,
  ArrowDown,
  ShieldCheck,
  CheckCircle,
  Zap,
  Layers,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="overview" className="scroll-mt-24 relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-white via-mosano-surface/50 to-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category / Campaign Cap */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mosano-surface border border-mosano-magenta/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-mosano-magenta" />
              <span className="text-xs font-bold text-mosano-magenta tracking-wide uppercase">
                2026 Founder Guide &amp; Budget Planner
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-mosano-navy tracking-tight leading-[1.12]">
              How Much Does It Cost to Build an MVP in <span className="text-mosano-blue underline decoration-mosano-magenta decoration-4 underline-offset-8">2026?</span>
            </h1>

            <p className="text-lg sm:text-xl text-mosano-navy/80 font-normal leading-relaxed max-w-2xl">
              A founder’s practical, evidence-based guide and interactive budget planner. Stop guessing with generic agency quotes: evaluate platform differences, eliminate hidden infrastructure traps, and scope your version one for validated traction.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-mosano-navy/90 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero fluff, real engineering benchmarks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Web vs. Mobile vs. AI-Native breakdown</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Uncovers 5 hidden costs before you build</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Transparent scoping without binding lock-in</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#budget-calculator"
                onClick={() => trackCTAClick("hero", "use_budget_planner")}
                className="px-6 py-3.5 rounded-xl bg-mosano-blue hover:bg-mosano-navy text-white font-bold text-base transition-all shadow-lg hover:shadow-mosano-hover flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-mosano-yellow" />
                <span>launch budget planner</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#cost-drivers"
                onClick={() => trackCTAClick("hero", "read_cost_guide")}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-mosano-surface border-2 border-mosano-border text-mosano-navy font-bold text-sm transition-all flex items-center gap-2"
              >
                <span>explore 2026 cost drivers</span>
                <ArrowDown className="w-4 h-4 text-mosano-blue" />
              </a>
            </div>

            {/* Proof bar */}
            <div className="pt-6 border-t border-mosano-border/70 flex flex-wrap items-center gap-6 text-xs text-mosano-navy/70">
              <div className="flex items-center gap-2">
                <span className="font-black text-mosano-navy text-sm">4–12 WEEKS</span>
                <span>Average MVP delivery</span>
              </div>
              <span className="hidden sm:inline text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <span className="font-black text-mosano-navy text-sm">100% IP</span>
                <span>Direct client ownership</span>
              </div>
              <span className="hidden sm:inline text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <span className="font-black text-mosano-navy text-sm">PORTUGAL HQ</span>
                <span>Global tech delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mosano Signature Brand Visual (Glassmorphic 3D Card Composition) */}
          <div className="lg:col-span-5 relative">
            {/* Background glowing frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-mosano-blue/20 via-mosano-magenta/15 to-transparent rounded-3xl blur-2xl transform scale-95" />

            <div className="relative bg-white/80 backdrop-blur-xl border-2 border-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Header badge inside visual */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-mosano-blue" />
                  <div className="w-3 h-3 rounded-full bg-mosano-magenta" />
                  <div className="w-3 h-3 rounded-full bg-mosano-yellow" />
                </div>
                <span className="text-[11px] font-bold text-mosano-navy/60 uppercase tracking-wider">
                  Mosano Architecture Benchmarks
                </span>
              </div>

              {/* Central Graphic: Cost & Velocity Matrix */}
              <div className="bg-mosano-navy text-white rounded-2xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-mosano-mint mb-3 font-mono">
                  <span>SYSTEM_HEALTH: NOMINAL</span>
                  <span>VELOCITY: FAST</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>Core Product Architecture</span>
                      <span className="text-mosano-yellow font-bold">100%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-mosano-yellow h-full rounded-full w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>Automated CI/CD &amp; Testing</span>
                      <span className="text-mosano-mint font-bold">94%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-mosano-mint h-full rounded-full w-[94%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>AI Model / API Pipeline</span>
                      <span className="text-mosano-magenta font-bold">88%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-mosano-magenta h-full rounded-full w-[88%]" />
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pill */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/60">Estimated Cost Reduction:</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    -35% via Lean Scoping
                  </span>
                </div>
              </div>

              {/* Comparison Preview Callout */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-mosano-surface border border-mosano-border">
                  <span className="text-gray-500 block mb-0.5">Typical Agency Rate</span>
                  <span className="font-bold text-mosano-navy text-sm">€80k – €150k+</span>
                  <span className="text-[10px] text-red-500 block mt-0.5">Slow &amp; heavy bloat</span>
                </div>

                <div className="p-3 rounded-xl bg-mosano-blue/5 border border-mosano-blue/20">
                  <span className="text-mosano-blue font-semibold block mb-0.5">Mosano Agile Pod</span>
                  <span className="font-bold text-mosano-blue text-sm">€18k – €58k</span>
                  <span className="text-[10px] text-emerald-600 block mt-0.5">Lean, battle-tested</span>
                </div>
              </div>

              {/* Motto Quote from Visual Identity */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-mosano-blue/5 to-mosano-magenta/5 border border-mosano-magenta/20 text-center">
                <p className="text-xs italic text-mosano-navy font-medium">
                  &ldquo;Your ride or die Software Studio partner.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
