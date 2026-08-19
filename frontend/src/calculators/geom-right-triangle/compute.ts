import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Прямоугольный треугольник: a² + b² = c².
//
// Режим «катет и гипотенуза» строже режима «два катета»: c² − a² обязано быть
// положительным. При c ≤ a под корнем оказывается ноль или отрицательное число,
// и Math.sqrt вернёт 0 или NaN — оба выглядят как ответ, хотя треугольника нет.


const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'legs');
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const a = toNumber(inputs.a);
  const fail = (message: string) => ({
    primary: { label: mode === 'legs' ? 'Гипотенуза' : 'Второй катет', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let b = 0;
  let c = 0;
  let primaryLabel = 'Гипотенуза';
  if (mode === 'legs') {
    b = toNumber(inputs.b);
    if (!(a > 0) || !(b > 0)) return fail('Катеты должны быть больше нуля');
    c = Math.hypot(a, b);
  } else {
    c = toNumber(inputs.c);
    if (!(a > 0) || !(c > 0)) return fail('Катет и гипотенуза должны быть больше нуля');
    if (!(c > a)) return fail('Гипотенуза должна быть длиннее катета');
    b = Math.sqrt(c * c - a * a);
    primaryLabel = 'Второй катет';
  }
  if (!Number.isFinite(b) || !Number.isFinite(c)) return fail('Значение слишком велико для расчёта');

  return {
    primary: { label: primaryLabel, value: `${dim(mode === 'legs' ? c : b)} ${unit}` },
    secondary: [
      { label: 'Площадь', value: `${dim(a * b / 2)} ${unit}²` },
      { label: 'Периметр', value: `${dim(a + b + c)} ${unit}` },
      { label: mode === 'legs' ? 'Второй катет' : 'Гипотенуза', value: `${dim(mode === 'legs' ? b : c)} ${unit}` },
    ],
  };
};
