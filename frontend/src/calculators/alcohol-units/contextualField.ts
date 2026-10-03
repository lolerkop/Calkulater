import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "standard_g": "Граммы этанола на единицу: 10 — пример. США ≈14 г; UK unit — 10 мл ≈8 г, массовая оценка не точно равна объёмной."
  },
  "en": {
    "standard_g": "Grams of ethanol per unit: 10 is an example. US ≈14 g; UK unit 10 mL ≈8 g. Mass and volume estimates are not exact equivalents."
  },
  "uk": {
    "standard_g": "Грами етанолу на одиницю: 10 — приклад. США ≈14 г; UK unit 10 мл ≈8 г, масове наближення не точно дорівнює об’ємному."
  },
  "de": {
    "standard_g": "Gramm Ethanol je Einheit: 10 ist ein Beispiel. USA ≈14 g; UK unit 10 ml ≈8 g, Masse- und Volumennäherung sind nicht exakt gleich."
  },
  "es": {
    "standard_g": "Gramos de etanol por unidad: 10 es ejemplo. EE. UU. ≈14 g; UK unit 10 ml ≈8 g, estimaciones por masa y volumen no son idénticas."
  }
});
export const contextualField = help;
