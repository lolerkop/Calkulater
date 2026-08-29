import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'revenue': 'Umsatz, €',
      'cost': 'Kosten, €',
    },
    results: {
      'Прибыль': 'Gewinn',
      'Маржа': 'Marge',
      'Наценка': 'Aufschlag',
      'Выручка': 'Umsatz',
      'Затраты': 'Kosten',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Выручка должна быть больше нуля': 'Der Umsatz muss größer als null sein',
      'Затраты не могут быть отрицательными': 'Die Kosten können nicht negativ sein',
    },
  },
  en: {
    fields: {
      revenue: 'Revenue, ₽',
      cost: 'Costs, ₽',
    },
    results: {
      'Прибыль': 'Profit',
      'Маржа': 'Margin',
      'Наценка': 'Markup',
      'Выручка': 'Revenue',
      'Затраты': 'Costs',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Выручка должна быть больше нуля': 'The revenue must be greater than zero',
      'Затраты не могут быть отрицательными': 'Costs cannot be negative',
    },
  },
  uk: {
    fields: {
      revenue: 'Виручка, ₽',
      cost: 'Витрати, ₽',
    },
    results: {
      'Прибыль': 'Прибуток',
      'Маржа': 'Маржа',
      'Наценка': 'Націнка',
      'Выручка': 'Виручка',
      'Затраты': 'Витрати',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Выручка должна быть больше нуля': 'Виручка має бути більшою за нуль',
      'Затраты не могут быть отрицательными': 'Витрати не можуть бути від’ємними',
    },
  },
};
