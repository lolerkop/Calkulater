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
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'principal': 'Anfangsbetrag',
      'rate': 'Jahreszins, %',
      'interest': 'Zinsen über die Laufzeit',
      'years': 'Laufzeit, Jahre',
    },
    options: {
      'interest': 'Zinsertrag',
      'rate': 'Nötiger Zinssatz',
    },
    results: {
      'Проценты': 'Zinsen',
      'Ставка': 'Zinssatz',
      'Итоговая сумма': 'Endbetrag',
      'Проценты за год': 'Zinsen je Jahr',
      'Проценты за срок': 'Zinsen über die Laufzeit',
      'Начальная сумма': 'Anfangsbetrag',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Сумма должна быть больше нуля': 'Der Betrag muss größer als null sein',
      'Срок должен быть больше нуля': 'Die Laufzeit muss größer als null sein',
          "Введите конечные числовые значения.": "Gib endliche Zahlenwerte ein.",
      "Результат вне допустимого диапазона": "Ergebnis außerhalb des unterstützten Bereichs",
      "Выберите корректный режим расчёта.": "Wähle einen gültigen Berechnungsmodus.",
      "Ставка не может быть отрицательной.": "Der Zinssatz darf nicht negativ sein.",
      "Проценты не могут быть отрицательными.": "Der Zinsbetrag darf nicht negativ sein.",
    },
  },
  en: {
    fields: { mode: 'What to find', principal: 'Initial amount', rate: 'Annual rate, %', interest: 'Interest over the term', years: 'Term, years' },
    options: { interest: 'Interest earned', rate: 'Required rate' },
    results: RESULTS_EN,
    values: {
      'Сумма должна быть больше нуля': 'The amount must be greater than zero',
      'Срок должен быть больше нуля': 'The term must be greater than zero',
          "Введите конечные числовые значения.": "Enter finite numerical values.",
      "Результат вне допустимого диапазона": "Result outside the supported range",
      "Выберите корректный режим расчёта.": "Choose a valid calculation mode.",
      "Ставка не может быть отрицательной.": "The rate cannot be negative.",
      "Проценты не могут быть отрицательными.": "The interest amount cannot be negative.",
    },
  },
  uk: {
    fields: { mode: 'Що знайти', principal: 'Початкова сума', rate: 'Річна ставка, %', interest: 'Відсотки за строк', years: 'Строк, років' },
    options: { interest: 'Нараховані відсотки', rate: 'Потрібна ставка' },
    results: RESULTS_UK,
    values: {
      'Сумма должна быть больше нуля': 'Сума має бути більшою за нуль',
      'Срок должен быть больше нуля': 'Строк має бути більшим за нуль',
          "Введите конечные числовые значения.": "Введіть скінченні числові значення.",
      "Результат вне допустимого диапазона": "Результат поза допустимим діапазоном",
      "Выберите корректный режим расчёта.": "Оберіть коректний режим розрахунку.",
      "Ставка не может быть отрицательной.": "Ставка не може бути від’ємною.",
      "Проценты не могут быть отрицательными.": "Сума процентів не може бути від’ємною.",
    },
  },
  es: {
    fields: {
      "mode": "Qué hallar",
      "principal": "Importe inicial",
      "rate": "Tipo anual, %",
      "interest": "Intereses del plazo",
      "years": "Plazo, años",
    },
    options: {
      "interest": "Intereses generados",
      "rate": "Tipo necesario",
    },
    results: {
      "Проценты": "Intereses",
      "Ставка": "Tipo",
      "Итоговая сумма": "Importe final",
      "Проценты за год": "Intereses por año",
      "Проценты за срок": "Intereses del plazo",
      "Начальная сумма": "Importe inicial",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Сумма должна быть больше нуля": "El importe debe ser mayor que cero",
      "Срок должен быть больше нуля": "El plazo debe ser mayor que cero",
          "Введите конечные числовые значения.": "Introduce valores numéricos finitos.",
      "Результат вне допустимого диапазона": "Resultado fuera del intervalo admitido",
      "Выберите корректный режим расчёта.": "Elige un modo de cálculo válido.",
      "Ставка не может быть отрицательной.": "El tipo no puede ser negativo.",
      "Проценты не могут быть отрицательными.": "El importe de intereses no puede ser negativo.",
    },
  },
};
