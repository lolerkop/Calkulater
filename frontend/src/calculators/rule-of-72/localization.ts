import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Удвоение по правилу 72': 'Doubling by the rule of 72', 'Точный срок удвоения': 'Exact doubling time',
  'Расхождение правила': 'How far the rule is off', 'Ставка': 'Rate',
  'Сумма после удвоения': 'Amount once doubled', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Удвоение по правилу 72': 'Подвоєння за правилом 72', 'Точный срок удвоения': 'Точний строк подвоєння',
  'Расхождение правила': 'Наскільки правило хибить', 'Ставка': 'Ставка',
  'Сумма после удвоения': 'Сума після подвоєння', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { rate: 'Annual rate, %', amount: 'Starting amount' },
    results: RESULTS_EN,
    values: {
      'лет': 'years', '₽': '$', '% годовых': '% a year',
      'Ставка должна быть больше нуля': 'The rate must be greater than zero',
    },
  },
  uk: {
    fields: { rate: 'Річна ставка, %', amount: 'Початкова сума' },
    results: RESULTS_UK,
    values: {
      'лет': 'років', '₽': '₴', '% годовых': '% річних',
      'Ставка должна быть больше нуля': 'Ставка має бути більшою за нуль',
    },
  },
};
