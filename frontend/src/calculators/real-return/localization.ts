import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Реальная доходность": "Real return",
    "Грубая оценка разностью": "Rough estimate by subtraction",
    "Расхождение с разностью": "Gap against subtraction",
    "Номинальная ставка": "Nominal rate",
    "Инфляция": "Inflation",
    "Номинальная сумма": "Nominal amount",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Реальная доходность": "Реальна дохідність",
    "Грубая оценка разностью": "Груба оцінка різницею",
    "Расхождение с разностью": "Розбіжність із різницею",
    "Номинальная ставка": "Номінальна ставка",
    "Инфляция": "Інфляція",
    "Номинальная сумма": "Номінальна сума",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { nominal: "Nominal rate, %", inflation: "Inflation, %", amount: "Amount", years: "Years" },
    results: RESULTS_EN,
    values: {
    "п.п.": "pp",
    "₽": "$",
    "Покупательная способность через": "Purchasing power after",
    "Инфляция должна быть больше минус ста процентов": "Inflation must be greater than minus one hundred percent",
    },
  },
  uk: {
    fields: { nominal: "Номінальна ставка, %", inflation: "Інфляція, %", amount: "Сума", years: "Років" },
    results: RESULTS_UK,
    values: {
    "п.п.": "в.п.",
    "₽": "₴",
    "Покупательная способность через": "Купівельна спроможність через",
    "Инфляция должна быть больше минус ста процентов": "Інфляція має бути більшою за мінус сто відсотків",
    },
  },
};
