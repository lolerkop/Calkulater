import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Проценты': 'Interest', 'Ставка': 'Rate', 'Итоговая сумма': 'Total amount',
  'Проценты за год': 'Interest per year', 'Проценты за срок': 'Interest over the term',
  'Начальная сумма': 'Initial amount', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Проценты': 'Відсотки', 'Ставка': 'Ставка', 'Итоговая сумма': 'Підсумкова сума',
  'Проценты за год': 'Відсотки за рік', 'Проценты за срок': 'Відсотки за строк',
  'Начальная сумма': 'Початкова сума', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'What to find', principal: 'Initial amount', rate: 'Annual rate, %', interest: 'Interest over the term', years: 'Term, years' },
    options: { interest: 'Interest earned', rate: 'Required rate' },
    results: RESULTS_EN,
    values: {
      'Сумма должна быть больше нуля': 'The amount must be greater than zero',
      'Срок должен быть больше нуля': 'The term must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Що знайти', principal: 'Початкова сума', rate: 'Річна ставка, %', interest: 'Відсотки за строк', years: 'Строк, років' },
    options: { interest: 'Нараховані відсотки', rate: 'Потрібна ставка' },
    results: RESULTS_UK,
    values: {
      'Сумма должна быть больше нуля': 'Сума має бути більшою за нуль',
      'Срок должен быть больше нуля': 'Строк має бути більшим за нуль',
    },
  },
};
