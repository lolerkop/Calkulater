import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'income': 'Monatliches Einkommen, €',
      'dtiPct': 'Vertretbare Schuldendienstquote, %',
      'rate': 'Zinssatz, % im Jahr',
      'years': 'Laufzeit, Jahre',
    },
    results: {
      'Максимальная сумма': 'Höchstbetrag',
      'Допустимый платёж': 'Tragbare Rate',
      'Всего выплат': 'Summe aller Raten',
      'Переплата': 'Gezahlte Zinsen',
      'Платежей': 'Raten',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'Доход должен быть больше нуля': 'Das Einkommen muss größer als null sein',
      'Долговая нагрузка должна быть больше нуля': 'Die Schuldendienstquote muss größer als null sein',
      'Долговая нагрузка не может превышать ста процентов': 'Die Schuldendienstquote kann hundert Prozent nicht übersteigen',
      'Ставка не может быть отрицательной': 'Der Zinssatz kann nicht negativ sein',
      'Срок должен быть больше нуля': 'Die Laufzeit muss größer als null sein',
    },
  },
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
  es: {
    fields: {
      "income": "Ingresos mensuales, €",
      "dtiPct": "Carga de deuda admisible, %",
      "rate": "Tipo, % anual",
      "years": "Plazo, años",
    },
    options: {},
    results: {
      "Максимальная сумма": "Importe máximo",
      "Допустимый платёж": "Cuota admisible",
      "Всего выплат": "Total pagado",
      "Переплата": "Intereses pagados",
      "Платежей": "Cuotas",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "₽": "€",
      "Доход должен быть больше нуля": "Los ingresos deben ser mayores que cero",
      "Долговая нагрузка должна быть больше нуля": "La carga de deuda debe ser mayor que cero",
      "Долговая нагрузка не может превышать ста процентов": "La carga de deuda no puede superar el cien por cien",
      "Ставка не может быть отрицательной": "El tipo no puede ser negativo",
      "Срок должен быть больше нуля": "El plazo debe ser mayor que cero",
    },
  },
};
