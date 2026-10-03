import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"amount": "Amount today", "ratePct": "Inflation, % per year", "years": "Term, years"},
    options: {},
    results: { ...runtimeScalarPhrases("en",[6]),"Покупательная способность": "Purchasing power", "Столько же в будущих деньгах": "The same in future money", "Потеряно покупательной способности": "Purchasing power lost", "Доля потери": "Share lost", "Множитель цен": "Price factor" },
    values: { ...runtimeScalarPhrases("en",[15, 12, 9, 0, 4, 7]),"Инфляция не может достигать минус ста процентов": "Inflation cannot reach minus one hundred percent", "Значение слишком велико для расчёта": "The value is too large to compute" },
  },
  "uk": {
    fields: {"amount": "Сума сьогодні", "ratePct": "Інфляція, % на рік", "years": "Строк, років"},
    options: {},
    results: { ...runtimeScalarPhrases("uk",[8]),"Покупательная способность": "Купівельна спроможність", "Столько же в будущих деньгах": "Стільки ж у майбутніх грошах", "Потеряно покупательной способности": "Втрачено купівельної спроможності", "Доля потери": "Частка втрати", "Множитель цен": "Множник цін" },
    values: { ...runtimeScalarPhrases("uk",[16, 13, 11, 1, 6, 9]),"Инфляция не может достигать минус ста процентов": "Інфляція не може сягати мінус ста відсотків", "Значение слишком велико для расчёта": "Значення завелике для обчислення" },
  },
  "de": {
    fields: {"amount": "Betrag heute", "ratePct": "Inflation, % im Jahr", "years": "Zeitraum, Jahre"},
    results: { ...runtimeScalarPhrases("de",[8]),"Покупательная способность": "Kaufkraft", "Столько же в будущих деньгах": "Derselbe Wert in künftigem Geld", "Потеряно покупательной способности": "Verlorene Kaufkraft", "Доля потери": "Anteil des Verlusts", "Множитель цен": "Preisfaktor" },
    values: { ...runtimeScalarPhrases("de",[16, 13, 2, 6, 10]),"Инфляция не может достигать минус ста процентов": "Die Inflation kann minus hundert Prozent nicht erreichen", "Срок должен быть больше нуля": "Der Zeitraum muss größer als null sein", "Значение слишком велико для расчёта": "Der Wert ist zu groß für die Rechnung" },
    options: {},
  },
  "es": {
    fields: {"amount": "Cantidad de hoy", "ratePct": "Inflación, % anual", "years": "Plazo, años"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Покупательная способность": "Poder adquisitivo", "Столько же в будущих деньгах": "Lo mismo en dinero futuro", "Потеряно покупательной способности": "Poder adquisitivo perdido", "Доля потери": "Proporción perdida", "Множитель цен": "Multiplicador de precios" },
    values: { ...runtimeScalarPhrases("es",[15, 10, 0, 4, 9]),"Сумма должна быть больше нуля": "La cantidad debe ser mayor que cero", "Инфляция не может достигать минус ста процентов": "La inflación no puede llegar a menos cien por ciento", "Значение слишком велико для расчёта": "El valor es demasiado grande para calcularlo" },
  },
};
