import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'monthlyExpenses': 'Monatsausgaben, €',
      'months': 'Gewünschte Deckung, Monate',
      'saved': 'Bereits zurückgelegt, €',
    },
    results: {
      'Цель подушки': 'Ziel des Notgroschens',
      'Не хватает': 'Noch fehlend',
      'Уже покрыто месяцев': 'Bereits gedeckte Monate',
      'Готовность': 'Fortschritt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Месячные расходы должны быть больше нуля': 'Die Monatsausgaben müssen größer als null sein',
      'Запас должен быть не меньше одного месяца': 'Die Deckung muss mindestens einen Monat betragen',
      'Накопленное не может быть отрицательным': 'Der zurückgelegte Betrag kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      monthlyExpenses: 'Monthly expenses, ₽',
      months: 'Months of cover wanted',
      saved: 'Already saved, ₽',
    },
    results: {
      'Цель подушки': 'Fund target',
      'Не хватает': 'Still needed',
      'Уже покрыто месяцев': 'Months already covered',
      'Готовность': 'Progress',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Месячные расходы должны быть больше нуля': 'Monthly expenses must be greater than zero',
      'Запас должен быть не меньше одного месяца': 'The cover must be at least one month',
      'Накопленное не может быть отрицательным': 'The saved amount cannot be negative',
    },
  },
  uk: {
    fields: {
      monthlyExpenses: 'Місячні витрати, ₽',
      months: 'Бажаний запас, місяців',
      saved: 'Уже накопичено, ₽',
    },
    results: {
      'Цель подушки': 'Ціль подушки',
      'Не хватает': 'Не вистачає',
      'Уже покрыто месяцев': 'Уже покрито місяців',
      'Готовность': 'Готовність',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Месячные расходы должны быть больше нуля': 'Місячні витрати мають бути більшими за нуль',
      'Запас должен быть не меньше одного месяца': 'Запас має бути не меншим за один місяць',
      'Накопленное не может быть отрицательным': 'Накопичене не може бути від’ємним',
    },
  },
};
