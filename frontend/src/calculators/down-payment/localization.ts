import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"mode": "What is known", "price": "Purchase price", "percent": "Down payment, %", "downPayment": "Down payment applied to the price"},
    options: {"percent": "down-payment percentage", "amount": "applied down-payment amount"},
    results: { ...runtimeScalarPhrases("en",[6]),"Первоначальный взнос": "Down payment", "Сумма кредита": "Loan amount", "Доля взноса": "Share paid up front", "Осталось накопить": "Still to save" },
    values: { ...runtimeScalarPhrases("en",[15, 0, 4, 7, 5]),"Цена покупки должна быть больше нуля": "The purchase price must be greater than zero", "Доля взноса должна быть от 0 до 100 %": "The down payment share must be between 0 and 100%", "Взнос не может превышать цену покупки": "The down payment cannot exceed the purchase price", "Взнос не может быть отрицательным": "The down payment cannot be negative" },
  },
  "uk": {
    fields: {"mode": "Що відомо", "price": "Ціна покупки", "percent": "Перший внесок, %", "downPayment": "Внесок у ціну покупки"},
    options: {"percent": "частка внеску", "amount": "сума внеску в ціну"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Первоначальный взнос": "Перший внесок", "Сумма кредита": "Сума кредиту", "Доля взноса": "Частка внеску", "Осталось накопить": "Залишилося накопичити" },
    values: { ...runtimeScalarPhrases("uk",[16, 1, 6, 9, 7]),"Цена покупки должна быть больше нуля": "Ціна покупки має бути більшою за нуль", "Доля взноса должна быть от 0 до 100 %": "Частка внеску має бути від 0 до 100 %", "Взнос не может превышать цену покупки": "Внесок не може перевищувати ціну покупки", "Взнос не может быть отрицательным": "Внесок не може бути від’ємним" },
  },
  "de": {
    fields: {"mode": "Was bekannt ist", "price": "Kaufpreis", "percent": "Eigenkapital, %", "downPayment": "Anzahlung auf den Kaufpreis"},
    options: {"percent": "Anzahlungsanteil", "amount": "Anzahlung auf den Preis"},
    results: { ...runtimeScalarPhrases("de",[8]),"Первоначальный взнос": "Eigenkapital", "Сумма кредита": "Darlehenssumme", "Доля взноса": "Eingebrachter Anteil", "Осталось накопить": "Noch anzusparen" },
    values: { ...runtimeScalarPhrases("de",[16, 2, 6, 10, 7]),"Цена покупки должна быть больше нуля": "Der Kaufpreis muss größer als null sein", "Доля взноса должна быть от 0 до 100 %": "Der eingebrachte Anteil muss zwischen 0 und 100 % liegen", "Взнос не может превышать цену покупки": "Das Eigenkapital kann den Kaufpreis nicht übersteigen", "Взнос не может быть отрицательным": "Die Anzahlung kann nicht negativ sein" },
  },
  "es": {
    fields: {"mode": "Qué se conoce", "price": "Precio de compra", "percent": "Entrada, %", "downPayment": "Entrada aplicada al precio"},
    options: {"percent": "porcentaje de entrada", "amount": "importe de entrada aplicado"},
    results: { ...runtimeScalarPhrases("es",[7]),"Первоначальный взнос": "Entrada", "Сумма кредита": "Importe del préstamo", "Доля взноса": "Proporción aportada por adelantado", "Осталось накопить": "Queda por ahorrar" },
    values: { ...runtimeScalarPhrases("es",[15, 0, 4, 9, 6]),"Цена покупки должна быть больше нуля": "El precio de compra debe ser mayor que cero", "Доля взноса должна быть от 0 до 100 %": "La proporción de la entrada debe estar entre 0 y 100 %", "Взнос не может превышать цену покупки": "La entrada no puede superar al precio de compra", "Взнос не может быть отрицательным": "La entrada no puede ser negativa" },
  },
};
