import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается,
// это вернуло бы ручную регистрацию.
const RESULTS_EN = {
  'Общий объём': 'Total volume',
  'Объём одной доски': 'Volume of one board',
  'Досок в кубометре': 'Boards per cubic metre',
  'Стоимость': 'Cost',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Общий объём': 'Загальний об’єм',
  'Объём одной доски': 'Об’єм однієї дошки',
  'Досок в кубометре': 'Дошок у кубометрі',
  'Стоимость': 'Вартість',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'length': 'Länge des Brettes, m',
      'width': 'Breite des Brettes, mm',
      'thickness': 'Dicke des Brettes, mm',
      'count': 'Zahl der Bretter',
      'pricePerM3': 'Preis je Kubikmeter',
    },
    results: {
      'Общий объём': 'Gesamtvolumen',
      'Объём одной доски': 'Volumen eines Brettes',
      'Досок в кубометре': 'Bretter je Kubikmeter',
      'Стоимость': 'Kosten',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ' шт': ' Stk',
      ' кг': ' kg',
      'Длина доски должна быть больше нуля': 'Die Länge des Brettes muss größer als null sein',
      'Ширина доски должна быть больше нуля': 'Die Breite des Brettes muss größer als null sein',
      'Толщина доски должна быть больше нуля': 'Die Dicke des Brettes muss größer als null sein',
      'Количество досок должно быть хотя бы одно': 'Es muss mindestens ein Brett sein',
    },
  },
  en: {
    fields: { length: 'Board length, m', width: 'Board width, mm', thickness: 'Board thickness, mm', count: 'Number of boards', pricePerM3: 'Price per cubic metre', },
    options: { },
    results: RESULTS_EN,
    values: {
      ' шт': ' pcs',
      ' кг': ' kg',
      'Длина доски должна быть больше нуля': 'The board length must be greater than zero',
      'Ширина доски должна быть больше нуля': 'The board width must be greater than zero',
      'Толщина доски должна быть больше нуля': 'The board thickness must be greater than zero',
      'Количество досок должно быть хотя бы одно': 'There must be at least one board',
    },
  },
  uk: {
    fields: { length: 'Довжина дошки, м', width: 'Ширина дошки, мм', thickness: 'Товщина дошки, мм', count: 'Кількість дошок', pricePerM3: 'Ціна за кубометр', },
    options: { },
    results: RESULTS_UK,
    values: {
      ' шт': ' шт',
      ' кг': ' кг',
      'Длина доски должна быть больше нуля': 'Довжина дошки має бути більшою за нуль',
      'Ширина доски должна быть больше нуля': 'Ширина дошки має бути більшою за нуль',
      'Толщина доски должна быть больше нуля': 'Товщина дошки має бути більшою за нуль',
      'Количество досок должно быть хотя бы одно': 'Дошок має бути щонайменше одна',
    },
  },
};
