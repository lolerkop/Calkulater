import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'count': 'Zahl der Pfähle',
      'diameter': 'Durchmesser des Pfahls, m',
      'depth': 'Tiefe des Pfahls, m',
      'grillageLength': 'Länge des Rosts, m',
      'grillageWidth': 'Breite des Rosts, m',
      'grillageHeight': 'Höhe des Rosts, m',
      'waste': 'Zuschlag, %',
    },
    results: {
      'Объём бетона': 'Betonvolumen',
      'Объём свай': 'Volumen der Pfähle',
      'Объём ростверка': 'Volumen des Rosts',
      'Чистый объём': 'Nettovolumen',
      'Запас': 'Zuschlag',
      'Объём одной сваи': 'Volumen eines Pfahls',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м³': 'm³',
      'Свай должно быть не меньше одной': 'Es muss mindestens ein Pfahl sein',
      'Диаметр и глубина сваи должны быть больше нуля': 'Durchmesser und Tiefe des Pfahls müssen größer als null sein',
      'Размеры ростверка не могут быть отрицательными': 'Die Maße des Rosts können nicht negativ sein',
      'Запас должен быть от 0 до 50 %': 'Der Zuschlag muss zwischen 0 und 50 % liegen',
    },
  },
  en: {
    fields: { "count": "Number of piles", "diameter": "Pile diameter, m", "depth": "Pile depth, m", "grillageLength": "Grillage length, m", "grillageWidth": "Grillage width, m", "grillageHeight": "Grillage height, m", "waste": "Allowance, %" },
    options: {},
    results: {
      "Объём бетона": "Concrete volume", "Объём свай": "Piles volume", "Объём ростверка": "Grillage volume",
      "Чистый объём": "Net volume", "Запас": "Allowance", "Объём одной сваи": "Volume of one pile",
      "Проверьте данные": "Check the values",
    },
    values: {
      "м³": "m³",
      "Свай должно быть не меньше одной": "There must be at least one pile",
      "Диаметр и глубина сваи должны быть больше нуля": "The pile diameter and depth must be greater than zero",
      "Размеры ростверка не могут быть отрицательными": "The grillage dimensions cannot be negative",
      "Запас должен быть от 0 до 50 %": "The allowance must be between 0 and 50 %",
    },
  },
  uk: {
    fields: { "count": "Кількість паль", "diameter": "Діаметр палі, м", "depth": "Глибина палі, м", "grillageLength": "Довжина ростверку, м", "grillageWidth": "Ширина ростверку, м", "grillageHeight": "Висота ростверку, м", "waste": "Запас, %" },
    options: {},
    results: {
      "Объём бетона": "Об’єм бетону", "Объём свай": "Об’єм паль", "Объём ростверка": "Об’єм ростверку",
      "Чистый объём": "Чистий об’єм", "Запас": "Запас", "Объём одной сваи": "Об’єм однієї палі",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "м³": "м³",
      "Свай должно быть не меньше одной": "Паль має бути щонайменше одна",
      "Диаметр и глубина сваи должны быть больше нуля": "Діаметр і глибина палі мають бути більшими за нуль",
      "Размеры ростверка не могут быть отрицательными": "Розміри ростверку не можуть бути від’ємними",
      "Запас должен быть от 0 до 50 %": "Запас має бути від 0 до 50 %",
    },
  },
};
