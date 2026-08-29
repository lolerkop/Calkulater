import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'revenue': 'Umsatz im Zeitraum',
      'orders': 'Zahl der Bestellungen',
    },
    results: {
      'Средний чек': 'Durchschnittlicher Bestellwert',
      'Выручка': 'Umsatz',
      'Заказов': 'Bestellungen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Число заказов должно быть целым': 'Die Zahl der Bestellungen muss eine ganze Zahl sein',
      'Заказов должно быть больше нуля': 'Es muss mindestens eine Bestellung sein',
      'Выручка не может быть отрицательной': 'Der Umsatz kann nicht negativ sein',
    },
  },
  en: {
    fields: { revenue: 'Revenue for the period', orders: 'Number of orders' },
    results: { 'Средний чек': 'Average order value', 'Выручка': 'Revenue', 'Заказов': 'Orders', 'Проверьте данные': 'Check the values' },
    values: {
      'Число заказов должно быть целым': 'The number of orders must be a whole number',
      'Заказов должно быть больше нуля': 'There must be at least one order',
      'Выручка не может быть отрицательной': 'Revenue cannot be negative',
    },
  },
  uk: {
    fields: { revenue: 'Виторг за період', orders: 'Кількість замовлень' },
    results: { 'Средний чек': 'Середній чек', 'Выручка': 'Виторг', 'Заказов': 'Замовлень', 'Проверьте данные': 'Перевірте дані' },
    values: {
      'Число заказов должно быть целым': 'Кількість замовлень має бути цілою',
      'Заказов должно быть больше нуля': 'Замовлень має бути більше нуля',
      'Выручка не может быть отрицательной': 'Виторг не може бути від’ємним',
    },
  },
};
