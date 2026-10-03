import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "minutes_per_kg": "Коэффициент из конкретного рецепта, а не универсальная норма готовности; проверяйте внутреннюю температуру продукта.",
    "rest_pct": "От 0 до 50% времени по модели; этот процент не задаёт обязательный отдых по правилам безопасности."
  },
  "en": {
    "minutes_per_kg": "Use a recipe-specific rate, not a universal doneness rule; check the food’s internal temperature.",
    "rest_pct": "0–50% of model time; this fraction does not set mandatory food-safety resting requirements."
  },
  "uk": {
    "minutes_per_kg": "Коефіцієнт із конкретного рецепта, не універсальна норма готовності; перевіряйте внутрішню температуру продукту.",
    "rest_pct": "Від 0 до 50% модельного часу; частка не задає обов’язкового відпочинку за правилами безпеки."
  },
  "de": {
    "minutes_per_kg": "Rezeptspezifischer Faktor, keine allgemeine Garregel; Kerntemperatur des Produkts prüfen.",
    "rest_pct": "0–50% der Modellzeit; bestimmt keine vorgeschriebene Sicherheitsruhezeit."
  },
  "es": {
    "minutes_per_kg": "Coeficiente de receta concreta, no regla universal de cocción; comprueba temperatura interna del alimento.",
    "rest_pct": "0–50% del tiempo del modelo; no fija reposo obligatorio de seguridad alimentaria."
  }
});
export const contextualField = help;
