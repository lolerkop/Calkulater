import type { CalculatorLocalization } from '../../lib/platform/types';

// Подписи колонок и заголовок таблицы идут через ту же карту results, что и
// строки результата: платформа локализует таблицу этим же путём.
const RESULTS_EN = {
  'Срок погашения': 'Payoff term', 'Переплата процентами': 'Interest paid',
  'Выплачено всего': 'Total paid', 'Первым закрывается': 'First debt closed', 'Долгов': 'Debts',
  'Порядок погашения': 'Payoff order', 'Очередь': 'Order', 'Долг': 'Debt',
  'Закрыт': 'Closed', 'Проценты по нему': 'Interest on it',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Срок погашения': 'Термін погашення', 'Переплата процентами': 'Переплата відсотками',
  'Выплачено всего': 'Виплачено всього', 'Первым закрывается': 'Першим закривається', 'Долгов': 'Боргів',
  'Порядок погашения': 'Порядок погашення', 'Очередь': 'Черга', 'Долг': 'Борг',
  'Закрыт': 'Закритий', 'Проценты по нему': 'Відсотки за ним',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'debts': 'Schulden: Name, Saldo, Jahreszins, Mindestrate',
      'extra': 'Freies Geld je Monat, €',
      'strategy': 'Strategie',
    },
    options: {
      'avalanche': 'Lawine — höchster Zinssatz zuerst',
      'snowball': 'Schneeball — kleinster Saldo zuerst',
    },
    results: {
      'Срок погашения': 'Tilgungsdauer',
      'Переплата процентами': 'Gezahlte Zinsen',
      'Выплачено всего': 'Insgesamt gezahlt',
      'Первым закрывается': 'Zuerst getilgt',
      'Долгов': 'Schulden',
      'Порядок погашения': 'Reihenfolge der Tilgung',
      'Очередь': 'Reihenfolge',
      'Долг': 'Schuld',
      'Закрыт': 'Getilgt',
      'Проценты по нему': 'Zinsen darauf',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мес': 'Mon.',
      'Каждая строка: название, сумма, ставка и минимальный платёж': 'Jede Zeile: Name, Saldo, Zinssatz und Mindestrate',
      'Свободные деньги не могут быть отрицательными': 'Das freie Geld kann nicht negativ sein',
      'Долги не гасятся: платежей не хватает даже на проценты': 'Die Schulden werden nicht getilgt: die Raten reichen nicht einmal für die Zinsen',
    },
  },
  en: {
    fields: {
      debts: 'Debts: name, balance, rate, minimum payment',
      extra: 'Spare money per month, ₽', strategy: 'Strategy',
    },
    options: { avalanche: 'avalanche — highest rate first', snowball: 'snowball — smallest balance first' },
    results: RESULTS_EN,
    values: {
      'мес': 'mo',
      'Каждая строка: название, сумма, ставка и минимальный платёж': 'Each line: name, balance, rate and minimum payment',
      'Свободные деньги не могут быть отрицательными': 'Spare money cannot be negative',
      'Долги не гасятся: платежей не хватает даже на проценты': 'The debts never clear: the payments do not even cover the interest',
    },
  },
  uk: {
    fields: {
      debts: 'Борги: назва, сума, ставка, мінімальний платіж',
      extra: 'Вільні гроші на місяць, ₽', strategy: 'Стратегія',
    },
    options: { avalanche: 'лавина — спершу дорогий борг', snowball: 'сніжна куля — спершу малий борг' },
    results: RESULTS_UK,
    values: {
      'мес': 'міс',
      'Каждая строка: название, сумма, ставка и минимальный платёж': 'Кожен рядок: назва, сума, ставка та мінімальний платіж',
      'Свободные деньги не могут быть отрицательными': 'Вільні гроші не можуть бути від’ємними',
      'Долги не гасятся: платежей не хватает даже на проценты': 'Борги не гасяться: платежів не вистачає навіть на відсотки',
    },
  },
};
