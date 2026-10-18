"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { trackEvent, trackCTAClick } from "@/lib/analytics";
import {
  Sparkles,
  Clock,
  Users,
  ArrowRight,
  Monitor,
  Smartphone,
  Layers,
  Check,
} from "lucide-react";

export interface PlannerState {
  platform: "web" | "mobile" | "both";
  screens: number; // 3 to 15
  aiLevel: number; // 0: None, 1: Basic AI API, 2: RAG / Knowledge Base, 3: Autonomous Agents
  speed: number; // 1: Standard, 2: Accelerated Sprint
}

export interface ScopeCalculation {
  priceMin: number;
  priceMax: number;
  currencySymbol: string;
  currencyCode: "EUR" | "USD";
  weeksMin: number;
  weeksMax: number;
  teamComposition: string[];
  deliverables: string[];
  platformLabel: string;
  aiLabel: string;
  scopeSummaryText: string;
}

interface BudgetPlannerProps {
  currency: "EUR" | "USD";
  onSelectScopeForContact: (scope: ScopeCalculation, state: PlannerState) => void;
  onScopeChange?: (scope: ScopeCalculation, state: PlannerState) => void;
  onHighEngagement?: (scope: ScopeCalculation, state: PlannerState) => void;
}

export const BudgetPlanner: React.FC<BudgetPlannerProps> = ({
  currency,
  onSelectScopeForContact,
  onScopeChange,
  onHighEngagement,
}) => {
  const [plannerState, setPlannerState] = useState<PlannerState>({
    platform: "web",
    screens: 5,
    aiLevel: 1,
    speed: 1,
  });

  const [hasStarted, setHasStarted] = useState(false);
  const completionTrackedRef = useRef(false);
  const interactionCountRef = useRef(0);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const recordInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("budget_planner_start", {
        platform: plannerState.platform,
      });
    }

    interactionCountRef.current += 1;

    // Trigger when user is playing around with budget heavily (4+ adjustments)
    if (interactionCountRef.current >= 4 && onHighEngagement) {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      debounceTimerRef.current = setTimeout(() => {
        onHighEngagement(calculation, plannerState);
      }, 1200);
    }
  };

  const aiLevelLabels = [
    { label: "No AI / Standard CRUD", desc: "Traditional database & workflow application" },
    { label: "AI API Integration", desc: "Prompting Claude or GPT with streaming UI" },
    { label: "RAG & Vector Search", desc: "Custom documents, embeddings & semantic retrieval" },
    { label: "Agentic Workflows", desc: "Multi-agent autonomous tool calling & background tasks" },
  ];

  // Calculation Engine based on sliders
  const calculation = useMemo<ScopeCalculation>(() => {
    const rateMultiplier = currency === "USD" ? 1.1 : 1.0;
    const symbol = currency === "USD" ? "$" : "€";

    // Base cost per screen / core flow: ~€2,500 - €3,800
    const screenBaseMin = plannerState.screens * 2600;
    const screenBaseMax = plannerState.screens * 4200;

    // Platform multiplier
    let platformMultiplier = 1.0;
    let platformLabel = "Web Application (Next.js)";
    if (plannerState.platform === "mobile") {
      platformMultiplier = 1.25;
      platformLabel = "Cross-Platform Mobile (React Native)";
    } else if (plannerState.platform === "both") {
      platformMultiplier = 1.55;
      platformLabel = "Web + Mobile (Shared Design System)";
    }

    // AI complexity add-on
    const aiAddons = [0, 4500, 9500, 16500];
    const aiCost = aiAddons[plannerState.aiLevel];

    // Speed multiplier (Accelerated requires dedicated concurrent engineering pod)
    const speedMultiplier = plannerState.speed === 2 ? 1.15 : 1.0;

    // Raw calculated bounds
    let rawMin = (screenBaseMin * platformMultiplier + aiCost) * speedMultiplier;
    let rawMax = (screenBaseMax * platformMultiplier + aiCost * 1.3) * speedMultiplier;

    // Clamp to realistic MVP brackets
    rawMin = Math.max(16000, rawMin);
    rawMax = Math.max(28000, rawMax);

    const finalMin = Math.round((rawMin * rateMultiplier) / 1000) * 1000;
    const finalMax = Math.round((rawMax * rateMultiplier) / 1000) * 1000;

    // Timeline calculation in weeks
    let weeksMin = Math.round(3 + plannerState.screens * 0.4 + plannerState.aiLevel * 0.8);
    let weeksMax = Math.round(weeksMin * 1.5);

    if (plannerState.speed === 2) {
      weeksMin = Math.max(4, Math.round(weeksMin * 0.75));
      weeksMax = Math.max(6, Math.round(weeksMax * 0.75));
    }

    const team = [
      "1x Tech Lead / Solutions Architect",
      "1x Senior Fullstack Engineer",
      "1x Senior Product Designer",
    ];

    if (plannerState.aiLevel >= 2) {
      team.push("1x AI/Vector Systems Specialist");
    }
    if (plannerState.platform === "both" || plannerState.screens >= 10) {
      team.push("1x Dedicated QA Automation Engineer");
    }

    const deliverables = [
      "System Architecture & API Schema Design",
      "Figma Wireframing & Responsive Design System",
      "Modular Production Codebase (TypeScript & Next.js/React Native)",
      "Automated CI/CD Deployment to Cloud",
      "Production Auth, Security & Database Setup",
      "100% Intellectual Property Handover",
    ];

    return {
      priceMin: finalMin,
      priceMax: finalMax,
      currencySymbol: symbol,
      currencyCode: currency,
      weeksMin,
      weeksMax,
      teamComposition: team,
      deliverables,
      platformLabel,
      aiLabel: aiLevelLabels[plannerState.aiLevel].label,
      scopeSummaryText: `${platformLabel} • ${plannerState.screens} Core Screens/Flows • ${aiLevelLabels[plannerState.aiLevel].label}`,
    };
  }, [plannerState, currency]);

  useEffect(() => {
    if (hasStarted && !completionTrackedRef.current) {
      completionTrackedRef.current = true;
      trackEvent("budget_planner_complete", {
        platform: plannerState.platform,
        screens: plannerState.screens,
        ai_level: plannerState.aiLevel,
        price_min: calculation.priceMin,
        price_max: calculation.priceMax,
        currency: calculation.currencyCode,
      });
    }

    if (onScopeChange) {
      onScopeChange(calculation, plannerState);
    }
  }, [plannerState, hasStarted, calculation, onScopeChange]);

  return (
    <div
      id="budget-calculator"
      className="scroll-mt-24 bg-white rounded-3xl border-2 border-mosano-blue/20 shadow-mosano-hover overflow-hidden transition-all"
    >
      {/* Header bar */}
      <div className="px-6 py-6 sm:px-8 sm:py-7 bg-gradient-to-r from-mosano-surface via-white to-mosano-surface border-b border-mosano-border/80 flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-mosano-blue/10 text-mosano-blue font-bold text-[11px] uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-mosano-magenta" />
            <span>Interactive Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-mosano-navy tracking-tight">
            MVP Budget Calculator
          </h3>
          <p className="text-xs sm:text-sm text-mosano-navy/70">
            Calibrate your MVP scope, target platforms, and AI complexity for real-time cost brackets.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-mosano-border text-xs font-semibold text-mosano-navy shadow-sm">
          <Clock className="w-3.5 h-3.5 text-mosano-blue" />
          <span>Instant 2026 Studio Model</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols): Minimalist Sliders */}
          <div className="lg:col-span-7 space-y-8">
            {/* Control 1: Platform Selector */}
            <div>
              <label className="block text-xs font-bold text-mosano-navy/70 uppercase tracking-wider mb-2.5">
                Target Platform
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "web" as const, label: "Web SaaS", icon: Monitor },
                  { id: "mobile" as const, label: "Mobile App", icon: Smartphone },
                  { id: "both" as const, label: "Web + Mobile", icon: Layers },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = plannerState.platform === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        recordInteraction();
                        setPlannerState((prev) => ({ ...prev, platform: item.id }));
                      }}
                      className={`flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-xl border text-xs font-bold transition-all ${
                        isSelected
                          ? "border-mosano-blue bg-mosano-blue text-white shadow-sm ring-2 ring-mosano-blue/20"
                          : "border-mosano-border hover:border-mosano-blue/40 text-mosano-navy bg-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-1.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slider 1: Core Screens & Workflows */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-mosano-navy/70 uppercase tracking-wider">
                  Scope Breadth (Core Screens &amp; User Flows)
                </label>
                <span className="px-2.5 py-0.5 rounded-lg bg-mosano-surface text-mosano-blue font-extrabold text-sm border border-mosano-border">
                  {plannerState.screens} {plannerState.screens === 1 ? "Flow" : "Flows"}
                </span>
              </div>

              <input
                type="range"
                min="3"
                max="14"
                step="1"
                value={plannerState.screens}
                onChange={(e) => {
                  recordInteraction();
                  setPlannerState((prev) => ({
                    ...prev,
                    screens: parseInt(e.target.value, 10),
                  }));
                }}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-mosano-blue focus:outline-none"
              />

              <div className="flex justify-between text-[11px] text-mosano-navy/60 font-medium mt-1.5">
                <span>3 Flows (Lean MVP)</span>
                <span>8 Flows (Growth SaaS)</span>
                <span>14+ Flows (Complex Suite)</span>
              </div>
            </div>

            {/* Slider 2: AI & Technical Complexity */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-mosano-navy/70 uppercase tracking-wider">
                  AI &amp; Data Intelligence
                </label>
                <span className="px-2.5 py-0.5 rounded-lg bg-mosano-surface text-mosano-magenta font-extrabold text-xs border border-mosano-border">
                  {aiLevelLabels[plannerState.aiLevel].label}
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={plannerState.aiLevel}
                onChange={(e) => {
                  recordInteraction();
                  setPlannerState((prev) => ({
                    ...prev,
                    aiLevel: parseInt(e.target.value, 10),
                  }));
                }}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-mosano-magenta focus:outline-none"
              />

              <p className="text-xs text-mosano-navy/70 mt-2 font-medium">
                {aiLevelLabels[plannerState.aiLevel].desc}
              </p>
            </div>

            {/* Slider 3: Timeline / Velocity Mode */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-mosano-navy/70 uppercase tracking-wider">
                  Launch Cadence
                </label>
                <span className="px-2.5 py-0.5 rounded-lg bg-mosano-surface text-mosano-navy font-bold text-xs border border-mosano-border">
                  {plannerState.speed === 2 ? "Accelerated Sprint (Dedicated Pod)" : "Standard Agile Cadence"}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="2"
                step="1"
                value={plannerState.speed}
                onChange={(e) => {
                  recordInteraction();
                  setPlannerState((prev) => ({
                    ...prev,
                    speed: parseInt(e.target.value, 10),
                  }));
                }}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-mosano-blue focus:outline-none"
              />

              <div className="flex justify-between text-[11px] text-mosano-navy/60 font-medium mt-1.5">
                <span>Standard Pace (Balanced Cost)</span>
                <span>Accelerated Sprint (Max Velocity)</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Dynamic Output Card */}
          <div className="lg:col-span-5">
            <div className="bg-mosano-navy text-white rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl border border-mosano-navy/50">
              <div className="absolute top-0 right-0 w-44 h-44 bg-mosano-magenta/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-mosano-blue/40 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs text-white/60 font-semibold uppercase tracking-wider block">
                    Estimated Investment Range
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                    {calculation.currencySymbol}
                    {calculation.priceMin.toLocaleString()} – {calculation.currencySymbol}
                    {calculation.priceMax.toLocaleString()}
                  </div>
                  <div className="text-xs text-mosano-yellow font-bold mt-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimated Timeline: {calculation.weeksMin} to {calculation.weeksMax} Weeks</span>
                  </div>
                </div>

                {/* Scope Snapshot Details */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs space-y-1.5">
                  <div className="text-white/60 font-semibold uppercase text-[10px] tracking-wider">
                    Selected Configuration
                  </div>
                  <div className="font-bold text-white text-xs">
                    {calculation.platformLabel}
                  </div>
                  <div className="text-white/80 text-[11px]">
                    {plannerState.screens} Key Workflows • {calculation.aiLabel}
                  </div>
                </div>

                {/* Team Pod Breakdown */}
                <div>
                  <div className="text-xs font-bold text-mosano-mint flex items-center gap-1.5 mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>Recommended Studio Pod</span>
                  </div>
                  <ul className="text-[11px] text-white/70 space-y-1">
                    {calculation.teamComposition.map((member, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-mosano-mint flex-shrink-0" />
                        <span>{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => {
                    trackCTAClick("calculator_slider", "discuss_calculated_scope", {
                      platform: plannerState.platform,
                      screens: plannerState.screens,
                      price_bracket: `${calculation.priceMin}-${calculation.priceMax}`,
                    });
                    onSelectScopeForContact(calculation, plannerState);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-mosano-magenta hover:bg-pink-600 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <span>discuss your mvp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-white/50 text-center leading-tight">
                  Transparent preliminary estimate. Not a binding quote. Mosano guarantees fixed-sprint scoping before any contractual commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
