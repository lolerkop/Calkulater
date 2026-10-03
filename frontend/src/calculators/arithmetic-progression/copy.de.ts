import type { CalculatorCopy } from '../../lib/platform/types';

export const arithmeticProgressionCopyDe: CalculatorCopy = {
  "name": "Rechner für die arithmetische Folge",
  "slug": "arithmetische-folge",
  "shortDescription": "Das n-te Glied und die Summe einer arithmetischen Folge aus erstem Glied und Differenz.",
  "seoTitle": "Arithmetische Folge berechnen",
  "seoDescription": "Finde das n-te Glied und die Summe einer arithmetischen Folge aus erstem Glied, Differenz und Gliednummer.",
  "h1": "Rechner für die arithmetische Folge",
  "keywords": [
    "arithmetische Folge berechnen",
    "n-tes Glied",
    "Summe arithmetische Reihe",
    "Differenz der Folge"
  ],
  "longDescription": "Berechnet das n-te Glied und die Summe der ersten n Glieder aus a₁ und der konstanten Differenz d. Eine negative Differenz ergibt eine fallende, null eine konstante Folge. Der Index muss eine ganze Zahl von 1 bis 9007199254740991 sein. Die Tabelle zeigt die ersten zehn Glieder; Glied und Summe gelten für alle n. Geschlossene Formeln vermeiden eine Schleife über die gesamte Folge. Binäre Zwischenprodukte und Summen bleiben bis zur abschließenden Rundung erhalten.",
  "howItWorks": "Das n-te Glied ist aₙ = a₁ + (n−1)d. Die Summe der ersten n Glieder ist Sₙ = n(a₁ + aₙ)/2 — die Zahl der Glieder mal dem Mittel aus erstem und letztem.",
  "example": "Mit a₁ = 3 und d = 5 ist das zehnte Glied 48 und die Summe der ersten zehn Glieder 255.",
  "howToUse": [
    "Trage das erste Glied der Folge ein.",
    "Trage die Differenz ein — wie viel jedes Glied zum vorigen hinzufügt.",
    "Trage die Nummer des gesuchten Glieds ein.",
    "Für eine fallende Reihe nimm eine negative Differenz."
  ],
  "faq": [
    {
      "q": "Wie unterscheidet sich eine arithmetische von einer geometrischen Folge?",
      "a": "Eine arithmetische Folge addiert eine konstante Differenz; eine geometrische multipliziert mit einem konstanten Verhältnis. Geometrische Folgen müssen nicht wachsen: Bei a₁ > 0 und 0 < r < 1 fallen sie."
    },
    {
      "q": "Darf die Differenz negativ sein?",
      "a": "Ja, und das ist der gewöhnliche fallende Fall. Mit a₁ = 100 und d = −7 ist das fünfzehnte Glied 2 und die Summe von fünfzehn Gliedern 765."
    },
    {
      "q": "Warum wird die Summe mit einer Formel und nicht durch Addieren berechnet?",
      "a": "Sₙ = n(a₁ + aₙ)/2 vermeidet das Addieren von n Gliedern in einer Schleife. Hier bleibt die binäre Zwischenrechnung exakt, bevor jedes endgültige Zahlenergebnis gerundet wird. Beliebige Dezimaleingaben und die angezeigten Stellen haben dennoch eine begrenzte Genauigkeit."
    },
    {
      "q": "Was passiert bei einer Differenz von null?",
      "a": "Die Reihe wird konstant: jedes Glied gleicht dem ersten, und die Summe ist das erste Glied mal der Zahl der Glieder. Die Formeln arbeiten ohne Sonderfall weiter."
    },
    {
      "q": "Warum zeigt die Tabelle nur zehn Glieder?",
      "a": "Das Muster ist schon nach drei erkennbar, und hunderte Zeilen brächten nichts hinzu. Das n-te Glied und die Summe werden trotzdem für die ganze Reihe berechnet und nicht für den gezeigten Ausschnitt."
    }
  ],
  "disclaimer": "a₁ und d müssen endlich sein. Überlauf oder das Runden eines von null verschiedenen Glieds oder einer Summe auf null führt zu einer Fehlermeldung, auch in der Vorschau. Kleine und große Werte erscheinen in wissenschaftlicher Schreibweise; die Anzeige ist gerundet."
};
