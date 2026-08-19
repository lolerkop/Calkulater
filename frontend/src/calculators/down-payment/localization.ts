import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
};
