import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const digitalCopyDe: CalculatorCopy = {
  "name": "Umrechner für Datenmengen",
  "slug": "datenmengen-umrechner",
  "shortDescription": "Byte zwischen dezimalen und binären Einheiten umrechnen.",
  "seoTitle": "Datenmengen umrechnen — GB, GiB, MB, MiB",
  "seoDescription": "Rechne Datenmengen zwischen Byte, Kilobyte, Megabyte, Gigabyte und ihren binären Entsprechungen um.",
  "h1": "Umrechner für Datenmengen",
  "keywords": [
    "Datenmengen umrechnen",
    "GB in GiB",
    "MB in MiB"
  ],
  "longDescription": "Rechnet Datenmengen zwischen dezimalen Einheiten (kB, MB, GB, TB) und binären (KiB, MiB, GiB, TiB) um. Ein Gigabyte hat 1 000 000 000 Byte, ein Gibibyte 1 073 741 824. Ein Terabyte sind etwa 931,32 GiB; Programme können beide Systeme anzeigen.",
  "howToUse": [
    "Trage die Größe ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Dezimale Vorsätze gehen in Potenzen von 1000, binäre in Potenzen von 1024.",
  "example": "1 TB sind 931,32 GiB — deshalb wirken Plattenkapazitäten im Betriebssystem kleiner.",
  "faq": [
    {
      "q": "Ist ein Megabyte dasselbe wie ein Mebibyte?",
      "a": "Nein. Ein Megabyte sind 1 000 000 Byte und ein Mebibyte 1 048 576. Der Abstand wächst mit jedem Vorsatzschritt."
    },
    {
      "q": "Warum zeigt meine Platte mit 1 TB nur 931 GB?",
      "a": "Der Hersteller zählt dezimale Terabyte, während das Betriebssystem binäre Gibibyte meldet, sie aber oft als GB beschriftet. Die Menge ist dieselbe, die Einheiten sind es nicht."
    },
    {
      "q": "Welches System soll ich verwenden?",
      "a": "Hersteller von Datenträgern und Netzwerktechnik nutzen dezimale Einheiten. Betriebssysteme und Speichergrößen sind meist binär. Richte dich danach, was deine Quelle verwendet."
    },
    {
      "q": "Wo passen Bit hinein?",
      "a": "Ein Byte sind acht Bit. Netzgeschwindigkeiten werden meist in Bit je Sekunde angegeben, Datenmengen in Byte."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
