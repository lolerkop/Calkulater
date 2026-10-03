import type { EditorialSource } from '../../data/calculatorEditorial';

// Primary bodies checked by AI on 2026-10-01; human review remains pending.
// Sources support only the named definitions or comparison boundaries.
export const methodSources: Readonly<Record<string, readonly EditorialSource[]>> = {
  "ru": [
    {
      "label": "Google Analytics: разные составы выручки для ARPU и ARPPU",
      "href": "https://support.google.com/analytics/table/13948007?hl=en-GB"
    }
  ],
  "en": [
    {
      "label": "Google Analytics: different revenue definitions for ARPU and ARPPU",
      "href": "https://support.google.com/analytics/table/13948007?hl=en-GB"
    }
  ],
  "uk": [
    {
      "label": "Google Analytics: різний склад виторгу для ARPU та ARPPU",
      "href": "https://support.google.com/analytics/table/13948007?hl=en-GB"
    }
  ],
  "de": [
    {
      "label": "Google Analytics: unterschiedliche Umsatzbasis für ARPU und ARPPU",
      "href": "https://support.google.com/analytics/table/13948007?hl=en-GB"
    }
  ],
  "es": [
    {
      "label": "Google Analytics: distintos componentes de ingresos para ARPU y ARPPU",
      "href": "https://support.google.com/analytics/table/13948007?hl=en-GB"
    }
  ]
};
