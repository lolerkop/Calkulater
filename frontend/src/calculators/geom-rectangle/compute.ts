import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Прямоугольник. Стороны задаются напрямую или одна из них выводится из площади.
//
// Единица длины общая для обеих сторон, поэтому пересчитывать нечего: площадь
// выводится в её квадрате, диагональ остаётся линейной.


const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'sides');
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let a = 0;
  let b = 0;
  if (mode === 'sides') {
    a = toNumber(inputs.a);
    b = toNumber(inputs.b);
    if (!(a > 0) || !(b > 0)) return fail('Обе стороны должны быть больше нуля');
  } else {
    const area = toNumber(inputs.area);
    a = toNumber(inputs.a);
    if (!(area > 0)) return fail('Площадь должна быть больше нуля');
    if (!(a > 0)) return fail('Известная сторона должна быть больше нуля');
    b = area / a;
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) return fail('Значение слишком велико для расчёта');

  const area = a * b;
  return {
    primary: { label: 'Площадь', value: `${dim(area)} ${unit}²` },
    secondary: [
      { label: 'Первая сторона', value: `${dim(a)} ${unit}` },
      { label: 'Вторая сторона', value: `${dim(b)} ${unit}` },
      { label: 'Периметр', value: `${dim(2 * (a + b))} ${unit}` },
      { label: 'Диагональ', value: `${dim(Math.hypot(a, b))} ${unit}` },
    ],
  };
};
