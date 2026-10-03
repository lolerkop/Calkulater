import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

const tokenize = (raw: string): string[] => raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);
const gcd = (a: number, b: number): number => { while (b) [a, b] = [b, a % b]; return a; };
const grams = (kg: number): number | null => {
  const scaled = kg * 1000;
  return Number.isSafeInteger(Math.round(scaled)) && Math.abs(scaled - Math.round(scaled)) < 1e-7 ? Math.round(scaled) : null;
};
// Unlimited symmetric pairs. Integer-gram dynamic programming finds the largest
// reachable load <= target, then the fewest plates for that load. Product caps
// bound work to 500001 states × 32 denominations, not a sporting standard.
export const compute: CalcFunction = (inputs) => {
  const read = (value: unknown) => typeof value === 'number' || typeof value === 'string' && value.trim() !== '' ? toNumber(value, Number.NaN) : Number.NaN;
  const target = read(inputs.target), bar = read(inputs.bar);
  const fail = (message: string) => ({ primary: { label: 'Блины на сторону', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![target, bar].every((x) => Number.isFinite(x) && x >= 0 && x <= 1000 && grams(x) !== null)) return fail('Вес цели и грифа: от 0 до 1000 кг, не более трёх знаков после запятой');
  if (target < bar) return fail('Целевой вес меньше грифа');
  const available: number[] = [];
  if (typeof inputs.plates !== 'string') return fail('Введите доступные блины');
  for (const token of tokenize(inputs.plates)) {
    const value = parseLocalizedNumber(token, 'ru');
    if (value === null || !Number.isFinite(value)) return fail(`Вес блина должен быть числом: ${token}`);
    if (value <= 0) return fail('Вес блина должен быть больше нуля');
    if (value > 1000 || grams(value) === null) return fail('Вес блина: до 1000 кг, не более трёх знаков после запятой');
    if (!available.includes(value)) available.push(value);
    if (available.length > 32) return fail('Введите не более 32 разных весов блинов');
  }
  if (!available.length) return fail('Введите доступные блины');
  available.sort((a, b) => b - a);
  const perSideGrams = (grams(target)! - grams(bar)!) / 2;
  const units = available.map((p) => grams(p)!);
  const quantum = units.reduce(gcd);
  const capacity = Math.floor(perSideGrams / quantum);
  const counts = new Int32Array(capacity + 1).fill(-1);
  const chosen = new Int16Array(capacity + 1).fill(-1);
  counts[0] = 0;
  for (let load = 1; load <= capacity; load++) {
    for (let i = 0; i < units.length; i++) {
      const previous = load - units[i] / quantum;
      if (previous >= 0 && counts[previous] >= 0 && (counts[load] < 0 || counts[previous] + 1 < counts[load])) {
        counts[load] = counts[previous] + 1;
        chosen[load] = i;
      }
    }
  }
  let best = capacity;
  while (counts[best] < 0) best--;
  const quantities = new Array(available.length).fill(0) as number[];
  for (let cursor = best; cursor > 0;) { const index = chosen[cursor]; quantities[index]++; cursor -= units[index] / quantum; }
  const used = available.map((plate, i) => ({ plate, count: quantities[i] })).filter((entry) => entry.count > 0);
  const loadedGrams = grams(bar)! + 2 * best * quantum;
  const measure = (value: number) => formatMeasure(value, fmtNumber);
  const table: CalcResultTable = { title: 'Набор на одну сторону', columns: ['Блин', 'Штук на сторону', 'Всего'], rows: used.map((u) => [measure(u.plate), fmtNumber(u.count, 0), measure(u.plate * u.count)]) };
  return {
    primary: { label: 'Блины на сторону', value: used.length ? used.map((u) => `${measure(u.plate)}×${u.count}`).join(' + ') : 'Без дополнительных блинов' },
    secondary: [
      { label: 'Фактический вес', value: `${measure(loadedGrams / 1000)} кг` },
      { label: 'Недобор', value: `${measure((grams(target)! - loadedGrams) / 1000)} кг` },
      { label: 'На сторону', value: `${measure(perSideGrams / 1000)} кг` },
      { label: 'Блинов на сторону', value: fmtNumber(counts[best], 0) },
    ], table,
    note: 'Количество блинов каждого веса не ограничено. Для показанного набора нужны одинаковые пары; проверьте их наличие и вместимость грифа.',
  };
};
