import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "income": {
    "ru": "Месячный доход до налогов и удержаний для определения gross-income DTI. Остаток ниже также до налогов и обычных расходов; он не равен свободному бюджету.",
    "en": "Monthly income before taxes and deductions for gross-income DTI. The remainder is also before taxes and living costs, not disposable budget.",
    "uk": "Місячний дохід до податків і утримань для DTI за нарахованим доходом. Залишок також до податків і звичайних витрат, а не вільний бюджет.",
    "de": "Monatseinkommen vor Steuern und Abzügen für Brutto-DTI. Auch der Rest liegt vor Steuern und Lebenshaltungskosten und ist kein frei verfügbares Budget.",
    "es": "Ingresos mensuales antes de impuestos y deducciones para DTI bruto. El resto también es previo a impuestos y gastos de vida, no presupuesto disponible."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const labels = help[field.name];
  return labels ? { ...field, help: labels[locale] ?? labels.en } : field;
};
