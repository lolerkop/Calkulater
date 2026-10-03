import type { CalcFunction } from '../../lib/types';
import { fmtMoney } from '../../lib/format';

import { number, text } from '../../lib/platform/scalarInputDisplay';

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
  const begin = number(inputs.begin);
  const end = number(inputs.end);
  const years = number(inputs.years);

  const fail = (reason: string) => ({
    primary: { label: 'Среднегодовой рост', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: reason, accent: 'red' as const }],
  });
  if (begin === null || end === null || years === null) return fail('Введите корректные числовые данные');
  if (begin <= 0) return fail('Начальная стоимость должна быть больше нуля');
  if (end <= 0) return fail('Конечная стоимость должна быть больше нуля');
  if (years <= 0) return fail('Срок должен быть больше нуля');

  const ratio = end / begin;
  const relativeChange = (end - begin) / begin;
  const logRatio = Number.isFinite(relativeChange) && relativeChange > -1 ? Math.log1p(relativeChange) : Math.log(end) - Math.log(begin);
  const cagr = Math.expm1(logRatio / years) * 100;
  const total = relativeChange * 100;
  if (![ratio, cagr, total].every(Number.isFinite) || ratio <= 0 || (begin !== end && (cagr === 0 || total === 0))) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Среднегодовой рост', value: `${text(cagr)} %` },
    secondary: [
      { label: 'Общий рост за срок', value: `${text(total)} %`, accent: total >= 0 ? 'green' : 'red' },
      { label: 'Множитель', value: `${text(ratio, 3)}×` },
      { label: 'Начальная стоимость', value: fmtMoney(begin) },
      { label: 'Конечная стоимость', value: fmtMoney(end) },
      { label: 'Срок', value: `${text(years)}` },
    ],
  };
};
