import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const energyCopyDe: CalculatorCopy = {
  "name": "Energieumrechner",
  "slug": "energie-umrechner",
  "shortDescription": "Energie zwischen Joule, Kilowattstunden, Kalorien und BTU umrechnen.",
  "seoTitle": "Energie umrechnen — Joule, kWh, Kalorien, BTU",
  "seoDescription": "Rechne Energie zwischen Joule, Kilowattstunden, Kalorien, Kilokalorien, BTU und Elektronenvolt um.",
  "h1": "Energieumrechner",
  "keywords": [
    "Energie umrechnen",
    "kWh in Joule",
    "Kalorien in Joule"
  ],
  "longDescription": "Rechnet Energie zwischen Joule, Kilojoule, Megajoule, Wattstunden, Kilowattstunden, Kalorien, Kilokalorien, BTU und Elektronenvolt um. Kilowattstunden stehen auf der Stromrechnung, Kilokalorien auf Lebensmittelverpackungen, BTU auf Heiz- und Klimageräten.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über das Joule mit genau festgelegten Faktoren.",
  "example": "Eine Kilowattstunde sind genau 3 600 000 Joule, und eine Kilokalorie genau 4184 Joule.",
  "faq": [
    {
      "q": "Warum sind eine Kilowattstunde 3 600 000 Joule?",
      "a": "Ein Watt ist ein Joule je Sekunde, ein Kilowatt über eine Stunde sind also 1000 × 3600 Joule."
    },
    {
      "q": "Ist die Kalorie auf Lebensmitteln dieselbe wie hier?",
      "a": "Die „Kalorie“ auf Lebensmitteln ist eine Kilokalorie. Wähle kcal für Nährwertangaben und cal für die kleine thermochemische Kalorie mit 4,184 J."
    },
    {
      "q": "Welche BTU wird verwendet?",
      "a": "Die BTU nach International Table: 1 BTU = 1055,05585262 J. Eine thermochemische BTU ist eine andere Einheit mit etwa 1054,350 J; temperaturbezogene Definitionen weichen ebenfalls ab. Prüfe die Definition deiner Quelle."
    },
    {
      "q": "Warum steht das Elektronenvolt in Exponentialform?",
      "a": "Es sind rund 1,6 × 10⁻¹⁹ Joule, eine gewöhnliche Schreibweise bräuchte also neunzehn führende Nullen."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
