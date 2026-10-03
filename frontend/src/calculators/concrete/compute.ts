import { measure as displayMeasure, read, integer, finite, mode as selectedMode, INPUT, MODE, RANGE, INTEGER, exact, times, evaluated, reserve } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


const m3 = (value: number): string => `${displayMeasure(value)} м³`;

export const compute: CalcFunction = (inputs) => {
  const mode = selectedMode(inputs.mode, 'slab', ['slab','strip','columns']);
  const waste = read(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Объём бетона', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === null) return fail(MODE);
  if (!finite(waste)) return fail(INPUT);
  if (!(waste >= 0)) return fail('Запас не может быть отрицательным');
  if (waste > 50) return fail('Запас больше 50 % не рассчитывается');

  let cleanD;
  if (mode === 'strip') {
    const perimeter = read(inputs.perimeter);
    const stripWidth = read(inputs.stripWidth);
    const depth = read(inputs.depth);
    if (!finite(perimeter,stripWidth,depth)) return fail(INPUT);
    if (!(perimeter > 0) || !(stripWidth > 0) || !(depth > 0)) return fail('Все размеры ленты должны быть больше нуля');
    cleanD = times(exact(perimeter),exact(stripWidth),exact(depth));
  } else if (mode === 'columns') {
    const sectionArea = read(inputs.sectionArea);
    const height = read(inputs.height);
    const count = integer(inputs.count);
    if (!finite(sectionArea,height)) return fail(INPUT);
    if (!finite(count)) return fail(INTEGER);
    if (!(sectionArea > 0) || !(height > 0)) return fail('Сечение и высота должны быть больше нуля');
    if (!(count >= 1)) return fail('Количество столбов должно быть хотя бы одно');
    cleanD = times(exact(sectionArea),exact(height),exact(count));
  } else {
    const length = read(inputs.length);
    const width = read(inputs.width);
    const thickness = read(inputs.thickness);
    if (!finite(length,width,thickness)) return fail(INPUT);
    if (!(length > 0) || !(width > 0) || !(thickness > 0)) return fail('Все размеры плиты должны быть больше нуля');
    cleanD = times(exact(length),exact(width),exact(thickness));
  }

  const clean = evaluated(cleanD);
  const total = reserve(cleanD,waste);
  const allowance = evaluated(times(cleanD,exact(waste)),exact(100));
  if (!finite(clean,total,allowance)) return fail(RANGE);
  const secondary = [{ label: 'Чистый объём', value: m3(clean) }];
  if (waste > 0) secondary.push({ label: 'Запас', value: m3(allowance) });

  return { primary: { label: 'Объём бетона', value: m3(total) }, secondary };
};
