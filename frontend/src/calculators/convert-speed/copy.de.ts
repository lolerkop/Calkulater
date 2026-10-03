import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const speedCopyDe: CalculatorCopy = {
  "name": "Geschwindigkeitsumrechner",
  "slug": "geschwindigkeit-umrechner",
  "shortDescription": "Geschwindigkeit zwischen km/h, m/s, mph und Knoten umrechnen.",
  "seoTitle": "Geschwindigkeit umrechnen — km/h, m/s, mph, Knoten",
  "seoDescription": "Rechne Geschwindigkeit zwischen Kilometern je Stunde, Metern je Sekunde, Meilen je Stunde, Knoten und Fuß je Sekunde um.",
  "h1": "Geschwindigkeitsumrechner",
  "keywords": [
    "Geschwindigkeit umrechnen",
    "km/h in mph",
    "Knoten",
    "m/s in km/h"
  ],
  "longDescription": "Rechnet Geschwindigkeit zwischen Metern je Sekunde, Kilometern je Stunde, Meilen je Stunde, Knoten und Fuß je Sekunde um. Knoten werden in der See- und Luftfahrt verwendet, Meilen je Stunde auf Verkehrsschildern in den USA und Großbritannien.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über Meter je Sekunde mit genauen Faktoren.",
  "example": "36 km/h sind genau 10 m/s, und ein Knoten sind 1,852 km/h.",
  "faq": [
    {
      "q": "Was ist ein Knoten?",
      "a": "Eine Seemeile je Stunde, also 1,852 km/h. Er wird in der See- und Luftfahrt verwendet."
    },
    {
      "q": "Warum sind 36 km/h genau 10 m/s?",
      "a": "Teile den Zahlenwert in km/h durch 3,6, um m/s zu erhalten: 36/3,6 = 10. In Gegenrichtung wird mit 3,6 multipliziert; der Faktor folgt aus 1000 Metern und 3600 Sekunden."
    },
    {
      "q": "Ist die Umrechnung von mph genau?",
      "a": "Ja. Die Meile ist als 1609,344 m festgelegt, ein mph sind also genau 0,44704 m/s."
    },
    {
      "q": "Taugt das fürs Laufen?",
      "a": "Das Lauftempo wird meist in Minuten je Kilometer angegeben — dafür gibt es einen eigenen Rechner."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
