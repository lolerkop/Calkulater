import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "factor": "Готовый вес ÷ исходный сухой или сырой вес. Измерьте свою партию; коэффициент не определяет потери калорий.",
    "kcalPer100Raw": "Ккал на 100 г исходного продукта; 0 допустим. Модель сохраняет эту энергию, без добавленного масла и отброшенного жира."
  },
  "en": {
    "factor": "Cooked weight ÷ original dry or raw weight. Measure your batch; the factor does not determine calorie losses.",
    "kcalPer100Raw": "Kcal per 100 g original product; 0 is allowed. Energy is conserved by assumption, excluding added oil and discarded fat."
  },
  "uk": {
    "factor": "Готова вага ÷ вихідна суха або сира вага. Виміряйте свою партію; коефіцієнт не визначає втрати калорій.",
    "kcalPer100Raw": "Ккал на 100 г вихідного продукту; 0 допустимий. Енергія зберігається за припущенням, без доданої олії та відкинутого жиру."
  },
  "de": {
    "factor": "Gargewicht ÷ ursprüngliches Trocken- oder Rohgewicht. Eigene Charge messen; der Faktor bestimmt keinen Kalorienverlust.",
    "kcalPer100Raw": "kcal je 100 g Ausgangsprodukt; 0 erlaubt. Energieerhaltung wird angenommen, ohne zugesetztes Öl oder verworfenes Fett."
  },
  "es": {
    "factor": "Peso cocinado ÷ peso original seco o crudo. Mide tu tanda; el factor no determina pérdidas de energía.",
    "kcalPer100Raw": "Kcal por 100 g de producto original; admite 0. Energía conservada por supuesto, sin aceite añadido ni grasa descartada."
  }
});
export const contextualField = help;
