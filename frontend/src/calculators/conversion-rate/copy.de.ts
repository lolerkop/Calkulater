import type { CalculatorCopy } from '../../lib/platform/types';

export const conversionRateCopyDe: CalculatorCopy = {
  "name": "Rechner für die Konversionsrate",
  "slug": "konversionsrate-rechner",
  "shortDescription": "Anteil der Besuche mit Zielhandlung und Kosten je erfolgreichem Besuch.",
  "seoTitle": "Konversionsrate und Kosten je Konversion berechnen",
  "seoDescription": "Berechne die Konversionsrate von Besuchen zu Zielhandlungen, die Kosten je Konversion und die Besuche je Konversion.",
  "h1": "Rechner für die Konversionsrate",
  "keywords": [
    "Konversionsrate berechnen",
    "Kosten je Konversion",
    "Besuche je Bestellung",
    "Conversion Rate"
  ],
  "longDescription": "Dieser Rechner misst den Anteil der Besuche mit mindestens einer festgelegten Zielhandlung. Jeder Besuch zählt im Zähler höchstens einmal; die Rate liegt daher zwischen 0 und 100 %. Das ist keine Ereigniszahl: Zwei Bestellungen in einem Besuch bleiben ein erfolgreicher Besuch. Ein positives Budget liefert zusätzlich Kosten je erfolgreichem Besuch, der Kehrwert die durchschnittlichen Besuche je Konversion. Dieser Durchschnitt beschreibt die beobachtete Stichprobe und garantiert keinen nächsten Verkauf.",
  "howItWorks": "Konversionsrate (%) = Besuche mit Zielhandlung ÷ alle Besuche × 100. Konversionen bedeuten hier erfolgreiche Besuche, nicht alle wiederholten Ereignisse. Bei positiver Konversionszahl gilt Besuche je Konversion = alle Besuche ÷ erfolgreiche Besuche. Mit positivem Budget gilt außerdem Kosten je Konversion = Budget ÷ erfolgreiche Besuche. Bei null Konversionen ist die Rate 0 %; beide Zeilen mit diesem Nenner entfallen. Ein leeres Budget oder 0 lässt die Geldzeile entfallen.",
  "howToUse": [
    "Verwende Besuchssitzungen derselben Stichprobe und Periode; einzelne Nutzer und Seitenaufrufe sind andere Nenner.",
    "Zähle Besuche mit mindestens einer Zielhandlung höchstens einmal je Besuch. Beide Zahlen müssen ganz und zwischen 0 und 9 007 199 254 740 991 sein; die Gesamtzahl muss positiv sein.",
    "Gib weder wiederholte Ereignisse noch bruchteilige Attributionsanteile als erfolgreiche Besuche ein.",
    "Ein freiwilliges Budget muss nichtnegativ sein und zur Stichprobe gehören. Das lokale Währungssymbol ist Darstellung ohne Wechselkurs. Vergleiche bei gleichen Zielen und Verkehrsquellen."
  ],
  "example": "240 erfolgreiche Besuche aus 8 000 ergeben 240 ÷ 8 000 × 100 = 3,00 %. Bei 60 000 Budget sind die Kosten 60 000 ÷ 240 = 250,00; Besuche je Konversion = 8 000 ÷ 240 ≈ 33,333. Null Konversionen aus 5 000 Besuchen ergeben 0,00 %, ohne Kosten und Kehrwert.",
  "faq": [
    {
      "q": "Wie unterscheidet sich diese Konversion von der Klickrate?",
      "a": "Die Klickrate teilt Werbeklicks durch Einblendungen. Hier stehen Websitebesuche im Nenner und Besuche mit Zielhandlung im Zähler. Klicks, Sitzungen, Nutzer und Seitenaufrufe sind nicht austauschbar."
    },
    {
      "q": "Darf ich alle Bestellungen oder mehrere Ziele je Besuch zählen?",
      "a": "Für den Anteil erfolgreicher Besuche werden Ziele zusammengefasst und Besuche nur einmal gezählt. Alle Ereignisse geteilt durch Besuche können mehr als 100 % ergeben, sind aber eine andere Kennzahl außerhalb dieser Form."
    },
    {
      "q": "Warum fehlen Kosten und Kehrwert bei null Konversionen?",
      "a": "Beide Formeln müssten durch null teilen. Eine Rate von null bei positiver Besuchszahl ist korrekt. Budget 0 lässt hier die Geldrechnung entfallen und zeigt keine kostenlose Konversion an."
    },
    {
      "q": "Garantieren 33,333 Besuche einen Verkauf?",
      "a": "Nein. Dies ist der Kehrwert der beobachteten Rate: 100 ÷ 3 ≈ 33,333. Ein Plan damit setzt eine gleichbleibende Wahrscheinlichkeit voraus; der Rechner erstellt weder Prognose noch Konfidenzintervall."
    },
    {
      "q": "Wie vergleiche ich 3 % mit einer früheren Periode?",
      "a": "Halte Zieldefinition, Besuchszählung, Verkehrsmischung und Beobachtungsfenster gleich. Eine sinkende Rate beweist keinen Websitefehler: Bei mehr Besuchen kann die Konversionszahl steigen. Es gilt kein allgemeiner Branchenrichtwert."
    }
  ],
  "disclaimer": "Beobachteter Anteil erfolgreicher Besuche und bedingte Kosten je Besuch. Keine Prognose, Signifikanzprüfung oder Währungsumrechnung."
};
