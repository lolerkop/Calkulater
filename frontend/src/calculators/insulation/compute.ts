import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Утеплитель: объём по площади и толщине, плиты и упаковки — вверх.
//
// Размер плиты и число плит в упаковке остаются редактируемыми полями: у разных
// производителей они разные, и зашивать чей-то каталог значило бы выдать один
// частный случай за норму.
//
// Округление вверх защищено от двоичного шума: площадь, укладывающаяся ровно в
// целое число плит, не должна требовать лишнюю.

const m3 = (value: number): string => `${formatMeasure(value, fmtNumber)} м³`;
const ceilExact = (value: number): number => Math.ceil(Number(value.toFixed(6)));

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const thickness = toNumber(inputs.thickness);
  const slabArea = toNumber(inputs.slabArea);
  const perPack = Math.trunc(toNumber(inputs.perPack));
  const fail = (message: string) => ({
    primary: { label: 'Объём утеплителя', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина должна быть больше нуля');
  if (!(slabArea > 0)) return fail('Площадь плиты должна быть больше нуля');
  if (!(perPack >= 1)) return fail('В упаковке должна быть хотя бы одна плита');

  const slabs = ceilExact(area / slabArea);
  return {
    primary: { label: 'Объём утеплителя', value: m3(area * (thickness / 1000)) },
    secondary: [
      { label: 'Плит', value: `${fmtNumber(slabs, 0)} шт` },
      { label: 'Упаковок', value: `${fmtNumber(ceilExact(slabs / perPack), 0)} шт` },
      { label: 'Площадь одной плиты', value: `${fmtNumber(slabArea, 2)} м²` },
    ],
  };
};
