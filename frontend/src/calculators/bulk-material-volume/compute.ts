import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Сыпучий материал под засыпку площадки.
//
//   объём   = длина × ширина × толщина слоя / 100      (слой в сантиметрах)
//   с запасом = объём × (1 + запас/100)
//   масса   = объём с запасом × насыпная плотность     (т/м³ = г/см³)
//
// Плотность здесь НАСЫПНАЯ, а не плотность самого камня: щебень насыпью весит
// около 1,4–1,6 т/м³, тогда как гранит в куске — 2,7. Подставлять плотность
// породы значило бы завысить массу почти вдвое.
//
// Отличие от расчёта бетона: там считается смесь по составу и марке, здесь —
// объём и масса одного сыпучего материала, и главный ответ — сколько его
// привезти, а не из чего он состоит.
export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const depth = toNumber(inputs.depth);
  const density = toNumber(inputs.density);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Нужно материала', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0) || !(width > 0)) return fail('Длина и ширина должны быть больше нуля');
  if (!(depth > 0)) return fail('Толщина слоя должна быть больше нуля');
  if (!(density > 0)) return fail('Насыпная плотность должна быть больше нуля');
  if (!(waste >= 0) || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const volume = (length * width * depth) / 100;
  const need = volume * (1 + waste / 100);
  const massT = need * density;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Нужно материала', value: q(need, 'м³') },
    secondary: [
      { label: 'Чистый объём', value: q(volume, 'м³') },
      { label: 'Масса', value: q(massT, 'т') },
      { label: 'Мешков по 25 кг', value: `${fmtInt(ceilUnits((massT * 1000) / 25))} шт` },
      { label: 'Площадь основания', value: q(length * width, 'м²') },
    ],
  };
};
