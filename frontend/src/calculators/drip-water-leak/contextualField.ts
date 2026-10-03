import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "drops": "Среднее капель в минуту может быть дробным; измерьте объём за время, если течёт струйка.",
    "dropMl": "0,05 мл — сохранённый пример, а не универсальный размер капли."
  },
  "en": {
    "drops": "Average drips per minute may be fractional; measure volume over time for a stream.",
    "dropMl": "0.05 mL is the retained example, not a universal drop size."
  },
  "uk": {
    "drops": "Середні краплі за хвилину можуть бути дробовими; для струмка виміряйте об’єм за час.",
    "dropMl": "0,05 мл — збережений приклад, не універсальний розмір краплі."
  },
  "de": {
    "drops": "Mittlere Tropfen pro Minute dürfen gebrochen sein; bei Strahl Volumen über Zeit messen.",
    "dropMl": "0,05 ml ist das erhaltene Beispiel, kein allgemeines Tropfenvolumen."
  },
  "es": {
    "drops": "Las gotas medias por minuto pueden ser fraccionarias; para un hilo mide volumen por tiempo.",
    "dropMl": "0,05 ml es el ejemplo conservado, no tamaño universal de gota."
  }
});
