import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Абсолютная разница': 'Absolute difference', 'Относительная разница': 'Relative difference',
  'Было': 'Before', 'Стало': 'After', 'Направление': 'Direction',
};
const RESULTS_UK = {
  'Абсолютная разница': 'Абсолютна різниця', 'Относительная разница': 'Відносна різниця',
  'Было': 'Було', 'Стало': 'Стало', 'Направление': 'Напрямок',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { from: 'Before', to: 'After' },
    results: RESULTS_EN,
    values: {
      'Рост': 'Increase', 'Снижение': 'Decrease', 'Без изменений': 'No change',
      'Не определена при нулевой базе': 'Not defined when the base is zero',
    },
  },
  uk: {
    fields: { from: 'Було', to: 'Стало' },
    results: RESULTS_UK,
    values: {
      'Рост': 'Зростання', 'Снижение': 'Зниження', 'Без изменений': 'Без змін',
      'Не определена при нулевой базе': 'Не визначена за нульової бази',
    },
  },
};
