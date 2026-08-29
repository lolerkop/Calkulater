import { localizeResult } from './src/components/islands/calculator/resultLocalization';
import { v2Runners } from './src/calculators/runtime.generated';
import { runners } from './src/lib/runners';
import { v2Localization } from './src/calculators/localization.generated';

const CASES: Array<[string, string, Record<string, unknown>, string]> = [
  ['A', 'ohms-law', { mode: 'vi', voltage: 0.001, current: 1, resistance: 6 }, 'ожидание 0,001 Ω'],
  ['B', 'cac', { spend: 1, customers: 100, ltv: 0 }, 'ожидание 0,01'],
  ['C', 'aov', { revenue: 1, orders: 2 }, 'ожидание 0,50'],
  ['D', 'room-volume', { mode: 'dimensions', length: 0.1, width: 0.1, area: 20, height: 0.1 }, 'ожидание 0,001 м³'],
];
for (const [tag, id, inputs, expect] of CASES) {
  const runner = (v2Runners as any)[id] ?? (runners as any)[id];
  const raw: any = runner(inputs);
  console.log(`\n### ${tag}. ${id} :: ${JSON.stringify(inputs)}  (${expect})`);
  console.log(`  СЫРОЙ результат раннера:`);
  console.log(`    primary: ${raw.primary.label} = «${raw.primary.value}»`);
  for (const r of raw.secondary) console.log(`    · ${r.label} = «${r.value}»`);
  for (const locale of ['ru', 'en', 'uk', 'de'] as const) {
    const bundle = (v2Localization as any)[locale]?.[id];
    const rt = bundle ? { compute: runner, localization: { [locale]: bundle } } : undefined;
    const r: any = localizeResult(raw, locale, id, rt);
    console.log(`  ${locale}: «${r.primary.label}» = «${r.primary.value}»`);
  }
}
