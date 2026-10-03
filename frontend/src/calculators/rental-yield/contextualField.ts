import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "annualCosts": "Пусто = 0; расходы могут превышать аренду. Потерю аренды из-за простоя учтите один раз.",
    "price": "Цена покупки — знаменатель доходности; заём и изменение цены не включены."
  },
  "en": {
    "annualCosts": "Blank = 0; costs may exceed rent. Count vacancy-related rent loss once.",
    "price": "Purchase price is the yield denominator; borrowing and price changes are excluded."
  },
  "uk": {
    "annualCosts": "Порожньо = 0; витрати можуть перевищувати оренду. Втрату через простій рахуйте один раз.",
    "price": "Ціна купівлі — знаменник дохідності; кредит і зміна ціни не включені."
  },
  "de": {
    "annualCosts": "Leer = 0; Kosten dürfen Miete übersteigen. Leerstandsausfall einmal zählen.",
    "price": "Kaufpreis ist der Renditenenner; Kredit und Wertänderungen fehlen."
  },
  "es": {
    "annualCosts": "Vacío = 0; gastos pueden superar la renta. Cuenta una vez la pérdida por vacancia.",
    "price": "Precio de compra es denominador; excluye financiación y cambios de precio."
  }
});
