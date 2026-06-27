# Technology Stack

**Project:** Yuvraj Sarathe Portfolio
**Researched:** 2026-06-27

## Recommended Stack (Current)

### Core Framework
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| HTML5 | — | Structure | Semantic HTML with ARIA labels, skip-to-content link, accessibility-first |
| CSS3 | — | Styling | 1700+ lines with CSS custom properties (4 themes), IntersectionObserver + CSS transitions |
| JavaScript (Vanilla ES6) | — | Interactivity | Scroll reveals, theme toggling, form validation, click spark canvas effect, cursor trail |

### Deployment
| Technology | Purpose | Why |
|------------|---------|-----|
| GitHub Pages | Hosting | Free static hosting, automatic from `main` branch, custom 404 support |
| GitHub Actions | Optional CI | Not currently configured, but could auto-deploy on push |

### Supporting Libraries (CDN)
| Library | Version | Purpose |
|---------|---------|---------|
| Font Awesome 6 | 6.5.0 | Icons for contact section and social links |
| Google Fonts | — | Syne, DM Sans, JetBrains Mono, Space Mono, Playfair Display |

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Vanilla JS | React/Next.js | Overkill for a single-page static portfolio; no dynamic data fetching needed |
| Hosting | GitHub Pages | Vercel/Netlify | GitHub Pages is free, already configured, no build step needed for static site |
| Form Handler | mailto: only | Formspree/Web3Forms | Currently missing — mailto opens user's email client with no server-side capture |

## Observations

- No package.json, no bundler, no build step — pure static site
- Current stack is appropriate for the project scope
- If adding a contact form handler, prefer a free-tier serverless option (Formspree, Web3Forms, or Cloudflare Workers + email sending)
- No CNAME file → no custom domain configured

