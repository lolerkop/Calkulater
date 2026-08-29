import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'force': 'Zugkraft, N',
      'area': 'Querschnittsfläche, mm²',
      'length': 'Ausgangslänge, mm',
      'delta': 'Verlängerung, mm',
      'e': 'Elastizitätsmodul, MPa',
    },
    options: {
      'stress': 'die Spannung',
      'modulus': 'der Elastizitätsmodul',
      'elongation': 'die Verlängerung',
    },
    results: {
      'Напряжение': 'Spannung',
      'Относительная деформация': 'Dehnung',
      'Модуль Юнга': 'Elastizitätsmodul',
      'Удлинение': 'Verlängerung',
      'Площадь сечения': 'Querschnittsfläche',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'МПа': 'MPa',
      'мм': 'mm',
      'мм²': 'mm²',
      'Площадь сечения должна быть больше нуля': 'Die Querschnittsfläche muss größer als null sein',
      'Исходная длина должна быть больше нуля': 'Die Ausgangslänge muss größer als null sein',
      'Удлинение не может быть нулевым: делить на него нечего': 'Die Verlängerung kann nicht null sein: dadurch lässt sich nicht teilen',
      'Модуль Юнга должен быть больше нуля': 'Der Elastizitätsmodul muss größer als null sein',
    },
  },
  en: {
    fields: {
      mode: 'What to find', force: 'Tensile force, N', area: 'Cross-section area, mm²',
      length: 'Original length, mm', delta: 'Elongation, mm', e: "Young's modulus, MPa",
    },
    options: { stress: 'stress', modulus: "Young's modulus", elongation: 'elongation' },
    results: {
      'Напряжение': 'Stress', 'Относительная деформация': 'Strain', 'Модуль Юнга': "Young's modulus",
      'Удлинение': 'Elongation', 'Площадь сечения': 'Cross-section area',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'МПа': 'MPa', 'мм': 'mm', 'мм²': 'mm²',
      'Площадь сечения должна быть больше нуля': 'The cross-section area must be greater than zero',
      'Исходная длина должна быть больше нуля': 'The original length must be greater than zero',
      'Удлинение не может быть нулевым: делить на него нечего': 'The elongation cannot be zero: there is nothing to divide by',
      'Модуль Юнга должен быть больше нуля': "Young's modulus must be greater than zero",
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', force: 'Сила розтягу, Н', area: 'Площа перерізу, мм²',
      length: 'Початкова довжина, мм', delta: 'Видовження, мм', e: 'Модуль Юнга, МПа',
    },
    options: { stress: 'напруження', modulus: 'модуль Юнга', elongation: 'видовження' },
    results: {
      'Напряжение': 'Напруження', 'Относительная деформация': 'Відносна деформація',
      'Модуль Юнга': 'Модуль Юнга', 'Удлинение': 'Видовження', 'Площадь сечения': 'Площа перерізу',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'МПа': 'МПа', 'мм': 'мм', 'мм²': 'мм²',
      'Площадь сечения должна быть больше нуля': 'Площа перерізу має бути більшою за нуль',
      'Исходная длина должна быть больше нуля': 'Початкова довжина має бути більшою за нуль',
      'Удлинение не может быть нулевым: делить на него нечего': 'Видовження не може бути нульовим: ділити на нього нічого',
      'Модуль Юнга должен быть больше нуля': 'Модуль Юнга має бути більшим за нуль',
    },
  },
};
