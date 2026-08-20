import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      count: 'Number of dice',
      sides: 'Sides per die',
      target: 'Target sum',
    },
    results: {
      'Вероятность суммы': 'Probability of the sum',
      'Благоприятных исходов': 'Favourable outcomes',
      'Всего исходов': 'Total outcomes',
      'Ожидаемая сумма': 'Expected sum',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Кубиков должно быть не меньше одного': 'There must be at least one die',
      'Кубиков не больше десяти': 'At most ten dice',
      'У кубика должно быть не меньше двух граней': 'A die must have at least two sides',
      'Граней не больше ста': 'At most one hundred sides',
      'Сумма должна быть от числа кубиков до числа кубиков, умноженного на число граней': 'The sum must lie between the number of dice and the number of dice times the number of sides',
    },
  },
  uk: {
    fields: {
      count: 'Кількість кубиків',
      sides: 'Граней на кубику',
      target: 'Цільова сума',
    },
    results: {
      'Вероятность суммы': 'Імовірність суми',
      'Благоприятных исходов': 'Сприятливих результатів',
      'Всего исходов': 'Усього результатів',
      'Ожидаемая сумма': 'Очікувана сума',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Кубиков должно быть не меньше одного': 'Кубиків має бути не менше одного',
      'Кубиков не больше десяти': 'Кубиків не більше десяти',
      'У кубика должно быть не меньше двух граней': 'У кубика має бути не менше двох граней',
      'Граней не больше ста': 'Граней не більше ста',
      'Сумма должна быть от числа кубиков до числа кубиков, умноженного на число граней': 'Сума має бути від кількості кубиків до кількості кубиків, помноженої на кількість граней',
    },
  },
};
