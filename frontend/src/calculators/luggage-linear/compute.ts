import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Линейные габариты багажа: сумма трёх сторон против нормы авиакомпании.
//
// Норма задаётся именно суммой, а не тремя отдельными пределами: чемодан
// 78×50×30 проходит те же 158 сантиметров, что и 55×50×53, хотя выглядят они
// по-разному. Отсюда и практический вывод — уменьшать выгоднее самую большую
// сторону, потому что в сумму все три входят одинаково.
//
// Строка в дюймах нужна потому, что американские перевозчики печатают норму как
// 62 linear inches, и сравнивать приходится в их мере. Объём коробки к норме
// отношения не имеет и дан для сравнения чемоданов между собой.
const CM_IN_INCH = 2.54;
const CM3_IN_LITRE = 1000;

export const compute: CalcFunction = (inputs) => {
  const l = toNumber(inputs.l);
  const w = toNumber(inputs.w);
  const h = toNumber(inputs.h);
  const limit = toNumber(inputs.limit);
  const fail = (message: string) => ({
    primary: { label: 'Линейные габариты', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(l > 0) || !(w > 0) || !(h > 0)) return fail('Все три стороны должны быть больше нуля');
  if (!(limit > 0)) return fail('Норма авиакомпании должна быть больше нуля');

  const sum = l + w + h;
  const left = limit - sum;
  const measure = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Линейные габариты', value: measure(sum, 'см') },
    secondary: [
      { label: 'Запас до предела', value: measure(left, 'см') },
      { label: 'В дюймах', value: measure(sum / CM_IN_INCH, 'дюйма') },
      { label: 'Объём коробки', value: measure((l * w * h) / CM3_IN_LITRE, 'л') },
      { label: 'Норма', value: left >= 0 ? 'проходит' : 'превышена' },
    ],
  };
};
