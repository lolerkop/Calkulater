import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "income": {
    "ru": "Месячный доход после налогов и обязательных удержаний. Форма распределяет только эту сумму; фактические расходы не вводятся.",
    "en": "Monthly income after tax and mandatory deductions. The form allocates this amount only; actual expenses are not entered.",
    "uk": "Місячний дохід після податків та обов’язкових утримань. Форма розподіляє лише цю суму; фактичні витрати не вводяться.",
    "de": "Monatseinkommen nach Steuern und Pflichtabzügen. Das Formular verteilt nur diesen Betrag; tatsächliche Ausgaben werden nicht eingegeben.",
    "es": "Ingresos mensuales después de impuestos y deducciones obligatorias. El formulario solo distribuye esa cantidad; no se introducen gastos reales."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const labels = help[field.name];
  return labels ? { ...field, help: labels[locale] ?? labels.en } : field;
};
