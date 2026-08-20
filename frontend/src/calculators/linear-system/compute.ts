import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Система двух линейных уравнений с двумя неизвестными, правило Крамера:
//
//   a₁x + b₁y = c₁
//   a₂x + b₂y = c₂
//
//   Δ = a₁b₂ − a₂b₁      x = (c₁b₂ − c₂b₁) / Δ      y = (a₁c₂ − a₂c₁) / Δ
//
// Нулевой определитель означает, что прямые параллельны или совпадают: решений
// либо нет вовсе, либо бесконечно много. Ни то ни другое нельзя показать одной
// парой чисел, поэтому такой ввод отклоняется, а не превращается в бесконечность.
//
// Общего решателя здесь нет и не нужно: правило Крамера для 2×2 — четыре строки,
// и никакая библиотека не сделает их короче или понятнее.
export const compute: CalcFunction = (inputs) => {
  const a1 = toNumber(inputs.a1);
  const b1 = toNumber(inputs.b1);
  const c1 = toNumber(inputs.c1);
  const a2 = toNumber(inputs.a2);
  const b2 = toNumber(inputs.b2);
  const c2 = toNumber(inputs.c2);

  const fail = (message: string) => ({
    primary: { label: 'Решение системы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const det = a1 * b2 - a2 * b1;
  if (det === 0) return fail('Определитель равен нулю: решение не единственно');

  const num = (value: number) => formatMeasure(value, fmtNumber);

  return {
    primary: { label: 'Решение системы', value: `x = ${num((c1 * b2 - c2 * b1) / det)}` },
    secondary: [
      { label: 'y', value: num((a1 * c2 - a2 * c1) / det) },
      { label: 'Определитель', value: num(det) },
    ],
  };
};
