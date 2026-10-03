import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "years": "Положительный возраст; дробные годы поддерживаются во всех участках условной шкалы. Результат не определяет здоровье или срок жизни."
  },
  "en": {
    "years": "Positive age; fractional years work in every segment of the illustrative scale. The result determines neither health nor lifespan."
  },
  "uk": {
    "years": "Додатний вік; дробові роки підтримуються на всіх ділянках умовної шкали. Результат не визначає здоров’я чи тривалість життя."
  },
  "de": {
    "years": "Positives Alter; gebrochene Jahre gelten in allen Abschnitten der illustrativen Skala. Keine Bestimmung von Gesundheit oder Lebensdauer."
  },
  "es": {
    "years": "Edad positiva; años fraccionarios en todos los tramos de la escala ilustrativa. No determina salud ni esperanza de vida."
  }
});
export const contextualField = help;
