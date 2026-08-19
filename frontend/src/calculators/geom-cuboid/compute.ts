import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Прямоугольный параллелепипед: объём, поверхность и пространственная диагональ.
//
// Единица длины выбирается один раз и не пересчитывается: объём выводится в её
// кубе, площадь — в квадрате, диагональ остаётся линейной. Куб — не отдельная
// фигура, а частный случай с тремя равными рёбрами, и он считается тем же кодом.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const c = toNumber(inputs.c);
  const fail = (message: string) => ({
    primary: { label: 'Объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(a > 0) || !(b > 0) || !(c > 0)) return fail('Все три ребра должны быть больше нуля');
  if (!Number.isFinite(a * b * c)) return fail('Значение слишком велико для расчёта');

  return {
    primary: { label: 'Объём', value: `${dim(a * b * c)} ${unit}³` },
    secondary: [
      { label: 'Площадь поверхности', value: `${dim(2 * (a * b + b * c + a * c))} ${unit}²` },
      { label: 'Диагональ', value: `${dim(Math.sqrt(a * a + b * b + c * c))} ${unit}` },
      { label: 'Сумма длин рёбер', value: `${dim(4 * (a + b + c))} ${unit}` },
    ],
  };
};
