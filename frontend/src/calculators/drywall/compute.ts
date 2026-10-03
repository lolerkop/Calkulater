import { measure as displayMeasure, read, integer, finite, INPUT, RANGE, INTEGER, exact, add, times, evaluated, mul, dproduct, ceilDecimal, reserveDecimal, reserve } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const area = read(inputs.area);
  const sheetLength = read(inputs.sheetLength);
  const sheetWidth = read(inputs.sheetWidth);
  const layers = integer(inputs.layers);
  const profileStep = read(inputs.profileStep);
  const waste = read(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Листов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(area,sheetLength,sheetWidth,profileStep,waste)) return fail(INPUT);
  if (!finite(layers)) return fail(INTEGER);
  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(sheetLength > 0) || !(sheetWidth > 0)) return fail('Размеры листа должны быть больше нуля');
  if (!Number.isInteger(layers) || layers < 1 || layers > 3) return fail('Слоёв должно быть от одного до трёх');
  if (!(profileStep > 0)) return fail('Шаг профиля должен быть больше нуля');
  if (waste < 0 || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const sheetArea = mul(sheetLength,sheetWidth);
  const withWaste = reserve(times(exact(area),exact(layers)),waste);
  const sheets = ceilDecimal(reserveDecimal(dproduct(area,layers),waste),dproduct(sheetLength,sheetWidth));
  const profile = evaluated(times(exact(area),add(exact(3),exact(profileStep))),times(exact(3),exact(profileStep)));
  const screws = Number.isFinite(sheets) && sheets <= Number.MAX_SAFE_INTEGER / 60 ? sheets*60 : NaN;
  if (!finite(sheetArea,withWaste,sheets,profile,screws)) return fail(RANGE);
  const measure = (x: number) => displayMeasure(x);

  return {
    primary: { label: 'Листов', value: fmtNumber(sheets, 0) },
    secondary: [
      { label: 'Площадь', value: `${measure(area)} м²` },
      { label: 'С запасом', value: `${measure(withWaste)} м²` },
      { label: 'Площадь листа', value: `${measure(sheetArea)} м²` },
      { label: 'Метров профиля', value: measure(profile) },
      { label: 'Саморезов', value: fmtNumber(screws, 0) },
    ],
  };
};
