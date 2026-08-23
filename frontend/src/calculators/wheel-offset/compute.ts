import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Вылет диска ET и вылет назад (backspacing).
//
// ET — расстояние от привалочной плоскости до середины обода, и он бывает
// отрицательным: у глубоких дисков плоскость смещена внутрь. Именно поэтому оба
// поля вылета знаковые.
//
// Backspacing считается от привалочной плоскости до внутреннего края и связан с
// ET через половину ширины обода плюс половина дюйма на закраины — эти полдюйма
// и есть разница между «шириной диска» в маркировке и полной шириной обода.
//
// Смещение при замене вылета: МЕНЬШИЙ ET выносит колесо наружу. Знак разности
// сохраняется, направление выводится словами.
const INCH = 25.4;
const FLANGE = 12.7;

export const compute: CalcFunction = (inputs) => {
  const width = toNumber(inputs.width);
  const offset = toNumber(inputs.offset);
  const newOffset = toNumber(inputs.newOffset);
  const fail = (message: string) => ({
    primary: { label: 'Вылет назад', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(width > 0)) return fail('Ширина диска должна быть больше нуля');

  const widthMm = width * INCH;
  const backspacing = widthMm / 2 + offset + FLANGE;
  const shift = offset - newOffset;

  return {
    primary: { label: 'Вылет назад', value: `${formatMeasure(backspacing, fmtNumber)} мм` },
    secondary: [
      { label: 'Ширина диска', value: `${formatMeasure(widthMm, fmtNumber)} мм` },
      { label: 'Смещение колеса', value: `${formatMeasure(Math.abs(shift), fmtNumber)} мм` },
      { label: 'Куда сместится', value: shift > 0 ? 'наружу' : shift < 0 ? 'внутрь' : 'без смещения' },
      { label: 'Вылет назад после замены', value: `${formatMeasure(widthMm / 2 + newOffset + FLANGE, fmtNumber)} мм` },
    ],
  };
};
