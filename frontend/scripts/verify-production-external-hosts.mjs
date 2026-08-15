// Watches a real browser session against production and fails when the live
// site contacts a third-party host that is not on the allowlist.
//
// This is deliberately NOT wired into prebuild/build/check: it needs the public
// internet, and a transient network problem must never block a local build.
// Run it on demand with `npm run verify:production-external-hosts`.

import { chromium } from '@playwright/test';
import {
  ALLOWED_THIRD_PARTY_HOSTS,
  FORBIDDEN_ANALYTICS_DOMAINS,
  SITE_DOMAIN,
  reviewHosts,
} from './lib/production-hosts.mjs';

const baseUrl = (process.env.PRODUCTION_URL ?? `https://${SITE_DOMAIN}`).replace(/\/$/, '');
const paths = ['/ru/', '/ru/privacy/', '/en/privacy/'];
// Deferred beacons keep loading after `networkidle`, so give the page a bounded
// settle window. This is a wait, not an assertion about how fast anything is.
const settleMs = 2_500;

async function collectHostnames(browser, path) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const hostnames = new Set();

  // Attached before navigation so the document request itself is counted.
  page.on('request', (request) => {
    try {
      hostnames.add(new URL(request.url()).hostname);
    } catch {
      // Ignore non-navigable schemes such as data: and blob:.
    }
  });

  try {
    const response = await page.goto(`${baseUrl}${path}`, { waitUntil: 'networkidle' });
    if (!response?.ok()) throw new Error(`${path} responded with ${response?.status() ?? 'no response'}`);
    await page.waitForTimeout(settleMs);
  } finally {
    await context.close();
  }

  return [...hostnames];
}

const browser = await chromium.launch();
const issues = [];

try {
  for (const path of paths) {
    const review = reviewHosts(await collectHostnames(browser, path));

    console.log(`\n${baseUrl}${path}`);
    console.log(`  first party        : ${review['first-party'].join(', ') || '(none)'}`);
    console.log(`  allowed third party: ${review['allowed-third-party'].join(', ') || '(none)'}`);

    for (const hostname of review['forbidden-analytics']) {
      issues.push(`${path}: consent-gated analytics host contacted: ${hostname}`);
    }
    for (const hostname of review['unknown-third-party']) {
      issues.push(`${path}: unexpected third-party host: ${hostname}`);
    }
  }
} finally {
  await browser.close();
}

if (issues.length > 0) {
  console.error('\nProduction contacted hosts that are not allowed:');
  for (const issue of issues) console.error(`- ${issue}`);
  console.error('\nAllowed third-party hosts:');
  for (const hostname of ALLOWED_THIRD_PARTY_HOSTS) console.error(`- ${hostname}`);
  console.error(
    '\nIf the new host is intended, add it to ALLOWED_THIRD_PARTY_HOSTS in ' +
      'scripts/lib/production-hosts.mjs and update the privacy policy in the same change.',
  );
  process.exit(1);
}

console.log(
  `\nVerified ${paths.length} production pages: only ${ALLOWED_THIRD_PARTY_HOSTS.join(' and ')} ` +
    `are contacted besides ${SITE_DOMAIN}; none of ${FORBIDDEN_ANALYTICS_DOMAINS.join(', ')} appeared.`,
);
