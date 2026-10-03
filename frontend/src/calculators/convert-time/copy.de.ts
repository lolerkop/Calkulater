import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const timeCopyDe: CalculatorCopy = {
  "name": "Zeitumrechner",
  "slug": "zeit-umrechner",
  "shortDescription": "Zeit zwischen Millisekunden, Sekunden, Minuten, Stunden, Tagen und Wochen umrechnen.",
  "seoTitle": "Zeit umrechnen — Sekunden, Minuten, Stunden, Tage, Wochen",
  "seoDescription": "Rechne eine Dauer zwischen Millisekunden, Sekunden, Minuten, Stunden, Tagen und Wochen um.",
  "h1": "Zeitumrechner",
  "keywords": [
    "Zeit umrechnen",
    "Stunden in Minuten",
    "Sekunden in Stunden"
  ],
  "longDescription": "Rechnet eine Dauer zwischen Millisekunden, Sekunden, Minuten, Stunden, Tagen und Wochen um. Monate und Jahre fehlen bewusst: ihre Länge liegt nicht fest, ein einzelner Faktor lieferte also eine plausible und falsche Antwort.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über die Sekunde mit genauen Faktoren.",
  "example": "90 Minuten sind 1,5 Stunden, und eine Woche sind genau 604 800 Sekunden.",
  "faq": [
    {
      "q": "Warum fehlen Monate und Jahre?",
      "a": "Ein Monat hat 28 bis 31 Tage, und ein Jahr kann ein Schaltjahr sein. Ein fester Faktor träfe still eine Annahme für dich."
    },
    {
      "q": "Wie bekomme ich die Zeit zwischen zwei Daten?",
      "a": "Nimm den Rechner für die Differenz zweier Daten — er arbeitet mit dem Kalender und nicht mit einem Faktor."
    },
    {
      "q": "Hat ein Tag hier immer 86 400 Sekunden?",
      "a": "Ja. Schaltsekunden und Umstellungen auf Sommerzeit sind Kalenderwirkungen und keine Festlegungen von Einheiten."
    },
    {
      "q": "Kann ich damit das Lauftempo umrechnen?",
      "a": "Nein — das Tempo mischt Zeit und Strecke. Dafür gibt es den Rechner für das Lauftempo."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
