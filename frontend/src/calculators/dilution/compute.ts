import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Разбавление: C₁·V₁ = C₂·V₂, решается относительно любой из четырёх величин.
//
// Страница именно о разбавлении, поэтому конечная концентрация не может быть
// выше исходной: получить более крепкий раствор доливанием растворителя нельзя.
// Такой ввод отклоняется, а не решается молча как выпаривание — это другая
// операция с другой физикой и другим ответом.

const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const solve = toStr(inputs.solve, 'v2');
  const c1 = toNumber(inputs.c1);
  const v1 = toNumber(inputs.v1);
  const c2 = toNumber(inputs.c2);
  const v2 = toNumber(inputs.v2);
  // Режимов два: показать конечный объём и показать исходный. Решать равенство
  // относительно концентраций мешает не формула, а showIf: у него одно условие,
  // и поле, нужное трём режимам из четырёх, пришлось бы дублировать.
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const dilutionCheck = (from: number, to: number) =>
    to > from ? 'Конечная концентрация не может быть выше исходной' : null;

  if (solve === 'v2') {
    if (!(c1 > 0) || !(v1 > 0) || !(c2 > 0)) return fail('Все три известные величины должны быть больше нуля');
    const problem = dilutionCheck(c1, c2);
    if (problem) return fail(problem);
    const result = (c1 * v1) / c2;
    return {
      primary: { label: 'Конечный объём', value: `${qty(result)} мл` },
      secondary: [{ label: 'Добавить растворителя', value: `${qty(result - v1)} мл` }],
    };
  }
  if (!(c1 > 0) || !(c2 > 0) || !(v2 > 0)) return fail('Все три известные величины должны быть больше нуля');
  const problem = dilutionCheck(c1, c2);
  if (problem) return fail(problem);
  const result = (c2 * v2) / c1;
  return {
    primary: { label: 'Исходный объём', value: `${qty(result)} мл` },
    secondary: [{ label: 'Добавить растворителя', value: `${qty(v2 - result)} мл` }],
  };
};
