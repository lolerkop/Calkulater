import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "LTV": "LTV",
    "Срок жизни клиента": "Customer lifetime",
    "Средний доход за период": "Average revenue per period",
    "Валовая маржа": "Gross margin",
    "Отношение LTV к CAC": "LTV to CAC ratio",
    "Окупаемость привлечения": "Payback on acquisition",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "LTV": "LTV",
    "Срок жизни клиента": "Строк життя клієнта",
    "Средний доход за период": "Середній дохід за період",
    "Валовая маржа": "Валова маржа",
    "Отношение LTV к CAC": "Відношення LTV до CAC",
    "Окупаемость привлечения": "Окупність залучення",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: "How to derive lifetime", arpu: "Revenue per period", months: "Lifetime, months", churn: "Churn per period, %", margin: "Gross margin, %", cac: "Acquisition cost" },
    options: { months: "by lifetime", churn: "by churn" },
    results: RESULTS_EN,
    values: {
    "₽": "$",
    "мес": "mo",
    "Средний доход должен быть больше нуля": "The average revenue must be greater than zero",
    "Маржа задаётся в диапазоне от 0 до 100 процентов": "Margin is set between 0 and 100 percent",
    "Стоимость привлечения не может быть отрицательной": "The acquisition cost cannot be negative",
    "Отток задаётся в диапазоне от 0 до 100 процентов": "Churn is set between 0 and 100 percent",
    "Срок жизни должен быть больше нуля": "The lifetime must be greater than zero",
    },
  },
  uk: {
    fields: { mode: "Як визначити строк", arpu: "Дохід за період", months: "Строк життя, місяців", churn: "Відтік за період, %", margin: "Валова маржа, %", cac: "Вартість залучення" },
    options: { months: "за строком", churn: "за відтіком" },
    results: RESULTS_UK,
    values: {
    "₽": "₴",
    "мес": "міс",
    "Средний доход должен быть больше нуля": "Середній дохід має бути більшим за нуль",
    "Маржа задаётся в диапазоне от 0 до 100 процентов": "Маржа задається в діапазоні від 0 до 100 відсотків",
    "Стоимость привлечения не может быть отрицательной": "Вартість залучення не може бути від’ємною",
    "Отток задаётся в диапазоне от 0 до 100 процентов": "Відтік задається в діапазоні від 0 до 100 відсотків",
    "Срок жизни должен быть больше нуля": "Строк життя має бути більшим за нуль",
    },
  },
};
