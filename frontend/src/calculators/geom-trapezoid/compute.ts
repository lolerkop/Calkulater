import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Трапеция. Площадь — средняя линия на высоту; боковые стороны необязательны.
//
// Высота — перпендикуляр между основаниями, а не боковая сторона: подставив
// наклонную сторону, получают завышенную площадь. Это отражено в подсказках.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const h = toNumber(inputs.h);
  const c = toNumber(inputs.c);
  const d = toNumber(inputs.d);
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(a > 0) || !(b > 0)) return fail('Основания должны быть больше нуля');
  if (!(h > 0)) return fail('Высота должна быть больше нуля');

  const mid = (a + b) / 2;
  const secondary = [{ label: 'Средняя линия', value: `${dim(mid)} ${unit}` }];
  if (c > 0 && d > 0) {
    secondary.push({ label: 'Периметр', value: `${dim(a + b + c + d)} ${unit}` });
  }
  return { primary: { label: 'Площадь', value: `${dim(mid * h)} ${unit}²` }, secondary };
};
