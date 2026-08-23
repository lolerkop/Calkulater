import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { investment: 'Investment', cashflow: 'Annual cash flow', rate: 'Discount rate, %' },
    options: {},
    results: {
      'Простой срок окупаемости': 'Simple payback period', 'В месяцах': 'In months',
      'Дисконтированный срок': 'Discounted payback period', 'Годовой поток': 'Annual cash flow',
      'Возврат за простой срок': 'Returned over the simple period', 'Проверьте данные': 'Check the values',
    },
    values: {
      'лет': 'years', 'мес': 'months',
      'Вложение должно быть больше нуля': 'The investment must be greater than zero',
      'Годовой денежный поток должен быть больше нуля': 'The annual cash flow must be greater than zero',
      'Ставка дисконтирования не может быть отрицательной': 'The discount rate cannot be negative',
      'При такой ставке дисконтированные потоки не покроют вложение никогда':
        'At this rate the discounted flows will never cover the investment',
    },
  },
  uk: {
    fields: { investment: 'Вкладення, ₴', cashflow: 'Грошовий потік на рік, ₴', rate: 'Ставка дисконтування, %' },
    options: {},
    results: {
      'Простой срок окупаемости': 'Простий термін окупності', 'В месяцах': 'У місяцях',
      'Дисконтированный срок': 'Дисконтований термін', 'Годовой поток': 'Річний потік',
      'Возврат за простой срок': 'Повернення за простий термін', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'лет': 'років', 'мес': 'міс', '₽': '₴',
      'Вложение должно быть больше нуля': 'Вкладення має бути більшим за нуль',
      'Годовой денежный поток должен быть больше нуля': 'Річний грошовий потік має бути більшим за нуль',
      'Ставка дисконтирования не может быть отрицательной': 'Ставка дисконтування не може бути від’ємною',
      'При такой ставке дисконтированные потоки не покроют вложение никогда':
        'За такої ставки дисконтовані потоки ніколи не покриють вкладення',
    },
  },
};
