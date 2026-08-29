import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Ежемесячный платёж': 'Monthly payment', 'Сумма рассрочки': 'Financed amount',
  'Всего к выплате': 'Total payable', 'Переплата': 'Overpayment', 'Последний платёж': 'Final payment',
  'Проверьте данные': 'Check the values',
  'График платежей': 'Payment schedule', 'Месяц': 'Month', 'Платёж': 'Payment', 'Остаток': 'Balance',
};
const RESULTS_UK = {
  'Ежемесячный платёж': 'Щомісячний платіж', 'Сумма рассрочки': 'Сума розстрочки',
  'Всего к выплате': 'Усього до сплати', 'Переплата': 'Переплата', 'Последний платёж': 'Останній платіж',
  'Проверьте данные': 'Перевірте дані',
  'График платежей': 'Графік платежів', 'Месяц': 'Місяць', 'Платёж': 'Платіж', 'Остаток': 'Залишок',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'price': 'Preis',
      'down': 'Anzahlung',
      'months': 'Laufzeit, Monate',
      'markup': 'Aufschlag',
    },
    results: {
      'Ежемесячный платёж': 'Monatsrate',
      'Сумма рассрочки': 'Finanzierter Betrag',
      'Всего к выплате': 'Insgesamt zu zahlen',
      'Переплата': 'Mehrkosten',
      'Последний платёж': 'Letzte Rate',
      'Проверьте данные': 'Prüfe die Werte',
      'График платежей': 'Zahlungsplan',
      'Месяц': 'Monat',
      'Платёж': 'Rate',
      'Остаток': 'Restbetrag',
    },
    values: {
      'Цена должна быть больше нуля': 'Der Preis muss größer als null sein',
      'Первоначальный взнос не может быть отрицательным': 'Die Anzahlung kann nicht negativ sein',
      'Взнос должен быть меньше цены': 'Die Anzahlung muss kleiner als der Preis sein',
      'Срок должен быть хотя бы один месяц': 'Die Laufzeit muss mindestens einen Monat betragen',
      'Срок не может превышать 60 месяцев': 'Die Laufzeit kann 60 Monate nicht übersteigen',
      'Наценка не может быть отрицательной': 'Der Aufschlag kann nicht negativ sein',
    },
  },
  en: {
    fields: { price: 'Price', down: 'Down payment', months: 'Term, months', markup: 'Markup' },
    options: {},
    results: RESULTS_EN,
    values: {
      'Цена должна быть больше нуля': 'The price must be greater than zero',
      'Первоначальный взнос не может быть отрицательным': 'The down payment cannot be negative',
      'Взнос должен быть меньше цены': 'The down payment must be smaller than the price',
      'Срок должен быть хотя бы один месяц': 'The term must be at least one month',
      'Срок не может превышать 60 месяцев': 'The term cannot exceed 60 months',
      'Наценка не может быть отрицательной': 'The markup cannot be negative',
    },
  },
  uk: {
    fields: { price: 'Ціна', down: 'Первісний внесок', months: 'Термін, міс.', markup: 'Націнка' },
    options: {},
    results: RESULTS_UK,
    values: {
      'Цена должна быть больше нуля': 'Ціна має бути більшою за нуль',
      'Первоначальный взнос не может быть отрицательным': 'Первісний внесок не може бути від’ємним',
      'Взнос должен быть меньше цены': 'Внесок має бути меншим за ціну',
      'Срок должен быть хотя бы один месяц': 'Термін має бути щонайменше один місяць',
      'Срок не может превышать 60 месяцев': 'Термін не може перевищувати 60 місяців',
      'Наценка не может быть отрицательной': 'Націнка не може бути від’ємною',
    },
  },
};
