import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Build an MVP in 2026? A Founder's Practical Guide & Budget Planner | Mosano",
  description:
    "Evidence-based MVP development cost guide and interactive budget planner for startup founders in 2026. Compare Web SaaS, Mobile, and AI-native costs, avoid hidden infrastructure traps, and scope version one.",
  keywords: [
    "MVP cost 2026",
    "how much to build an MVP",
    "MVP budget planner",
    "startup MVP development cost",
    "software development studio Portugal",
    "AI MVP cost",
    "Mosano software studio",
  ],
  authors: [{ name: "Hermine Militonyan" }, { name: "Mosano Studio", url: "https://mosano.eu" }],
  creator: "Mosano",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mosano.eu"),
  openGraph: {
    title: "How Much Does It Cost to Build an MVP in 2026? Interactive Budget Planner",
    description:
      "Avoid agency bloat and unbudgeted cloud surprises. Real 2026 software engineering benchmarks, platform cost trade-offs, and an interactive scope calculator.",
    url: "https://mosano.eu/mvp-cost-2026",
    siteName: "Mosano — Mobile & Web Development Studio",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does It Cost to Build an MVP in 2026? | Mosano",
    description:
      "Real software development cost benchmarks & interactive budget planner for startup founders.",
    creator: "@mosanostudio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Schema.org FAQ & TechArticle structured data for GEO / AEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "How Much Does It Cost to Build an MVP in 2026? A Founder's Practical Guide & Budget Planner",
        "description": "Comprehensive engineering benchmarks and interactive planning tool for early-stage software startup founders budgeting an MVP in 2026.",
        "author": {
          "@type": "Person",
          "name": "Hermine Militonyan",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mosano",
          "url": "https://mosano.eu",
          "logo": "https://mosano.eu/logo.png",
        },
        "datePublished": "2026-10-17",
        "dateModified": "2026-10-17",
      },
      {
        "@type": "SoftwareApplication",
        "name": "Mosano MVP Budget Reality Check",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much should a startup budget for an MVP in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, a realistic budget for a well-engineered MVP built by a dedicated European studio ranges from €18,000 to €58,000. Simpler single-workflow SaaS apps typically launch between €18,000 and €32,000, while AI-powered or cross-platform mobile apps range between €32,000 and €58,000.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a software MVP in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With contemporary stacks (Next.js, Supabase, React Native, serverless cloud backends), a focused MVP should take between 4 and 10 weeks to reach production launch.",
            },
          },
          {
            "@type": "Question",
            "name": "What affects the cost of building an AI-powered MVP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI MVP costs are determined by model APIs vs fine-tuning, RAG vector indexing, token volume caching, and human-in-the-loop guardrails. AI-native applications typically require 20% to 35% higher engineering investment than standard CRUD applications.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white antialiased selection:bg-mosano-yellow selection:text-mosano-navy">
        {/* Google Analytics 4 Script */}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : (
          <Script id="ga-mock-debug" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                window.dataLayer.push(arguments);
                if (window.location.search.includes('debug_mode=true') || window.location.hostname === 'localhost') {
                  console.log('[GA4 Mock Dispatch]', arguments);
                }
              }
              window.gtag = gtag;
            `}
          </Script>
        )}

        {children}
      </body>
    </html>
  );
}
