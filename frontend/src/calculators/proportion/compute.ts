import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { finiteInput } from '../../lib/platform/strictNumericInput';
import { formatQuantity } from '../../lib/platform/measurement';
import { exact, times, number, ratio as divide, type Dyadic } from '../../lib/platform/geometryNumericInput';
const show = (value: number) => value === 0 ? '0' : Math.abs(value) < 1e-4 || Math.abs(value) >= 1e12 ? formatQuantity(value, fmtNumber) : Number.isInteger(value) ? String(value) : fmtNumber(value, 4);
export const compute: CalcFunction = (inputs) => {
  const find = inputs.find === undefined ? 'd' : inputs.find;
  const fail = (message: string) => ({ primary: { label: 'Неизвестный член', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const names = ['a', 'b', 'c', 'd'] as const;
  if (!names.includes(find as typeof names[number])) return fail('Выберите искомый член a, b, c или d');
  const target = find as typeof names[number]; const terms: Record<string, number> = {};
  for (const name of names) if (name !== target) { const value = finiteInput(inputs[name]); if (value === null) return fail('Введите конечные числа в три известных поля'); terms[name] = value; }
  if ((target !== 'b' && terms.b === 0) || (target !== 'd' && terms.d === 0)) return fail('Знаменатели b и d должны быть ненулевыми');
  const opposite = target === 'a' ? 'd' : target === 'b' ? 'c' : target === 'c' ? 'b' : 'a';
  if (terms[opposite] === 0) return fail('Член, стоящий по диагонали от искомого, не может быть нулём');
  const pair = target === 'a' || target === 'd' ? ['b', 'c'] : ['a', 'd'];
  const numerator = times(exact(terms[pair[0]]), exact(terms[pair[1]]));
  const solved = divide(numerator, exact(terms[opposite]));
  if (!Number.isFinite(solved) || (solved === 0 && numerator.coefficient !== 0n)) return fail('Результат вне допустимого диапазона');
  terms[target] = solved;
  if (terms.b === 0 || terms.d === 0) return fail('Знаменатели b и d должны быть ненулевыми');
  const quotient = divide(exact(terms.a), exact(terms.b));
  const materialize = (v: Dyadic) => { const n = number(v); return Number.isFinite(n) && (n !== 0 || v.coefficient === 0n) ? n : null; };
  const left = materialize(times(exact(terms.a), exact(terms.d))), right = materialize(times(exact(terms.b), exact(terms.c)));
  if (!Number.isFinite(quotient) || (quotient === 0 && terms.a !== 0) || left === null || right === null) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'Неизвестный член', value: show(solved) }, secondary: [{ label: 'Пропорция', value: `${show(terms.a)} : ${show(terms.b)} = ${show(terms.c)} : ${show(terms.d)}` }, { label: 'Отношение', value: show(quotient) }, { label: 'Проверка произведений', value: `${show(left)} = ${show(right)}` }] };
};
