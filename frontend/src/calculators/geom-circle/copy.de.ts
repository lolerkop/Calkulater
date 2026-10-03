import type { CalculatorCopy } from '../../lib/platform/types';

export const geomCircleCopyDe: CalculatorCopy = {
  "name": "Kreisrechner",
  "slug": "kreis-rechner",
  "shortDescription": "Fläche, Umfang, Durchmesser und Radius aus einer beliebigen dieser Größen.",
  "seoTitle": "Kreis berechnen — Fläche, Umfang, Radius, Durchmesser",
  "seoDescription": "Berechne die Fläche eines Kreises, seinen Umfang, Radius oder Durchmesser aus einem beliebigen bekannten Wert.",
  "h1": "Kreisrechner",
  "keywords": [
    "Kreis berechnen",
    "Kreisfläche",
    "Umfang berechnen",
    "Radius aus der Fläche",
    "Kreisflaeche"
  ],
  "longDescription": "Löst einen Kreis aus dem, was du gerade weißt: Radius, Durchmesser, Umfang oder Fläche. Das zählt mehr, als es klingt — ein Rohr oder Fass wird meist über den Durchmesser angegeben, ein Beet über die Länge seiner Einfassung und ein Rohling über seine Fläche, und jeder Fall läuft von Hand anders. Verwendet wird Math.PI ≈ 3,141592653589793: eine Maschinennäherung von π, kein exakt gespeicherter unendlicher Wert und nicht 3,14. Bei r = 3 m würde 3,14 den Umfang um etwa 9,56 mm verkürzen; die Ergebnisse werden gerundet.",
  "howItWorks": "S = πr², C = 2πr und d = 2r; der Radius folgt aus dem Umfang als r = C ÷ 2π und aus der Fläche als r = √(S ÷ π).",
  "example": "Ein Kreis mit dem Radius 3 m hat eine Fläche von 28,274 m² und einen Umfang von 18,85 m.",
  "howToUse": [
    "Wähle eine gemeinsame Längeneinheit.",
    "Gib im Flächenmodus deren Quadrat ein: bei Zentimetern cm².",
    "Wähle die bekannte Größe und fülle nur das sichtbare Feld aus.",
    "Radius, Durchmesser und Umfang müssen positiv sein; ein Einheitenwechsel rechnet die eingegebene Zahl nicht um."
  ],
  "faq": [
    {
      "q": "Welcher Wert von π wird verwendet?",
      "a": "Verwendet wird Math.PI ≈ 3,141592653589793: eine Maschinennäherung von π, kein exakt gespeicherter unendlicher Wert und nicht 3,14. Bei r = 3 m würde 3,14 den Umfang um etwa 9,56 mm verkürzen; die Ergebnisse werden gerundet."
    },
    {
      "q": "Wie unterscheiden sich Radius und Durchmesser bei der Eingabe?",
      "a": "Der Durchmesser ist der doppelte Radius, sie zu vertauschen ändert die Fläche also um das Vierfache. Genau deshalb wird der Eingabemodus ausdrücklich gewählt."
    },
    {
      "q": "Bekomme ich den Radius aus der Fläche?",
      "a": "Ja — wähle den Modus für die Fläche; der Radius ist die Wurzel aus der Fläche geteilt durch π."
    },
    {
      "q": "Was bedeutet Umfang hier?",
      "a": "Die Länge der geschlossenen Linie um den Rand des Kreises — das, was du mit einem Maßband um ein Rohr oder ein Fass messen würdest."
    },
    {
      "q": "Wie rechne ich eine Kreisfläche von cm² in m² um?",
      "a": "1 m = 100 cm, daher 1 m² = 10 000 cm². Zum Beispiel sind 100 cm² = 0,01 m². Die Auswahl Meter ändert die Bedeutung der Zahl, ohne sie umzurechnen."
    }
  ],
  "disclaimer": "Modell eines ebenen Kreises mit positiver Fläche. π und Ergebnisse sind numerische Näherungen; der Außendurchmesser eines Rohrs bestimmt nicht dessen inneren Querschnitt. Nicht darstellbare Ergebnisse führen zu einer Fehlermeldung."
};
