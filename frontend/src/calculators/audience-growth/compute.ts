import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Рост аудитории между двумя замерами.
//
//   общий рост      = (конец / начало − 1) × 100
//   рост за период  = ((конец / начало)^(1/периодов) − 1) × 100
//
// Две величины отвечают на разные вопросы, и путать их дорого. Общий рост
// говорит, во сколько раз аудитория стала больше; рост за период — какой темп
// нужно удерживать, чтобы прийти к этому же результату равномерно. Удвоение
// за год и удвоение за месяц дают одинаковый общий рост и совершенно разный темп.
export const compute: CalcFunction = (inputs) => {
  const start = toNumber(inputs.start);
  const end = toNumber(inputs.end);
  const periods = toNumber(inputs.periods);

  const fail = (message: string) => ({
    primary: { label: 'Общий рост', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(start > 0)) return fail('Начальная аудитория должна быть больше нуля');
  if (!(end > 0)) return fail('Конечная аудитория должна быть больше нуля');
  if (!(periods >= 1)) return fail('Число периодов должно быть не меньше одного');

  const multiple = end / start;
  const total = (multiple - 1) * 100;
  const perPeriod = (Math.pow(multiple, 1 / periods) - 1) * 100;
  const pct = (value: number) => `${fmtNumber(value, 2)}%`;

  return {
    primary: { label: 'Общий рост', value: pct(total) },
    secondary: [
      { label: 'Рост за период', value: pct(perPeriod), accent: perPeriod >= 0 ? 'green' : 'red' },
      { label: 'Прирост', value: fmtNumber(end - start, 0) },
      { label: 'Множитель', value: formatStatistic(multiple, fmtNumber) },
    ],
  };
};
