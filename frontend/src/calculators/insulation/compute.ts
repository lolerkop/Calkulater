import { measure as displayMeasure, read, integer, finite, INPUT, RANGE, INTEGER, quotient, decimal, ceilDecimal, scalar } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


const m3 = (value: number): string => `${displayMeasure(value)} м³`;

export const compute: CalcFunction = (inputs) => {
  const area = read(inputs.area);
  const thickness = read(inputs.thickness);
  const slabArea = read(inputs.slabArea);
  const perPack = integer(inputs.perPack);
  const fail = (message: string) => ({
    primary: { label: 'Объём утеплителя', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(area,thickness,slabArea)) return fail(INPUT);
  if (!finite(perPack)) return fail(INTEGER);
  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина должна быть больше нуля');
  if (!(slabArea > 0)) return fail('Площадь плиты должна быть больше нуля');
  if (!(perPack >= 1)) return fail('В упаковке должна быть хотя бы одна плита');

  const slabs = ceilDecimal(decimal(area),decimal(slabArea));
  const packs = Number.isFinite(slabs) ? ceilDecimal(decimal(slabs),decimal(perPack)) : NaN;
  const volume = quotient([area,thickness],[1000]);
  if (!finite(slabs,packs,volume)) return fail(RANGE);
  return {
    primary: { label: 'Объём утеплителя', value: m3(volume) },
    secondary: [
      { label: 'Плит', value: `${fmtNumber(slabs, 0)} шт` },
      { label: 'Упаковок', value: `${fmtNumber(packs, 0)} шт` },
      { label: 'Площадь одной плиты', value: `${scalar(slabArea, 2)} м²` },
    ],
  };
};
