---
phase: 04-experience-certifier
plan: 01
type: execute
subsystem: portfolio-content
tags: [experience, timeline, certifier, kdm-cli, featured-projects, navigation, sitemap]
requires: []
provides: [experience-section, certifier-project-card, nav-links, sitemap-entry]
affects: [index.html, style.css, sitemap.xml]
tech-stack:
  added: []
  patterns: [timeline-css, featured-card-pattern, section-background-pattern]
key-files:
  created: []
  modified:
    - index.html
    - style.css
    - sitemap.xml
decisions: []
metrics:
  duration: "~15 min"
  completed_date: "2026-06-10"
---

# Phase 04 Plan 01: Experience Section + Certifier Swap Summary

**One-liner:** Added Experience section with Demon Die/KDM-CLI timeline entries between Skills and Certificates, updated navigation and section numbering, swapped KDM-CLI for Certifier in Featured Projects, and added CSS for both new components.

## Completed Tasks

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | Add Experience section HTML + update section numbering | `2479e53` | index.html |
| 2 | Update navigation and sitemap | `856fccb` | index.html, sitemap.xml |
| 3 | Swap KDM-CLI for Certifier in featured projects + add CSS | `045474b` | index.html, style.css |

## Files Modified

### `index.html` (805→852 lines)
- **Experience section** inserted between Skills and Certificates sections
  - Two timeline entries: Demon Die (Co-founder & Certifier Creator, June 2026) and KDM-CLI (Codeowner, May 2026)
  - Uses existing `.timeline` CSS classes for consistent styling
  - External links to demondie.vercel.app, Certifier repo/app, kdmcli.app, KDM-CLI source
- **Section numbering updated:** Certificates 04→05, Contact 05→06
- **Desktop nav:** Experience link between Skills and Certificates
- **Mobile nav:** Experience link with `--i:3`, stagger indices shifted: Certs 3→4, Resume 4→5, Contact 5→6
- **Featured projects:** KDM-CLI card removed, Certifier card inserted after GitIssue
  - Certifier: GitHub Webhooks / Node.js / GitHub API / PR Labels
  - Links to Certifier source repo and deployed app

### `style.css` (1708→1754 lines)
- **`.fc-top-certifier`** — gradient block (3 themes: obsidian/manuscript/alabaster)
- **Experience section styles:**
  - `.experience-section` with `bg-surf` background and ambient radial glow `::before`
  - `.exp-links` flex container with animated `.btn-text` underline on hover

### `sitemap.xml` (39→45 lines)
- Added `#experience` URL entry with `2026-06-10` lastmod
- Updated root URL lastmod from `2026-04-13` to `2026-06-10`

## Deviations from Plan

None — plan executed exactly as written.

## Verification Results

| Check | File | Pattern | Status |
|-------|------|---------|--------|
| 1 | index.html | `experience-section` | PASS |
| 2 | index.html | `nav-link-experience` | PASS |
| 3 | index.html | `fc-title-certifier` | PASS |
| 4 | index.html | `card-kdm` | PASS (removed) |
| 5 | sitemap.xml | `#experience` | PASS |
| 6 | style.css | `fc-top-certifier` | PASS |
| 7 | style.css | `experience-section` | PASS |

## Self-Check: PASSED

All created files verified on disk. All commits confirmed in git log:

```
2479e53 feat(04-experience-certifier): add experience section HTML between skills and certificates
856fccb feat(04-experience-certifier): add experience nav links and update sitemap
045474b feat(04-experience-certifier): swap KDM-CLI for Certifier in featured projects + add CSS
```
