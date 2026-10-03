import type { CalculatorCopy } from '../../lib/platform/types';

export const geomParallelogramCopyDe: CalculatorCopy = {
  "name": "Parallelogrammrechner",
  "slug": "parallelogramm-rechner",
  "shortDescription": "Fläche aus Grundseite und Höhe oder aus zwei Seiten und dem eingeschlossenen Winkel.",
  "seoTitle": "Parallelogramm berechnen — Fläche, Umfang, Diagonalen",
  "seoDescription": "Berechne die Fläche eines Parallelogramms aus Grundseite und Höhe oder aus zwei Seiten und dem Winkel, mit Umfang und Diagonalen.",
  "h1": "Parallelogrammrechner",
  "keywords": [
    "Parallelogramm berechnen",
    "Fläche Parallelogramm",
    "Diagonalen Parallelogramm",
    "Parallelogramm Flaeche"
  ],
  "longDescription": "Löst ein Parallelogramm auf zwei Wegen: aus einer Grundseite mit ihrer Höhe und aus zwei Seiten mit dem eingeschlossenen Winkel. Der zweite Modus liefert zusätzlich Umfang, Höhe und beide Diagonalen; der erste nur die Fläche, denn die zweite Seite folgt nicht aus Grundseite und Höhe, und statt eines plausiblen Umfangs steht dort ein Strich. Bei 0 oder 180 Grad fällt die Figur zu einer Linie zusammen: diese Eingabe wird abgewiesen, statt eine Fläche von null zu liefern.",
  "howItWorks": "Aus Grundseite a und senkrechter Höhe h: S = ah. Aus Nachbarseiten a, b und eingeschlossenem Winkel θ: S = ab sin θ, h = b sin θ, P = 2(a+b). θ wird in Grad eingegeben. Die geordneten Diagonalen sind Dmax/min = √[a²+b² ± 2ab|cos θ|]. Gleichwertige Halbwinkelformeln verhindern, dass die kleinere Diagonale beim Subtrahieren fast gleicher Quadrate verloren geht.",
  "example": "Seiten von 10 und 8 cm bei einem Winkel von 30° ergeben eine Fläche von 40 cm² und einen Umfang von 36 cm.",
  "howToUse": [
    "Wähle Grundseite und Höhe oder zwei benachbarte Seiten mit ihrem eingeschlossenen Winkel.",
    "Die Höhe wird senkrecht zur Grundseite gemessen.",
    "Gib den Winkel in Grad strikt zwischen 0° und 180° an.",
    "Längen müssen positiv sein und dieselbe Einheit verwenden; Grundseite und Höhe allein bestimmen weder Umfang noch Diagonalen."
  ],
  "faq": [
    {
      "q": "Warum wird im Höhenmodus kein Umfang angezeigt?",
      "a": "Weil die zweite Seite nicht aus Grundseite und Höhe folgt: unendlich viele Parallelogramme verschiedener Neigung teilen dieselbe Fläche. Einen Umfang auszugeben wäre erfunden."
    },
    {
      "q": "Was passiert bei 90 Grad?",
      "a": "Der Sinus ist eins, und das Parallelogramm wird zum Rechteck: die Fläche ist das Produkt der Seiten."
    },
    {
      "q": "Warum werden 180 Grad abgewiesen?",
      "a": "Bei diesem Winkel fällt die Figur zu einer Linie zusammen und ist kein Parallelogramm mehr. Eine Fläche von null wäre formal richtig, aber sinnlos, deshalb meldet der Rechner stattdessen das Problem."
    },
    {
      "q": "Wie unterscheidet sich ein Parallelogramm von einer Raute?",
      "a": "Bei einer Raute sind alle Seiten gleich. Trage für a und b denselben Wert ein, und die Rechnung gilt auch für sie."
    },
    {
      "q": "Ändert 180°−θ statt θ die Parallelogrammfläche?",
      "a": "Nein: sin(180°−θ) = sin θ. Höhe, Umfang und die nach Länge geordneten Diagonalen stimmen ebenfalls überein; die Neigung ändert sich. Bei θ = 90° sind die Diagonalen gleich und die Figur ist ein Rechteck."
    }
  ],
  "disclaimer": "Vorausgesetzt sind zwei Paare paralleler Seiten in einer Ebene. 0° und 180° sind ausgeschlossen; ein positiver kleiner Winkel wird nicht auf null gesetzt. Höhe und Fläche bestimmen Neigung und zweite Seite nicht eindeutig; Ergebnisse sind gerundet."
};
