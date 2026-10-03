import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRectangleCopyDe: CalculatorCopy = {
  "name": "Rechteckrechner",
  "slug": "rechteck-rechner",
  "shortDescription": "Fläche, Umfang und Diagonale eines Rechtecks aus seinen Seiten oder seiner Fläche.",
  "seoTitle": "Rechteck berechnen — Fläche, Umfang, Diagonale",
  "seoDescription": "Berechne Fläche, Umfang und Diagonale eines Rechtecks aus zwei Seiten oder finde die fehlende Seite aus der Fläche.",
  "h1": "Rechteckrechner",
  "keywords": [
    "Rechteck berechnen",
    "Rechteckfläche",
    "Umfang Rechteck",
    "Diagonale Rechteck",
    "Rechteck Flaeche"
  ],
  "longDescription": "Rechnet ein Rechteck in beide Richtungen: zwei Seiten ergeben Fläche, Umfang und Diagonale, während eine Fläche plus eine Seite die andere Seite ergibt. Der zweite Modus beantwortet die Frage, die beim Zuschneiden oder Planen eines Raumes tatsächlich aufkommt — „ich brauche 30 m², und die Breite ist 6 m, wie lang wird das Stück?“. Die Diagonale folgt aus dem Satz des Pythagoras und ist das, was du misst, um zu prüfen, ob die Ecken wirklich rechtwinklig sind.",
  "howItWorks": "S = a · b, P = 2(a + b) und d = √(a² + b²); im zweiten Modus folgt die fehlende Seite als b = S ÷ a.",
  "example": "Ein Raum mit 8 × 3 m hat eine Fläche von 24 m², einen Umfang von 22 m und eine Diagonale von 8,544 m.",
  "howToUse": [
    "Miss für den Seitenmodus zwei benachbarte Seiten des Rechtecks.",
    "Gib im Flächenmodus eine positive Fläche und eine positive Seite an.",
    "Verwende eine gemeinsame Längeneinheit und deren Quadrat für die Fläche.",
    "Prüfe bei einer realen Absteckung zusätzlich die Form und beide Diagonalen."
  ],
  "faq": [
    {
      "q": "Wozu die Diagonale?",
      "a": "Eine Diagonale d = √(a²+b²) prüft den rechten Winkel zwischen den zugehörigen unabhängig gemessenen Nachbarseiten. Eine solche Übereinstimmung beweist nicht alle vier Winkel eines beliebigen Vierecks. Prüfe bei der Absteckung auch Gegenseiten, zweite Diagonale und Messgenauigkeit."
    },
    {
      "q": "Wie finde ich die zweite Seite aus der Fläche?",
      "a": "Wähle den Modus „die Fläche und eine Seite“ — die andere Seite folgt durch Division, und Umfang und Diagonale werden danach aus beiden berechnet."
    },
    {
      "q": "Was, wenn beide Seiten gleich sind?",
      "a": "Du bekommst ein Quadrat. Die Rechnung lässt das zu und liefert richtige Werte; die Figur ist schlicht ein Sonderfall."
    },
    {
      "q": "Warum darf ich die Fläche nicht einfach mit 100 umrechnen?",
      "a": "Weil der Weg von Metern zu Zentimetern den linearen Faktor quadriert: ein Quadratmeter sind 10 000 Quadratzentimeter und nicht 100."
    },
    {
      "q": "Bestimmt die Fläche allein ein Rechteck?",
      "a": "Nein. 24 m² können zu Seiten von 8 und 3 m oder 6 und 4 m gehören; die Umfänge betragen 22 bzw. 20 m. Der inverse Modus braucht deshalb zusätzlich eine Seite."
    }
  ],
  "disclaimer": "Rechteckmodell mit vier vorausgesetzten rechten Winkeln. Eine passende Diagonale prüft nur den eingeschlossenen Winkel der zugehörigen beiden Seiten. Die Fläche enthält keinen Zuschlag für Fugen oder Verschnitt; Ergebnisse sind gerundet."
};
