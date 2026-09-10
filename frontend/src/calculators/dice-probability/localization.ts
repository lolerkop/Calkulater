import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'count': 'Zahl der Würfel',
      'sides': 'Seiten je Würfel',
      'target': 'Zielsumme',
    },
    results: {
      'Вероятность суммы': 'Wahrscheinlichkeit der Summe',
      'Благоприятных исходов': 'Günstige Ausgänge',
      'Всего исходов': 'Ausgänge insgesamt',
      'Ожидаемая сумма': 'Erwartete Summe',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Кубиков должно быть не меньше одного': 'Es muss mindestens ein Würfel sein',
      'Кубиков не больше десяти': 'Höchstens zehn Würfel',
      'У кубика должно быть не меньше двух граней': 'Ein Würfel muss mindestens zwei Seiten haben',
      'Граней не больше ста': 'Höchstens hundert Seiten',
      'Сумма должна быть от числа кубиков до числа кубиков, умноженного на число граней': 'Die Summe muss zwischen der Zahl der Würfel und der Zahl der Würfel mal der Zahl der Seiten liegen',
    },
  },
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
  es: {
    fields: {
      "count": "Número de dados",
      "sides": "Caras por dado",
      "target": "Suma objetivo",
    },
    options: {},
    results: {
      "Вероятность суммы": "Probabilidad de la suma",
      "Благоприятных исходов": "Casos favorables",
      "Всего исходов": "Casos totales",
      "Ожидаемая сумма": "Suma esperada",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Кубиков должно быть не меньше одного": "Debe haber al menos un dado",
      "Кубиков не больше десяти": "Como máximo diez dados",
      "У кубика должно быть не меньше двух граней": "Un dado debe tener al menos dos caras",
      "Граней не больше ста": "Como máximo cien caras",
      "Сумма должна быть от числа кубиков до числа кубиков, умноженного на число граней": "La suma debe estar entre el número de dados y el número de dados por el número de caras",
    },
  },
};
