import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "fromPeriod": "Фиксированная модель: день 8 ч, неделя 40 ч, месяц 168 ч, год 2016 ч.",
    "amount": "База до/после удержаний сохраняется; налог и валютная конвертация не вычисляются."
  },
  "en": {
    "fromPeriod": "Fixed model: day 8 h, week 40 h, month 168 h, year 2016 h.",
    "amount": "Gross/net basis is preserved; no tax or currency conversion is calculated."
  },
  "uk": {
    "fromPeriod": "Фіксована модель: день 8 год, тиждень 40, місяць 168, рік 2016.",
    "amount": "База до/після утримань зберігається; податок і конвертація не обчислюються."
  },
  "de": {
    "fromPeriod": "Festes Modell: Tag 8 h, Woche 40 h, Monat 168 h, Jahr 2016 h.",
    "amount": "Brutto-/Nettobasis bleibt erhalten; keine Steuer- oder Währungsrechnung."
  },
  "es": {
    "fromPeriod": "Modelo fijo: día 8 h, semana 40 h, mes 168 h, año 2016 h.",
    "amount": "Se conserva base bruta/neta; no calcula impuestos ni cambio de moneda."
  }
});
