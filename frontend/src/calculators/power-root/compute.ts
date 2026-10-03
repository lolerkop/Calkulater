import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { finiteInput, integerInput } from './numeric';

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'power' : inputs.mode;
  const base = finiteInput(inputs.base), exponent = finiteInput(inputs.exponent);
  const fail = (message: string) => ({ primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'power' && mode !== 'root') return fail('Выберите действие: степень или корень');
  if (base === null || exponent === null) return fail('Введите конечные числа для основания и показателя');
  let value: number;
  if (mode === 'root') {
    if (exponent <= 0) return fail('Степень корня должна быть больше нуля');
    if (base < 0 && (integerInput(inputs.exponent) === null || exponent % 2 === 0))
      return fail('Отрицательное число требует положительной нечётной целой степени корня до 9007199254740991');
    value = base === 0 ? 0 : base === 1 ? 1 : base < 0 ? -Math.pow(-base, 1 / exponent) : Math.pow(base, 1 / exponent);
  } else {
    if (base === 0 && exponent === 0) return fail('Для 0⁰ на этой странице не выбран результат');
    if (base === 0 && exponent < 0) return fail('Нуль нельзя возвести в отрицательную степень');
    if (base < 0 && integerInput(inputs.exponent) === null)
      return fail('Отрицательное основание требует целого показателя по модулю до 9007199254740991');
    value = Math.pow(base, exponent);
  }
  if (!Number.isFinite(value) || (value === 0 && base !== 0))
    return fail('Результат вне числового диапазона: переполнение или потеря ненулевого значения');
  const show = (number: number) => formatQuantity(number === 0 ? 0 : number, fmtNumber);
  return { primary: { label: 'Результат', value: show(value) }, secondary: [
    { label: 'Основание', value: show(base) }, { label: 'Показатель', value: show(exponent) },
    { label: 'Действие', value: mode === 'root' ? 'корень' : 'степень' },
  ] };
};
