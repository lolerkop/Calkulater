import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const frequencyCopyDe: CalculatorCopy = {
  "name": "Frequenzumrechner",
  "slug": "frequenz-umrechner",
  "shortDescription": "Frequenz zwischen Hertz, Kilohertz, Megahertz und Umdrehungen je Minute umrechnen.",
  "seoTitle": "Frequenz umrechnen — Hz, kHz, MHz, GHz, U/min",
  "seoDescription": "Rechne Frequenz zwischen Hertz, Kilohertz, Megahertz, Gigahertz und Umdrehungen je Minute um.",
  "h1": "Frequenzumrechner",
  "keywords": [
    "Frequenz umrechnen",
    "GHz in MHz",
    "Umdrehungen je Minute"
  ],
  "longDescription": "Rechnet Frequenz zwischen Hertz, Kilohertz, Megahertz, Gigahertz, Millihertz und Umdrehungen je Minute um. Gigahertz stehen in den Angaben zu Prozessoren und WLAN, Umdrehungen je Minute in Motordatenblättern.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Einheiten mit SI-Vorsatz werden mit dessen Faktor in Hertz umgerechnet; Umdrehungen pro Minute werden durch 60 geteilt.",
  "example": "WLAN bei 2,4 GHz sind 2400 MHz, und ein Motor mit 3000 U/min dreht mit 50 Hz.",
  "faq": [
    {
      "q": "Wie hängen Hertz und Umdrehungen je Minute zusammen?",
      "a": "Bei einer Drehfrequenz gilt 1 Hz = 1 Umdrehung je Sekunde = 60 U/min. Allgemein zählt Hertz Perioden je Sekunde, nicht zwingend Umdrehungen."
    },
    {
      "q": "Warum werden Prozessoren in Gigahertz gemessen?",
      "a": "Ein Gigahertz ist eine Milliarde Takte je Sekunde — ein bequemer Maßstab für heutige Bausteine."
    },
    {
      "q": "Wie unterscheidet sich mHz von MHz?",
      "a": "Kleines m steht für Milli, ein Tausendstel Hertz; großes M für Mega, eine Million Hertz. Eine Milliarde auseinander."
    },
    {
      "q": "Lässt sich Frequenz in die Periodendauer umrechnen?",
      "a": "Die Periodendauer ist der Kehrwert der Frequenz. Dieser Umrechner führt keine Kehrwertumformung aus — teile selbst eins durch die Frequenz."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
