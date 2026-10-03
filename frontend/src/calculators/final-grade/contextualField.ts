import type { CalculatorContextualField } from '../../lib/platform/types';
const help = {
  "ru": {
    "current": "Средняя оценка завершённой части до применения её веса, не уже начисленные пункты итоговой."
  },
  "en": {
    "current": "Mean for the completed portion before weighting, not points already added to the final score."
  },
  "uk": {
    "current": "Середня оцінка завершеної частини до застосування ваги, не вже нараховані підсумкові пункти."
  },
  "de": {
    "current": "Durchschnitt des abgeschlossenen Teils vor der Gewichtung, keine bereits angerechneten Endpunkte."
  },
  "es": {
    "current": "Media de la parte completada antes de ponderar, no puntos ya añadidos a la nota final."
  }
};
export const contextualField: CalculatorContextualField = (field, _values, locale) => {
  const entry = help[locale as keyof typeof help] ?? help.en;
  const text = entry[field.name as keyof typeof entry];
  return text ? {...field, help: text} : field;
};
