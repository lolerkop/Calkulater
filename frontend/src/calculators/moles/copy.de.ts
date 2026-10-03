import type { CalculatorCopy } from '../../lib/platform/types';

export const molesCopyDe: CalculatorCopy = {
  "name": "Stoffmengenrechner",
  "slug": "stoffmenge-berechnen",
  "shortDescription": "Stoffmenge aus Masse und molarer Masse, samt Teilchenzahl.",
  "seoTitle": "Stoffmenge berechnen — Mol aus der Masse",
  "seoDescription": "Berechne die Stoffmenge in Mol aus Masse und molarer Masse, zusammen mit der Zahl der Teilchen.",
  "h1": "Stoffmengenrechner",
  "keywords": [
    "Stoffmenge berechnen",
    "Mol berechnen",
    "Avogadro-Konstante",
    "Teilchenzahl"
  ],
  "longDescription": "Verknüpft Masse, molare Masse und Stoffmenge und zeigt die berechnete Zahl der angegebenen Teilchen. Gib die molare Masse in g/mol ein; chemische Formeln werden nicht ausgewertet. Die Avogadro-Konstante ist exakt, die eingegebene molare Masse und das Rechenergebnis müssen es nicht sein.",
  "howItWorks": "n = m/M, umgekehrt m = nM; N = nN_A mit N_A = 6,02214076 × 10²³ mol⁻¹ gemäß SI-Definition. Masse wird in g eingegeben. Masse und Stoffmenge müssen endlich und nichtnegativ sein; die molare Masse muss endlich und positiv sein. Läuft eine angezeigte Größe über oder wird ein positiver Wert zu null, folgt ein Bereichsfehler. Kleine und große endliche Werte erscheinen in wissenschaftlicher Schreibweise.",
  "example": "18 g mit dem eingegebenen M = 18,02 g/mol ergeben gerundet 0,9989 mol. Bei 1 mol und demselben M beträgt die Masse 18,02 g und N = 6,02214076 × 10²³ Teilchen vor der Anzeigerundung.",
  "howToUse": [
    "Wähle die Berechnung aus Masse oder Stoffmenge.",
    "Gib Masse in g oder Stoffmenge in mol ein.",
    "Gib die molare Masse in g/mol für dieselbe Teilchenart ein."
  ],
  "faq": [
    {
      "q": "Was bedeutet Teilchen hier?",
      "a": "Ein festgelegtes Molekül, Atom, Ion oder eine andere ausdrücklich bestimmte elementare Einheit. Die molare Masse muss sich auf dieselbe Einheit beziehen."
    },
    {
      "q": "Woher kommt die molare Masse?",
      "a": "Aus Zusammensetzung und geeigneten Atomgewichten oder einer geprüften Tabelle. Gemische erfordern ein Modell der mittleren Zusammensetzung; dieses wird hier nicht bestimmt."
    },
    {
      "q": "Warum sind 18 g Wasser nicht genau ein Mol?",
      "a": "Im Beispiel wird das gerundete M = 18,02 g/mol verwendet. 18/18,02 liegt etwas unter eins; eine andere passende Wahl von M ändert das Ergebnis."
    },
    {
      "q": "Ist die Avogadro-Konstante exakt?",
      "a": "Ja, 6,02214076 × 10²³ mol⁻¹ ist per Definition festgelegt. Division, Multiplikation und Anzeige im Rechner werden dennoch gerundet. Die Teilchenzahl ist ein Modellwert, keine Zählung einzelner Teilchen."
    },
    {
      "q": "Dürfen Masse oder Stoffmenge null sein?",
      "a": "Ja. Masse null ergibt 0 mol und 0 Teilchen; 0 mol ergeben bei positiver molarer Masse 0 g und 0 Teilchen. Wird ein positiver Wert bei der Rechnung zu null, folgt ein Fehler."
    }
  ],
  "disclaimer": "Die molare Masse wird eingegeben. Die Teilchenzahl folgt dem Modell für die festgelegte Einheit; Gemisch- und Isotopenzusammensetzungen werden nicht bestimmt. Alle angezeigten Größen müssen im Zahlenbereich liegen."
};
