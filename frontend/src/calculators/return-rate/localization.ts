import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { returns: 'Returned orders', orders: 'Total orders' },
    results: { 'Доля возвратов': 'Return rate', 'Оставлено покупателями': 'Kept by customers', 'Возвратов': 'Returns', 'Всего заказов': 'Total orders', 'Проверьте данные': 'Check the values' },
    values: {
      'Заказы и возвраты считаются целыми': 'Orders and returns are counted in whole numbers',
      'Заказов должно быть больше нуля': 'There must be at least one order',
      'Возвратов не может быть меньше нуля': 'Returns cannot be negative',
      'Возвратов больше, чем заказов — проверьте период': 'More returns than orders — check the period',
    },
  },
  uk: {
    fields: { returns: 'Повернені замовлення', orders: 'Усього замовлень' },
    results: { 'Доля возвратов': 'Частка повернень', 'Оставлено покупателями': 'Залишено покупцями', 'Возвратов': 'Повернень', 'Всего заказов': 'Усього замовлень', 'Проверьте данные': 'Перевірте дані' },
    values: {
      'Заказы и возвраты считаются целыми': 'Замовлення й повернення рахуються цілими',
      'Заказов должно быть больше нуля': 'Замовлень має бути більше нуля',
      'Возвратов не может быть меньше нуля': 'Повернень не може бути менше нуля',
      'Возвратов больше, чем заказов — проверьте период': 'Повернень більше, ніж замовлень — перевірте період',
    },
  },
};
