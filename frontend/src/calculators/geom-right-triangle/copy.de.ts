import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRightTriangleCopyDe: CalculatorCopy = {
  "name": "Rechner für rechtwinklige Dreiecke",
  "slug": "rechtwinkliges-dreieck",
  "shortDescription": "Hypotenuse, Kathete, Fläche und Umfang nach dem Satz des Pythagoras.",
  "seoTitle": "Rechtwinkliges Dreieck berechnen — Hypotenuse und Kathete",
  "seoDescription": "Finde die Hypotenuse aus zwei Katheten oder die fehlende Kathete aus der Hypotenuse, dazu Fläche und Umfang eines rechtwinkligen Dreiecks.",
  "h1": "Rechner für rechtwinklige Dreiecke",
  "keywords": [
    "rechtwinkliges Dreieck berechnen",
    "Satz des Pythagoras",
    "Hypotenuse berechnen",
    "Kathete berechnen"
  ],
  "longDescription": "Ergänzt ein rechtwinkliges Dreieck in beide Richtungen: zwei Katheten ergeben die Hypotenuse, eine Kathete mit der Hypotenuse ergibt die andere Kathete. Der zweite Modus ist der strengere — die Hypotenuse muss länger sein als die Kathete, sonst wird der Ausdruck unter der Wurzel negativ und das Ergebnis hört auf zu bestehen. Das ist die Rechnung hinter dem 3-4-5-Kniff vom Bau, mit dem sich eine rechtwinklige Ecke prüfen lässt.",
  "howItWorks": "a² + b² = c², also c = √(a² + b²) und b = √(c² − a²). Die Fläche eines rechtwinkligen Dreiecks ist das halbe Produkt seiner Katheten.",
  "example": "Katheten von 3 und 4 m ergeben eine Hypotenuse von 5 m, eine Fläche von 6 m² und einen Umfang von 12 m.",
  "howToUse": [
    "Wähle zwei Katheten oder eine Kathete und die Hypotenuse.",
    "Die Katheten bilden den rechten Winkel, die Hypotenuse liegt ihm gegenüber.",
    "Alle Längen müssen positiv sein und dieselbe Einheit verwenden.",
    "Im inversen Modus muss die Hypotenuse strikt länger als die bekannte Kathete sein.",
    "Für ein beliebiges Dreieck ist ein anderer Rechner nötig."
  ],
  "faq": [
    {
      "q": "Warum darf die Hypotenuse nicht einer Kathete gleichen?",
      "a": "Die Hypotenuse ist die längste Seite eines rechtwinkligen Dreiecks. Wären sie gleich, wäre die andere Kathete null, und das Dreieck fiele zu einer Strecke zusammen."
    },
    {
      "q": "Was ist die 3-4-5-Regel?",
      "a": "Ein Kniff beim Abstecken: trage an zwei Seiten 3 und 4 Einheiten ab, und misst die Diagonale genau 5, ist der Winkel dazwischen ein rechter. Es ist ein Sonderfall des Satzes von Pythagoras."
    },
    {
      "q": "Wie wird die Fläche berechnet?",
      "a": "Als halbes Produkt der Katheten: sie stehen senkrecht aufeinander, die eine dient also als Grundseite und die andere als Höhe."
    },
    {
      "q": "Kann die Hypotenuse kürzer sein als eine Kathete?",
      "a": "Nein. Ein solcher Satz beschreibt kein Dreieck, und der Rechner sagt das, statt die Wurzel einer negativen Zahl zu liefern."
    },
    {
      "q": "Warum sind Messwerte wichtig, wenn Hypotenuse und Kathete fast gleich sind?",
      "a": "Die andere Kathete ist b = √((c−a)(c+a)). Die kleine Differenz c−a kann eine große relative Messunsicherheit haben. Werden c und a auf denselben Wert gerundet, entsteht ein entarteter Fall; behalte die ursprüngliche Messgenauigkeit."
    }
  ],
  "disclaimer": "Der rechte Winkel ist eine Modellannahme; zwei Längen beweisen ihn nicht. Fälle mit Fläche null sind ausgeschlossen. Ein gerundetes Ergebnis ersetzt nicht die Prüfung von Winkeln, Toleranzen und Messgenauigkeit."
};
