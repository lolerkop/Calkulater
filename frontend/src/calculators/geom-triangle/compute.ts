import type { CalcFunction } from '../../lib/types';
import { read, unit, valid, dim, product, exact, add, negative, times, scale, number, sqrt, INPUT, MODE, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Площадь', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const mode = inputs.mode, u = unit(inputs.unit);
  if (mode !== 'sss' && mode !== 'baseHeight') return fail(MODE);
  if (!u) return fail(UNIT);
  if (mode === 'baseHeight') {
    const base = read(inputs.base), height = read(inputs.height);
    if (![base, height].every(Number.isFinite)) return fail(INPUT);
    if (!valid(base, height)) return fail('Основание и высота должны быть больше нуля');
    const area = product(base, height, 0.5);
    if (!valid(area)) return fail(RANGE);
    return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary: [{ label: 'Основание', value: `${dim(base)} ${u}` }, { label: 'Высота', value: `${dim(height)} ${u}` }] };
  }
  const sides = [read(inputs.a), read(inputs.b), read(inputs.c)];
  if (!sides.every(Number.isFinite)) return fail(INPUT);
  if (!valid(...sides)) return fail('Все стороны должны быть больше нуля');
  const [a, b, c] = sides.sort((x, y) => y - x).map(exact);
  // Exact bounded binary sums avoid losing a short side when the other two are equal and huge.
  const f1 = add(a, b, c), f2 = add(negative(a), b, c), f3 = add(a, negative(b), c), f4 = add(a, b, negative(c));
  if (f2.coefficient <= 0n) return fail('Такого треугольника не существует: сумма двух сторон не превышает третью');
  // 16S² is the product of these four factors. Round only the final square root.
  const area = sqrt(scale(times(f1, f2, f3, f4), -4)), perimeter = number(f1);
  if (!valid(area, perimeter)) return fail(RANGE);
  const comparison = add(times(b, b), times(c, c), negative(times(a, a))).coefficient;
  const kind = comparison === 0n ? 'прямоугольный' : comparison > 0n ? 'остроугольный' : 'тупоугольный';
  return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary: [{ label: 'Периметр', value: `${dim(perimeter)} ${u}` }, { label: 'Вид треугольника', value: kind }] };
};
