import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toStr } from '../../lib/format';
import { formatMeasure, formatQuantity, formatStatistic } from '../../lib/platform/measurement';
import { exact, add, times, ratio, number, read, type Dyadic } from '../../lib/platform/geometryNumericInput';

const statistic = (n: number) => n !== 0 && (Math.abs(n) < 1e-4 || Math.abs(n) >= 1e12) ? formatQuantity(n, fmtNumber) : formatStatistic(n, fmtNumber);
const auxiliary = (n: Dyadic) => {
  const value = number(n);
  return !Number.isFinite(value) ? 'Значение выходит за числовой диапазон' : value === 0 && n.coefficient !== 0n ? 'Ненулевое значение меньше числового диапазона' : value !== 0 && (Math.abs(value) < 1e-7 || Math.abs(value) >= 1e12) ? formatQuantity(value, fmtNumber) : formatMeasure(value, fmtNumber);
};
const tokenize = (raw: string): string[] => raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);
export const compute: CalcFunction = inputs => {
  const fail = (message: string) => ({ primary: { label: 'Средний балл', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (typeof inputs.grades !== 'string') return fail('Введите хотя бы одну оценку');
  const lines = toStr(inputs.grades, '').split('\n').map(s => s.trim()).filter(Boolean);
  if (!lines.length) return fail('Введите хотя бы одну оценку');
  if (lines.length > 10000) return fail('Допускается не более 10000 строк');
  let weights=exact(0), products=exact(0), grades=exact(0);
  for (const line of lines) {
    const tokens=tokenize(line);
    if (tokens.length < 1 || tokens.length > 2) return fail('Укажите оценку и необязательный вес в каждой строке');
    const grade=read(tokens[0]), weight=tokens.length===2 ? read(tokens[1]) : 1;
    if (!Number.isFinite(grade) || !Number.isFinite(weight)) return fail('Введите корректные числовые данные');
    if (grade<0) return fail('Оценка не может быть отрицательной');
    if (!(weight>0)) return fail('Вес предмета должен быть больше нуля');
    weights=add(weights,exact(weight));products=add(products,times(exact(grade),exact(weight)));grades=add(grades,exact(grade));
  }
  const mean=ratio(products,weights), simple=ratio(grades,exact(lines.length));
  if (!Number.isFinite(mean) || !Number.isFinite(simple) || (mean===0 && products.coefficient!==0n) || (simple===0 && grades.coefficient!==0n)) return fail('Результат вне допустимого диапазона');
  return {primary:{label:'Средний балл',value:statistic(mean)},secondary:[
    {label:'Сумма весов',value:auxiliary(weights)}, {label:'Сумма произведений',value:auxiliary(products)},
    {label:'Предметов',value:fmtNumber(lines.length,0)}, {label:'Простое среднее',value:statistic(simple)},
  ]};
};
