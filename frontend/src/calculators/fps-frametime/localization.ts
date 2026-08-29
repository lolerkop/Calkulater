import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Результат': 'Result', 'Время кадра': 'Frame time', 'Частота кадров': 'Frame rate',
  'Кадров за минуту': 'Frames per minute', 'Для сравнения, мс': 'For comparison, ms', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Результат': 'Результат', 'Время кадра': 'Час кадру', 'Частота кадров': 'Частота кадрів',
  'Кадров за минуту': 'Кадрів за хвилину', 'Для сравнения, мс': 'Для порівняння, мс', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Richtung',
      'fps': 'Bildrate, FPS',
      'frameTime': 'Bildzeit, ms',
    },
    options: {
      'fps': 'Bildrate → Bildzeit',
      'ms': 'Bildzeit → Bildrate',
    },
    results: {
      'Результат': 'Ergebnis',
      'Время кадра': 'Bildzeit',
      'Частота кадров': 'Bildrate',
      'Кадров за минуту': 'Bilder je Minute',
      'Для сравнения, мс': 'Zum Vergleich, ms',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мс': 'ms',
      '(вычисляется)': '(wird berechnet)',
      'Частота кадров должна быть больше нуля': 'Die Bildrate muss größer als null sein',
      'Время кадра должно быть больше нуля': 'Die Bildzeit muss größer als null sein',
    },
  },
  en: {
    fields: { mode: 'Direction', fps: 'Frame rate, FPS', frameTime: 'Frame time, ms' },
    options: { fps: 'frame rate → frame time', ms: 'frame time → frame rate' },
    results: RESULTS_EN,
    values: {
      'мс': 'ms', '(вычисляется)': '(computed)',
      'Частота кадров должна быть больше нуля': 'The frame rate must be greater than zero',
      'Время кадра должно быть больше нуля': 'The frame time must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Напрямок', fps: 'Частота кадрів, FPS', frameTime: 'Час кадру, мс' },
    options: { fps: 'частота → час кадру', ms: 'час кадру → частота' },
    results: RESULTS_UK,
    values: {
      'мс': 'мс', '(вычисляется)': '(обчислюється)',
      'Частота кадров должна быть больше нуля': 'Частота кадрів має бути більшою за нуль',
      'Время кадра должно быть больше нуля': 'Час кадру має бути більшим за нуль',
    },
  },
};
