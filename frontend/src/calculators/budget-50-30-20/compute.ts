import type { CalcFunction } from '../../lib/types';
import { displayNumber as text, displayWholeMoney as money } from '../../lib/platform/financeDisplay';
import { number } from '../../lib/platform/scalarInputDisplay';

export const compute: CalcFunction = (inputs) => {
  const income = number(inputs.income);
  const fail = (message: string) => ({
    primary: { label: 'Нужды', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (income === null) return fail('Введите корректные числовые данные');
  if (!(income > 0)) return fail('Доход должен быть больше нуля');
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;
  if (![needs, wants, savings].every(value => Number.isFinite(value) && value > 0)) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Нужды', value: money(needs) },
    secondary: [
      { label: 'Желания', value: money(wants) },
      { label: 'Сбережения', value: money(savings) },
      { label: 'Доход после налогов', value: money(income) },
    ],
  };
};
