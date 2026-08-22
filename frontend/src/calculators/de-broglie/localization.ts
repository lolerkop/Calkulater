import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { mass27: 'Particle mass, ×10⁻²⁷ kg', velocityKmS: 'Speed, km/s' },
    options: {},
    results: {
      'Длина волны': 'Wavelength', 'Импульс': 'Momentum', 'Частота': 'Frequency',
      'В нанометрах': 'In nanometres', 'Кинетическая энергия': 'Kinetic energy',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м': 'm', 'нм': 'nm', 'Гц': 'Hz', 'кг·м/с': 'kg·m/s', 'Дж': 'J',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Скорость должна быть больше нуля': 'The speed must be greater than zero',
    },
  },
  uk: {
    fields: { mass27: 'Маса частинки, ×10⁻²⁷ кг', velocityKmS: 'Швидкість, км/с' },
    options: {},
    results: {
      'Длина волны': 'Довжина хвилі', 'Импульс': 'Імпульс', 'Частота': 'Частота',
      'В нанометрах': 'У нанометрах', 'Кинетическая энергия': 'Кінетична енергія',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м': 'м', 'нм': 'нм', 'Гц': 'Гц', 'кг·м/с': 'кг·м/с', 'Дж': 'Дж',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Скорость должна быть больше нуля': 'Швидкість має бути більшою за нуль',
    },
  },
};
