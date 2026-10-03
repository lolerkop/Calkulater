import type { CalculatorCopy } from '../../lib/platform/types';

export const quadraticEquationCopyDe: CalculatorCopy = {
  "name": "Rechner für quadratische Gleichungen",
  "slug": "quadratische-gleichung-loesen",
  "shortDescription": "ax² + bx + c = 0 lösen und die Diskriminante sehen.",
  "seoTitle": "Quadratische Gleichung lösen — Lösungen und Diskriminante",
  "seoDescription": "Lösungen von ax² + bx + c = 0, Diskriminante und Scheitelpunkt-x-Koordinate für a ≠ 0.",
  "h1": "Rechner für quadratische Gleichungen",
  "keywords": [
    "quadratische Gleichung",
    "Diskriminante",
    "Mitternachtsformel",
    "Scheitelpunkt",
    "Rechner fuer quadratische Gleichungen"
  ],
  "longDescription": "Löst ax² + bx + c = 0 für a ≠ 0 im reellen Bereich. Angezeigt werden die Diskriminante, die Anzahl verschiedener reeller Lösungen und die x-Koordinate des Scheitelpunkts. Bei D = 0 hat die einzige angezeigte Lösung die Vielfachheit zwei. Komplexe Lösungen und der lineare Fall a = 0 gehören nicht zu diesem Modell.",
  "howItWorks": "D = b² − 4ac: Für D > 0 gilt x₁,₂ = (−b ± √D)/(2a), für D = 0 gilt x = −b/(2a), und für D < 0 gibt es keine reellen Lösungen. Die Symmetrieachse liegt bei xV = −b/(2a). Der Scheitelpunkt ist das Paar (xV, f(xV)); hier erscheint nur xV. Die Berechnung zweier Lösungen verwendet eine numerisch stabile Formelvariante und x₁x₂ = c/a.",
  "example": "Für x² − 5x + 6 = 0 ist D = 25 − 24 = 1. Daraus folgen x = (5 ± 1) ÷ 2, also 3 und 2. Der Scheitelpunkt liegt bei x = 2,5 mit dem Wert −0,25 — die Parabel taucht also knapp unter die x-Achse.",
  "howToUse": [
    "Trage den Koeffizienten a ein; er darf nicht null sein, sonst ist die Gleichung linear.",
    "Trage b und c ein, Vorzeichen eingeschlossen.",
    "Lies die Diskriminante und die Zahl der reellen Lösungen ab.",
    "Prüfe den Scheitelpunkt, wenn du den Verlauf der Parabel brauchst."
  ],
  "faq": [
    {
      "q": "Was bedeutet eine negative Diskriminante?",
      "a": "Die Parabel schneidet die x-Achse nicht. Reelle Lösungen gibt es dann keine; im Bereich der komplexen Zahlen existieren zwei zueinander konjugierte Lösungen."
    },
    {
      "q": "Warum darf a nicht null sein?",
      "a": "Mit a = 0 verschwindet das quadratische Glied, und es bleibt die lineare Gleichung bx + c = 0. Die Lösungsformel enthält 2a im Nenner und wäre nicht definiert."
    },
    {
      "q": "Wie hängen die Lösungen mit dem Scheitelpunkt zusammen?",
      "a": "Bei zwei reellen Lösungen ist ihre mittlere x-Koordinate xV = −b/(2a). Das ist die x-Koordinate des Scheitelpunkts; der vollständige Punkt enthält auch f(xV), das dieser Rechner nicht ausgibt."
    },
    {
      "q": "Was besagt der Satz von Vieta?",
      "a": "Bei a = 1 ist die Summe der Lösungen −b und ihr Produkt c. Im Beispiel gilt 3 + 2 = 5 und 3 × 2 = 6, was sich mit den Koeffizienten deckt."
    },
    {
      "q": "Wie werden kleine Lösungen angezeigt?",
      "a": "Ganze Werte erscheinen gewöhnlich ohne Nachkommastellen, andere mit vier Nachkommastellen. Für 0 < |x| < 0,0001 oder |x| ≥ 10¹² verwendet die wissenschaftliche Schreibweise sechs signifikante Stellen, damit eine kleine von null verschiedene Lösung nicht wie null aussieht."
    }
  ],
  "disclaimer": "Die Koeffizienten müssen endlich sein, mit a ≠ 0. Gerechnet wird mit ihrer binären Zahlendarstellung. Lösungen erscheinen gewöhnlich mit vier Nachkommastellen; bei |x| < 0,0001 oder ≥ 10¹² in wissenschaftlicher Schreibweise mit sechs signifikanten Stellen. Eine nicht darstellbare Diskriminante, Scheitelpunkt-x-Koordinate oder Lösung führt zu einer Bereichsfehlermeldung statt zu Überlauf oder falscher null."
};
