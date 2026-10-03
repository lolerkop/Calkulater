import type { CalculatorCopy } from '../../lib/platform/types';

export const newtonForceCopyDe: CalculatorCopy = {
  "name": "Rechner zum zweiten newtonschen Gesetz",
  "slug": "newtonsches-grundgesetz",
  "shortDescription": "Kraft, Masse oder Beschleunigung aus F = m · a.",
  "seoTitle": "Zweites newtonsches Gesetz berechnen — F = ma",
  "seoDescription": "Berechne Kraft, Masse oder Beschleunigung mit dem zweiten newtonschen Gesetz F = m · a in SI-Einheiten.",
  "h1": "Rechner zum zweiten newtonschen Gesetz",
  "keywords": [
    "newtonsches Grundgesetz",
    "Kraft berechnen",
    "F gleich m mal a",
    "Beschleunigung aus Kraft"
  ],
  "longDescription": "Verknüpft den Betrag der resultierenden äußeren Kraft, eine positive konstante Masse und den Beschleunigungsbetrag mit F = ma. Gib die unter Berücksichtigung der Richtungen ermittelte Resultierende ein, nicht die Summe der Beträge entgegengesetzter Kräfte. Richtungen werden hier nicht gelöst. Die zusätzliche Gewichtszeile ist mg bei der konventionellen Normfallbeschleunigung 9,80665 m/s², keine Messung am Ort oder Anzeige einer Waage im beschleunigten Aufzug.",
  "howToUse": [
    "Wähle Kraft, Masse oder Beschleunigung.",
    "Verwende kg, N und m/s²; berücksichtige die Richtungen beim Bilden der resultierenden Kraft.",
    "Bei der Massensuche müssen beide bekannten Beträge positiv sein; F = a = 0 bestimmt keine Masse.",
    "Null Beschleunigung ist bei der Kraftsuche zulässig, null resultierende Kraft bei der Beschleunigung einer positiven Masse."
  ],
  "howItWorks": "Bei konstanter Masse in einem Inertialsystem gelten F = ma, m = F/a und a = F/m. F und a sind hier nichtnegative Beträge zueinander passend gerichteter Vektoren. Das Referenzgewicht W = mgₙ mit gₙ = 9,80665 m/s² ist nicht die Resultierende, wenn andere Kräfte die Schwerkraft ausgleichen.",
  "example": "10 kg und 2 m/s² ergeben 20 N resultierende Kraft sowie 98,0665 N Referenzgewicht. Bei 30 N Zug und 10 N entgegengesetzter Reibung wird 20 N eingegeben, nicht 40 N.",
  "faq": [
    {
      "q": "Wie unterscheidet sich Kraft von Gewicht?",
      "a": "Kraft ist der allgemeine Begriff. F ist hier die Resultierende, das Referenzgewicht mgₙ. Eine Auflage kann das Gewicht ausgleichen, sodass in Ruhe F = 0 gilt."
    },
    {
      "q": "Warum wird null Beschleunigung bei der Massensuche abgewiesen?",
      "a": "Für F = a = 0 passt jede positive Masse. F > 0 und a = 0 widersprechen diesem Modell einer endlichen konstanten Masse; Division durch null bestimmt keine Masse."
    },
    {
      "q": "Darf die Beschleunigung bei der Kraftsuche null sein?",
      "a": "Ja, bei m > 0 folgt F = 0. Dagegen ergibt F = 0 bei a > 0 keine positive Masse im umgekehrten Modus."
    },
    {
      "q": "Ist die Reibung berücksichtigt?",
      "a": "Nicht automatisch. Addiere Reibung, Antrieb und andere äußere Kräfte mit ihren Richtungen vor der Eingabe des resultierenden Betrags."
    },
    {
      "q": "Entspricht die Normfallbeschleunigung meinem Standort?",
      "a": "Nein. 9,80665 m/s² ist ein konventioneller Standard. Örtliche Schwerkraft und die Auflagekraft in einem beschleunigten System können davon abweichen."
    }
  ],
  "disclaimer": "Klassisches Modell konstanter positiver Masse mit resultierenden Beträgen; einzelne Kräfte und Richtungen werden nicht ermittelt."
};
