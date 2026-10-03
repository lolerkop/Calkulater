import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"nominal": "Annual return, %", "inflation": "Inflation, %", "amount": "Amount", "years": "Years"},
    results: { ...runtimeScalarPhrases("en",[6]),"Реальная доходность": "Real return", "Грубая оценка разностью": "Rough estimate by subtraction", "Расхождение с разностью": "Gap against subtraction", "Номинальная ставка": "Nominal rate", "Инфляция": "Inflation", "Номинальная сумма": "Nominal amount" },
    values: { ...runtimeScalarPhrases("en",[15, 0, 4, 7, 9]),"п.п.": "pp", "Покупательная способность через": "Purchasing power after", "Инфляция должна быть больше минус ста процентов": "Inflation must be greater than minus one hundred percent", "Доходность не может быть меньше минус ста процентов": "Return cannot be less than minus one hundred percent", "Сумма не может быть отрицательной": "The amount cannot be negative" },
    options: {},
  },
  "uk": {
    fields: {"nominal": "Річна дохідність, %", "inflation": "Інфляція, %", "amount": "Сума", "years": "Років"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Реальная доходность": "Реальна дохідність", "Грубая оценка разностью": "Груба оцінка різницею", "Расхождение с разностью": "Розбіжність із різницею", "Номинальная ставка": "Номінальна ставка", "Инфляция": "Інфляція", "Номинальная сумма": "Номінальна сума" },
    values: { ...runtimeScalarPhrases("uk",[16, 1, 6, 9, 11]),"п.п.": "в.п.", "Покупательная способность через": "Купівельна спроможність через", "Инфляция должна быть больше минус ста процентов": "Інфляція має бути більшою за мінус сто відсотків", "Доходность не может быть меньше минус ста процентов": "Дохідність не може бути меншою за мінус сто відсотків", "Сумма не может быть отрицательной": "Сума не може бути від’ємною" },
    options: {},
  },
  "de": {
    fields: {"nominal": "Jährliche Rendite, %", "inflation": "Inflation, %", "amount": "Betrag", "years": "Jahre"},
    results: { ...runtimeScalarPhrases("de",[8]),"Реальная доходность": "Reale Rendite", "Грубая оценка разностью": "Grobe Schätzung durch Subtraktion", "Расхождение с разностью": "Abstand zur Subtraktion", "Номинальная ставка": "Nominalzins", "Инфляция": "Inflation", "Номинальная сумма": "Nominaler Betrag" },
    values: { ...runtimeScalarPhrases("de",[16, 2, 6, 10]),"п.п.": "PP", "Покупательная способность через": "Kaufkraft nach", "Инфляция должна быть больше минус ста процентов": "Die Inflation muss über minus hundert Prozent liegen", "Доходность не может быть меньше минус ста процентов": "Die Rendite darf nicht unter minus hundert Prozent liegen", "Сумма не может быть отрицательной": "Der Betrag darf nicht negativ sein", "Срок должен быть больше нуля": "Die Dauer muss größer als null sein" },
    options: {},
  },
  "es": {
    fields: {"nominal": "Rentabilidad anual, %", "inflation": "Inflación, %", "amount": "Cantidad", "years": "Años"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Реальная доходность": "Rentabilidad real", "Грубая оценка разностью": "Estimación aproximada por resta", "Расхождение с разностью": "Diferencia frente a la resta", "Номинальная ставка": "Tipo nominal", "Инфляция": "Inflación", "Номинальная сумма": "Cantidad nominal" },
    values: { ...runtimeScalarPhrases("es",[15, 0, 4, 9, 10]),"п.п.": "p. p.", "Покупательная способность через": "Poder adquisitivo dentro de", "Инфляция должна быть больше минус ста процентов": "La inflación debe ser mayor que menos cien por ciento", "Доходность не может быть меньше минус ста процентов": "La rentabilidad no puede ser inferior a menos cien por ciento", "Сумма не может быть отрицательной": "La cantidad no puede ser negativa" },
  },
};
