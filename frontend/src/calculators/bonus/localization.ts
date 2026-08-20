import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      salary: 'Base salary, ₽',
      bonusPct: 'Bonus, % of salary',
      taxPct: 'Income tax rate, %',
    },
    results: {
      'Премия на руки': 'Bonus after tax',
      'Премия до налога': 'Bonus before tax',
      'Налог': 'Tax withheld',
      'Оклад': 'Base salary',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Оклад должен быть больше нуля': 'The salary must be greater than zero',
      'Процент премии не может быть отрицательным': 'The bonus percentage cannot be negative',
      'Ставка налога должна быть от нуля до ста процентов': 'The tax rate must be between zero and one hundred per cent',
    },
  },
  uk: {
    fields: {
      salary: 'Оклад, ₽',
      bonusPct: 'Премія, % від окладу',
      taxPct: 'Ставка податку на доходи, %',
    },
    results: {
      'Премия на руки': 'Премія на руки',
      'Премия до налога': 'Премія до податку',
      'Налог': 'Утриманий податок',
      'Оклад': 'Оклад',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Оклад должен быть больше нуля': 'Оклад має бути більшим за нуль',
      'Процент премии не может быть отрицательным': 'Відсоток премії не може бути від’ємним',
      'Ставка налога должна быть от нуля до ста процентов': 'Ставка податку має бути від нуля до ста відсотків',
    },
  },
};
