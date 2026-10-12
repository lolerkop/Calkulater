#!/usr/bin/env node
// Local verification of the built artifact, not a Cloudflare emulator or deploy.
// Functions mode calls the real Pages middleware; static mode applies _headers
// directly so the static fallback can be inspected independently.
// Usage: node scripts/preview-security.mjs --mode=functions --port=4333
//        node scripts/preview-security.mjs --mode=static --port=4334
// Optional --probe adds a local-only CSP diagnostic page. No probe is built or
// copied to public/dist, and it never initializes an analytics counter.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { onRequest } from '../functions/_middleware.js';
import { onRequest as catalogFacets } from '../functions/[locale]/calculators.js';
import { CONTENT_SECURITY_POLICY } from '../lib/security/csp.generated.mjs';
import { collectHtmlFiles, scriptElements } from './lib/csp-build.mjs';

const args = Object.fromEntries(process.argv.slice(2).map((arg) => arg.replace(/^--/, '').split('=')));
const mode = args.mode || 'functions';
const port = Number(args.port || 4333);
const root = path.resolve('dist');
const origin = `http://127.0.0.1:${port}`;
if (!['functions', 'static'].includes(mode)) throw new Error('--mode must be functions or static.');
if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('Invalid local preview port.');
if (!fs.existsSync(root)) throw new Error('Run npm run build first.');

const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const headerRules = [];
let current;
for (const line of fs.readFileSync(path.join(root, '_headers'), 'utf8').split(/\r?\n/)) {
  if (!line.trim() || line.startsWith('#')) continue;
  if (!/^\s/.test(line)) {
    current = { path: line.trim(), headers: [] };
    headerRules.push(current);
  } else {
    const colon = line.indexOf(':');
    if (!current || colon < 0) throw new Error(`Unsupported _headers line: ${line}`);
    current.headers.push([line.slice(0, colon).trim(), line.slice(colon + 1).trim()]);
  }
}

function headersFor(pathname) {
  const headers = new Headers();
  for (const rule of headerRules) {
    const matches = rule.path.endsWith('*')
      ? pathname.startsWith(rule.path.slice(0, -1)) : pathname === rule.path;
    // Pages joins values from multiple matching rules with a comma.
    if (matches) for (const [name, value] of rule.headers) headers.append(name, value);
  }
  return headers;
}

const staticPolicy = headersFor('/').get('Content-Security-Policy');
if (staticPolicy !== CONTENT_SECURITY_POLICY) {
  throw new Error('Built static CSP and Functions module differ. Rebuild before security preview.');
}

const probeScript = String.raw`
const violations = [];
document.addEventListener('securitypolicyviolation', (event) => {
  violations.push({ directive: event.effectiveDirective, blockedURI: event.blockedURI, disposition: event.disposition });
});
document.getElementById('run-probe').addEventListener('click', async () => {
  const button = document.getElementById('run-probe'); button.disabled = true;
  const attempts = {};
  const inline = document.createElement('script'); inline.textContent = 'window.__untrustedInlineAllowed = true'; document.body.appendChild(inline);
  try { new Function('window.__evalAllowed = true')(); attempts.evalBlocked = false; } catch { attempts.evalBlocked = true; }
  const attr = document.createElement('button'); attr.setAttribute('onclick', 'window.__attributeAllowed = true'); attr.click();
  const load = (name, src) => new Promise((resolve) => {
    const script = document.createElement('script'); script.src = src;
    script.onload = () => { attempts[name] = 'loaded'; resolve(); };
    script.onerror = () => { attempts[name] = 'error'; resolve(); };
    document.head.appendChild(script);
    setTimeout(() => { if (!attempts[name]) { attempts[name] = 'timeout'; resolve(); } }, 15000);
  });
  // Load public vendor libraries only. No gtag config/page-view/event, ym init,
  // Cloudflare token, or counter identity is supplied; no calculator data exists.
  await Promise.all([
    load('google', 'https://www.googletagmanager.com/gtag/js?id=G-CALCUWAYTEST'),
    load('yandex', 'https://mc.yandex.ru/metrika/tag.js'),
    load('cloudflare', 'https://static.cloudflareinsights.com/beacon.min.js'),
    load('unlisted', 'https://example.invalid/blocked.js'),
  ]);
  setTimeout(() => {
    const report = { mode: document.body.dataset.mode,
      knownBuildHashExecuted: Boolean(window.Astro), inlineBlocked: !window.__untrustedInlineAllowed,
      attributeBlocked: !window.__attributeAllowed, evalBlocked: attempts.evalBlocked,
      scripts: attempts, violations };
    report.protectionPass = report.knownBuildHashExecuted && report.inlineBlocked && report.attributeBlocked && report.evalBlocked
      && violations.some((v) => v.blockedURI === 'https://example.invalid' || v.blockedURI.startsWith('https://example.invalid/'));
    document.getElementById('probe-report').textContent = JSON.stringify(report, null, 2);
    document.getElementById('probe-status').textContent = report.protectionPass ? 'Protection PASS' : 'Protection FAIL';
  }, 300);
});
`;

function probeHtml() {
  const example = collectHtmlFiles(root).flatMap((file) => scriptElements(fs.readFileSync(file, 'utf8')))
    .find((script) => script.executable && !Object.hasOwn(script.attributes, 'src') && script.body.includes('self.Astro'));
  if (!example) throw new Error('No built Astro inline script found for the hash probe.');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Local CSP probe</title></head><body data-mode="${mode}"><h1>Local CSP probe</h1><p>Public vendor libraries are loaded without initializing counters.</p><button id="run-probe" type="button">Run CSP probe</button><h2 id="probe-status">Ready</h2><pre id="probe-report"></pre><script src="/__security-probe__/probe.js"></script><script>${example.body}</script></body></html>`;
}

function assetResponse(url, method) {
  const pathname = decodeURIComponent(url.pathname);
  let body;
  let status = 200;
  let extension;
  if (Object.hasOwn(args, 'probe') && pathname === '/__security-probe__/') {
    body = probeHtml(); extension = '.html';
  } else if (Object.hasOwn(args, 'probe') && pathname === '/__security-probe__/probe.js') {
    body = probeScript; extension = '.js';
  } else {
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + path.sep)) return new Response('Invalid path', { status: 400 });
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
      status = 404;
      const locale = pathname.split('/').filter(Boolean)[0];
      const localized = locale && /^[a-z]{2}$/.test(locale) ? path.join(root, locale, '404.html') : '';
      file = localized && fs.existsSync(localized) ? localized : path.join(root, '404.html');
    }
    body = fs.readFileSync(file); extension = path.extname(file);
  }
  const headers = headersFor(pathname);
  if (!headers.has('Content-Type')) headers.set('Content-Type', mime[extension] || 'application/octet-stream');
  headers.set('X-Calcuway-Preview-Mode', mode);
  if (mode === 'functions') {
    // Do not let the static policy mask a missing Functions header.
    headers.delete('Content-Security-Policy');
    headers.delete('Content-Security-Policy-Report-Only');
  }
  return new Response(method === 'HEAD' ? null : body, { status, headers });
}

http.createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return;
    }
    const url = new URL(request.url, origin);
    const next = async () => {
      if (mode === 'functions' && /^\/[a-z]{2}\/calculators\/?$/.test(url.pathname)) {
        return catalogFacets({ request: new Request(url, { method: request.method }), next: async () => assetResponse(url, request.method) });
      }
      return assetResponse(url, request.method);
    };
    const result = mode === 'functions'
      ? await onRequest({ request: new Request(url, { method: request.method }), next }) : await next();
    response.writeHead(result.status, Object.fromEntries(result.headers));
    response.end(request.method === 'HEAD' ? undefined : Buffer.from(await result.arrayBuffer()));
  } catch (error) {
    console.error(error);
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end('Local preview error');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Security preview: ${origin}; mode=${mode}; exact dist CSP + ${mode === 'functions' ? 'real Pages middleware' : 'static _headers fallback'}.`);
  if (Object.hasOwn(args, 'probe')) console.log(`Local CSP probe: ${origin}/__security-probe__/`);
});
