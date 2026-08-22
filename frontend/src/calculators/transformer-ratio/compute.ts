import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Идеальный трансформатор: витки, напряжения и токи.
//
// Слово «идеальный» здесь не украшение, а условие: мощность считается
// сохранённой полностью, поэтому во сколько раз выросло напряжение, во столько
// же упал ток. Настоящий трансформатор греется, и на нагрузке напряжение
// проседает; расчёт этого не знает и знать не может — потери зависят от
// сердечника, обмоток и режима.
//
// Отличие от однофазной мощности: та связывает напряжение, ток и коэффициент
// мощности одной обмотки. Здесь связаны ДВЕ обмотки через отношение витков.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'secondaryVoltage');
  const n1 = toNumber(inputs.n1);
  const n2 = toNumber(inputs.n2);
  const v1 = toNumber(inputs.v1);
  const v2 = toNumber(inputs.v2);
  const i1 = toNumber(inputs.i1);
  const label = mode === 'turnsRatio' ? 'Отношение витков' : 'Вторичное напряжение';
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  if (!(v1 > 0)) return fail('Первичное напряжение должно быть больше нуля');
  if (!(i1 >= 0)) return fail('Первичный ток не может быть отрицательным');

  let ratio: number;
  let secondary: number;
  if (mode === 'turnsRatio') {
    if (!(v2 > 0)) return fail('Вторичное напряжение должно быть больше нуля');
    ratio = v2 / v1;
    secondary = v2;
  } else {
    if (!(n1 > 0)) return fail('Число витков первичной обмотки должно быть больше нуля');
    if (!(n2 > 0)) return fail('Число витков вторичной обмотки должно быть больше нуля');
    ratio = n2 / n1;
    secondary = v1 * ratio;
  }

  const primaryValue = mode === 'turnsRatio' ? formatMeasure(ratio, fmtNumber) : m(secondary, 'В');
  return {
    primary: { label, value: primaryValue },
    secondary: [
      { label: 'Отношение витков', value: formatMeasure(ratio, fmtNumber) },
      { label: 'Вторичный ток', value: m(ratio > 0 ? i1 / ratio : 0, 'А') },
      { label: 'Мощность', value: m(v1 * i1, 'Вт') },
      { label: 'Тип', value: ratio > 1 ? 'повышающий' : ratio < 1 ? 'понижающий' : 'разделительный' },
    ],
  };
};
