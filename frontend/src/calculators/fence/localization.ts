import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'length': 'Länge des Zauns, m',
      'span': 'Feldbreite, m',
      'height': 'Höhe des Zauns, m',
      'rails': 'Riegel je Feld',
      'gates': 'Tore und Öffnungen',
    },
    results: {
      'Столбов': 'Pfosten',
      'Секций': 'Felder',
      'Метров лаг': 'Meter Riegel',
      'Площадь зашивки': 'Fläche der Bekleidung',
      'Пролёт': 'Feldbreite',
      'Фактический шаг столбов': 'Tatsächlicher Pfostenabstand',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м': 'm',
      'м²': 'm²',
      'Длина забора должна быть больше нуля': 'Die Länge des Zauns muss größer als null sein',
      'Пролёт должен быть больше нуля': 'Die Feldbreite muss größer als null sein',
      'Высота должна быть больше нуля': 'Die Höhe muss größer als null sein',
      'Лаг должно быть от одной до пяти': 'Es müssen ein bis fünf Riegel sein',
      'Число проёмов не может быть отрицательным': 'Die Zahl der Öffnungen kann nicht negativ sein',
    },
  },
  en: {
    fields: { "length": "Fence length, m", "span": "Bay width, m", "height": "Fence height, m", "rails": "Rails per bay", "gates": "Gates and openings" },
    options: {},
    results: {
      "Столбов": "Posts", "Секций": "Bays", "Метров лаг": "Metres of rail",
      "Площадь зашивки": "Cladding area", "Пролёт": "Bay width",
      "Фактический шаг столбов": "Actual post spacing", "Проверьте данные": "Check the values",
    },
    values: {
      "м": "m", "м²": "m²",
      "Длина забора должна быть больше нуля": "The fence length must be greater than zero",
      "Пролёт должен быть больше нуля": "The bay width must be greater than zero",
      "Высота должна быть больше нуля": "The height must be greater than zero",
      "Лаг должно быть от одной до пяти": "There must be between one and five rails",
      "Число проёмов не может быть отрицательным": "The number of openings cannot be negative",
    },
  },
  uk: {
    fields: { "length": "Довжина паркану, м", "span": "Проліт, м", "height": "Висота паркану, м", "rails": "Лаг на проліт", "gates": "Хвіртки і ворота" },
    options: {},
    results: {
      "Столбов": "Стовпів", "Секций": "Секцій", "Метров лаг": "Метрів лаг",
      "Площадь зашивки": "Площа зашивки", "Пролёт": "Проліт",
      "Фактический шаг столбов": "Фактичний крок стовпів", "Проверьте данные": "Перевірте дані",
    },
    values: {
      "м": "м", "м²": "м²",
      "Длина забора должна быть больше нуля": "Довжина паркану має бути більшою за нуль",
      "Пролёт должен быть больше нуля": "Проліт має бути більшим за нуль",
      "Высота должна быть больше нуля": "Висота має бути більшою за нуль",
      "Лаг должно быть от одной до пяти": "Лаг має бути від однієї до п’яти",
      "Число проёмов не может быть отрицательным": "Кількість прорізів не може бути від’ємною",
    },
  },
};
