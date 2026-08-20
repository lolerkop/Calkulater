import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      span: 'Building span, m',
      rise: 'Ridge rise, m',
      overhang: 'Eaves overhang, m',
    },
    results: {
      'Длина стропила': 'Rafter length',
      'Угол наклона': 'Roof angle',
      'Заложение': 'Horizontal run',
      'Уклон': 'Slope',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м': 'm',
      'Пролёт должен быть больше нуля': 'The span must be greater than zero',
      'Подъём должен быть больше нуля': 'The rise must be greater than zero',
      'Свес не может быть отрицательным': 'The overhang cannot be negative',
    },
  },
  uk: {
    fields: {
      span: 'Проліт будівлі, м',
      rise: 'Підйом коника, м',
      overhang: 'Звис карниза, м',
    },
    results: {
      'Длина стропила': 'Довжина кроквини',
      'Угол наклона': 'Кут нахилу',
      'Заложение': 'Закладення',
      'Уклон': 'Ухил',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Пролёт должен быть больше нуля': 'Проліт має бути більшим за нуль',
      'Подъём должен быть больше нуля': 'Підйом має бути більшим за нуль',
      'Свес не может быть отрицательным': 'Звис не може бути від’ємним',
    },
  },
};
