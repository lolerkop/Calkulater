import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { area: 'Room area, m²', height: 'Ceiling height, m', ach: 'Air changes per hour, 1/h' },
    options: {},
    results: {
      'Требуемый расход воздуха': 'Required airflow', 'Объём помещения': 'Room volume',
      'В литрах в секунду': 'In litres per second', 'Смен воздуха в сутки': 'Air changes per day',
      'В кубометрах в минуту': 'In cubic metres per minute', 'Проверьте данные': 'Check the values',
    },
    values: {
      'м³/ч': 'm³/h', 'м³': 'm³', 'л/с': 'L/s', 'м³/мин': 'm³/min',
      'Площадь помещения должна быть больше нуля': 'The room area must be greater than zero',
      'Высота потолка должна быть больше нуля': 'The ceiling height must be greater than zero',
      'Кратность воздухообмена должна быть больше нуля': 'The air change rate must be greater than zero',
    },
  },
  uk: {
    fields: { area: 'Площа приміщення, м²', height: 'Висота стелі, м', ach: 'Кратність повітрообміну, 1/год' },
    options: {},
    results: {
      'Требуемый расход воздуха': 'Потрібна витрата повітря', 'Объём помещения': 'Об’єм приміщення',
      'В литрах в секунду': 'У літрах за секунду', 'Смен воздуха в сутки': 'Змін повітря за добу',
      'В кубометрах в минуту': 'У кубометрах за хвилину', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м³/ч': 'м³/год', 'м³': 'м³', 'л/с': 'л/с', 'м³/мин': 'м³/хв',
      'Площадь помещения должна быть больше нуля': 'Площа приміщення має бути більшою за нуль',
      'Высота потолка должна быть больше нуля': 'Висота стелі має бути більшою за нуль',
      'Кратность воздухообмена должна быть больше нуля': 'Кратність повітрообміну має бути більшою за нуль',
    },
  },
};
