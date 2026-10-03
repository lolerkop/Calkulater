import type { CalculatorCopy } from '../../lib/platform/types';

export const bikeGearRatioCopyDe: CalculatorCopy = {
  "name": "Rechner für die Fahrradübersetzung",
  "slug": "fahrrad-uebersetzung",
  "shortDescription": "Übersetzung eines Fahrrads und der Weg je Pedalumdrehung.",
  "seoTitle": "Fahrradübersetzung berechnen — Verhältnis und Entfaltung",
  "seoDescription": "Berechne die Übersetzung eines Fahrrads aus den Zähnezahlen und die Entfaltung je Pedalumdrehung.",
  "h1": "Rechner für die Fahrradübersetzung",
  "keywords": [
    "Fahrradübersetzung berechnen",
    "Übersetzung Fahrrad",
    "Entfaltung",
    "Kettenblatt Ritzel",
    "Fahrrad Uebersetzung"
  ],
  "longDescription": "Das Verhältnis der vorderen und hinteren Zähne beschreibt den Kettenantrieb. Bei direktem Antrieb entspricht es Radumdrehungen je Kurbelumdrehung; eine Nabenschaltung benötigt ein zusätzliches internes Verhältnis. Radumfang in Metern liefert die Entfaltung, den Weg je Kurbelumdrehung.",
  "howToUse": [
    "Positive ganze Zähnezahlen eingeben.",
    "Für die Entfaltung gemessenen Abrollumfang in Metern eintragen, etwa 2,10.",
    "Leer oder null zeigt nur das Verhältnis; negative oder nichtnumerische Umfänge werden abgelehnt.",
    "Zusätzliche interne Übersetzungsstufen ausschließen."
  ],
  "howItWorks": "R = vordere Zähne / hintere Zähne; Entfaltung L = R×C mit C in Metern. Bei direktem Antrieb und Trittfrequenz n U/min ist Geschwindigkeit km/h = L×n×0,06; ein Trittfrequenzfeld gibt es hier nicht.",
  "example": "50/25 = 2,00; C=2,10 m ergibt L=4,20 m. Bei 90 U/min: 4,20×90×0,06 = 22,68 km/h ohne Schlupf oder Zusatzübersetzung.",
  "faq": [
    {
      "q": "Was bedeutet das Verhältnis der Fahrradzähne?",
      "a": "R=2 bedeutet zwei Radumdrehungen je Kurbelumdrehung nur bei direktem Antrieb ohne internes Zusatzverhältnis."
    },
    {
      "q": "Warum die Entfaltung einer Übersetzung vergleichen?",
      "a": "Sie berücksichtigt die Radgröße; gleiche Verhältnisse können verschiedene Wege je Kurbelumdrehung ergeben."
    },
    {
      "q": "Wie messe ich den Umfang für die Entfaltung?",
      "a": "Bei Arbeitsdruck und Belastung Reifen markieren und eine Umdrehung abrollen; Millimeter durch 1000 teilen."
    },
    {
      "q": "Warum müssen Zähnezahlen ganzzahlig sein?",
      "a": "Zähne sind zählbare Teile; Bruchteile und nichtnumerische Werte werden abgelehnt."
    },
    {
      "q": "Welche Übersetzung eignet sich für einen Anstieg?",
      "a": "Geringere Entfaltung benötigt mehr Kurbelumdrehungen für denselben Weg; der passende Wert hängt von Steigung, Last und Person ab."
    },
    {
      "q": "Wie wird Trittfrequenz in Geschwindigkeit umgerechnet?",
      "a": "4 m Entfaltung × 90 U/min = 360 m/min = 21,6 km/h. Eine universell nötige Trittfrequenz wird nicht vorgegeben."
    },
    {
      "q": "Bestimmt die Gangzahl einen nützlichen Bereich?",
      "a": "Nein. Kombinationen beschreiben weder Extremverhältnisse noch doppelte Stufen oder Nabengänge; tatsächliche Entfaltungen vergleichen."
    }
  ],
  "disclaimer": "Direkter Kettenantrieb ohne Nabengänge, Getriebe, Schlupf oder Fahrwiderstand. Keine Prüfung der Bauteilkompatibilität."
};
