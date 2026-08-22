import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Досок': 'Boards', 'Полезная ширина доски': 'Effective board width',
  'Площадь с запасом': 'Area including waste', 'Перекроют': 'They will cover',
  'Погонных метров доски': 'Linear metres of board', 'Съедает нахлёст': 'Lost to overlap',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Досок': 'Дощок', 'Полезная ширина доски': 'Корисна ширина дошки',
  'Площадь с запасом': 'Площа із запасом', 'Перекроют': 'Перекриють',
  'Погонных метров доски': 'Погонних метрів дошки', 'Съедает нахлёст': "З'їдає нахлест",
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      wall_area: 'Wall area, m²', board_len: 'Board length, m', board_width: 'Board width, m',
      overlap: 'Overlap, m', waste: 'Cutting waste, %',
    },
    options: {},
    results: RESULTS_EN,
    values: {
      'шт': 'pcs', 'м²': 'm²', 'м': 'm',
      'Площадь стены должна быть больше нуля': 'The wall area must be greater than zero',
      'Длина доски должна быть больше нуля': 'The board length must be greater than zero',
      'Нахлёст должен быть меньше ширины доски': 'The overlap must be smaller than the board width',
      'Запас должен быть от 0 до 50 %': 'The waste allowance must be between 0 and 50%',
    },
  },
  uk: {
    fields: {
      wall_area: 'Площа стіни, м²', board_len: 'Довжина дошки, м', board_width: 'Ширина дошки, м',
      overlap: 'Нахлест, м', waste: 'Запас на підрізання, %',
    },
    options: {},
    results: RESULTS_UK,
    values: {
      'шт': 'шт', 'м²': 'м²', 'м': 'м',
      'Площадь стены должна быть больше нуля': 'Площа стіни має бути більшою за нуль',
      'Длина доски должна быть больше нуля': 'Довжина дошки має бути більшою за нуль',
      'Нахлёст должен быть меньше ширины доски': 'Нахлест має бути меншим за ширину дошки',
      'Запас должен быть от 0 до 50 %': 'Запас має бути від 0 до 50 %',
    },
  },
};
