import type { CalculatorCopy } from '../../lib/platform/types';

export const fractionArithCopyDe: CalculatorCopy = {
  "name": "Bruchrechner",
  "slug": "bruchrechner",
  "shortDescription": "Brüche addieren, subtrahieren, multiplizieren und dividieren, mit genauem Kürzen.",
  "seoTitle": "Bruchrechner — addieren, subtrahieren, multiplizieren, dividieren",
  "seoDescription": "Addiere, subtrahiere, multipliziere und dividiere Brüche mit genauem Ergebnis und selbsttätigem Kürzen.",
  "h1": "Bruchrechner",
  "keywords": [
    "Bruchrechner",
    "Brüche addieren",
    "Brüche kürzen",
    "Bruchrechnung",
    "Brueche addieren"
  ],
  "longDescription": "Addiert, subtrahiert, multipliziert und dividiert zwei Brüche mit ganzzahligen Zählern und Nennern bis zur Kürzung. Ein Drittel hat keine endliche Dezimaldarstellung; gerundete Zwischenwerte können das Ergebnis verändern. Exakt ist 1/3 + 2/3 gleich 1, doch nicht jedes numerische Verfahren liefert zwangsläufig 0,99999… Die Dezimalzeile ist ein gerundeter Anhaltspunkt; das Hauptergebnis bleibt der exakte gekürzte Bruch.",
  "howItWorks": "Addition und Subtraktion laufen über den gemeinsamen Nenner b·d, die Multiplikation multipliziert Zähler und Nenner, und die Division multipliziert mit dem Kehrwert des zweiten Bruchs. Das Ergebnis wird mit dem größten gemeinsamen Teiler gekürzt, und das Vorzeichen sitzt im Zähler.",
  "example": "1/2 + 1/3 = 5/6 — genau, ohne Zwischenrundung.",
  "howToUse": [
    "Wähle die Rechenart.",
    "Trage Zähler und Nenner beider Brüche ein.",
    "Lies das genaue, gekürzte Ergebnis ab."
  ],
  "faq": [
    {
      "q": "Warum nicht einfach die Dezimalwerte addieren?",
      "a": "Ein Bruch bewahrt ein exaktes Verhältnis ganzer Zahlen. Rundet man etwa 1/3 und 2/3 auf 0,33 und 0,67, verlieren beide Summanden Genauigkeit, obwohl ihre Summe zufällig 1 bleibt. Hier wird vor der Dezimalanzeige gekürzt."
    },
    {
      "q": "Wird das Ergebnis selbsttätig gekürzt?",
      "a": "Ja, mit dem größten gemeinsamen Teiler von Zähler und Nenner. 6/12 erscheint als 1/2, und der Faktor, mit dem gekürzt wurde, steht in einer eigenen Zeile."
    },
    {
      "q": "Wohin gehört ein Minuszeichen?",
      "a": "In den Zähler. −1/2 und 1/−2 bedeuten dasselbe, der Nenner wird deshalb immer auf positiv gebracht."
    },
    {
      "q": "Gibt es eine Grenze für die Größe der Zahlen?",
      "a": "Ja, eine Million dem Betrag nach für jede. So bleibt jedes Zwischenprodukt im Bereich genauer ganzer Zahlen, und das Ergebnis kann nicht still an Genauigkeit verlieren."
    }
  ],
  "disclaimer": "Jeder Zähler und Nenner muss ganzzahlig sein und darf dem Betrag nach 1000000 nicht überschreiten. Beide Nenner müssen von null verschieden sein; beim Dividieren gilt das auch für den zweiten Zähler. Nullzähler sind zulässig. Der exakte Bruch wird nicht gerundet. Der Dezimalwert hat bis zu sechs Nachkommastellen; für 0 < |x| < 10⁻⁶ nutzt die wissenschaftliche Schreibweise sieben signifikante Stellen."
};
