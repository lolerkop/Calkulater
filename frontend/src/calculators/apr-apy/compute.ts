import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { integer, number, text } from '../../lib/platform/scalarInputDisplay';
import { divideRate } from '../../lib/platform/financeMath';
import { formatStatistic } from '../../lib/platform/measurement';

// Перевод между номинальной годовой ставкой (APR) и эффективной (APY).
//
//   APY = ((1 + APR/100/m)^m − 1) × 100
//   APR = ((1 + APY/100)^(1/m) − 1) × m × 100
//
// Разница между ними — это сложный процент внутри года. Номинальная ставка
// говорит, сколько начисляют за период, умноженное на число периодов;
// эффективная — сколько на самом деле выходит за год, потому что начисленное
// в первом периоде дальше растёт вместе с телом вклада.
//
// При одном начислении в году обе ставки совпадают — это и есть проверка на
// вырожденный случай: если бы формула их развела, она была бы неверна.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'toApy' : inputs.mode;
  const rate = number(inputs.rate);
  const periods = integer(inputs.periods);

  const primaryLabel = mode === 'toApr' ? 'Номинальная ставка (APR)' : 'Эффективная ставка (APY)';
  const fail = (message: string) => ({
    primary: { label: primaryLabel, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'toApy' && mode !== 'toApr') return fail('Неизвестный режим расчёта');
  if (rate === null) return fail('Введите корректные числовые данные');
  if (periods === null) return fail('Количество должно быть целым в допустимом диапазоне');
  if (!(rate >= 0)) return fail('Ставка не может быть отрицательной');
  if (!(periods >= 1)) return fail('Периодов начисления должно быть не меньше одного');

  const pct = (value: number) => `${text(value)}%`;
  const annualShare = divideRate(rate, 100);
  const periodicInput = mode === 'toApr' ? (annualShare === null ? null : divideRate(Math.log1p(annualShare), periods)) : divideRate(rate, 100 * periods);
  if (annualShare === null || periodicInput === null) return fail('Результат вне допустимого диапазона');
  const apr = mode === 'toApr' ? Math.expm1(periodicInput) * periods * 100 : rate;
  const apy = mode === 'toApr' ? rate : Math.expm1(periods * Math.log1p(periodicInput)) * 100;

  if (![apr, apy, apr / periods, 1 + apy / 100].every(Number.isFinite) || (rate > 0 && (apr === 0 || apy === 0 || apr / periods === 0))) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: primaryLabel, value: pct(mode === 'toApr' ? apr : apy) },
    secondary: [
      { label: mode === 'toApr' ? 'Эффективная ставка (APY)' : 'Номинальная ставка', value: pct(mode === 'toApr' ? apy : apr) },
      { label: 'Ставка за период', value: pct(apr / periods) },
      { label: 'Периодов в году', value: fmtNumber(periods, 0) },
      { label: 'Множитель за год', value: formatStatistic(1 + apy / 100, fmtNumber) },
    ],
  };
};
