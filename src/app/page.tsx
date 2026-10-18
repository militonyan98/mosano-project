"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BudgetPlanner, ScopeCalculation, PlannerState } from "@/components/BudgetPlanner";
import { CostGuideContent } from "@/components/CostGuideContent";
import { ContactFormModal } from "@/components/ContactFormModal";
import { Footer } from "@/components/Footer";
import { SideDotNav } from "@/components/SideDotNav";
import { trackEvent, trackCTAClick } from "@/lib/analytics";
import { Calculator, ArrowUp, Sparkles } from "lucide-react";

export default function LandingPage() {
  const [currency, setCurrency] = useState<"EUR" | "USD">("EUR");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedScope, setSelectedScope] = useState<ScopeCalculation | null>(null);
  const [plannerState, setPlannerState] = useState<PlannerState | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const hasAutoPoppedRef = React.useRef(false);

  useEffect(() => {
    // Check if user already dismissed or interacted in this session
    if (typeof window !== "undefined") {
      const previouslyDismissed = sessionStorage.getItem("mosano_lead_auto_popped");
      if (previouslyDismissed === "true") {
        hasAutoPoppedRef.current = true;
      }
    }

    trackEvent("session_start", {
      landing_page: window.location.pathname,
      referrer: document.referrer || "direct",
    });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Pop contact form after user scrolls down past the hero (e.g. ~650px)
      if (window.scrollY > 650 && !hasAutoPoppedRef.current) {
        hasAutoPoppedRef.current = true;
        sessionStorage.setItem("mosano_lead_auto_popped", "true");
        setTimeout(() => {
          setIsContactOpen(true);
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCurrencyToggle = () => {
    setCurrency((prev) => (prev === "EUR" ? "USD" : "EUR"));
  };

  const handleOpenContactWithScope = (
    scope: ScopeCalculation,
    state: PlannerState
  ) => {
    setSelectedScope(scope);
    setPlannerState(state);
    setIsContactOpen(true);
  };

  // Pop contact form when playing around with budget sliders heavily
  const handleHighEngagement = (
    scope: ScopeCalculation,
    state: PlannerState
  ) => {
    if (!hasAutoPoppedRef.current) {
      hasAutoPoppedRef.current = true;
      if (typeof window !== "undefined") {
        sessionStorage.setItem("mosano_lead_auto_popped", "true");
      }
      setSelectedScope(scope);
      setPlannerState(state);
      setIsContactOpen(true);
    }
  };

  const handleOpenGeneralContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    hasAutoPoppedRef.current = true;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mosano_lead_auto_popped", "true");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-mosano-navy selection:bg-mosano-yellow selection:text-mosano-navy">
      {/* Top Navbar */}
      <Navbar
        currency={currency}
        onCurrencyToggle={handleCurrencyToggle}
        onOpenContact={handleOpenGeneralContact}
      />

      {/* Hero Section */}
      <Hero onOpenContact={handleOpenGeneralContact} />

      {/* Calculator Section immediately following Hero */}
      <section className="relative -mt-8 sm:-mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BudgetPlanner
            currency={currency}
            onSelectScopeForContact={handleOpenContactWithScope}
            onScopeChange={(scope, state) => {
              setSelectedScope(scope);
              setPlannerState(state);
            }}
            onHighEngagement={handleHighEngagement}
          />
        </div>
      </section>

      {/* Expanded In-Depth Cost Guide & Benchmarks */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20 w-full flex-grow">
        <CostGuideContent
          currency={currency}
          onOpenContact={handleOpenGeneralContact}
        />
      </main>

      {/* Side Circle Navigation (Desktop View) */}
      <SideDotNav />

      {/* Back to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/95 backdrop-blur border border-mosano-border shadow-lg hover:bg-mosano-surface text-mosano-navy hover:text-mosano-blue transition-all"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        selectedScope={selectedScope}
        plannerState={plannerState}
        currency={currency}
      />

      {/* Footer */}
      <Footer onOpenContact={handleOpenGeneralContact} />
    </div>
  );
}
