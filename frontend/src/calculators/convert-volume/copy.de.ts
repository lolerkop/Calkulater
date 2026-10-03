import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const volumeCopyDe: CalculatorCopy = {
  "name": "Volumenumrechner",
  "slug": "volumen-umrechner",
  "shortDescription": "Volumen zwischen Litern, Kubikmetern und Gallonen umrechnen.",
  "seoTitle": "Volumen umrechnen — Liter, Kubikmeter, Gallonen",
  "seoDescription": "Rechne Volumen zwischen Litern, Millilitern, Kubikmetern, Kubikfuß und amerikanischen oder britischen Gallonen um.",
  "h1": "Volumenumrechner",
  "keywords": [
    "Volumen umrechnen",
    "Liter in Gallonen",
    "Kubikmeter"
  ],
  "longDescription": "Rechnet Volumen zwischen Millilitern, Litern, Kubikzentimetern, -metern und -fuß sowie amerikanischen und britischen Gallonen um. Amerikanische und britische Gallone unterscheiden sich um rund 20 %, die Liste hält sie deshalb auseinander.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit hat einen genauen Faktor zum Kubikmeter.",
  "example": "Eine US-Gallone sind 3,785 Liter und eine britische 4,546 Liter.",
  "faq": [
    {
      "q": "Wie unterscheiden sich amerikanische und britische Gallone?",
      "a": "Es sind geschichtlich verschiedene Maße: 3,785 Liter gegen 4,546. Der Abstand von 20 % lässt sich in einem Rezept oder einer Anleitung leicht übersehen."
    },
    {
      "q": "Ist ein Liter dasselbe wie ein Kubikdezimeter?",
      "a": "Ja, genau. Der Liter ist als Kubikdezimeter festgelegt, also 0,001 m³."
    },
    {
      "q": "Ist ein Milliliter dasselbe wie ein Kubikzentimeter?",
      "a": "Ja, genau. Beide sind 10⁻⁶ m³."
    },
    {
      "q": "Sind Küchenmaße enthalten?",
      "a": "Tassen und Löffel nicht: ihr Volumen ist von Land zu Land verschieden. Dafür braucht es den eigenen Küchenumrechner."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
