#!/usr/bin/env node
// Compare the actual built DOM with fixed authored content. No word-count quota.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { parse } from 'parse5';

const args = process.argv.slice(2);
const reportArg = args.indexOf('--report');
const reportPath = reportArg >= 0 ? resolve(args[reportArg + 1]) : null;
const observationOnly = args.includes('--allow-duplicates');
const fixturePath = resolve('e2e/fixtures/originality-final-calculator-route-smoke.json');
const fixtureBytes = readFileSync(fixturePath);
const fixture = JSON.parse(fixtureBytes);
const normalize = s => s.replace(/[\s\u00a0\u202f]+/g, ' ').trim();
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
function nodes(root, predicate) {
  const result = [];
  function visit(node) {
    if (predicate(node)) result.push(node);
    for (const child of node.childNodes ?? []) visit(child);
    if (node.content) visit(node.content);
  }
  visit(root); return result;
}
function text(node) {
  if (['script', 'style', 'noscript'].includes(node?.tagName)) return '';
  if (node?.nodeName === '#text') return node.value;
  return (node?.childNodes ?? []).map(text).join('');
}
const find = (root, id) => nodes(root, n => attr(n, 'data-testid') === id)[0];
const rows = [], errors = [];
for (const row of fixture.rows) {
  const path = resolve('dist', '.' + row.route, 'index.html');
  const bytes = readFileSync(path), doc = parse(bytes.toString());
  const usage = find(doc, 'calculator-how-to-use');
  const details = find(doc, 'calculator-details');
  const sources = find(doc, 'calculator-source-review');
  const fail = message => errors.push({ route: row.route, message });
  if (!usage || !details || !sources) { fail('Required usage/details/sources block missing'); continue; }
  const steps = row.howToUse.filter(s => s.trim());
  const stepNodes = nodes(usage, n => n.tagName === 'li');
  const actualSteps = stepNodes.map(n => normalize(text(n)));
  if (JSON.stringify(actualSteps) !== JSON.stringify(steps.map(s => normalize('— ' + s)))) fail('Visible steps changed or duplicated');
  const tips = (usage.childNodes ?? []).filter(n => n.tagName === 'p');
  const joinedSteps = normalize(steps.join(' '));
  const duplicateTips = tips.filter(n => normalize(text(n)) === joinedSteps);
  const expectedTip = normalize(row.body.tips) === joinedSteps ? '' : normalize(row.body.tips);
  if (expectedTip && (tips.length !== 1 || normalize(text(tips[0])) !== expectedTip)) fail('Independent authored advice was lost/changed');
  if (!observationOnly && duplicateTips.length) fail('The visible step list is repeated as a paragraph');
  if (!observationOnly && !expectedTip && tips.length) fail('Unexpected usage paragraph');
  const method = normalize(row.body.howItWorks);
  const methodParagraphs = nodes(details, n => n.tagName === 'p').filter(n => normalize(text(n)) === method);
  if (methodParagraphs.length !== 1) fail('The original method must occur once in its main section');
  const sourceDefinitions = nodes(sources, n => n.tagName === 'dd');
  const duplicateMethods = sourceDefinitions.filter(n => normalize(text(n)) === method);
  const sourceMethod = normalize(row.editorial.method);
  if (!observationOnly && duplicateMethods.length) fail('The complete main method is repeated in sources');
  if (sourceMethod !== method && !sourceDefinitions.some(n => normalize(text(n)) === sourceMethod)) fail('Distinct source-specific method was removed');
  if (!sourceDefinitions.some(n => normalize(text(n)) === normalize(row.editorial.limitation))) fail('Independent limitation changed or missing');
  const referenceLinks = nodes(sources, n => n.tagName === 'a' && attr(n, 'data-testid') === 'method-section-link');
  if (!observationOnly && sourceMethod === method) {
    if (referenceLinks.length !== 1 || attr(referenceLinks[0], 'href') !== '#details' || !normalize(text(referenceLinks[0]))) fail('Accessible method reference missing');
    if (nodes(doc, n => attr(n, 'id') === 'details').length !== 1) fail('Method reference target missing/duplicated');
  }
  const links = nodes(sources, n => n.tagName === 'a' && attr(n, 'data-testid') !== 'method-section-link')
    .map(n => ({ label: normalize(text(n)), href: attr(n, 'href') }));
  if (JSON.stringify(links) !== JSON.stringify(row.editorial.sources.filter(s => s.href).map(s => ({ label: normalize(s.label), href: s.href })))) fail('Source labels/URLs changed or removed');
  const schemas = nodes(doc, n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json')
    .flatMap(n => JSON.parse((n.childNodes ?? []).map(c => c.value ?? '').join('')));
  const howTo = schemas.find(s => s['@type'] === 'HowTo');
  if (JSON.stringify(howTo?.step?.map(s => normalize(s.text))) !== JSON.stringify(steps.map(normalize))) fail('HowTo schema differs from the single visible step list');
  for (let i = 0; i < steps.length; i++) {
    const id = 'step-' + (i + 1);
    if (attr(stepNodes[i], 'id') !== id || nodes(doc, n => attr(n, 'id') === id).length !== 1) fail('HowTo visible anchor missing/duplicated');
    if (new URL(howTo.step[i].url).hash !== '#' + id) fail('HowTo schema anchor changed');
  }
  rows.push({ route: row.route, id: row.id, locale: row.locale, htmlSHA256: createHash('sha256').update(bytes).digest('hex'),
    stepCount: steps.length, duplicatedStepParagraphs: duplicateTips.length, duplicatedSourceMethods: duplicateMethods.length,
    independentAdvicePreserved: !expectedTip || tips.some(n => normalize(text(n)) === expectedTip),
    methodPreserved: methodParagraphs.length === 1, limitationPreserved: sourceDefinitions.some(n => normalize(text(n)) === normalize(row.editorial.limitation)),
    sourceLinks: links.length, methodReference: referenceLinks.length });
}
if (rows.length !== fixture.expectedRouteCount || new Set(rows.map(r => r.route)).size !== fixture.expectedRouteCount) errors.push({ message: 'Not exact published fixture coverage' });
const result = { checkedAtUTC: new Date().toISOString(), reviewKind: 'AGENT_COMPLETE_BUILT_HTML_INTRAPAGE_GATE',
  mode: observationOnly ? 'BASELINE_OBSERVATION' : 'GATE', fixtureSHA256: createHash('sha256').update(fixtureBytes).digest('hex'),
  routes: rows.length, duplicatedInstructionRoutes: rows.filter(r => r.duplicatedStepParagraphs).length,
  duplicatedMethodRoutes: rows.filter(r => r.duplicatedSourceMethods).length, errors, rows,
  boundary: 'Actual built HTML, authored method/advice/source/limitation and single visible HowTo list. Normal repeated units/examples/result warnings are not removed. Not internet plagiarism or human review.' };
if (reportPath) writeFileSync(reportPath, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ mode: result.mode, routes: rows.length, duplicatedInstructions: result.duplicatedInstructionRoutes, duplicatedMethods: result.duplicatedMethodRoutes, errors: errors.length, report: reportPath }));
if (errors.length) { console.error(JSON.stringify(errors.slice(0, 10))); process.exitCode = 1; }
