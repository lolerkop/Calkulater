import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "price": "Purchase price",
    "rentMode": "Rent is given",
    "annualRent": "Annual rent",
    "monthlyRent": "Monthly rent",
    "annualCosts": "Annual costs"
  },
  "options": {
    "annual": "per year",
    "monthly": "per month"
  },
  "results": {
    "Валовая доходность": "Gross yield",
    "Чистая доходность": "Net yield",
    "Аренда за год": "Annual rent",
    "Окупаемость": "Payback period",
    "Проверьте данные": "Check the values",
    "Простая валовая окупаемость": "Simple gross payback"
  },
  "values": {
    ...marketingScalarValues.en,
    "₽": "$",
    "лет": "years",
    "Цена покупки должна быть больше нуля": "The purchase price must be greater than zero",
    "Аренда не может быть отрицательной": "The rent cannot be negative",
    "Расходы не могут превышать арендную плату": "Costs cannot exceed the rent",
    "Неизвестный режим расчёта": "Unknown calculation mode",
    "Годовые расходы не могут быть отрицательными": "Annual costs cannot be negative"
  }
},
  "uk": {
  "fields": {
    "price": "Ціна покупки",
    "rentMode": "Оренда задана",
    "annualRent": "Оренда за рік",
    "monthlyRent": "Оренда за місяць",
    "annualCosts": "Річні витрати"
  },
  "options": {
    "annual": "за рік",
    "monthly": "за місяць"
  },
  "results": {
    "Валовая доходность": "Валова дохідність",
    "Чистая доходность": "Чиста дохідність",
    "Аренда за год": "Оренда за рік",
    "Окупаемость": "Окупність",
    "Проверьте данные": "Перевірте дані",
    "Простая валовая окупаемость": "Проста валова окупність"
  },
  "values": {
    ...marketingScalarValues.uk,
    "₽": "₴",
    "лет": "років",
    "Цена покупки должна быть больше нуля": "Ціна покупки має бути більшою за нуль",
    "Аренда не может быть отрицательной": "Оренда не може бути від’ємною",
    "Расходы не могут превышать арендную плату": "Витрати не можуть перевищувати орендну плату",
    "Неизвестный режим расчёта": "Невідомий режим розрахунку",
    "Годовые расходы не могут быть отрицательными": "Річні витрати не можуть бути від’ємними"
  }
},
  "de": {
  "fields": {
    "price": "Kaufpreis",
    "rentMode": "Die Miete ist angegeben",
    "annualRent": "Jahresmiete",
    "monthlyRent": "Monatsmiete",
    "annualCosts": "Jährliche Kosten"
  },
  "options": {
    "annual": "je Jahr",
    "monthly": "je Monat"
  },
  "results": {
    "Валовая доходность": "Bruttorendite",
    "Чистая доходность": "Nettorendite",
    "Аренда за год": "Jahresmiete",
    "Окупаемость": "Amortisationsdauer",
    "Проверьте данные": "Prüfe die Werte",
    "Простая валовая окупаемость": "Einfache Bruttoamortisation"
  },
  "values": {
    ...marketingScalarValues.de,
    "₽": "€",
    "лет": "Jahre",
    "Цена покупки должна быть больше нуля": "Der Kaufpreis muss größer als null sein",
    "Аренда не может быть отрицательной": "Die Miete kann nicht negativ sein",
    "Расходы не могут превышать арендную плату": "Die Kosten können die Miete nicht übersteigen",
    "Неизвестный режим расчёта": "Unbekannter Rechenmodus",
    "Годовые расходы не могут быть отрицательными": "Jahreskosten dürfen nicht negativ sein"
  }
},
  "es": {
  "fields": {
    "price": "Precio de compra",
    "rentMode": "La renta se indica",
    "annualRent": "Renta anual",
    "monthlyRent": "Renta mensual",
    "annualCosts": "Gastos anuales"
  },
  "options": {
    "annual": "al año",
    "monthly": "al mes"
  },
  "results": {
    "Валовая доходность": "Rentabilidad bruta",
    "Чистая доходность": "Rentabilidad neta",
    "Аренда за год": "Renta anual",
    "Окупаемость": "Plazo de recuperación",
    "Проверьте данные": "Revisa los datos",
    "Простая валовая окупаемость": "Recuperación bruta simple"
  },
  "values": {
    ...marketingScalarValues.es,
    "₽": "€",
    "лет": "años",
    "Цена покупки должна быть больше нуля": "El precio de compra debe ser mayor que cero",
    "Аренда не может быть отрицательной": "La renta no puede ser negativa",
    "Расходы не могут превышать арендную плату": "Los gastos no pueden superar a la renta",
    "Неизвестный режим расчёта": "Modo de cálculo desconocido",
    "Годовые расходы не могут быть отрицательными": "Los gastos anuales no pueden ser negativos"
  }
}
};
