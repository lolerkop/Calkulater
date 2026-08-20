import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      start: 'Audience at the start',
      end: 'Audience at the end',
      periods: 'Number of periods',
    },
    results: {
      'Общий рост': 'Total growth',
      'Рост за период': 'Growth per period',
      'Прирост': 'Net gain',
      'Множитель': 'Multiple',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Начальная аудитория должна быть больше нуля': 'The starting audience must be greater than zero',
      'Конечная аудитория должна быть больше нуля': 'The ending audience must be greater than zero',
      'Число периодов должно быть не меньше одного': 'The number of periods must be at least one',
    },
  },
  uk: {
    fields: {
      start: 'Аудиторія на початку',
      end: 'Аудиторія в кінці',
      periods: 'Кількість періодів',
    },
    results: {
      'Общий рост': 'Загальне зростання',
      'Рост за период': 'Зростання за період',
      'Прирост': 'Чистий приріст',
      'Множитель': 'Множник',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Начальная аудитория должна быть больше нуля': 'Початкова аудиторія має бути більшою за нуль',
      'Конечная аудитория должна быть больше нуля': 'Кінцева аудиторія має бути більшою за нуль',
      'Число периодов должно быть не меньше одного': 'Кількість періодів має бути не меншою за один',
    },
  },
};
