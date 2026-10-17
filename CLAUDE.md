# Mosano Project - Claude Code Instructions

## Overview
This repository is the **Mosano MVP Budget Planner** built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Claude SEO Toolkit
Claude SEO skills and agents are installed locally on this project.

### Skills & Agents Location
- Skills: `.claude/skills/` (linked to `.agents/skills/`)
- Subagents: `.claude/agents/` (linked to `.agents/agents/`)
- Launcher: `./scripts/claude-seo`

### Verification
Run the runtime health check:
```bash
./scripts/claude-seo doctor
```

### Core Commands
- `/seo audit <url>`: Full website audit
- `/seo page <url>`: Deep single-page analysis
- `/seo technical <url>`: Technical SEO check
- `/seo content <url>`: E-E-A-T and content quality check
- `/seo schema <url>`: Schema.org detection, validation, generation
- `/seo geo <url>`: AI Overviews & Generative Engine Optimization
- `/seo drift <cmd> <url>`: Track regressions against baseline
