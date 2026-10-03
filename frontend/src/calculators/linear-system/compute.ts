import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { finiteInput } from './numeric';
import { asNumber, differenceOfProducts, divideDyadics } from './arithmetic';

export const compute: CalcFunction = (inputs) => {
  const values = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2'].map(key => finiteInput(inputs[key]));
  const fail = (message: string) => ({ primary: { label: 'Решение системы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (values.some(value => value === null)) return fail('Введите конечные числовые коэффициенты');
  const [a1, b1, c1, a2, b2, c2] = values as number[];
  const determinant = differenceOfProducts(a1, b2, a2, b1);
  if (determinant.coefficient === 0n) return fail('Определитель равен нулю: единственной пары решений нет');
  const det = asNumber(determinant);
  const numeratorX = differenceOfProducts(c1, b2, c2, b1);
  const numeratorY = differenceOfProducts(a1, c2, a2, c1);
  const x = divideDyadics(numeratorX, determinant), y = divideDyadics(numeratorY, determinant);
  if (![det, x, y].every(Number.isFinite) || det === 0
    || (x === 0 && numeratorX.coefficient !== 0n) || (y === 0 && numeratorY.coefficient !== 0n))
    return fail('Определитель или решение вне числового диапазона');
  const show = (value: number) => formatQuantity(value === 0 ? 0 : value, fmtNumber);
  return { primary: { label: 'Решение системы', value: `x = ${show(x)}` }, secondary: [
    { label: 'y', value: show(y) }, { label: 'Определитель', value: show(det) },
  ] };
};
