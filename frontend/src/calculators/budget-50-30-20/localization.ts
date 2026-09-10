import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'income': 'Monatliches Nettoeinkommen',
    },
    results: {
      'Нужды': 'Bedarf',
      'Желания': 'Wünsche',
      'Сбережения': 'Sparen',
      'Доход после налогов': 'Einkommen nach Steuern',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Доход должен быть больше нуля': 'Das Einkommen muss größer als null sein',
    },
  },
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
  es: {
    fields: {
      "income": "Ingresos mensuales netos",
    },
    options: {},
    results: {
      "Нужды": "Necesidades",
      "Желания": "Deseos",
      "Сбережения": "Ahorro",
      "Доход после налогов": "Ingresos netos",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Доход должен быть больше нуля": "Los ingresos deben ser mayores que cero",
    },
  },
};
