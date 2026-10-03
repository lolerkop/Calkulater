import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const areaCopyDe: CalculatorCopy = {
  "name": "Flächenumrechner",
  "slug": "flaechen-umrechner",
  "shortDescription": "Flächen zwischen metrischen und angelsächsischen Einheiten umrechnen.",
  "seoTitle": "Fläche umrechnen — m², Hektar, Acre, Quadratfuß",
  "seoDescription": "Rechne Flächen zwischen Quadratmetern, Hektar, Acre, Quadratfuß und Quadratzoll um.",
  "h1": "Flächenumrechner",
  "keywords": [
    "Fläche umrechnen",
    "Hektar in Acre",
    "m2 in ft2",
    "Flaeche umrechnen"
  ],
  "longDescription": "Rechnet Flächen zwischen Quadratmillimetern, -zentimetern, -metern und -kilometern, Hektar, Quadratzoll und Quadratfuß sowie Acre um. Die Einheiten definieren die Faktoren; Berechnung und Anzeige haben eine endliche Genauigkeit.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit hat einen genauen Faktor zum Quadratmeter.",
  "example": "Ein Hektar sind 10 000 m² und ein Acre 4046,8564224 m².",
  "faq": [
    {
      "q": "Wie unterscheidet sich ein Hektar von einem Acre?",
      "a": "Ein Hektar sind genau 10 000 m², ein Acre dagegen 4046,86 m². Ein Hektar sind rund 2,47 Acre."
    },
    {
      "q": "Warum sind die Faktoren nicht die Quadrate der Längenfaktoren?",
      "a": "Sie sind es, aber als fertige Zahlen ausgeschrieben, damit der Umrechner nicht von einer Dimensionsrechnung abhängt und leicht nachzuprüfen bleibt."
    },
    {
      "q": "Taugt das für Grundstücke?",
      "a": "Ja, Hektar und Acre sind übliche Landmaße. Für Urkunden gleiche mit der amtlichen Vermessung ab."
    },
    {
      "q": "Sind die angelsächsischen Flächeneinheiten genau?",
      "a": "Ja. Ein Quadratzoll sind 0,00064516 m² nach der Festlegung des Zolls."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
