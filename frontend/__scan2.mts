import { getCalculators } from './src/lib/i18n';
import { localizedResultLabel } from './src/lib/clientI18n';
import { v2Runners } from './src/calculators/runtime.generated';
import { runners } from './src/lib/runners';
import { v2Localization } from './src/calculators/localization.generated';
import { readFileSync } from 'node:fs';

// Общая карта подписей не экспортируется наружу, поэтому её объявления
// читаются из исходника. Это важно именно здесь: перевод, дословно совпадающий
// с русским («Запас» → «Запас»), — решение переводчика, и по выводу функции его
// не отличить от отсутствия перевода. Отличает только факт объявления.
const CENTRAL: Record<string, Record<string, string>> = JSON.parse(
  readFileSync('/tmp/calcuway-v2/central-labels.json', 'utf8'));

// Утечка — это ОТСУТСТВИЕ перевода, а не совпадение слова с русским.
// «Запас» по-украински — «Запас», и объявленный перевод, совпадающий с
// оригиналом, это решение переводчика, а не пропуск. Поэтому критерий один:
// подпись содержит кириллицу И локаль нигде её не объявляет — ни в собственной
// карте калькулятора, ни в общей карте, ни хвостом подстановок.
const CYR = /[А-Яа-яЁё]/;
function scenarios(c: any) {
  const filled: any = Object.fromEntries(c.fields.map((f: any) => {
    const v = f.defaultValue ?? f.options?.[0]?.value;
    if (v !== undefined && v !== null && v !== '') return [f.name, v];
    if (f.type === 'date') return [f.name, '2026-08-29'];
    if (f.type === 'textarea') return [f.name, '2026-09-01'];
    if (f.type === 'number') return [f.name, 1000];
    return [f.name, 0];
  }));
  const cases: any[] = [filled];
  for (const f of c.fields) {
    for (const o of f.options ?? []) cases.push({ ...filled, [f.name]: o.value });
    if (f.type === 'number') cases.push({ ...filled, [f.name]: 0 }, { ...filled, [f.name]: 1000 });
    if (f.type === 'date') cases.push({ ...filled, [f.name]: '' });
  }
  return cases;
}
const leaks = new Map<string, Set<string>>();
for (const locale of ['en', 'uk', 'de'] as const) {
  for (const c of getCalculators(locale)) {
    const runner = (v2Runners as any)[c.id] ?? (runners as any)[c.id];
    if (!runner) continue;
    const declared = (v2Localization as any)[locale]?.[c.id]?.results ?? {};
    for (const inputs of scenarios(c)) {
      let raw: any; try { raw = runner(inputs); } catch { continue; }
      const rawLabels = [raw.primary.label, ...raw.secondary.map((x: any) => x.label),
        ...(raw.table ? [raw.table.title ?? '', ...raw.table.columns] : [])].filter(Boolean);
      for (const label of rawLabels) {
        if (!CYR.test(label)) continue;
        if (declared[label] !== undefined) continue;                      // объявлено калькулятором
        if (CENTRAL[label]?.[locale] !== undefined) continue;             // объявлено общей картой
        if (localizedResultLabel(label, locale) !== label) continue;      // покрыто хвостом подстановок
        const k = `${locale} :: ${c.id} :: ${label}`;
        if (!leaks.has(k)) leaks.set(k, new Set());
        leaks.get(k)!.add(JSON.stringify(inputs).slice(0, 50));
      }
    }
  }
}
console.log(`подписей без перевода в EN/UK/DE: ${leaks.size}`);
for (const [k, v] of [...leaks].sort()) console.log(`  ${k}   (сценариев: ${v.size})`);
