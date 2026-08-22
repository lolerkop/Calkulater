import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Срок погашения': 'Payoff term', 'Переплата процентами': 'Interest paid',
  'Выплачено всего': 'Total paid', 'Доля переплаты': 'Interest as a share of the debt',
  'Первый месяц: проценты': 'First month: interest', 'Первый месяц: тело долга': 'First month: principal',
  'График погашения': 'Payoff schedule', 'Месяц': 'Month', 'Платёж': 'Payment',
  'Проценты': 'Interest', 'Основной долг': 'Principal', 'Остаток': 'Balance',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Срок погашения': 'Термін погашення', 'Переплата процентами': 'Переплата відсотками',
  'Выплачено всего': 'Виплачено всього', 'Доля переплаты': 'Частка переплати',
  'Первый месяц: проценты': 'Перший місяць: відсотки', 'Первый месяц: тело долга': 'Перший місяць: тіло боргу',
  'График погашения': 'Графік погашення', 'Месяц': 'Місяць', 'Платёж': 'Платіж',
  'Проценты': 'Відсотки', 'Основной долг': 'Основний борг', 'Остаток': 'Залишок',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { balance: 'Card balance', apr: 'Annual rate, %', payment: 'Monthly payment' },
    options: {},
    results: RESULTS_EN,
    values: {
      'мес': 'mo', 'Показаны первые 36 месяцев': 'Showing the first 36 months',
      'Долг должен быть больше нуля': 'The balance must be greater than zero',
      'Ставка не может быть отрицательной': 'The rate cannot be negative',
      'Платёж должен быть больше нуля': 'The payment must be greater than zero',
      'Платёж не покрывает даже процент — долг не убывает': 'The payment does not even cover the interest — the balance never falls',
      'Срок превышает 600 месяцев — увеличьте платёж': 'The term exceeds 600 months — raise the payment',
    },
  },
  uk: {
    fields: { balance: 'Борг за карткою', apr: 'Річна ставка, %', payment: 'Щомісячний платіж' },
    options: {},
    results: RESULTS_UK,
    values: {
      'мес': 'міс', 'Показаны первые 36 месяцев': 'Показано перші 36 місяців',
      'Долг должен быть больше нуля': 'Борг має бути більшим за нуль',
      'Ставка не может быть отрицательной': "Ставка не може бути від'ємною",
      'Платёж должен быть больше нуля': 'Платіж має бути більшим за нуль',
      'Платёж не покрывает даже процент — долг не убывает': 'Платіж не покриває навіть відсоток — борг не зменшується',
      'Срок превышает 600 месяцев — увеличьте платёж': 'Термін перевищує 600 місяців — збільште платіж',
    },
  },
};
