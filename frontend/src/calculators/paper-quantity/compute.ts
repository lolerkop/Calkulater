import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Масса бумаги: плотность в граммах на квадратный метр умножается на площадь
// листа и на число листов.
//
// Размеры A-серии — определение ISO 216, а не отраслевая таблица: каждый
// следующий формат вдвое меньше предыдущего, A0 имеет площадь ровно квадратный
// метр. Поэтому «плотность 80 г/м²» для A4 означает ровно 80/16 = 5 граммов на
// лист, и пачка в 500 листов весит 2,5 килограмма.
const SHEETS: Record<string, readonly [number, number]> = {
  a0: [841, 1189], a1: [594, 841], a2: [420, 594], a3: [297, 420],
  a4: [210, 297], a5: [148, 210], a6: [105, 148],
};
const MM2_IN_M2 = 1e6;
const G_IN_KG = 1000;

export const compute: CalcFunction = (inputs) => {
  const format = toStr(inputs.format, 'a4');
  const grammage = toNumber(inputs.grammage);
  const sheets = toNumber(inputs.sheets);
  const fail = (message: string) => ({
    primary: { label: 'Масса пачки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const size = SHEETS[format];
  if (!size) return fail('Выберите формат листа из списка');
  if (!(grammage > 0)) return fail('Плотность бумаги должна быть больше нуля');
  if (!(sheets >= 1) || !Number.isInteger(sheets)) return fail('Листов должно быть целое число, не меньше одного');

  const [w, h] = size;
  const area = (w * h) / MM2_IN_M2;
  const sheetMass = area * grammage;

  return {
    primary: { label: 'Масса пачки', value: `${formatMeasure((sheetMass * sheets) / G_IN_KG, fmtNumber)} кг` },
    secondary: [
      { label: 'Масса одного листа', value: `${formatMeasure(sheetMass, fmtNumber)} г` },
      { label: 'Площадь листа', value: `${formatMeasure(area, fmtNumber)} м²` },
      { label: 'Размер листа', value: `${w}×${h} мм` },
      { label: 'Листов в килограмме', value: `${formatMeasure(G_IN_KG / sheetMass, fmtNumber)} шт` },
    ],
  };
};
