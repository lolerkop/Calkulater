import type { CalculatorCopy } from '../../lib/platform/types';

export const cacCopyDe: CalculatorCopy = {
  "name": "Kundenakquisekosten-Rechner",
  "slug": "kundenakquisekosten",
  "shortDescription": "Akquiseausgaben je Neukunde und Lebenszeitumsatz im Verhältnis zum CAC.",
  "seoTitle": "CAC-Rechner — Kundenakquisekosten und LTV-zu-CAC",
  "seoDescription": "Berechne Akquisekosten je Neukunde und das Verhältnis von Lebenszeitumsatz zu CAC, ohne Rentabilitätsbewertung.",
  "h1": "Kundenakquisekosten-Rechner",
  "keywords": [
    "CAC",
    "Kundenakquisekosten",
    "LTV",
    "Marketingbudget"
  ],
  "longDescription": "CAC misst die durchschnittlichen Ausgaben für die Gewinnung eines Neukunden. Kanäle lassen sich vergleichen, wenn Kostenumfang und Kundendefinition übereinstimmen. Das freiwillige Zusatzfeld bezeichnet hier den erwarteten Umsatz über die gesamte Kundenbeziehung. Umsatz geteilt durch CAC zeigt die Deckung durch Umsatz, aber keinen Gewinn: 9 000 Umsatz bei CAC 2 000 ergeben 4,5, ohne Herstellkosten, Betreuung, Erstattungen und Zahlungszeitpunkte zu berücksichtigen.",
  "howItWorks": "CAC = Akquiseausgaben ÷ Neukunden. Bei positivem CAC und Lebenszeitumsatz gilt Verhältnis = Lebenszeitumsatz je Kunde ÷ CAC. Bindung, Marge und Abzinsung werden nicht geschätzt. Ausgaben von null bei vorhandenen Kunden ergeben CAC 0; das Verhältnis dazu erfordert eine Division durch null. Ein leeres Umsatzfeld oder 0 lässt die Zusatzzeile entfallen. Übliche CAC-Beträge werden auf ganze Währungseinheiten gerundet, Beträge unter einer Einheit mit Dezimalstellen gezeigt.",
  "howToUse": [
    "Ordne Kosten und Neukunden derselben Kohorte zu; berücksichtige bei langen Verkaufszyklen den Abstand zwischen Ausgaben und Abschluss.",
    "Gib nichtnegative Kosten und eine positive ganze Kundenzahl bis 9 007 199 254 740 991 ein.",
    "Ergänze bei Bedarf den erwarteten Umsatz je Kunde über die gesamte Beziehung, nicht nur für einen Monat.",
    "Verwende für alle Geldwerte dieselbe Währung. Das lokale Symbol dient der Darstellung; es findet keine Währungsumrechnung statt. Das Verhältnis erhält keine Bewertung als gesund."
  ],
  "example": "100 000 Ausgaben für 50 Neukunden ergeben CAC = 100 000 ÷ 50 = 2 000. Ein Lebenszeitumsatz von 9 000 ergibt 9 000 ÷ 2 000 = 4,50 : 1. Bei null Ausgaben und denselben 50 Kunden ist CAC 0; das Verhältnis wird nicht berechnet.",
  "faq": [
    {
      "q": "Welche Kosten gehören in die Akquiseausgaben?",
      "a": "Lege den Umfang fest: Werbung, Agenturkosten, Gehälter und Werkzeuge der Marketing- und Vertriebsarbeit zur Neukundengewinnung. Die Betreuung bestehender Kunden gehört zu einer anderen Kostenbasis. Vergleiche Kanäle mit demselben Kostenumfang."
    },
    {
      "q": "Beweist ein Verhältnis von 3 : 1 die Rentabilität?",
      "a": "Nein. Hier steht Lebenszeitumsatz im Zähler, nicht Gewinn oder Deckungsbeitrag. Auch ein hoher Wert kann Herstellung und Betreuung unzureichend decken. Der Rechner verwendet keine allgemeine Grenze von 3 : 1."
    },
    {
      "q": "Wie berücksichtige ich lange Verkaufszyklen?",
      "a": "Ordne Kosten mit dem passenden zeitlichen Abstand der Kundenkohorte zu. Diesmonatige Kosten geteilt durch Kunden einer älteren Kampagne können CAC in beide Richtungen verzerren. Gleiche Kalenderdaten allein reichen nicht aus."
    },
    {
      "q": "Zählen organisch gewonnene Kunden mit?",
      "a": "Für einen gemischten CAC zählen alle Neukunden und zugehörigen Kosten. Für den CAC eines bezahlten Kanals zählen dessen Kunden und Kosten. Beide Größen können sinnvoll sein, sollten beim Vergleich aber nicht vermischt werden."
    },
    {
      "q": "Was bedeutet ein CAC von null?",
      "a": "Die eingegebenen Kosten sind null. Das beweist keine kostenlose Akquise, wenn Kosten fehlen. Bei positivem Umsatz bleibt das Verhältnis „—“, weil dafür durch null geteilt werden müsste."
    },
    {
      "q": "Kann ich Bruchteile von Kunden aus der Attribution eingeben?",
      "a": "Dieses Werkzeug zählt tatsächliche Neukunden als ganze Zahl. Bruchteilige Attributionsanteile verwenden eine andere Messbasis und dürfen nicht unbemerkt zu Menschen gerundet werden."
    }
  ],
  "disclaimer": "Akquisekosten und Verhältnis zum eingegebenen Lebenszeitumsatz. Keine Berechnung von Gewinn, Amortisationszeit oder Wechselkursen."
};
