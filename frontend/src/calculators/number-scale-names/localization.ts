import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { value: 'Value', from: 'From scale', to: 'To scale' },
    options: {
      unit: 'units', thousand: 'thousands', lakh: 'lakh', million: 'millions',
      crore: 'crore', billion: 'billions',
    },
    results: {
      'Результат': 'Result', 'В единицах': 'In units', 'В лакхах': 'In lakh',
      'В крорах': 'In crore', 'Отношение шкал': 'Scale ratio', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Значение должно быть больше нуля': 'The value must be greater than zero',
      'Неизвестная шкала': 'Unknown scale',
    },
  },
  uk: {
    fields: { value: 'Значення', from: 'Зі шкали', to: 'У шкалу' },
    options: {
      unit: 'одиниці', thousand: 'тисячі', lakh: 'лакхи', million: 'мільйони',
      crore: 'крори', billion: 'мільярди',
    },
    results: {
      'Результат': 'Результат', 'В единицах': 'В одиницях', 'В лакхах': 'У лакхах',
      'В крорах': 'У крорах', 'Отношение шкал': 'Відношення шкал', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Значение должно быть больше нуля': 'Значення має бути більшим за нуль',
      'Неизвестная шкала': 'Невідома шкала',
    },
  },
};
