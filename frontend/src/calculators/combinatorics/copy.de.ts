import type { CalculatorCopy } from '../../lib/platform/types';

export const combinatoricsCopyDe: CalculatorCopy = {
  "name": "Rechner für Kombinationen und Variationen",
  "slug": "kombinationen-variationen",
  "shortDescription": "Kombinationen und Variationen, mit oder ohne Wiederholung.",
  "seoTitle": "Kombinationen und Variationen berechnen — nCr und nPr",
  "seoDescription": "Berechne Kombinationen und Variationen mit oder ohne Wiederholung, mit genauen ganzzahligen Ergebnissen.",
  "h1": "Rechner für Kombinationen und Variationen",
  "keywords": [
    "Kombinationen berechnen",
    "Variationen berechnen",
    "nCr",
    "nPr",
    "Kombinatorik"
  ],
  "longDescription": "Zählt Auswahlen in vier Modellen: ungeordnete Kombinationen oder geordnete Variationen, jeweils mit oder ohne Wiederholung. n und k sind ganze Zahlen von 0 bis 1000; ohne Wiederholung darf k nicht größer als n sein. Eine leere Auswahl k = 0 hat in jedem Modus genau eine Möglichkeit, auch für n = 0. Bei n = 0 und k > 0 ergeben sich mit Wiederholung null Möglichkeiten. Das Hauptergebnis ist eine exakte BigInt-Ganzzahl mit allen Ziffern; die zusätzliche wissenschaftliche Schreibweise ist nur eine kurze Näherung.",
  "howItWorks": "Ohne Wiederholung: C(n,k) = n!/[k!(n−k)!] und P(n,k) = n!/(n−k)!. Mit Wiederholung und n ≥ 1: C(n+k−1,k) und nᵏ. Bei k = 0 zählt die leere Auswahl einmal; bei n = 0 und k > 0 mit Wiederholung ist die Anzahl null. Die Ganzzahlarithmetik bleibt exakt, ohne das Ergebnis in Number umzuwandeln.",
  "example": "5 Karten aus 52 zu wählen ergibt C(52, 5) = 2 598 960 mögliche Blätter.",
  "howToUse": [
    "Wähle Kombinationen oder Variationen.",
    "Gib an, ob Wiederholung erlaubt ist.",
    "Trage die Größe der Menge und die der Auswahl ein."
  ],
  "faq": [
    {
      "q": "Was ist der Unterschied zwischen Kombinationen und Variationen?",
      "a": "Die Reihenfolge. Kombinationen behandeln AB und BA als dieselbe Auswahl; Variationen zählen sie getrennt."
    },
    {
      "q": "Wann darf die Auswahl größer sein als die Menge?",
      "a": "Nur bei erlaubter Wiederholung. 5 Stücke aus 3 Sorten zu ziehen ergibt Sinn, wenn jede Sorte mehrfach genommen werden darf."
    },
    {
      "q": "Warum wird in genauen ganzen Zahlen gerechnet?",
      "a": "BigInt erhält alle ganzzahligen Ziffern. Oberhalb von 9007199254740991 bietet Number keine allgemeine Exaktheitsgarantie, obwohl einzelne Werte noch exakt darstellbar sind. C(60,30) = 118264581564861424 ist darstellbar, C(61,30) = 232714176627630544 dagegen nicht."
    },
    {
      "q": "Warum gibt es eine obere Grenze?",
      "a": "n, k ≤ 1000 begrenzt Schleifen und Ausgabelänge dieser Seite. Das sind keine mathematischen Grenzen: C(n,0) = 1 gilt auch für größere n. Binomialkoeffizienten entstehen durch aufeinanderfolgende exakte Multiplikationen und Divisionen."
    }
  ]
};
