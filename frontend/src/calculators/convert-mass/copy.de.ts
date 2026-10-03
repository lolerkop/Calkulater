import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const massCopyDe: CalculatorCopy = {
  "name": "Masseumrechner",
  "slug": "masse-umrechner",
  "shortDescription": "Masse zwischen metrischen und angelsächsischen Einheiten umrechnen.",
  "seoTitle": "Masse umrechnen — Kilogramm, Pfund, Unzen",
  "seoDescription": "Rechne Masse zwischen Milligramm, Gramm, Kilogramm, Tonnen, Unzen, Pfund und Stone um.",
  "h1": "Masseumrechner",
  "keywords": [
    "Masse umrechnen",
    "kg in lb",
    "Unzen in Gramm"
  ],
  "longDescription": "Rechnet Masse zwischen Milligramm, Gramm, Kilogramm, Tonnen, Unzen, Pfund und Stone um. Die Einheitenfaktoren sind genau definiert; Berechnung und Ergebnisanzeige haben endliche Genauigkeit.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit hat einen genauen Faktor zum Kilogramm, und die Umrechnung läuft über diese Basis.",
  "example": "Ein Pfund sind genau 453,59237 Gramm, und ein Stone sind vierzehn Pfund.",
  "faq": [
    {
      "q": "Ist die Umrechnung des Pfunds genau?",
      "a": "Das Avoirdupois-Pfund ist genau definiert: 1 lb = 0,45359237 kg. Gleitkommarechnung und gerundete Anzeige können trotzdem die gezeigten Stellen begrenzen."
    },
    {
      "q": "Wie unterscheidet sich eine Unze von einer Feinunze?",
      "a": "Dieser Umrechner nutzt die Handelsunze. Die Feinunze für Edelmetalle ist schwerer und ist hier nicht enthalten."
    },
    {
      "q": "Was ist ein Stone?",
      "a": "Eine britische Einheit zu 14 Pfund, rund 6,35 kg. Sie wird in Großbritannien und Irland noch für das Körpergewicht verwendet."
    },
    {
      "q": "Sind Masse und Gewicht dasselbe?",
      "a": "Im Alltag ja, streng genommen hängt das Gewicht aber von der Fallbeschleunigung ab. Dieser Umrechner arbeitet mit der Masse."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
