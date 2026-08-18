import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Кредитная нагрузка': 'Debt-to-income ratio', 'Оценка': 'Assessment',
  'Остаётся после платежей': 'Left after payments', 'Платежи по долгам': 'Debt payments',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Кредитная нагрузка': 'Кредитне навантаження', 'Оценка': 'Оцінка',
  'Остаётся после платежей': 'Залишається після платежів', 'Платежи по долгам': 'Платежі за боргами',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { payments: 'Monthly debt payments', income: 'Monthly income' },
    results: RESULTS_EN,
    values: {
      'Комфортная': 'Comfortable', 'Повышенная': 'Elevated', 'Высокая': 'High',
      'Доход должен быть больше нуля': 'Income must be greater than zero',
    },
  },
  uk: {
    fields: { payments: 'Щомісячні платежі за боргами', income: 'Місячний дохід' },
    results: RESULTS_UK,
    values: {
      'Комфортная': 'Комфортне', 'Повышенная': 'Підвищене', 'Высокая': 'Високе',
      'Доход должен быть больше нуля': 'Дохід має бути більшим за нуль',
    },
  },
};
