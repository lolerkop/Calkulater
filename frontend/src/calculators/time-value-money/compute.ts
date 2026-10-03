import type { CalcFunction } from '../../lib/types';
import { displayNumber as text, displayMoney as money } from '../../lib/platform/financeDisplay';
import { number } from '../../lib/platform/scalarInputDisplay';
import { divideRate } from '../../lib/platform/financeMath';
import { formatStatistic } from '../../lib/platform/measurement';

const PERIODS: Record<string, number> = { month: 12, quarter: 4, year: 1 };
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'fv' : inputs.mode;
  const compounding = inputs.compounding === undefined ? 'year' : inputs.compounding;
  const discount = mode === 'pv';
  const fail = (message: string) => ({
    primary: { label: discount ? 'Текущая стоимость' : 'Будущая стоимость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (mode !== 'fv' && mode !== 'pv') return fail('Выберите направление расчёта стоимости');
  if (typeof compounding !== 'string' || !Object.hasOwn(PERIODS, compounding)) return fail('Выберите частоту начисления процентов');
  const amount = number(inputs.amount);
  const rate = number(inputs.rate);
  const years = number(inputs.years);
  if (amount === null || rate === null || years === null) return fail('Введите корректные числовые данные');
  if (!(amount > 0)) return fail('Сумма должна быть больше нуля');
  if (rate < 0) return fail('Ставка не может быть отрицательной');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');
  const m = PERIODS[compounding];
  const i = divideRate(rate, 100 * m);
  if (i === null) return fail('Результат вне допустимого диапазона');
  const n = years * m;
  const logarithm = Math.log1p(i);
  const factor = Math.exp(n * logarithm);
  const result = discount ? amount / factor : amount * factor;
  const effective = Math.expm1(m * logarithm) * 100;
  if (![n, factor, result, effective].every(Number.isFinite) || n <= 0 || factor <= 0 || result <= 0 || (rate > 0 && effective === 0)) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: discount ? 'Текущая стоимость' : 'Будущая стоимость', value: money(result) },
    secondary: [
      { label: 'Множитель роста', value: formatStatistic(factor, text) },
      { label: 'Эффективная годовая ставка', value: `${text(effective)}%` },
      { label: 'Периодов начисления', value: formatStatistic(n, text) },
      { label: 'Исходная сумма', value: money(amount) },
    ],
  };
};
