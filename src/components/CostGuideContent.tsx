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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const symbol = currency === "USD" ? "$" : "€";
  const eurToCurr = (eur: number) => (currency === "USD" ? Math.round(eur * 1.1) : eur);

  return (
    <article className="space-y-16 text-mosano-navy w-full">
      {/* Section 1: Executive Overview & The 2026 Shift */}
      <section id="cost-drivers" className="scroll-mt-28 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-mosano-navy tracking-tight leading-tight">
          What Does It Really Cost to Build an MVP in 2026?
        </h2>

        <p className="text-lg text-mosano-navy/80 leading-relaxed font-normal">
          Building a Minimum Viable Product in 2026 is no longer about paying an outdated traditional agency hundreds of thousands of euros to spend six months writing basic CRUD boilerplate. With modern frameworks, AI-assisted development tooling, and cloud-native serverless backends, code scaffolding has never been faster.
        </p>

        <p className="text-lg text-mosano-navy/80 leading-relaxed font-normal">
          However, <strong>software complexity has shifted upstream and downstream</strong>. Founders today face higher user expectations for polished UI/UX, complex AI/LLM model orchestration, strict GDPR/security compliance, and zero tolerance for buggy releases.
        </p>

        {/* 2026 Benchmark Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-mosano-border shadow-sm hover:border-mosano-blue/40 transition-colors">
            <span className="text-xs font-bold uppercase text-mosano-blue tracking-wider block">
              Focused V1
            </span>
            <div className="text-2xl sm:text-3xl font-black text-mosano-navy mt-1">
              {symbol}{eurToCurr(18000).toLocaleString()} – {symbol}{eurToCurr(32000).toLocaleString()}
            </div>
            <div className="text-xs font-semibold text-mosano-blue mt-1">
              4 to 7 Weeks Timeline
            </div>
            <p className="text-xs sm:text-sm text-mosano-navy/70 mt-3 leading-relaxed">
              Single core user loop, essential authentication, automated billing, and high-fidelity responsive UI. Best for validating urgent market hypotheses.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-mosano-surface border-2 border-mosano-blue shadow-md relative">
            <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-mosano-yellow text-mosano-navy text-[10px] font-extrabold uppercase tracking-wider">
              POPULAR SWEET SPOT
            </div>
            <span className="text-xs font-bold uppercase text-mosano-magenta tracking-wider block">
              Growth MVP
            </span>
            <div className="text-2xl sm:text-3xl font-black text-mosano-navy mt-1">
              {symbol}{eurToCurr(32000).toLocaleString()} – {symbol}{eurToCurr(58000).toLocaleString()}
            </div>
            <div className="text-xs font-semibold text-mosano-blue mt-1">
              7 to 11 Weeks Timeline
            </div>
            <p className="text-xs sm:text-sm text-mosano-navy/70 mt-3 leading-relaxed">
              Multi-role workflows, analytics event bus, transactional notifications, third-party integrations, and investor-ready product finish.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-mosano-border shadow-sm hover:border-mosano-blue/40 transition-colors">
            <span className="text-xs font-bold uppercase text-mosano-purple-active tracking-wider block">
              AI / Scaled MVP
            </span>
            <div className="text-2xl sm:text-3xl font-black text-mosano-navy mt-1">
              {symbol}{eurToCurr(58000).toLocaleString()} – {symbol}{eurToCurr(95000).toLocaleString()}+
            </div>
            <div className="text-xs font-semibold text-mosano-blue mt-1">
              11 to 16 Weeks Timeline
            </div>
            <p className="text-xs sm:text-sm text-mosano-navy/70 mt-3 leading-relaxed">
              Custom RAG knowledge pipelines, real-time collaboration engines, high-volume multi-sided marketplaces, or regulated fintech/healthtech apps.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Platform Comparison */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
          Web vs. Mobile vs. AI-Native: Where Should You Launch?
        </h2>

        <p className="text-base sm:text-lg text-mosano-navy/80 leading-relaxed font-normal">
          One of the costliest errors early-stage founders make is demanding both a web portal and native iOS/Android apps on day one without validated demand. Selecting the right foundation saves up to 45% in upfront engineering investment.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-mosano-border shadow-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-mosano-surface border-b border-mosano-border text-mosano-navy font-bold">
                <th className="p-4 sm:p-5">Platform Archetype</th>
                <th className="p-4 sm:p-5">Cost Multiplier</th>
                <th className="p-4 sm:p-5">Time to Live</th>
                <th className="p-4 sm:p-5">Best Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mosano-border">
              <tr className="hover:bg-mosano-surface/40 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  Modern Web SaaS (Next.js / TypeScript)
                </td>
                <td className="p-4 sm:p-5 text-emerald-600 font-semibold">1.0x (Baseline)</td>
                <td className="p-4 sm:p-5">4 – 8 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80">
                  B2B software, internal tools, client portals, quick iteration loops.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/40 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  Cross-Platform Mobile (React Native)
                </td>
                <td className="p-4 sm:p-5 text-mosano-blue font-semibold">1.25x – 1.35x</td>
                <td className="p-4 sm:p-5">6 – 10 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80">
                  Consumer apps requiring camera, push notifications, offline cache &amp; App Store presence.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/40 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  AI-Native Application (RAG / LLMs)
                </td>
                <td className="p-4 sm:p-5 text-mosano-magenta font-semibold">1.35x – 1.6x</td>
                <td className="p-4 sm:p-5">8 – 14 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80">
                  Domain-specific copilots, document intelligence, automated agents, semantic discovery.
                </td>
              </tr>
              <tr className="hover:bg-mosano-surface/40 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-mosano-navy">
                  Dual Native (Swift + Kotlin)
                </td>
                <td className="p-4 sm:p-5 text-red-600 font-semibold">2.0x – 2.5x</td>
                <td className="p-4 sm:p-5">14 – 20 Weeks</td>
                <td className="p-4 sm:p-5 text-mosano-navy/80">
                  <span className="text-red-500 font-medium">Rarely advised for V1</span>. High maintenance overhead for early validation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: The 5 Hidden Costs */}
      <section id="hidden-traps" className="scroll-mt-28 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
          The 5 Hidden MVP Costs That Catch Non-Technical Founders Off Guard
        </h2>

        <p className="text-base sm:text-lg text-mosano-navy/80 leading-relaxed font-normal">
          An MVP quote usually accounts for development hours. But early-stage startups encounter secondary expenses that can quickly add 25% to 40% in friction if not planned in advance.
        </p>

        <div className="space-y-4">
          {[
            {
              num: "01",
              title: "Third-Party SaaS & AI Token Consumption Spikes",
              desc: "Deploying an LLM or computer vision feature without caching or prompt guardrails can lead to unexpected cloud invoices. In 2026, semantic caching and streaming responses must be built into the MVP architecture from day one.",
              impact: "€300 – €2,500/mo unbudgeted cloud burn",
            },
            {
              num: "02",
              title: "App Store Review & Guideline Delays",
              desc: "Apple and Google enforce rigorous policies around account deletion, in-app purchases (IAP 30% cut), privacy nutrition labels, and user-generated content moderation. Reworking these mid-flight delays releases by 2 to 4 weeks.",
              impact: "€4,000+ in blocked marketing momentum",
            },
            {
              num: "03",
              title: "Authentication, Multi-Tenancy & Authorization Debt",
              desc: "Building authentication isn't just a sign-up form. Role-based access control (RBAC), team workspaces, invite links, session revocation, and passwordless magic links take substantial backend engineering if built from scratch instead of leveraging proven auth primitives.",
              impact: "40 to 60 wasted engineering hours",
            },
            {
              num: "04",
              title: "Post-Launch Iteration & Bug Triage Buffer",
              desc: "An MVP release is the starting line, not the finish line. When real users onboard, you need immediate capacity to ship rapid hotfixes and iterate on user feedback. Always allocate a 20% post-launch sprint buffer.",
              impact: "Founder panic if the initial agency disappears after handover",
            },
            {
              num: "05",
              title: "Monolithic Code Spaghetti & Re-Architecture Costs",
              desc: "Cheap outsourced code frequently cuts corners with hardcoded variables, missing migrations, and zero automated tests. When you raise seed funding, technical due diligence flags it as a complete rewrite.",
              impact: "Up to 100% loss of initial engineering capital",
            },
          ].map((trap) => (
            <div
              key={trap.num}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-mosano-border hover:border-mosano-blue/40 transition-all shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="text-xl font-black text-mosano-magenta font-mono flex-shrink-0">
                  {trap.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-mosano-navy">
                    {trap.title}
                  </h3>
                  <p className="text-sm text-mosano-navy/70 leading-relaxed">
                    {trap.desc}
                  </p>
                  <div className="inline-block pt-1 text-xs font-semibold text-mosano-blue">
                    Hidden impact: <span className="text-mosano-navy font-bold">{trap.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Scoping Down Framework */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
          How to Cut 40% of MVP Waste Without Weakening Your Core Hypothesis
        </h2>

        <p className="text-base sm:text-lg text-mosano-navy/80 leading-relaxed font-normal">
          Every extra feature adds non-linear complexity. A product with 5 features requires 10 interaction test paths; a product with 10 features requires 45. Here is the framework Mosano uses during our collaborative discovery sessions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-mosano-border shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
              ✕
            </div>
            <h3 className="font-bold text-mosano-navy text-lg">
              Features You Can Safely Postpone to V2
            </h3>
            <ul className="text-sm text-mosano-navy/70 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Custom in-app messaging (use Slack/Intercom embeds or simple emails)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Granular custom notification preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Complex automated product tours (rely on crisp UX and 1-on-1 demos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Multi-currency or localized languages (validate in 1 dominant market first)</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-mosano-surface border border-mosano-blue/30 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <h3 className="font-bold text-mosano-navy text-lg">
              Non-Negotiable Investments for V1
            </h3>
            <ul className="text-sm text-mosano-navy/80 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>The <strong>Single Core Action</strong> that delivers the &ldquo;Aha!&rdquo; value moment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Seamless Stripe checkout / payment capture (monetization is ultimate validation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Clean analytics tracking (PostHog/Mixpanel) to measure activation funnel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Robust error boundaries and observability (Sentry) for instant bug detection</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Methodology & Disclaimer */}
      <section id="methodology" className="scroll-mt-28 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
          Estimate Methodology &amp; Transparent Scoping
        </h2>

        <p className="text-base sm:text-lg text-mosano-navy/80 leading-relaxed font-normal">
          Unlike traditional agencies that present bloated 50-page time-and-materials proposals, Mosano operates with <strong>fixed-sprint dedicated engineering pods</strong> based in Portugal.
        </p>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-mosano-surface to-white border border-mosano-border space-y-4">
          <h3 className="font-bold text-mosano-navy text-lg">
            How Our Estimations Are Structured:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="p-5 rounded-xl bg-white border border-mosano-border/60">
              <span className="font-bold text-mosano-blue block mb-1">1. Discovery Sprint</span>
              <p className="text-mosano-navy/70 text-xs sm:text-sm leading-relaxed">
                5 days of interactive architecture, wireframing, and database design. We lock scope and provide a fixed price guarantee.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-mosano-border/60">
              <span className="font-bold text-mosano-magenta block mb-1">2. Production Pods</span>
              <p className="text-mosano-navy/70 text-xs sm:text-sm leading-relaxed">
                Senior engineering pods (Tech Lead + Senior Engineer + Designer) shipping working production builds every single Friday.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-mosano-border/60">
              <span className="font-bold text-mosano-navy block mb-1">3. Handover &amp; IP</span>
              <p className="text-mosano-navy/70 text-xs sm:text-sm leading-relaxed">
                100% intellectual property ownership transferred to you. Clean GitHub repository, automated CI/CD, and zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>

        {/* Legal / Disclaimer Notice */}
        <div className="p-4 sm:p-5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 leading-relaxed">
          <strong>Important Scope Notice:</strong> Figures presented in the MVP Budget Calculator reflect 2026 European software studio benchmarks for production-grade software engineered by senior professionals. They are meant to guide your budgeting and do not constitute a binding legal contract. Final proposals are provided following an in-depth technical scoping session with the Mosano architecture team.
        </div>
      </section>

      {/* Section 6: FAQ Accordion */}
      <section id="faq" className="scroll-mt-28 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
          Frequently Asked Questions About MVP Budgeting
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "How much should a startup budget for an MVP in 2026?",
              a: `In 2026, a realistic budget for a well-engineered, investor-grade MVP built by a dedicated European studio ranges from ${symbol}${eurToCurr(18000).toLocaleString()} to ${symbol}${eurToCurr(58000).toLocaleString()}. Simpler single-workflow SaaS apps can launch around ${symbol}${eurToCurr(18000).toLocaleString()}–${symbol}${eurToCurr(32000).toLocaleString()}, while AI-powered or cross-platform mobile apps typically require ${symbol}${eurToCurr(32000).toLocaleString()}–${symbol}${eurToCurr(58000).toLocaleString()}. Avoid generic offshore shops quoting under ${symbol}${eurToCurr(10000).toLocaleString()}, as they frequently produce throwaway code that fails technical due diligence.`,
            },
            {
              q: "How long does it take to build and launch an MVP in 2026?",
              a: "With contemporary stacks (Next.js, Supabase, Tailwind, React Native, serverless backends), a focused MVP should take between 4 and 10 weeks to reach production. If an agency quotes longer than 12 weeks for version one, the scope is almost certainly bloated with non-essential features.",
            },
            {
              q: "What affects the cost of building an AI-powered MVP?",
              a: "AI MVP costs are determined by: 1) Model architecture (leveraging hosted APIs like Claude 3.5 or GPT-4o vs fine-tuning open-weights models), 2) Retrieval-Augmented Generation (RAG) and vector database indexing, 3) Token volume and prompt latency optimizations, and 4) Human-in-the-loop evaluation and guardrails. Expect an AI-native product to require approximately 20% to 35% more engineering investment than traditional CRUD apps.",
            },
            {
              q: "What are the advantages of partnering with Mosano versus hiring freelancers or a traditional agency?",
              a: "Mosano gives startup founders the agility and senior focus of a dedicated team without the overhead of hiring full-time or the painful management burden of coordinating disparate freelancers. Based in Portugal, our senior engineering pods provide top-tier European technical craft, direct Slack communication, transparent fixed-sprint pricing, and 100% intellectual property ownership.",
            },
            {
              q: "Does Mosano sign Non-Disclosure Agreements (NDAs)?",
              a: "Yes, absolutely. We prioritize your confidentiality and intellectual property. We are happy to execute a mutual NDA prior to reviewing proprietary business logic or product specifications.",
            },
          ].map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-mosano-border bg-white overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-mosano-navy hover:text-mosano-blue transition-colors text-base"
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-mosano-magenta flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-mosano-navy/80 leading-relaxed border-t border-mosano-border/40 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Mid-Content Scoping CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-mosano-blue text-white relative overflow-hidden shadow-mosano-hover">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs font-bold text-mosano-yellow uppercase tracking-wider">
            Next Step For Your Product
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Ready to Validate Your Software Idea Without Overspending?
          </h3>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Get a tailored technical breakdown from our senior engineering leads. We review your concept, pinpoint hidden risks, and map out a lean 4 to 8 week launch roadmap.
          </p>
          <button
            type="button"
            onClick={() => {
              trackCTAClick("mid_content_banner", "schedule_scoping_session");
              onOpenContact();
            }}
            className="px-6 py-3.5 rounded-xl bg-white text-mosano-navy font-bold text-sm hover:bg-mosano-surface transition-all shadow-md flex items-center gap-2 group active:scale-95"
          >
            <span>discuss your project with mosano</span>
            <ArrowRight className="w-4 h-4 text-mosano-blue transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-mosano-magenta/30 rounded-full blur-3xl pointer-events-none" />
      </div>
    </article>
  );
};
