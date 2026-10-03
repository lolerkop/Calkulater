import type { CalculatorCopy } from '../../lib/platform/types';

export const geomTrapezoidCopyDe: CalculatorCopy = {
  "name": "Trapezrechner",
  "slug": "trapez-rechner",
  "shortDescription": "Fläche eines Trapezes aus den beiden Grundseiten und der Höhe; Umfang aus den Schenkeln.",
  "seoTitle": "Trapez berechnen — Fläche und Umfang",
  "seoDescription": "Berechne die Fläche eines Trapezes aus seinen beiden Grundseiten und der Höhe und den Umfang aus seinen Schenkeln.",
  "h1": "Trapezrechner",
  "keywords": [
    "Trapez berechnen",
    "Fläche Trapez",
    "Trapezfläche",
    "Umfang Trapez",
    "Trapez Flaeche"
  ],
  "longDescription": "Berechnet die Fläche eines Trapezes als halbe Summe der beiden parallelen Seiten mal der Höhe — die Formel hinter einem abschüssigen Grundstück, einer Dachschräge oder einer Trichterwand. Die Schenkel sind freiwillig: ohne sie bekommst du die Fläche, mit ihnen zusätzlich den Umfang. Die Höhe ist hier der senkrechte Abstand zwischen den Grundseiten und nicht die Länge eines Schenkels, und genau das ist der Fehler, der beim Messen am häufigsten passiert.",
  "howItWorks": "S = ((a + b) ÷ 2) · h — die Fläche ist die Mittellinie mal der Höhe; der Umfang ist die Summe aller vier Seiten.",
  "example": "Grundseiten 10 und 6 m bei Höhe 4 m ergeben Mittellinie 8 m und Fläche 32 m². Ohne Schenkel ist der Umfang unbekannt. Ein gesondertes stimmiges Beispiel: Grundseiten 8 und 2 m, Höhe 4 m, beide Schenkel 5 m; Mittellinie 5 m, Fläche 20 m², Umfang 20 m.",
  "howToUse": [
    "Gib die beiden parallelen Grundseiten und ihren senkrechten Abstand in derselben Einheit an.",
    "Lass für die Fläche beide Schenkel leer oder auf null.",
    "Für den Umfang sind beide positiven Schenkel nötig; sie müssen zu Grundseiten und Höhe passen.",
    "Miss eine Länge an einer Schräge in der Ebene der Figur, nicht als deren Projektion."
  ],
  "faq": [
    {
      "q": "Welche Höhe braucht die Formel?",
      "a": "Der senkrechte Abstand zwischen den Geraden der Grundseiten. Ein Schenkel ist mindestens so lang wie die Höhe; beim rechtwinkligen Trapez kann einer gleich lang sein. Diese Gleichheit macht nicht das gesamte Trapez entartet."
    },
    {
      "q": "Was ist die Mittellinie?",
      "a": "Die Strecke, die die Mitten der Schenkel verbindet. Sie ist die halbe Summe der Grundseiten, und die Fläche ist schlicht die Mittellinie mal der Höhe."
    },
    {
      "q": "Muss ich die Schenkel eintragen?",
      "a": "Nein. Zwei leere oder null gesetzte Schenkel bedeuten, dass kein Umfang angefordert ist; Fläche und Mittellinie bleiben verfügbar. Für den Umfang sind beide positiven Schenkel nötig, mindestens so lang wie die Höhe und geometrisch zu den Grundseiten passend. Ein fehlender Schenkel wird nicht automatisch ergänzt."
    },
    {
      "q": "Gilt die Formel für jedes Trapez?",
      "a": "Ja — gleichschenklig, rechtwinklig oder unregelmäßig. Wichtig ist nur, dass die beiden eingetragenen Grundseiten das parallele Paar sind."
    },
    {
      "q": "Warum werden Grundseiten 10 und 6, Höhe 4 und Schenkel 5 und 5 abgelehnt?",
      "a": "Beim gleichschenkligen Trapez ist die waagerechte Projektion jedes Schenkels (10−6)/2 = 2. Bei Höhe 4 muss er √20 ≈ 4,472 lang sein, nicht 5. Schenkel von 5 passen dagegen zu Grundseiten 8 und 2 bei Höhe 4, mit Projektionen von 3."
    }
  ],
  "disclaimer": "Ebene konvexe Figur mit parallelen Grundseiten und positiver Höhe; gleiche Grundseiten sind als Parallelogramm zugelassen. Die Schenkelprüfung berücksichtigt nur Rechenrundung, keine Bautoleranzen. Die Fläche enthält keinen Materialzuschlag."
};
