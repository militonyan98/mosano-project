"use client";

import React, { useState } from "react";
import { trackCTAClick } from "@/lib/analytics";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  Sliders,
  DollarSign,
  Cpu,
  Layers,
  Clock,
} from "lucide-react";

interface CostGuideContentProps {
  currency: "EUR" | "USD";
  onOpenContact: () => void;
}

export const CostGuideContent: React.FC<CostGuideContentProps> = ({
  currency,
  onOpenContact,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const symbol = currency === "USD" ? "$" : "€";
  const eurToCurr = (eur: number) => (currency === "USD" ? Math.round(eur * 1.1) : eur);

  return (
    <article className="space-y-16 sm:space-y-20 text-mosano-navy w-full">
      {/* Section 1: Executive Overview & The 2026 Shift */}
      <section
        id="cost-drivers"
        className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-mosano-surface/50 border border-mosano-border/90 shadow-sm space-y-8"
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mosano-blue/10 text-mosano-blue text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-mosano-blue" />
            <span>2026 Price Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-mosano-navy tracking-tight leading-tight">
            What Does It Really Cost to Build an MVP in 2026?
          </h2>
          <p className="text-base sm:text-lg text-mosano-navy/80 leading-relaxed font-normal max-w-3xl">
            Scaffolding code with AI and modern frameworks is faster than ever. However, overall engineering complexity has shifted toward <strong>seamless UX, AI model orchestration, and production security</strong>. Use our interactive budget calculator above to customize your scope, or compare tradeoffs in our architecture breakdown below.
          </p>
        </div>

        {/* 2026 Benchmark Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-mosano-border shadow-sm hover:border-mosano-blue/50 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-mosano-blue tracking-wider">
                  Tier 1 • Focused V1
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-mosano-navy tracking-tight">
                {symbol}{eurToCurr(18000).toLocaleString()} – {symbol}{eurToCurr(32000).toLocaleString()}
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-mosano-surface text-xs font-bold text-mosano-blue mt-3 border border-mosano-border/60">
                <Clock className="w-3.5 h-3.5" />
                <span>4 to 7 Weeks Timeline</span>
              </div>
              <p className="text-xs sm:text-sm text-mosano-navy/70 mt-4 leading-relaxed">
                Core user loop, essential auth, billing, and responsive UI. Ideal for validating your initial hypothesis quickly with early adopters.
              </p>
            </div>
            <div className="pt-4 border-t border-mosano-border/60 mt-4 flex items-center gap-2 text-xs font-semibold text-mosano-navy/80">
              <span className="w-1.5 h-1.5 rounded-full bg-mosano-blue" />
              <span>Fastest time to first customer</span>
            </div>
          </div>

          {/* Card 2 (Featured Sweet Spot) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-mosano-blue shadow-lg relative flex flex-col justify-between ring-4 ring-mosano-blue/5">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-mosano-yellow text-mosano-navy text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
              <span>★</span>
              <span>Popular Sweet Spot</span>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-mosano-magenta tracking-wider">
                  Tier 2 • Growth MVP
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-mosano-navy tracking-tight">
                {symbol}{eurToCurr(32000).toLocaleString()} – {symbol}{eurToCurr(58000).toLocaleString()}
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-mosano-blue/10 text-xs font-bold text-mosano-blue mt-3 border border-mosano-blue/20">
                <Clock className="w-3.5 h-3.5" />
                <span>7 to 11 Weeks Timeline</span>
              </div>
              <p className="text-xs sm:text-sm text-mosano-navy/70 mt-4 leading-relaxed">
                Multi-role workflows, analytics event bus, transactional emails, integrations, and investor-ready design finish.
              </p>
            </div>
            <div className="pt-4 border-t border-mosano-border/60 mt-4 flex items-center gap-2 text-xs font-semibold text-mosano-navy/80">
              <span className="w-1.5 h-1.5 rounded-full bg-mosano-magenta" />
              <span>Ready for Seed &amp; Series A demos</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-mosano-border shadow-sm hover:border-mosano-violet/50 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-mosano-violet tracking-wider">
                  Tier 3 • AI / Scaled MVP
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-mosano-navy tracking-tight">
                {symbol}{eurToCurr(58000).toLocaleString()} – {symbol}{eurToCurr(95000).toLocaleString()}+
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-mosano-surface text-xs font-bold text-mosano-violet mt-3 border border-mosano-border/60">
                <Clock className="w-3.5 h-3.5" />
                <span>11 to 16 Weeks Timeline</span>
              </div>
              <p className="text-xs sm:text-sm text-mosano-navy/70 mt-4 leading-relaxed">
                Custom RAG knowledge pipelines, real-time collaboration engines, or regulated fintech/healthtech workflows.
              </p>
            </div>
            <div className="pt-4 border-t border-mosano-border/60 mt-4 flex items-center gap-2 text-xs font-semibold text-mosano-navy/80">
              <span className="w-1.5 h-1.5 rounded-full bg-mosano-violet" />
              <span>Deep proprietary tech moats</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Platform Comparison */}
      <section
        id="platform-comparison"
        className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-mosano-border shadow-sm space-y-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mosano-magenta/10 text-mosano-magenta text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-mosano-magenta" />
            <span>Architecture Tradeoffs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
            Web vs. Mobile vs. AI-Native: Where Should You Launch?
          </h2>
          <p className="text-sm sm:text-base text-mosano-navy/80 leading-relaxed font-normal max-w-3xl">
            Demanding both web and native mobile apps on day one is a common pitfall. Picking one clear foundation saves up to 45% in upfront development.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-mosano-border shadow-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-mosano-surface border-b border-mosano-border text-mosano-navy font-bold">
                <th className="p-4 sm:p-5">Platform Archetype</th>
                <th className="p-4 sm:p-5">Cost Multiplier</th>
                <th className="p-4 sm:p-5">Time to Live</th>
                <th className="p-4 sm:p-5">Best Fit &amp; Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mosano-border">
              <tr className="hover:bg-mosano-surface/50 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Modern Web SaaS (Next.js / TypeScript)</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                    1.0x (Baseline)
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-medium">4 – 8 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80">
                  B2B software, customer portals, fast iteration cycles. Recommended for most V1s.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/50 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-mosano-blue" />
                    <span>Cross-Platform Mobile (React Native)</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5">
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-mosano-blue font-bold text-xs border border-blue-200">
                    1.25x – 1.35x
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-medium">6 – 10 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80">
                  Apps requiring camera, push alerts, offline storage, or App Store presence.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/50 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-mosano-magenta" />
                    <span>AI-Native Application (RAG / LLMs)</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5">
                  <span className="px-2 py-0.5 rounded-full bg-pink-50 text-mosano-magenta font-bold text-xs border border-pink-200">
                    1.35x – 1.6x
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-medium">8 – 14 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80">
                  Domain copilots, document intelligence, and automated agent workflows.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/50 transition-colors bg-red-50/20">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Dual Native (Swift + Kotlin)</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5">
                  <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-xs border border-red-200">
                    2.0x – 2.5x
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-medium">14 – 20 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80">
                  <strong className="text-red-600">Rarely advised for V1</strong> due to high initial maintenance and dual engineering pod overhead.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: The 5 Hidden Costs */}
      <section
        id="hidden-traps"
        className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-mosano-surface/50 border border-mosano-border shadow-sm space-y-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            <span>Budget Traps To Avoid</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
            The 5 Hidden MVP Costs That Catch Non-Technical Founders Off Guard
          </h2>
          <p className="text-sm sm:text-base text-mosano-navy/80 leading-relaxed font-normal max-w-3xl">
            Base dev quotes often omit secondary expenses that add 25% to 40% in friction if not accounted for early.
          </p>
        </div>

        {/* Dedicated Engineering & Architecture Photo */}
        <div className="relative overflow-hidden rounded-2xl border border-mosano-border/80 shadow-md bg-mosano-navy w-full group">
          <img
            src="/mvp-architecture-engineering.jpg"
            alt="Software engineering architecture, code review and cloud system debugging"
            className="w-full h-56 sm:h-72 lg:h-80 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Points listed strictly under each other */}
        <div className="space-y-3.5 w-full">
          {[
            {
              num: "01",
              title: "AI Token & Model Consumption",
              desc: "Running LLMs without semantic caching or token limits triggers surprise cloud bills.",
              impact: "€300 – €2,500/mo unbudgeted spend",
            },
            {
              num: "02",
              title: "App Store Review Delays",
              desc: "Apple & Google strict review guidelines (IAP, account deletion, privacy labels) can delay launch by weeks.",
              impact: "2 to 4 weeks lost launch momentum",
            },
            {
              num: "03",
              title: "Auth & Multi-Tenancy Debt",
              desc: "Role-based access (RBAC), team workspaces, and session controls take weeks if built from scratch.",
              impact: "40–60 wasted dev hours",
            },
            {
              num: "04",
              title: "Post-Launch Iteration Buffer",
              desc: "Real users uncover immediate edge cases. You need dedicated support to ship fixes post-launch.",
              impact: "Plan 20% sprint buffer",
            },
            {
              num: "05",
              title: "Monolithic Spaghetti & Rewrite Risk",
              desc: "Cheap outsourced code frequently cuts corners with zero automated tests or documentation, requiring a complete rewrite upon raising capital.",
              impact: "100% loss of initial dev investment",
            },
          ].map((trap) => (
            <div
              key={trap.num}
              className="p-5 rounded-2xl bg-white border border-mosano-border hover:border-mosano-blue/40 transition-all shadow-sm flex items-start gap-4 hover:shadow-md"
            >
              <span className="text-xl font-black text-mosano-magenta font-mono flex-shrink-0 w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
                {trap.num}
              </span>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-mosano-navy">
                  {trap.title}
                </h3>
                <p className="text-xs sm:text-sm text-mosano-navy/70 leading-relaxed">
                  {trap.desc}
                </p>
                <div className="text-[11px] font-semibold text-mosano-blue pt-1">
                  Hidden impact: <span className="text-mosano-navy font-bold">{trap.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Scoping Down Framework */}
      <section
        id="scoping-framework"
        className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-mosano-border shadow-sm space-y-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-emerald-600" />
            <span>Scope Discipline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
            How to Cut 40% of MVP Waste
          </h2>
          <p className="text-sm sm:text-base text-mosano-navy/80 leading-relaxed font-normal max-w-3xl">
            Every extra feature introduces non-linear complexity. Focus only on the hypothesis that drives your first paying user:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-red-50/40 border border-red-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wide">
              ✕ Postpone to V2 (Common Waste)
            </div>
            <ul className="text-xs sm:text-sm text-mosano-navy/80 space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold text-base leading-none">•</span>
                <span>Custom in-app chat (use Slack/email or Crisp instead)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold text-base leading-none">•</span>
                <span>Complex notification matrix and granular preferences</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold text-base leading-none">•</span>
                <span>Automated product walkthrough tours and gamification</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold text-base leading-none">•</span>
                <span>Multi-language localization before single-language PMF</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wide">
              ✓ Non-Negotiable for V1 (High ROI)
            </div>
            <ul className="text-xs sm:text-sm text-mosano-navy/80 space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold text-base leading-none">•</span>
                <span><strong>The Core Loop</strong> that delivers immediate, tangible user value</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold text-base leading-none">•</span>
                <span>Stripe checkout or payment gateway (monetization proves demand)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold text-base leading-none">•</span>
                <span>Product analytics (PostHog/Mixpanel) for funnel and activation tracking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold text-base leading-none">•</span>
                <span>Error monitoring (Sentry) and automated CI/CD for rapid triage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Methodology & Disclaimer */}
      <section
        id="methodology"
        className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-mosano-surface/50 border border-mosano-border shadow-sm space-y-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mosano-violet/10 text-mosano-violet text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-mosano-violet" />
            <span>Mosano Delivery Model</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
            Estimate Methodology &amp; Transparent Sprints
          </h2>
          <p className="text-sm sm:text-base text-mosano-navy/80 leading-relaxed font-normal max-w-3xl">
            No bloated 50-page proposals or surprise billable hours. Through our <a href="https://mosano.eu/service/product-development/" target="_blank" rel="noopener noreferrer" className="font-semibold text-mosano-blue hover:text-mosano-magenta transition-colors">dedicated product development services</a>, Mosano works in <strong>fixed-sprint engineering pods</strong> delivering globally. Learn more in our <a href="https://mosano.eu/blog/from-idea-to-mvp-a-ctos-guide-to-building-a-product-that-scales/" target="_blank" rel="noopener noreferrer" className="font-semibold text-mosano-blue hover:text-mosano-magenta transition-colors">CTO guide to building scalable MVPs</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white border border-mosano-border shadow-sm hover:border-mosano-blue/40 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-mosano-blue font-bold text-sm flex items-center justify-center mb-3">
              1
            </div>
            <h3 className="font-bold text-mosano-navy text-base mb-1">
              Discovery Sprint
            </h3>
            <p className="text-mosano-navy/70 text-xs sm:text-sm leading-relaxed">
              5 days of interactive architecture, clickable wireframes, and locked scope with a fixed price guarantee before kickoff.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-mosano-border shadow-sm hover:border-mosano-magenta/40 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-pink-50 text-mosano-magenta font-bold text-sm flex items-center justify-center mb-3">
              2
            </div>
            <h3 className="font-bold text-mosano-navy text-base mb-1">
              Production Pods
            </h3>
            <p className="text-mosano-navy/70 text-xs sm:text-sm leading-relaxed">
              Senior engineering pods (Tech Lead + Senior Engineer + Designer) shipping working software with weekly demo drops every Friday.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-mosano-border shadow-sm hover:border-emerald-500/40 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center mb-3">
              3
            </div>
            <h3 className="font-bold text-mosano-navy text-base mb-1">
              Handover &amp; 100% IP
            </h3>
            <p className="text-mosano-navy/70 text-xs sm:text-sm leading-relaxed">
              100% intellectual property transferred to your organization. Clean GitHub repositories, CI/CD pipelines, and zero vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ Accordion */}
      <section
        id="faq"
        className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-mosano-border shadow-sm space-y-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mosano-blue/10 text-mosano-blue text-xs font-bold uppercase tracking-wider">
            <span>Frequently Asked</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-mosano-navy/70">
            Answers to common founder questions regarding budgeting, tech stack selection, and IP ownership.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "How much should a startup budget for an MVP in 2026?",
              a: `A realistic budget for an investor-grade MVP engineered by Mosano ranges from ${symbol}${eurToCurr(18000).toLocaleString()} to ${symbol}${eurToCurr(58000).toLocaleString()}. Focused SaaS apps start around ${symbol}${eurToCurr(18000).toLocaleString()}–${symbol}${eurToCurr(32000).toLocaleString()}, while AI-native or mobile products average ${symbol}${eurToCurr(32000).toLocaleString()}–${symbol}${eurToCurr(58000).toLocaleString()}.`,
            },
            {
              q: "How long does it take to launch an MVP?",
              a: "With modern frameworks and cloud tooling, a focused MVP should take 4 to 10 weeks to reach production. Quotes exceeding 12 weeks for V1 typically signal bloated scope.",
            },
            {
              q: "What affects the cost of an AI-powered MVP?",
              a: "Key cost drivers include model architecture (hosted APIs vs fine-tuning), RAG/vector retrieval setup, token caching, and human-in-the-loop evals. Expect AI features to add ~20%–35% in engineering effort.",
            },
            {
              q: "Why partner with Mosano over freelancers or big agencies?",
              a: "Mosano provides the focus and caliber of a senior team without full-time hiring friction or agency overhead. Our pods deliver top-tier craft, direct Slack collaboration, and 100% IP ownership.",
            },
            {
              q: "Does Mosano sign Non-Disclosure Agreements (NDAs)?",
              a: "Yes. We treat your IP and proprietary logic with complete confidentiality and regularly sign mutual NDAs before reviewing product details.",
            },
          ].map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-mosano-border bg-white overflow-hidden transition-all shadow-sm hover:border-mosano-blue/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-mosano-navy hover:text-mosano-blue transition-colors text-sm sm:text-base"
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-mosano-magenta flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-mosano-navy/75 leading-relaxed border-t border-mosano-border/40 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Mid-Content Scoping CTA */}
      <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-mosano-navy text-white relative overflow-hidden shadow-2xl border border-mosano-blue/30">
        <div className="relative z-10 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-mosano-yellow text-xs font-bold uppercase tracking-wider">
            <span>Next Step</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Ready to Scope Your Version 1?
          </h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Get a tailored technical breakdown from our senior engineering leads. We review your concept and map out a lean 4 to 8 week launch roadmap.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                trackCTAClick("mid_content_banner", "schedule_scoping_session");
                onOpenContact();
              }}
              className="px-6 py-3.5 rounded-xl bg-mosano-magenta hover:bg-pink-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg flex items-center gap-2 group active:scale-95"
            >
              <span>Discuss Your MVP Scope</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-mosano-blue/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-10 w-48 h-48 bg-mosano-magenta/30 rounded-full blur-3xl pointer-events-none" />
      </div>
    </article>
  );
};
