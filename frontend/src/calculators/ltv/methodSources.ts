import type { EditorialSource } from '../../data/calculatorEditorial';

// Primary bodies checked by AI on 2026-10-01; human review remains pending.
// Sources support only the named definitions or comparison boundaries.
export const methodSources: Readonly<Record<string, readonly EditorialSource[]>> = {
  "ru": [
    {
      "label": "Stripe Atlas: постоянный месячный отток и геометрический срок жизни",
      "href": "https://stripe.com/guides/atlas/business-of-saas"
    }
  ],
  "en": [
    {
      "label": "Stripe Atlas: constant monthly churn and geometric customer lifetime",
      "href": "https://stripe.com/guides/atlas/business-of-saas"
    }
  ],
  "uk": [
    {
      "label": "Stripe Atlas: сталий місячний відтік і геометричний строк життя",
      "href": "https://stripe.com/guides/atlas/business-of-saas"
    }
  ],
  "de": [
    {
      "label": "Stripe Atlas: konstante monatliche Abwanderung und geometrische Kundenlaufzeit",
      "href": "https://stripe.com/guides/atlas/business-of-saas"
    }
  ],
  "es": [
    {
      "label": "Stripe Atlas: abandono mensual constante y duración geométrica del cliente",
      "href": "https://stripe.com/guides/atlas/business-of-saas"
    }
  ]
};
