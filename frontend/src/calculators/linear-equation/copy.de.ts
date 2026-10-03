import type { CalculatorCopy } from '../../lib/platform/types';

export const linearEquationCopyDe: CalculatorCopy = {
  "name": "Rechner für lineare Gleichungen",
  "slug": "lineare-gleichung",
  "shortDescription": "Löst ax + b = c und zeigt jeden Schritt.",
  "seoTitle": "Lineare Gleichung lösen — ax + b = c",
  "seoDescription": "Löse eine lineare Gleichung der Form ax + b = c mit ausgewiesenen Schritten und Probe durch Einsetzen.",
  "h1": "Rechner für lineare Gleichungen",
  "keywords": [
    "lineare Gleichung lösen",
    "Gleichung nach x auflösen",
    "ax plus b gleich c",
    "lineare Gleichung loesen"
  ],
  "longDescription": "Löst die numerische Gleichung ax + b = c: b wird auf die andere Seite gebracht, durch a geteilt und das berechnete x eingesetzt. Bei a = 0 bleibt b = c: Ist die Aussage wahr, passt jedes reelle x; sonst gibt es keine Lösung. Beide Fälle werden als sinnvolle Antworten angezeigt. Steht x auf beiden Seiten, fassen Sie zuerst die Koeffizienten zusammen.",
  "howItWorks": "x = (c − b) ÷ a, sofern a nicht null ist; ist a null, läuft die Gleichung auf einen Vergleich von b mit c hinaus.",
  "example": "Für 3x + 5 = 20 ergibt das Verschieben der 5 zunächst 3x = 15 und das Teilen dann x = 5.",
  "howToUse": [
    "Trage den Koeffizienten vor x ein.",
    "Trage die Konstante und die rechte Seite ein.",
    "Lies die Lösung und die Schritte ab."
  ],
  "faq": [
    {
      "q": "Was passiert bei einem Koeffizienten von null?",
      "a": "Das x-Glied verschwindet, und die Gleichung wird zu b = c. Trifft das zu, ist jede Zahl eine Lösung; trifft es nicht zu, gibt es keine."
    },
    {
      "q": "Werden negative Koeffizienten unterstützt?",
      "a": "Ja, alle drei Werte dürfen negativ oder gebrochen sein. Das Vorzeichen wird durch die Division mitgeführt."
    },
    {
      "q": "Wozu die Probe durch Einsetzen?",
      "a": "Das Einsetzen des berechneten x hilft, Vorzeichen und Umformungen zu prüfen. Die Zeile ist gerundet; eine sichtbare Gleichheit beweist daher keine Genauigkeit bis zur letzten Stelle. Für eine exakte Bruchlösung prüfen Sie die ursprünglichen Koeffizienten algebraisch."
    },
    {
      "q": "Kann er quadratische Gleichungen lösen?",
      "a": "Nein, hier geht es nur um den ersten Grad. Für Gleichungen mit x² gibt es einen eigenen Rechner."
    }
  ],
  "disclaimer": "Geben Sie endliche numerische Koeffizienten ein, auch null und negative Werte. Rechenschritte und Probe werden auf sechs signifikante Stellen gerundet; kleine und große Werte erscheinen in wissenschaftlicher Schreibweise. Die Probe ist eine numerische Kontrolle, kein Beweis für exakte gerundete Texte. Verlässt ein angezeigtes Zwischenergebnis oder x den Zahlenbereich, stoppt die Berechnung."
};
