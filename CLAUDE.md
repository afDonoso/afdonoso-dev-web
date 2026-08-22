# afdonoso.dev

Static site: personal portfolio at `/`, plus Chronica's marketing and legal pages under
`/chronica`. Astro, deployed to **Cloudflare Workers static assets** (not Pages — Cloudflare
steers new projects to Workers, and `wrangler.jsonc` points at `./dist`).

**Full spec: `docs/site-handoff.md`** — canonical. Design references and their own README:
`design_handoff_chronica_site/`.

> The identical file at `design_handoff_chronica_site/source/site-handoff.md` is a
> **snapshot** shipped with the design bundle so it stayed self-contained. Don't edit it;
> edit `docs/site-handoff.md`. If the two ever disagree, `docs/` wins.

---

## Two pages are Apple release blockers

| Route | Required by | If broken |
|---|---|---|
| `/chronica/privacy` | App Store Connect privacy URL; paywall legal links | **Blocks external TestFlight.** Beta App Review rejects. |
| `/chronica/support` | App Store Connect support URL | Blocks App Store release. |

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

**No external runtime requests.** Fonts are self-hosted from
`design_handoff_chronica_site/design/fonts/`. No Google Fonts link, no CDN `<script>`, no
remote images. Everything ships from our own origin.

**Ship the `.woff2`, never the `.ttf`.** The `.ttf` files are 1.6 MB together; the subset
WOFF2 pair is 136 KB — 92% smaller — with the `wght 300–700` variable axis intact and
Latin-1 + Latin Ext-A + typographic punctuation retained (so Spanish accents and `¿ ¡ — “ ” ’`
all work). Declare one `@font-face` per style with `font-weight: 300 700` to keep the
variable range, and `font-display: swap`. Preload the roman; the italic can load normally.
Re-subset only if a language outside Latin is ever added — the ranges are recorded in
`docs/site-handoff.md`.

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

Deploy: `npm run build` then `npx wrangler deploy`. `wrangler.jsonc` declares
`assets.directory = ./dist` and no `main` — there is no Worker script, only static files.

---

## Definition of done for any page change

- `npm run build` succeeds on the pinned Node version
- All five routes render: `/`, `/chronica`, `/chronica/privacy`, `/chronica/terms`,
  `/chronica/support`
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
- Add a client framework. Forms, when wanted, are a Worker route (add `main` to
  `wrangler.jsonc`), not React
- Port the `dc-runtime` from the design prototypes. Those files are visual references
- Change the privacy or support URLs

---

## Escape hatch

`npm run build` outputs plain HTML to `dist/`. If Astro ever stops being worth its
maintenance, commit that folder, keep pointing `assets.directory` at it, delete the tooling. Nothing here is a
one-way door — worth remembering before adding anything that would change that.
