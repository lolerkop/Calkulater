import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "days": "Целые дни от 1 до 31 для выбранного графика; календарь автоматически не рассчитывается.",
    "hours": "Более 0 до 24 часов, дробные смены допустимы; месячное время не округляется до целого."
  },
  "en": {
    "days": "Whole days 1–31 for the selected schedule; no automatic calendar calculation.",
    "hours": "Above 0 up to 24 hours; fractional shifts allowed, no whole-hour monthly rounding."
  },
  "uk": {
    "days": "Цілі дні 1–31 для обраного графіка; календар автоматично не рахується.",
    "hours": "Понад 0 до 24 годин; дробові зміни дозволено, місячний час не округлюється до цілого."
  },
  "de": {
    "days": "Ganze Tage 1–31 des gewählten Plans; keine automatische Kalenderrechnung.",
    "hours": "Über 0 bis 24 Stunden; gebrochene Schichten erlaubt, Monatszeit nicht ganz gerundet."
  },
  "es": {
    "days": "Días enteros 1–31 de la jornada elegida; sin calendario automático.",
    "hours": "Más de 0 hasta 24 horas; admite jornadas fraccionarias, sin redondeo entero mensual."
  }
});
