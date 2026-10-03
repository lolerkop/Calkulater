import type { CalcFunction } from '../../lib/types';
import { displayNumber as text, displayWholeMoney as money } from '../../lib/platform/financeDisplay';
import { number } from '../../lib/platform/scalarInputDisplay';

// Gross-income ratio. Legacy 30/43 bands are illustrative, not approval limits.
export const compute: CalcFunction = (inputs) => {
  const payments = number(inputs.payments);
  const income = number(inputs.income);
  const fail = (message: string) => ({
    primary: { label: 'Кредитная нагрузка', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (payments === null || income === null) return fail('Введите корректные числовые данные');
  if (!(income > 0)) return fail('Доход должен быть больше нуля');
  if (payments < 0) return fail('Платежи не могут быть отрицательными');
  const dti = (payments / income) * 100;
  if (!Number.isFinite(dti) || (payments > 0 && dti === 0)) return fail('Результат вне допустимого диапазона');
  const assessment = dti <= 30 ? 'До 30 % (условная зона)' : dti <= 43 ? 'От 30 до 43 % (условная зона)' : 'Выше 43 % (условная зона)';
  return {
    primary: { label: 'Кредитная нагрузка', value: `${text(dti)} %` },
    secondary: [
      { label: 'Оценка', value: assessment, accent: 'neutral' as const },
      { label: 'Остаётся после платежей', value: money(income - payments) },
      { label: 'Платежи по долгам', value: money(payments) },
    ],
  };
};
