import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "balance": "Outstanding balance",
      "oldRate": "Current rate, % a year",
      "oldMonths": "Months left",
      "newRate": "New rate, % a year",
      "newMonths": "New term, months",
      "fee": "Cost of switching",
    },
    options: {},
    results: {
      "Выгода от рефинансирования": "Gain from refinancing",
      "Платёж сейчас": "Payment now",
      "Платёж после": "Payment after",
      "Итого сейчас": "Total now",
      "Итого после": "Total after",
      "Разница в платеже": "Payment difference",
      "Расходы на сделку": "Cost of switching",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Остаток долга должен быть больше нуля": "The outstanding balance must be greater than zero",
      "Срок должен быть не меньше месяца": "The term must be at least one month",
      "Ставка должна быть от 0 до 100 % годовых": "The rate must be between 0 and 100 % a year",
      "Расходы на сделку не могут быть отрицательными": "The cost of switching cannot be negative",
    },
  },
  uk: {
    fields: {
      "balance": "Залишок боргу",
      "oldRate": "Поточна ставка, % річних",
      "oldMonths": "Місяців залишилось",
      "newRate": "Нова ставка, % річних",
      "newMonths": "Новий строк, місяців",
      "fee": "Витрати на перехід",
    },
    options: {},
    results: {
      "Выгода от рефинансирования": "Вигода від рефінансування",
      "Платёж сейчас": "Платіж зараз",
      "Платёж после": "Платіж після",
      "Итого сейчас": "Разом зараз",
      "Итого после": "Разом після",
      "Разница в платеже": "Різниця в платежі",
      "Расходы на сделку": "Витрати на перехід",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Остаток долга должен быть больше нуля": "Залишок боргу має бути більшим за нуль",
      "Срок должен быть не меньше месяца": "Строк має бути щонайменше місяць",
      "Ставка должна быть от 0 до 100 % годовых": "Ставка має бути від 0 до 100 % річних",
      "Расходы на сделку не могут быть отрицательными": "Витрати на перехід не можуть бути від'ємними",
    },
  },
};
