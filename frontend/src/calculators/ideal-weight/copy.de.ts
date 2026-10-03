import type { CalculatorCopy } from '../../lib/platform/types';

export const idealWeightCopyDe: CalculatorCopy = {
  "name": "Rechner für das Idealgewicht",
  "slug": "idealgewicht-rechner",
  "shortDescription": "Vergleich von Devine, Robinson, Miller und Hamwi mit Erwachsenen-BMI-Grenzen, ohne Gewichtsziel.",
  "longDescription": "Vergleicht vier historische Formeln für Referenzgewicht: Devine (1974), Robinson und Miller (1983), Hamwi (1964). Sie verwenden Körpergröße und veröffentlichte geschlechtsspezifische Konstanten, aber weder Körperzusammensetzung noch Erkrankungen oder persönliche Ziele. Das Mittel ist eine Vergleichsgröße, die Streuung kein Konfidenzintervall. Separate Gewichtsgrenzen bei BMI 18,5 und 25 beschreiben eine Screeningkategorie für Erwachsene ab 20 Jahren. Weder Intervall noch Einzelwert bestätigen Gesundheit oder geben ein Wunschgewicht vor.",
  "seoTitle": "Gewichtsschätzung — Devine, Robinson, Miller und Hamwi",
  "seoDescription": "Vergleich von Devine, Robinson, Miller und Hamwi mit Erwachsenen-BMI-Grenzen, ohne Gewichtsziel.",
  "h1": "Rechner für das Idealgewicht",
  "keywords": [
    "Idealgewicht berechnen",
    "Formel von Devine",
    "Normalgewicht",
    "gesundes Gewicht für Größe",
    "gesundes Gewicht fuer Groesse"
  ],
  "howToUse": [
    "Wähle den veröffentlichten Satz geschlechtsspezifischer Konstanten.",
    "Gib 152,4–230 cm an; hier werden die Formeln ab fünf Fuß verwendet.",
    "Vergleiche Methoden, ohne das Mittel zum Abnehmziel zu machen.",
    "Die obere BMI-Grenze ist ausgeschlossen: das Gewicht muss darunter liegen."
  ],
  "howItWorks": "x = Größe/2,54 −60 Zoll. Männer: Devine 50+2,3 x; Robinson 52+1,9 x; Miller 56,2+1,41 x kg; Hamwi(106+6 x) lb. Frauen: 45,5+2,3 x; 49+1,7 x; 53,1+1,36 x kg; (100+5 x) lb. 1 lb =0,45359237 kg. Mittel = Summe/4. Mit h in Metern: 18,5 h² ≤ Gewicht <25 h².",
  "example": "Mann, 180 cm: Devine 74,992 kg, Miller 71,521 kg, Hamwi 77,654 kg; Mittel 74,203 kg. BMI-Grenzen: 59,94 kg eingeschlossen, 81 kg ausgeschlossen. Unter 152,4 cm erscheint eine Anwendungsgrenze statt eines konstanten Gewichts.",
  "faq": [
    {
      "q": "Welches Referenzgewicht soll mein Ziel sein?",
      "a": "Keines automatisch. Der Mittelwert historischer Schätzungen schafft keine persönliche Empfehlung. Der Rechner vergleicht Methoden und berechnet weder Behandlungsziele noch Medikamentendosen."
    },
    {
      "q": "Warum unterscheiden sich BMI-Grenzen und Gewichtsformeln?",
      "a": "BMI ergibt ein Intervall aus dem Quadrat der Größe, die Formeln einzelne lineare Punkte. Bei 180 cm entspricht 81 kg einem BMI 25 und liegt außerhalb des genannten Intervalls."
    },
    {
      "q": "Berücksichtigen die Gewichtsformeln Muskelmasse?",
      "a": "Nein. Größe und Konstanten messen keine Körperzusammensetzung. Viel Muskelmasse kann Unterschiede erklären, bestätigt aber für sich keine Gesundheit."
    },
    {
      "q": "Warum gibt es zwei Geschlechtssätze bei den Referenzformeln?",
      "a": "So wurden ihre Konstanten veröffentlicht. Die Auswahl bestimmt Koeffizienten, nicht Identität oder Physiologie einer Person; ein dritter validierter Satz liegt hier nicht vor."
    },
    {
      "q": "Wie unterscheidet sich dieser Vergleich vom normalen BMI?",
      "a": "Ein normaler BMI verwendet tatsächliches Gewicht. Hier wird Gewicht aus der Größe abgeleitet. Kinder, Schwangerschaft und Behandlung benötigen andere Beurteilungen; gleiche Größe bedeutet nicht gleiche Bedürfnisse."
    }
  ],
  "disclaimer": "Vergleich von Referenzformeln, kein persönliches Ziel, keine Diagnose oder Dosierung. BMI-Grenzen für Erwachsene ab 20 Jahren, nicht für Kinder oder Schwangerschaft."
};
