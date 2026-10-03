import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "wattsPerM3": "Выбранное допущение Вт/м³, не климатический норматив и не расчёт ограждений.",
    "windows": "Целое число от 0; фиксированные 100 Вт на окно — допущение модели."
  },
  "en": {
    "wattsPerM3": "Selected W/m³ assumption, not a climate standard or envelope calculation.",
    "windows": "Whole count from 0; fixed 100 W per window is a model assumption."
  },
  "uk": {
    "wattsPerM3": "Обране припущення Вт/м³, не кліматична норма й не розрахунок огороджень.",
    "windows": "Ціле число від 0; фіксовані 100 Вт на вікно — припущення моделі."
  },
  "de": {
    "wattsPerM3": "Gewählte W/m³-Annahme, keine Klimanorm oder Hüllflächenberechnung.",
    "windows": "Ganze Zahl ab 0; feste 100 W je Fenster sind Modellannahme."
  },
  "es": {
    "wattsPerM3": "Supuesto W/m³ elegido, no norma climática ni cálculo de cerramientos.",
    "windows": "Entero desde 0; 100 W fijos por ventana son un supuesto del modelo."
  }
});
