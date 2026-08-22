# afdonoso.dev

Static site: personal portfolio at `/`, plus Chronica's marketing and legal pages under
`/chronica`. Astro, deployed to Cloudflare Pages.

> **The build spec and the design bundle are not in this repo.** `docs/site-handoff.md`
> (the canonical spec) and `design_handoff_chronica_site/` (the `.dc.html` prototypes,
> screenshots and original font files) are kept locally and deliberately untracked — see
> `.gitignore`. This file carries every constraint that must outlive them; if you need the
> spec itself, ask the repo owner for it.

---

## Two pages are Apple release blockers

| Route | Required by | If broken |
|---|---|---|
| `/chronica/privacy` | App Store Connect privacy URL; paywall legal links | **Blocks external TestFlight.** Beta App Review rejects. |
| `/chronica/support` | App Store Connect support URL | Blocks App Store release. |

`npm run build` runs `scripts/check-routes.mjs`, which fails the build if either URL stops
being emitted, or if a Spanish build of the legal pages ever appears. Don't delete it.

Both are entered into App Store Connect and must stay publicly reachable over HTTPS with
no login. **Never change these URLs.** If a route must move, add a redirect — a 404 here
is a live production incident, not a broken link.

---

## Non-negotiables

These outlive any single task. Don't relax them without the repo owner saying so.

**Zero client JS by default.** Astro ships static HTML; that's why it was chosen over
React. Every page must be complete and readable with JS disabled. Enhancements (scroll
reveals, theme swatches, dark-mode toggle) are progressive: small, inline, additive. If a
behavior isn't worth its JS, drop the *behavior* — never the content behind it.

Prefer native elements over scripting them. The support FAQ is `<details>`/`<summary>`,
not an accordion component.

**No external runtime requests.** Fonts are self-hosted from `public/fonts/`. No Google
Fonts link, no CDN `<script>`, no remote images. Everything ships from our own origin.

**Ship the `.woff2`, never the `.ttf`.** The `.ttf` files are 1.6 MB together; the subset
WOFF2 pair is 136 KB — 92% smaller — with the `wght 300–700` variable axis intact and
Latin-1 + Latin Ext-A + typographic punctuation retained (so Spanish accents and `¿ ¡ — “ ” ’`
all work). Declare one `@font-face` per style with `font-weight: 300 700` to keep the
variable range, and `font-display: swap`. Preload the roman; the italic can load normally.
Re-subset only if a language outside Latin is ever added — the ranges are recorded in the
local build spec, which is not committed.

Known gap: the subset drops `❦` (U+2766), which the full font did carry and which the site
uses as its main ornament. It currently renders from a system fallback. Add U+2766 when
re-subsetting.

**English and Spanish, and the legal pages are English-only.** Locales are `en` and `es`,
matching the app's own locale code. English is unprefixed (`prefixDefaultLocale: false`) —
that is what keeps the two blocker URLs where App Store Connect expects them. Copy lives in
`src/i18n/ui.ts`; a key present in `en` and missing from `es` fails the build.

The privacy policy and terms have **no Spanish version** and must not get one here: they are
byte-synced copies of the app's legal text, and a Spanish document with no counterpart in
the app is worse than an English one. `/es/chronica/{privacy,terms}` 301 to the English
URLs via `public/_redirects`; Spanish pages link there directly, marked `hreflang="en"` and
labelled *(en inglés)*.

**Spanish marketing copy is quoted from the app, not translated.** The English copy was
lifted from the app's English onboarding strings; the Spanish is lifted from the app's
Spanish ones, in
`iOS/BookTracker/BookTracker/Resources/Localization/*.xcstrings`. Entries in `ui.ts` carry a
`// File::key` comment naming their source — those are verbatim and must not be reworded
here. Fix them in the app and re-copy. Where the app's Spanish is shorter than the English
(`Onboarding::sessionBody` is the case today), the app's wording wins: the site and the app
must not say different things. Theme names (`Ink`, `Foxed`, …) are untranslated in the app
and stay untranslated here.

**Separate stylesheets.** Not inline styles, not per-page `<style>` blocks. The design
prototypes use inline styles only because of the prototyping environment — that is not the
target.

**`.dev` is HSTS-preloaded**, so browsers refuse plain HTTP outright. Never emit an
`http://` URL for our own assets.

**Pin Node.** `.node-version` in the repo root and a matching `NODE_VERSION` in the Pages
build environment. Reproducible builds are the whole reason for taking the Astro
dependency.

---

## The portfolio and Chronica are visually separate — on purpose

`/` is Andrés's own identity and will eventually house several apps. `/chronica` is one
product among them. **They must not share a visual language**, or every future app page
inherits Chronica's antiquarian-book aesthetic.

- Chronica's design system (paper palette, Cormorant Garamond, gilt ornament) is scoped to
  `/chronica/*` **only**.
- `/` is currently a deliberately provisional **holding page**: system font stack, near-
  neutral colors. Do not "improve" it by borrowing Chronica's palette or typeface. A plain
  page is correct; a page that looks like it decided something is not.
- The real portfolio design is deferred and will be specified separately.

This is enforced structurally — keep it that way:

```
src/i18n/ui.ts                all site copy, per locale + the key-parity guard
src/i18n/utils.ts             useTranslations, localeUrl, altLang
src/styles/reset.css          shared reset + @font-face. No identity.
src/styles/chronica.css       tokens + all /chronica/* styling
src/layouts/Base.astro        document skeleton only — html, meta, favicon
src/layouts/Chronica.astro    extends Base: header, footer, tokens
src/layouts/Portfolio.astro   extends Base: stub
```

Chronica's footer (support email + legal links) belongs on `/chronica/*` pages and must
**not** appear on the root.

---

## Legal pages: two copies exist

`src/content/PrivacyPolicy.md` and `TermsOfService.md` are **copies**. The source of truth
is the BookTracker repo:

```
iOS/BookTracker/BookTracker/Resources/Legal/{PrivacyPolicy,TermsOfService}.md
```

The app renders those same files in-app via `MarkdownDocumentView`. **A change to legal
text must land in three places together:** the app's copy, this repo's copy, and the
support address at `YouView.swift:291`. Website-only edits are how the two versions start
lying to each other.

Render them through Astro's Markdown pipeline. Never hand-convert to HTML — that
conversion step is exactly what causes drift.

Placeholders are already filled (21 Aug 2026): contact `chronica-support@afdonoso.dev`,
legal entity *Andres Felipe Donoso Diaz*, jurisdiction *Colombia*. Take the files as they
stand.

Typography matters more here than anywhere else — these are long documents someone may
actually read. ~65–75 character measure, clear heading hierarchy, last-updated date at top.

---

## Content rules

**Never claim anything that isn't true yet.** No App Store link until one exists, no
TestFlight link until one exists (leave the placeholder clearly disabled), no press quotes,
no download counts, no testimonials.

The privacy claim — *"Nothing leaves your device"* — is accurate as written because the app
is offline-first. **Do not embellish it.** Overclaiming on privacy is what invites
scrutiny of the privacy manifest.

Marketing copy on `/chronica` is quoted from the app's own onboarding strings. That voice
is deliberate; match it rather than writing fresh marketing prose.

---

## Commands

```bash
npm install
npm run dev      # local
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

Cloudflare Pages: build `npm run build`, output `dist`.

---

## Definition of done for any page change

- `npm run build` succeeds on the pinned Node version
- All eight routes render: `/`, `/chronica`, `/chronica/privacy`, `/chronica/terms`,
  `/chronica/support`, `/es`, `/es/chronica`, `/es/chronica/support`
- No English left on a `/es/` page, and no Spanish build of the legal pages
- Legal pages render from Markdown, not hand-converted HTML
- Light and dark both correct (`prefers-color-scheme`)
- 375px wide with no horizontal scroll
- Page is readable and complete with JS disabled
- No external network requests in the built output
- Root holding page uses neither Cormorant nor the paper palette

---

## Never

- Add analytics, tracking, cookie banners, or a newsletter without being asked
- Commit secrets or API keys — nothing here needs any
- Add a client framework. Forms, when wanted, are a Cloudflare Pages Function under
  `/functions/`, not React
- Port the `dc-runtime` from the design prototypes. Those files are visual references
- Change the privacy or support URLs

---

## Escape hatch

`npm run build` outputs plain HTML to `dist/`. If Astro ever stops being worth its
maintenance, commit that folder, point Pages at it, delete the tooling. Nothing here is a
one-way door — worth remembering before adding anything that would change that.
