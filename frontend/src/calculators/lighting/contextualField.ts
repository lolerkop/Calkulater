import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "norm": "Выбранные люксы для вашей задачи; 150 — пример, а не универсальная норма.",
    "lossFactor": "Доля сохраняющегося света 0,4–1; не коэффициент использования, который принят равным 1."
  },
  "en": {
    "norm": "Selected lux for your task; 150 is an example, not a universal requirement.",
    "lossFactor": "Retained-light fraction 0.4–1; not utilisation, which is assumed 1."
  },
  "uk": {
    "norm": "Обрані люкси для вашого завдання; 150 — приклад, не універсальна норма.",
    "lossFactor": "Частка збереженого світла 0,4–1; не коефіцієнт використання, прийнятий за 1."
  },
  "de": {
    "norm": "Gewählte Lux für die Tätigkeit; 150 ist Beispiel, keine allgemeine Vorgabe.",
    "lossFactor": "Verbleibender Lichtanteil 0,4–1; nicht der mit 1 angenommene Nutzungsgrad."
  },
  "es": {
    "norm": "Lux elegidos para tu tarea; 150 es ejemplo, no requisito universal.",
    "lossFactor": "Fracción de luz conservada 0,4–1; no es utilización, que se supone 1."
  }
});
