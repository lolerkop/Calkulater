import type { CalculatorCopy } from '../../lib/platform/types';

export const leverMomentCopyDe: CalculatorCopy = {
  "name": "Rechner für Hebel und Kraftgewinn",
  "slug": "hebel-rechner",
  "shortDescription": "Gleichgewicht am Hebel: die Kraft am zweiten Arm und der gewonnene Vorteil.",
  "seoTitle": "Hebel berechnen — Kraft am Arm und Kraftgewinn",
  "seoDescription": "Berechne das Gleichgewicht am Hebel: die Kraft am zweiten Arm oder die Armlänge aus F₁·d₁ = F₂·d₂, samt Kraftgewinn.",
  "h1": "Rechner für Hebel und Kraftgewinn",
  "keywords": [
    "Hebel berechnen",
    "Hebelgesetz",
    "Kraftgewinn",
    "Hebelarm"
  ],
  "longDescription": "Löst das Gleichgewicht zweier entgegengesetzter Momente an einem idealen masselosen Hebel. d₁ und d₂ sind positive senkrechte Abstände vom Drehpunkt zu den Wirkungslinien, nicht zwingend Längen entlang der Stange. F₁ ist die Eingangskraft, F₂ die Ausgangskraft; der geometrische Kraftgewinn d₁/d₂ kann größer oder kleiner als eins sein. Die Auflage stellt das Kräftegleichgewicht her, ihre Reaktion wird nicht berechnet.",
  "howToUse": [
    "Wähle F₂ oder d₂; das berechnete Feld muss nicht ausgefüllt werden.",
    "Gib nichtnegative F₁ in N und einen positiven senkrechten Arm d₁ in m ein.",
    "Für F₂ gilt d₂ > 0; für d₂ müssen F₂ > 0 und F₁ > 0 sein.",
    "Die Kräfte müssen entgegengesetzte Momente erzeugen; Hebelgewicht, Lagerreibung und weitere Momente sind ausgeschlossen."
  ],
  "howItWorks": "Bei entgegengesetzten Momenten gilt F₁d₁ = F₂d₂, also F₂ = F₁d₁/d₂ oder d₂ = F₁d₁/F₂. Für Kräfte ungleich null ist der ideale geometrische Kraftgewinn F₂/F₁ = d₁/d₂. Sind beide Kräfte null, bezeichnet die Anzeige nur das Armverhältnis, nicht 0/0.",
  "example": "F₁ = 100 N, d₁ = 2 m und d₂ = 0,5 m ergeben F₂ = 400 N, 200 N·m Moment und Kraftgewinn 4. Umgekehrt ergeben 400 N den Arm 0,5 m. Bei F₁ = 0 und positiven Armen ist F₂ = 0; eine Ausgangskraft ungleich null passt dazu nicht an einem positiven Arm.",
  "faq": [
    {
      "q": "Wie unterscheidet sich Hebelgleichgewicht vom Moment einer Kraft?",
      "a": "Ein Moment verwendet eine Kraft und ihren Arm. Hier werden zwei entgegengesetzte Momentbeträge gleichgesetzt; die Auflage muss zusätzlich das Kräftegleichgewicht sichern."
    },
    {
      "q": "Erzeugt ein Hebel Energie?",
      "a": "Ein idealer verlustfreier Hebel tauscht Kraft gegen Bewegung: größere Ausgangskraft bedeutet kleinere Ausgangsverschiebung. Reibung und Verformung verringern die übertragene Arbeit."
    },
    {
      "q": "Wie werden die Hebelarme gemessen?",
      "a": "Senkrecht vom Drehpunkt zur jeweiligen Wirkungslinie. Ein schräger Kraftvektor hat einen kleineren Arm als die Entfernung zum Angriffspunkt; einen bekannten senkrechten Arm nicht erneut mit Sinus multiplizieren."
    },
    {
      "q": "Was, wenn beide Kräfte auf derselben Seite angreifen?",
      "a": "Sie können sich ausgleichen, wenn ihre Richtungen entgegengesetzte Momente erzeugen, etwa bei einem Hebel zweiter Art. Die Seite allein bestimmt das Momentvorzeichen nicht."
    },
    {
      "q": "Sind Hebelgewicht und Kräfte von null berücksichtigt?",
      "a": "Das Hebelgewicht fehlt; sein Moment und weitere Kräfte benötigen ein vollständiges Gleichgewichtsmodell. F₁ = 0 bei F₂ > 0 ergäbe im Rückwärtsmodus einen Arm von null, außerhalb des Modells positiver Arme."
    }
  ],
  "disclaimer": "Idealer masseloser Hebel mit zwei entgegengesetzten Momenten und positiven Armen; Reibung, Auflagereaktion, Festigkeit und weitere Lasten werden nicht ermittelt."
};
