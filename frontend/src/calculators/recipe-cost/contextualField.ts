import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "ingredients": "Название, количество, цена за ту же единицу. Одна валюта во всех строках; символ результата не выполняет обмен.",
    "servings": "Положительное число равных порционных эквивалентов; дробное значение поддерживается."
  },
  "en": {
    "ingredients": "Name, quantity, price per matching unit. One currency throughout; the result symbol performs no exchange conversion.",
    "servings": "Positive number of equal serving equivalents; fractional values are supported."
  },
  "uk": {
    "ingredients": "Назва, кількість, ціна за ту саму одиницю. Одна валюта в усіх рядках; символ результату не виконує обміну.",
    "servings": "Додатна кількість рівних порційних еквівалентів; дробові значення підтримуються."
  },
  "de": {
    "ingredients": "Name, Menge, Preis je passender Einheit. Eine Währung für alle Zeilen; das Ergebnissymbol rechnet keine Währung um.",
    "servings": "Positive Zahl gleicher Portionsäquivalente; gebrochene Werte werden unterstützt."
  },
  "es": {
    "ingredients": "Nombre, cantidad, precio por unidad coincidente. Una moneda en todas las líneas; el símbolo no convierte divisas.",
    "servings": "Cantidad positiva de equivalentes de raciones iguales; admite fracciones."
  }
});
export const contextualField = help;
