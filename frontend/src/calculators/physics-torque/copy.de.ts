import type { CalculatorCopy } from '../../lib/platform/types';

export const physicsTorqueCopyDe: CalculatorCopy = {
  "name": "Drehmomentrechner",
  "slug": "drehmoment-berechnen",
  "shortDescription": "Drehmomentbetrag aus Kraft, Abstand zum Angriffspunkt und Winkel.",
  "seoTitle": "Drehmoment berechnen — τ = F·r·sin θ",
  "seoDescription": "Berechne τ = Fr sin θ und den wirksamen Hebelarm; r reicht zum Angriffspunkt, der Winkel liegt zwischen r und Kraft.",
  "h1": "Drehmomentrechner",
  "keywords": [
    "Drehmoment berechnen",
    "Hebelarm",
    "Moment einer Kraft",
    "Drehmoment Formel"
  ],
  "longDescription": "Bestimmt den Betrag des Drehmoments einer Kraft um einen gewählten Bezugspunkt: τ = Fr sin θ. r reicht zum Angriffspunkt der Kraft, der wirksame Hebelarm d ist dagegen der senkrechte Abstand zur Wirkungslinie. Nur bei 90° sind beide gleich. Diese drei Angaben bestimmen nicht den Drehsinn; für ein Gesamtmoment sind die einzelnen Vorzeichen nötig.",
  "howToUse": [
    "Gib einen nichtnegativen Kraftbetrag in N ein.",
    "Gib r in Metern bis zum Angriffspunkt ein, nicht einen schon bekannten senkrechten Hebelarm.",
    "Verwende 0–180° zwischen dem Vektor r und der Kraft.",
    "Lies das Drehmoment in N·m und d = r sin θ in m ab; ist d bereits bekannt, setze r = d und 90°."
  ],
  "howItWorks": "Der Betrag von r × F ist Fr sin θ. Mit dem wirksamen Hebelarm d = r sin θ gilt τ = Fd. Bei festem F und r liegt das Maximum bei 90°. Genau 0° und 180° ergeben null Hebelarm und Moment; benachbarte Winkel behalten kleine Werte ungleich null.",
  "example": "50 N, r = 0,3 m und 90° ergeben d = 0,3 m und τ = 15 N·m. Bei 30° sind es d = 0,15 m und τ = 7,5 N·m. Bei 180° ist das Moment 0, nicht −15 N·m: angezeigt wird der Betrag.",
  "faq": [
    {
      "q": "Wie unterscheidet sich das vom Drehmomentumrechner?",
      "a": "Der Umrechner ändert die Einheit eines bekannten Moments. Hier wird es aus Kraft und Geometrie berechnet. N·m kennzeichnet ein Moment und bedeutet nicht automatisch verrichtete Arbeit in J."
    },
    {
      "q": "Warum ist das Moment sowohl bei 0° als auch bei 180° null?",
      "a": "Die Wirkungslinie läuft durch den Bezugspunkt, der senkrechte Hebelarm ist null. Exakte Grenzwinkel behalten keinen numerischen Sinusrest."
    },
    {
      "q": "Wie unterscheidet sich der wirksame Hebelarm von r?",
      "a": "d ist der kürzeste Abstand zur Wirkungslinie, r die Entfernung zum Angriffspunkt. Bei 30° ist d = r sin θ halb so groß wie r."
    },
    {
      "q": "Bei welchem Winkel ist der Momentbetrag am größten?",
      "a": "Bei 90°, sofern Kraft und r fest bleiben. Mehr Kraft oder Entfernung vergrößert das Moment, die Werkzeugfestigkeit wird aber nicht geprüft."
    },
    {
      "q": "Bestimmt das Ergebnis den Drehsinn?",
      "a": "Nein. Der Betrag beschreibt nicht die räumliche Richtung von r × F. Zum Addieren von Momenten müssen zunächst gemeinsame Vorzeichen festgelegt werden."
    }
  ],
  "disclaimer": "Betrag des Moments einer Kraft um einen gewählten Punkt; Drehsinn, Gesamtmoment und Bauteilfestigkeit werden nicht bestimmt."
};
