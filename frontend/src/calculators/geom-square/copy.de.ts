import type { CalculatorCopy } from '../../lib/platform/types';

export const geomSquareCopyDe: CalculatorCopy = {
  "name": "Quadratrechner",
  "slug": "quadrat-rechner",
  "shortDescription": "Fläche, Umfang und Diagonale eines Quadrats aus einer beliebigen dieser Größen.",
  "seoTitle": "Quadrat berechnen — Fläche, Umfang, Diagonale",
  "seoDescription": "Berechne Fläche, Umfang und Diagonale eines Quadrats aus seiner Seite, seiner Fläche oder seinem Umfang.",
  "h1": "Quadratrechner",
  "keywords": [
    "Quadrat berechnen",
    "Quadratfläche",
    "Umfang Quadrat",
    "Diagonale Quadrat",
    "Quadrat Flaeche"
  ],
  "longDescription": "Löst ein Quadrat aus dem Wert, den du gerade hast: der Seite, der Fläche oder dem Umfang. Alle vier Größen kommen zusammen zurück, eine Bodenfläche von 49 m² nennt dir also sofort die 7 m lange Wand, an der sie entlangläuft, und die 9,9 m, die du quer darüber messen würdest. Die Längeneinheit wird einmal gewählt und nie umgerechnet — die Fläche wird schlicht in ihrem Quadrat ausgewiesen.",
  "howItWorks": "S = a², P = 4a und d = a√2. In den inversen Modi gilt a = √S oder a = P/4; daraus folgen die übrigen Maße. Die Fläche verwendet das Quadrat der gewählten Längeneinheit.",
  "example": "Ein quadratischer Raum mit 5 m Seite hat eine Fläche von 25 m², einen Umfang von 20 m und eine Diagonale von 7,071 m.",
  "howToUse": [
    "Wähle Seite, Fläche oder Umfang des Quadrats als bekannte Größe.",
    "Längen stehen in der gewählten Einheit, Flächen in deren Quadrat.",
    "Gib einen positiven Wert ein.",
    "Teile eine Fläche in cm² vor der Eingabe durch 10 000, um m² zu erhalten; die Auswahl Meter allein rechnet sie nicht um."
  ],
  "faq": [
    {
      "q": "Kann ich statt der Seite die Fläche eintragen?",
      "a": "Ja. Wähle den Modus für die Fläche, und die Seite wird als ihre Quadratwurzel zurückgewonnen, danach folgen Umfang und Diagonale daraus."
    },
    {
      "q": "Warum steht die Fläche in Quadrateinheiten?",
      "a": "Weil eine Fläche das ist. Hast du Zentimeter eingetragen, steht die Fläche in Quadratzentimetern — sie mit einem linearen Faktor umzurechnen wäre falsch."
    },
    {
      "q": "Wird eine Seite von null angenommen?",
      "a": "Nein. Ein Quadrat ohne Seite ist keine Figur, deshalb meldet der Rechner das Problem, statt eine plausible Null zu liefern."
    },
    {
      "q": "Wie wird die Diagonale gefunden?",
      "a": "Über den Satz des Pythagoras für zwei gleiche Seiten, was sich zu d = a√2 vereinfacht."
    },
    {
      "q": "Was ändert sich bei doppelter Quadratseite?",
      "a": "Umfang und Diagonale verdoppeln sich, die Fläche vervierfacht sich: (2a)² = 4a². Ein Längenfaktor wirkt deshalb anders auf die Fläche."
    }
  ],
  "disclaimer": "Das Modell setzt vier gleich lange Seiten und vier rechte Winkel voraus. Die Fläche allein beweist nicht, dass ein Grundstück quadratisch ist. Ergebnisse sind gerundet; ein entartetes Quadrat mit Seitenlänge null ist ausgeschlossen."
};
