import type { CalculatorCopy } from '../../lib/platform/types';

export const linearSystemCopyDe: CalculatorCopy = {
  "name": "Rechner für lineare Gleichungssysteme",
  "slug": "lineares-gleichungssystem",
  "shortDescription": "Löst ein System aus zwei linearen Gleichungen mit zwei Unbekannten nach der Regel von Cramer.",
  "seoTitle": "Lineares Gleichungssystem lösen — zwei Unbekannte",
  "seoDescription": "Löse ein System aus zwei linearen Gleichungen mit zwei Unbekannten nach der Regel von Cramer und sieh die Hauptdeterminante, die über die Lösbarkeit entscheidet.",
  "h1": "Rechner für lineare Gleichungssysteme",
  "keywords": [
    "lineares Gleichungssystem lösen",
    "Regel von Cramer",
    "zwei Gleichungen zwei Unbekannte",
    "Determinante"
  ],
  "longDescription": "Bestimmt mit der Cramerschen Regel das eindeutige Paar x, y für a₁x + b₁y = c₁ und a₂x + b₂y = c₂. Hat jede Gleichung einen von null verschiedenen x- oder y-Koeffizienten, entspricht dies dem Schnittpunkt zweier Geraden. Eine Zeile mit ausschließlich null als Koeffizienten kann stattdessen eine Identität oder einen Widerspruch ausdrücken. Bei Δ = 0 gibt es kein eindeutiges Paar; der Rechner unterscheidet dann nicht zwischen keiner und unendlich vielen Lösungen.",
  "howItWorks": "Δ = a₁b₂ − a₂b₁, Δx = c₁b₂ − c₂b₁, Δy = a₁c₂ − a₂c₁. Für Δ ≠ 0 gilt x = Δx/Δ und y = Δy/Δ. Bei Δ = 0 liefern die Cramerschen Formeln kein eindeutiges Paar; zur Klassifikation ist ein anderes Verfahren nötig. Nullkoeffizienten sind zulässig und müssen ausdrücklich eingetragen werden.",
  "example": "Für 2x + 3y = 13 und 4x − y = 5 ist die Determinante −14 und die Lösung x = 2, y = 3.",
  "howToUse": [
    "Schreibe beide Gleichungen in der Form ax + by = c.",
    "Trage die Koeffizienten der ersten Gleichung ein: a₁, b₁ und c₁.",
    "Trage die Koeffizienten der zweiten Gleichung ein: a₂, b₂ und c₂.",
    "Eine fehlende Unbekannte bedeutet einen Koeffizienten von null und kein leeres Feld."
  ],
  "faq": [
  {
    "q": "Was bedeutet eine Determinante von null?",
    "a": "Bei Δ = 0 gibt es kein eindeutiges Paar x, y. Es sind keine oder unendlich viele Lösungen möglich; dieses Modell unterscheidet die Fälle nicht. Parallele oder identische Geraden beschreiben nur Fälle, in denen jede Zeile tatsächlich eine Gerade darstellt. Eine Zeile 0x + 0y = c kann eine Identität oder ein Widerspruch sein."
  },
  {
    "q": "Dürfen die Koeffizienten negativ oder gebrochen sein?",
    "a": "Ja, endliche negative Koeffizienten und Dezimalzahlen sind zulässig. Eine Determinante von null ist nicht der einzige Abbruchgrund: Das Ergebnis muss im darstellbaren Zahlenbereich bleiben."
  },
  {
    "q": "Wie trage ich eine Gleichung mit nur einer Unbekannten ein?",
    "a": "Setze für die fehlende Unbekannte den Koeffizienten null. Aus 3x = 12 wird a = 3, b = 0, c = 12."
  },
  {
    "q": "Warum die Regel von Cramer und nicht Einsetzen?",
    "a": "Für Δ ≠ 0 liefert die Cramersche Regel unmittelbar das eindeutige Paar x, y. Einsetzen oder Eliminieren führt zum selben mathematischen Ergebnis. Bei Δ = 0 ist die Existenz noch nicht entschieden: Ein anderes Verfahren muss zwischen keiner und unendlich vielen Lösungen unterscheiden."
  }
],
  "disclaimer": "Endliche Koeffizienten sind zulässig, auch negative Werte und Dezimalzahlen. Determinanten werden aus den binären Darstellungen der Eingaben berechnet; Ergebnisse werden gerundet. Kleine von null verschiedene Werte erscheinen in wissenschaftlicher Schreibweise. Ein nicht darstellbares Δ, x oder y führt zu einem Bereichsfehler. Nahezu abhängige Systeme reagieren empfindlich auf Unsicherheiten der Koeffizienten; zusätzliche angezeigte Stellen beseitigen diese Empfindlichkeit nicht."
};
