import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "area": "Area to cover, m²", "sheetLength": "Sheet length, m", "sheetWidth": "Sheet width, m",
      "layers": "Layers", "profileStep": "Stud spacing, m", "waste": "Allowance, %",
    },
    options: {},
    results: {
      "Листов": "Sheets", "Площадь": "Area", "С запасом": "With allowance",
      "Площадь листа": "Sheet area", "Метров профиля": "Metres of profile",
      "Саморезов": "Screws", "Проверьте данные": "Check the values",
    },
    values: {
      "м²": "m²",
      "Площадь должна быть больше нуля": "The area must be greater than zero",
      "Размеры листа должны быть больше нуля": "The sheet dimensions must be greater than zero",
      "Слоёв должно быть от одного до трёх": "There must be between one and three layers",
      "Шаг профиля должен быть больше нуля": "The stud spacing must be greater than zero",
      "Запас должен быть от 0 до 50 %": "The allowance must be between 0 and 50 %",
    },
  },
  uk: {
    fields: {
      "area": "Площа обшивки, м²", "sheetLength": "Довжина листа, м", "sheetWidth": "Ширина листа, м",
      "layers": "Шарів", "profileStep": "Крок профілю, м", "waste": "Запас, %",
    },
    options: {},
    results: {
      "Листов": "Листів", "Площадь": "Площа", "С запасом": "Із запасом",
      "Площадь листа": "Площа листа", "Метров профиля": "Метрів профілю",
      "Саморезов": "Саморізів", "Проверьте данные": "Перевірте дані",
    },
    values: {
      "м²": "м²",
      "Площадь должна быть больше нуля": "Площа має бути більшою за нуль",
      "Размеры листа должны быть больше нуля": "Розміри листа мають бути більшими за нуль",
      "Слоёв должно быть от одного до трёх": "Шарів має бути від одного до трьох",
      "Шаг профиля должен быть больше нуля": "Крок профілю має бути більшим за нуль",
      "Запас должен быть от 0 до 50 %": "Запас має бути від 0 до 50 %",
    },
  },
};
