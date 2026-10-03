import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "ingredients": "Название, граммы, ккал на 100 г. Используйте данные для того же состояния продукта; все ингредиенты считаются потреблёнными.",
    "servings": "Не меньше 1: число равных порционных эквивалентов может быть дробным; это не число людей."
  },
  "en": {
    "ingredients": "Name, grams, kcal per 100 g. Match the product’s state; all listed ingredients are assumed consumed.",
    "servings": "At least 1: equal serving equivalents may be fractional; this is not a headcount."
  },
  "uk": {
    "ingredients": "Назва, грами, ккал на 100 г. Узгодьте стан продукту; усі вказані інгредієнти вважаються спожитими.",
    "servings": "Не менше 1: рівні порційні еквіваленти можуть бути дробовими; це не кількість людей."
  },
  "de": {
    "ingredients": "Name, Gramm, kcal je 100 g. Zustand des Lebensmittels abgleichen; alle Zutaten gelten als verzehrt.",
    "servings": "Mindestens 1: gleiche Portionsäquivalente dürfen gebrochen sein; keine Personenzahl."
  },
  "es": {
    "ingredients": "Nombre, gramos, kcal por 100 g. Coincide con el estado del alimento; se supone consumo de todos los ingredientes.",
    "servings": "Al menos 1: equivalentes de raciones iguales pueden ser fraccionarios; no es número de personas."
  }
});
export const contextualField = help;
