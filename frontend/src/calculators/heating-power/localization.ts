import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'area': 'Grundfläche, m²',
      'height': 'Raumhöhe, m',
      'wattsPerM3': 'Spezifischer Bedarf, W/m³',
      'windows': 'Zahl der Fenster',
    },
    results: {
      'Требуемая мощность': 'Nötige Leistung',
      'В ваттах': 'In Watt',
      'Объём помещения': 'Raumvolumen',
      'Норма на объём': 'Bedarf je Volumen',
      'Надбавка на окна': 'Zuschlag für Fenster',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кВт': 'kW',
      'Вт/м³': 'W/m³',
      'Вт': 'W',
      'м³': 'm³',
      'Площадь должна быть больше нуля': 'Die Grundfläche muss größer als null sein',
      'Высота потолка должна быть больше нуля': 'Die Raumhöhe muss größer als null sein',
      'Удельная норма должна быть больше нуля': 'Der spezifische Bedarf muss größer als null sein',
      'Число окон не может быть отрицательным': 'Die Zahl der Fenster kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      "area": "Floor area, m²",
      "height": "Ceiling height, m",
      "wattsPerM3": "Specific requirement, W/m³",
      "windows": "Number of windows",
    },
    options: {},
    results: {
      "Требуемая мощность": "Required power",
      "В ваттах": "In watts",
      "Объём помещения": "Room volume",
      "Норма на объём": "Requirement per volume",
      "Надбавка на окна": "Window allowance",
      "Проверьте данные": "Check the values",
    },
    values: {
      "кВт": "kW",
      "Вт/м³": "W/m³",
      "Вт": "W",
      "м³": "m³",
      "Площадь должна быть больше нуля": "The floor area must be greater than zero",
      "Высота потолка должна быть больше нуля": "The ceiling height must be greater than zero",
      "Удельная норма должна быть больше нуля": "The specific requirement must be greater than zero",
      "Число окон не может быть отрицательным": "The number of windows cannot be negative",
    },
  },
  uk: {
    fields: {
      "area": "Площа приміщення, м²",
      "height": "Висота стелі, м",
      "wattsPerM3": "Питома норма, Вт/м³",
      "windows": "Кількість вікон",
    },
    options: {},
    results: {
      "Требуемая мощность": "Потрібна потужність",
      "В ваттах": "У ватах",
      "Объём помещения": "Об'єм приміщення",
      "Норма на объём": "Норма на об'єм",
      "Надбавка на окна": "Надбавка на вікна",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "кВт": "кВт",
      "Вт/м³": "Вт/м³",
      "Вт": "Вт",
      "м³": "м³",
      "Площадь должна быть больше нуля": "Площа має бути більшою за нуль",
      "Высота потолка должна быть больше нуля": "Висота стелі має бути більшою за нуль",
      "Удельная норма должна быть больше нуля": "Питома норма має бути більшою за нуль",
      "Число окон не может быть отрицательным": "Кількість вікон не може бути від'ємною",
    },
  },
};
