import type { CalculatorCopy } from '../../lib/platform/types';

export const workCopyDe: CalculatorCopy = {
  "name": "Rechner für die Arbeit",
  "slug": "arbeit-berechnen",
  "shortDescription": "Arbeit einer Kraft über einen Weg, samt dem Winkel zwischen beiden.",
  "seoTitle": "Arbeit berechnen — W = F · s · cos θ",
  "seoDescription": "Berechne die mechanische Arbeit einer Kraft über einen Weg, samt dem Winkel zwischen ihnen.",
  "h1": "Rechner für die Arbeit",
  "keywords": [
    "Arbeit berechnen",
    "mechanische Arbeit",
    "Kraft mal Weg",
    "Arbeit Formel"
  ],
  "longDescription": "Berechnet die Arbeit einer einzelnen konstanten Kraft aus ihrem Betrag, dem Verschiebungsbetrag und dem Winkel zwischen den Vektoren oder löst nach dem Verschiebungsbetrag. Arbeit darf auch im umgekehrten Modus negativ sein. Verschiebung verbindet Anfangs- und Endpunkt und ist nicht die Länge eines gewundenen Weges. Eine veränderliche Kraft verlangt eine Summe kleiner Arbeiten oder ein Integral, das diese Form nicht berechnet.",
  "howToUse": [
    "Wähle Arbeit oder Verschiebungsbetrag.",
    "Kraft in N und Verschiebungsbetrag in m sind nichtnegativ; bekannte Arbeit in J darf negativ sein.",
    "Verwende 0–180 Grad zwischen Kraft und Verschiebungsvektor.",
    "Im umgekehrten Modus sind positive Kraft, ein Winkel ungleich 90° und ein zum Kosinus passendes Vorzeichen der Arbeit nötig."
  ],
  "howItWorks": "W = F s cos θ bei einer in Betrag und Richtung konstanten Kraft. F ≥ 0, s ≥ 0; der Winkel steht in Grad. Bei F und s ungleich null ist die Arbeit unter 90° positiv, bei 90° null und darüber negativ. s = W/(F cos θ) verlangt einen Nenner ungleich null und ein nichtnegatives Ergebnis.",
  "example": "10 N und 5 m ergeben bei 0° 50 J, bei 60° 25 J und bei 180° −50 J. Umgekehrt liefern −50 J, 10 N und 180° den Betrag 5 m. Bei 90° ist die Arbeit für jede Verschiebung null.",
  "faq": [
    {
      "q": "Warum ist die Arbeit bei 90° null?",
      "a": "Kraft und Verschiebung stehen senkrecht, ihr Skalarprodukt ist null. Nur genau 90° wird auf null gesetzt; ein naher Winkel behält seine kleine Arbeit samt Vorzeichen."
    },
    {
      "q": "Trage ich den Winkel für Arbeit in Grad ein?",
      "a": "Ja, von 0 bis 180 Grad. Die Umrechnung ins Bogenmaß geschieht intern."
    },
    {
      "q": "Was bedeuten 180° und negative Arbeit?",
      "a": "Die Kraft wirkt der Verschiebung entgegen: W = −Fs. Das ist die Arbeit dieser Kraft; die Änderung der kinetischen Energie hängt von der Arbeit aller Kräfte ab."
    },
    {
      "q": "Warum lässt sich der Verschiebungsbetrag bei 90° nicht finden?",
      "a": "Bei W = 0 passt jeder Betrag, bei W ≠ 0 sind die Angaben widersprüchlich. Auch eine Kraft von null bestimmt keine Verschiebung."
    },
    {
      "q": "Verrichtet eine Kraft an einer ruhenden Last Arbeit?",
      "a": "Ohne Verschiebung ist ihre mechanische Arbeit an der Last null. Menschlicher Energieverbrauch kann trotzdem auftreten; eine Leistung wird hier nicht berechnet."
    }
  ],
  "disclaimer": "Arbeit einer einzelnen konstanten Kraft; Verschiebung ist nicht Weglänge, Gesamtarbeit und physiologischer Energieverbrauch werden nicht bestimmt."
};
