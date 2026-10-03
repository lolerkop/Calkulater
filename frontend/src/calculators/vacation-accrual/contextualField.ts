import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "daysPerYear": "Введённая норма модели, не автоматически выбранное право по стране.",
    "monthsWorked": "От 0 до 12; дробный месяц учитывается пропорционально, без правового округления.",
    "daysUsed": "Дробные использованные дни допустимы; отрицательный остаток не определяет удержание."
  },
  "en": {
    "daysPerYear": "Entered model allowance, not an automatically selected legal entitlement.",
    "monthsWorked": "From 0 to 12; fractional months prorate without legal rounding.",
    "daysUsed": "Fractional used days allowed; a negative balance does not establish a deduction."
  },
  "uk": {
    "daysPerYear": "Введена норма моделі, не автоматично обране право за країною.",
    "monthsWorked": "Від 0 до 12; дробовий місяць пропорційний, без правового округлення.",
    "daysUsed": "Дробові використані дні дозволено; від’ємний залишок не визначає утримання."
  },
  "de": {
    "daysPerYear": "Eingegebener Modelljahreswert, kein automatisch gewählter Rechtsanspruch.",
    "monthsWorked": "Von 0 bis 12; Monatsbruchteile proportional, ohne rechtliche Rundung.",
    "daysUsed": "Gebrochene genommene Tage erlaubt; negativer Rest begründet keinen Abzug."
  },
  "es": {
    "daysPerYear": "Días del modelo introducidos, no derecho legal automático por país.",
    "monthsWorked": "De 0 a 12; meses fraccionarios proporcionales sin redondeo legal.",
    "daysUsed": "Días usados fraccionarios admitidos; saldo negativo no establece deducción."
  }
});
