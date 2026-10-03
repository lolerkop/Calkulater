import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const lengthCopyDe: CalculatorCopy = {
  "name": "Längenumrechner",
  "slug": "laengen-umrechner",
  "shortDescription": "Zwischen metrischen und angelsächsischen Längeneinheiten umrechnen.",
  "seoTitle": "Länge umrechnen — Meter, Fuß, Zoll, Meilen",
  "seoDescription": "Rechne Längen zwischen Metern, Zentimetern, Kilometern, Zoll, Fuß, Yard, Meilen und Seemeilen um.",
  "h1": "Längenumrechner",
  "keywords": [
    "Länge umrechnen",
    "Meter in Fuß",
    "Zoll in cm",
    "Laenge umrechnen"
  ],
  "longDescription": "Rechnet Längen zwischen metrischen und angelsächsischen Einheiten um: Millimeter, Zentimeter, Meter, Kilometer, Zoll, Fuß, Yard, Meilen und Seemeilen. Die Einheitenfaktoren sind genau definiert; Berechnung und Ergebnisanzeige haben endliche Genauigkeit.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit hat einen genauen Faktor zum Meter, und die Umrechnung läuft über diese Basis.",
  "example": "1 Zoll sind genau 2,54 cm, und 1 Meile sind genau 1609,344 m.",
  "faq": [
    {
      "q": "Sind die angelsächsischen Umrechnungen genau?",
      "a": "Verwendet werden internationale Definitionen: 1 Zoll = 0,0254 m, 1 Fuß = 0,3048 m. Die Faktoren sind nach Definition genau, die Zahlenanzeige wird gerundet. Der historische US Survey Foot gehört nicht dazu."
    },
    {
      "q": "Was ist eine Seemeile?",
      "a": "Genau 1852 Meter, verwendet in der See- und Luftfahrt. Sie ist länger als die Landmeile mit 1609,344 m."
    },
    {
      "q": "Funktioniert der Umrechner in beide Richtungen?",
      "a": "Ja. Tausche Ausgangs- und Zieleinheit, und die Umrechnung läuft in die andere Richtung."
    },
    {
      "q": "Warum liefert dieselbe Einheit den Wert unverändert zurück?",
      "a": "Eine Einheit in sich selbst umzurechnen überspringt die Basis ganz, es entsteht also keine Gleitkommaabweichung."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
