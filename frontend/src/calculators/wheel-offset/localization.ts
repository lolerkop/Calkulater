import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { width: 'Rim width, inches', offset: 'Offset ET, mm', newOffset: 'New offset ET, mm' },
    options: {},
    results: {
      'Вылет назад': 'Backspacing', 'Ширина диска': 'Rim width',
      'Смещение колеса': 'Wheel shift', 'Куда сместится': 'Direction of the shift',
      'Вылет назад после замены': 'Backspacing after the swap', 'Проверьте данные': 'Check the values',
    },
    values: {
      'мм': 'mm', 'наружу': 'outwards', 'внутрь': 'inwards', 'без смещения': 'no shift',
      'Ширина диска должна быть больше нуля': 'The rim width must be greater than zero',
    },
  },
  uk: {
    fields: { width: 'Ширина диска, дюйми', offset: 'Виліт ET, мм', newOffset: 'Новий виліт ET, мм' },
    options: {},
    results: {
      'Вылет назад': 'Виліт назад', 'Ширина диска': 'Ширина диска',
      'Смещение колеса': 'Зміщення колеса', 'Куда сместится': 'Куди зміститься',
      'Вылет назад после замены': 'Виліт назад після заміни', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мм': 'мм', 'наружу': 'назовні', 'внутрь': 'усередину', 'без смещения': 'без зміщення',
      'Ширина диска должна быть больше нуля': 'Ширина диска має бути більшою за нуль',
    },
  },
};
