// Shared by the static build and Cloudflare Pages Functions. Keep provider
// permissions aligned with Analytics.astro: consent-gated GA4 without Ads,
// Yandex Metrica without Webvisor, plus the hosting's Cloudflare beacon.
// Sources: developers.google.com/tag-platform/security/guides/csp
// yandex.ru/support/metrica/ru/code/install-counter-csp
// developers.cloudflare.com/web-analytics/faq/
const yandexOrigins = [
  'ru', 'az', 'by', 'co.il', 'com', 'com.am', 'com.ge', 'com.tr',
  'ee', 'fr', 'kg', 'kz', 'lt', 'lv', 'md', 'tj', 'tm', 'uz',
].map((suffix) => `https://mc.yandex.${suffix}`);

export function buildContentSecurityPolicy(inlineScriptHashes = []) {
  const hashes = [...new Set(inlineScriptHashes)].sort();
  for (const hash of hashes) {
    if (!/^sha256-[A-Za-z0-9+/]{43}=$/.test(hash)) {
      throw new Error(`Invalid inline script SHA-256 source: ${hash}`);
    }
  }

  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    `script-src 'self' ${hashes.map((hash) => `'${hash}'`).join(' ')} https://www.googletagmanager.com https://mc.yandex.ru https://mc.yandex.com https://yastatic.net https://static.cloudflareinsights.com`.replace(/\s+/g, ' '),
    "script-src-attr 'none'",
    // Calculator charts and React components use inline style attributes.
    // This style permission does not permit inline JavaScript.
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    `img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com ${yandexOrigins.join(' ')}`,
    `connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.google.com ${yandexOrigins.join(' ')} https://cloudflareinsights.com`,
    // Metrica can use its same-provider iframe for cookie synchronisation.
    // Webvisor's blob frames and third-party advertising frames stay blocked.
    "frame-src 'self' https://mc.yandex.ru https://mc.yandex.com https://mc.yandex.md",
    'upgrade-insecure-requests',
  ].join('; ');
}
