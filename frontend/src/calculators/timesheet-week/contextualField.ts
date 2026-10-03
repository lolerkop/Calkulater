import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "rate": {
      "ru": "Базовая оплата обычного часа табеля; в этой модели для часов сверх заданной нормы применяется коэффициент 1,5.",
      "en": "Base pay per regular timesheet hour; this model applies a multiplier of 1.5 to hours above the entered threshold.",
      "uk": "Базова оплата звичайної години табеля; у цій моделі до годин понад задану норму застосовується коефіцієнт 1,5.",
      "de": "Grundvergütung je regulärer Arbeitsstunde im Stundenzettel; diese Modellrechnung verwendet oberhalb der eingegebenen Regelstundenzahl den Faktor 1,5.",
      "es": "Tarifa base por hora ordinaria del parte; este modelo aplica un factor de 1,5 a las horas que superan el umbral indicado."
  },
  "normal": {
    "ru": "Часы за выбранный период, дробная норма допустима. Все часы сверх неё получают фиксированный коэффициент 1,5; местные правила не определяются.",
    "en": "Hours for the selected period; fractions are valid. All hours above this receive the fixed 1.5 factor; local rules are not determined.",
    "uk": "Години за вибраний період, дробова норма допустима. Усі години понад неї мають фіксований коефіцієнт 1,5; місцеві правила не визначаються.",
    "de": "Stunden im gewählten Zeitraum, Bruchteile sind möglich. Alles darüber erhält den festen Faktor 1,5; örtliche Regeln werden nicht bestimmt.",
    "es": "Horas del periodo elegido, admite fracciones. Todas las superiores reciben factor fijo 1,5; no determina reglas locales."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const text = help[field.name];
  return text ? { ...field, help: text[locale] ?? text.en } : field;
};
