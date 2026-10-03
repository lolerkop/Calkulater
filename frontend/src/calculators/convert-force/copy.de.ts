import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const forceCopyDe: CalculatorCopy = {
  "name": "Kraftumrechner",
  "slug": "kraft-umrechner",
  "shortDescription": "Kraft zwischen Newton, Kilopond und Pound-force umrechnen.",
  "seoTitle": "Kraft umrechnen — Newton, Kilopond, Pound-force",
  "seoDescription": "Rechne Kraft zwischen Newton, Kilonewton, Kilopond, Tonnenkraft, Pound-force und Dyn um.",
  "h1": "Kraftumrechner",
  "keywords": [
    "Kraft umrechnen",
    "Newton in Kilopond",
    "Pound-force"
  ],
  "longDescription": "Rechnet Kraft zwischen Newton, Kilonewton, Millinewton, Kilopond, Tonnenkraft, Pound-force und Dyn um. Das Kilopond steht in technischen Datenblättern, das Pound-force in amerikanischen Unterlagen.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über das Newton mit genau festgelegten Faktoren.",
  "example": "Ein Kilopond sind 9,80665 Newton — das Gewicht eines Kilogramms bei Normfallbeschleunigung.",
  "faq": [
    {
      "q": "Wie unterscheidet sich das Kilopond vom Kilogramm?",
      "a": "Ein Kilogramm misst Masse; ein Kilopond misst Kraft — das Gewicht eines Kilogramms bei der Normfallbeschleunigung von 9,80665 m/s²."
    },
    {
      "q": "Ist die Umrechnung des Pound-force genau?",
      "a": "Ja. Das Pfund ist als 0,45359237 kg festgelegt und die Normfallbeschleunigung als 9,80665 m/s², ein Pound-force sind also genau 4,4482216152605 N."
    },
    {
      "q": "Wo wird das Dyn verwendet?",
      "a": "Im CGS-System und in älteren physikalischen Nachschlagewerken: ein Dyn ist ein Hunderttausendstel Newton."
    },
    {
      "q": "Lässt sich Kraft in Masse umrechnen?",
      "a": "Nein — es sind verschiedene Größen. Das Kilopond ist lediglich nach der Masse benannt, die es bei Normfallbeschleunigung erzeugt."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
