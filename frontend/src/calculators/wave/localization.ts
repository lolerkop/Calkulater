import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'What to find',
      v: 'Wave speed, m/s',
      f: 'Frequency, Hz',
      wavelength: 'Wavelength, m',
    },
    options: { lambda: 'wavelength', f: 'frequency', v: 'wave speed' },
    results: {
      'Длина волны': 'Wavelength',
      'Частота': 'Frequency',
      'Скорость': 'Wave speed',
      'Период': 'Period',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м/с': 'm/s', 'Гц': 'Hz', 'м': 'm', 'с': 's',
      'Скорость должна быть больше нуля': 'The wave speed must be greater than zero',
      'Частота должна быть больше нуля': 'The frequency must be greater than zero',
      'Длина волны должна быть больше нуля': 'The wavelength must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти',
      v: 'Швидкість хвилі, м/с',
      f: 'Частота, Гц',
      wavelength: 'Довжина хвилі, м',
    },
    options: { lambda: 'довжину хвилі', f: 'частоту', v: 'швидкість хвилі' },
    results: {
      'Длина волны': 'Довжина хвилі',
      'Частота': 'Частота',
      'Скорость': 'Швидкість',
      'Период': 'Період',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м/с': 'м/с', 'Гц': 'Гц', 'м': 'м', 'с': 'с',
      'Скорость должна быть больше нуля': 'Швидкість має бути більшою за нуль',
      'Частота должна быть больше нуля': 'Частота має бути більшою за нуль',
      'Длина волны должна быть больше нуля': 'Довжина хвилі має бути більшою за нуль',
    },
  },
};
