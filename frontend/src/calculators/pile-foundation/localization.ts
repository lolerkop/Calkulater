import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
