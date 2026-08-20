import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Будущая и текущая стоимость денег — две стороны одного множителя (1+i)ⁿ:
// будущая умножает на него, текущая делит. Дисконтирование отвечает на вопрос
// «сколько сегодня стоит обещанная через N лет сумма», и на сайте его не было.
//
// Эффективная годовая ставка показана отдельно, потому что номинальные 12 %
// с ежемесячным начислением — это на самом деле 12,68 % годовых. Сравнивать
// предложения с разной частотой начисления по номинальной ставке нельзя.

const PERIODS: Record<string, number> = { month: 12, quarter: 4, year: 1 };

export const compute: CalcFunction = (inputs) => {
  const discount = toStr(inputs.mode, 'fv') === 'pv';
  const amount = toNumber(inputs.amount);
  const rate = toNumber(inputs.rate);
  const years = toNumber(inputs.years);
  const m = PERIODS[toStr(inputs.compounding, 'year')] ?? 1;
  const fail = (message: string) => ({
    primary: { label: discount ? 'Текущая стоимость' : 'Будущая стоимость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(amount > 0)) return fail('Сумма должна быть больше нуля');
  if (rate < 0) return fail('Ставка не может быть отрицательной');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');

  const i = rate / (100 * m);
  const n = years * m;
  const factor = Math.pow(1 + i, n);
  if (!Number.isFinite(factor) || factor <= 0) return fail('Значение слишком велико для расчёта');

  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: {
      label: discount ? 'Текущая стоимость' : 'Будущая стоимость',
      value: money(discount ? amount / factor : amount * factor),
    },
    secondary: [
      { label: 'Множитель роста', value: formatStatistic(factor, fmtNumber) },
      { label: 'Эффективная годовая ставка', value: `${fmtNumber((Math.pow(1 + i, m) - 1) * 100, 2)}%` },
      { label: 'Периодов начисления', value: fmtNumber(n, 0) },
      { label: 'Исходная сумма', value: money(amount) },
    ],
  };
};
