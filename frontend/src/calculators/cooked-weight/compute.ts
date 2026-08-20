import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Сухой и готовый вес продукта.
//
// Крупа впитывает воду, мясо её теряет — и в обе стороны пересчёт нужен ровно
// потому, что калорийность на упаковке указана для СУХОГО продукта, а порция
// взвешивается готовой. Отсюда вторая строка результата: калорийность ста
// граммов готового блюда, которая у варёного риса вдвое с лишним ниже, чем на
// пачке, и подстановка табличного значения завышает расчёт вдвое.
//
// Коэффициент — поле ввода. Разварка зависит от крупы, воды и времени варки:
// у риса он около 2,5, у гречки 2,2, у макарон 2,5, а у мяса меньше единицы,
// потому что оно ужаривается. Единого норматива здесь нет.

const grams = (value: number) => `${formatMeasure(value, fmtNumber)} г`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'rawToCooked');
  const factor = toNumber(inputs.factor);
  const kcalPer100Raw = toNumber(inputs.kcalPer100Raw);

  const fail = (message: string) => ({
    primary: { label: mode === 'rawToCooked' ? 'Готовый вес' : 'Сухой вес', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(factor > 0)) return fail('Коэффициент должен быть больше нуля');
  if (kcalPer100Raw < 0) return fail('Калорийность не может быть отрицательной');

  let raw: number;
  let cooked: number;
  if (mode === 'rawToCooked') {
    raw = toNumber(inputs.raw);
    if (!(raw > 0)) return fail('Сухой вес должен быть больше нуля');
    cooked = raw * factor;
  } else {
    cooked = toNumber(inputs.cooked);
    if (!(cooked > 0)) return fail('Готовый вес должен быть больше нуля');
    raw = cooked / factor;
  }

  const totalKcal = (raw / 100) * kcalPer100Raw;

  return {
    primary: {
      label: mode === 'rawToCooked' ? 'Готовый вес' : 'Сухой вес',
      value: mode === 'rawToCooked' ? grams(cooked) : grams(raw),
    },
    secondary: [
      { label: 'Сухой вес', value: grams(raw) },
      { label: 'Готовый вес', value: grams(cooked) },
      { label: 'Коэффициент разварки', value: formatMeasure(factor, fmtNumber) },
      { label: 'Калорий всего', value: `${fmtNumber(totalKcal, 0)} ккал` },
      { label: 'Ккал на 100 г готового', value: formatMeasure((totalKcal / cooked) * 100, fmtNumber) },
    ],
  };
};
