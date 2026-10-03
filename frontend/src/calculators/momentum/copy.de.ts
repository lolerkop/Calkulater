import type { CalculatorCopy } from '../../lib/platform/types';

export const momentumCopyDe: CalculatorCopy = {
  "name": "Impulsrechner",
  "slug": "impuls-rechner",
  "shortDescription": "Impuls, Masse oder Geschwindigkeit aus p = m · v.",
  "seoTitle": "Impuls berechnen — p = m · v",
  "seoDescription": "Berechne den Impuls eines Körpers, seine Masse oder seine Geschwindigkeit aus p = m · v in SI-Einheiten.",
  "h1": "Impulsrechner",
  "keywords": [
    "Impuls berechnen",
    "Bewegungsgröße",
    "Impulserhaltung",
    "Impuls Formel"
  ],
  "longDescription": "Berechnet die Impulskomponente eines Körpers auf einer gewählten Achse und löst p = mv nach Geschwindigkeit oder Masse. Geschwindigkeit und Impuls dürfen negativ sein: Das Vorzeichen beschreibt die Richtung und wird durch eine positive Masse erhalten. Die zusätzliche kinetische Energie bleibt nichtnegativ. Es ist ein klassisches Modell eines Körpers, keine vollständige mehrdimensionale Stoß- oder relativistische Rechnung.",
  "howToUse": [
    "Wähle Impuls, Geschwindigkeit oder Masse.",
    "Gib eine positive Masse in kg sowie Geschwindigkeit in m/s und Impuls in kg·m/s mit Vorzeichen auf derselben Achse ein.",
    "Für die Masse müssen Geschwindigkeit und Impuls ungleich null sein und dasselbe Vorzeichen haben.",
    "Null Geschwindigkeit ergibt null Impuls; p = v = 0 bestimmt keine Masse."
  ],
  "howItWorks": "p = mv, v = p/m und m = p/v. Bei m > 0 haben p und v gleiche Vorzeichen. Eₖ = mv²/2 = pv/2 ≥ 0. Bei fester Masse verdoppelt eine Verdopplung des Geschwindigkeitsbetrags den Impulsbetrag und vervierfacht die kinetische Energie.",
  "example": "3 kg bei +4 m/s ergeben p = +12 kg·m/s und Eₖ = 24 J; bei −4 m/s ist p = −12 kg·m/s und die Energie weiterhin 24 J. Aus p = −18 kg·m/s und v = −9 m/s folgt m = 2 kg.",
  "faq": [
    {
      "q": "Wie unterscheidet sich der Impuls von der kinetischen Energie?",
      "a": "Impuls ist ein Vektor proportional zur Geschwindigkeit, Energie ein Skalar proportional zum Geschwindigkeitsquadrat. Entgegengesetzte Impulse können sich aufheben, kinetische Energien addieren sich."
    },
    {
      "q": "Warum zählt der Impuls bei Stößen?",
      "a": "Der Gesamtimpuls einer gewählten abgeschlossenen Systemgrenze bleibt ohne äußeren Kraftstoß erhalten. Einzelne Körper ändern ihren Impuls; bei einem unelastischen Stoß kann kinetische Energie in Wärme und Verformung übergehen."
    },
    {
      "q": "Was bedeutet die Geschwindigkeit null?",
      "a": "Bei positiver Masse folgen p = 0 und Eₖ = 0 im gewählten Bezugssystem. Im umgekehrten Modus passt p = v = 0 zu jeder positiven Masse."
    },
    {
      "q": "Wird die Impulsrichtung berücksichtigt?",
      "a": "Ja, auf einer Achse mit gemeinsam festgelegter positiver Richtung. Für zwei oder drei Dimensionen sind weitere Komponenten erforderlich."
    },
    {
      "q": "Bestimmt der Impuls die Bremskraft?",
      "a": "Die Impulsänderung entspricht dem Zeitintegral der äußeren resultierenden Kraft. Ohne Zeit, Kraftmodell und weitere Bedingungen ergibt sich daraus weder Bremskraft noch Bremsweg."
    }
  ],
  "disclaimer": "Komponenten auf einer Achse bei konstanter positiver Masse und klassischen Geschwindigkeiten; Impulserhaltung verlangt keinen äußeren Kraftstoß. Die Bewegung wird entlang einer Achse betrachtet. Wird nur eine Komponente einer dreidimensionalen Geschwindigkeit eingegeben, ist die Energiezeile nicht die gesamte kinetische Energie des Körpers."
};
