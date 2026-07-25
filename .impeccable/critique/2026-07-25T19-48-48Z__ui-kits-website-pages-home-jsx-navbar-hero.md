---
target: navbar + hero (Home.jsx)
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-07-25T19-48-48Z
slug: ui-kits-website-pages-home-jsx-navbar-hero
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Search/account/hamburger icons give zero feedback on click — no handlers exist at all |
| 2 | Match System / Real World | 3 | Strong regional copy (Serra da Canastra, cumaru); generic Material Symbols icons undercut it |
| 3 | User Control and Freedom | 1 | Hamburger button is a dead end — no `onClick`, no menu panel anywhere in the bundle |
| 4 | Consistency and Standards | 3 | Token system is coherent, but two different CTA components ("Peça pelo App" in navbar vs. hero) diverge in hover treatment |
| 5 | Error Prevention | 2 | Email input has `required` only, no format validation feedback |
| 6 | Recognition Rather Than Recall | 3 | Nav labels always visible; icons are standard enough |
| 7 | Flexibility and Efficiency | n/a | Not applicable — marketing/Persuade page |
| 8 | Aesthetic and Minimalist Design | 2 | Hero placeholder box literally renders the text "Relume placeholder image" beside the h1 |
| 9 | Error Recovery | 1 | Zero `:focus`/`:focus-visible` styling anywhere in tokens or the compiled bundle |
| 10 | Help and Documentation | n/a | Not applicable — marketing/Persuade page |

**Total: 17/32 (53%) — Acceptable, trending toward Poor.**

## Design Specificity Verdict

**LLM assessment**: Reads as a Relume template with Portuguese copy and a Minas Gerais palette poured in, not a site authored for this brand. JSX comments still carry Relume's internal naming (`layout-375`, `layout-378`, `cta-40`, `testimonial-17`), five consecutive Home sections share one identical rhythm (eyebrow → h2 → centered subhead → symmetric card grid), and generic Material Symbols icons stand in where product photography or custom iconography should live. The copywriting is genuinely good and specific — nothing else on the page is.

**Deterministic scan**: Detector's directory/glob mode returned empty on all `.jsx` files — likely a tool limitation with JSX parsing, not a clean bill of health. Pointed at compiled `_ds_bundle.js`, it found one real issue: `_ds_bundle.js:378`, `transition: "width 0.3s ease"` on the History page's Tabs progress indicator (layout-thrash risk; should use `transform`/`grid-template-rows`). Both assessments independently converged, via separate static inspection, on the same three facts: zero `@media` queries anywhere, zero `:focus`/`outline` styling anywhere, and the hamburger button has no `onClick` and no menu panel exists.

**Visual overlays**: Not available this run — no browser tool in Assessment B's isolated context. Desktop screenshots already captured earlier in-session (1400×1000) confirm both assessments' description of the navbar and hero.

## Overall Impression

Good bones — real token system, four color schemes, well-crafted button micro-interactions, specific copy — but the navbar promises more than it delivers (3 of 8 interactive elements are inert), the hero contradicts its own warmth pitch with a visible debug label in the highest-attention pixel on the page, and there is zero mobile story anywhere in the codebase.

## What's Working

1. Real design-token architecture: four semantic color schemes, full spacing scale, type scale that swaps at 992px.
2. Button micro-interactions show real craft (radial glow-on-hover, press-bounce shadow, corner-badge CTA fill).
3. Copy voice is specific and warm, not generic marketing filler.

## Priority Issues

**[P0] Hamburger menu button is completely non-functional**
Why it matters: `_ds_bundle.js` Navbar (~line 819) renders the hamburger with no `onClick` and no menu/drawer component exists anywhere. It's the only visible affordance for "more navigation" on narrow viewports, and it does nothing.
Fix: Wire to a real slide-down/drawer panel with the four nav links; hide inline `<nav>` links behind it below the pill's overflow width.
Suggested command: /impeccable harden, then /impeccable adapt

**[P0] Zero responsive breakpoints exist anywhere in the codebase**
Why it matters: No `@media` queries outside one type-scale swap. Navbar pill is a hard `width:1100px`, hero is a hard `1fr 1fr` grid, card grids are hard `repeat(4,1fr)` — none of it reflows.
Fix: Add breakpoints collapsing hero to one column, grids to 1-2 columns, navbar to hamburger-driven mobile nav below ~768px.
Suggested command: /impeccable adapt

**[P1] Hero has no focal point — placeholder announces "unfinished"**
Why it matters: Literal visible text "Relume placeholder image" sits beside the h1 in the highest-attention pixel real estate on the site; repeats in testimonials where 2 of 3 avatars are also blank.
Fix: Swap placeholder label for on-brand/blank at minimum; prioritize sourcing real photography.
Suggested command: /impeccable polish

**[P1] No visible focus states anywhere in the design system**
Why it matters: No `outline`/`:focus`/`:focus-visible` in tokens or bundle; every interactive element only branches on mouse hover. Hard accessibility failure, confirmed independently by both assessments.
Fix: Add visible `:focus-visible` ring to every interactive element.
Suggested command: /impeccable audit, then /impeccable harden

**[P2] Search and account icons are decorative-only — same dead-end pattern as hamburger**
Why it matters: No `onClick` threaded through at all. 3 of the navbar's 8 interactive-looking elements do nothing on click.
Fix: Wire real handlers or remove until flows exist.
Suggested command: /impeccable clarify or /impeccable harden

## Persona Red Flags

**Jordan (First-Timer)**: Sees the gray placeholder box beside the hero headline — trust hit in first two seconds. Tries navbar search icon out of habit, nothing happens.

**Riley (Stress Tester)**: Tabs through navbar with keyboard, gets zero focus indication anywhere. Resizes browser, finds fixed 1100px pill doesn't adapt at any width. Clicks hamburger specifically to test mobile affordance — does nothing.

**Casey (Mobile User)**: Never gets a functioning experience. Zero `@media` queries means an 8-element navbar row, a still-two-column hero grid, and unreadable 4-column card grids on a phone. The one theoretical fix (hamburger) does nothing — notable given the primary CTA assumes mobile app usage.

## Minor Observations

- Navbar `CtaButton` and hero's primary `Button` are different components with different hover treatments for the same nominal CTA.
- Testimonial star rating is hardcoded static text with no `aria-label` equivalent.
- "Peça pelo App" has no visible destination — no App/Play Store badge anywhere.
- Newsletter form's "Enviado!" success state never resets.
- `_ds_bundle.js:378` — `transition: width` on History page's Tabs progress rail causes layout thrash.

## Questions to Consider

- If every Relume `layout-XXX` naming convention is still in the JSX comments, has a design decision been made, or only a content decision mistaken for one?
- The navbar spends 3 of 8 interactive slots on affordances that go nowhere — what's the cost of shipping a smaller, honest navbar instead?
- Given zero media queries exist and the primary CTA is "download our app," has this been opened on an actual phone at any point?
