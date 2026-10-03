import type { CalcFunction } from '../../lib/types';
import { displayNumber as text, displayWholeMoney as money } from '../../lib/platform/financeDisplay';
import { number } from '../../lib/platform/scalarInputDisplay';

export const compute: CalcFunction = (inputs) => {
  const income = number(inputs.income);
  const expenses = number(inputs.expenses);
  const fail = (message: string) => ({
    primary: { label: 'Норма сбережений', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (income === null || expenses === null) return fail('Введите корректные числовые данные');
  if (!(income > 0)) return fail('Доход должен быть больше нуля');
  if (expenses < 0) return fail('Расходы не могут быть отрицательными');
  const saved = income - expenses;
  const rate = (saved / income) * 100;
  if (![saved, rate].every(Number.isFinite) || (saved !== 0 && rate === 0)) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Норма сбережений', value: `${text(rate)} %` },
    secondary: [
      { label: 'Сбережения за период', value: money(saved), accent: saved >= 0 ? 'green' : 'red' },
      { label: 'Доход', value: money(income) },
      { label: 'Расходы', value: money(expenses) },
      ...(saved < 0 ? [{ label: 'Внимание', value: 'Расходы превышают доход', accent: 'red' as const }] : []),
    ],
  };
};
