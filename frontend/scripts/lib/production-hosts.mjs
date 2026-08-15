// Which hosts production is allowed to contact.
//
// The verify-dist-* validators can only inspect what the build produces.
// Cloudflare Pages injects its Web Analytics beacon at the edge, so anything
// added there - by Cloudflare or by a later change - never reaches dist and is
// invisible to them. verify-production-external-hosts.mjs closes that gap by
// watching a real browser session; this module holds the policy it applies and
// stays free of browser code so it can be unit-tested without the network.

export const SITE_DOMAIN = 'calcuway.com';

// Exact hostnames only, deliberately not a wildcard: Cloudflare Web Analytics
// serves the beacon from one host and receives RUM payloads on another, and a
// wildcard would silently admit any future *.cloudflareinsights.com endpoint.
export const ALLOWED_THIRD_PARTY_HOSTS = Object.freeze([
  'cloudflareinsights.com',
  'static.cloudflareinsights.com',
]);

// Consent-gated analytics. These must stay absent while PUBLIC_GA_ID and
// PUBLIC_YM_ID are unset. Matched by registrable domain because both vendors
// serve from several subdomains, so that such a host is reported as a broken
// consent invariant rather than as a merely unknown one.
export const FORBIDDEN_ANALYTICS_DOMAINS = Object.freeze([
  'googletagmanager.com',
  'google-analytics.com',
  'mc.yandex.ru',
]);

export const HOST_CLASSES = Object.freeze([
  'first-party',
  'allowed-third-party',
  'forbidden-analytics',
  'unknown-third-party',
]);

function isDomainOrSubdomain(hostname, domain) {
  return hostname === domain || hostname.endsWith(`.${domain}`);
}

/**
 * Classify a single hostname. Only the hostname matters - never the full URL,
 * query string, beacon token, ordering or timing - so the check stays stable
 * while Cloudflare changes any of those.
 */
export function classifyHost(hostname) {
  if (isDomainOrSubdomain(hostname, SITE_DOMAIN)) return 'first-party';
  if (FORBIDDEN_ANALYTICS_DOMAINS.some((domain) => isDomainOrSubdomain(hostname, domain))) {
    return 'forbidden-analytics';
  }
  if (ALLOWED_THIRD_PARTY_HOSTS.includes(hostname)) return 'allowed-third-party';
  return 'unknown-third-party';
}

/**
 * Group observed hostnames by class. `ok` is false as soon as a consent-gated
 * analytics host appears or an unrecognised third party shows up.
 */
export function reviewHosts(hostnames) {
  const grouped = Object.fromEntries(HOST_CLASSES.map((name) => [name, []]));
  for (const hostname of [...new Set(hostnames)].sort()) {
    grouped[classifyHost(hostname)].push(hostname);
  }

  return {
    ...grouped,
    ok: grouped['forbidden-analytics'].length === 0 && grouped['unknown-third-party'].length === 0,
  };
}
