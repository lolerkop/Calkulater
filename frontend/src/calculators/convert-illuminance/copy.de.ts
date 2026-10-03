import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const illuminanceCopyDe: CalculatorCopy = {
  "name": "Umrechner für die Beleuchtungsstärke",
  "slug": "beleuchtungsstaerke-umrechner",
  "shortDescription": "Beleuchtungsstärke zwischen Lux, Footcandle und Phot umrechnen.",
  "seoTitle": "Beleuchtungsstärke umrechnen — Lux, Footcandle, Phot",
  "seoDescription": "Rechne die Beleuchtungsstärke zwischen Lux, Kilolux, Footcandle, Phot und Nox um.",
  "h1": "Umrechner für die Beleuchtungsstärke",
  "keywords": [
    "Beleuchtungsstärke umrechnen",
    "Lux in Footcandle",
    "Beleuchtungsniveau",
    "Beleuchtungsstaerke umrechnen"
  ],
  "longDescription": "Rechnet die Beleuchtungsstärke zwischen Lux, Kilolux, Millilux, Footcandle, Phot und Nox um. Lux stehen in Vorschriften zur Arbeitsplatzbeleuchtung, Footcandle in amerikanischen Beleuchtungsunterlagen.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Die Einheiten werden über Lux mit ihren Faktoren umgerechnet: Berücksichtigt werden Vorsätze, Flächenverhältnisse und der gewählte historische Nox-Faktor.",
  "example": "Beispiel für einen eingegebenen Wert: 500 lx ≈ 46,45 Footcandle. Das ist ein Zahlenbeispiel, keine Anforderung an einen Arbeitsplatz.",
  "faq": [
    {
      "q": "Wie unterscheidet sich Beleuchtungsstärke vom Lichtstrom?",
      "a": "Der Lichtstrom wird in Lumen gemessen und beschreibt die ganze Lampe; die Beleuchtungsstärke ist der Lichtstrom, der auf einen Quadratmeter Fläche fällt."
    },
    {
      "q": "Was ist ein Footcandle?",
      "a": "Ein Lumen je Quadratfuß. Da der Fuß genau festgelegt ist, sind ein Footcandle 10,7639 Lux."
    },
    {
      "q": "Wo wird das Phot verwendet?",
      "a": "Im CGS-System: ein Lumen je Quadratzentimeter, also zehntausend Lux."
    },
    {
      "q": "Lässt sich Lux in Watt umrechnen?",
      "a": "Nein — es sind verschiedene Größen, und der Zusammenhang hängt vom Spektrum der Lichtquelle ab."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
