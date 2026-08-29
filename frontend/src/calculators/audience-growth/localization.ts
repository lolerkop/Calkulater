import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'start': 'Publikum am Anfang',
      'end': 'Publikum am Ende',
      'periods': 'Zahl der Zeiträume',
    },
    results: {
      'Общий рост': 'Gesamtwachstum',
      'Рост за период': 'Wachstum je Zeitraum',
      'Прирост': 'Zuwachs',
      'Множитель': 'Faktor',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Начальная аудитория должна быть больше нуля': 'Das Publikum am Anfang muss größer als null sein',
      'Конечная аудитория должна быть больше нуля': 'Das Publikum am Ende muss größer als null sein',
      'Число периодов должно быть не меньше одного': 'Die Zahl der Zeiträume muss mindestens eins sein',
    },
  },
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
