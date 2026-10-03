import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "rate": {
    "ru": "Положительный постоянный годовой рост в процентах. Проценты реинвестируются; при зачислении только в конце целого года удвоение наблюдается на следующую целую годовщину.",
    "en": "Positive constant annual growth in percent, with reinvested interest. If interest is credited only at whole-year ends, doubling is observed at the next whole-year anniversary.",
    "uk": "Додатне стале річне зростання у відсотках із реінвестуванням. За зарахування лише наприкінці цілих років подвоєння спостерігається на наступну цілу річницю.",
    "de": "Positives konstantes jährliches Wachstum in Prozent mit Wiederanlage. Bei Gutschrift nur am Ende ganzer Jahre wird die Verdopplung am nächsten ganzen Jahrestermin beobachtet.",
    "es": "Crecimiento anual constante positivo, en porcentaje, con reinversión. Si el interés se abona solo al final de años completos, la duplicación se observa en el siguiente aniversario entero."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const labels = help[field.name];
  return labels ? { ...field, help: labels[locale] ?? labels.en } : field;
};
