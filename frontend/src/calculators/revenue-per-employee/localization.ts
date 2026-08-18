import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { revenue: 'Annual revenue', employees: 'Number of employees' },
    results: { 'Выручка на сотрудника': 'Revenue per employee', 'Выручка': 'Revenue', 'Сотрудников': 'Employees', 'В месяц на сотрудника': 'Per employee per month', 'Проверьте данные': 'Check the values' },
    values: {
      'Число сотрудников должно быть целым': 'The number of employees must be a whole number',
      'Сотрудников должно быть больше нуля': 'There must be at least one employee',
      'Выручка не может быть отрицательной': 'Revenue cannot be negative',
    },
  },
  uk: {
    fields: { revenue: 'Річний виторг', employees: 'Кількість співробітників' },
    results: { 'Выручка на сотрудника': 'Виторг на співробітника', 'Выручка': 'Виторг', 'Сотрудников': 'Співробітників', 'В месяц на сотрудника': 'На місяць на співробітника', 'Проверьте данные': 'Перевірте дані' },
    values: {
      'Число сотрудников должно быть целым': 'Кількість співробітників має бути цілою',
      'Сотрудников должно быть больше нуля': 'Співробітників має бути більше нуля',
      'Выручка не может быть отрицательной': 'Виторг не може бути від’ємним',
    },
  },
};
