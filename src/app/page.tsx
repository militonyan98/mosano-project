import type { Metadata } from "next";
import { LandingPageClient } from "@/components/LandingPageClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mosano.eu/mvp-cost-2026",
  },
};

export default function LandingPage() {
  return <LandingPageClient />;
}
