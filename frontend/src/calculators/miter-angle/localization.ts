import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'corner': 'Eckwinkel, °',
    },
    results: {
      'Угол реза': 'Schnittwinkel',
      'Угол на пиле от 90°': 'Einstellung an der Säge ab 90°',
      'Угол стыка': 'Eckwinkel',
      'Сумма двух резов': 'Summe der beiden Schnitte',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Угол стыка задаётся от 1 до 179 градусов': 'Der Eckwinkel liegt zwischen 1 und 179 Grad',
    },
  },
  en: {
    fields: { corner: 'Corner angle, °' },
    options: {},
    results: {
      'Угол реза': 'Cut angle', 'Угол на пиле от 90°': 'Saw setting from 90°',
      'Угол стыка': 'Corner angle', 'Сумма двух резов': 'Sum of the two cuts',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Угол стыка задаётся от 1 до 179 градусов': 'The corner angle runs from 1 to 179 degrees',
    },
  },
  uk: {
    fields: { corner: 'Кут стику, °' },
    options: {},
    results: {
      'Угол реза': 'Кут різу', 'Угол на пиле от 90°': 'Кут на пилці від 90°',
      'Угол стыка': 'Кут стику', 'Сумма двух резов': 'Сума двох різів',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Угол стыка задаётся от 1 до 179 градусов': 'Кут стику задається від 1 до 179 градусів',
    },
  },
};
