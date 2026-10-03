import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const pressureCopyDe: CalculatorCopy = {
  "name": "Druckumrechner",
  "slug": "druck-umrechner",
  "shortDescription": "Druck zwischen Pascal, Bar, Atmosphären und psi umrechnen.",
  "seoTitle": "Druck umrechnen — Bar, Atmosphären, psi, Pascal",
  "seoDescription": "Rechne Druck zwischen Pascal, Kilopascal, Bar, Atmosphären, psi und Millimeter Quecksilbersäule um.",
  "h1": "Druckumrechner",
  "keywords": [
    "Druck umrechnen",
    "Bar in psi",
    "Atmosphären",
    "Bar in Pascal"
  ],
  "longDescription": "Rechnet Druck zwischen Pascal, Bar, Atmosphären, psi und Millimeter Quecksilbersäule um. Vier Systeme treffen in einer Liste zusammen: Manometer und Reifen nutzen Bar oder psi, Wetterberichte Hektopascal und die Medizin Millimeter Quecksilbersäule.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über das Pascal mit genauen Faktoren.",
  "example": "Ein Bar sind 100 000 Pa und rund 14,5 psi.",
  "faq": [
    {
      "q": "Sind Bar und Atmosphäre dasselbe?",
      "a": "Beinahe: ein Bar sind 100 000 Pa und eine Atmosphäre 101 325 Pa, rund 1,3 % auseinander."
    },
    {
      "q": "Welchen Druck sollen Reifen haben?",
      "a": "Der Umrechner bestimmt keinen Reifendruck. Nutze Wert und Messbedingungen aus den Angaben für dein Fahrzeug und rechne anschließend die genannte Einheit um."
    },
    {
      "q": "Warum nutzt die Medizin Millimeter Quecksilbersäule?",
      "a": "Eine historische Einheit vom Quecksilbermanometer: 1 mmHg sind genau 133,322387415 Pa. Die Normatmosphäre sind 760 Torr, das ergibt 759,9999 übliche Millimeter — Torr und mmHg sind leicht verschieden festgelegt."
    },
    {
      "q": "Was ist ein Hektopascal im Wetterbericht?",
      "a": "Es sind 100 Pa, genau ein Millibar. Beide Einheiten sind zahlenmäßig gleich."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
