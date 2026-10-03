import type { CalculatorCopy } from '../../lib/platform/types';

export const molarityCopyDe: CalculatorCopy = {
  "name": "Molaritätsrechner",
  "slug": "molaritaet-rechner",
  "shortDescription": "Molare Konzentration einer Lösung aus Stoffmenge oder Masse.",
  "seoTitle": "Molarität berechnen — Konzentration in mol/l",
  "seoDescription": "Berechne die molare Konzentration einer Lösung aus der Stoffmenge oder aus Masse und molarer Masse.",
  "h1": "Molaritätsrechner",
  "keywords": [
    "Molarität berechnen",
    "molare Konzentration",
    "Mol je Liter",
    "Konzentration einer Lösung",
    "Molaritaet berechnen",
    "Molaritaetsrechner"
  ],
  "longDescription": "Molarität ist Stoffmenge je Volumen der fertigen Lösung. Gib Mol oder Masse in Gramm mit molarer Masse in g/mol ein. Für das Volumen stehen ml, l und m³ zur Auswahl. Stoffzusammensetzung und Löslichkeit werden nicht bestimmt.",
  "howItWorks": "C = n/V in Litern; im Massenmodus n = m/M. 1 ml = 0,001 l, 1 m³ = 1000 l. Die Divisionen werden so angeordnet, dass ein Überlauf bei einer Zwischenumrechnung keinen endlichen Wert zerstört. Masse und Stoffmenge müssen endlich und nichtnegativ sein; Volumen und molare Masse müssen endlich und positiv sein. Das Volumen erscheint normalerweise in Litern; ist diese Umrechnung nicht darstellbar, bleibt die ursprüngliche Einheit erhalten.",
  "example": "0,5 mol in 2 l ergeben 0,25 mol/l. 58,44 g bei M = 58,44 g/mol in einem Endvolumen von 500 ml ergeben 1 mol / 0,5 l = 2 mol/l.",
  "howToUse": [
    "Wähle Stoffmenge oder Masse.",
    "Gib einen endlichen nichtnegativen Wert ein; bei Masse zusätzlich M in g/mol.",
    "Wähle die Einheit und gib das Endvolumen der gesamten Lösung ein."
  ],
  "faq": [
    {
      "q": "Welches Volumen wird benötigt?",
      "a": "Das Volumen der fertigen Lösung bei der gewählten Temperatur. Lösungsmittel- und Stoffvolumen müssen sich nicht addieren; eine allgemeine Volumenzunahme wird nicht angenommen."
    },
    {
      "q": "Kann ich Milliliter eingeben?",
      "a": "Ja, wähle ml. 500 ml werden als 0,5 l behandelt. Rechne den Eingabewert nicht vorher von Hand um."
    },
    {
      "q": "Was unterscheidet Molarität von Molalität?",
      "a": "Molarität bezieht Mol auf das Lösungsvolumen, Molalität auf die Lösungsmittelmasse in kg. Molalität wird hier nicht berechnet."
    },
    {
      "q": "Kann ich Massenprozent einsetzen?",
      "a": "Nein. Für die Umrechnung in mol/l sind eine passende molare Masse und die Lösungsdichte nötig. Prozent sind keine Stoffmenge in Mol."
    },
    {
      "q": "Dürfen Masse oder Stoffmenge null sein?",
      "a": "Ja. 0 mol bei positivem Volumen ergeben 0 mol/l; 0 g bei positiver molarer Masse und positivem Volumen ebenfalls. Wird eine positive Stoffmenge oder Konzentration zu null, folgt ein Fehler."
    }
  ],
  "disclaimer": "Das eingegebene Endvolumen wird verwendet. Temperatur, Dichte, Aktivität und Löslichkeit werden nicht modelliert. Nicht darstellbare Größen führen zu einem Fehler; die Anzeige wird gerundet."
};
