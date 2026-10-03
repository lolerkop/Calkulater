import type { CalculatorCopy } from '../../lib/platform/types';

export const convertFuelEconomyCopyDe: CalculatorCopy = {
  "name": "Umrechner für den Kraftstoffverbrauch",
  "slug": "verbrauch-umrechner",
  "shortDescription": "Verbrauch zwischen l/100 km, km/l und Meilen je Gallone umrechnen.",
  "seoTitle": "Verbrauch umrechnen: l/100 km, km/l und mpg",
  "seoDescription": "Rechne den Kraftstoffverbrauch zwischen Litern je 100 km, Kilometern je Liter und Meilen je Gallone in amerikanischem und britischem Maß um.",
  "h1": "Umrechner für den Kraftstoffverbrauch",
  "keywords": [
    "Verbrauch umrechnen",
    "l/100km in mpg",
    "mpg in Liter",
    "Kraftstoffverbrauch umrechnen"
  ],
  "longDescription": "Rechnet l/100 km, km/l und amerikanische oder britische mpg um. Verbrauch je Strecke und Strecke je Kraftstoffmenge hängen umgekehrt zusammen: Doppelte l/100 km halbieren mpg. Zwischen km/l und mpg besteht ein proportionaler Zusammenhang. Die Gallonen unterscheiden sich, ihre mpg-Werte stehen deshalb getrennt.",
  "howToUse": [
    "Trage den Verbrauchswert ein.",
    "Wähle die Einheit, in der er angegeben ist.",
    "Wähle die gewünschte Einheit.",
    "Die übrigen drei stehen zum Vergleich daneben."
  ],
  "howItWorks": "Jede Einheit läuft über l/100 km. Kilometer je Liter hängen umgekehrt zusammen: 100 ÷ Wert. Meilen je Gallone rechnen sich als 100 × Gallonenvolumen ÷ (Wert × 1,609344). Eine US-Gallone sind 3,785411784 l und eine britische 4,54609 l.",
  "example": "Ein Verbrauch von 8 l/100 km sind 12,5 km/l, 29,402 mpg (US) und 35,31 mpg (UK).",
  "faq": [
    {
      "q": "Warum kann ich nicht einfach mit einem Faktor multiplizieren?",
      "a": "Weil der Zusammenhang umgekehrt ist und nicht proportional. Liter je hundert Kilometer steigen, während Meilen je Gallone fallen, die Umrechnung läuft also über eine Division, und einen festen Faktor dazwischen gibt es nicht."
    },
    {
      "q": "Wie unterscheiden sich amerikanische und britische mpg?",
      "a": "Bei gleichem tatsächlichem Verbrauch ist der britische mpg-Zahlenwert wegen der größeren Gallone etwa 20,1% höher als der amerikanische. Derselbe Wert, etwa 30 mpg, steht in beiden Systemen für einen anderen Verbrauch; wähle die angegebene Gallone."
    },
    {
      "q": "Welche Einheit wird wo verwendet?",
      "a": "Liter je 100 km sind in Kontinentaleuropa üblich, Kilometer je Liter in Teilen Asiens und Lateinamerikas, und Meilen je Gallone in den USA und Großbritannien."
    },
    {
      "q": "Ist eine kleinere Zahl besser oder schlechter?",
      "a": "Das hängt von der Einheit ab, und daher rührt die übliche Verwirrung. Bei Litern je 100 km ist weniger besser; bei Kilometern je Liter und Meilen je Gallone ist mehr besser."
    },
    {
      "q": "Spart dieselbe Senkung in l/100 km dieselbe Kraftstoffmenge?",
      "a": "Ja, bei derselben Strecke. Sowohl 10→9 als auch 6→5 l/100 km sparen 1 l je 100 km, also 10 l auf 1000 km. Die Änderungen in mpg unterscheiden sich wegen des umgekehrten Zusammenhangs; eine Amortisation benötigt zusätzlich Kosten und Fahrleistung."
    }
  ],
  "disclaimer": "Einheitenumrechnung für den eingegebenen Wert. Sie prognostiziert weder tatsächlichen Verbrauch noch Amortisation; die Anzeige ist gerundet."
};
