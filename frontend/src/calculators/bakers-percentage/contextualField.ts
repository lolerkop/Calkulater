import { createFieldHelp } from '../../lib/platform/financeWave14Input';

const help = createFieldHelp({
  "ru": {
    "flour": "Общая мука, г; включите муку закваски для общего процента и не дублируйте её строкой.",
    "ingredients": "Название и процент от муки. Для воды отдельное слово вода/воды/water/Wasser/agua; вода других продуктов не выделяется."
  },
  "en": {
    "flour": "Total flour in g; include starter flour for overall percentages, without listing it again.",
    "ingredients": "Name and percentage of flour. A standalone water word is recognised in the five supported languages; other ingredients’ moisture is not extracted."
  },
  "uk": {
    "flour": "Усе борошно, г; включіть борошно закваски для загального відсотка й не дублюйте рядком.",
    "ingredients": "Назва й відсоток від борошна. Для води окреме слово вода/water/Wasser/agua; вода інших продуктів не виділяється."
  },
  "de": {
    "flour": "Gesamtmehl in g; Sauerteigmehl für Gesamtprozente einbeziehen, nicht erneut als Zeile.",
    "ingredients": "Name und Mehlprozent. Einzelwort Wasser oder water wird erkannt; weitere Seitensprachen ebenfalls. Wasser anderer Zutaten wird nicht bestimmt."
  },
  "es": {
    "flour": "Harina total en g; incluye harina de masa madre para porcentaje total sin repetirla en una línea.",
    "ingredients": "Nombre y porcentaje de harina. Se reconoce agua o water como palabra independiente y sus equivalentes de otros idiomas; no se extrae humedad de otros productos."
  }
});
export const contextualField = help;
