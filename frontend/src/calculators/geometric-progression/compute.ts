import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Геометрическая прогрессия: n-й член, сумма ряда и таблица членов.
//
// Прямой близнец отгруженной арифметической прогрессии, включая таблицу.
// Отличий два: знаменатель не может быть нулём — ряд с нулевым множителем
// вырождается уже на втором члене, — и при |r| < 1 добавляется сумма
// бесконечного ряда, ради которой геометрическую прогрессию чаще всего и
// открывают.
//
// Граница представимости объявлена явно: при r = 10 и n = 50 член равен 10⁴⁹,
// и хотя double такое ещё держит, показывать это как обычное число нечестно.

const MAX_SAFE = 1e15;
const MAX_TERMS = 20;

export const compute: CalcFunction = (inputs) => {
  const a1 = toNumber(inputs.a1);
  const r = toNumber(inputs.r);
  const n = toNumber(inputs.n);
  const fail = (message: string) => ({
    primary: { label: 'n-й член', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(n) || n < 1 || n > 50) return fail('Число членов должно быть целым от 1 до 50');
  if (r === 0) return fail('Знаменатель не может быть нулём');

  const an = a1 * r ** (n - 1);
  const sum = r === 1 ? a1 * n : (a1 * (1 - r ** n)) / (1 - r);
  if (Math.abs(an) >= MAX_SAFE || Math.abs(sum) >= MAX_SAFE) {
    return fail('Ряд выходит за область представимости: уменьшите знаменатель или число членов');
  }

  const measure = (x: number) => formatMeasure(x, fmtNumber);
  const terms: string[][] = [];
  for (let k = 0; k < Math.min(n, MAX_TERMS); k += 1) {
    terms.push([fmtNumber(k + 1, 0), measure(a1 * r ** k)]);
  }
  const table: CalcResultTable = { title: 'Члены прогрессии', columns: ['№ члена', 'Значение'], rows: terms };

  const secondary = [
    { label: 'Сумма ряда', value: measure(sum) },
    { label: 'Знаменатель', value: measure(r) },
    { label: 'Первый член', value: measure(a1) },
    { label: 'Членов', value: fmtNumber(n, 0) },
  ];
  if (Math.abs(r) < 1) {
    secondary.push({ label: 'Сумма бесконечного ряда', value: measure(a1 / (1 - r)) });
  }

  return { primary: { label: 'n-й член', value: measure(an) }, secondary, table };
};
