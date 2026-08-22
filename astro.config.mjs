// @ts-check
import { defineConfig } from 'astro/config';

// Static output only. No integrations, no client framework — see CLAUDE.md.
export default defineConfig({
  site: 'https://afdonoso.dev',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      // English stays unprefixed. This is what guarantees the two release-blocker
      // URLs — /chronica/privacy and /chronica/support — never move.
      prefixDefaultLocale: false,
    },
    // No `fallback`: the English-only legal pages are handled by a real 301 in
    // public/_redirects, not by a meta-refresh page.
  },
  markdown: {
    // Legal pages are rendered through this pipeline. Never hand-convert to HTML.
    syntaxHighlight: false,
  },
});
