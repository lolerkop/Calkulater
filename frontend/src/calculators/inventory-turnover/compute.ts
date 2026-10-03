import type { CalcFunction } from '../../lib/types';
import { number as readNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney, displayNumber } from '../../lib/platform/financeDisplay';

const DAYS_IN_YEAR = 365;
const money = displayMoney;

export const compute: CalcFunction = (inputs) => {
  const cogs = readNumber(inputs.cogs);
  const mode = inputs.mode === undefined ? 'direct' : inputs.mode;
  const fail = (message: string) => ({
    primary: { label: 'Оборачиваемость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (cogs === null) return fail('Введите корректные числовые данные');

  if (!(cogs > 0)) return fail('Себестоимость продаж должна быть больше нуля');

  if (mode !== 'direct' && mode !== 'beginEnd') return fail('Выберите способ расчёта среднего запаса');
  let average: number;
  if (mode === 'direct') {
    const raw = readNumber(inputs.avgInventory);
    if (raw === null) return fail('Введите корректные числовые данные');
    average = raw;
  } else {
    const begin = readNumber(inputs.beginInventory);
    const end = readNumber(inputs.endInventory);
    if (begin === null || end === null) return fail('Введите корректные числовые данные');
    if (begin < 0 || end < 0) return fail('Запасы не могут быть отрицательными');
    average = begin / 2 + end / 2;
  }
  if (!(average > 0)) return fail('Средний запас должен быть больше нуля');

  const turns = cogs / average;
  const days = (average / cogs) * DAYS_IN_YEAR;
  if (!validOutput(turns, true) || !validOutput(days, true)) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Оборачиваемость', value: `${displayNumber(turns, 2)} раз` },
    secondary: [
      { label: 'Срок хранения', value: `${displayNumber(days, 1)} дней` },
      { label: 'Средний запас', value: money(average) },
    ],
  };
};
