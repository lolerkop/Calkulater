import type { EditorialSource } from '../../data/calculatorEditorial';

// Source bodies checked by automated research on 2026-10-01; human review pending.
// Sources bound definitions, not universal benchmarks or investment advice.
export const methodSources: Readonly<Record<string, readonly EditorialSource[]>> = {
  "en": [
    {
      "label": "Google Ads: CPA = marketing cost / actions",
      "href": "https://support.google.com/google-ads/answer/13278730?hl=en"
    },
    {
      "label": "Google Ads: counting, attribution credits and reporting dates",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ],
  "uk": [
    {
      "label": "Google Ads: CPA = витрати / дії",
      "href": "https://support.google.com/google-ads/answer/13278730?hl=en"
    },
    {
      "label": "Google Ads: підрахунок, кредити атрибуції та дати звітів",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ],
  "de": [
    {
      "label": "Google Ads: CPA = Kosten / Handlungen",
      "href": "https://support.google.com/google-ads/answer/13278730?hl=en"
    },
    {
      "label": "Google Ads: Zählung, Attribution und Berichtsdatum",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ],
  "es": [
    {
      "label": "Google Ads: CPA = coste / acciones",
      "href": "https://support.google.com/google-ads/answer/13278730?hl=en"
    },
    {
      "label": "Google Ads: recuentos, créditos de atribución y fechas",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ],
  "ru": [
    {
      "label": "Google Ads: CPA = расходы / действия",
      "href": "https://support.google.com/google-ads/answer/13278730?hl=en"
    },
    {
      "label": "Google Ads: подсчёт, кредиты атрибуции и даты отчётов",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ]
};
