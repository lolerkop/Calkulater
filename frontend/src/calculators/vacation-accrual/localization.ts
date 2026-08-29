import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'daysPerYear': 'Jahresanspruch, Tage',
      'monthsWorked': 'Gearbeitete Monate',
      'daysUsed': 'Bereits genommene Tage',
    },
    results: {
      'Остаток отпуска': 'Resturlaub',
      'Накоплено': 'Erworben',
      'За месяц': 'Erworben je Monat',
      'Использовано': 'Genommene Tage',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'дн.': 'Tage',
      'Годовая норма отпуска должна быть больше нуля': 'Der Jahresanspruch muss größer als null sein',
      'Отработанные месяцы не могут быть отрицательными': 'Die gearbeiteten Monate können nicht negativ sein',
      'Использованные дни не могут быть отрицательными': 'Die genommenen Tage können nicht negativ sein',
    },
  },
  en: {
    fields: {
      daysPerYear: 'Annual leave entitlement, days',
      monthsWorked: 'Months worked',
      daysUsed: 'Days already taken',
    },
    results: {
      'Остаток отпуска': 'Leave balance',
      'Накоплено': 'Accrued',
      'За месяц': 'Accrued per month',
      'Использовано': 'Days taken',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'дн.': 'd',
      'Годовая норма отпуска должна быть больше нуля': 'The annual entitlement must be greater than zero',
      'Отработанные месяцы не могут быть отрицательными': 'Months worked cannot be negative',
      'Использованные дни не могут быть отрицательными': 'Days taken cannot be negative',
    },
  },
  uk: {
    fields: {
      daysPerYear: 'Річна норма відпустки, днів',
      monthsWorked: 'Відпрацьовано місяців',
      daysUsed: 'Уже використано днів',
    },
    results: {
      'Остаток отпуска': 'Залишок відпустки',
      'Накоплено': 'Накопичено',
      'За месяц': 'За місяць',
      'Использовано': 'Використано',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'дн.': 'дн.',
      'Годовая норма отпуска должна быть больше нуля': 'Річна норма відпустки має бути більшою за нуль',
      'Отработанные месяцы не могут быть отрицательными': 'Відпрацьовані місяці не можуть бути від’ємними',
      'Использованные дни не могут быть отрицательными': 'Використані дні не можуть бути від’ємними',
    },
  },
};
