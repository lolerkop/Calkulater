import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'price': 'Kaufpreis, €',
      'rentMode': 'Die Miete ist angegeben',
      'annualRent': 'Jahresmiete, €',
      'monthlyRent': 'Monatsmiete, €',
      'annualCosts': 'Jährliche Kosten, €',
    },
    options: {
      'annual': 'je Jahr',
      'monthly': 'je Monat',
    },
    results: {
      'Валовая доходность': 'Bruttorendite',
      'Чистая доходность': 'Nettorendite',
      'Аренда за год': 'Jahresmiete',
      'Окупаемость': 'Amortisationsdauer',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'лет': 'Jahre',
      'Цена покупки должна быть больше нуля': 'Der Kaufpreis muss größer als null sein',
      'Аренда не может быть отрицательной': 'Die Miete kann nicht negativ sein',
      'Расходы не могут превышать арендную плату': 'Die Kosten können die Miete nicht übersteigen',
    },
  },
  en: {
    fields: {
      "price": "Purchase price, $",
      "rentMode": "Rent is given",
      "annualRent": "Annual rent, $",
      "monthlyRent": "Monthly rent, $",
      "annualCosts": "Annual costs, $",
    },
    options: {
      "annual": "per year",
      "monthly": "per month",
    },
    results: {
      "Валовая доходность": "Gross yield",
      "Чистая доходность": "Net yield",
      "Аренда за год": "Annual rent",
      "Окупаемость": "Payback period",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "лет": "years",
      "Цена покупки должна быть больше нуля": "The purchase price must be greater than zero",
      "Аренда не может быть отрицательной": "The rent cannot be negative",
      "Расходы не могут превышать арендную плату": "Costs cannot exceed the rent",
    },
  },
  uk: {
    fields: {
      "price": "Ціна покупки, ₴",
      "rentMode": "Оренда задана",
      "annualRent": "Оренда за рік, ₴",
      "monthlyRent": "Оренда за місяць, ₴",
      "annualCosts": "Річні витрати, ₴",
    },
    options: {
      "annual": "за рік",
      "monthly": "за місяць",
    },
    results: {
      "Валовая доходность": "Валова дохідність",
      "Чистая доходность": "Чиста дохідність",
      "Аренда за год": "Оренда за рік",
      "Окупаемость": "Окупність",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "лет": "років",
      "Цена покупки должна быть больше нуля": "Ціна покупки має бути більшою за нуль",
      "Аренда не может быть отрицательной": "Оренда не може бути від’ємною",
      "Расходы не могут превышать арендную плату": "Витрати не можуть перевищувати орендну плату",
    },
  },
};
