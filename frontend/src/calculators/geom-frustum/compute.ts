import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Усечённый конус. Объём V = πh(R² + Rr + r²)/3.
//
// Средний член Rr здесь не украшение: без него формула превратилась бы в
// полусумму двух цилиндров и занизила бы объём. При r = 0 выражение сводится к
// конусу πR²h/3, что и служит проверкой.
//
// Образующая считается от РАЗНОСТИ радиусов: l = √(h² + (R − r)²). Высота — это
// не образующая, и подстановка h вместо l завысила бы боковую поверхность.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const R = toNumber(inputs.R);
  const r = toNumber(inputs.r);
  const h = toNumber(inputs.h);
  const fail = (message: string) => ({
    primary: { label: 'Объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(R > 0)) return fail('Нижний радиус должен быть больше нуля');
  if (r < 0) return fail('Верхний радиус не может быть отрицательным');
  if (r >= R) return fail('Верхний радиус должен быть меньше нижнего');
  if (!(h > 0)) return fail('Высота должна быть больше нуля');

  const slant = Math.hypot(h, R - r);
  const lateral = Math.PI * (R + r) * slant;

  return {
    primary: { label: 'Объём', value: `${dim((Math.PI * h * (R * R + R * r + r * r)) / 3)} ${unit}³` },
    secondary: [
      { label: 'Образующая', value: `${dim(slant)} ${unit}` },
      { label: 'Боковая поверхность', value: `${dim(lateral)} ${unit}²` },
      { label: 'Полная поверхность', value: `${dim(lateral + Math.PI * R * R + Math.PI * r * r)} ${unit}²` },
    ],
  };
};
