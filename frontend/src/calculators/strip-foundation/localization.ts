import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Объём бетона': 'Concrete volume',
  'Чистый объём': 'Net volume',
  'Запас': 'Allowance',
  'Площадь сечения ленты': 'Strip section area',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Объём бетона': 'Об’єм бетону',
  'Чистый объём': 'Чистий об’єм',
  'Запас': 'Запас',
  'Площадь сечения ленты': 'Площа перерізу стрічки',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'perimeter': 'Gesamtlänge des Streifens, m',
      'width': 'Breite des Streifens, m',
      'depth': 'Tiefe des Streifens, m',
      'waste': 'Zuschlag, %',
    },
    results: {
      'Объём бетона': 'Betonvolumen',
      'Чистый объём': 'Nettovolumen',
      'Запас': 'Zuschlag',
      'Площадь сечения ленты': 'Querschnittsfläche des Streifens',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Длина ленты должна быть больше нуля': 'Die Länge des Streifens muss größer als null sein',
      'Ширина ленты должна быть больше нуля': 'Die Breite des Streifens muss größer als null sein',
      'Глубина ленты должна быть больше нуля': 'Die Tiefe des Streifens muss größer als null sein',
      'Запас не может быть отрицательным': 'Der Zuschlag kann nicht negativ sein',
      'Запас больше 50 % не рассчитывается': 'Ein Zuschlag über 50 % wird nicht gerechnet',
    },
  },
  en: {
    fields: { perimeter: 'Total strip length, m', width: 'Strip width, m', depth: 'Strip depth, m', waste: 'Allowance, %', },
    options: { },
    results: RESULTS_EN,
    values: {
      'Длина ленты должна быть больше нуля': 'The strip length must be greater than zero',
      'Ширина ленты должна быть больше нуля': 'The strip width must be greater than zero',
      'Глубина ленты должна быть больше нуля': 'The strip depth must be greater than zero',
      'Запас не может быть отрицательным': 'The allowance cannot be negative',
      'Запас больше 50 % не рассчитывается': 'An allowance above 50% is not calculated',
    },
  },
  uk: {
    fields: { perimeter: 'Загальна довжина стрічки, м', width: 'Ширина стрічки, м', depth: 'Глибина стрічки, м', waste: 'Запас, %', },
    options: { },
    results: RESULTS_UK,
    values: {
      'Длина ленты должна быть больше нуля': 'Довжина стрічки має бути більшою за нуль',
      'Ширина ленты должна быть больше нуля': 'Ширина стрічки має бути більшою за нуль',
      'Глубина ленты должна быть больше нуля': 'Глибина стрічки має бути більшою за нуль',
      'Запас не может быть отрицательным': 'Запас не може бути від’ємним',
      'Запас больше 50 % не рассчитывается': 'Запас понад 50 % не розраховується',
    },
  },
  es: {
    fields: {
      "perimeter": "Longitud total de la zapata, m",
      "width": "Ancho de la zapata, m",
      "depth": "Profundidad de la zapata, m",
      "waste": "Margen, %",
    },
    options: {},
    results: {
      "Объём бетона": "Volumen de hormigón",
      "Чистый объём": "Volumen neto",
      "Запас": "Margen",
      "Площадь сечения ленты": "Área de la sección de la zapata",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Длина ленты должна быть больше нуля": "La longitud de la zapata debe ser mayor que cero",
      "Ширина ленты должна быть больше нуля": "El ancho de la zapata debe ser mayor que cero",
      "Глубина ленты должна быть больше нуля": "La profundidad de la zapata debe ser mayor que cero",
      "Запас не может быть отрицательным": "El margen no puede ser negativo",
      "Запас больше 50 % не рассчитывается": "No se calcula un margen mayor del 50 %",
    },
  },
};
