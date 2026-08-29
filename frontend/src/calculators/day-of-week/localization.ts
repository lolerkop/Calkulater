import type { CalculatorLocalization } from '../../lib/platform/types';

const WEEK_EN = {
  'понедельник': 'Monday', 'вторник': 'Tuesday', 'среда': 'Wednesday', 'четверг': 'Thursday',
  'пятница': 'Friday', 'суббота': 'Saturday', 'воскресенье': 'Sunday',
};
const WEEK_UK = {
  'понедельник': 'понеділок', 'вторник': 'вівторок', 'среда': 'середа', 'четверг': 'четвер',
  'пятница': 'п’ятниця', 'суббота': 'субота', 'воскресенье': 'неділя',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'date': 'Datum',
    },
    results: {
      'День недели': 'Wochentag',
      'День года': 'Tag des Jahres',
      'Номер недели ISO': 'ISO-Kalenderwoche',
      'Дней в году': 'Tage im Jahr',
      'Выходной': 'Wochenende',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'понедельник': 'Montag',
      'вторник': 'Dienstag',
      'среда': 'Mittwoch',
      'четверг': 'Donnerstag',
      'пятница': 'Freitag',
      'суббота': 'Samstag',
      'воскресенье': 'Sonntag',
      'Да': 'Ja',
      'Нет': 'Nein',
      'последняя неделя предыдущего года': 'letzte Woche des Vorjahres',
      'Введите существующую дату': 'Trage ein Datum ein, das es gibt',
    },
  },
  en: {
    fields: { date: 'Date' },
    results: { 'День недели': 'Day of the week', 'День года': 'Day of the year', 'Номер недели ISO': 'ISO week number', 'Дней в году': 'Days in the year', 'Выходной': 'Weekend', 'Проверьте данные': 'Check the values' },
    values: {
      ...WEEK_EN,
      'Да': 'Yes', 'Нет': 'No',
      'последняя неделя предыдущего года': 'last week of the previous year',
      'Введите существующую дату': 'Enter a date that exists',
    },
  },
  uk: {
    fields: { date: 'Дата' },
    results: { 'День недели': 'День тижня', 'День года': 'День року', 'Номер недели ISO': 'Номер тижня ISO', 'Дней в году': 'Днів у році', 'Выходной': 'Вихідний', 'Проверьте данные': 'Перевірте дані' },
    values: {
      ...WEEK_UK,
      'Да': 'Так', 'Нет': 'Ні',
      'последняя неделя предыдущего года': 'останній тиждень попереднього року',
      'Введите существующую дату': 'Введіть дату, що існує',
    },
  },
};
