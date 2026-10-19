"use client";

import React, { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { ScopeCalculation, PlannerState } from "./BudgetPlanner";
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  ShieldAlert,
  Sliders,
  Cpu,
  Layers,
  Clock,
  Sparkles,
  CheckCircle2,
  Lock,
  Loader2,
  Send,
  AlertCircle,
  Building,
  Mail,
  User,
  Calendar,
} from "lucide-react";

interface CostGuideContentProps {
  currency: "EUR" | "USD";
  onOpenContact?: () => void;
  selectedScope?: ScopeCalculation | null;
  plannerState?: PlannerState | null;
}

export const CostGuideContent: React.FC<CostGuideContentProps> = ({
  currency,
  selectedScope,
  plannerState,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectName: "",
    launchGoal: "4–8 weeks (ASAP)",
  });
  const [formStarted, setFormStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [utms, setUtms] = useState({
    source: "",
    medium: "",
    campaign: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setUtms({
        source: params.get("utm_source") || "direct",
        medium: params.get("utm_medium") || "none",
        campaign: params.get("utm_campaign") || "mvp_cost_2026",
      });
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("form_start", {
        has_scope_selected: !!selectedScope,
      });
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectName: formData.projectName,
          launchGoal: formData.launchGoal,
          scopeSummary: selectedScope
            ? {
                platform: selectedScope.platformLabel,
                aiLevel: selectedScope.aiLabel,
                screens: plannerState?.screens || 5,
                priceMin: selectedScope.priceMin,
                priceMax: selectedScope.priceMax,
                weeksMin: selectedScope.weeksMin,
                weeksMax: selectedScope.weeksMax,
                podName: selectedScope.podName,
                teamComposition: selectedScope.teamComposition,
                summary: selectedScope.scopeSummaryText,
              }
            : null,
          currency,
          utmSource: utms.source,
          utmMedium: utms.medium,
          utmCampaign: utms.campaign,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);

      trackEvent("generate_lead", {
        platform: selectedScope?.platformLabel || "Direct Scoping Call",
        ai_level: selectedScope?.aiLabel || "Standard",
        currency,
        value: selectedScope
          ? (selectedScope.priceMin + selectedScope.priceMax) / 2
          : 25000,
        utm_source: utms.source,
        utm_campaign: utms.campaign,
      });
    } catch (err: any) {
      console.error("Submission failed:", err);
      setErrorMessage(
        err.message ||
          "Something went wrong. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
                <h3 className="text-xs font-bold uppercase text-mosano-blue tracking-wider">
                  Tier 1 • Focused V1
                </h3>
              </div>
              <div className="text-xl md:text-lg lg:text-2xl font-black text-mosano-navy tracking-tight whitespace-nowrap">
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
                <h3 className="text-xs font-bold uppercase text-mosano-magenta tracking-wider">
                  Tier 2 • Growth MVP
                </h3>
              </div>
              <div className="text-xl md:text-lg lg:text-2xl font-black text-mosano-navy tracking-tight whitespace-nowrap">
                {symbol}{eurToCurr(32000).toLocaleString()} – {symbol}{eurToCurr(58000).toLocaleString()}
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-mosano-magenta/10 text-xs font-bold text-mosano-magenta mt-3 border border-mosano-magenta/20">
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
                <h3 className="text-xs font-bold uppercase text-mosano-violet tracking-wider">
                  Tier 3 • AI / Scaled MVP
                </h3>
              </div>
              <div className="text-xl md:text-lg lg:text-2xl font-black text-mosano-navy tracking-tight whitespace-nowrap">
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
                <th className="p-4 sm:p-5 w-[28%]">Platform Archetype</th>
                <th className="p-4 sm:p-5 w-[19%] min-w-[150px] whitespace-nowrap">Cost Multiplier</th>
                <th className="p-4 sm:p-5 w-[15%] whitespace-nowrap">Time to Live</th>
                <th className="p-4 sm:p-5 w-[38%] max-w-md">Best Fit &amp; Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mosano-border">
              <tr className="hover:bg-mosano-surface/50 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>Modern Web SaaS (Next.js / TypeScript)</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 whitespace-nowrap">
                  <span className="inline-block whitespace-nowrap px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                    1.0x (Baseline)
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-medium whitespace-nowrap">4 – 8 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80 max-w-md">
                  B2B software, customer portals, fast iteration cycles. Recommended for most V1s.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/50 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-mosano-blue flex-shrink-0" />
                    <span>Cross-Platform Mobile (React Native)</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 whitespace-nowrap">
                  <span className="inline-block whitespace-nowrap px-2.5 py-0.5 rounded-full bg-blue-50 text-mosano-blue font-bold text-xs border border-blue-200">
                    1.25x – 1.35x
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-medium whitespace-nowrap">6 – 10 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80 max-w-md">
                  Apps requiring camera, push alerts, offline storage, or App Store presence.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/50 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-mosano-magenta flex-shrink-0" />
                    <span>AI-Native Application (RAG / LLMs)</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 whitespace-nowrap">
                  <span className="inline-block whitespace-nowrap px-2.5 py-0.5 rounded-full bg-pink-50 text-mosano-magenta font-bold text-xs border border-pink-200">
                    1.35x – 1.6x
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-medium whitespace-nowrap">8 – 14 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80 max-w-md">
                  Domain copilots, document intelligence, and automated agent workflows.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/50 transition-colors bg-red-50/20">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    <span>Dual Native (Swift + Kotlin)</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 whitespace-nowrap">
                  <span className="inline-block whitespace-nowrap px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-xs border border-red-200">
                    2.0x – 2.5x
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-medium whitespace-nowrap">14 – 20 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80 max-w-md">
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
            <h3 className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wide">
              ✕ Postpone to V2 (Common Waste)
            </h3>
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
            <h3 className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wide">
              ✓ Non-Negotiable for V1 (High ROI)
            </h3>
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
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;
            return (
              <div
                key={index}
                className="rounded-2xl border border-mosano-border bg-white overflow-hidden transition-all shadow-sm hover:border-mosano-blue/30"
              >
                <h3 className="m-0">
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
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
                </h3>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`px-5 pb-5 text-xs sm:text-sm text-mosano-navy/75 leading-relaxed border-t border-mosano-border/40 pt-3 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Step Section with Inline Contact Form */}
      <div
        id="contact-form"
        className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-mosano-navy text-white relative overflow-hidden shadow-2xl border border-mosano-blue/30"
      >
        <div className="relative z-10 space-y-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-mosano-yellow text-xs font-bold uppercase tracking-wider">
              <span>Next Step</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Ready to Scope Your Version 1?
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Get a tailored technical breakdown from our senior engineering leads. We review your concept and map out a lean 4 to 8 week launch roadmap.
            </p>
          </div>

          <div className="w-full max-w-2xl bg-white text-mosano-navy rounded-2xl shadow-xl border border-mosano-border overflow-hidden">
            {submitted ? (
              /* Confirmation View */
              <div className="p-8 sm:p-10 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-mosano-magenta tracking-wider uppercase">
                    Inquiry Dispatched
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-mosano-navy">
                    Scope Received. Let’s Build.
                  </h3>
                  <p className="text-sm text-mosano-navy/80 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our engineering leads have received your scope specifications. We will review your architecture requirements and reach out within 24 business hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-mosano-surface border border-mosano-border text-left text-xs space-y-2 max-w-sm mx-auto">
                  <div className="font-bold text-mosano-navy flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-mosano-blue" />
                    <span>Next Steps in Our Process:</span>
                  </div>
                  <p className="text-mosano-navy/70 leading-relaxed">
                    1. Initial technical fit assessment by a Mosano Solutions Architect.
                    <br />
                    2. Direct calendar invite for a 30-minute discovery session.
                    <br />
                    3. Delivery of a concrete sprint roadmap &amp; fixed-price scoping.
                  </p>
                </div>
              </div>
            ) : (
              /* Lead Capture Form */
              <div>
                {selectedScope && (
                  <div className="bg-mosano-surface px-6 sm:px-8 pt-6 pb-4 border-b border-mosano-border/70">
                    <div className="p-3 rounded-xl bg-white border border-mosano-blue/20 shadow-sm flex items-center justify-between flex-wrap gap-2 text-xs">
                      <div>
                        <span className="text-[11px] font-bold text-mosano-blue block uppercase">
                          Scope Summary Snapshot:
                        </span>
                        <span className="font-bold text-mosano-navy block">
                          {selectedScope.platformLabel} • {plannerState?.screens || 5} Flows • {selectedScope.aiLabel}
                        </span>
                        <span className="text-mosano-blue font-semibold text-[11px] block mt-0.5">
                          Pod: {selectedScope.podName} ({selectedScope.teamComposition.length} Experts)
                        </span>
                      </div>
                      <div className="text-right font-black text-mosano-magenta text-sm">
                        {selectedScope.currencySymbol}
                        {selectedScope.priceMin.toLocaleString()} – {selectedScope.currencySymbol}
                        {selectedScope.priceMax.toLocaleString()}
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-mosano-navy mb-1.5">
                        Your Full Name <span className="text-mosano-magenta">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Sofia Martins"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-mosano-border focus:border-mosano-blue focus:ring-2 focus:ring-mosano-blue/20 text-sm text-mosano-navy outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-mosano-navy mb-1.5">
                        Work Email Address <span className="text-mosano-magenta">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="founder@startup.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-mosano-border focus:border-mosano-blue focus:ring-2 focus:ring-mosano-blue/20 text-sm text-mosano-navy outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-mosano-navy mb-1.5">
                        Startup / Project Name
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="projectName"
                          placeholder="e.g. NextGen Copilot"
                          value={formData.projectName}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-mosano-border focus:border-mosano-blue focus:ring-2 focus:ring-mosano-blue/20 text-sm text-mosano-navy outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-mosano-navy mb-1.5">
                        Target Release Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <select
                          name="launchGoal"
                          value={formData.launchGoal}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-mosano-border focus:border-mosano-blue focus:ring-2 focus:ring-mosano-blue/20 text-sm text-mosano-navy outline-none transition-all bg-white"
                        >
                          <option value="4–8 weeks (ASAP)">4–8 weeks (ASAP)</option>
                          <option value="2–3 months">2–3 months</option>
                          <option value="Q3/Q4 2026">Later in 2026</option>
                          <option value="Exploring & Planning">Just budgeting for now</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3.5 px-6 rounded-xl bg-mosano-blue hover:bg-mosano-navy text-white font-bold text-sm transition-all shadow-lg hover:shadow-mosano-hover flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting scope to Mosano...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-mosano-yellow" />
                        <span>request technical scoping review</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-mosano-navy/60 pt-1">
                    <Lock className="w-3 h-3 text-mosano-magenta" />
                    <span>Confidential. Non-disclosure agreement guaranteed upon request.</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-mosano-blue/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-10 w-48 h-48 bg-mosano-magenta/30 rounded-full blur-3xl pointer-events-none" />
      </div>
    </article>
  );
};
