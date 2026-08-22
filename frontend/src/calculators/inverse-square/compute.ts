import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity, formatStatistic } from '../../lib/platform/measurement';

// Закон обратных квадратов: I₂ = I₁ · (d₁/d₂)².
//
// Работает для всего, что расходится от точечного источника во все стороны и
// не поглощается по дороге: света, звука, излучения, силы тяжести. Причина
// геометрическая — одна и та же энергия размазывается по сфере, а её площадь
// растёт как квадрат радиуса. Отсюда и обманчивость: вдвое дальше означает
// вчетверо слабее, а не вдвое.
//
// Единицы интенсивности намеренно не заданы: закон один и тот же для люксов,
// ватт на квадратный метр и децибел мощности, и навязывать одну единицу
// значило бы сужать задачу без нужды.
export const compute: CalcFunction = (inputs) => {
  const i1 = toNumber(inputs.i1);
  const d1 = toNumber(inputs.d1);
  const d2 = toNumber(inputs.d2);
  const fail = (message: string) => ({
    primary: { label: 'Интенсивность на новом расстоянии', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(i1 > 0)) return fail('Исходная интенсивность должна быть больше нуля');
  if (!(d1 > 0)) return fail('Исходное расстояние должно быть больше нуля');
  if (!(d2 > 0)) return fail('Новое расстояние должно быть больше нуля');

  const ratio = d1 / d2;
  const i2 = i1 * ratio * ratio;
  return {
    primary: { label: 'Интенсивность на новом расстоянии', value: formatQuantity(i2, fmtNumber) },
    secondary: [
      { label: 'Во сколько раз изменилась', value: formatMeasure(i2 / i1, fmtNumber) },
      { label: 'Отношение расстояний', value: formatMeasure(d2 / d1, fmtNumber) },
      { label: 'В процентах от исходной', value: `${formatStatistic((i2 / i1) * 100, fmtNumber)} %` },
      { label: 'Исходная интенсивность', value: formatQuantity(i1, fmtNumber) },
    ],
  };
};
