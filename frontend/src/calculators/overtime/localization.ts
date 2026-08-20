import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      rate: 'Hourly rate, ₽',
      normalHours: 'Regular hours',
      overtimeHours: 'Overtime hours',
      multiplier: 'Overtime multiplier',
    },
    results: {
      'Всего к оплате': 'Total pay',
      'Оплата обычных часов': 'Pay for regular hours',
      'Оплата сверхурочных': 'Overtime pay',
      'Средняя ставка за час': 'Effective hourly rate',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Ставка за час должна быть больше нуля': 'The hourly rate must be greater than zero',
      'Часы не могут быть отрицательными': 'Hours cannot be negative',
      'Коэффициент сверхурочных не может быть меньше единицы': 'The overtime multiplier cannot be below one',
    },
  },
  uk: {
    fields: {
      rate: 'Ставка за годину, ₽',
      normalHours: 'Звичайні години',
      overtimeHours: 'Надурочні години',
      multiplier: 'Коефіцієнт надурочних',
    },
    results: {
      'Всего к оплате': 'Усього до оплати',
      'Оплата обычных часов': 'Оплата звичайних годин',
      'Оплата сверхурочных': 'Оплата надурочних',
      'Средняя ставка за час': 'Середня ставка за годину',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Ставка за час должна быть больше нуля': 'Ставка за годину має бути більшою за нуль',
      'Часы не могут быть отрицательными': 'Години не можуть бути від’ємними',
      'Коэффициент сверхурочных не может быть меньше единицы': 'Коефіцієнт надурочних не може бути меншим за одиницю',
    },
  },
};
