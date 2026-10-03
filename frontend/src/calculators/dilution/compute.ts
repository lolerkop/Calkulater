import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Разбавление при концентрации на объём: C₁·V₁ = C₂·V₂.
//
// Страница именно о разбавлении, поэтому конечная концентрация не может быть
// выше исходной: получить более крепкий раствор доливанием растворителя нельзя.
// Такой ввод отклоняется, а не решается молча как выпаривание — это другая
// операция с другой физикой и другим ответом.

const qty = (value: number): string => formatQuantity(value, fmtNumber);
const positive = (value: unknown): number | null => {
  const parsed = typeof value === 'number' ? value
    : typeof value === 'string' && value.trim() ? parseLocalizedNumber(value) : null;
  return parsed !== null && Number.isFinite(parsed) && parsed > 0 ? parsed : null;
};

// Try different operation orders so a finite quotient is not lost to an
// overflowing product or an underflowing intermediate division.
const productQuotient = (a: number, b: number, denominator: number): number | null => {
  for (const result of [(a / denominator) * b, (b / denominator) * a, (a * b) / denominator]) {
    if (Number.isFinite(result) && result > 0) return result;
  }
  return null;
};

export const compute: CalcFunction = (inputs) => {
  const solve = inputs.solve === undefined ? 'v2' : inputs.solve;
  const c1 = positive(inputs.c1);
  const c2 = positive(inputs.c2);
  // Режимов два: показать конечный объём и показать исходный. Решать равенство
  // относительно концентраций мешает не формула, а showIf: у него одно условие,
  // и поле, нужное трём режимам из четырёх, пришлось бы дублировать.
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const dilutionCheck = (from: number, to: number) =>
    to > from ? 'Конечная концентрация не может быть выше исходной' : null;
  if (solve !== 'v2' && solve !== 'v1') return fail('Неизвестное направление');

  if (solve === 'v2') {
    const v1 = positive(inputs.v1);
    if (c1 === null || c2 === null || v1 === null) return fail('Все три известные величины должны быть больше нуля');
    const problem = dilutionCheck(c1, c2);
    if (problem) return fail(problem);
    const result = productQuotient(c1, v1, c2);
    if (result === null || result < v1) return fail('Результат вне допустимого диапазона');
    return {
      primary: { label: 'Конечный объём', value: `${qty(result)} мл` },
      secondary: [{ label: 'Добавить растворителя', value: `${qty(result - v1)} мл` }],
    };
  }
  const v2 = positive(inputs.v2);
  if (c1 === null || c2 === null || v2 === null) return fail('Все три известные величины должны быть больше нуля');
  const problem = dilutionCheck(c1, c2);
  if (problem) return fail(problem);
  const result = productQuotient(c2, v2, c1);
  if (result === null || result > v2) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Исходный объём', value: `${qty(result)} мл` },
    secondary: [{ label: 'Добавить растворителя', value: `${qty(v2 - result)} мл` }],
  };
};
