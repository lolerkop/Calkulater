import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "mode": "Известный объём не требует размеров; для прямоугольника и круга вводите фактическую глубину налива.",
    "flow": "Более 0: измеренный постоянный поток; выберите соответствующую единицу. Утечки и испарение отдельно не считаются."
  },
  "en": {
    "mode": "Known volume needs no dimensions; rectangle and circle use the actual fill depth.",
    "flow": "Above 0: measured constant flow with matching unit. Leaks and evaporation are not calculated separately."
  },
  "uk": {
    "mode": "Відомий об’єм не потребує розмірів; прямокутник і коло використовують фактичну глибину наливу.",
    "flow": "Понад 0: виміряний сталий потік і відповідна одиниця. Витоки й випаровування окремо не рахуються."
  },
  "de": {
    "mode": "Bekanntes Volumen braucht keine Maße; Rechteck und Kreis verwenden tatsächliche Fülltiefe.",
    "flow": "Über 0: gemessener konstanter Zufluss mit passender Einheit. Lecks und Verdunstung fehlen."
  },
  "es": {
    "mode": "Volumen conocido no necesita medidas; rectángulo y círculo usan profundidad real de llenado.",
    "flow": "Más de 0: caudal constante medido y unidad correspondiente. Fugas y evaporación no se calculan aparte."
  }
});
