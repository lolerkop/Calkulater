import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { wavelengthNm: 'Wavelength, nm' },
    options: {},
    results: {
      'Энергия фотона': 'Photon energy', 'В электронвольтах': 'In electronvolts',
      'Частота': 'Frequency', 'Волновое число': 'Wavenumber', 'Длина волны': 'Wavelength',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Дж': 'J', 'эВ': 'eV', 'Гц': 'Hz', '1/см': '1/cm', 'нм': 'nm',
      'Длина волны должна быть больше нуля': 'The wavelength must be greater than zero',
    },
  },
  uk: {
    fields: { wavelengthNm: 'Довжина хвилі, нм' },
    options: {},
    results: {
      'Энергия фотона': 'Енергія фотона', 'В электронвольтах': 'В електронвольтах',
      'Частота': 'Частота', 'Волновое число': 'Хвильове число', 'Длина волны': 'Довжина хвилі',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Дж': 'Дж', 'эВ': 'еВ', 'Гц': 'Гц', '1/см': '1/см', 'нм': 'нм',
      'Длина волны должна быть больше нуля': 'Довжина хвилі має бути більшою за нуль',
    },
  },
};
