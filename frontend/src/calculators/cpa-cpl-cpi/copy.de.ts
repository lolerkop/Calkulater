import type { CalculatorCopy } from '../../lib/platform/types';

export const cpaCplCpiCopyDe: CalculatorCopy = {
  "name": "Rechner für CPA, CPL und CPI",
  "slug": "cpa-cpl-cpi-rechner",
  "shortDescription": "Kosten je Handlung, Anfrage oder Installation aus Budget und Zahl der Handlungen.",
  "seoTitle": "CPA, CPL und CPI berechnen — Kosten je Handlung",
  "seoDescription": "Berechne die Kosten je Handlung, je Anfrage oder je App-Installation aus einem Werbebudget und der Zahl der erhaltenen Handlungen.",
  "h1": "Rechner für CPA, CPL und CPI",
  "keywords": [
    "CPA berechnen",
    "CPL",
    "CPI",
    "Kosten je Anfrage"
  ],
  "longDescription": "CPA, CPL und CPI teilen Ausgaben durch eine Ereigniszahl, beziehen sich aber auf verschiedene Ergebnisse: eine festgelegte Konversion, einen bestätigten Kontakt oder eine App-Installation. Definiere Ereignis und Dublettenregel vor dem Kampagnenvergleich. Eine geöffnete Form ist keine abgesendete Anfrage; eine Installation belegt keine aktive Nutzung. Hier werden tatsächliche ganze Ereigniszahlen eingegeben. Bruchteilige Attributionsanteile verwenden eine andere Messbasis.",
  "howItWorks": "CPA, CPL oder CPI = Ausgaben ÷ entsprechende Handlungen. Die Auswahl ändert die Bezeichnung, nicht die Division. „Je tausend Handlungen“ = Kosten je Handlung × 1 000: dieselbe Kennzahl in größerem Maßstab, kein CPM für Einblendungen. Kosten und Ereigniszahl müssen positiv sein. Zwei Dezimalstellen erzeugen keine zusätzliche Genauigkeit der Eingangsdaten; sehr kleine Werte bleiben sichtbar.",
  "howToUse": [
    "Wähle CPA für eine definierte Konversion, CPL für einen Kontakt oder CPI für eine Installation; lege das Ereignis vor dem Zählen fest.",
    "Gib tatsächliche Ausgaben ein und entscheide vorab, ob Agenturkosten und weitere Ausgaben dazugehören.",
    "Gib eine positive ganze Ereigniszahl derselben Kampagne bis 9 007 199 254 740 991 ein.",
    "Stimme Zeitraum, Attributionsfenster und Dublettenregel ab. Alle Geldwerte müssen dieselbe Währung nutzen; es findet keine Währungsumrechnung oder Gewinnschätzung statt."
  ],
  "example": "84 000 Ausgaben für 320 Anfragen ergeben CPL = 84 000 ÷ 320 = 262,50. Tausend solche Anfragen würden bei gleicher Durchschnittsrate 262 500 kosten. Bei null Anfragen ist die Rate nicht berechenbar. 10 000 Ausgaben ergeben bei 100 Formularöffnungen 100 je Öffnung, bei 50 abgesendeten Anfragen dagegen 200 je Kontakt.",
  "faq": [
    {
      "q": "Wie unterscheiden sich CPA, CPL und CPI?",
      "a": "CPA bewertet die festgelegte Konversion, CPL einen Kontakt und CPI eine Installation. CPA kann einen Kauf oder eine andere Handlung meinen und muss deshalb nicht größer als CPL sein. Vergleiche die Kosten desselben definierten Ereignisses."
    },
    {
      "q": "Soll ich Agenturkosten einrechnen?",
      "a": "Du kannst reine Mediakosten oder einen erweiterten Kostenumfang mit Gebühren und weiteren Ausgaben messen. Benenne die Grundlage und nutze sie für alle verglichenen Kampagnen. Der Rechner bestimmt den Kostenumfang nicht selbst."
    },
    {
      "q": "Warum unterscheiden sich Plattform und CRM?",
      "a": "Prüfe Attributionsfenster und Modell, Klick- oder Ereignisdatum, Bestätigung, Dubletten und Kostenumfang. Die Abweichung kann in beide Richtungen gehen; CRM-Werte sind nicht immer höher."
    },
    {
      "q": "Sind niedrigere Handlungskosten immer besser?",
      "a": "Nein. Günstige Kontakte können seltener zahlende Kunden werden und Installationen müssen keine aktive Nutzung erzeugen. Betrachte CPL zusammen mit der Kundenquote der Kontakte und CPI mit der Bindung. Ein höheres Budget erzwingt keine höhere Durchschnittsrate."
    }
  ],
  "disclaimer": "Durchschnittskosten eines definierten Ereignisses anhand eingegebener Ausgaben. Keine Berechnung von Gewinn, Kontaktqualität, Attribution oder Wechselkursen."
};
