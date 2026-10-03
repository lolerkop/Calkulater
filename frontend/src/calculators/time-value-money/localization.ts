import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"mode": "What to compute", "amount": "Amount", "rate": "Nominal annual rate, %", "years": "Term, years", "compounding": "Compounding frequency"},
    options: {"fv": "future value", "pv": "present value", "month": "Monthly", "quarter": "Quarterly", "year": "Annually"},
    results: { ...runtimeScalarPhrases("en",[6]),"Будущая стоимость": "Future value", "Текущая стоимость": "Present value", "Множитель роста": "Growth factor", "Эффективная годовая ставка": "Effective annual rate", "Периодов начисления": "Compounding periods", "Исходная сумма": "Original amount" },
    values: { ...runtimeScalarPhrases("en",[15, 12, 11, 9, 0, 4, 7]),"Значение слишком велико для расчёта": "The value is too large to compute", "Выберите направление расчёта стоимости": "Choose the value calculation direction", "Выберите частоту начисления процентов": "Choose the compounding frequency" },
  },
  "uk": {
    fields: {"mode": "Що рахуємо", "amount": "Сума", "rate": "Номінальна річна ставка, %", "years": "Строк, років", "compounding": "Частота нарахування"},
    options: {"fv": "майбутню вартість", "pv": "поточну вартість", "month": "Щомісяця", "quarter": "Щокварталу", "year": "Щороку"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Будущая стоимость": "Майбутня вартість", "Текущая стоимость": "Поточна вартість", "Множитель роста": "Множник зростання", "Эффективная годовая ставка": "Ефективна річна ставка", "Периодов начисления": "Періодів нарахування", "Исходная сумма": "Початкова сума" },
    values: { ...runtimeScalarPhrases("uk",[16, 13, 11, 1, 6, 9]),"Ставка не может быть отрицательной": "Ставка не може бути від'ємною", "Значение слишком велико для расчёта": "Значення завелике для обчислення", "Выберите направление расчёта стоимости": "Оберіть напрям розрахунку вартості", "Выберите частоту начисления процентов": "Оберіть частоту нарахування відсотків" },
  },
  "de": {
    fields: {"mode": "Was berechnet wird", "amount": "Betrag", "rate": "Nominaler Jahreszins, %", "years": "Laufzeit, Jahre", "compounding": "Verzinsungshäufigkeit"},
    options: {"fv": "Endwert", "pv": "Barwert", "month": "monatlich", "quarter": "vierteljährlich", "year": "jährlich"},
    results: { ...runtimeScalarPhrases("de",[8]),"Будущая стоимость": "Endwert", "Текущая стоимость": "Barwert", "Множитель роста": "Wachstumsfaktor", "Эффективная годовая ставка": "Effektiver Jahreszins", "Периодов начисления": "Verzinsungsperioden", "Исходная сумма": "Ausgangsbetrag" },
    values: { ...runtimeScalarPhrases("de",[16, 13, 12, 2, 6, 10]),"Срок должен быть больше нуля": "Die Laufzeit muss größer als null sein", "Значение слишком велико для расчёта": "Der Wert ist zu groß für die Berechnung", "Выберите направление расчёта стоимости": "Wähle die Richtung der Wertberechnung", "Выберите частоту начисления процентов": "Wähle die Verzinsungshäufigkeit" },
  },
  "es": {
    fields: {"mode": "Qué calcular", "amount": "Cantidad", "rate": "Tipo nominal anual, %", "years": "Plazo, años", "compounding": "Frecuencia de capitalización"},
    options: {"fv": "valor futuro", "pv": "valor actual", "month": "Mensual", "quarter": "Trimestral", "year": "Anual"},
    results: { ...runtimeScalarPhrases("es",[7]),"Будущая стоимость": "Valor futuro", "Текущая стоимость": "Valor actual", "Множитель роста": "Multiplicador de crecimiento", "Эффективная годовая ставка": "Tipo efectivo anual", "Периодов начисления": "Periodos de capitalización", "Исходная сумма": "Cantidad original" },
    values: { ...runtimeScalarPhrases("es",[15, 12, 10, 0, 4, 9]),"Сумма должна быть больше нуля": "La cantidad debe ser mayor que cero", "Значение слишком велико для расчёта": "El valor es demasiado grande para calcularlo", "Выберите направление расчёта стоимости": "Elige la dirección del cálculo del valor", "Выберите частоту начисления процентов": "Elige la frecuencia de capitalización" },
  },
};
