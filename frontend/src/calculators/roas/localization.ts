import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "ROAS": "ROAS",
    "ROAS в процентах": "ROAS as a percentage",
    "ROI": "ROI",
    "Прибыль": "Profit",
    "Точка окупаемости по доходу": "Break-even revenue",
    "ROAS по валовой марже": "ROAS on gross margin",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "ROAS": "ROAS",
    "ROAS в процентах": "ROAS у відсотках",
    "ROI": "ROI",
    "Прибыль": "Прибуток",
    "Точка окупаемости по доходу": "Точка окупності за доходом",
    "ROAS по валовой марже": "ROAS за валовою маржею",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { revenue: "Revenue", cost: "Ad spend", margin: "Gross margin, %" },
    results: RESULTS_EN,
    values: {
    "₽": "$",
    "Доход не может быть отрицательным": "Revenue cannot be negative",
    "Расход должен быть больше нуля": "The spend must be greater than zero",
    "Маржинальность задаётся в диапазоне от 0 до 100 процентов": "Margin is set between 0 and 100 percent",
    },
  },
  uk: {
    fields: { revenue: "Дохід", cost: "Витрати на рекламу", margin: "Валова маржа, %" },
    results: RESULTS_UK,
    values: {
    "₽": "₴",
    "Доход не может быть отрицательным": "Дохід не може бути від’ємним",
    "Расход должен быть больше нуля": "Витрати мають бути більшими за нуль",
    "Маржинальность задаётся в диапазоне от 0 до 100 процентов": "Маржа задається в діапазоні від 0 до 100 відсотків",
    },
  },
};
