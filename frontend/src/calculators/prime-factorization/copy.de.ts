import type { CalculatorCopy } from '../../lib/platform/types';

export const primeFactorizationCopyDe: CalculatorCopy = {
  "name": "Rechner für die Primfaktorzerlegung",
  "slug": "primfaktorzerlegung",
  "shortDescription": "Eine Zahl in Primfaktoren zerlegen und ihre Teiler zählen.",
  "seoTitle": "Primfaktorzerlegung berechnen — Zahl in Primfaktoren zerlegen",
  "seoDescription": "Zerlege eine ganze Zahl in Primfaktoren, sieh die kanonische Form mit Exponenten und die Zahl der Teiler.",
  "h1": "Rechner für die Primfaktorzerlegung",
  "keywords": [
    "Primfaktorzerlegung",
    "Zahl zerlegen",
    "Primfaktoren",
    "Teileranzahl"
  ],
  "longDescription": "Zerlegt eine ganze Zahl von 2 bis 1000000000000 in Primfaktoren und zeigt Potenzschreibweise, Anzahl verschiedener Primfaktoren und Anzahl positiver Teiler. Zunächst werden alle Faktoren 2 entfernt, danach ungerade Kandidaten bis zur Quadratwurzel des aktuellen Rests geprüft. Ein Rest größer als eins wird als Primfaktor ergänzt. Die Zerlegung ist bis auf die Reihenfolge der Faktoren eindeutig.",
  "howItWorks": "Die Probedivision läuft bis zur Quadratwurzel der Zahl; was darüber hinaus größer als eins bleibt, ist selbst prim.",
  "example": "360 = 2³ · 3² · 5 ergibt (3+1)(2+1)(1+1) = 24 Teiler. Nach Entfernen der Zweier bleibt 45, nach Entfernen der Dreier 5. Dieser Rest wird als Primfaktor ergänzt.",
  "howToUse": [
    "Trage eine ganze Zahl ab zwei ein.",
    "Lies die Zerlegung ab.",
    "Prüfe bei Bedarf die Zahl der Teiler."
  ],
  "faq": [
    {
      "q": "Wie kommt die Zahl der Teiler zustande?",
      "a": "Multipliziere jeden um eins erhöhten Exponenten. Für 2³ · 3² · 5 sind das 4 × 3 × 2 = 24."
    },
    {
      "q": "Warum lässt sich die Eins nicht zerlegen?",
      "a": "Diese Seite beginnt bei 2. Die Eins hat keine Primfaktoren; ihre Zerlegung lässt sich als leeres Produkt mit Wert 1 auffassen. Die Eins ist nicht prim: Eine Primzahl hat genau zwei verschiedene positive Teiler."
    },
    {
      "q": "Gibt es eine obere Grenze?",
      "a": "Hier gilt n ≤ 10¹². Die Grenze beschränkt den Aufwand der Probedivision und bezeichnet keinen Genauigkeitsverlust ganzer Number-Zahlen. Deren allgemeine sichere Grenze ist 9007199254740991."
    },
    {
      "q": "Woran erkenne ich, dass eine Zahl prim ist?",
      "a": "Ihre Zerlegung ist die Zahl selbst, und der Rechner sagt das in einer eigenen Zeile."
    }
  ]
};
