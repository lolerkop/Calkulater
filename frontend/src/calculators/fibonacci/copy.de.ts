import type { CalculatorCopy } from '../../lib/platform/types';

export const fibonacciCopyDe: CalculatorCopy = {
  "name": "Fibonacci-Rechner",
  "slug": "fibonacci-rechner",
  "shortDescription": "Die n-te Fibonacci-Zahl, die Summe der Reihe und das Verhältnis benachbarter Glieder.",
  "seoTitle": "Fibonacci-Zahlen berechnen",
  "seoDescription": "Finde die n-te Fibonacci-Zahl, die Summe der Reihe und das Verhältnis benachbarter Glieder, das sich dem Goldenen Schnitt nähert.",
  "h1": "Fibonacci-Rechner",
  "keywords": [
    "Fibonacci berechnen",
    "Fibonacci-Zahl",
    "Fibonacci-Folge",
    "Goldener Schnitt Fibonacci"
  ],
  "longDescription": "Berechnet ein Glied, die Summe der ersten n Glieder einschließlich des gesuchten Glieds und das vorherige Glied. Hier gilt F₁ = 0 und F₂ = 1: Index 1 bezeichnet null. Ab n = 3 wird auch das näherungsweise Verhältnis zum Vorgänger angezeigt. BigInt erhält alle Ziffern der ganzzahligen Glieder und Summen. Zulässig sind ganze Indizes von 1 bis 78. Diese beibehaltene Seitengrenze ist keine Grenze der Rekursion oder von BigInt. Die Tabelle zeigt zehn Glieder.",
  "howItWorks": "F₁ = 0, F₂ = 1 und Fₙ = Fₙ₋₁ + Fₙ₋₂. Die ersten n Glieder ergeben Fₙ₊₂ − 1. Die verbreitete Konvention F₀ = 0 beginnt einen Index früher. Vergleiche deshalb die Anfangsglieder, bevor du einen Index aus einer anderen Quelle übernimmst.",
  "example": "Das zwanzigste Glied ist 4181, die Summe der ersten zwanzig ist 10 945, und das Verhältnis zum vorigen Glied liegt bereits bei 1,618.",
  "howToUse": [
    "Trage die Stelle des gesuchten Glieds ein.",
    "Die Zählung beginnt bei F₁ = 0 und F₂ = 1.",
    "Verfügbar sind die Stellen von der ersten bis zur achtundsiebzigsten.",
    "Das Verhältnis zum vorigen Glied erscheint ab dem dritten."
  ],
  "faq": [
    {
      "q": "Wo beginnt die Reihe?",
      "a": "Hier bei null: F₁ = 0, F₂ = 1, F₃ = 1, F₄ = 2 und so fort. Eine andere gebräuchliche Übereinkunft macht das erste Glied zu 1, was jede Stelle um eins verschiebt — das zehnte Glied wäre dann 55 statt 34."
    },
    {
      "q": "Warum kann ich nicht über das 78. Glied hinaus?",
      "a": "78 ist die beibehaltene Grenze dieser Seite. Bei dieser Nummerierung ist das 79. Glied 8944394323791464 noch eine sichere ganze Number-Zahl; das 80. überschreitet die allgemeine sichere Ganzzahlgrenze. BigInt könnte weiterrechnen, aber diese Seite unterstützt solche Eingaben nicht."
    },
    {
      "q": "Wie hängt die Reihe mit dem Goldenen Schnitt zusammen?",
      "a": "Das Verhältnis benachbarter Glieder nähert sich mit wachsender Stelle 1,6180339… Beim zehnten Glied liegt es bei 1,619, und beim zwanzigsten ist es auf vier Nachkommastellen vom Grenzwert nicht zu unterscheiden."
    },
    {
      "q": "Warum haben die ersten beiden Glieder kein Verhältnis?",
      "a": "Es gibt nichts, wodurch geteilt werden könnte: das erste Glied hat keinen Vorgänger, und der Vorgänger des zweiten ist null. Die Zeile wegzulassen ist ehrlicher, als unendlich auszugeben."
    },
    {
      "q": "Wie groß ist die Summe der ersten n Glieder?",
      "a": "Sie ist stets um eins kleiner als das Glied an der Stelle n+2. Die Summe der ersten zehn ist 88, und das zwölfte Glied ist 89."
    }
  ]
};
