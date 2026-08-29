import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'area': 'Beheizte Fläche, m²',
      'step': 'Verlegeabstand, m',
      'loopMax': 'Höchstlänge eines Heizkreises, m',
      'edgeZone': 'Fläche der Randzone, m²',
      'edgeStep': 'Verlegeabstand in der Randzone, m',
      'waste': 'Zuschlag, %',
    },
    results: {
      'Длина трубы': 'Rohrlänge',
      'Петель': 'Heizkreise',
      'На петлю': 'Je Heizkreis',
      'Площадь': 'Fläche',
      'Основная зона': 'Hauptzone',
      'Краевая зона': 'Randzone',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м': 'm',
      'м²': 'm²',
      'Площадь должна быть больше нуля': 'Die Fläche muss größer als null sein',
      'Шаг укладки должен быть больше нуля': 'Der Verlegeabstand muss größer als null sein',
      'Предельная длина петли должна быть больше нуля': 'Die Höchstlänge eines Heizkreises muss größer als null sein',
      'Краевая зона должна быть меньше всей площади': 'Die Randzone muss kleiner als die ganze Fläche sein',
      'Запас должен быть от 0 до 50 %': 'Der Zuschlag muss zwischen 0 und 50 % liegen',
    },
  },
  en: {
    fields: {
      "area": "Heated area, m²", "step": "Pipe spacing, m", "loopMax": "Maximum loop length, m",
      "edgeZone": "Edge zone area, m²", "edgeStep": "Edge zone spacing, m", "waste": "Allowance, %",
    },
    options: {},
    results: {
      "Длина трубы": "Pipe length",
      "Петель": "Loops",
      "На петлю": "Per loop",
      "Площадь": "Area",
      "Основная зона": "Main zone",
      "Краевая зона": "Edge zone",
      "Проверьте данные": "Check the values",
    },
    values: {
      "м": "m", "м²": "m²",
      "Площадь должна быть больше нуля": "The area must be greater than zero",
      "Шаг укладки должен быть больше нуля": "The pipe spacing must be greater than zero",
      "Предельная длина петли должна быть больше нуля": "The maximum loop length must be greater than zero",
      "Краевая зона должна быть меньше всей площади": "The edge zone must be smaller than the whole area",
      "Запас должен быть от 0 до 50 %": "The allowance must be between 0 and 50 %",
    },
  },
  uk: {
    fields: {
      "area": "Площа обігріву, м²", "step": "Крок укладання, м", "loopMax": "Гранична довжина петлі, м",
      "edgeZone": "Площа краєвої зони, м²", "edgeStep": "Крок у краєвій зоні, м", "waste": "Запас, %",
    },
    options: {},
    results: {
      "Длина трубы": "Довжина труби",
      "Петель": "Петель",
      "На петлю": "На петлю",
      "Площадь": "Площа",
      "Основная зона": "Основна зона",
      "Краевая зона": "Краєва зона",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "м": "м", "м²": "м²",
      "Площадь должна быть больше нуля": "Площа має бути більшою за нуль",
      "Шаг укладки должен быть больше нуля": "Крок укладання має бути більшим за нуль",
      "Предельная длина петли должна быть больше нуля": "Гранична довжина петлі має бути більшою за нуль",
      "Краевая зона должна быть меньше всей площади": "Краєва зона має бути меншою за всю площу",
      "Запас должен быть от 0 до 50 %": "Запас має бути від 0 до 50 %",
    },
  },
};
