import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'cells': 'Zellen insgesamt',
      'cellVoltage': 'Zellspannung, V',
      'cellCapacity': 'Zellkapazität, Ah',
      'series': 'Zellen in Reihe',
      'parallel': 'Stränge parallel',
    },
    results: {
      'Напряжение сборки': 'Spannung des Packs',
      'Ёмкость сборки': 'Kapazität des Packs',
      'Энергия': 'Energie',
      'Ячеек': 'Zellen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'В': 'V',
      'А·ч': 'Ah',
      'Вт·ч': 'Wh',
      'Ячеек должно быть не меньше одной': 'Es muss mindestens eine Zelle sein',
      'Напряжение ячейки должно быть больше нуля': 'Die Zellspannung muss größer als null sein',
      'Ёмкость ячейки должна быть больше нуля': 'Die Zellkapazität muss größer als null sein',
      'Число групп должно быть не меньше одной': 'Es muss mindestens eine Gruppe sein',
      'Последовательных × параллельных должно равняться числу ячеек': 'Reihe × parallel muss der Zahl der Zellen entsprechen',
    },
  },
  en: {
    fields: {
      cells: 'Total cells',
      cellVoltage: 'Cell voltage, V',
      cellCapacity: 'Cell capacity, Ah',
      series: 'Cells in series',
      parallel: 'Strings in parallel',
    },
    results: {
      'Напряжение сборки': 'Pack voltage',
      'Ёмкость сборки': 'Pack capacity',
      'Энергия': 'Energy',
      'Ячеек': 'Cells',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'В': 'V', 'А·ч': 'Ah', 'Вт·ч': 'Wh',
      'Ячеек должно быть не меньше одной': 'There must be at least one cell',
      'Напряжение ячейки должно быть больше нуля': 'The cell voltage must be greater than zero',
      'Ёмкость ячейки должна быть больше нуля': 'The cell capacity must be greater than zero',
      'Число групп должно быть не меньше одной': 'There must be at least one group',
      'Последовательных × параллельных должно равняться числу ячеек': 'Series × parallel must equal the total number of cells',
    },
  },
  uk: {
    fields: {
      cells: 'Усього комірок',
      cellVoltage: 'Напруга комірки, В',
      cellCapacity: 'Ємність комірки, А·год',
      series: 'Комірок послідовно',
      parallel: 'Груп паралельно',
    },
    results: {
      'Напряжение сборки': 'Напруга збірки',
      'Ёмкость сборки': 'Ємність збірки',
      'Энергия': 'Енергія',
      'Ячеек': 'Комірок',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'В': 'В', 'А·ч': 'А·год', 'Вт·ч': 'Вт·год',
      'Ячеек должно быть не меньше одной': 'Комірок має бути не менше однієї',
      'Напряжение ячейки должно быть больше нуля': 'Напруга комірки має бути більшою за нуль',
      'Ёмкость ячейки должна быть больше нуля': 'Ємність комірки має бути більшою за нуль',
      'Число групп должно быть не меньше одной': 'Кількість груп має бути не меншою за одну',
      'Последовательных × параллельных должно равняться числу ячеек': 'Послідовних × паралельних має дорівнювати кількості комірок',
    },
  },
};
