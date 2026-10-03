import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "years": {
    "ru": "Дробные годы используются без округления. Число периодов равно годам × частоте и может быть дробным; это математическое продолжение модели, а не банковское правило неполного периода.",
    "en": "Fractional years are used without rounding. Period count is years × frequency and may be fractional; this extends the mathematical model rather than a bank partial-period convention.",
    "uk": "Дробові роки використовуються без округлення. Кількість періодів дорівнює рокам × частоті й може бути дробовою; це продовження математичної моделі, а не банківське правило неповного періоду.",
    "de": "Gebrochene Jahre werden nicht gerundet. Periodenzahl = Jahre × Häufigkeit darf gebrochen sein; dies setzt das mathematische Modell fort und ist keine Bankregel für Teilperioden.",
    "es": "Los años fraccionarios no se redondean. Periodos = años × frecuencia puede ser fraccionario; es una prolongación matemática y no una regla bancaria para periodos parciales."
  },
  "rate": {
    "ru": "Номинальная годовая ставка делится на 12, 4 или 1 по выбранной частоте. Эффективная годовая ставка показана отдельно; расходы не включены.",
    "en": "The nominal annual rate is divided by 12, 4 or 1 according to frequency. The effective annual rate is shown separately; fees are excluded.",
    "uk": "Номінальна річна ставка ділиться на 12, 4 або 1 за обраною частотою. Ефективна річна ставка показана окремо; витрати не включено.",
    "de": "Der nominale Jahreszins wird je nach Häufigkeit durch 12, 4 oder 1 geteilt. Der effektive Jahreszins erscheint gesondert; Gebühren sind nicht enthalten.",
    "es": "El tipo nominal anual se divide entre 12, 4 o 1 según la frecuencia. El tipo anual efectivo se muestra aparte; no se incluyen gastos."
  }
};
const amountLabels: Record<string, readonly string[]> = {
  "ru": [
    "Сумма сегодня",
    "Будущая сумма"
  ],
  "en": [
    "Amount today",
    "Future amount"
  ],
  "uk": [
    "Сума сьогодні",
    "Майбутня сума"
  ],
  "de": [
    "Betrag heute",
    "Künftiger Betrag"
  ],
  "es": [
    "Cantidad actual",
    "Cantidad futura"
  ]
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  if (field.name === 'amount') return { ...field, label: (amountLabels[locale] ?? amountLabels.en)[values.mode === 'pv' ? 1 : 0] };
  const labels = help[field.name];
  return labels ? { ...field, help: labels[locale] ?? labels.en } : field;
};
