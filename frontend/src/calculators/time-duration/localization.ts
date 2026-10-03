import {dateTimeWave15Phrases} from '../../data/dateTimeWave15ResultPhrases';
import type { CalculatorLocalization } from '../../lib/platform/types';

const previousLocalization: CalculatorLocalization = {
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
  es: {
    fields: {
      "mode": "Qué calcular",
      "startHour": "Hora de inicio",
      "startMinute": "Minuto de inicio",
      "endHour": "Hora de fin",
      "endMinute": "Minuto de fin",
      "spanHour": "Horas de duración",
      "spanMinute": "Minutos de duración",
    },
    options: {
      "difference": "Duración entre dos horas",
      "add": "Sumar una duración",
      "subtract": "Restar una duración",
    },
    results: {
      "Продолжительность": "Duración",
      "Всего минут": "Minutos en total",
      "Начало": "Inicio",
      "Окончание": "Fin",
      "Переход через полночь": "Cruza la medianoche",
      "Время": "Hora",
      "Исходное время": "Hora de partida",
      "Длительность": "Duración",
      "Предыдущие сутки": "Día anterior",
      "Следующие сутки": "Día siguiente",
    },
    values: {
      "да": "sí",
    },
  },
};

const ownedKeys = ["Введите целую длительность: часы от 0 до 999, минуты от 0 до 59", "Введите целые часы от 0 до 23 и минуты от 0 до 59", "Выберите режим расчёта", "Переход вперёд через границу суток", "Переход назад через границу суток"] as const;
export const localization:CalculatorLocalization = Object.fromEntries(['en','uk','de','es'].map(locale=>[locale,{...previousLocalization[locale as keyof typeof previousLocalization],results:{...previousLocalization[locale as keyof typeof previousLocalization]?.results,...dateTimeWave15Phrases(locale,['Переход вперёд через границу суток','Переход назад через границу суток'])},values:{...previousLocalization[locale as keyof typeof previousLocalization]?.values,...dateTimeWave15Phrases(locale,ownedKeys)}}]));
