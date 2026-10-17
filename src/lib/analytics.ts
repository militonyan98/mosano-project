// GA4 & Event Analytics Dispatcher with DebugView logger
// Conforms to Mosano campaign specification:
// - Never transmits PII (names, emails, phone numbers)
// - Emits standard & custom events to window.gtag
// - Provides readable console debug logs in development/DebugView mode

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export type GAEventName =
  | "session_start"
  | "budget_planner_start"
  | "budget_planner_complete"
  | "cta_click"
  | "form_start"
  | "generate_lead";

export interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(eventName: GAEventName, params?: EventParams) {
  if (typeof window === "undefined") return;

  const sanitizedParams: EventParams = { ...(params || {}) };

  // Strict PII prevention filter
  const piiKeys = ["email", "name", "phone", "first_name", "last_name", "contact"];
  for (const key of Object.keys(sanitizedParams)) {
    if (piiKeys.some((pii) => key.toLowerCase().includes(pii))) {
      delete sanitizedParams[key];
    }
  }

  // Debug logging for developer & GA4 DebugView verification
  if (process.env.NODE_ENV !== "production" || window.location.search.includes("debug_mode=true")) {
    console.info(
      `%c[GA4 Event] ${eventName}`,
      "color: #1E22AA; font-weight: bold; background: #C6EBBE; padding: 2px 6px; border-radius: 4px;",
      sanitizedParams
    );
  }

  // Dispatch to gtag if present
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...sanitizedParams,
      // Pass debug_mode parameter if testing in DebugView
      ...(window.location.search.includes("debug_mode=true") ? { debug_mode: true } : {}),
    });
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...sanitizedParams,
    });
  }
}

// Track CTA clicks with standardized parameters
export function trackCTAClick(ctaLocation: string, ctaText: string, extraParams?: EventParams) {
  trackEvent("cta_click", {
    cta_location: ctaLocation,
    cta_text: ctaText,
    ...extraParams,
  });
}
