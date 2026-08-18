import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Выручка на сотрудника: сколько выручки приходится на одного работающего.
//   на сотрудника = выручка / число сотрудников
// Число сотрудников целое. Половина человека в штате не бывает; если считаете
// частичную занятость, приводите её к полным ставкам до ввода — иначе
// показатель молча смешает две разные единицы измерения.
export const compute: CalcFunction = (inputs) => {
  const revenue = toNumber(inputs.revenue);
  const employees = toNumber(inputs.employees);

  const fail = (message: string) => ({
    primary: { label: 'Выручка на сотрудника', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(employees)) return fail('Число сотрудников должно быть целым');
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
