import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Keep Astro's existing build-time environment interface. This file reproduces
// the public production settings locally; it contains no account credentials.
const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(readFileSync(new URL('../release.public.json', import.meta.url), 'utf8'));
const keys = new Set([
  'PUBLIC_SITE_URL', 'PUBLIC_CONTACT_EMAIL', 'PUBLIC_PRIVACY_EMAIL',
  'PUBLIC_SUPPORT_URL', 'PUBLIC_LEGAL_NAME', 'PUBLIC_JURISDICTION',
  'PUBLIC_GA_ID', 'PUBLIC_YM_ID', 'PUBLIC_SHOW_AD_PLACEHOLDERS',
]);
if (Object.keys(config).length !== keys.size || Object.entries(config).some(([key, value]) => !keys.has(key) || typeof value !== 'string')) {
  throw new Error('Release settings must contain exactly the supported public string values.');
}
if (config.PUBLIC_SITE_URL !== 'https://calcuway.com' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.PUBLIC_CONTACT_EMAIL)) {
  throw new Error('The release needs its production hostname and a configured public contact.');
}
const [command, ...args] = process.argv.slice(2);
if (!command) throw new Error('Usage: node scripts/with-release-config.mjs <command> [arguments]');
const child = spawnSync(command, args, { cwd: root, env: { ...process.env, ...config }, stdio: 'inherit', shell: false });
if (child.error) throw child.error;
process.exit(child.status ?? 1);
