import type { CalculatorCopy } from '../../lib/platform/types';

export const caloriesCopyDe: CalculatorCopy = {
  "name": "Rechner für Kalorien aus Makronährstoffen",
  "slug": "kalorien-aus-makros",
  "shortDescription": "Energie aus Makrogramm nach 4/9/4 und Kalorienanteile mit Grenzen für Ballaststoffe und Etiketten.",
  "longDescription": "Berechnet Energie aus angegebenen Gramm Eiweiß, Fett und Kohlenhydraten mit allgemeinen 4/9/4-Faktoren samt Einzelbeiträgen. Es ist eine Lebensmittelenergierechnung, keine persönliche Resorptionsmessung oder Ernährungsplanung. Kohlenhydratgramm werden hier mit 4 kcal/g angesetzt; Ballaststoffe und Polyole können andere Faktoren benötigen und werden nicht gesondert berechnet. Anteile beziehen sich auf Energie, nicht Masse. Null Gramm sind zulässig; negative oder fehlerhafte Werte müssen korrigiert werden.",
  "seoTitle": "Kalorien aus Makronährstoffen — Eiweiß, Fett und Kohlenhydrate",
  "seoDescription": "Energie aus Makrogramm nach 4/9/4 und Kalorienanteile mit Grenzen für Ballaststoffe und Etiketten.",
  "h1": "Rechner für Kalorien aus Makronährstoffen",
  "keywords": [
    "Kalorien aus Makros",
    "Kalorien Makronährstoffe",
    "Atwater-Faktoren",
    "Kalorien Makronaehrstoffe"
  ],
  "howToUse": [
    "Gib nichtnegative Gramm derselben Portion oder Tagesmenge ein.",
    "Prüfe, ob der Kohlenhydratwert Ballaststoffe oder Polyole enthält.",
    "Vergleiche kcal und Energieanteile; gleiche Gramm liefern unterschiedliche Energie.",
    "Prüfe Etikettenabweichungen anhand Rundung und Zusammensetzung statt einer vermeintlichen Labormessung."
  ],
  "howItWorks": "Ep =4 P; Ef =9 F; Ec =4 C; E =Ep+Ef+Ec kcal. Anteil =100×Komponentenenergie/E. Bei E=0 ist Energie 0, Prozentanteile stehen nicht zur Verfügung. Übliche Energie wird auf ganze kcal gerundet; positive Werte unter 1 kcal bleiben gebrochen. Anteile nutzen ungerundete Rechenwerte.",
  "example": "100 g Eiweiß, 50 g Fett, 200 g Kohlenhydrate: 400+450+800=1650 kcal. Energieanteile 24,24%, 27,27%, 48,48%. 0,1 g Eiweiß liefert 0,4 kcal und 100% Eiweißenergie; alle Nullen ergeben 0 kcal ohne Prozentanteile.",
  "faq": [
    {
      "q": "Warum liefert Fett in dieser Rechnung 9 kcal/g?",
      "a": "Allgemeine Atwater-Faktoren berücksichtigen verschiedene Energiewerte: 4 für Eiweiß und Kohlenhydrate, 9 für Fett. Sie sind Mittelwerte, keine exakte Molekülbeschreibung oder Körpermessung."
    },
    {
      "q": "Wie zählen Ballaststoffe und Alkohol bei Makrokalorien?",
      "a": "Eigene Faktoren werden hier nicht angewandt. Ballaststoffe und Polyole nicht automatisch mit 4 kcal/g behandeln; Alkohol fehlt ebenfalls in den drei Eingaben, seine Energie aber nicht im Lebensmittel."
    },
    {
      "q": "Warum können Makrokalorien vom Etikett abweichen?",
      "a": "Gramm und Kalorien werden gerundet; manche Lebensmittel nutzen spezifische Faktoren, Ballaststoffe oder Polyole. Zusammensetzung und Rundungsfolge erklären Abweichungen auch ohne Rechenfehler."
    },
    {
      "q": "Wie unterscheidet sich Kalorienanteil von Grammanteil?",
      "a": "10 g Eiweiß und 10 g Fett ergeben 40 und 90 kcal. Massenanteile sind gleich, Energieanteile 30,77% und 69,23%. Der Rechner verordnet keine Zielprozente für Ernährung."
    },
    {
      "q": "Was bedeutet null Makroenergie?",
      "a": "Drei Nullen ergeben 0 kcal; die Beiträge können für Anteile aber nicht durch 0 geteilt werden. Das ist kein Produktfehler. Negative Gramm werden abgelehnt, nicht still zu null gemacht."
    }
  ],
  "disclaimer": "Allgemeines 4/9/4-Modell für Lebensmittelenergie, keine Diät, Resorptionsbeurteilung oder Nährstoffverteilungsempfehlung. Besondere Komponenten und Lebensmittelfaktoren fehlen in der Einzelrechnung."
};
