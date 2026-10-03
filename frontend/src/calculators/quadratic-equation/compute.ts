import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { finiteInput } from './numeric';
import { asNumber, differenceOfProducts } from './arithmetic';

const show = (value: number) => value !== 0 && (Math.abs(value) < 1e-4 || Math.abs(value) >= 1e12)
  ? value.toExponential(5).replace('.', ',') : Number.isInteger(value) ? String(value === 0 ? 0 : value) : fmtNumber(value, 4);
export const compute: CalcFunction = (inputs) => {
  const a = finiteInput(inputs.a), b = finiteInput(inputs.b), c = finiteInput(inputs.c);
  const fail = (message: string) => ({ primary: { label: 'Корни', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (a === null || b === null || c === null) return fail('Введите конечные числовые коэффициенты');
  if (a === 0) return fail('При a = 0 уравнение не квадратное');
  const precision = 'Промежуточное значение или корень вне числового диапазона';
  const exactD = differenceOfProducts(b, b, a, c, 4);
  const discriminant = asNumber(exactD);
  if (!Number.isFinite(discriminant) || (discriminant === 0 && exactD.coefficient !== 0n)) return fail(precision);
  const candidates = [-b / a / 2, -b / 2 / a, -b / (2 * a)];
  const vertex = b === 0 ? 0 : candidates.find(value => Number.isFinite(value) && value !== 0);
  if (vertex === undefined) return fail(precision);
  let roots: number[] = [];
  if (discriminant > 0) {
    // q avoids cancellation in one root; Vieta gives the other. Preserve +/− order.
    const q = -b / 2 - (b >= 0 ? 1 : -1) * Math.sqrt(discriminant) / 2;
    const large = q / a, small = c === 0 ? 0 : c / q;
    roots = b >= 0 ? [small, large] : [large, small];
    if (!roots.every(Number.isFinite) || (c !== 0 && roots.some(value => value === 0))) return fail(precision);
  } else if (discriminant === 0) roots = [vertex];
  const text = roots.length === 2 ? `x₁ = ${show(roots[0])}, x₂ = ${show(roots[1])}`
    : roots.length === 1 ? `x = ${show(roots[0])}` : 'Действительных корней нет';
  return { primary: { label: 'Корни', value: text }, secondary: [
    { label: 'Дискриминант', value: show(discriminant), accent: discriminant < 0 ? 'red' : 'green' },
    { label: 'Число корней', value: String(roots.length) },
    { label: 'Вершина параболы', value: `x = ${show(vertex)}` },
  ] };
};
