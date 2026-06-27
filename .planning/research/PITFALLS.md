# Domain Pitfalls

**Domain:** Developer portfolio website
**Researched:** 2026-06-27

## Critical Pitfalls

### Pitfall 1: Stale Organization Branding
**What goes wrong:** Organization renamed from "Demon Die" to "Omnikon" but all 10+ references in the portfolio still use the old name.
**Why it happens:** The org rename happened recently (June 2026) and the portfolio wasn't updated to reflect it.
**Consequences:** Confusion for visitors clicking dead links (demondie.vercel.app → 404); outdated impression; Certifier repo URL uses old org name (redirects but unprofessional).
**Prevention:** Audit all external org links and brand name references whenever the associated organization rebrands.
**Detection:** grep for "Demon.Die" in codebase — 10 matches in index.html, 1 in README.md.

### Pitfall 2: Dead Vercel Deployment Links
**What goes wrong:** Vercel preview deployments get cleaned up or URLs change, leaving 404s on the portfolio.
**Why it happens:** Vercel deployments are tied to specific branches/projects; renaming or deleting the Vercel project breaks the URL.
**Consequences:** Two 404 links found (demondie.vercel.app, motivio-two.vercel.app) — erodes trust in the "Live" badges shown on project cards.
**Prevention:** Use Vercel production domains (project-name.vercel.app) consistently; verify all external links before deployment; add link-checking to pre-deploy CI.

## Moderate Pitfalls

### Pitfall 1: mailto-Only Contact Form
**What goes wrong:** Contact form uses `window.open('mailto:...')` which opens the user's local email client. No server-side capture means messages are lost if the user doesn't have a configured email client, and there's no analytics/confirmation that messages were sent.
**Prevention:** Add a serverless form handler (Formspree, Web3Forms, or Cloudflare Worker) with a confirmation step.

### Pitfall 2: Missing Social Share Images
**What goes wrong:** OG and Twitter card meta tags exist but lack `og:image` / `twitter:image` properties. Social media previews will show a blank card or generic site screenshot.
**Prevention:** Create a 1200×630 OG image and add the meta tags.

### Pitfall 3: Sitemap Case Inconsistency
**What goes wrong:** Sitemap.xml uses lowercase `yuvraj-sarathe.github.io` while canonical URLs use `Yuvraj-Sarathe.github.io`. GitHub Pages is case-insensitive for the username, but search crawlers may treat them as different URLs.
**Prevention:** Normalize all URLs to consistent casing (prefer the canonical form).

## Minor Pitfalls

### Pitfall 1: FlowForge Links to Profile Instead of Repo
**What goes wrong:** Project 02 (FlowForge) GitHub link points to `https://github.com/Yuvraj-Sarathe` (profile) instead of `https://github.com/Yuvraj-Sarathe/FlowForge` (specific repo).
**Prevention:** Update to specific repo URL.

### Pitfall 2: Outdated Sitemap Dates
**What goes wrong:** All sitemap `<lastmod>` entries are 2026-06-10 — not updated with latest content changes.
**Prevention:** Update lastmod dates when content changes are made.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Branding updates | Missing some Demon Die references | Use comprehensive grep before/after |
| Link fixing | New links also break later | Add link-checker to workflow |
| OG images | Images don't render correctly on all platforms | Test with Twitter Card Validator + Facebook Sharing Debugger |
| Form handler | Privacy/SPAM concerns | Add CAPTCHA or honeypot field |
| sitemap update | Forgetting to add new case study pages | Review all screens/ files for inclusion |

## Sources

- Direct verification of all external links via HTTP fetches
- Codebase grep for "Demon.Die", "mikky", "Omnikon"
- GitHub organization page: https://github.com/Omnikon-Org
