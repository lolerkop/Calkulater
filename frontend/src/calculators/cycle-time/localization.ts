import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      availableMinutes: 'Available time per shift, min', demand: 'Demand per shift, units',
      actualCycle: 'Actual cycle time, min',
    },
    options: {},
    results: {
      'Такт производства': 'Takt time', 'Единиц в час': 'Units per hour',
      'Фактический цикл': 'Actual cycle time', 'Загрузка такта': 'Takt utilisation',
      'Возможный выпуск за смену': 'Possible output per shift', 'Проверьте данные': 'Check the values',
    },
    values: {
      'мин/шт': 'min/unit', 'мин': 'min', 'шт': 'units',
      'Доступное время смены должно быть больше нуля': 'The available shift time must be greater than zero',
      'Спрос — целое число единиц, не меньше одной': 'Demand must be a whole number of units, at least one',
      'Фактический цикл не может быть отрицательным': 'The actual cycle time cannot be negative',
    },
  },
  uk: {
    fields: {
      availableMinutes: 'Доступний час за зміну, хв', demand: 'Попит за зміну, шт',
      actualCycle: 'Фактичний цикл, хв',
    },
    options: {},
    results: {
      'Такт производства': 'Такт виробництва', 'Единиц в час': 'Одиниць за годину',
      'Фактический цикл': 'Фактичний цикл', 'Загрузка такта': 'Завантаження такту',
      'Возможный выпуск за смену': 'Можливий випуск за зміну', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мин/шт': 'хв/шт', 'мин': 'хв', 'шт': 'шт',
      'Доступное время смены должно быть больше нуля': 'Доступний час зміни має бути більшим за нуль',
      'Спрос — целое число единиц, не меньше одной': 'Попит — ціле число одиниць, не менше однієї',
      'Фактический цикл не может быть отрицательным': 'Фактичний цикл не може бути від’ємним',
    },
  },
};
