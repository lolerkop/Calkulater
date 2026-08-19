import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Квадрат. Сторона может быть задана напрямую, через площадь или через периметр.
//
// Единица длины не пересчитывается и не может быть пересчитана неверно: все
// размеры фигуры вводятся в одной единице, поэтому число ответа от неё не
// зависит — меняется только подпись. Площадь получает квадрат единицы, диагональ
// остаётся линейной. Именно здесь чаще всего ошибаются вручную, переводя площадь
// линейным множителем.


const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'side');
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let side = 0;
  if (mode === 'side') {
    side = toNumber(inputs.side);
    if (!(side > 0)) return fail('Сторона должна быть больше нуля');
  } else if (mode === 'area') {
    const area = toNumber(inputs.area);
    if (!(area > 0)) return fail('Площадь должна быть больше нуля');
    side = Math.sqrt(area);
  } else {
    const perimeter = toNumber(inputs.perimeter);
    if (!(perimeter > 0)) return fail('Периметр должен быть больше нуля');
    side = perimeter / 4;
  }
  if (!Number.isFinite(side)) return fail('Значение слишком велико для расчёта');

  const area = side * side;
  return {
    primary: { label: 'Площадь', value: `${dim(area)} ${unit}²` },
    secondary: [
      { label: 'Сторона', value: `${dim(side)} ${unit}` },
      { label: 'Периметр', value: `${dim(side * 4)} ${unit}` },
      { label: 'Диагональ', value: `${dim(side * Math.SQRT2)} ${unit}` },
    ],
  };
};
