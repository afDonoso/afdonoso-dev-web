# afdonoso.dev

Static site: personal portfolio at `/`, plus Chronica's marketing and legal pages under
`/chronica`. Astro, static output, deployed to Cloudflare Pages.

---

## ⚠️ Two pages are Apple release blockers

| Route | Entered in App Store Connect as | If it 404s |
|---|---|---|
| `/chronica/privacy` | Privacy policy URL | **Blocks external TestFlight.** Beta App Review rejects. |
| `/chronica/support` | Support URL | Blocks App Store release. |

**Never change these URLs.** If a route must move, ship a redirect first — a 404 here is a
live production incident, not a broken link.

## ⚠️ The legal documents exist in two places

`src/content/PrivacyPolicy.md` and `src/content/TermsOfService.md` are **copies**. The
source of truth is the BookTracker repo:

```
iOS/BookTracker/BookTracker/Resources/Legal/{PrivacyPolicy,TermsOfService}.md
```

The app renders those same files in-app via `MarkdownDocumentView`. **A change to legal
text must land in three places together:** the app's copy, this repo's copy, and the
support address at `YouView.swift:291`. Website-only edits are how the two versions start
lying to each other.

The copies here carry a small YAML front-matter block the app's copies do not — `title`,
`description`, `lastUpdated`. Those three keys replace the `# Heading` and the
`_Last updated: …_` line, which the page renders as a masthead instead. **The prose below
the front matter is byte-identical to the app's**, so `diff` against the app copy shows
only that header. When the date changes, change `lastUpdated` too.

---

## Develop

```bash
nvm use          # reads .node-version → 24.19.0
npm install
npm run dev      # local dev server
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

Node is pinned in `.node-version`. Cloudflare Pages must carry a matching
`NODE_VERSION=24.19.0` build environment variable, or builds stop being reproducible.

## Deploy

Cloudflare Pages: build command `npm run build`, output directory `dist`.

Verify `https://afdonoso.dev/chronica/privacy` loads in a private window *before* entering
it into App Store Connect.

`npm run build` ends with `scripts/check-routes.mjs`, which fails if either release-blocker
URL stops being emitted. The `/es/` legal redirects come from `public/_redirects` and are
served by Cloudflare, so they can only be confirmed against a deploy (or `wrangler pages
dev dist`) — `astro preview` ignores that file.

## Languages

English and Spanish. English is unprefixed, Spanish lives under `/es` — that asymmetry is
deliberate, and it is what keeps `/chronica/privacy` and `/chronica/support` at the exact
URLs App Store Connect holds.

```
/                    /es
/chronica            /es/chronica
/chronica/support    /es/chronica/support
/chronica/privacy    → 301 from /es/chronica/privacy   English only
/chronica/terms      → 301 from /es/chronica/terms     English only
```

All copy is in `src/i18n/ui.ts`. **The Spanish is quoted from the iOS app's own strings**
(`Resources/Localization/*.xcstrings`), the same way the English was quoted from the app's
English ones — entries with a `// File::key` comment are verbatim and belong to the app, so
reword them there and re-copy, not here. A key present in `en` and missing from `es` throws
during the build rather than rendering `undefined`.

The legal documents have no Spanish version on purpose — see the sync warning above.

## Layout

```
src/i18n/ui.ts                all site copy, per locale + key-parity guard
src/i18n/utils.ts             useTranslations, localeUrl, altLang
src/styles/reset.css          shared reset + @font-face. No identity.
src/styles/chronica.css       tokens + all /chronica/* styling
src/styles/portfolio.css      the root holding page only
src/layouts/Base.astro        document skeleton — html, meta, favicon
src/layouts/Chronica.astro    extends Base: header, footer, tokens
src/layouts/Legal.astro       extends Chronica: masthead, contents rail, prose
src/layouts/Portfolio.astro   extends Base: stub
```

`/` and `/chronica` **must not share a visual language** — the portfolio is Andrés's own
identity and will house future apps; Chronica is one product among them. Chronica's paper
palette, Cormorant Garamond and gilt ornament are scoped to `/chronica/*` only, and its
footer must never appear on the root. See `CLAUDE.md` for the full set of constraints.

The canonical build spec and the design bundle it came from are kept outside this repo
(untracked — see `.gitignore`). `CLAUDE.md` carries every constraint that has to survive
without them.

## Still outstanding

Placeholders are in place, clearly marked, for assets that do not exist yet: the app icon,
four screenshots, the App Store badge, and the TestFlight link (a disabled affordance —
do not make it a live-looking button before the link is issued).
