import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Выручка на сотрудника: сколько выручки приходится на одного работающего.
//   на сотрудника = выручка / число сотрудников
// Контракт этой формы — целое число сотрудников, не дробные FTE.
// Выручка годовая: месячная строка делит годовой показатель на двенадцать.
// Required fields reject coercions; a blank optional amount means zero.
function numericInput(value: unknown, optional = false): number {
  if (optional && (value === undefined || (typeof value === 'string' && value.trim() === ''))) return 0;
  if (typeof value !== 'number' && typeof value !== 'string') return NaN;
  return toNumber(value, NaN);
}

export const compute: CalcFunction = (inputs) => {
  const revenue = numericInput(inputs.revenue);
  const employees = numericInput(inputs.employees);

  const fail = (message: string) => ({
    primary: { label: 'Выручка на сотрудника', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![revenue, employees].every(Number.isFinite)) return fail('Введите конечные числовые значения.');

  if (!Number.isSafeInteger(employees)) return fail('Число сотрудников должно быть целым');
  if (employees <= 0) return fail('Сотрудников должно быть больше нуля');
  if (revenue < 0) return fail('Выручка не может быть отрицательной');

  const perEmployee = revenue / employees;

  return {
    primary: { label: 'Выручка на сотрудника', value: fmtMoney(perEmployee) },
    secondary: [
      { label: 'Выручка', value: fmtMoney(revenue) },
      { label: 'Сотрудников', value: fmtNumber(employees, 0) },
      { label: 'В месяц на сотрудника', value: fmtMoney(perEmployee / 12) },
    ],
  };
};
