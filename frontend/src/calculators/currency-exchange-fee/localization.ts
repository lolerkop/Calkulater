import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "direction": "What you are doing",
      "amount": "Amount to exchange",
      "rate": "Exchange rate",
      "spreadPct": "Spread on the rate, %",
      "feePct": "Commission, %",
      "feeFixed": "Flat charge",
    },
    options: {
      "sell": "selling currency for local money",
      "buy": "buying currency with local money",
    },
    results: {
      "К получению": "You receive",
      "Курс с учётом спреда": "Rate after the spread",
      "По номинальному курсу": "At the nominal rate",
      "Комиссия": "Commission",
      "Потери на спреде": "Lost to the spread",
      "Полная стоимость обмена": "Total cost of the exchange",
      "Доля потерь": "Share of loss",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "ед. валюты": "currency units",
      "Сумма должна быть больше нуля": "The amount must be greater than zero",
      "Курс должен быть больше нуля": "The rate must be greater than zero",
      "Комиссия и спред не могут быть отрицательными": "Commission and spread cannot be negative",
      "Комиссия должна быть меньше 100 %": "The commission must be below 100%",
      "Спред должен быть меньше 100 %": "The spread must be below 100%",
    },
  },
  uk: {
    fields: {
      "direction": "Що робимо",
      "amount": "Сума обміну",
      "rate": "Курс обміну",
      "spreadPct": "Спред до курсу, %",
      "feePct": "Комісія, %",
      "feeFixed": "Фіксований збір",
    },
    options: {
      "sell": "продаємо валюту за гривні",
      "buy": "купуємо валюту за гривні",
    },
    results: {
      "К получению": "До отримання",
      "Курс с учётом спреда": "Курс з урахуванням спреду",
      "По номинальному курсу": "За номінальним курсом",
      "Комиссия": "Комісія",
      "Потери на спреде": "Втрати на спреді",
      "Полная стоимость обмена": "Повна вартість обміну",
      "Доля потерь": "Частка втрат",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "ед. валюты": "од. валюти",
      "Сумма должна быть больше нуля": "Сума має бути більшою за нуль",
      "Курс должен быть больше нуля": "Курс має бути більшим за нуль",
      "Комиссия и спред не могут быть отрицательными": "Комісія і спред не можуть бути від'ємними",
      "Комиссия должна быть меньше 100 %": "Комісія має бути меншою за 100 %",
      "Спред должен быть меньше 100 %": "Спред має бути меншим за 100 %",
    },
  },
};
