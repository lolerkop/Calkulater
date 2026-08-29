import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'shipping': 'Lieferkosten',
      'units': 'Stück in der Sendung',
      'packaging': 'Verpackungskosten',
    },
    results: {
      'Доставка на единицу': 'Versand je Stück',
      'Всего логистики': 'Logistik insgesamt',
      'В том числе упаковка': 'Davon Verpackung',
      'Единиц в партии': 'Stück in der Sendung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Число единиц должно быть целым': 'Die Stückzahl muss eine ganze Zahl sein',
      'Единиц должно быть больше нуля': 'Es muss mindestens ein Stück sein',
      'Стоимость доставки не может быть отрицательной': 'Die Lieferkosten können nicht negativ sein',
    },
  },
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
