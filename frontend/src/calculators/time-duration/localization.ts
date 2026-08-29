import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was berechnet wird',
      'startHour': 'Startstunde',
      'startMinute': 'Startminute',
      'endHour': 'Endstunde',
      'endMinute': 'Endminute',
      'spanHour': 'Dauer, Stunden',
      'spanMinute': 'Dauer, Minuten',
    },
    options: {
      'difference': 'Dauer zwischen zwei Uhrzeiten',
      'add': 'Eine Dauer addieren',
      'subtract': 'Eine Dauer abziehen',
    },
    results: {
      'Продолжительность': 'Dauer',
      'Всего минут': 'Minuten insgesamt',
      'Начало': 'Beginn',
      'Окончание': 'Ende',
      'Переход через полночь': 'Übergang über Mitternacht',
      'Время': 'Uhrzeit',
      'Исходное время': 'Ausgangszeit',
      'Длительность': 'Dauer',
      'Предыдущие сутки': 'Vortag',
      'Следующие сутки': 'Folgetag',
    },
    values: {
      'да': 'ja',
    },
  },
  en: {
    fields: {
      mode: 'What to calculate', startHour: 'Start hour', startMinute: 'Start minute',
      endHour: 'End hour', endMinute: 'End minute', spanHour: 'Duration hours', spanMinute: 'Duration minutes',
    },
    options: { difference: 'Duration between two times', add: 'Add a duration', subtract: 'Subtract a duration' },
    results: {
      'Продолжительность': 'Duration', 'Всего минут': 'Total minutes', 'Начало': 'Start', 'Окончание': 'End',
      'Переход через полночь': 'Crosses midnight', 'Время': 'Time', 'Исходное время': 'Starting time',
      'Длительность': 'Duration', 'Предыдущие сутки': 'Previous day', 'Следующие сутки': 'Next day',
    },
    values: { 'да': 'yes' },
  },
  uk: {
    fields: {
      mode: 'Що розрахувати', startHour: 'Година початку', startMinute: 'Хвилина початку',
      endHour: 'Година завершення', endMinute: 'Хвилина завершення', spanHour: 'Годин тривалості', spanMinute: 'Хвилин тривалості',
    },
    options: { difference: 'Тривалість між моментами', add: 'Додати тривалість', subtract: 'Відняти тривалість' },
    results: {
      'Продолжительность': 'Тривалість', 'Всего минут': 'Усього хвилин', 'Начало': 'Початок', 'Окончание': 'Завершення',
      'Переход через полночь': 'Перехід через опівніч', 'Время': 'Час', 'Исходное время': 'Початковий час',
      'Длительность': 'Тривалість', 'Предыдущие сутки': 'Попередня доба', 'Следующие сутки': 'Наступна доба',
    },
    values: { 'да': 'так' },
  },
};
