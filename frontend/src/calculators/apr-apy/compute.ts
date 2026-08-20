import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
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
  const mode = toStr(inputs.mode, 'toApy');
  const rate = toNumber(inputs.rate);
  const periods = Math.floor(toNumber(inputs.periods));

  const primaryLabel = mode === 'toApr' ? 'Номинальная ставка (APR)' : 'Эффективная ставка (APY)';
  const fail = (message: string) => ({
    primary: { label: primaryLabel, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(rate >= 0)) return fail('Ставка не может быть отрицательной');
  if (!(periods >= 1)) return fail('Периодов начисления должно быть не меньше одного');

  const pct = (value: number) => `${fmtNumber(value, 2)}%`;
  const apr = mode === 'toApr' ? (Math.pow(1 + rate / 100, 1 / periods) - 1) * periods * 100 : rate;
  const apy = mode === 'toApr' ? rate : (Math.pow(1 + rate / 100 / periods, periods) - 1) * 100;

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
