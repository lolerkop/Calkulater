import type { CalculatorLocalization } from '../../lib/platform/types';

// Подписи колонок и заголовок таблицы идут через ту же карту results, что и
// строки результата: платформа локализует таблицу этим же путём.
const RESULTS_EN = {
  'Ежемесячный платёж': 'Monthly payment', 'Всего выплат': 'Total paid', 'Переплата': 'Overpayment',
  'Первый месяц: проценты': 'First month: interest', 'Первый месяц: тело': 'First month: principal',
  'Последний платёж': 'Final payment', 'Проверьте данные': 'Check the values',
  'График платежей': 'Payment schedule',
  'Месяц': 'Month', 'Платёж': 'Payment', 'Проценты': 'Interest',
  'Основной долг': 'Principal', 'Остаток': 'Balance',
};
const RESULTS_UK = {
  'Ежемесячный платёж': 'Щомісячний платіж', 'Всего выплат': 'Усього виплат', 'Переплата': 'Переплата',
  'Первый месяц: проценты': 'Перший місяць: відсотки', 'Первый месяц: тело': 'Перший місяць: тіло',
  'Последний платёж': 'Останній платіж', 'Проверьте данные': 'Перевірте дані',
  'График платежей': 'Графік платежів',
  'Месяц': 'Місяць', 'Платёж': 'Платіж', 'Проценты': 'Відсотки',
  'Основной долг': 'Основний борг', 'Остаток': 'Залишок',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { amount: 'Debt amount', rate: 'Rate', months: 'Term, months' },
    options: {},
    results: RESULTS_EN,
    values: {
      'Сумма должна быть больше нуля': 'The amount must be greater than zero',
      'Ставка не может быть отрицательной': 'The rate cannot be negative',
      'Срок должен быть хотя бы один месяц': 'The term must be at least one month',
      'Срок не может превышать 480 месяцев': 'The term cannot exceed 480 months',
    },
  },
  uk: {
    fields: { amount: 'Сума боргу', rate: 'Ставка', months: 'Термін, міс.' },
    options: {},
    results: RESULTS_UK,
    values: {
      'Сумма должна быть больше нуля': 'Сума має бути більшою за нуль',
      'Ставка не может быть отрицательной': 'Ставка не може бути від’ємною',
      'Срок должен быть хотя бы один месяц': 'Термін має бути щонайменше один місяць',
      'Срок не может превышать 480 месяцев': 'Термін не може перевищувати 480 місяців',
    },
  },
  de: {
      fields: {
        'amount': 'Darlehenssumme',
        'rate': 'Zinssatz',
        'months': 'Laufzeit, Monate',
      },
      options: {},
      results: {
        'Ежемесячный платёж': 'Monatliche Rate',
        'Всего выплат': 'Summe aller Zahlungen',
        'Переплата': 'Zinskosten',
        'Первый месяц: проценты': 'Erster Monat: Zinsen',
        'Первый месяц: тело': 'Erster Monat: Tilgung',
        'Последний платёж': 'Schlussrate',
        'Проверьте данные': 'Prüfe die Werte',
        'График платежей': 'Tilgungsplan',
        'Месяц': 'Monat',
        'Платёж': 'Rate',
        'Проценты': 'Zinsen',
        'Основной долг': 'Tilgung',
        'Остаток': 'Restschuld',
      },
      values: {
        'Сумма должна быть больше нуля': 'Der Betrag muss größer als null sein',
        'Ставка не может быть отрицательной': 'Der Zinssatz darf nicht negativ sein',
        'Срок должен быть хотя бы один месяц': 'Die Laufzeit muss mindestens einen Monat betragen',
        'Срок не может превышать 480 месяцев': 'Die Laufzeit darf 480 Monate nicht überschreiten',
      },
  },
};
