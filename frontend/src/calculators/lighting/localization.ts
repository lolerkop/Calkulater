import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'area': 'Raumfläche, m²',
      'norm': 'Gewünschte Beleuchtungsstärke, lx',
      'lampLumens': 'Lichtstrom je Leuchtmittel, lm',
      'lossFactor': 'Wartungsfaktor',
    },
    results: {
      'Нужно люмен': 'Nötige Lumen',
      'Ламп': 'Leuchtmittel',
      'Люмен на квадратный метр': 'Lumen je Quadratmeter',
      'Норма освещённости': 'Gewünschte Beleuchtungsstärke',
      'Коэффициент запаса': 'Wartungsfaktor',
      'Установленный поток': 'Installierter Lichtstrom',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'лм': 'lm',
      'лк': 'lx',
      'Площадь должна быть больше нуля': 'Die Fläche muss größer als null sein',
      'Норма освещённости должна быть больше нуля': 'Die Beleuchtungsstärke muss größer als null sein',
      'Световой поток лампы должен быть больше нуля': 'Der Lichtstrom des Leuchtmittels muss größer als null sein',
      'Коэффициент запаса должен быть от 0,4 до 1': 'Der Wartungsfaktor muss zwischen 0,4 und 1 liegen',
      'Норма освещённости — допущение, которое можно менять: для гостиной обычно берут около 150 лк, для рабочего места втрое больше. Нормативные значения различаются по странам.': 'Die Beleuchtungsstärke ist eine änderbare Annahme: für ein Wohnzimmer nimmt man meist rund 150 lx, für einen Arbeitsplatz das Dreifache. Normwerte unterscheiden sich von Land zu Land.',
    },
  },
  en: {
    fields: { "area": "Room area, m²", "norm": "Target illuminance, lx", "lampLumens": "Lamp output, lm", "lossFactor": "Maintenance factor" },
    options: {},
    results: {
      "Нужно люмен": "Lumens needed",
      "Ламп": "Lamps",
      "Люмен на квадратный метр": "Lumens per square metre",
      "Норма освещённости": "Target illuminance",
      "Коэффициент запаса": "Maintenance factor",
      "Установленный поток": "Installed output",
      "Проверьте данные": "Check the values",
    },
    values: {
      "лм": "lm", "лк": "lx",
      "Площадь должна быть больше нуля": "The area must be greater than zero",
      "Норма освещённости должна быть больше нуля": "The target illuminance must be greater than zero",
      "Световой поток лампы должен быть больше нуля": "The lamp output must be greater than zero",
      "Коэффициент запаса должен быть от 0,4 до 1": "The maintenance factor must be between 0.4 and 1",
      "Норма освещённости — допущение, которое можно менять: для гостиной обычно берут около 150 лк, для рабочего места втрое больше. Нормативные значения различаются по странам.": "The target illuminance is an assumption you can change: a living room is usually taken at around 150 lx and a workspace at three times that. Statutory values differ by country.",
    },
  },
  uk: {
    fields: { "area": "Площа кімнати, м²", "norm": "Норма освітленості, лк", "lampLumens": "Світловий потік лампи, лм", "lossFactor": "Коефіцієнт запасу" },
    options: {},
    results: {
      "Нужно люмен": "Потрібно люменів",
      "Ламп": "Ламп",
      "Люмен на квадратный метр": "Люменів на квадратний метр",
      "Норма освещённости": "Норма освітленості",
      "Коэффициент запаса": "Коефіцієнт запасу",
      "Установленный поток": "Встановлений потік",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "лм": "лм", "лк": "лк",
      "Площадь должна быть больше нуля": "Площа має бути більшою за нуль",
      "Норма освещённости должна быть больше нуля": "Норма освітленості має бути більшою за нуль",
      "Световой поток лампы должен быть больше нуля": "Світловий потік лампи має бути більшим за нуль",
      "Коэффициент запаса должен быть от 0,4 до 1": "Коефіцієнт запасу має бути від 0,4 до 1",
      "Норма освещённости — допущение, которое можно менять: для гостиной обычно берут около 150 лк, для рабочего места втрое больше. Нормативные значения различаются по странам.": "Норма освітленості це припущення, яке можна змінювати: для вітальні зазвичай беруть близько 150 лк, для робочого місця втричі більше. Нормативні значення різняться за країнами.",
    },
  },
};
