import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const powerCopyDe: CalculatorCopy = {
  "name": "Leistungsumrechner",
  "slug": "leistung-umrechner",
  "shortDescription": "Leistung zwischen Watt, Kilowatt und beiden Arten von Pferdestärken umrechnen.",
  "seoTitle": "Leistung umrechnen — Watt, Kilowatt, PS, BTU/h",
  "seoDescription": "Rechne Leistung zwischen Watt, Kilowatt, Megawatt, mechanischen und metrischen Pferdestärken und BTU je Stunde um.",
  "h1": "Leistungsumrechner",
  "keywords": [
    "Leistung umrechnen",
    "kW in PS",
    "Pferdestärken",
    "Pferdestaerken"
  ],
  "longDescription": "Rechnet Leistung zwischen Watt, Kilowatt, Megawatt, mechanischen Pferdestärken, metrischen Pferdestärken und BTU je Stunde um. Mechanische und metrische Pferdestärke sind verschiedene Einheiten — dieser Umrechner hält sie auseinander, statt sie zu mitteln.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über das Watt mit festgelegten Faktoren.",
  "example": "100 kW sind rund 136 metrische Pferdestärken oder rund 134 mechanische.",
  "faq": [
    {
      "q": "Warum gibt es zwei Arten von Pferdestärken?",
      "a": "Die mechanische Pferdestärke sind 550 ft·lbf/s = 745,6999 W; die metrische sind genau 75 kp·m/s = 735,49875 W. Sie unterscheiden sich um rund 1,4 %."
    },
    {
      "q": "Welche steht in Fahrzeugangaben?",
      "a": "Prüfe die Definition in der Dokumentation: mechanische hp und metrische PS sind unterschiedliche Einheiten. Land oder Sprache allein bestimmen die Wahl nicht; kW lassen sich gezielt in beide umrechnen."
    },
    {
      "q": "Wofür werden BTU je Stunde verwendet?",
      "a": "Für die Leistung von Heiz- und Klimageräten. Ein Kilowatt sind rund 3412 BTU/h."
    },
    {
      "q": "Ist eine Kilowattstunde eine Einheit der Leistung?",
      "a": "Nein, sie ist Energie — Leistung mal Zeit. Für Kilowattstunden nimm den Energieumrechner."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
