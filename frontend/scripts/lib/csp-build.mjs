import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { buildContentSecurityPolicy } from '../../lib/security/content-security-policy.mjs';

const javascriptTypes = new Set([
  '', 'module', 'text/javascript', 'application/javascript',
  'text/ecmascript', 'application/ecmascript', 'application/x-javascript',
  'text/jscript', 'text/livescript', 'importmap', 'speculationrules',
]);

export function scriptElements(html) {
  return [...html.matchAll(/<script\b((?:"[^"]*"|'[^']*'|[^'">])*)>([\s\S]*?)<\/script\s*>/gi)].map((match) => {
    const attributes = {};
    for (const attr of match[1].matchAll(/([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
      attributes[attr[1].toLowerCase()] = attr[2] ?? attr[3] ?? attr[4] ?? '';
    }
    const type = (attributes.type ?? '').trim().toLowerCase();
    return {
      attributes,
      body: match[2],
      executable: javascriptTypes.has(type) || /^text\/javascript1\.[0-5]$/.test(type),
    };
  });
}

export function inlineScriptHashes(html) {
  return scriptElements(html)
    .filter((script) => script.executable && !Object.hasOwn(script.attributes, 'src'))
    .map((script) => `sha256-${createHash('sha256').update(script.body.replace(/\r\n?/g, '\n'), 'utf8').digest('base64')}`);
}

export function collectHtmlFiles(root) {
  const files = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...collectHtmlFiles(file));
    else if (entry.name.endsWith('.html')) files.push(file);
  }
  return files.sort();
}

export function enforceHeaders(template, policy) {
  if (/^\s*Content-Security-Policy(?:-Report-Only)?:/im.test(template)) {
    throw new Error('public/_headers is a template: generate CSP from the built scripts rather than maintaining hashes by hand.');
  }
  const header = `  Content-Security-Policy: ${policy}`;
  if (header.length > 2000) {
    throw new Error(`Generated CSP is ${header.length} characters; Cloudflare Pages permits 2,000 per _headers line. Move new inline code to a self-hosted script.`);
  }
  if (!/^\/\*\r?\n/m.test(template)) throw new Error('public/_headers must include the global /* rule.');
  return template.replace(/^(\/\*\r?\n)/m, `$1${header}\n`);
}

export function generatedCspModule(hashes) {
  const sorted = [...new Set(hashes)].sort();
  const policy = buildContentSecurityPolicy(sorted);
  return '// Generated from executable scripts in the Astro build. Do not edit hashes manually.\n'
    + `export const INLINE_SCRIPT_HASHES = ${JSON.stringify(sorted, null, 2)};\n`
    + `export const CONTENT_SECURITY_POLICY = ${JSON.stringify(policy)};\n`;
}

export function emitContentSecurityPolicy({ dist, projectRoot }) {
  const files = collectHtmlFiles(dist);
  if (!files.length) throw new Error('Cannot generate CSP without built HTML.');
  const hashes = [...new Set(files.flatMap((file) => inlineScriptHashes(fs.readFileSync(file, 'utf8'))))].sort();
  const policy = buildContentSecurityPolicy(hashes);
  const template = fs.readFileSync(path.join(projectRoot, 'public/_headers'), 'utf8');
  fs.writeFileSync(path.join(dist, '_headers'), enforceHeaders(template, policy));
  const modulePath = path.join(projectRoot, 'lib/security/csp.generated.mjs');
  fs.mkdirSync(path.dirname(modulePath), { recursive: true });
  fs.writeFileSync(modulePath, generatedCspModule(hashes));
  return { pages: files.length, hashes: hashes.length, headerLength: `  Content-Security-Policy: ${policy}`.length };
}
