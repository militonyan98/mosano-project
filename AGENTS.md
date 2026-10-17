# Mosano Project - Agent Instructions

This project is the **Mosano MVP Budget Planner** built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS.

## SEO Capabilities & Skills

This project is equipped with the complete **Claude SEO** multi-agent toolkit (installed in `.agents/skills/` and `.claude/skills/`).

### Available SEO Commands

| Command / Skill | Description |
|---|---|
| `/seo audit <url>` or `seo-audit` | Full website SEO audit with scored report & prioritized action plan |
| `/seo page <url>` or `seo-page` | Deep single-page analysis (meta, readability, schema, headings) |
| `/seo technical <url>` or `seo-technical` | Technical SEO: crawlability, robots.txt, sitemaps, canonicals, security, CWV |
| `/seo content <url>` or `seo-content` | Content quality, E-E-A-T, thin content detection, citation readiness |
| `/seo content-brief <topic>` or `seo-content-brief` | Structured SEO content brief for writers |
| `/seo schema <url>` or `seo-schema` | Schema.org JSON-LD detection, validation, generation |
| `/seo sitemap <url>` or `seo-sitemap` | XML sitemap structure analysis and quality validation |
| `/seo images <url>` or `seo-images` | Image SEO: alt text, format, lazy loading, compression |
| `/seo geo <url>` or `seo-geo` | Generative Engine Optimization (GEO) & AI Search / llms.txt readiness |
| `/seo agentic <url>` or `seo-agentic` | AI agent accessibility, Lighthouse Agentic Browsing, WebMCP |
| `/seo sxo <url>` or `seo-sxo` | Search Experience Optimization, persona scoring, intent alignment |
| `/seo drift <cmd> <url>` or `seo-drift` | Baseline tracking and regression detection over time |
| `/seo local <url>` or `seo-local` | Local SEO (Google Business Profile, NAP, reviews, local schema) |
| `/seo google <cmd>` or `seo-google` | Google Search Console, CrUX, PageSpeed Insights, GA4 reporting |
| `/seo backlinks <url>` or `seo-backlinks` | Backlink profile analysis and verification |
| `/seo cluster <keyword>` or `seo-cluster` | Semantic clustering and content hub architecture |
| `/seo programmatic` or `seo-programmatic` | Programmatic SEO landing page strategy and structure |
| `/seo ecommerce <url>` or `seo-ecommerce` | E-commerce product schema and shopping optimization |
| `/seo hreflang <url>` or `seo-hreflang` | Internationalization, hreflang validation, content parity |

### Running SEO Execution Tools

All Python-based SEO execution scripts run through the project launcher:

```bash
# Verify runtime health
./scripts/claude-seo doctor

# Fetch and parse a page
./scripts/claude-seo run parse_html.py <url> --json

# Run SSRF-safe page fetch with headless rendering
./scripts/claude-seo run render_page.py <url> --mode auto --json

# Check sitemaps
./scripts/claude-seo run sitemap_discovery.py <url> --json

# Check Core Web Vitals & PageSpeed Insights
./scripts/claude-seo run pagespeed_check.py <url> --json

# Generate Schema markup
./scripts/claude-seo run schema_generate.py <type> --json

# Capture drift baseline
./scripts/claude-seo run drift_baseline.py <url>
```

### Directory Layout

- `.agents/skills/`: 33 specialized SEO skills with natural language runbooks (`SKILL.md`)
- `.agents/skills/seo/scripts/`: 60 Python execution scripts
- `.agents/skills/seo/.venv/`: Self-contained Python virtual environment with headless Chromium and all dependencies
- `.agents/agents/`: Subagent persona definitions
- `.claude/skills/`: Symlinked for seamless Claude Code CLI compatibility
- `scripts/claude-seo`: Root-level launcher for CLI commands
