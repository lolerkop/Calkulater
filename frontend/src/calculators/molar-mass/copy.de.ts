import type { CalculatorCopy } from '../../lib/platform/types';

export const molarMassCopyDe: CalculatorCopy = {
  "name": "Rechner für die molare Masse",
  "slug": "molare-masse-rechner",
  "shortDescription": "Molare Masse aus der Summenformel, mit dem Beitrag jedes Elements.",
  "seoTitle": "Molare Masse berechnen aus der Summenformel",
  "seoDescription": "Berechne die molare Masse aus einer chemischen Formel, mit dem Beitrag jedes Elements und seinem Anteil an der Gesamtmasse.",
  "h1": "Rechner für die molare Masse",
  "keywords": [
    "molare Masse",
    "Molmasse",
    "Summenformel",
    "Stoffmenge",
    "Rechner fuer die molare Masse"
  ],
  "longDescription": "Liest Formeln mit den acht unterstützten Elementen H, C, N, O, Na, S, Cl und Ca. Berechnet molare Masse und Zusammensetzung aus angesetzten näherungsweisen Standard-Atomgewichten. Runde Klammern und gewöhnliche ganzzahlige Indizes werden unterstützt; Hydrat-Punktnotation, Ladungen, Isotope und andere Elemente nicht.",
  "howToUse": [
    "Trage die Summenformel in üblicher Schreibweise ein, etwa H2O, NaCl oder Ca(OH)2.",
    "Lies die molare Masse in Gramm je Mol ab.",
    "Prüfe in der Tabelle, welches Element den größten Massenanteil beisteuert."
  ],
  "howItWorks": "Jedes Elementsymbol wird mit seiner Atommasse aus dem Periodensystem angesetzt und mit der Anzahl der Atome multipliziert. Klammern werden ausmultipliziert, sodass Ca(OH)2 zwei Sauerstoff- und zwei Wasserstoffatome enthält. Die Summe aller Beiträge ist die molare Masse in g/mol; der Anteil eines Elements ist sein Beitrag geteilt durch diese Summe.",
  "example": "Für H2O ergeben zwei Wasserstoffatome 2 × 1,008 = 2,016 g/mol und ein Sauerstoffatom 15,999 g/mol. Zusammen sind das 18,015 g/mol, wovon der Sauerstoff rund 88,8 Prozent stellt.",
  "faq": [
    {
      "q": "Warum sind Atommassen keine ganzen Zahlen?",
      "a": "Die angegebene Atommasse ist der Mittelwert über die natürlichen Isotope eines Elements, gewichtet nach ihrer Häufigkeit. Chlor liegt deshalb bei etwa 35,45 und nicht bei 35 oder 37."
    },
    {
      "q": "Ist die molare Masse dasselbe wie das Molekulargewicht?",
      "a": "Zahlenmäßig stimmen sie überein, die Einheiten unterscheiden sich: Die molare Masse hat die Einheit g/mol, das relative Molekulargewicht ist eine dimensionslose Verhältniszahl."
    },
    {
      "q": "Wie gebe ich Formeln und Gruppen ein?",
      "a": "Verwende lateinische Elementsymbole und gewöhnliche Ziffern, etwa H2SO4 oder Ca(OH)2. Groß- und Kleinschreibung beachten, zum Beispiel Cl. Ein Faktor hinter runden Klammern gilt für die ganze Gruppe; leere Gruppen und Nullindizes werden abgewiesen."
    },
    {
      "q": "Wie schreibe ich ein unterstütztes Hydrat?",
      "a": "Für CaSO4·2H2O gib CaSO4(H2O)2 ein: Ca, S, O und H werden unterstützt, die Punktnotation nicht. Der Faktor 2 fügt vier H-Atome und zwei O-Atome hinzu. Beispiele mit Cu oder Al funktionieren nicht, da diese Elemente in der Tabelle fehlen."
    },
    {
      "q": "Welche Grenzen hat der Parser?",
      "a": "Höchstens 1000 Zeichen nach Entfernen der Leerzeichen und 64 Klammer-Ebenen. Indizes und die Gesamtzahl der Atome müssen positive sicher darstellbare ganze Zahlen bis höchstens 9007199254740991 sein. Andere Zeichen und überschrittene Grenzen führen zu einer Fehlermeldung."
    }
  ],
  "disclaimer": "Berechnung für H, C, N, O, Na, S, Cl und Ca mit näherungsweisen Standard-Atomgewichten. Isotopenzusammensetzung, Ladungen und andere Elemente werden nicht berücksichtigt."
};
