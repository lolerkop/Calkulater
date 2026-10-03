import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// ABV = (OG − FG) × selected factor; attenuation is apparent, not real sugar consumption.
export const compute: CalcFunction = (inputs) => {
  const og = toNumber(inputs.og);
  const fg = toNumber(inputs.fg);
  const factor = toNumber(inputs.factor);
  const fail = (message: string) => ({
    primary: { label: 'Крепость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (og === null || fg === null || factor === null) return fail('Введите корректные числовые данные');
  if (!(factor > 0)) return fail('Коэффициент должен быть больше нуля');
  if (!(og > 1)) return fail('Начальная плотность должна быть больше единицы');
  if (!(fg > 0)) return fail('Конечная плотность должна быть больше нуля');
  if (fg > og) return fail('Конечная плотность не может быть выше начальной');

  const drop = og - fg;
  const abv = drop * factor;
  const attenuation = (drop / (og - 1)) * 100;
  if (!validOutput(abv) || !validOutput(attenuation) || (drop > 0 && abv === 0)) return fail('Результат вне допустимого диапазона');
  if (abv > 100) return fail('Линейная оценка крепости не может превышать 100 %');

  return {
    note: 'Степень сбраживания здесь кажущаяся: это падение SG относительно OG − 1, а не измеренная доля потреблённого сахара. ABV — линейная оценка, не лабораторное измерение.',
    primary: { label: 'Крепость', value: `${formatStatistic(abv, fmtNumber)} %` },
    secondary: [
      { label: 'Степень сбраживания', value: `${formatStatistic(attenuation, fmtNumber)} %` },
      { label: 'Падение плотности', value: formatMeasure(drop, fmtNumber) },
      { label: 'Начальная плотность', value: formatMeasure(og, fmtNumber) },
      { label: 'Конечная плотность', value: formatMeasure(fg, fmtNumber) },
    ],
  };
};
