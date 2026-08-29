import { getCalculators, getCalculatorById, locales } from './src/lib/i18n';
import { localizeResult } from './src/components/islands/calculator/resultLocalization';
import { v2Runners } from './src/calculators/runtime.generated';
import { runners } from './src/lib/runners';
import { v2Localization } from './src/calculators/localization.generated';

const CYR = /[А-Яа-яЁё]/;
// Сценарии: значения по умолчанию, каждый вариант каждого списка, каждое
// числовое поле в нуле и в положительном значении, даты — настоящей датой.
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
function labelsFor(id: string, locale: string, inputs: any): string[] {
  const runner = (v2Runners as any)[id] ?? (runners as any)[id];
  if (!runner) return [];
  let raw: any; try { raw = runner(inputs); } catch { return []; }
  const bundle = (v2Localization as any)[locale]?.[id];
  const rt = bundle ? { compute: runner, localization: { [locale]: bundle } } : undefined;
  const r: any = localizeResult(raw, locale as any, id, rt);
  return [r.primary.label, ...r.secondary.map((x: any) => x.label),
    ...(r.table ? [r.table.title ?? '', ...r.table.columns] : [])].filter(Boolean);
}
const leaks = new Map<string, Set<string>>();
for (const locale of ['en', 'uk', 'de'] as const) {
  for (const c of getCalculators(locale)) {
    const base = getCalculatorById(c.id, 'ru');
    if (!base) continue;
    for (const inputs of scenarios(c)) {
      const loc = labelsFor(c.id, locale, inputs);
      const ru = labelsFor(c.id, 'ru', inputs);
      for (let i = 0; i < loc.length; i += 1) {
        // Утечка: переведённая локаль отдаёт ровно ту же строку, что и русская,
        // и в ней есть кириллица. Названия источников, единицы и ввод сюда не
        // попадают — это подписи строк результата.
        if (CYR.test(loc[i]) && loc[i] === ru[i]) {
          const k = `${locale} :: ${c.id} :: ${loc[i]}`;
          if (!leaks.has(k)) leaks.set(k, new Set());
          leaks.get(k)!.add(JSON.stringify(inputs).slice(0, 60));
        }
      }
    }
  }
}
console.log(`утечек русских подписей в EN/UK/DE: ${leaks.size}`);
for (const [k] of [...leaks].sort()) console.log('  ' + k);
