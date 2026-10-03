import type { CalculatorCopy } from '../../lib/platform/types';

export const solutionConcentrationCopyDe: CalculatorCopy = {
  "name": "Rechner für die Konzentration einer Lösung",
  "slug": "konzentration-loesung",
  "shortDescription": "Massenprozent, Masse je Volumen und Teile je Million.",
  "seoTitle": "Konzentration einer Lösung berechnen — Prozent und ppm",
  "seoDescription": "Berechne die Konzentration einer Lösung: Massenprozent, Masse je Volumen und Teile je Million.",
  "h1": "Rechner für die Konzentration einer Lösung",
  "keywords": [
    "Konzentration berechnen",
    "Massenprozent",
    "Massenanteil",
    "ppm berechnen",
    "Konzentration Loesung"
  ],
  "longDescription": "Wähle Massenanteil oder Stoffmasse je Volumen der fertigen Lösung. Der erste Modus zeigt Massenprozent und massenbezogene ppm; der zweite Gramm je 100 ml (% m/V) und g/l. Masse oder Volumen des Lösungsmittels ersetzen nicht die Gesamtmenge der Lösung.",
  "howItWorks": "m/m: 100 × Stoffmasse/Lösungsmasse; ppm: 10⁶ × dasselbe Massenverhältnis. m/V: 100 × m/V mit m in g und V in ml ergibt g je 100 ml; 1000 × m/V ergibt g/l. Die Grenze Stoffmasse ≤ Lösungsmasse gilt nur für m/m. Die Stoffmasse muss endlich und nichtnegativ sein; Lösungsmasse und Volumen müssen endlich und positiv sein. Nicht darstellbare Ergebnisse führen zu einer Fehlermeldung; kleine Werte werden nicht als null angezeigt.",
  "example": "25 g in 500 g Lösung ergeben 5,00 Massenprozent, 50 000 ppm und 475 g Lösungsmittel. 3 g in 100 ml fertiger Lösung ergeben 3,00% m/V und 30 g/l.",
  "howToUse": [
    "Wähle Massenanteil oder Masse je Volumen.",
    "Gib die Masse des gelösten Stoffes in Gramm ein.",
    "Gib die gesamte Lösungsmasse in Gramm oder das Endvolumen in Millilitern ein."
  ],
  "faq": [
    {
      "q": "Warum die Lösungsmasse statt der Lösungsmittelmasse?",
      "a": "Der gelöste Stoff gehört zur Gesamtmasse. Bei 25 g Stoff und 475 g Lösungsmittel sind 500 g Lösung einzugeben. Die Differenz wird separat angezeigt."
    },
    {
      "q": "Was bedeutet das Prozent bei Masse je Volumen?",
      "a": "Gramm Stoff je 100 ml Lösung, kein Volumenanteil. Ein Vergleich mit Massenprozent erfordert die Dichte der Lösung."
    },
    {
      "q": "Kann das Ergebnis über 100% liegen?",
      "a": "Ein Massenanteil nicht: Ein Bestandteil kann nicht schwerer als die gesamte Lösung sein. Für g je 100 ml gilt keine allgemeine Grenze von 100; die Löslichkeit wird nicht geprüft."
    },
    {
      "q": "Sind ppm und mg/l gleich?",
      "a": "Hier sind ppm mg je kg Lösung, also ein Massenverhältnis. Die Gleichheit mit mg/l setzt eine Dichte von 1 kg/l voraus; diese wird nicht angenommen."
    },
    {
      "q": "Darf die Stoffmasse null sein?",
      "a": "Ja. Bei positiver Lösungsmasse oder positivem Volumen ergeben 0 g Stoff 0% und entsprechend 0 ppm oder 0 g/l. Wird eine positive Konzentration bei der Rechnung zu null, folgt ein Fehler."
    }
  ],
  "disclaimer": "Berechnet werden Massenanteil und Massenkonzentration, keine Volumenanteile oder Löslichkeitsgrenzen. ppm sind massenbezogen. Maschinenrechnung und Anzeige werden gerundet."
};
