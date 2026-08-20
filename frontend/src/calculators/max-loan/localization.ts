import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "income": "Monthly income, $", "dtiPct": "Acceptable debt burden, %", "rate": "Rate, % per year", "years": "Term, years" },
    options: {},
    results: {
      "Максимальная сумма": "Maximum amount",
      "Допустимый платёж": "Affordable payment",
      "Всего выплат": "Total payments",
      "Переплата": "Interest paid",
      "Платежей": "Payments",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Доход должен быть больше нуля": "Income must be greater than zero",
      "Долговая нагрузка должна быть больше нуля": "The debt burden must be greater than zero",
      "Долговая нагрузка не может превышать ста процентов": "The debt burden cannot exceed one hundred percent",
      "Ставка не может быть отрицательной": "The rate cannot be negative",
      "Срок должен быть больше нуля": "The term must be greater than zero",
    },
  },
  uk: {
    fields: { "income": "Дохід на місяць, ₴", "dtiPct": "Припустиме боргове навантаження, %", "rate": "Ставка, % річних", "years": "Строк, років" },
    options: {},
    results: {
      "Максимальная сумма": "Максимальна сума",
      "Допустимый платёж": "Припустимий платіж",
      "Всего выплат": "Усього виплат",
      "Переплата": "Переплата",
      "Платежей": "Платежів",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Доход должен быть больше нуля": "Дохід має бути більшим за нуль",
      "Долговая нагрузка должна быть больше нуля": "Боргове навантаження має бути більшим за нуль",
      "Долговая нагрузка не может превышать ста процентов": "Боргове навантаження не може перевищувати ста відсотків",
      "Ставка не может быть отрицательной": "Ставка не може бути від'ємною",
      "Срок должен быть больше нуля": "Строк має бути більшим за нуль",
    },
  },
};
