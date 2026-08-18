import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { shipping: 'Shipping cost', units: 'Units in the batch', packaging: 'Packaging cost' },
    results: { 'Доставка на единицу': 'Shipping per unit', 'Всего логистики': 'Total logistics', 'В том числе упаковка': 'Of which packaging', 'Единиц в партии': 'Units in the batch', 'Проверьте данные': 'Check the values' },
    values: {
      'Число единиц должно быть целым': 'The number of units must be a whole number',
      'Единиц должно быть больше нуля': 'There must be at least one unit',
      'Стоимость доставки не может быть отрицательной': 'Shipping cost cannot be negative',
    },
  },
  uk: {
    fields: { shipping: 'Вартість доставки', units: 'Одиниць у партії', packaging: 'Вартість пакування' },
    results: { 'Доставка на единицу': 'Доставка на одиницю', 'Всего логистики': 'Усього логістики', 'В том числе упаковка': 'Зокрема пакування', 'Единиц в партии': 'Одиниць у партії', 'Проверьте данные': 'Перевірте дані' },
    values: {
      'Число единиц должно быть целым': 'Кількість одиниць має бути цілою',
      'Единиц должно быть больше нуля': 'Одиниць має бути більше нуля',
      'Стоимость доставки не может быть отрицательной': 'Вартість доставки не може бути від’ємною',
    },
  },
};
