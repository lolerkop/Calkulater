import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Маржинальный доход': 'Contribution margin', 'Доля в цене': 'Share of the price',
  'Маржинальный доход на объём': 'Contribution margin on volume',
  'Переменные затраты': 'Variable costs', 'Внимание': 'Warning', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Маржинальный доход': 'Маржинальний дохід', 'Доля в цене': 'Частка в ціні',
  'Маржинальный доход на объём': 'Маржинальний дохід на обсяг',
  'Переменные затраты': 'Змінні витрати', 'Внимание': 'Увага', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'price': 'Preis je Stück',
      'variable': 'Variable Kosten je Stück',
      'volume': 'Menge, Stück',
    },
    results: {
      'Маржинальный доход': 'Deckungsbeitrag',
      'Доля в цене': 'Anteil am Preis',
      'Маржинальный доход на объём': 'Deckungsbeitrag auf die Menge',
      'Переменные затраты': 'Variable Kosten',
      'Внимание': 'Achtung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Переменные затраты выше цены': 'Die variablen Kosten übersteigen den Preis',
      'Цена должна быть больше нуля': 'Der Preis muss größer als null sein',
    },
  },
  en: {
    fields: { price: 'Price per unit', variable: 'Variable cost per unit', volume: 'Volume, units' },
    results: RESULTS_EN,
    values: {
      'Переменные затраты выше цены': 'Variable costs exceed the price',
      'Цена должна быть больше нуля': 'The price must be greater than zero',
    },
  },
  uk: {
    fields: { price: 'Ціна за одиницю', variable: 'Змінні витрати на одиницю', volume: 'Обсяг, одиниць' },
    results: RESULTS_UK,
    values: {
      'Переменные затраты выше цены': 'Змінні витрати перевищують ціну',
      'Цена должна быть больше нуля': 'Ціна має бути більшою за нуль',
    },
  },
};
