# Mosano — Visual Identity & Brand Guidelines

> **Source**: [https://mosano.eu/](https://mosano.eu/)  
> **Company**: Mosano (Mobile & Web Development Studio)  
> **Extraction Date**: October 2026  

---

## 1. Brand Overview & Positioning

Mosano is a specialized digital product studio based in Portugal (with international reach) that designs and engineers bespoke mobile apps, web applications, and enterprise cloud solutions.

* **Primary Tagline**: *"The Mobile & Web Development Studio"*
* **Brand Motto / Partnership Pitch**: *"Your ride or die Software Studio partner"*
* **Mission Statement**: *"We provide software development services that give our clients the opportunity to grow their business and change their industry."*
* **Core Philosophy**: *"Commitment. Transparency. Professionalism."* / *"We believe in long-term relationships"*
* **Team Identity**: *"A team of problem solvers united by the pursuit of meaningful digital experiences."*

---

## 2. Color Palette & Design Tokens

Mosano's visual identity relies on a high-contrast, energetic palette anchored by a distinctive **Electric Cobalt Blue** and **Deep Navy**, punctuated by punchy **Vibrant Magenta**, **Warm Sunshine Yellow**, and **Soft Mint Green**.

### Primary Brand Colors

| Color Role | Name | Hex | RGB | HSL / Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand Blue** | Electric Cobalt | `#1E22AA` | `rgb(30, 34, 170)` | `hsl(238, 70%, 39%)`<br>Hero backgrounds, logo wordmark, primary links, key cards |
| **Deep Dark Neutral** | Midnight Navy | `#0C0D44` | `rgb(12, 13, 68)` | `hsl(239, 70%, 16%)`<br>Primary headings, body text, high-contrast typography, dark borders |
| **Meta / Theme Color** | Studio Blue | `#3D63AE` | `rgb(61, 99, 174)` | `hsl(220, 48%, 46%)`<br>Mobile browser theme color (`<meta name="theme-color">`) |

### Accent Colors

| Color Role | Name | Hex | RGB | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Accent** | Vibrant Magenta | `#E31C79` | `rgb(227, 28, 121)` | Logo "M" accent strokes, category tags (`.cap`), divider lines, gradient accents |
| **Highlight Accent** | Electric Yellow | `#FEDC2B` | `rgb(254, 220, 43)` | Featured case study slides, contrast callouts, yellow paragraph text (`.p1.yellow`) |
| **Secondary Accent** | Pastel Mint Green | `#C6EBBE` | `rgb(198, 235, 190)` | Accent borders (`.button-line.green`), secondary pills, technical callouts |
| **Interactive Accent** | Electric Violet | `#8D6CF1` | `rgb(141, 108, 241)` | Active/focus states on buttons (`.button:active`), interactive micro-animations |
| **Deep Violet** | Royal Aubergine | `#540D6E` | `rgb(84, 13, 110)` | Rich accent backgrounds, complementary gradient tones |

### Backgrounds & Neutrals

| Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Pure White** | `#FFFFFF` | Slide surfaces, inverted typography, icon fills, card backgrounds |
| **Off-White Tint** | `#F6F7FC` | Subtle page section backgrounds, soft contrast blocks |
| **Light Gray Tint** | `#FAFAFA` / `#F3F3F3` | Form inputs, neutral dividers, file upload areas |
| **Subtle Border** | `#E2E2E2` / `rgba(0,0,0,0.12)` | Table and section borders, blockquote rules |
| **Dark Charcoal** | `#222831` / `#222222` | Footer components, dark secondary containers |

### Gradients

* **Brand Linear Gradient**:
  ```css
  background-image: linear-gradient(180deg, #1E22AA, #E31C79);
  ```
  *Used for rotated decorative rectangles (`.left-rec`, `.right-rec`), geometric framing elements, and key visual accents.*
* **Duotone Overlay**:
  ```css
  background-image: linear-gradient(180deg, #1E22AA, #1E22AA), url(...);
  ```
  *Used on team member portraits and image tiles on hover to cast a signature monochromatic cobalt tint.*

---

## 3. Typography & Font System

Mosano pairs a distinctive, bold neo-grotesque geometric font (**FF Clan**) for brand identity and UI controls with readable humanistic editorial fonts.

### Font Families

1. **Primary Brand & Display Font: `Clan` (FF Clan)**
   * **Family**: `'Clan', -apple-system, BlinkMacSystemFont, sans-serif`
   * **Weights used**:
     * `Clan News` (400) — Subheadings, paragraph body, navigation links
     * `Clan Medium` (500) — UI buttons, menu text, category badges (`.cap`)
     * `Clan Bold` (700) — Main hero headers (`h1`, `h2`), active navigation states
     * `Clan Black` / `Clan Ultra` (900) — High-impact display headlines
   * **Attributes**: Clean geometric proportions with wide round characters (`O`, `C`) and sharp angled strokes.

2. **Editorial & Content Fallbacks**
   * **`Lora`** (`'Lora', Georgia, serif`) — Set in base typography config for long-form readability (weights: 400, 400 Italic, 700, 700 Italic).
   * **`Source Sans Pro`** (`'Source Sans Pro', sans-serif`) — Secondary technical UI and documentation font (weights: 200, 300, 400, 600, 700, 900).

### Typographic Hierarchy & Scale

| Level | Font Family | Size | Weight | Line Height | Case / Style | Example Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display / H1** | Clan | `36px` - `48px` | 700 (Bold) | `1.15 - 1.25` (`53px`) | Normal | *"Are you looking to launch a new product and empower your industry?"* |
| **Section Header / H2** | Clan | `28px` - `32px` | 700 (Bold) | `1.2` | Normal | *"We help companies leverage their digital products"* |
| **Service Header / H3** | Clan | `20px` - `24px` | 500 / 700 | `1.3` | Normal | *"Turn Key Product Development"*, *"Fractional CTO"* |
| **Category Pill / Cap** | Clan | `16px` | 500 (Medium) | Normal | **UPPERCASE** | `// WHAT WE DO`, `// HEALTH CARE` (Colored `#E31C79`) |
| **Body Large (`.p1`)** | Clan News | `20px` | 400 (News) | `30px` (1.5) | Normal | Main hero intro text, lead paragraphs |
| **Body Standard (`.p2`)**| Clan News | `16px` | 400 (News) | `30px` (1.87) | Normal | Standard body copy, service descriptions |
| **Nav Menu Links** | Clan News / Clan | `14px` - `16px` | 400 / 700 | `1.13` | **UPPERCASE** | `ABOUT`, `SERVICES`, `CASE STUDIES`, `TEAM` |
| **CTA Button Text** | Clan | `16px` | 500 (Medium) | Normal | **lowercase** | `discover how we do it`, `read more` |

---

## 4. Logo & Graphic Language

### Logo Construction
* **Structure**: Clean uppercase typographic wordmark: **MOSANO**.
* **The "M" Monogram Accent**:
  * The initial letter **"M"** is custom-crafted with overlapping geometric cuts:
    * Left vertical & internal diagonals: Colored in **Electric Cobalt (`#1E22AA`)**.
    * Right diagonal cross-stroke: Colored in **Vibrant Magenta (`#E31C79`)**.
  * Creates an immediate sense of forward motion, intersection, and precision engineering.
* **The "OSANO" Letterforms**:
  * Solid **Electric Cobalt (`#1E22AA`)** with wide circular curves and geometric apertures.
* **Inverted / Reverse Logo**:
  * In dark containers and full-bleed colored headers, the letters render in crisp **Pure White (`#FFFFFF`)**.

### Visual Elements & Motifs
* **Double Slash Sub-headers (`//`)**:
  * Sections and case categories begin with a dual slash code-style prefix:
    * `// How we started`
    * `// what we do`
    * `// Our team`
    * `// Health Care`
* **Underline & Rule Accents**:
  * Custom colored border bars (`.button-line`) beneath action elements in `#1E22AA`, `#C6EBBE`, or `#F16C6C`.
* **Rotated Geometric Rectangles**:
  * 44px to 120px rectangular blocks rotated at 90° or 200° angles with the `#1E22AA` to `#E31C79` gradient.
* **Interactive Hover Dynamics**:
  * Photo tiles transition into a deep blue monochrome duotone overlay upon hover.
  * Active links toggle between light weight (`font-weight: 100 / 400`) and bold (`font-weight: 700`).

---

## 5. Tone of Voice & Copywriting Guidelines

Mosano’s brand voice is **bold, confident, candid, and direct**, avoiding generic corporate jargon in favor of authentic partnership language.

### Brand Voice Archetype
* **The Expert Peer & Confident Partner**: Tech-savvy, agile, highly competent, yet conversational and approachable.

### The 4 Pillars of Tone

#### 1. Bold & Unapologetic (Confident, Not Arrogant)
Mosano owns its expertise and addresses challenging technical problems directly.
* *Example*: *"Your ride or die Software Studio partner."*
* *Example*: *"We’re problem solvers looking for the hardest challenges, from Startups to Enterprise-grade."*

#### 2. Human & Conversational
Uses colloquial, warm language that cuts through technical gatekeeping.
* *Example*: *"If you made it this far... You may have become a fan."*
* *Example*: *"If you want to see how we can help just ask us, it's as simple as that."*
* *Example*: *"Should we partner up?"* / *"Need evidence?"* / *"But who are we?"*

#### 3. Candid & Accountable
Positions the relationship as mutual trust, radical transparency, and dedication.
* *Example*: *"Commitment. Transparency. Professionalism."*
* *Example*: *"We believe in long-term relationships."*
* *Example*: *"We embrace and promote everyone’s expertise so that each one of us can be a mentor to someone."*

#### 4. Pragmatic & Solution-Focused
Frames capabilities in terms of business impact, speed, and real software delivery rather than abstract theory.
* *Example*: *"Turn Key Product Development"*, *"Fractional CTO"*, *"Team Augmentation"*.
* *Example*: *"We build complex, reliable and highly scalable digital solutions."*

---

## 6. CSS Tokens Quick Reference

```css
:root {
  /* Brand Colors */
  --mosano-blue-primary: #1E22AA;
  --mosano-blue-theme: #3D63AE;
  --mosano-navy-text: #0C0D44;
  --mosano-magenta: #E31C79;
  --mosano-yellow: #FEDC2B;
  --mosano-green-mint: #C6EBBE;
  --mosano-purple-active: #8D6CF1;
  --mosano-purple-deep: #540D6E;
  
  /* Neutrals */
  --mosano-bg-light: #F6F7FC;
  --mosano-white: #FFFFFF;
  --mosano-gray-border: #E2E2E2;
  --mosano-dark: #222831;

  /* Typography */
  --mosano-font-primary: 'Clan', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --mosano-font-editorial: 'Lora', serif;
  --mosano-font-secondary: 'Source Sans Pro', sans-serif;

  /* Brand Gradient */
  --mosano-gradient: linear-gradient(180deg, #1E22AA 0%, #E31C79 100%);
}
```

---

## 7. Tailwind CSS Configuration Snippet

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        mosano: {
          blue: '#1E22AA',
          theme: '#3D63AE',
          navy: '#0C0D44',
          magenta: '#E31C79',
          yellow: '#FEDC2B',
          mint: '#C6EBBE',
          violet: '#8D6CF1',
          plum: '#540D6E',
          surface: '#F6F7FC',
        }
      },
      fontFamily: {
        clan: ['Clan', 'sans-serif'],
        lora: ['Lora', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      }
    }
  }
}
```
