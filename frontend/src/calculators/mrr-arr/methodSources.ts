import type { EditorialSource } from '../../data/calculatorEditorial';

// Primary bodies checked by AI on 2026-10-01; human review remains pending.
// Sources support only the named definitions or comparison boundaries.
export const methodSources: Readonly<Record<string, readonly EditorialSource[]>> = {
  "ru": [
    {
      "label": "Stripe: регулярная месячная выручка и исключение разовых платежей",
      "href": "https://stripe.com/resources/more/what-is-monthly-recurring-revenue"
    },
    {
      "label": "Stripe: годовой темп ARR и допущение неизменных условий",
      "href": "https://stripe.com/en-ca/resources/more/revenue-run-rate-101-what-it-means-for-businesses"
    }
  ],
  "en": [
    {
      "label": "Stripe: monthly recurring revenue and exclusion of one-off payments",
      "href": "https://stripe.com/resources/more/what-is-monthly-recurring-revenue"
    },
    {
      "label": "Stripe: annualized ARR rate and unchanged-conditions assumption",
      "href": "https://stripe.com/en-ca/resources/more/revenue-run-rate-101-what-it-means-for-businesses"
    }
  ],
  "uk": [
    {
      "label": "Stripe: регулярний місячний виторг без разових платежів",
      "href": "https://stripe.com/resources/more/what-is-monthly-recurring-revenue"
    },
    {
      "label": "Stripe: річний темп ARR і припущення незмінних умов",
      "href": "https://stripe.com/en-ca/resources/more/revenue-run-rate-101-what-it-means-for-businesses"
    }
  ],
  "de": [
    {
      "label": "Stripe: monatlich wiederkehrender Umsatz ohne Einmalzahlungen",
      "href": "https://stripe.com/resources/more/what-is-monthly-recurring-revenue"
    },
    {
      "label": "Stripe: hochgerechneter ARR und Annahme gleichbleibender Bedingungen",
      "href": "https://stripe.com/en-ca/resources/more/revenue-run-rate-101-what-it-means-for-businesses"
    }
  ],
  "es": [
    {
      "label": "Stripe: ingresos recurrentes mensuales sin pagos únicos",
      "href": "https://stripe.com/resources/more/what-is-monthly-recurring-revenue"
    },
    {
      "label": "Stripe: ritmo anualizado del ARR y supuesto de condiciones constantes",
      "href": "https://stripe.com/en-ca/resources/more/revenue-run-rate-101-what-it-means-for-businesses"
    }
  ]
};
