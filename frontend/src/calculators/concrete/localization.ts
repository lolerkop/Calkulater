import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается,
// это вернуло бы ручную регистрацию.
const RESULTS_EN = {
  'Объём бетона': 'Concrete volume',
  'Чистый объём': 'Net volume',
  'Запас': 'Allowance',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Объём бетона': 'Об’єм бетону',
  'Чистый объём': 'Чистий об’єм',
  'Запас': 'Запас',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'Pour shape', length: 'Slab length, m', width: 'Slab width, m', thickness: 'Slab thickness, m', perimeter: 'Strip length, m', stripWidth: 'Strip width, m', depth: 'Strip depth, m', sectionArea: 'Column section area, m²', height: 'Column height, m', count: 'Number of columns', waste: 'Allowance, %', },
    options: { slab: 'a slab', strip: 'a strip', columns: 'columns', },
    results: RESULTS_EN,
    values: {
      ' шт': ' pcs',
      ' кг': ' kg',
      'Запас не может быть отрицательным': 'The allowance cannot be negative',
      'Запас больше 50 % не рассчитывается': 'An allowance above 50% is not calculated',
      'Все размеры ленты должны быть больше нуля': 'Every strip dimension must be greater than zero',
      'Сечение и высота должны быть больше нуля': 'The section area and height must be greater than zero',
      'Количество столбов должно быть хотя бы одно': 'There must be at least one column',
      'Все размеры плиты должны быть больше нуля': 'Every slab dimension must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Форма заливки', length: 'Довжина плити, м', width: 'Ширина плити, м', thickness: 'Товщина плити, м', perimeter: 'Довжина стрічки, м', stripWidth: 'Ширина стрічки, м', depth: 'Глибина стрічки, м', sectionArea: 'Площа перерізу стовпа, м²', height: 'Висота стовпа, м', count: 'Кількість стовпів', waste: 'Запас, %', },
    options: { slab: 'плита', strip: 'стрічка', columns: 'стовпи', },
    results: RESULTS_UK,
    values: {
      ' шт': ' шт',
      ' кг': ' кг',
      'Запас не может быть отрицательным': 'Запас не може бути від’ємним',
      'Запас больше 50 % не рассчитывается': 'Запас понад 50 % не розраховується',
      'Все размеры ленты должны быть больше нуля': 'Усі розміри стрічки мають бути більшими за нуль',
      'Сечение и высота должны быть больше нуля': 'Переріз і висота мають бути більшими за нуль',
      'Количество столбов должно быть хотя бы одно': 'Стовпів має бути щонайменше один',
      'Все размеры плиты должны быть больше нуля': 'Усі розміри плити мають бути більшими за нуль',
    },
  },
};
