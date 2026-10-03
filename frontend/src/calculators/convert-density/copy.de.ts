import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const densityCopyDe: CalculatorCopy = {
  "name": "Dichteumrechner",
  "slug": "dichte-umrechner",
  "shortDescription": "Dichte zwischen kg/m³, g/cm³ und Pfund je Kubikfuß umrechnen.",
  "seoTitle": "Dichte umrechnen — kg/m³, g/cm³, lb/ft³",
  "seoDescription": "Rechne die Dichte zwischen Kilogramm je Kubikmeter, Gramm je Kubikzentimeter, Kilogramm je Liter und Pfund je Kubikfuß um.",
  "h1": "Dichteumrechner",
  "keywords": [
    "Dichte umrechnen",
    "kg/m3 in g/cm3",
    "Dichte von Wasser"
  ],
  "longDescription": "Rechnet die Dichte zwischen Kilogramm je Kubikmeter, Gramm je Kubikzentimeter, Kilogramm je Liter, Tonnen je Kubikmeter, Gramm je Liter, Pfund je Kubikfuß und je US-Gallone sowie Unzen je Kubikzoll um.",
  "howToUse": [
    "Trage den Wert ein.",
    "Wähle die Ausgangseinheit.",
    "Wähle die Zieleinheit."
  ],
  "howItWorks": "Jede Einheit läuft über das Kilogramm je Kubikmeter mit genauen Faktoren.",
  "example": "Wasser hat rund 1 g/cm³, das sind 1000 kg/m³ oder etwa 62,43 Pfund je Kubikfuß.",
  "faq": [
    {
      "q": "Warum sind 1 g/cm³ gleich 1000 kg/m³?",
      "a": "Ein Kilogramm hält tausend Gramm und ein Kubikmeter eine Million Kubikzentimeter; eine Million geteilt durch tausend ergibt tausend."
    },
    {
      "q": "Wie groß ist die Dichte von Wasser?",
      "a": "Rund 1 g/cm³ bei 4 °C. Der genaue Wert hängt von der Temperatur ab, deshalb rechnet dieses Werkzeug Einheiten um und schlägt keine Stoffe nach."
    },
    {
      "q": "Lässt sich Dichte in Masse umrechnen?",
      "a": "Nein — dafür braucht es ein Volumen. Dichte ist Masse je Volumen, und der Umrechner arbeitet allein mit dieser Größe."
    },
    {
      "q": "Welche Gallone wird verwendet?",
      "a": "Die US-Gallone mit 3,785411784 Litern. Die britische Gallone ist größer und wird hier nicht verwendet."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
