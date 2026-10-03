import type { EditorialSource } from '../../data/calculatorEditorial';

// Source bodies checked by automated research on 2026-10-01; human review pending.
// Sources bound definitions, not universal benchmarks or investment advice.
export const methodSources: Readonly<Record<string, readonly EditorialSource[]>> = {
  "en": [
    {
      "label": "Google Analytics: session key-event rate counts sessions with an event",
      "href": "https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema"
    },
    {
      "label": "Google Ads: event counts and attribution have different definitions",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ],
  "uk": [
    {
      "label": "Google Analytics: частка сеансів із ключовою подією",
      "href": "https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema"
    },
    {
      "label": "Google Ads: кількість подій та атрибуція мають інші визначення",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ],
  "de": [
    {
      "label": "Google Analytics: Sitzungsrate zählt Sitzungen mit einem Schlüsselereignis",
      "href": "https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema"
    },
    {
      "label": "Google Ads: Ereigniszählung und Attribution sind andere Größen",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ],
  "es": [
    {
      "label": "Google Analytics: tasa de sesiones con un evento clave",
      "href": "https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema"
    },
    {
      "label": "Google Ads: eventos y atribución usan definiciones distintas",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ],
  "ru": [
    {
      "label": "Google Analytics: доля сеансов с ключевым событием",
      "href": "https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema"
    },
    {
      "label": "Google Ads: подсчёт событий и атрибуция используют другие определения",
      "href": "https://support.google.com/google-ads/answer/6270625?hl=en"
    }
  ]
};
