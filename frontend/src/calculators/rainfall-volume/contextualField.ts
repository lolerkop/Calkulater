import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "coeff": "Доля сбора более 0 до 1; 0,9 — пример, не подтверждённая норма покрытия.",
    "depth": "Миллиметры за конкретное событие; без длительности не задают интенсивность дождя."
  },
  "en": {
    "coeff": "Collection fraction above 0 up to 1; 0.9 is an example, not a verified roof standard.",
    "depth": "Millimetres for a defined event; without duration they do not give rainfall intensity."
  },
  "uk": {
    "coeff": "Частка збору понад 0 до 1; 0,9 — приклад, не підтверджена норма покриття.",
    "depth": "Міліметри за конкретну подію; без тривалості не задають інтенсивність дощу."
  },
  "de": {
    "coeff": "Sammelanteil über 0 bis 1; 0,9 ist Beispiel, keine belegte Dachnorm.",
    "depth": "Millimeter eines bestimmten Ereignisses; ohne Dauer keine Regenintensität."
  },
  "es": {
    "coeff": "Fracción de captación mayor que 0 hasta 1; 0,9 es ejemplo, no norma verificada del tejado.",
    "depth": "Milímetros de un episodio definido; sin duración no indican intensidad."
  }
});
