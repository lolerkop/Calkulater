import type { CalculatorCopy } from '../../lib/platform/types';

export const geomTriangleCopyDe: CalculatorCopy = {
  "name": "Dreiecksrechner",
  "slug": "dreieck-rechner",
  "shortDescription": "Dreiecksfläche aus drei Seiten oder Grundseite und Höhe; Umfang und Winkelart erfordern alle drei Seiten.",
  "seoTitle": "Dreieck berechnen — Fläche aus drei Seiten oder aus der Höhe",
  "seoDescription": "Dreiecksfläche aus drei Seiten oder Grundseite und Höhe; Umfang und Winkelart erfordern alle drei Seiten.",
  "h1": "Dreiecksrechner",
  "keywords": [
    "Dreieck berechnen",
    "Fläche Dreieck",
    "Formel von Heron",
    "Umfang Dreieck",
    "Dreieck Flaeche"
  ],
  "longDescription": "Rechnet ein Dreieck auf zwei Wegen: aus drei Seiten nach der Formel von Heron oder aus einer Grundseite und ihrer Höhe als halbes Produkt. Drei Seiten werden zuerst gegen die Dreiecksungleichung geprüft — übersteigen zwei von ihnen die dritte nicht, gibt es die Figur nicht, und der Rechner sagt das, statt eine Null zu liefern, die sich wie eine Antwort liest. Zusätzlich nennt er die Art des Dreiecks: rechtwinklig, spitzwinklig oder stumpfwinklig.",
  "howItWorks": "Zuerst p = (a+b+c)/2, dann S = √(p(p−a)(p−b)(p−c)). Die vier Faktoren sind p und drei Differenzen. Die Berechnung nutzt das gleichwertige Ergebnis S = √[(a+b+c)(−a+b+c)(a−b+c)(a+b−c)/16] und erhält kleine Differenzen vor dem Runden. Aus Grundseite a und senkrechter Höhe h: S = ah/2. Umfang a+b+c und Klassifikation über Seitenquadrate erfordern alle drei Seiten.",
  "example": "Ein Dreieck mit den Seiten 3, 4 und 5 m ist rechtwinklig: seine Fläche beträgt 6 m² und sein Umfang 12 m.",
  "howToUse": [
    "Wähle drei Seiten oder eine Grundseite mit der zugehörigen senkrechten Höhe.",
    "Gib positive Längen in derselben Einheit an.",
    "Im Seitenmodus müssen zwei Seiten zusammen stets länger als die dritte sein; nur hier werden Umfang und Winkelart bestimmt.",
    "Nahe einer flachen Form kann ein kleiner Messfehler die Fläche stark verändern."
  ],
  "faq": [
    {
      "q": "Warum werden manche Seitensätze abgewiesen?",
      "a": "Für positive Fläche müssen zwei Seiten zusammen stets länger als die dritte sein. Bei 1, 2 und 3 liegen die Punkte auf einer Geraden: ein entarteter Fall mit Fläche null, der hier ausgeschlossen ist."
    },
    {
      "q": "Was ist die Formel von Heron?",
      "a": "Zuerst p = (a+b+c)/2, dann S = √(p(p−a)(p−b)(p−c)). Die vier Faktoren sind p und drei Differenzen. Die Berechnung nutzt das gleichwertige Ergebnis S = √[(a+b+c)(−a+b+c)(a−b+c)(a+b−c)/16] und erhält kleine Differenzen vor dem Runden."
    },
    {
      "q": "Wie wird die Art des Dreiecks bestimmt?",
      "a": "Durch Vergleich des Quadrats der längsten Seite mit der Summe der Quadrate der beiden anderen: gleich heißt rechtwinklig, kleiner spitzwinklig, größer stumpfwinklig."
    },
    {
      "q": "Muss die Höhe zur eingetragenen Grundseite gehören?",
      "a": "Ja. Die Höhe muss auf die eingetragene Grundseite gefällt sein, sonst ist ihr halbes Produkt nicht die Fläche dieses Dreiecks."
    },
    {
      "q": "Bestimmen Grundseite und Höhe den Dreiecksumfang?",
      "a": "Nein. Dreiecke mit gleicher Grundseite und Höhe haben dieselbe Fläche, können aber andere Seitenlängen haben. Grundseite 6 und Höhe 4 ergeben Fläche 12; im symmetrischen Fall sind beide Seiten 5 lang, eine Verschiebung der Spitze verändert sie."
    }
  ],
  "disclaimer": "Nur ebene Dreiecke mit positiver Fläche. Kollineare Seiten liegen außerhalb dieses Rechners. Die Winkelart wird anhand der Eingabewerte ohne Messtoleranz bestimmt; sie bestätigt keinen Winkel eines realen Objekts. Ergebnisse sind gerundet."
};
