import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Плотность пикселей экрана: PPI = диагональ в пикселях ÷ диагональ в дюймах.
//
// Про экраны говорят PPI, про печать — DPI. Арифметика одна, но точка принтера
// и пиксель монитора устроены по-разному, поэтому страница намеренно говорит
// об экранах и не выдаёт себя за калькулятор печати.
const MM_PER_INCH = 25.4;

export const compute: CalcFunction = (inputs) => {
  const w = toNumber(inputs.w);
  const h = toNumber(inputs.h);
  const diagonal = toNumber(inputs.diagonal);
  const fail = (message: string) => ({
    primary: { label: 'Плотность пикселей', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!Number.isInteger(w) || !Number.isInteger(h)) return fail('Разрешение должно быть целым числом пикселей');
  if (!(w > 0) || !(h > 0)) return fail('Разрешение должно быть больше нуля');
  if (!(diagonal > 0)) return fail('Диагональ должна быть больше нуля');

  const diagonalPx = Math.hypot(w, h);
  const ppi = diagonalPx / diagonal;

  return {
    primary: { label: 'Плотность пикселей', value: `${fmtNumber(ppi, 2)} ppi` },
    secondary: [
      { label: 'Диагональ в пикселях', value: `${fmtNumber(diagonalPx, 0)} пикс` },
      { label: 'Размер пикселя', value: `${fmtNumber(MM_PER_INCH / ppi, 3)} мм` },
      { label: 'Всего пикселей', value: `${fmtNumber((w * h) / 1e6, 2)} Мпикс` },
    ],
  };
};
