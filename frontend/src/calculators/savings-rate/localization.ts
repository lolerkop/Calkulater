// Локализация, принадлежащая калькулятору. Ключи локальны для него: область
// видимости задаётся структурой манифеста, а не префиксами в именах.

import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'income': 'Einkommen im Zeitraum',
      'expenses': 'Ausgaben im Zeitraum',
    },
    results: {
      'Норма сбережений': 'Sparquote',
      'Сбережения за период': 'Im Zeitraum gespart',
      'Доход': 'Einkommen',
      'Расходы': 'Ausgaben',
      'Внимание': 'Achtung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Расходы превышают доход': 'Die Ausgaben übersteigen das Einkommen',
      'Доход должен быть больше нуля': 'Das Einkommen muss größer als null sein',
    },
  },
  en: {
    fields: { income: 'Income for the period', expenses: 'Expenses for the period' },
    results: {
      'Норма сбережений': 'Savings rate',
      'Сбережения за период': 'Saved during the period',
      'Доход': 'Income',
      'Расходы': 'Expenses',
      'Внимание': 'Warning',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Расходы превышают доход': 'Expenses exceed income',
      'Доход должен быть больше нуля': 'Income must be greater than zero',
    },
  },
  uk: {
    fields: { income: 'Дохід за період', expenses: 'Витрати за період' },
    results: {
      'Норма сбережений': 'Норма заощаджень',
      'Сбережения за период': 'Заощадження за період',
      'Доход': 'Дохід',
      'Расходы': 'Витрати',
      'Внимание': 'Увага',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Расходы превышают доход': 'Витрати перевищують дохід',
      'Доход должен быть больше нуля': 'Дохід має бути більшим за нуль',
    },
  },
};
