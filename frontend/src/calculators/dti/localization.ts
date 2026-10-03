import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"payments": "Monthly debt payments", "income": "Monthly income before tax"},
    results: { ...runtimeScalarPhrases("en",[6]),"Кредитная нагрузка": "Debt-to-income ratio", "Оценка": "Assessment", "Остаётся после платежей": "Left after payments", "Платежи по долгам": "Debt payments" },
    values: { ...runtimeScalarPhrases("en",[2, 0, 4, 7]),"Комфортная": "Comfortable", "Повышенная": "Elevated", "Высокая": "High", "Платежи не могут быть отрицательными": "Debt payments cannot be negative", "До 30 % (условная зона)": "Up to 30% (illustrative band)", "От 30 до 43 % (условная зона)": "Above 30% through 43% (illustrative band)", "Выше 43 % (условная зона)": "Above 43% (illustrative band)" },
    options: {},
  },
  "uk": {
    fields: {"payments": "Щомісячні платежі за боргами", "income": "Місячний дохід до податків"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Кредитная нагрузка": "Кредитне навантаження", "Оценка": "Оцінка", "Остаётся после платежей": "Залишається після платежів", "Платежи по долгам": "Платежі за боргами" },
    values: { ...runtimeScalarPhrases("uk",[3, 1, 6, 9]),"Комфортная": "Комфортне", "Повышенная": "Підвищене", "Высокая": "Високе", "Платежи не могут быть отрицательными": "Боргові платежі не можуть бути від’ємними", "До 30 % (условная зона)": "До 30 % (умовна зона)", "От 30 до 43 % (условная зона)": "Понад 30 % до 43 % (умовна зона)", "Выше 43 % (условная зона)": "Понад 43 % (умовна зона)" },
    options: {},
  },
  "de": {
    fields: {"payments": "Monatliche Kreditraten", "income": "Monatliches Bruttoeinkommen"},
    results: { ...runtimeScalarPhrases("de",[8]),"Кредитная нагрузка": "Schuldendienstquote", "Оценка": "Einordnung", "Остаётся после платежей": "Bleibt nach den Raten", "Платежи по долгам": "Kreditraten" },
    values: { ...runtimeScalarPhrases("de",[3, 2, 6, 10]),"Комфортная": "Bequem", "Повышенная": "Erhöht", "Высокая": "Hoch", "Платежи не могут быть отрицательными": "Schuldenzahlungen dürfen nicht negativ sein", "До 30 % (условная зона)": "Bis 30 % (beispielhafte Zone)", "От 30 до 43 % (условная зона)": "Über 30 % bis 43 % (beispielhafte Zone)", "Выше 43 % (условная зона)": "Über 43 % (beispielhafte Zone)" },
    options: {},
  },
  "es": {
    fields: {"payments": "Cuotas de deuda mensuales", "income": "Ingresos mensuales antes de impuestos"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Кредитная нагрузка": "Ratio deuda-ingresos", "Оценка": "Valoración", "Остаётся после платежей": "Queda tras las cuotas", "Платежи по долгам": "Cuotas de deuda" },
    values: { ...runtimeScalarPhrases("es",[2, 0, 4, 9]),"Комфортная": "Cómoda", "Повышенная": "Elevada", "Высокая": "Alta", "Платежи не могут быть отрицательными": "Los pagos de deuda no pueden ser negativos", "До 30 % (условная зона)": "Hasta 30 % (zona ilustrativa)", "От 30 до 43 % (условная зона)": "Más de 30 % hasta 43 % (zona ilustrativa)", "Выше 43 % (условная зона)": "Más de 43 % (zona ilustrativa)" },
  },
};
