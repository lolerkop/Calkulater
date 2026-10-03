import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "weight": "Основание массы выбирайте с ветеринаром; при снижении веса может использоваться оценённая идеальная масса.",
    "factor": "Положительный выбранный множитель, не автоматическая рекомендация по виду или активности; наблюдайте массу и упитанность."
  },
  "en": {
    "weight": "Choose the weight basis with your veterinarian; estimated ideal weight may be used for weight reduction.",
    "factor": "Positive selected factor, not an automatic species/activity recommendation; monitor weight and body condition."
  },
  "uk": {
    "weight": "Основу маси обирайте з ветеринаром; для схуднення може використовуватися оцінена ідеальна маса.",
    "factor": "Додатний обраний множник, не автоматична порада за видом чи активністю; стежте за масою й кондицією тіла."
  },
  "de": {
    "weight": "Gewichtsgrundlage mit Tierarzt wählen; zur Gewichtsreduktion kann geschätztes Idealgewicht dienen.",
    "factor": "Positiver gewählter Faktor, keine automatische Art-/Aktivitätsempfehlung; Gewicht und Körperzustand beobachten."
  },
  "es": {
    "weight": "Elige la base de peso con el veterinario; puede usarse peso ideal estimado para reducción de peso.",
    "factor": "Factor positivo elegido, no recomendación automática por especie o actividad; controla peso y condición corporal."
  }
});
export const contextualField = help;
