import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"balance": "Outstanding balance", "oldRate": "Current rate, % a year", "oldMonths": "Months left", "newRate": "New rate, % a year", "newMonths": "New term, months", "fee": "Cost of switching"},
    options: {},
    results: { ...runtimeScalarPhrases("en",[6]),"Выгода от рефинансирования": "Gain from refinancing", "Платёж сейчас": "Payment now", "Платёж после": "Payment after", "Итого сейчас": "Total now", "Итого после": "Total after", "Разница в платеже": "Payment difference", "Расходы на сделку": "Cost of switching" },
    values: { ...runtimeScalarPhrases("en",[15, 10, 0, 4, 7]),"Остаток долга должен быть больше нуля": "The outstanding balance must be greater than zero", "Ставка должна быть от 0 до 100 % годовых": "The rate must be between 0 and 100 % a year", "Расходы на сделку не могут быть отрицательными": "The cost of switching cannot be negative" },
  },
  "uk": {
    fields: {"balance": "Залишок боргу", "oldRate": "Поточна ставка, % річних", "oldMonths": "Місяців залишилось", "newRate": "Нова ставка, % річних", "newMonths": "Новий строк, місяців", "fee": "Витрати на перехід"},
    options: {},
    results: { ...runtimeScalarPhrases("uk",[8]),"Выгода от рефинансирования": "Вигода від рефінансування", "Платёж сейчас": "Платіж зараз", "Платёж после": "Платіж після", "Итого сейчас": "Разом зараз", "Итого после": "Разом після", "Разница в платеже": "Різниця в платежі", "Расходы на сделку": "Витрати на перехід" },
    values: { ...runtimeScalarPhrases("uk",[16, 1, 6, 9]),"Остаток долга должен быть больше нуля": "Залишок боргу має бути більшим за нуль", "Срок должен быть не меньше месяца": "Строк має бути щонайменше місяць", "Ставка должна быть от 0 до 100 % годовых": "Ставка має бути від 0 до 100 % річних", "Расходы на сделку не могут быть отрицательными": "Витрати на перехід не можуть бути від'ємними" },
  },
  "de": {
    fields: {"balance": "Restschuld", "oldRate": "Jetziger Zinssatz, % im Jahr", "oldMonths": "Verbleibende Monate", "newRate": "Neuer Zinssatz, % im Jahr", "newMonths": "Neue Laufzeit, Monate", "fee": "Kosten des Wechsels"},
    results: { ...runtimeScalarPhrases("de",[8]),"Выгода от рефинансирования": "Gewinn durch die Umschuldung", "Платёж сейчас": "Rate jetzt", "Платёж после": "Rate danach", "Итого сейчас": "Summe jetzt", "Итого после": "Summe danach", "Разница в платеже": "Unterschied der Rate", "Расходы на сделку": "Kosten des Wechsels" },
    values: { ...runtimeScalarPhrases("de",[16, 11, 2, 6, 10]),"Остаток долга должен быть больше нуля": "Die Restschuld muss größer als null sein", "Ставка должна быть от 0 до 100 % годовых": "Der Zinssatz muss zwischen 0 und 100 % im Jahr liegen", "Расходы на сделку не могут быть отрицательными": "Die Kosten des Wechsels können nicht negativ sein" },
    options: {},
  },
  "es": {
    fields: {"balance": "Deuda pendiente", "oldRate": "Tipo actual, % anual", "oldMonths": "Meses restantes", "newRate": "Tipo nuevo, % anual", "newMonths": "Plazo nuevo, meses", "fee": "Gastos del cambio"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Выгода от рефинансирования": "Ganancia por refinanciar", "Платёж сейчас": "Cuota actual", "Платёж после": "Cuota después", "Итого сейчас": "Total actual", "Итого после": "Total después", "Разница в платеже": "Diferencia de cuota", "Расходы на сделку": "Gastos del cambio" },
    values: { ...runtimeScalarPhrases("es",[15, 11, 0, 4, 9]),"Остаток долга должен быть больше нуля": "La deuda pendiente debe ser mayor que cero", "Ставка должна быть от 0 до 100 % годовых": "El tipo debe estar entre el 0 y el 100 % anual", "Расходы на сделку не могут быть отрицательными": "Los gastos del cambio no pueden ser negativos" },
  },
};
