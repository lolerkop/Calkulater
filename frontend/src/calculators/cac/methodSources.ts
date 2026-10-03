import type { EditorialSource } from '../../data/calculatorEditorial';

// Source bodies checked by automated research on 2026-10-01; human review pending.
// Sources bound definitions, not universal benchmarks or investment advice.
export const methodSources: Readonly<Record<string, readonly EditorialSource[]>> = {
  "en": [
    {
      "label": "Stripe: CAC cost scope; lifetime value definitions differ and margin matters",
      "href": "https://stripe.com/resources/more/14-key-marketplace-metrics"
    },
    {
      "label": "Google Ads: profit includes business costs, not just acquisition spend",
      "href": "https://support.google.com/google-ads/answer/10040034?hl=en"
    }
  ],
  "uk": [
    {
      "label": "Stripe: склад витрат CAC; визначення довічної цінності та роль маржі",
      "href": "https://stripe.com/resources/more/14-key-marketplace-metrics"
    },
    {
      "label": "Google Ads: прибуток враховує витрати бізнесу, не лише рекламу",
      "href": "https://support.google.com/google-ads/answer/10040034?hl=en"
    }
  ],
  "de": [
    {
      "label": "Stripe: Kostenumfang des CAC; Kundenwert und Marge",
      "href": "https://stripe.com/resources/more/14-key-marketplace-metrics"
    },
    {
      "label": "Google Ads: Gewinn berücksichtigt weitere Geschäftskosten",
      "href": "https://support.google.com/google-ads/answer/10040034?hl=en"
    }
  ],
  "es": [
    {
      "label": "Stripe: base de costes del CAC; valor del cliente y margen",
      "href": "https://stripe.com/resources/more/14-key-marketplace-metrics"
    },
    {
      "label": "Google Ads: el beneficio incluye otros costes del negocio",
      "href": "https://support.google.com/google-ads/answer/10040034?hl=en"
    }
  ],
  "ru": [
    {
      "label": "Stripe: состав затрат CAC; разные определения ценности и роль маржи",
      "href": "https://stripe.com/resources/more/14-key-marketplace-metrics"
    },
    {
      "label": "Google Ads: прибыль учитывает затраты бизнеса, а не только рекламу",
      "href": "https://support.google.com/google-ads/answer/10040034?hl=en"
    }
  ]
};
