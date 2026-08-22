import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { bore: 'Cylinder bore, mm', stroke: 'Piston stroke, mm', cylinders: 'Cylinders' },
    options: {},
    results: {
      'Рабочий объём': 'Displacement', 'Объём одного цилиндра': 'Single cylinder volume',
      'В литрах': 'In litres', 'Отношение хода к диаметру': 'Stroke to bore ratio',
      'Цилиндров': 'Cylinders', 'Проверьте данные': 'Check the values',
    },
    values: {
      'см³': 'cm³', 'л': 'L', 'шт': 'pcs',
      'Диаметр цилиндра должен быть больше нуля': 'The bore must be greater than zero',
      'Ход поршня должен быть больше нуля': 'The stroke must be greater than zero',
      'Цилиндров должно быть целое число, не меньше одного': 'The cylinder count must be a whole number, at least one',
    },
  },
  uk: {
    fields: { bore: 'Діаметр циліндра, мм', stroke: 'Хід поршня, мм', cylinders: 'Циліндрів, шт' },
    options: {},
    results: {
      'Рабочий объём': 'Робочий об’єм', 'Объём одного цилиндра': 'Об’єм одного циліндра',
      'В литрах': 'У літрах', 'Отношение хода к диаметру': 'Відношення ходу до діаметра',
      'Цилиндров': 'Циліндрів', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'см³': 'см³', 'л': 'л', 'шт': 'шт',
      'Диаметр цилиндра должен быть больше нуля': 'Діаметр циліндра має бути більшим за нуль',
      'Ход поршня должен быть больше нуля': 'Хід поршня має бути більшим за нуль',
      'Цилиндров должно быть целое число, не меньше одного': 'Циліндрів має бути ціле число, не менше одного',
    },
  },
};
