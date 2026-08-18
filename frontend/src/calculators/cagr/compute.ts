import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Среднегодовой темп роста: во сколько раз в среднем растёт вложение за год,
// если общий рост распределить равномерно.
//
//   CAGR = ((конец / начало) ^ (1 / лет) − 1) × 100
//
// Отрицательный результат осмыслен — это среднегодовое падение. Ошибкой
// является только нулевая или отрицательная база: возведение в дробную степень
// отрицательного отношения даёт NaN, а нулевая база делает отношение
// бесконечным. Срок тоже обязан быть положительным: при нуле показатель
// степени обращается в бесконечность.
export const compute: CalcFunction = (inputs) => {
  const begin = toNumber(inputs.begin);
  const end = toNumber(inputs.end);
  const years = toNumber(inputs.years);

  const fail = (reason: string) => ({
    primary: { label: 'Среднегодовой рост', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: reason, accent: 'red' as const }],
  });
  if (begin <= 0) return fail('Начальная стоимость должна быть больше нуля');
  if (end <= 0) return fail('Конечная стоимость должна быть больше нуля');
  if (years <= 0) return fail('Срок должен быть больше нуля');

  const ratio = end / begin;
  const cagr = (Math.pow(ratio, 1 / years) - 1) * 100;
  const total = (ratio - 1) * 100;

  return {
    primary: { label: 'Среднегодовой рост', value: `${fmtNumber(cagr, 2)} %` },
    secondary: [
      { label: 'Общий рост за срок', value: `${fmtNumber(total, 2)} %`, accent: total >= 0 ? 'green' : 'red' },
      { label: 'Множитель', value: `${fmtNumber(ratio, 3)}×` },
      { label: 'Начальная стоимость', value: fmtMoney(begin) },
      { label: 'Конечная стоимость', value: fmtMoney(end) },
      { label: 'Срок', value: `${fmtNumber(years, 2)}` },
    ],
  };
};
