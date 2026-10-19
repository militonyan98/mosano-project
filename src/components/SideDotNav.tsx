"use client";

import React, { useState, useEffect } from "react";

interface NavSection {
  id: string;
  label: string;
}

const SECTIONS: NavSection[] = [
  { id: "overview", label: "Overview" },
  { id: "budget-calculator", label: "Budget Calculator" },
  { id: "cost-drivers", label: "Cost Benchmarks" },
  { id: "platform-comparison", label: "Platform Comparison" },
  { id: "hidden-traps", label: "Hidden Traps" },
  { id: "scoping-framework", label: "Scope Discipline" },
  { id: "methodology", label: "Methodology" },
  { id: "faq", label: "FAQ" },
];

export const SideDotNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const isProgrammaticScrollRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      // If near the very top of the page, always highlight Overview
      if (window.scrollY < 200) {
        setActiveSection("overview");
        return;
      }

      const headerOffset = 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= headerOffset + 80) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      isProgrammaticScrollRef.current = true;
      setActiveSection(id);

      if (typeof window !== "undefined") {
        sessionStorage.setItem("mosano_lead_auto_popped", "true");
        window.history.replaceState(null, "", `#${id}`);
      }

      const headerOffset = 88;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 800);
    }
  };

  return (
    <nav
      aria-label="Page section navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center bg-white/90 backdrop-blur-md p-2 rounded-full border border-mosano-border shadow-lg space-y-3 transition-all"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => scrollToSection(e, section.id)}
            aria-label={`Scroll to ${section.label}`}
            className="group relative flex items-center justify-center w-7 h-7 rounded-full focus:outline-none"
          >
            {/* The Dot indicator */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3.5 h-3.5 bg-mosano-blue ring-4 ring-mosano-blue/20 shadow-sm"
                  : "w-2.5 h-2.5 bg-mosano-navy/30 group-hover:bg-mosano-blue/70 group-hover:scale-125"
              }`}
            />

            {/* Tooltip on hover */}
            <div className="absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-mosano-navy text-white text-xs font-bold whitespace-nowrap shadow-xl opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none flex items-center gap-1.5">
              <span>{section.label}</span>
              {/* Arrow pointing right */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-mosano-navy" />
            </div>
          </a>
        );
      })}
    </nav>
  );
};
