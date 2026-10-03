import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "months": {
    "ru": "Плановое покрытие расходов: не меньше одного месяца; дробное значение допустимо, например 1,5 месяца. Число месяцев выбирается вами, а не признаётся достаточным моделью.",
    "en": "Planned expense coverage of at least one month; fractions such as 1.5 months are allowed. You choose the duration; the model does not certify it as sufficient.",
    "uk": "Планове покриття витрат не менше одного місяця; дробове значення допустиме, наприклад 1,5 місяця. Строк обираєте ви, а модель не визнає його достатнім.",
    "de": "Geplante Ausgabendeckung von mindestens einem Monat; Bruchteile wie 1,5 Monate sind möglich. Du wählst die Dauer; das Modell bestätigt keine ausreichende Reserve.",
    "es": "Cobertura prevista de gastos de al menos un mes; se admiten fracciones como 1,5 meses. Tú eliges el plazo; el modelo no certifica que sea suficiente."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const labels = help[field.name];
  return labels ? { ...field, help: labels[locale] ?? labels.en } : field;
};
