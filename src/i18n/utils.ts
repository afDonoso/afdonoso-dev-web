/**
 * Locale helpers. Astro's built-in i18n handles routing and gives us
 * `getRelativeLocaleUrl`; the dictionary and these accessors are ours.
 */
import { ui, defaultLang, type Lang } from './ui';

/** The copy for one locale. Nested — `t.landing.hero.body`. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * A site path for a locale. English is unprefixed (`prefixDefaultLocale: false`),
 * which is what keeps /chronica/privacy and /chronica/support exactly where App
 * Store Connect expects them.
 */
export function localeUrl(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return clean ? `${prefix}/${clean}` : prefix || '/';
}

/** The other locale. Two languages, so this stays a pair, not a list. */
export function altLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

export { defaultLang, type Lang };
