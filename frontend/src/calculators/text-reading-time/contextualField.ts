import type { CalculatorContextualField } from '../../lib/platform/types';
const help = {
  "ru": {
    "wpm": "Собственный измеренный темп или явно выбранное допущение; начальное значение не является нормой.",
    "speechWpm": "Независимый темп речи: обе длительности показываются вместе, без отдельного режима «вслух»."
  },
  "en": {
    "wpm": "Your measured pace or an explicit assumption; the initial setting is not a norm.",
    "speechWpm": "A separate speaking pace: both durations appear together, without a separate aloud mode."
  },
  "uk": {
    "wpm": "Власний виміряний темп або явне припущення; початкове значення не є нормою.",
    "speechWpm": "Окремий темп мовлення: обидві тривалості показуються разом, без окремого режиму «вголос»."
  },
  "de": {
    "wpm": "Dein gemessenes Tempo oder eine ausdrückliche Annahme; der Anfangswert ist keine Norm.",
    "speechWpm": "Ein eigenes Sprechtempo: Beide Dauern werden gleichzeitig ohne eigenen Vorlesemodus angezeigt."
  },
  "es": {
    "wpm": "Tu ritmo medido o una suposición explícita; el valor inicial no es una norma.",
    "speechWpm": "Un ritmo de habla independiente: ambas duraciones aparecen juntas, sin un modo separado en voz alta."
  }
};
export const contextualField: CalculatorContextualField = (field, _values, locale) => {
  const entry = help[locale as keyof typeof help] ?? help.en;
  const text = entry[field.name as keyof typeof entry];
  return text ? {...field, help: text} : field;
};
