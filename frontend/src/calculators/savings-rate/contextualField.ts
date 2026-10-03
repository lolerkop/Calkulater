import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "income": {
    "ru": "Фактически полученный доход после налогов за выбранный период. Расходы должны относиться к тому же периоду и той же денежной единице.",
    "en": "Income actually received after tax in the chosen period. Expenses must use the same period and monetary unit.",
    "uk": "Фактично отриманий дохід після податків за обраний період. Витрати мають належати до того самого періоду й грошової одиниці.",
    "de": "Tatsächlich erhaltenes Einkommen nach Steuern im gewählten Zeitraum. Ausgaben müssen denselben Zeitraum und dieselbe Geldeinheit verwenden.",
    "es": "Ingresos efectivamente recibidos después de impuestos en el periodo elegido. Los gastos deben corresponder al mismo periodo y unidad monetaria."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const labels = help[field.name];
  return labels ? { ...field, help: labels[locale] ?? labels.en } : field;
};
