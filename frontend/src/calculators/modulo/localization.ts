import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Остаток': 'Remainder', 'Частное': 'Quotient', 'Проверка': 'Check',
  'Делится нацело': 'Divides evenly', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Остаток': 'Остача', 'Частное': 'Частка', 'Проверка': 'Перевірка',
  'Делится нацело': 'Ділиться націло', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { a: 'Dividend', b: 'Divisor' },
    results: RESULTS_EN,
    values: {
      'Да': 'Yes', 'Нет': 'No',
      'Делимое и делитель должны быть целыми': 'Dividend and divisor must be whole numbers',
      'Делитель не может быть нулём': 'The divisor cannot be zero',
    },
  },
  uk: {
    fields: { a: 'Ділене', b: 'Дільник' },
    results: RESULTS_UK,
    values: {
      'Да': 'Так', 'Нет': 'Ні',
      'Делимое и делитель должны быть целыми': 'Ділене і дільник мають бути цілими',
      'Делитель не может быть нулём': 'Дільник не може бути нулем',
    },
  },
};
