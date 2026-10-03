import type { CalcFunction } from '../../lib/types';
import { number as readNumber, integer as readInteger, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayNumber } from '../../lib/platform/financeDisplay';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

export const compute: CalcFunction = (inputs) => {
  const start = readInteger(inputs.start);
  const end = readInteger(inputs.end);
  const periods = readNumber(inputs.periods);

  const fail = (message: string) => ({
    primary: { label: 'Общий рост', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (start === null || end === null || periods === null) return fail('Введите корректные числовые данные');

  if (!(start > 0)) return fail('Начальная аудитория должна быть больше нуля');
  if (!(end > 0)) return fail('Конечная аудитория должна быть больше нуля');
  if (!(periods >= 1)) return fail('Число периодов должно быть не меньше одного');

  const multiple = end / start;
  const total = (multiple - 1) * 100;
  const perPeriod = Math.expm1(Math.log(multiple) / periods) * 100;
  if (![multiple, total, perPeriod].every(value => validOutput(value)) || (end !== start && perPeriod === 0)) return fail('Результат вне допустимого диапазона');
  const pct = (value: number) => `${displayNumber(value, 2)}%`;

  return {
    primary: { label: 'Общий рост', value: pct(total) },
    secondary: [
      { label: 'Рост за период', value: pct(perPeriod), accent: perPeriod >= 0 ? 'green' : 'red' },
      { label: 'Прирост', value: fmtNumber(end - start, 0) },
      { label: 'Множитель', value: formatStatistic(multiple, fmtNumber) },
    ],
  };
};
