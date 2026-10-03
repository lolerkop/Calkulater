import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const ltvCopyDe: CalculatorCopy = {
  "name": "LTV-Rechner",
  "slug": "kundenwert-ltv",
  "shortDescription": "Kundenwert über die Lebensdauer aus Verweildauer oder Abwanderung.",
  "seoTitle": "LTV berechnen — Kundenwert über die Lebensdauer",
  "seoDescription": "Kundenwert aus Monatsumsatz, Laufzeit oder konstanter monatlicher Abwanderung und Rohmarge, vor CAC und nicht enthaltenen Kosten.",
  "h1": "LTV-Rechner",
  "keywords": [
    "LTV berechnen",
    "Kundenwert",
    "Customer Lifetime Value",
    "LTV zu CAC"
  ],
  ...contractContent.de,
};
