import type { CalculatorCopy } from '../../lib/platform/types';

export const densityCopyDe: CalculatorCopy = {
  "name": "Dichte-Rechner",
  "slug": "dichte-rechner",
  "shortDescription": "Dichte, Masse oder Volumen eines Stoffes aus ρ = m ÷ V.",
  "seoTitle": "Dichte berechnen — ρ = m ÷ V",
  "seoDescription": "Berechne die Dichte eines Stoffes, seine Masse oder sein Volumen aus ρ = m ÷ V in SI-Einheiten.",
  "h1": "Dichte-Rechner",
  "keywords": [
    "Dichte berechnen",
    "Masse",
    "Volumen",
    "SI-Einheiten"
  ],
  "longDescription": "Verknüpft Masse, eingenommenes Volumen und mittlere Massendichte. Die Eingaben verwenden immer kg, m³ und kg/m³; Gramm einzugeben schaltet keine Einheit um. Zusätzlich wird die Dichte in g/cm³ angezeigt. Das Außenvolumen eines porösen Körpers enthält Hohlräume, das reine Materialvolumen nicht. Temperatur, Druck, Zusammensetzung und Porosität müssen zu den verwendeten Angaben passen.",
  "howToUse": [
    "Wähle Dichte, Masse oder Volumen.",
    "Verwende kg, m³ und kg/m³; zum Beispiel sind 2 Liter = 0,002 m³.",
    "Für Dichte und Masse muss das Volumen positiv sein; Masse oder Dichte dürfen null sein.",
    "Ein positives gesuchtes Volumen verlangt positive Masse und Dichte; Tabellenwerte müssen zu den Bedingungen passen."
  ],
  "howItWorks": "ρ = m/V, m = ρV und V = m/ρ. 1 g/cm³ = 1000 kg/m³, daher lautet die Zusatzanzeige ρ/1000. Außenvolumen enthält Poren im Nenner; sie werden nicht automatisch abgezogen. Null Masse in einem vorgegebenen positiven Volumen ergibt null mittlere Dichte.",
  "example": "5,4 kg in 0,002 m³ ergeben 2700 kg/m³ = 2,7 g/cm³. Bei vorgegebener Dichte 2700 und 0,5 m³ folgen 1350 kg. 1000 kg in 1 m³ ergeben 1 g/cm³, einen gerundeten Wasser-Beispielwert und keine temperaturunabhängige Konstante.",
  "faq": [
    {
      "q": "Warum ist Dichte temperaturabhängig?",
      "a": "Bei gleicher Masse verändert ein anderes Volumen die Dichte. Tabellenwerte benötigen deshalb Temperatur und gegebenenfalls Druck; Wasser hat keinen überall gleichen Wert von exakt 1 g/cm³."
    },
    {
      "q": "Was ist der Unterschied zur relativen Dichte?",
      "a": "Relative Dichte ist ein dimensionsloses Verhältnis zu einer angegebenen Referenzdichte unter definierten Bedingungen. Die hier berechnete Massendichte hat die Einheit kg/m³."
    },
    {
      "q": "Warum schwimmt Eis auf Wasser?",
      "a": "Unter üblichen Bedingungen hat Eis geringere Dichte als flüssiges Wasser. Diese Form bestimmt aber weder Temperatur noch Phasenwechsel; verwende passende Stoffwerte."
    },
    {
      "q": "Gilt die Formel auch für poröse Körper?",
      "a": "Mit dem Außenvolumen ergibt sie die mittlere oder Rohdichte einschließlich Hohlräumen. Die Dichte des Materials ohne Poren muss anhand eines anderen Volumens bestimmt werden."
    },
    {
      "q": "Darf ich Gramm und Kubikzentimeter direkt eingeben?",
      "a": "Nein, die Felder bleiben in kg und m³. 1 g = 0,001 kg und 1 cm³ = 0,000001 m³; nur die zusätzliche Ergebniszeile verwendet g/cm³."
    },
    {
      "q": "Wie bestimme ich das Volumen eines unregelmäßigen Körpers?",
      "a": "Flüssigkeitsverdrängung ist für undurchlässige Körper möglich. Aufnahme von Flüssigkeit, Lösung, offene Poren und Luftblasen können das Ergebnis verfälschen."
    }
  ],
  "disclaimer": "Mittlere Massendichte für die vorgegebenen Bedingungen und Volumendefinition; Temperatur, Druck, Porosität und Zusammensetzung werden nicht separat modelliert."
};
