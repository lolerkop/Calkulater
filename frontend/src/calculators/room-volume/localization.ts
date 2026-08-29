import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Wie gemessen wird',
      'length': 'Länge',
      'width': 'Breite',
      'height': 'Höhe',
      'area': 'Bodenfläche',
    },
    options: {
      'dimensions': 'über die Raummaße',
      'area': 'über die Bodenfläche',
    },
    results: {
      'Объём помещения': 'Raumvolumen',
      'Площадь пола': 'Bodenfläche',
      'Высота': 'Höhe',
      'Периметр': 'Umfang',
      'Площадь стен': 'Wandfläche',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Высота должна быть больше нуля': 'Die Höhe muss größer als null sein',
      'Длина и ширина должны быть больше нуля': 'Länge und Breite müssen größer als null sein',
      'Площадь должна быть больше нуля': 'Die Bodenfläche muss größer als null sein',
    },
  },
  en: {
    // Ключи `mode`, `height`, `length`, `width`, `area` совпадают с чужими —
    // область видимости делает столкновение невозможным.
    fields: { mode: 'How to measure', length: 'Length', width: 'Width', height: 'Height', area: 'Floor area' },
    options: { dimensions: 'By room dimensions', area: 'By floor area' },
    results: {
      'Объём помещения': 'Room volume', 'Площадь пола': 'Floor area', 'Высота': 'Height',
      'Периметр': 'Perimeter', 'Площадь стен': 'Wall area', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Высота должна быть больше нуля': 'The height must be greater than zero',
      'Длина и ширина должны быть больше нуля': 'Length and width must be greater than zero',
      'Площадь должна быть больше нуля': 'The floor area must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Як вимірювати', length: 'Довжина', width: 'Ширина', height: 'Висота', area: 'Площа підлоги' },
    options: { dimensions: 'За розмірами кімнати', area: 'За площею підлоги' },
    results: {
      'Объём помещения': 'Обʼєм приміщення', 'Площадь пола': 'Площа підлоги', 'Высота': 'Висота',
      'Периметр': 'Периметр', 'Площадь стен': 'Площа стін', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Высота должна быть больше нуля': 'Висота має бути більшою за нуль',
      'Длина и ширина должны быть больше нуля': 'Довжина і ширина мають бути більшими за нуль',
      'Площадь должна быть больше нуля': 'Площа має бути більшою за нуль',
    },
  },
};
