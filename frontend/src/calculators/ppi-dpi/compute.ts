import type { CalcFunction } from '../../lib/types';
import { fmtNumber as ordinaryNumber } from '../../lib/format';

// Плотность пикселей экрана: PPI = диагональ в пикселях ÷ диагональ в дюймах.
//
// Про экраны говорят PPI, про печать — DPI. Арифметика одна, но точка принтера
// и пиксель монитора устроены по-разному, поэтому страница намеренно говорит
// об экранах и не выдаёт себя за калькулятор печати.
const MM_PER_INCH = 25.4;

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';
import { integerInput } from '../../lib/platform/strictNumericInput';
import { exact, times, ratio as divide } from '../../lib/platform/geometryNumericInput';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const w = integerInput(inputs.w) ?? NaN;
  const h = integerInput(inputs.h) ?? NaN;
  const diagonal = read(inputs.diagonal);
  const fail = (message: string) => ({
    primary: { label: 'Плотность пикселей', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (![w, h, diagonal].every(Number.isFinite)) return fail(INPUT);
  if (!Number.isInteger(w) || !Number.isInteger(h)) return fail('Разрешение должно быть целым числом пикселей');
  if (!(w > 0) || !(h > 0)) return fail('Разрешение должно быть больше нуля');
  if (!(diagonal > 0)) return fail('Диагональ должна быть больше нуля');

  const diagonalPx = Math.hypot(w, h);
  const ppi = diagonalPx / diagonal;
  const pitch = divide(times(exact(MM_PER_INCH), exact(diagonal)), exact(diagonalPx));
  if (![ppi, pitch].every(v => Number.isFinite(v) && v > 0)) return fail(RANGE);

  return {
    primary: { label: 'Плотность пикселей', value: `${fmtNumber(ppi, 2)} ppi` },
    secondary: [
      { label: 'Диагональ в пикселях', value: `${fmtNumber(diagonalPx, 0)} пикс` },
      { label: 'Размер пикселя', value: `${fmtNumber(pitch, 3)} мм` },
      { label: 'Всего пикселей', value: `${fmtNumber((w * h) / 1e6, 2)} Мпикс` },
    ],
  };
};
