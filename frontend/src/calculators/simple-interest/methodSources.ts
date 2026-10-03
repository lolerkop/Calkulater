import type { EditorialSource } from '../../data/calculatorEditorial';

// Primary-source bodies checked by AI on 2026-10-01; human review pending.
// Links support the named model boundaries, not a financial product or every numerical case.
export const methodSources: Readonly<Record<string, readonly EditorialSource[]>> = {
  "ru": [
    {
      "label": "SEC Investor.gov: начальная база и капитализация в образовательном примере CD",
      "href": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/brokered-cds-investor-bulletin"
    },
    {
      "label": "CFPB: проценты на остаток автокредита; образовательное объяснение США",
      "href": "https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-simple-interest-rate-and-precomputed-interest-on-an-auto-loan-en-841/"
    }
  ],
  "en": [
    {
      "label": "SEC Investor.gov: original principal and compounding in a CD example",
      "href": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/brokered-cds-investor-bulletin"
    },
    {
      "label": "CFPB: interest on the outstanding auto-loan balance; US educational explanation",
      "href": "https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-simple-interest-rate-and-precomputed-interest-on-an-auto-loan-en-841/"
    }
  ],
  "uk": [
    {
      "label": "SEC Investor.gov: початкова база й капіталізація в навчальному прикладі CD",
      "href": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/brokered-cds-investor-bulletin"
    },
    {
      "label": "CFPB: проценти на залишок автокредиту; навчальне пояснення для США",
      "href": "https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-simple-interest-rate-and-precomputed-interest-on-an-auto-loan-en-841/"
    }
  ],
  "de": [
    {
      "label": "SEC Investor.gov: Anfangskapital und Zinseszins am CD-Beispiel",
      "href": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/brokered-cds-investor-bulletin"
    },
    {
      "label": "CFPB: Zinsen auf die Restschuld eines Autokredits; US-Lernbeispiel",
      "href": "https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-simple-interest-rate-and-precomputed-interest-on-an-auto-loan-en-841/"
    }
  ],
  "es": [
    {
      "label": "SEC Investor.gov: capital inicial y capitalización en un ejemplo de CD",
      "href": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/brokered-cds-investor-bulletin"
    },
    {
      "label": "CFPB: interés sobre el saldo del préstamo de automóvil; explicación de EE. UU.",
      "href": "https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-simple-interest-rate-and-precomputed-interest-on-an-auto-loan-en-841/"
    }
  ]
};
