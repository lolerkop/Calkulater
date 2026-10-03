import type { CalculatorCopy } from '../../lib/platform/types';

export const divisorsCopyDe: CalculatorCopy = {
  "name": "Teilerrechner",
  "slug": "teiler-rechner",
  "shortDescription": "Positive Teiler: die ersten 40, vollständige Anzahl, Summe und Summe ohne die Zahl selbst.",
  "seoTitle": "Teiler berechnen — alle Teiler, Anzahl und Summe",
  "seoDescription": "Finde positive Teiler einer ganzen Zahl bis 10¹²: die ersten 40 in der Vorschau, die vollständige Anzahl und beide Teilersummen.",
  "h1": "Teilerrechner",
  "keywords": [
    "Teiler berechnen",
    "alle Teiler einer Zahl",
    "Teilersumme",
    "Primzahl prüfen"
  ],
  "longDescription": "Ermittelt die positiven Teiler einer ganzen Zahl n von 1 bis 1000000000000, ihre Anzahl, ihre Summe und die Summe ohne n selbst. Jeder Teiler i bis √n liefert den Partner n/i. Bei einer Quadratzahl wird die zusammenfallende Quadratwurzel nur einmal gezählt. Die Kennzahlen verwenden alle Teiler; das Hauptergebnis zeigt nur die ersten 40. Für n = 1 besteht die Menge aus der Eins, die keine Primzahl ist.",
  "howItWorks": "Jedes i bis zur Quadratwurzel, das n teilt, steuert sowohl i als auch n ÷ i bei; bei einer Quadratzahl fallen beide zusammen.",
  "example": "360 hat 24 Teiler, die zusammen 1170 ergeben.",
  "howToUse": [
    "Trage eine ganze Zahl ab eins ein.",
    "Lies die ersten 40 Teiler ab; die vollständige Anzahl und die Summen stehen getrennt darunter.",
    "Prüfe darunter Anzahl und Summe."
  ],
  "faq": [
    {
      "q": "Wie unterscheidet sich das von der Primfaktorzerlegung?",
      "a": "Die Zerlegung nennt die primen Bausteine; hier steht jede Zahl, die ohne Rest teilt. Aus der einen Liste die andere zu bauen kostet trotzdem Arbeit."
    },
    {
      "q": "Warum hat eine Quadratzahl eine ungerade Anzahl?",
      "a": "Ihre Quadratwurzel paart sich mit sich selbst, ein Teiler hat also keinen eigenen Partner, und die Gesamtzahl kommt ungerade heraus."
    },
    {
      "q": "Was macht eine Zahl vollkommen?",
      "a": "Ihre echten Teiler ergeben zusammen die Zahl selbst. Sechs ist die kleinste: eins plus zwei plus drei."
    },
    {
      "q": "Warum sind die Zahlen auf eine Billion begrenzt?",
      "a": "Bei n ≤ 10¹² sind bis √n höchstens eine Million Teilbarkeitsprüfungen nötig. Das ist die Arbeitsgrenze dieser Seite; die tatsächliche Zeit hängt vom Gerät ab. Größere Zahlen haben ebenfalls Teiler, werden hier aber nicht angenommen."
    }
  ]
};
