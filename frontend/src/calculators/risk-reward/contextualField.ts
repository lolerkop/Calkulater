import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "qty": "Пусто или 0: только расстояния и отношение. Дробный объём допустим; шаг инструмента не проверяется.",
    "target": "Цель не определяет вероятность выигрыша; при неверном порядке цен будет предупреждение."
  },
  "en": {
    "qty": "Blank or 0: distances and ratio only. Fractional size allowed; instrument steps are not checked.",
    "target": "A target does not determine win probability; wrong price ordering gives a warning."
  },
  "uk": {
    "qty": "Порожньо чи 0: лише відстані й відношення. Дробовий обсяг дозволено; крок не перевіряється.",
    "target": "Ціль не визначає імовірності виграшу; неправильний порядок дає попередження."
  },
  "de": {
    "qty": "Leer oder 0: nur Abstände und Verhältnis. Gebrochene Größe erlaubt; Instrumentschritte ungeprüft.",
    "target": "Das Ziel bestimmt keine Gewinnwahrscheinlichkeit; falsche Kursanordnung erzeugt Warnung."
  },
  "es": {
    "qty": "Vacío o 0: solo distancias y ratio. Tamaño fraccionario admitido; sin revisar pasos del instrumento.",
    "target": "El objetivo no determina probabilidad; orden incorrecto genera advertencia."
  }
});
