# Mosano — MVP Cost Guide & Interactive Budget Planner (2026)

> **Growth Experiment by Hermine Militonyan**  
> **Campaign Title**: *"How Much Does It Cost to Build an MVP in 2026? A Founder's Practical Guide & Budget Planner"*  
> **Runtime**: Next.js 14 (App Router) + Bun + Tailwind CSS

---

## 🚀 Overview

This high-converting SEO & GEO/AEO landing page targets early-stage startup founders budgeting for their first software product. Instead of generic agency articles with vague pricing, this resource pairs an evidence-based technical guide with the **MVP Budget Reality Check**—an interactive 3-step scope and budget calculator.

### Key Highlights
1. **Sleek Minimalist Slider Calculator**: Placed prominently right after the Hero, letting founders adjust screen counts, AI depth levels, and launch cadence with interactive sliders.
2. **Desktop Side Circle Navigation (Scrollspy)**: Floating vertical circular dot navigation with hover tooltips and active scroll indicator tracking the visitor's journey.
3. **Chronological Navbar Navigation**: Navbar anchors ordered logically: Budget Calculator → Cost Drivers → Hidden Traps → Methodology → FAQ.
4. **Dual Currency Toggle**: Instant live switching between **EUR (€)** and **USD ($)**.
5. **Smart Lead Capture Triggers**: Modal automatically opens when a founder scrolls past the hero into the content, or after actively exploring 4+ slider variations (with their live scope snapshot pre-filled). Session storage ensures it only auto-triggers once.
6. **Direct n8n Webhook Integration**: Leads submitted through the contact form are dispatched through a secure server-side Next.js API route (`/api/lead`) to your custom **n8n workflow**.
7. **GA4 & GTM Event Tracking**: Fully compliant with the campaign measurement plan:
   - `session_start`
   - `budget_planner_start`
   - `budget_planner_complete`
   - `cta_click` (with `cta_location` and `cta_text`)
   - `form_start`
   - `generate_lead` (key event with scope value; zero PII sent to GA4)
6. **Strict Brand Styling**: Built with the exact tokens from [`mosano-visual-identity.md`](./mosano-visual-identity.md):
   - **Electric Cobalt** (`#1E22AA`), **Midnight Navy** (`#0C0D44`), **Vibrant Magenta** (`#E31C79`), **Electric Yellow** (`#FEDC2B`), and **Pastel Mint** (`#C6EBBE`).

---

## 🛠️ Quickstart with Bun

### 1. Install Dependencies
```bash
bun install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Set your n8n webhook and GA4 measurement ID:
```env
# n8n Webhook URL for lead intake
N8N_WEBHOOK_URL="https://n8n.your-domain.com/webhook/mosano-mvp-leads"

# Optional: Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### 3. Run Development Server
```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
bun run build
bun run start
```

---

## 📡 n8n Webhook Integration Payload

When a founder requests a scoping session from the modal or planner, the server route `POST /api/lead` proxies the request to `N8N_WEBHOOK_URL`.

### Sample JSON Payload to n8n:
```json
{
  "lead": {
    "name": "Alex Rivera",
    "email": "alex@startuphq.com",
    "projectName": "Agentic AI Co-pilot",
    "launchGoal": "4–8 weeks (ASAP)"
  },
  "plannerScope": {
    "category": "AI-Native Application",
    "complexity": "Standard Growth MVP",
    "priceMin": 44000,
    "priceMax": 75000,
    "weeksMin": 7,
    "weeksMax": 11,
    "integrations": ["payments", "ai_llm", "analytics"]
  },
  "currency": "EUR",
  "attribution": {
    "utm_source": "linkedin",
    "utm_medium": "organic_social",
    "utm_campaign": "mvp_cost_2026",
    "referrer": "https://www.linkedin.com/"
  },
  "meta": {
    "source": "Mosano MVP Budget Planner 2026",
    "timestamp": "2026-10-17T23:40:00.000Z",
    "userAgent": "Mozilla/5.0..."
  }
}
```

---

## 📊 Analytics & GA4 DebugView

To test event tracking in real-time:
1. Append `?debug_mode=true` to the URL in your browser:  
   `http://localhost:3000/?debug_mode=true`
2. Open the browser Developer Console. You will see colored `[GA4 Event]` log pills for every interaction.
3. In GA4, open **Admin > DebugView** to verify event parameters and conversion marks.

---

## 📁 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── lead/route.ts      # Secure server proxy to n8n webhook
│   │   ├── globals.css            # Mosano CSS variables and design tokens
│   │   ├── layout.tsx             # SEO & Schema.org JSON-LD (FAQ & TechArticle)
│   │   └── page.tsx               # Two-column split layout
│   ├── components/
│   │   ├── Navbar.tsx             # Header with logo, currency toggle & CTA
│   │   ├── Hero.tsx               # 3D brand visual, 2026 headline, proof badges
│   │   ├── BudgetPlanner.tsx      # Sticky 3-step interactive scope calculator
│   │   ├── CostGuideContent.tsx   # Comprehensive SEO/GEO/AEO chapter content
│   │   ├── ContactFormModal.tsx   # Lead capture modal connected to n8n & GA4
│   │   └── Footer.tsx             # Studio links and campaign credit
│   └── lib/
│       └── analytics.ts           # GA4 tracking dispatcher (strict PII filtering)
├── mosano-visual-identity.md      # Mosano brand guideline tokens
├── tailwind.config.ts             # Tailwind palette matching Mosano tokens
├── package.json
└── tsconfig.json
```
