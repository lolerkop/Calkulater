import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "ingredients": "Название и количество. По строкам единицы сохраняются; итоговая сумма применима лишь для одной единицы во всех строках.",
    "fromServings": "Положительные порционные эквиваленты, в том числе дробные; не количество гостей.",
    "toServings": "Положительные порционные эквиваленты, в том числе дробные; не количество гостей."
  },
  "en": {
    "ingredients": "Name and quantity. Per-row units stay unchanged; totals are meaningful only with one unit throughout.",
    "fromServings": "Positive serving equivalents, including fractions; not a guest count.",
    "toServings": "Positive serving equivalents, including fractions; not a guest count."
  },
  "uk": {
    "ingredients": "Назва й кількість. Одиниці рядків зберігаються; загальна сума має сенс лише за однієї одиниці в усіх рядках.",
    "fromServings": "Додатні порційні еквіваленти, зокрема дробові; не кількість гостей.",
    "toServings": "Додатні порційні еквіваленти, зокрема дробові; не кількість гостей."
  },
  "de": {
    "ingredients": "Name und Menge. Zeileneinheiten bleiben; Summe ist nur bei einer gemeinsamen Einheit sinnvoll.",
    "fromServings": "Positive Portionsäquivalente, auch gebrochen; keine Gästezahl.",
    "toServings": "Positive Portionsäquivalente, auch gebrochen; keine Gästezahl."
  },
  "es": {
    "ingredients": "Nombre y cantidad. Unidades por línea se conservan; suma válida solo con una unidad común.",
    "fromServings": "Equivalentes positivos de raciones, incluidas fracciones; no número de invitados.",
    "toServings": "Equivalentes positivos de raciones, incluidas fracciones; no número de invitados."
  }
});
export const contextualField = help;
