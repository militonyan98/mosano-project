import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Build an MVP in 2026? | Mosano",
  description:
    "Evidence-based 2026 MVP development cost guide & budget planner for founders. Compare Web, Mobile & AI costs, avoid hidden traps, and scope your version 1.",
  keywords: [
    "MVP cost 2026",
    "how much to build an MVP",
    "MVP budget planner",
    "startup MVP development cost",
    "software development studio",
    "AI MVP cost",
    "Mosano software studio",
  ],
  authors: [{ name: "Hermine Militonyan" }, { name: "Mosano Studio", url: "https://mosano.eu" }],
  creator: "Mosano",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mosano.eu"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "How Much Does It Cost to Build an MVP in 2026? | Mosano",
    description:
      "Evidence-based 2026 MVP development cost guide & budget planner for founders. Compare Web, Mobile & AI costs, avoid hidden traps, and scope your version 1.",
    url: "https://mosano.eu/mvp-cost-2026",
    siteName: "Mosano — Mobile & Web Development Studio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.prismic.io/mosano-website/a0fa3059-966e-4db9-a277-3d198f102c66_High%20Pitch.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C95%2C900%2C450&w=1000&h=500",
        width: 1000,
        height: 500,
        alt: "We provide software development services that give our clients the opportunity to grow their business and change their industry.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "mosanotech",
    creator: "mosanotech",
    title: "How Much Does It Cost to Build an MVP in 2026? | Mosano",
    description:
      "Evidence-based 2026 MVP development cost guide & budget planner for founders. Compare Web, Mobile & AI costs, avoid hidden traps, and scope your version 1.",
    images: [
      {
        url: "https://images.prismic.io/mosano-website/a0fa3059-966e-4db9-a277-3d198f102c66_High%20Pitch.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C95%2C900%2C450&w=1000&h=500",
        alt: "We provide software development services that give our clients the opportunity to grow their business and change their industry.",
      },
    ],
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
        "image": "https://images.prismic.io/mosano-website/a0fa3059-966e-4db9-a277-3d198f102c66_High%20Pitch.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C95%2C900%2C450&w=1000&h=500",
        "author": {
          "@type": "Person",
          "name": "Hermine Militonyan",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mosano",
          "url": "https://mosano.eu",
          "logo": {
            "@type": "ImageObject",
            "url": "https://mosano.eu/icons/icon-512x512.png",
            "width": 512,
            "height": 512,
          },
        },
        "datePublished": "2026-10-17",
        "dateModified": "2026-10-18",
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
              "text": "In 2026, a realistic budget for a well-engineered MVP built by Mosano ranges from €18,000 to €58,000. Simpler single-workflow SaaS apps typically launch between €18,000 and €32,000, while AI-powered or cross-platform mobile apps range between €32,000 and €58,000.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to launch an MVP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With modern frameworks and cloud tooling, a focused MVP should take 4 to 10 weeks to reach production. Quotes exceeding 12 weeks for V1 typically signal bloated scope.",
            },
          },
          {
            "@type": "Question",
            "name": "What affects the cost of an AI-powered MVP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key cost drivers include model architecture (hosted APIs vs fine-tuning), RAG/vector retrieval setup, token caching, and human-in-the-loop evals. Expect AI features to add ~20%–35% in engineering effort.",
            },
          },
          {
            "@type": "Question",
            "name": "Why partner with Mosano over freelancers or big agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mosano provides the focus and caliber of a senior team without full-time hiring friction or agency overhead. Our pods deliver top-tier craft, direct Slack collaboration, and 100% IP ownership.",
            },
          },
          {
            "@type": "Question",
            "name": "Does Mosano sign Non-Disclosure Agreements (NDAs)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We treat your IP and proprietary logic with complete confidentiality and regularly sign mutual NDAs before reviewing product details.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#3D63AE" />
        <meta
          name="image"
          content="https://images.prismic.io/mosano-website/a0fa3059-966e-4db9-a277-3d198f102c66_High%20Pitch.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C95%2C900%2C450&w=1000&h=500"
        />
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
