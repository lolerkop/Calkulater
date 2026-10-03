import type { CalculatorContextualField } from '../../lib/platform/types';

const help: Record<string, Record<string, string>> = {
  "ru": {
    "months": "Средний срок в месяцах: допустима положительная дробь, например 8,5.",
    "arpu": "Постоянная месячная выручка с одного клиента; общая валюта с CAC.",
    "churn": "Месячная доля ушедших клиентов больше 0% и не выше 100%; годовой отток имеет другую базу."
  },
  "en": {
    "months": "Average lifetime in months: a positive fraction such as 8.5 is allowed.",
    "arpu": "Constant monthly revenue per customer, in the same currency as CAC.",
    "churn": "Monthly customer churn above 0% and up to 100%; annual churn has a different time base."
  },
  "uk": {
    "months": "Середній строк у місяцях: допустиме додатне дробове значення, наприклад 8,5.",
    "arpu": "Сталий місячний виторг із клієнта, у спільній із CAC валюті.",
    "churn": "Місячна частка клієнтів, що пішли: більша за 0% та не вища за 100%; річна база інша."
  },
  "de": {
    "months": "Mittlere Laufzeit in Monaten: positive Bruchteile wie 8,5 sind zulässig.",
    "arpu": "Gleichbleibender Monatsumsatz je Kunde in derselben Währung wie CAC.",
    "churn": "Monatliche Kundenabwanderung über 0% bis 100%; jährliche Abwanderung nutzt eine andere Zeitbasis."
  },
  "es": {
    "months": "Duración media en meses: se admiten fracciones positivas, como 8,5.",
    "arpu": "Ingreso mensual constante por cliente, en la misma moneda que el CAC.",
    "churn": "Abandono mensual de clientes mayor que 0% y hasta 100%; el anual usa otra base temporal."
  }
};

export const contextualField: CalculatorContextualField = (field, _values, locale) => {
  const subjectHelp = help[locale]?.[field.name];
  return subjectHelp ? { ...field, help: subjectHelp } : field;
};
