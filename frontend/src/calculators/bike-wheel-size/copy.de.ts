import type { CalculatorCopy } from '../../lib/platform/types';

export const bikeWheelSizeCopyDe: CalculatorCopy = {
  "name": "Rechner für die Laufradgröße",
  "slug": "laufradgroesse-fahrrad",
  "shortDescription": "Radgeometrie aus ETRTO schätzen oder aus gemessenem Außendurchmesser berechnen.",
  "seoTitle": "Laufradgröße berechnen: Durchmesser und Umfang",
  "seoDescription": "Radgeometrie aus ETRTO schätzen oder aus gemessenem Außendurchmesser berechnen.",
  "h1": "Rechner für die Laufradgröße",
  "keywords": [
    "Radumfang Fahrrad",
    "ETRTO Rechner",
    "Laufradgröße",
    "Radumfang Fahrradcomputer",
    "Laufradgroesse"
  ],
  "longDescription": "ETRTO beschreibt nominelle Reifenbreite und Felgen-Bead-Seat-Durchmesser. Hier wird der Außendurchmesser geschätzt, indem Reifenhöhe gleich Breite gesetzt wird; das ist keine ETRTO-Definition. Im Zollmodus gilt die Eingabe als gemessener Außendurchmesser, nicht automatisch als historischer Größenname wie „26 Zoll“.",
  "howToUse": [
    "Bei 25-622 Breite 25 und Bead-Seat-Durchmesser 622 mm eingeben.",
    "Das ETRTO-Ergebnis als vorläufige Geometrieschätzung behandeln.",
    "Im Zollmodus gemessenen Außendurchmesser statt nur Größenbezeichnung eintragen.",
    "Für den Fahrradcomputer eine belastete Umdrehung bei Arbeitsdruck ausmessen."
  ],
  "howItWorks": "ETRTO-Schätzung: D≈BSD+2W, wobei Breite W die radiale Reifenhöhe ersetzt. Zoll: D=d×25,4 mm. Umfang C=πD, Radius=D/2, Umdrehungen je km=1 000 000/C. Null Breite beschreibt nur einen Felgenkreis, kein fahrbereites Rad.",
  "example": "25-622: D≈622+2×25=672 mm; C≈2111,15 mm=2,11115 m, etwa 473,68 Umdrehungen je km. Geometrieschätzung statt gemessenem Abrollumfang.",
  "faq": [
    {
      "q": "Wie lese ich eine ETRTO-Reifengröße?",
      "a": "25-622 bedeutet nominelle Breite 25 mm und Bead-Seat-Durchmesser 622 mm. Das hilft beim Sitzvergleich, prüft aber nicht jede Felgen-, Reifen- und Rahmenkompatibilität."
    },
    {
      "q": "Warum wird Reifenbreite in der Schätzung verdoppelt?",
      "a": "Radiale Höhe kommt oben und unten hinzu. Hier ersetzt Breite näherungsweise Höhe; reale Form hängt von Reifen und Felge ab."
    },
    {
      "q": "Warum unterscheiden sich Zollnamen von ETRTO?",
      "a": "Historische Zollnamen sind mehrdeutig:28 und 29 können 622 mm Bead Seat nutzen;26 allein bezeichnet keinen eindeutigen Sitzdurchmesser."
    },
    {
      "q": "Eignet sich der geschätzte Umfang für den Fahrradcomputer?",
      "a": "Konstruktion, Felge, Druck und Last verändern den Abrollumfang. Zur Kalibrierung eine belastete Umdrehung messen."
    },
    {
      "q": "Wie übertrage ich den Umfang zum Übersetzungsrechner?",
      "a": "Millimeter durch 1000 teilen:2111,15 mm → 2,11115 m. Gemessenen Abrollumfang bevorzugen."
    }
  ],
  "disclaimer": "Vorläufige Geometrie mit Höhe≈Breite. Kein Nachweis von exaktem Abrollumfang, Reifenpassung, Freiraum oder sicherer Montage."
};
