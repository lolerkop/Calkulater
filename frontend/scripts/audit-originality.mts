import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { getCalculators, locales } from '../src/lib/i18n';
import { urlInventory } from '../src/data/urlInventory';
import { v2Definitions } from '../src/calculators/manifest.generated';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { publishedExamples } from '../src/data/publishedExamples';
import { allRunners } from '../src/lib/runners.all';
import { editorialShingles, editorialSimilarity, isCompactFormula, normalizeEditorialText } from '../src/lib/originalityAudit';

const root = resolve('..');
const reports = resolve('reports');
mkdirSync(reports, { recursive: true });
const checkedAt = new Date().toISOString();
const definitions = new Map(v2Definitions.map((definition) => [definition.id, definition]));
const statePath = resolve(reports, 'originality-review-state.json');
// Only explicit, evidence-bearing reviews change subject status. Inventory alone never verifies a page.
const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : {};
const validStatuses = new Set(['AUDITED', 'IN_PROGRESS', 'IMPLEMENTED', 'VERIFIED', 'NEEDS_HUMAN_REVIEW', 'BLOCKED']);
for (const [url, review] of Object.entries(state) as [string, Record<string, unknown>][]) {
  for (const key of ['status', 'technical_status', 'editorial_status', 'human_review_status']) {
    if (review[key] !== undefined && !validStatuses.has(String(review[key]))) throw new Error(`${url}: invalid ${key}`);
  }
  if (['VERIFIED', 'IMPLEMENTED'].includes(String(review.status)) && !Array.isArray(review.evidence)) {
    throw new Error(`${url}: implementation/review requires explicit evidence`);
  }
}
const findingsPath = resolve(reports, 'originality-repeat-findings.json');
const previousFindings = existsSync(findingsPath) ? JSON.parse(readFileSync(findingsPath, 'utf8')) : {};
const priorDecisions = new Map<string, any>([...(previousFindings.resolved_findings ?? []), ...(previousFindings.repeated_paragraphs ?? []), ...(previousFindings.similar_pages ?? [])]
  .filter((item) => item.id).map((item) => [item.id, item]));
const findingId = (text: string) => createHash('sha256').update(text).digest('hex').slice(0, 20);
const retainDecision = (id: string) => {
  const previous = priorDecisions.get(id);
  return previous ? { decision: previous.decision, reason: previous.reason, review_evidence: previous.review_evidence,
    review_kind: previous.review_kind, human_review_status: previous.human_review_status } : {};
};
const calculators = locales.flatMap((locale) => getCalculators(locale).map((calculator) => ({ locale, calculator })));
const byPath = new Map(calculators.map((entry) => [entry.calculator.fullPath, entry]));
const methods: unknown[] = [];
const paragraphIndex = new Map<string, { text: string; pages: { url: string; section: string }[] }>();
const pageTexts: { locale: string; url: string; shingles: Set<string> }[] = [];
const contracts: unknown[] = [];

for (const { locale, calculator } of calculators) {
  const definition = definitions.get(calculator.id);
  const defaults = Object.fromEntries(calculator.fields.map((field) => [field.name, field.defaultValue ?? (field.type === 'checkbox' ? false : field.options?.[0]?.value ?? '')]));
  let defaultResult: unknown;
  let defaultError = '';
  try { defaultResult = allRunners[calculator.id](defaults); } catch (error) { defaultError = String(error); }
  const editorial = getCalculatorEditorial(calculator, locale);
  const content = calculator.seoContent!;
  contracts.push({
    calculator_id: calculator.id, locale, url: calculator.fullPath, category: calculator.category,
    purpose: calculator.shortDescription,
    source_file: definition ? 'frontend/src/calculators/' + calculator.id + '/definition.ts' : 'frontend/src/data/calculators.ts',
    inputs: calculator.fields, modes: calculator.fields.filter((field) => field.options).map((field) => ({ name: field.name, options: field.options })),
    outputs: calculator.resultLabels, default_inputs: defaults, default_result: defaultResult, default_error: defaultError,
    method_claim: calculator.howItWorks, limitations: editorial.limitation,
    examples: publishedExamples.filter((example) => example.calculatorId === calculator.id && example.locale === locale),
    reference_case_count: definition?.referenceCases?.length ?? null,
    applicability: state[calculator.fullPath]?.applicability ?? null,
    applicability_review: state[calculator.fullPath]?.applicability_review ?? 'Pending subject review; language does not establish country or year.',
    numerical_contract: state[calculator.fullPath]?.numerical_contract ?? null,
    status: state[calculator.fullPath]?.status ?? 'IN_PROGRESS',
    technical_status: state[calculator.fullPath]?.technical_status ?? 'AUDITED',
    technical_scope: state[calculator.fullPath]?.technical_scope ?? 'Source registration and default scenario only; formula and browser verification remain separate.',
    editorial_status: state[calculator.fullPath]?.editorial_status ?? 'IN_PROGRESS',
    human_review_status: state[calculator.fullPath]?.human_review_status ?? 'NEEDS_HUMAN_REVIEW',
    planned_value: state[calculator.fullPath]?.planned_value ?? null,
    evidence: state[calculator.fullPath]?.evidence ?? [],
    remaining_blockers: state[calculator.fullPath]?.remaining_blockers ?? ['Individual subject and locale review pending.'],
  });
  methods.push({ calculator_id: calculator.id, locale, method: editorial.method, sources: editorial.sources,
    source_validation: state[calculator.fullPath]?.method_source_validation ?? 'Existing source claims collected; not independently confirmed by this exporter.',
    external_data_dependency: calculator.category === 'currency' ? 'See per-provider dates/status in currencyRates.generated.ts and currencyRatesStatus.generated.ts.' : null,
  });
  // Examine only authored explanatory blocks, excluding navigation, footer, standard controls and notices.
  const sections = [
    ['intro', content.intro], ['method', content.howItWorks], ['example', content.example], ['tips', content.tips],
    ...content.faq.map((item, index) => ['faq-answer-' + index, item.a]),
  ];
  const paragraphs: string[] = [];
  for (const [section, text] of sections) {
    if (section === 'method' && isCompactFormula(text)) continue;
    const normalized = normalizeEditorialText(text).replaceAll(normalizeEditorialText(calculator.name), 'tool');
    if (normalized.split(/\s+/).length < 8) continue;
    paragraphs.push(normalized);
    const key = locale + ':' + normalized;
    const group = paragraphIndex.get(key) ?? { text, pages: [] };
    group.pages.push({ url: calculator.fullPath, section });
    paragraphIndex.set(key, group);
  }
  pageTexts.push({ locale, url: calculator.fullPath, shingles: editorialShingles(paragraphs.join(' ')) });
}

const repeatedParagraphs = [...paragraphIndex.entries()].filter(([, group]) => new Set(group.pages.map((page) => page.url)).size > 1)
  .map(([key, group]) => ({ id: findingId('paragraph:' + key), locale: key.split(':')[0], ...group,
    decision: 'NEEDS_HUMAN_REVIEW', reason: 'Inspect shared method, sibling tools or avoidable generic prose; no automatic quality verdict.',
    ...retainDecision(findingId('paragraph:' + key)) }));
const similarPages: unknown[] = [];
for (let index = 0; index < pageTexts.length; index++) {
  const a = pageTexts[index];
  for (let other = index + 1; other < pageTexts.length; other++) {
    const b = pageTexts[other];
    if (a.locale !== b.locale) continue;
    const score = editorialSimilarity(a.shingles, b.shingles);
    if (score.intersection >= 12 && (score.jaccard >= 0.35 || score.containment >= 0.7)) {
      const id = findingId('pages:' + a.locale + ':' + [a.url, b.url].sort().join('|'));
      similarPages.push({ id, locale: a.locale, a: a.url, b: b.url, ...score, decision: 'NEEDS_HUMAN_REVIEW', ...retainDecision(id) });
    }
  }
}

const summary = {
  checked_at: checkedAt, engines: new Set(calculators.map((entry) => entry.calculator.id)).size,
  calculator_urls: calculators.length, inventory_entries: urlInventory.length,
  locales: Object.fromEntries(locales.map((locale) => [locale, calculators.filter((entry) => entry.locale === locale).length])),
  page_types: Object.fromEntries([...new Set(urlInventory.map((entry) => entry.pageType))].map((type) => [type, urlInventory.filter((entry) => entry.pageType === type).length])),
  interpretation: 'Structural inventory plus default computations, not a completed subject/editorial audit.',
};
const json = (path: string, value: unknown) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
json(resolve(reports, 'originality-contract-inventory.json'), { summary, contracts });
const activeFindingIds = new Set([...repeatedParagraphs, ...similarPages as any[]].map((item: any) => item.id));
const resolvedFindings = [...priorDecisions.values()].filter((item) => !activeFindingIds.has(item.id)).map((item) => ({
  ...item,
  heuristic_status: 'NO_LONGER_FLAGGED',
  last_seen_at: item.last_seen_at ?? previousFindings.checked_at,
  removed_from_heuristic_at: item.removed_from_heuristic_at ?? checkedAt,
  disappearance_boundary: 'No longer meets this internal heuristic; this alone does not establish editorial quality or external originality.',
}));
json(findingsPath, { checked_at: checkedAt,
  heuristic: { words_per_shingle: 6, minimum_paragraph_words: 8, minimum_shared_shingles: 12, jaccard: 0.35, containment: 0.7,
    exclusions: 'Menu/footer/controls/source notices and compact symbolic methods; no cross-locale comparisons.',
    limits: 'Internal review aid; no internet-wide plagiarism search or proof of quality.' }, repeated_paragraphs: repeatedParagraphs, similar_pages: similarPages,
  resolved_findings: resolvedFindings });
const sourceRegistryPath = resolve(root, 'CALCUWAY_GOOGLE_SOURCES.json');
const waveReports = readdirSync(reports).filter((name) => /^originality-.+-wave-\d+\.json$/.test(name))
  .map((name) => ({ report: 'frontend/reports/' + name, evidence: JSON.parse(readFileSync(resolve(reports, name), 'utf8')) }));
json(resolve(root, 'CALCUWAY_SOURCE_REGISTRY.json'), { checked_at: checkedAt,
  google_requirements: existsSync(sourceRegistryPath) ? JSON.parse(readFileSync(sourceRegistryPath, 'utf8')) : null,
  existing_calculator_methods: methods,
  subject_wave_evidence: waveReports,
  service_evidence: ['originality-service-seo-review.json', 'originality-independent-wave-1-review.json', 'originality-independent-shared-review.json', 'originality-next-finance-audit.json', 'originality-chemistry-special-readonly.json', 'originality-technical-route-review.json', 'originality-shared-faq-review.json', 'originality-ui-refinements-wave-4.json', 'originality-converter-field-units.json'].filter((name) => existsSync(resolve(reports, name)))
    .map((name) => ({ report: 'frontend/reports/' + name, evidence: JSON.parse(readFileSync(resolve(reports, name), 'utf8')) })),
  final_integration_evidence: [
    'originality-final-verification.json', 'originality-final-root-shared-integration.json',
    'originality-final-paint-and-source-fixture-amendment.json', 'originality-final-result-header-layout-amendment.json',
    'originality-result-header-layout-amendment.json', 'originality-final-route-smoke-report.json',
    'originality-source-gap-review.json', 'originality-source-gap-amendment.json', 'originality-source-gap-public-amendment.json',
    'originality-final-finance-source-scope-review.json', 'originality-optional-amounts-final-inventory.json',
    'originality-household-wave-17-publication.json', 'originality-household-wave-17-independent-peer.json',
    'originality-household-wave-16-uk-word-amendment.json', 'originality-final-coverage-evidence-summary.json',
    'originality-final-repeat-editorial-review.json',
    'originality-final-parallelogram-range-amendment.json', 'originality-final-shared-integration-peer-review.json',
    'originality-final-bodyfat-source-amendment.json',
    'originality-final-calculator-smoke-refresh.json',
    'originality-final-currency-faq-amendment.json',
    'originality-final-currency-faq-smoke-refresh.json',
    'originality-final-source-boundary-fixture-amendment/summary.json',
    'originality-physics-wave-16-root-meta-amendment.json', 'originality-physics-wave-16-stress-signed-amendment.json',
    'originality-building-wave-16-disclaimer-amendment.json', 'originality-category-native-followup.json',
    'originality-noncalculator-final-review.json', 'originality-final-repeat-review.json',
    'originality-environment-restoration-20261002.json',
    'originality-final-bounded-amendments.json',
    'originality-final-source-card-limitation-inventory.json',
    'originality-final-source-card-limitations-peer-review.json',
    'originality-final-source-card-limitations-math-independent-peer.json',
    'originality-final-share-blank-preservation-review.json',
    'originality-final-early-edit-preservation-amendment.json',
    'originality-final-early-hydration-review.json',
    'originality-final-early-hydration-independent-peer.json',
    'originality-final-early-hydration-external-journal-proposal.json',
    'originality-final-semantic-integration-smoke-refresh.json',
    'originality-final-journal-external-smoke-refresh.json',
    'originality-final-journal-existing-props-proposal.json',
    'originality-final-journal-descriptor-encoding-review.json',
    'originality-final-journal-props-smoke-refresh.json',
    'originality-final-early-hydration-route-amendment.json',
    'originality-final-share-blank-preservation-application.json',
    'originality-final-physical-approved-amendments.json',
    'originality-final-owned-harness-amendment.json',
    'originality-final-text-semantics-punctuation-amendment.json',
    'originality-final-decibel-native-error-amendment-proposal.json',
    'originality-final-browser-initial/archive-manifest.json',
    'originality-final-browser-composite.json',
    'originality-final-real-return-browser-timeout-review.json',
    'originality-final-de-broglie-browser-triage.json',
    'originality-final-decibel-error-browser-triage.json',
    'originality-final-physics-moment-enum-fixture-proposal.json',
    'originality-final-modern-physics-browser-harness-proposal.json',
    'originality-final-modern-physics-publication-fixture-proposal.json',
    'originality-final-room-ru-disclaimer-fixture-proposal.json',
    'originality-final-household-17-harness-proposal.json',
    'originality-final-browser-building-fixture-proposal.json',
    'originality-final-browser-category-title-proposal.json',
    'originality-final-allroute-harness-proposal.json',
    'originality-final-text-semantics-harness-amendment.json',
  ].filter((name) => existsSync(resolve(reports, name)))
    .map((name) => ({ report: 'frontend/reports/' + name, evidence: JSON.parse(readFileSync(resolve(reports, name), 'utf8')) })),
  limits: 'The exporter records visible methods and explicit subject evidence; it does not read or validate sources itself. Bounded access and applicability are in each linked report. Automated timestamps are not human review dates. Technical, human editorial and publication/account states remain separate.' });

const columns = ['calculator_id', 'locale', 'url', 'page_type', 'category', 'source_file', 'purpose', 'modes', 'inputs_units', 'outputs', 'indexable_expected', 'external_data', 'country_year', 'problems', 'planned_value', 'status', 'technical_status', 'editorial_status', 'human_review_status', 'tests', 'remaining_blockers'];
const rows = urlInventory.map((entry) => {
  const item = byPath.get(entry.url);
  const calculator = item?.calculator;
  const definition = calculator && definitions.get(calculator.id);
  const review = state[entry.url] ?? {};
  return [calculator?.id ?? '', entry.locale, entry.url, entry.pageType, calculator?.category ?? '',
    definition ? 'frontend/src/calculators/' + calculator!.id + '/definition.ts' : calculator ? 'frontend/src/data/calculators.ts' : 'frontend/' + entry.sourceFile,
    calculator?.shortDescription ?? '', JSON.stringify(calculator?.fields.filter((field) => field.options) ?? []),
    JSON.stringify(calculator?.fields ?? []), JSON.stringify(calculator?.resultLabels ?? {}), entry.indexableExpected,
    calculator?.category === 'currency' ? 'provider dates and update status' : '', review.applicability ?? '', review.problems ?? '',
    review.planned_value ?? '', review.status ?? 'IN_PROGRESS', review.technical_status ?? 'AUDITED', review.editorial_status ?? 'IN_PROGRESS',
    review.human_review_status ?? 'NEEDS_HUMAN_REVIEW', review.evidence?.join('; ') ?? '', review.remaining_blockers?.join('; ') ?? 'Subject and rendered-page review pending.'];
});
const csv = (value: unknown) => '"' + (typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value)).replaceAll('"', '""') + '"';
writeFileSync(resolve(root, 'CALCUWAY_PAGE_COVERAGE.csv'), [columns, ...rows].map((row) => row.map(csv).join(',')).join('\n') + '\n');
const qualityLines = [
  '# Локальная проверка повторов Calcuway', '',
  'Проверено исходное поясняющее содержимое ' + summary.calculator_urls + ' языковых URL; это не доказательство уникальности в интернете.', '',
  'Шинглы: 6 слов; флаг: Jaccard ≥ 0,35 или доля общей части ≥ 0,70 при ≥ 12 общих шинглах. Пороги внутренние, не критерии Google.',
  'Меню, подвал, элементы формы, уведомления и короткие символические формулы исключены. Языки сравниваются только внутри своей локали.', '',
  'Групп одинаковых абзацев: ' + repeatedParagraphs.length + '. Пар страниц выше порога: ' + similarPages.length + '.',
  'Ранее отмеченных совпадений, сейчас ниже порога: ' + resolvedFindings.length + '. Их история и границы вывода сохранены.',
  'Все совпадения требуют предметного решения; машинный флаг не означает плагиат. Полный список и статус каждого совпадения: frontend/reports/originality-repeat-findings.json.', '',
  '## Реестр охвата', '',
  'Движков: ' + summary.engines + '. Языковых URL калькуляторов: ' + summary.calculator_urls + '.',
  ...Object.entries(summary.locales).map(([locale, count]) => '- ' + locale + ': ' + count),
  '', '## Решения', '', 'Решения и доказательства сохраняются по стабильным идентификаторам совпадений. Не разобранные случаи остаются NEEDS_HUMAN_REVIEW; их исчезновение из поиска не является автоматической редакционной проверкой.',
  '', ...repeatedParagraphs.flatMap((finding) => [
    '- `' + finding.id + '` (' + finding.locale + ', ' + new Set(finding.pages.map((page) => page.url)).size + ' URL): ' + finding.decision + '.',
    '  ' + finding.reason,
  ]),
  '', 'Эти решения приняты ИИ в пределах локального предметного ревью. Человеческая редакционная проверка остаётся NEEDS_HUMAN_REVIEW. Сохранённые общие инструкции интерфейса и правдивые ограничения источников не перефразируются ради формального снижения совпадений.',
];
writeFileSync(resolve(root, 'CALCUWAY_CONTENT_QUALITY_REPORT.md'), qualityLines.join('\n') + '\n');
console.log(JSON.stringify({ ...summary, repeated_paragraph_groups: repeatedParagraphs.length, similar_page_pairs: similarPages.length }));
