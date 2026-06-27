# Architecture Patterns

**Domain:** Developer portfolio website
**Researched:** 2026-06-27

## Recommended Architecture

```
index.html (887 lines)
├── <head>
│   ├── Meta tags (SEO, OG, Twitter, robots, canonical)
│   ├── JSON-LD structured data (Person + WebSite)
│   ├── Google Fonts (5 font families)
│   ├── Font Awesome 6 (CDN)
│   ├── favicon.svg + favicon.ico
│   ├── style.css (1700+ lines, all styles inline)
│
├── <body>
│   ├── Skip link (accessibility)
│   ├── Grain overlay (CSS noise texture)
│   ├── Scroll progress bar
│   ├── Nav (fixed top)
│   │   ├── Logo (YS)
│   │   ├── Desktop links (6 sections + resume)
│   │   ├── Theme toggle button (4 themes)
│   │   └── Hamburger → mobile overlay
│   │
│   ├── <main id="main">
│   │   ├── Hero (#hero) — Name, role, stats (4 stat items), CTA buttons
│   │   ├── About (#about) — Bio, education, 4 approach items
│   │   ├── Projects (#projects) — 5 featured cards + 11 project rows
│   │   ├── Skills (#skills) — 3 columns (Proficient, Familiar, Expanding)
│   │   ├── Experience (#experience) — Timeline (2 items)
│   │   ├── Certificates (#certificates) — 5 items
│   │   └── Contact (#contact) — Form + sidebar with social links
│   │
│   ├── Footer — Name, role, nav links, copyright
│   ├── Back-to-top button
│   └── Scripts (deferred)
│       ├── script.js — Scroll reveals, theme, form validation, click spark
│       └── cursor-trail.js — Custom cursor effect
```

## Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| Theme system | 4 themes via CSS custom properties, localStorage persistence | All CSS (via `data-theme` attribute on `<html>`) |
| Scroll reveals | IntersectionObserver-based fade-up/slide-up/expand animations | JS class additions → CSS transitions |
| Contact form | Client-side validation, mailto: fallback | No backend communication |
| Case studies (screens/) | Individual project detail pages | Linked from projects section |

## Patterns to Follow

### Pattern 1: CSS Custom Property Theming
**What:** `:root` and `[data-theme="..."]` define all colors, fonts via CSS variables.
**When:** Always — enables instant theme switching without re-rendering.
**Example:**
```css
:root, [data-theme="obsidian"] { --bg: #0e0e0e; --text-1: #f0ebe0; --accent: #e8704a; }
[data-theme="phosphor"] { --bg: #0a0e1a; --accent: #64ffda; }
```

### Pattern 2: IntersectionObserver Reveal
**What:** Elements with `data-reveal` attributes trigger CSS animations when scrolled into view.
**When:** All section content — cascading delays via `data-delay` attribute.

### Pattern 3: Mobile Navigation Overlay
**What:** Full-screen overlay with animated link entries (CSS custom property `--i` for stagger).
**When:** Mobile viewport — triggered by hamburger button with `aria-expanded` toggle.

## Scalability Considerations

| Concern | Current Approach | Notes |
|---------|-----------------|-------|
| Static content | Hardcoded in HTML | Fine for portfolio; no data fetching needed |
| Images | No hero/project images except OG | Adding social share images would help |
| Form submissions | mailto: only | Should add serverless handler |
| Case study pages | 6 standalone HTML files | Reusable CSS in screens/css/project.css |

## Sources

- Direct codebase analysis of index.html (887 lines), style.css (1700+ lines), script.js (394 lines)
