import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const flowCopyDe: CalculatorCopy = {
  "name": "Durchflussumrechner",
  "slug": "durchfluss-umrechner",
  "shortDescription": "Volumenstrom zwischen m³/h, Litern je Minute und CFM umrechnen.",
  "seoTitle": "Durchfluss umrechnen — m³/h, l/min, CFM, GPM",
  "seoDescription": "Rechne den Volumenstrom zwischen Kubikmetern je Stunde, Litern je Minute, Kubikfuß je Minute und Gallonen je Minute um.",
  "h1": "Durchflussumrechner",
  "keywords": [
    "Durchfluss umrechnen",
    "m3/h in l/min",
    "CFM",
    "Volumenstrom"
  ],
  "longDescription": "Rechnet den Volumenstrom zwischen Kubikmetern je Sekunde und je Stunde, Litern je Sekunde, Minute und Stunde, Kubikfuß je Minute und US-Gallonen je Minute um.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über den Kubikmeter je Sekunde mit genauen Faktoren.",
  "example": "Ein Kubikmeter je Stunde sind 16,67 Liter je Minute.",
  "faq": [
    {
      "q": "Geht es um Volumen- oder Massenstrom?",
      "a": "Um den Volumenstrom: er arbeitet mit Volumen je Zeiteinheit und braucht keine Stoffdichte."
    },
    {
      "q": "Was sind CFM und GPM?",
      "a": "CFM sind Kubikfuß je Minute, üblich in der Lüftungstechnik; GPM sind US-Gallonen je Minute, üblich bei Pumpen."
    },
    {
      "q": "Wie komme ich zum Massenstrom?",
      "a": "Multipliziere den Volumenstrom mit der Dichte des Stoffes. Dafür gibt es einen eigenen Dichteumrechner."
    },
    {
      "q": "Welche Gallone meint GPM?",
      "a": "Hier wird die US-Gallone mit 3,785411784 L verwendet. Prüfe die Bedeutung von GPM in der Quelle; die britische Gallone hat ein anderes Volumen."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
