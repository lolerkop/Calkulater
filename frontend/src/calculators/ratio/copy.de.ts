import type { CalculatorCopy } from '../../lib/platform/types';

export const ratioCopyDe: CalculatorCopy = {
  "name": "Verhältnisrechner",
  "slug": "verhaeltnis-rechner",
  "shortDescription": "Ein Verhältnis kürzen und einen Betrag anteilig aufteilen.",
  "seoTitle": "Verhältnis berechnen: kürzen und einen Betrag aufteilen",
  "seoDescription": "Kürze ein Verhältnis, sieh den Anteil jedes Gliedes in Prozent und teile einen Betrag in der angegebenen Proportion auf.",
  "h1": "Verhältnisrechner",
  "keywords": [
    "Verhältnis kürzen",
    "Betrag aufteilen",
    "Anteil berechnen",
    "Verhaeltnis berechnen"
  ],
  "longDescription": "Kürzt ein Verhältnis positiver Glieder und verteilt optional einen Betrag proportional zu ihren Gewichten. Zulässig sind 2 bis 1000 Glieder in höchstens 20000 Zeichen. Ganze Glieder bis 9007199254740991 werden mit ihrem exakten ggT gekürzt. Gebrochene Glieder bleiben hier ungekürzt, obwohl sich ein Dezimalverhältnis mathematisch auf ganze Zahlen skalieren lässt. Summen ganzer Glieder behalten alle Ziffern; gebrochene Gewichte und Aufteilungen nutzen endliche binäre Genauigkeit. Ein leerer Betrag oder null schaltet die Aufteilung aus.",
  "howItWorks": "Ganze Glieder werden durch ihren größten gemeinsamen Teiler geteilt — das ist das Kürzen. Der Anteil eines Gliedes = Glied ÷ Summe der Glieder. Ist ein Betrag angegeben, erhält ein Glied Betrag × Glied ÷ Summe der Glieder.",
  "example": "Das Verhältnis 2:3:5 auf 6000 angewendet ergibt 1200, 1800 und 3000, und der Anteil des ersten Gliedes beträgt 20 %.",
  "howToUse": [
    "Trage 2 bis 1000 positive Glieder ein, getrennt durch Leerzeichen, Doppelpunkte oder Semikolons. Verwende keine Leerzeichen zur Zifferngruppierung innerhalb einer Zahl.",
    "Lass den Betrag auf null, um nur das Verhältnis zu kürzen.",
    "Trage einen Betrag ein, um ihn in dieser Proportion aufzuteilen."
  ],
  "faq": [
    {
      "q": "Wie unterscheidet sich das von einer Verhältnisgleichung?",
      "a": "Eine Verhältnisgleichung löst a/b = c/d nach dem fehlenden Glied. Hier geht es um eine andere Aufgabe: ein Verhältnis zu kürzen und einen Betrag darüber aufzuteilen, ohne dass etwas unbekannt wäre."
    },
    {
      "q": "Warum werden gebrochene Glieder nicht gekürzt?",
      "a": "Das ist eine Entscheidung dieser Umsetzung, keine mathematische Unmöglichkeit. Multipliziert man 1,5:2,5 mit 2, erhält man gekürzt 3:5. Diese Seite kürzt mit dem ggT nur ganze Glieder exakt und verwendet gebrochene Gewichte unverändert zur Anteilsberechnung."
    },
    {
      "q": "Wie viele Glieder darf ich eintragen?",
      "a": "2 bis 1000 positive endliche Glieder in höchstens 20000 Zeichen. Trenne sie mit Leerzeichen, Doppelpunkten oder Semikolons. Ein Komma ohne folgendes Leerzeichen ist ein Dezimalkomma; mit folgendem Leerzeichen trennt es Glieder."
    },
    {
      "q": "Warum wird die Summe aus den eingetragenen Werten genommen?",
      "a": "Damit die Prozentwerte zu dem passen, was du eingetippt hast. Für 12:18 ist die Summe der Glieder 30 und nicht 5, obwohl die gekürzte Form 2:3 lautet."
    },
    {
      "q": "Wie teile ich einen Betrag ungleich auf?",
      "a": "Gib die Glieder in der gewünschten Proportion an: 50:30:20 teilt einen Betrag in diesem Verhältnis, während 1:1:1 ihn zu gleichen Teilen dreiteilt."
    }
  ],
  "disclaimer": "Der aufzuteilende Betrag muss endlich und nicht negativ sein; negative oder ungültige Eingaben führen zu einer Fehlermeldung. Gerundete Prozentwerte müssen nicht genau 100 % ergeben. Die Aufteilung gleicht Centbeträge nicht aus; Geldzahlungen benötigen eine eigene Rundungsregel. Das Runden eines von null verschiedenen Anteils oder Betrags auf null wird abgelehnt."
};
