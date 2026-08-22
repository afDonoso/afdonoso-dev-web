/**
 * Post-build guard for the two Apple release-blocker URLs.
 *
 * /chronica/privacy and /chronica/support are entered in App Store Connect. A
 * refactor that renames a page file, changes `prefixDefaultLocale`, or moves a
 * route under a locale prefix would silently 404 them in production. This fails
 * the build instead.
 */
import { readFileSync, existsSync } from 'node:fs';

const required = [
  { path: 'dist/index.html', lang: 'en' },
  { path: 'dist/chronica/index.html', lang: 'en' },
  { path: 'dist/chronica/privacy/index.html', lang: 'en', blocker: true },
  { path: 'dist/chronica/terms/index.html', lang: 'en' },
  { path: 'dist/chronica/support/index.html', lang: 'en', blocker: true },
  { path: 'dist/es/index.html', lang: 'es' },
  { path: 'dist/es/chronica/index.html', lang: 'es' },
  { path: 'dist/es/chronica/support/index.html', lang: 'es' },
];

/** The legal documents are English-only; a Spanish build of them is a bug. */
const forbidden = ['dist/es/chronica/privacy/index.html', 'dist/es/chronica/terms/index.html'];

const errors = [];

for (const { path, lang, blocker } of required) {
  if (!existsSync(path)) {
    errors.push(`${blocker ? 'RELEASE BLOCKER ' : ''}missing route: ${path}`);
    continue;
  }
  const html = readFileSync(path, 'utf8');
  if (!html.includes(`<html lang="${lang}"`)) {
    errors.push(`${path} should declare lang="${lang}"`);
  }
}

for (const path of forbidden) {
  if (existsSync(path)) {
    errors.push(`${path} exists — the legal documents must stay English-only`);
  }
}

if (!existsSync('dist/_redirects')) {
  errors.push('dist/_redirects missing — /es/ legal URLs would 404');
}

if (errors.length) {
  console.error('\nRoute check failed:\n' + errors.map((e) => `  ✗ ${e}`).join('\n') + '\n');
  process.exit(1);
}

console.log(`Route check passed — ${required.length} routes, blockers intact.`);
