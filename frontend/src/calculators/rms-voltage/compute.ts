import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Действующее значение переменного напряжения.
//
// Коэффициент амплитуды зависит ТОЛЬКО от формы сигнала и является
// математической константой формы, а не справочными данными: √2 для синуса,
// 1 для меандра, √3 для треугольника. Мультиметр в режиме переменного
// напряжения показывает именно действующее значение, а осциллограф — размах,
// поэтому пересчёт между ними и есть задача.
//
// Среднее по модулю печатается отдельно: дешёвые мультиметры измеряют именно
// его и домножают на форм-фактор синуса, из-за чего врут на несинусоидальном
// сигнале.
const CREST: Record<string, number> = {
  sine: Math.SQRT2,
  square: 1,
  triangle: Math.sqrt(3),
};
const MEAN_OF_PEAK: Record<string, number> = {
  sine: 2 / Math.PI,
  square: 1,
  triangle: 0.5,
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'peak');
  const wave = toStr(inputs.wave, 'sine');
  const value = toNumber(inputs.value);
  const fail = (message: string) => ({
    primary: { label: 'Действующее напряжение', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'peak' && mode !== 'pp' && mode !== 'rms') return fail('Выберите, что задано, из списка');
  const crest = CREST[wave];
  if (crest === undefined) return fail('Выберите форму сигнала из списка');
  if (!(value > 0)) return fail('Значение напряжения должно быть больше нуля');

  const peak = mode === 'peak' ? value : mode === 'pp' ? value / 2 : value * crest;
  const rms = peak / crest;

  return {
    primary: { label: 'Действующее напряжение', value: `${formatMeasure(rms, fmtNumber)} В` },
    secondary: [
      { label: 'Амплитудное значение', value: `${formatMeasure(peak, fmtNumber)} В` },
      { label: 'Размах', value: `${formatMeasure(2 * peak, fmtNumber)} В` },
      { label: 'Коэффициент амплитуды', value: formatMeasure(crest, fmtNumber) },
      { label: 'Среднее по модулю', value: `${formatMeasure(peak * MEAN_OF_PEAK[wave], fmtNumber)} В` },
    ],
  };
};
