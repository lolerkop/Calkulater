import type { CalculatorCopy } from '../../lib/platform/types';

export const proportionCopyDe: CalculatorCopy = {
  "name": "Rechner für Verhältnisgleichungen",
  "slug": "verhaeltnisgleichung",
  "shortDescription": "Löst a : b = c : d nach jedem der vier Glieder.",
  "seoTitle": "Verhältnisgleichung lösen — a : b = c : d",
  "seoDescription": "Finde jedes Glied einer Verhältnisgleichung über das Kreuzprodukt, mit vervollständigter Gleichung und Probe.",
  "h1": "Rechner für Verhältnisgleichungen",
  "keywords": [
    "Verhältnisgleichung lösen",
    "Dreisatz",
    "Kreuzprodukt",
    "Proportion berechnen"
  ],
  "longDescription": "Löst a/b = c/d nach dem ausgewählten Glied. Das unbekannte Feld ist ausgeblendet; einzugeben sind nur die drei bekannten Werte. Die Nenner b und d müssen auch nach der Berechnung ungleich null sein. Für eine eindeutige Antwort mit der gewählten Formel muss außerdem das diagonal gegenüberliegende Glied ungleich null sein. Die Zähler a oder c dürfen null sein. Angezeigt werden das gesuchte Glied, die vollständige Gleichung, der Quotient und die Kreuzprodukte.",
  "howItWorks": "Für b ≠ 0 und d ≠ 0 ist a/b = c/d gleichbedeutend mit ad = bc. Daraus folgen a = bc/d, b = ad/c, c = ad/b und d = bc/a. Der Teiler der gewählten Formel muss ungleich null sein. Das binäre Zwischenprodukt bleibt bis zur Rundung des Quotienten exakt.",
  "example": "In 2 : 3 = 4 : d ist das vierte Glied 3 × 4 ÷ 2 = 6.",
  "howToUse": [
    "Wähle, welches Glied gesucht ist.",
    "Fülle die drei bekannten Glieder aus.",
    "Lies die Antwort und die Probe ab."
  ],
  "faq": [
    {
      "q": "Warum ist ein Feld ausgeblendet?",
      "a": "Das gesuchte Glied wird berechnet, es sichtbar zu lassen lüde also zu einer Eingabe ein, die danach ohnehin übergangen wird."
    },
    {
      "q": "Welches Glied darf nicht null sein?",
      "a": "In der ursprünglichen Gleichung müssen b ≠ 0 und d ≠ 0 gelten. Für die Division in der gewählten Formel muss auch das diagonal gegenüberliegende Glied ungleich null sein. Bei einem Teiler null können keine oder viele Lösungen vorliegen; diese Seite unterscheidet diese Fälle nicht."
    },
    {
      "q": "Dürfen die Glieder negativ sein?",
      "a": "Ja, endliche negative und gebrochene Werte sind bei Nennern und Formeldivisor ungleich null zulässig. Ein Zähler null ist möglich, aber 0/0 ist kein definiertes Verhältnis."
    },
    {
      "q": "Was ist die Probe über die Kreuzprodukte?",
      "a": "a·d und b·c verwenden das intern berechnete Glied vor der Anzeigerundung. Das ist eine numerische Probe, kein Nachweis exakter Dezimaldaten. Das gerundet angezeigte Glied muss die Produkte nicht wortwörtlich reproduzieren."
    }
  ],
  "disclaimer": "Alle drei bekannten Werte müssen endlich sein. Gesuchtes Glied, Quotient und angezeigte Produkte müssen in den Zahlenbereich passen, ohne einen Wert ungleich null auf null zu runden; sonst erscheint eine Fehlermeldung. Die normale Anzeige rundet auf vier Dezimalstellen; sehr kleine und große Werte nutzen wissenschaftliche Schreibweise."
};
