import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const torqueCopyDe: CalculatorCopy = {
  "name": "Drehmomentumrechner",
  "slug": "drehmoment-umrechner",
  "shortDescription": "Drehmoment zwischen N·m, kp·m und Pound-force-Fuß umrechnen.",
  "seoTitle": "Drehmoment umrechnen — N·m, kp·m, lbf·ft",
  "seoDescription": "Rechne Drehmoment zwischen Newtonmetern, Kilopondmetern, Pound-force-Fuß und Pound-force-Zoll um.",
  "h1": "Drehmomentumrechner",
  "keywords": [
    "Drehmoment umrechnen",
    "Nm in lb-ft",
    "Anzugsmoment"
  ],
  "longDescription": "Rechnet Drehmoment zwischen Newtonmetern, Kilonewtonmetern, Newtonzentimetern, Kilopondmetern, Pound-force-Fuß, Pound-force-Zoll und Ounce-force-Zoll um.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über den Newtonmeter mit genauen Faktoren für Kraft und Länge.",
  "example": "Ein Anzugsmoment von 100 N·m sind rund 73,76 Pound-force-Fuß.",
  "faq": [
    {
      "q": "Wie unterscheidet sich Drehmoment von Kraft?",
      "a": "Drehmoment ist Kraft mal Hebelarm, seine Einheit ist deshalb zusammengesetzt: ein Newton mal einem Meter."
    },
    {
      "q": "Ist die Umrechnung des Pound-force-Fuß genau?",
      "a": "Der Faktor folgt aus internationalem Pfund, internationalem Fuß und Standard-g₀: 1 lbf·ft ≈ 1,3558179483314 N·m. Die Definitionen sind genau, diese Dezimalzahl und die Anzeige sind gerundet."
    },
    {
      "q": "Was ist ein Ounce-force-Zoll?",
      "a": "Eine kleine amerikanische Einheit für die Feinmechanik: ein Sechzehntel eines Pound-force-Zoll."
    },
    {
      "q": "Lässt sich Drehmoment in Energie umrechnen?",
      "a": "Nein. Ein Newtonmeter Drehmoment und ein Joule Energie teilen die Dimension, sind aber verschiedene Größen."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
