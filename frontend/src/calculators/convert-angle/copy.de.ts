import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const angleCopyDe: CalculatorCopy = {
  "name": "Winkelumrechner",
  "slug": "winkel-umrechner",
  "shortDescription": "Winkel zwischen Grad, Bogenmaß, Gon und Umdrehungen umrechnen.",
  "seoTitle": "Winkel umrechnen — Grad, Bogenmaß, Gon, Bogenminuten",
  "seoDescription": "Rechne Winkel zwischen Grad, Bogenmaß, Gon, Umdrehungen, Bogenminuten und Bogensekunden um.",
  "h1": "Winkelumrechner",
  "keywords": [
    "Winkel umrechnen",
    "Grad in Bogenmaß",
    "Gon",
    "Grad in Bogenmass"
  ],
  "longDescription": "Rechnet Winkel zwischen Bogenmaß, Grad, Gon, Umdrehungen, Bogenminuten und Bogensekunden um. Nach Definition sind 180° = π rad und 400 Gon = eine Umdrehung; das angezeigte Zahlenresultat wird gerundet.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Die Umrechnung nutzt das Verhältnis jeder Einheit zum Radiant, etwa 1° = π/180 rad. Gerechnet wird mit einem Zahlenwert als Näherung für π, nicht mit einem symbolischen exakten Winkel.",
  "example": "180 Grad sind π im Bogenmaß, und ein Grad hat 60 Bogenminuten oder 3600 Bogensekunden.",
  "faq": [
    {
      "q": "Was ist ein Gon?",
      "a": "Ein Hundertstel eines rechten Winkels, eine volle Umdrehung hat also 400 Gon. Es wird im Vermessungswesen verwendet."
    },
    {
      "q": "Warum π/180 statt einer kurzen Dezimalzahl?",
      "a": "Die Definition lautet 1° = π/180 rad. Die Berechnung nutzt die verfügbare numerische Näherung von π und rundet die Anzeige; die Schreibweise 0,0174533 rad verkürzt die Genauigkeit zusätzlich."
    },
    {
      "q": "Wo werden Bogenminuten verwendet?",
      "a": "In Astronomie, Navigation und Optik — eine Bogenminute ist ein Sechzigstel eines Grades."
    },
    {
      "q": "Deckt das auch geografische Breite und Länge ab?",
      "a": "Es rechnet den Winkel selbst um. Die Koordinatenschreibweise in Grad, Minuten und Sekunden ist ein eigenes Format."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
