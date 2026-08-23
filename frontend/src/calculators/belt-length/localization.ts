import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { center: 'Centre distance, mm', d1: 'Small pulley diameter, mm', d2: 'Large pulley diameter, mm' },
    options: {},
    results: {
      'Длина ремня': 'Belt length', 'В метрах': 'In metres',
      'Угол обхвата малого шкива': 'Wrap angle on the small pulley',
      'Передаточное отношение': 'Speed ratio', 'Межосевое расстояние': 'Centre distance',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'мм': 'mm', 'м': 'm', '°': '°',
      'Межосевое расстояние должно быть больше нуля': 'The centre distance must be greater than zero',
      'Диаметр малого шкива должен быть больше нуля': 'The small pulley diameter must be greater than zero',
      'Диаметр большого шкива должен быть больше нуля': 'The large pulley diameter must be greater than zero',
      'Шкивы пересекаются: оси не могут быть ближе суммы радиусов':
        'The pulleys overlap: the centres cannot be closer than the sum of the radii',
    },
  },
  uk: {
    fields: { center: 'Міжосьова відстань, мм', d1: 'Діаметр малого шківа, мм', d2: 'Діаметр великого шківа, мм' },
    options: {},
    results: {
      'Длина ремня': 'Довжина паса', 'В метрах': 'У метрах',
      'Угол обхвата малого шкива': 'Кут обхвату малого шківа',
      'Передаточное отношение': 'Передавальне відношення', 'Межосевое расстояние': 'Міжосьова відстань',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мм': 'мм', 'м': 'м', '°': '°',
      'Межосевое расстояние должно быть больше нуля': 'Міжосьова відстань має бути більшою за нуль',
      'Диаметр малого шкива должен быть больше нуля': 'Діаметр малого шківа має бути більшим за нуль',
      'Диаметр большого шкива должен быть больше нуля': 'Діаметр великого шківа має бути більшим за нуль',
      'Шкивы пересекаются: оси не могут быть ближе суммы радиусов':
        'Шківи перетинаються: осі не можуть бути ближче за суму радіусів',
    },
  },
};
