import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const dataRateCopyDe: CalculatorCopy = {
  "name": "Umrechner für die Datenrate",
  "slug": "datenrate-umrechner",
  "shortDescription": "Datenrate zwischen Mbit/s und MB/s umrechnen — Bit sind keine Byte.",
  "seoTitle": "Datenrate umrechnen — Mbit/s in MB/s",
  "seoDescription": "Rechne die Datenrate zwischen Bit und Byte je Sekunde, Megabit, Megabyte und Mebibyte um.",
  "h1": "Umrechner für die Datenrate",
  "keywords": [
    "Mbit in MB",
    "Internetgeschwindigkeit",
    "Datenrate umrechnen"
  ],
  "longDescription": "Rechnet Datenraten zwischen Bit und Byte je Sekunde mit dezimalen Vorsätzen sowie in MiB/s mit binärem Vorsatz um. Das Verhältnis von Mbit/s zu MB/s ist acht; daraus folgt keine tatsächliche Downloadgeschwindigkeit.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über das Bit je Sekunde; ein Byte zählt als acht Bit.",
  "example": "100 Mbit/s = 12,5 MB/s als Einheitenumrechnung. Die tatsächliche Dateiübertragung hängt von Protokoll, Server und Verbindung ab.",
  "faq": [
    {
      "q": "Warum ergeben 100 Mbit/s nur 12,5 MB/s?",
      "a": "Ein Byte hält acht Bit. Anbieter geben Bit an und Dateimanager zeigen Byte, das Verhältnis ist also genau acht."
    },
    {
      "q": "Wie unterscheidet sich MiB/s von MB/s?",
      "a": "Ein Mebibyte sind 1024² Byte, ein Megabyte 10⁶ Byte — rund 4,9 % mehr."
    },
    {
      "q": "Ist der Protokollaufwand enthalten?",
      "a": "Nein: Hier werden nur Einheiten umgerechnet. Der nutzbare Durchsatz kann durch Protokollaufwand und Verbindungsbedingungen abweichen."
    },
    {
      "q": "Wie komme ich von einer Rate zu einer Datenmenge?",
      "a": "Multipliziere mit der Zeit. Für Datenmengen gibt es einen eigenen Umrechner."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
