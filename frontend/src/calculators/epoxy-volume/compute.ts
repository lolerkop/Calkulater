import { measure as displayMeasure, read, finite, INPUT, RANGE, exact, add, times, evaluated, quotient } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const length = read(inputs.length);
  const width = read(inputs.width);
  const thickness = read(inputs.thickness);
  const density = read(inputs.density);
  const ratio = read(inputs.ratio);
  const fail = (message: string) => ({
    primary: { label: 'Всего смеси', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(length,width,thickness,density,ratio)) return fail(INPUT);
  if (!(length > 0)) return fail('Длина заливки должна быть больше нуля');
  if (!(width > 0)) return fail('Ширина заливки должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина слоя должна быть больше нуля');
  if (!(density > 0)) return fail('Плотность смеси должна быть больше нуля');
  if (!(ratio > 0)) return fail('Пропорция набора должна быть больше нуля');

  const volD = times(exact(length),exact(width),exact(thickness));
  const massD = times(volD,exact(density));
  const partsD = add(exact(ratio),exact(1));
  const mass = evaluated(massD,exact(10000));
  const resin = evaluated(times(massD,exact(ratio)),times(exact(10000),partsD));
  const hardener = evaluated(massD,times(exact(10000),partsD));
  const litres = evaluated(volD,exact(10000));
  const area = quotient([length,width],[10000]);
  if (!finite(mass,resin,hardener,litres,area)) return fail(RANGE);

  return {
    primary: { label: 'Всего смеси', value: `${displayMeasure(mass)} кг` },
    secondary: [
      { label: 'Смолы', value: `${displayMeasure(resin)} кг` },
      { label: 'Отвердителя', value: `${displayMeasure(hardener)} кг` },
      { label: 'Объём заливки', value: `${displayMeasure(litres)} л` },
      { label: 'Площадь заливки', value: `${displayMeasure(area)} м²` },
    ],
  };
};
