import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Масса': 'Mass', 'Площадь сечения': 'Cross-section area', 'Объём металла': 'Metal volume',
  'Погонная масса': 'Mass per metre', 'Метров в тонне': 'Metres per tonne',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Масса': 'Маса', 'Площадь сечения': 'Площа перерізу', 'Объём металла': "Об'єм металу",
  'Погонная масса': 'Погонна маса', 'Метров в тонне': 'Метрів у тонні',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      shape: 'Cross-section', a: 'Diameter or side, mm', b: 'Second side of the flat bar, mm',
      length: 'Length, m', density: 'Density, g/cm³',
    },
    options: { round: 'round bar', square: 'square bar', flat: 'flat bar' },
    results: RESULTS_EN,
    values: {
      'кг/м': 'kg/m', 'кг': 'kg', 'мм²': 'mm²', 'м³': 'm³', 'м': 'm',
      'Плотность должна быть больше нуля': 'The density must be greater than zero',
      'Длина должна быть больше нуля': 'The length must be greater than zero',
      'Размер сечения должен быть больше нуля': 'The cross-section size must be greater than zero',
      'Вторая сторона полосы должна быть больше нуля': 'The second side of the flat bar must be greater than zero',
      'Выберите форму сечения из списка': 'Choose a cross-section from the list',
    },
  },
  uk: {
    fields: {
      shape: 'Форма перерізу', a: 'Діаметр або сторона, мм', b: 'Друга сторона смуги, мм',
      length: 'Довжина, м', density: 'Густина, г/см³',
    },
    options: { round: 'коло', square: 'квадрат', flat: 'смуга' },
    results: RESULTS_UK,
    values: {
      'кг/м': 'кг/м', 'кг': 'кг', 'мм²': 'мм²', 'м³': 'м³', 'м': 'м',
      'Плотность должна быть больше нуля': 'Густина має бути більшою за нуль',
      'Длина должна быть больше нуля': 'Довжина має бути більшою за нуль',
      'Размер сечения должен быть больше нуля': 'Розмір перерізу має бути більшим за нуль',
      'Вторая сторона полосы должна быть больше нуля': 'Друга сторона смуги має бути більшою за нуль',
      'Выберите форму сечения из списка': 'Оберіть форму перерізу зі списку',
    },
  },
};
