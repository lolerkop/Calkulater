import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { income: 'Monthly income after tax' },
    results: {
      'Нужды': 'Needs', 'Желания': 'Wants', 'Сбережения': 'Savings',
      'Доход после налогов': 'Income after tax', 'Проверьте данные': 'Check the values',
    },
    values: { 'Доход должен быть больше нуля': 'Income must be greater than zero' },
  },
  uk: {
    fields: { income: 'Місячний дохід після податків' },
    results: {
      'Нужды': 'Потреби', 'Желания': 'Бажання', 'Сбережения': 'Заощадження',
      'Доход после налогов': 'Дохід після податків', 'Проверьте данные': 'Перевірте дані',
    },
    values: { 'Доход должен быть больше нуля': 'Дохід має бути більшим за нуль' },
  },
};
