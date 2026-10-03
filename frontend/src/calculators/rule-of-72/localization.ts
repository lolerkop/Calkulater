import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"rate": "Annual rate, %", "amount": "Starting amount"},
    results: { ...runtimeScalarPhrases("en",[6]),"Удвоение по правилу 72": "Doubling by the rule of 72", "Точный срок удвоения": "Exact doubling time", "Расхождение правила": "How far the rule is off", "Ставка": "Rate", "Сумма после удвоения": "Amount once doubled" },
    values: { ...runtimeScalarPhrases("en",[15, 0, 4, 7]),"% годовых": "% yearly", "лет": "years", "Ставка должна быть больше нуля": "The rate must be greater than zero", "Сумма не может быть отрицательной": "The amount cannot be negative" },
    options: {},
  },
  "uk": {
    fields: {"rate": "Річна ставка, %", "amount": "Початкова сума"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Удвоение по правилу 72": "Подвоєння за правилом 72", "Точный срок удвоения": "Точний строк подвоєння", "Расхождение правила": "Наскільки правило хибить", "Ставка": "Ставка", "Сумма после удвоения": "Сума після подвоєння" },
    values: { ...runtimeScalarPhrases("uk",[16, 1, 6, 9]),"лет": "років", "% годовых": "% річних", "Ставка должна быть больше нуля": "Ставка має бути більшою за нуль", "Сумма не может быть отрицательной": "Сума не може бути від’ємною" },
    options: {},
  },
  "de": {
    fields: {"rate": "Jahreszins, %", "amount": "Anfangsbetrag"},
    results: { ...runtimeScalarPhrases("de",[8]),"Удвоение по правилу 72": "Verdopplung nach der Regel von 72", "Точный срок удвоения": "Genaue Verdopplungszeit", "Расхождение правила": "Abweichung der Faustregel", "Ставка": "Zinssatz", "Сумма после удвоения": "Betrag nach der Verdopplung" },
    values: { ...runtimeScalarPhrases("de",[16, 2, 6, 10]),"% годовых": "% im Jahr", "лет": "Jahre", "Ставка должна быть больше нуля": "Der Zinssatz muss größer als null sein", "Сумма не может быть отрицательной": "Der Betrag darf nicht negativ sein" },
    options: {},
  },
  "es": {
    fields: {"rate": "Tipo anual, %", "amount": "Cantidad inicial"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Удвоение по правилу 72": "Duplicación por la regla del 72", "Точный срок удвоения": "Tiempo exacto de duplicación", "Расхождение правила": "Cuánto se desvía la regla", "Ставка": "Tipo", "Сумма после удвоения": "Cantidad una vez duplicada" },
    values: { ...runtimeScalarPhrases("es",[15, 0, 4, 9]),"% годовых": "% anual", "лет": "años", "Ставка должна быть больше нуля": "El tipo debe ser mayor que cero", "Сумма не может быть отрицательной": "La cantidad no puede ser negativa" },
  },
};
