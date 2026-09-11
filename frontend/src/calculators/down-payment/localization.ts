import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was bekannt ist',
      'price': 'Kaufpreis, €',
      'percent': 'Eigenkapital, %',
      'downPayment': 'Ersparter Betrag, €',
    },
    options: {
      'percent': 'der eingebrachte Prozentsatz',
      'amount': 'der ersparte Betrag',
    },
    results: {
      'Первоначальный взнос': 'Eigenkapital',
      'Сумма кредита': 'Darlehenssumme',
      'Доля взноса': 'Eingebrachter Anteil',
      'Осталось накопить': 'Noch anzusparen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'Цена покупки должна быть больше нуля': 'Der Kaufpreis muss größer als null sein',
      'Доля взноса должна быть от 0 до 100 %': 'Der eingebrachte Anteil muss zwischen 0 und 100 % liegen',
      'Взнос не может превышать цену покупки': 'Das Eigenkapital kann den Kaufpreis nicht übersteigen',
    },
  },
  en: {
    fields: {
      "mode": "What is known",
      "price": "Purchase price, $",
      "percent": "Down payment, %",
      "downPayment": "Amount saved, $",
    },
    options: {
      "percent": "the percentage put down",
      "amount": "the amount saved",
    },
    results: {
      "Первоначальный взнос": "Down payment",
      "Сумма кредита": "Loan amount",
      "Доля взноса": "Share paid up front",
      "Осталось накопить": "Still to save",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Цена покупки должна быть больше нуля": "The purchase price must be greater than zero",
      "Доля взноса должна быть от 0 до 100 %": "The down payment share must be between 0 and 100%",
      "Взнос не может превышать цену покупки": "The down payment cannot exceed the purchase price",
    },
  },
  uk: {
    fields: {
      "mode": "Що відомо",
      "price": "Ціна покупки, ₴",
      "percent": "Перший внесок, %",
      "downPayment": "Накопичено, ₴",
    },
    options: {
      "percent": "частка внеску у відсотках",
      "amount": "накопичена сума",
    },
    results: {
      "Первоначальный взнос": "Перший внесок",
      "Сумма кредита": "Сума кредиту",
      "Доля взноса": "Частка внеску",
      "Осталось накопить": "Залишилося накопичити",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Цена покупки должна быть больше нуля": "Ціна покупки має бути більшою за нуль",
      "Доля взноса должна быть от 0 до 100 %": "Частка внеску має бути від 0 до 100 %",
      "Взнос не может превышать цену покупки": "Внесок не може перевищувати ціну покупки",
    },
  },
  es: {
    fields: {
      "mode": "Qué se conoce",
      "price": "Precio de compra, €",
      "percent": "Entrada, %",
      "downPayment": "Importe ahorrado, €",
    },
    options: {
      "percent": "el porcentaje aportado",
      "amount": "el importe ahorrado",
    },
    results: {
      "Первоначальный взнос": "Entrada",
      "Сумма кредита": "Importe del préstamo",
      "Доля взноса": "Proporción aportada por adelantado",
      "Осталось накопить": "Queda por ahorrar",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "₽": "€",
      "Цена покупки должна быть больше нуля": "El precio de compra debe ser mayor que cero",
      "Доля взноса должна быть от 0 до 100 %": "La proporción de la entrada debe estar entre 0 y 100 %",
      "Взнос не может превышать цену покупки": "La entrada no puede superar al precio de compra",
    },
  },
};
