import { readFileSync } from 'node:fs';
import { parse } from 'parse5';

const email = process.env.PUBLIC_CONTACT_EMAIL || '';
const privacyEmail = process.env.PUBLIC_PRIVACY_EMAIL || email;
const issues = [];
function elements(node) {
  return [node, ...(node.childNodes || []).flatMap(elements)];
}
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
for (const locale of ['ru', 'en', 'uk', 'de', 'es']) {
  for (const page of ['contacts', 'privacy']) {
    const nodes = elements(parse(readFileSync(`dist/${locale}/${page}/index.html`, 'utf8')));
    const byId = id => nodes.find(n => attr(n, 'data-testid') === id);
    const checks = page === 'contacts'
      ? [['contact-channel', email], ['privacy-contact-channel', privacyEmail]]
      : [['privacy-contact', privacyEmail]];
    for (const [id, expected] of checks) {
      const node = byId(id);
      if (expected) {
        if (!node || attr(node, 'href') !== `mailto:${expected}`) issues.push(`${locale}/${page}: ${id} has no configured mailto`);
        if (id !== 'privacy-contact-channel' && text(node || {}).trim() !== expected) issues.push(`${locale}/${page}: ${id} displays a different address`);
      } else if (id !== 'contact-channel' && node) issues.push(`${locale}/${page}: ${id} invents an unconfigured email`);
    }
    if (privacyEmail && byId('privacy-contact-unavailable')) issues.push(`${locale}/${page}: configured email has an unavailable warning`);
  }
}
if (issues.length) throw new Error(issues.join('\n'));
console.log(`Verified configured contact/Privacy mailto and display on all five locales (${email ? 'configured' : 'fallback'} build).`);
