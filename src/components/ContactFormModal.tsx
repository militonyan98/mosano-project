"use client";

import React, { useState, useEffect, useRef } from "react";
import { trackEvent, trackCTAClick } from "@/lib/analytics";
import { ScopeCalculation, PlannerState } from "./BudgetPlanner";
import {
  X,
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

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedScope?: ScopeCalculation | null;
  plannerState?: PlannerState | null;
  currency: "EUR" | "USD";
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  selectedScope,
  plannerState,
  currency,
}) => {
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

  // Capture UTM parameters from URL
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

      // Track key GA4 event: generate_lead (Strictly NO PII)
      trackEvent("generate_lead", {
        platform: selectedScope?.platformLabel || "Direct Scoping Call",
        ai_level: selectedScope?.aiLabel || "Standard",
        currency,
        value: selectedScope ? (selectedScope.priceMin + selectedScope.priceMax) / 2 : 25000,
        utm_source: utms.source,
        utm_campaign: utms.campaign,
      });
    } catch (err: any) {
      console.error("Submission failed:", err);
      setErrorMessage(
        err.message || "Something went wrong. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mosano-navy/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-mosano-border overflow-hidden my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-mosano-surface hover:bg-gray-200 text-mosano-navy transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

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

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-mosano-blue text-white font-bold text-sm hover:bg-mosano-navy transition-all shadow-md"
            >
              Back to Guide
            </button>
          </div>
        ) : (
          /* Lead Capture Form */
          <div>
            {/* Modal Header */}
            <div className="bg-mosano-surface p-6 sm:p-8 border-b border-mosano-border/70 relative">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-mosano-magenta tracking-wider uppercase">
                  Project Scoping Session
                </span>
              </div>
              <h3 className="text-2xl font-black text-mosano-navy mt-1">
                Discuss Your MVP with Mosano
              </h3>
              <p className="text-xs sm:text-sm text-mosano-navy/70 mt-1 leading-relaxed">
                Connect with our senior engineering team in Portugal. No sales pitches—just real technical architecture, scope validation, and timelines.
              </p>

              {/* Scope Snapshot Badge if user came from planner */}
              {selectedScope && (
                <div className="mt-4 p-3 rounded-xl bg-white border border-mosano-blue/20 shadow-sm flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-mosano-blue block uppercase">
                      Calculated Scope Snapshot:
                    </span>
                    <span className="font-bold text-mosano-navy">
                      {selectedScope.platformLabel} • {selectedScope.aiLabel}
                    </span>
                  </div>
                  <div className="text-right font-black text-mosano-magenta text-sm">
                    {selectedScope.currencySymbol}
                    {selectedScope.priceMin.toLocaleString()} – {selectedScope.currencySymbol}
                    {selectedScope.priceMax.toLocaleString()}
                  </div>
                </div>
              )}
            </div>

            {/* Form Body */}
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
  );
};
