import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "og": "Относительная плотность SG > 1, не процент сахара и не °P.",
    "factor": "Положительный коэффициент линейной оценки; 131,25 — сохранённая выбранная модель."
  },
  "en": {
    "og": "Specific gravity SG > 1, not sugar percentage or °P.",
    "factor": "Positive linear-estimate factor; 131.25 is the retained selected model."
  },
  "uk": {
    "og": "Відносна густина SG > 1, не відсоток цукру і не °P.",
    "factor": "Додатний коефіцієнт лінійної оцінки; 131,25 — збережена обрана модель."
  },
  "de": {
    "og": "Relative Dichte SG > 1, keine Zuckerprozente oder °P.",
    "factor": "Positiver Faktor der linearen Schätzung; 131,25 ist das erhaltene gewählte Modell."
  },
  "es": {
    "og": "Densidad relativa SG > 1, no porcentaje de azúcar ni °P.",
    "factor": "Factor positivo de estimación lineal; 131,25 es el modelo elegido conservado."
  }
});
export const contextualField = help;
