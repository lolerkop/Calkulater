import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Большая часть': 'Larger part',
  'Меньшая часть': 'Smaller part',
  'Больший отрезок': 'Larger segment',
  'Меньший отрезок': 'Smaller segment',
  'φ': 'φ',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Большая часть': 'Більша частина',
  'Меньшая часть': 'Менша частина',
  'Больший отрезок': 'Більший відрізок',
  'Меньший отрезок': 'Менший відрізок',
  'φ': 'φ',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was du brauchst',
      'total': 'Länge der Strecke',
      'a': 'Bekannte Größe',
    },
    options: {
      'split': 'eine Strecke teilen',
      'grow': 'den Partner finden',
    },
    results: {
      'Большая часть': 'Größerer Teil',
      'Меньшая часть': 'Kleinerer Teil',
      'Больший отрезок': 'Größere Strecke',
      'Меньший отрезок': 'Kleinere Strecke',
      'φ': 'φ',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Значение должно быть больше нуля': 'Der Wert muss größer als null sein',
      'Длина отрезка должна быть больше нуля': 'Die Länge der Strecke muss größer als null sein',
    },
  },
  en: {
    fields: { mode: 'What you need', total: 'Segment length', a: 'Known size', },
    options: { split: 'split a segment', grow: 'find the partner', },
    results: RESULTS_EN,
    values: {
      'Значение должно быть больше нуля': 'The value must be greater than zero',
      'Длина отрезка должна быть больше нуля': 'The segment length must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Що потрібно', total: 'Довжина відрізка', a: 'Відомий розмір', },
    options: { split: 'поділити відрізок', grow: 'підібрати партнера', },
    results: RESULTS_UK,
    values: {
      'Значение должно быть больше нуля': 'Значення має бути більшим за нуль',
      'Длина отрезка должна быть больше нуля': 'Довжина відрізка має бути більшою за нуль',
    },
  },
  es: {
    fields: {
      "mode": "Qué necesitas",
      "total": "Longitud del segmento",
      "a": "Medida conocida",
    },
    options: {
      "split": "dividir un segmento",
      "grow": "hallar la pareja",
    },
    results: {
      "Большая часть": "Parte mayor",
      "Меньшая часть": "Parte menor",
      "Больший отрезок": "Segmento mayor",
      "Меньший отрезок": "Segmento menor",
      "φ": "φ",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Значение должно быть больше нуля": "El valor debe ser mayor que cero",
      "Длина отрезка должна быть больше нуля": "La longitud del segmento debe ser mayor que cero",
    },
  },
};
