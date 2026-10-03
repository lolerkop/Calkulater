import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"income": "Income for the period", "expenses": "Expenses for the period"},
    results: { ...runtimeScalarPhrases("en",[6]),"Норма сбережений": "Savings rate", "Сбережения за период": "Saved during the period", "Доход": "Income", "Расходы": "Expenses", "Внимание": "Warning" },
    values: { ...runtimeScalarPhrases("en",[2, 0, 4, 7]),"Расходы превышают доход": "Expenses exceed income", "Расходы не могут быть отрицательными": "Expenses cannot be negative" },
    options: {},
  },
  "uk": {
    fields: {"income": "Дохід за період", "expenses": "Витрати за період"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Норма сбережений": "Норма заощаджень", "Сбережения за период": "Заощадження за період", "Доход": "Дохід", "Расходы": "Витрати", "Внимание": "Увага" },
    values: { ...runtimeScalarPhrases("uk",[3, 1, 6, 9]),"Расходы превышают доход": "Витрати перевищують дохід", "Расходы не могут быть отрицательными": "Витрати не можуть бути від’ємними" },
    options: {},
  },
  "de": {
    fields: {"income": "Einkommen im Zeitraum", "expenses": "Ausgaben im Zeitraum"},
    results: { ...runtimeScalarPhrases("de",[8]),"Норма сбережений": "Sparquote", "Сбережения за период": "Im Zeitraum gespart", "Доход": "Einkommen", "Расходы": "Ausgaben", "Внимание": "Achtung" },
    values: { ...runtimeScalarPhrases("de",[3, 2, 6, 10]),"Расходы превышают доход": "Die Ausgaben übersteigen das Einkommen", "Расходы не могут быть отрицательными": "Ausgaben dürfen nicht negativ sein" },
    options: {},
  },
  "es": {
    fields: {"income": "Ingresos del periodo", "expenses": "Gastos del periodo"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Норма сбережений": "Tasa de ahorro", "Сбережения за период": "Ahorrado en el periodo", "Доход": "Ingresos", "Расходы": "Gastos", "Внимание": "Atención" },
    values: { ...runtimeScalarPhrases("es",[2, 0, 4, 9]),"Расходы превышают доход": "Los gastos superan a los ingresos", "Расходы не могут быть отрицательными": "Los gastos no pueden ser negativos" },
  },
};
