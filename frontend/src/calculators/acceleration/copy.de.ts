import type { CalculatorCopy } from '../../lib/platform/types';

export const accelerationCopyDe: CalculatorCopy = {
  "name": "Beschleunigungsrechner",
  "slug": "beschleunigung-rechner",
  "shortDescription": "Beschleunigung aus einer Geschwindigkeitsänderung über die Zeit oder die Endgeschwindigkeit aus der Beschleunigung.",
  "seoTitle": "Beschleunigung berechnen — Geschwindigkeit, Zeit und Weg",
  "seoDescription": "Berechne die Beschleunigung aus Anfangsgeschwindigkeit, Endgeschwindigkeit und Zeit oder die Endgeschwindigkeit aus der Beschleunigung, samt Weg und Geschwindigkeitsänderung.",
  "h1": "Beschleunigungsrechner",
  "keywords": [
    "Beschleunigung berechnen",
    "Endgeschwindigkeit",
    "gleichmäßige Beschleunigung",
    "Beschleunigung Formel"
  ],
  "longDescription": "Bestimmt die mittlere Beschleunigung aus der Geschwindigkeitsänderung oder die Endgeschwindigkeit bei konstanter Beschleunigung auf einer Geraden. Geschwindigkeiten sind vorzeichenbehaftete Komponenten auf derselben Achse. Verschiebung und zurückgelegter Weg werden getrennt angezeigt: Nach einer Umkehr kann die Verschiebung null sein, obwohl ein Weg zurückgelegt wurde.",
  "howToUse": [
    "Wähle Beschleunigung oder Endgeschwindigkeit und gib eine positive Zeit in Sekunden ein.",
    "Verwende Geschwindigkeiten in m/s auf einer festen Achse; teile km/h vorher durch 3,6.",
    "Für die Endgeschwindigkeit ist die Beschleunigung mit Vorzeichen einzutragen.",
    "Weg und Verschiebung setzen über das ganze Zeitintervall konstante Beschleunigung voraus."
  ],
  "howItWorks": "a = (v − v₀)/t. Bei konstantem a gelten v = v₀ + at und Δx = (v₀ + v)t/2. Der Weg ist L = ∫|v₀ + aτ|dτ. Ohne Richtungswechsel ist L = |Δx|; bei entgegengesetzten Vorzeichen gilt L = t(v₀² + v²)/(2(|v₀| + |v|)). Der Stillstand und die Umkehr innerhalb des Intervalls sind dabei enthalten.",
  "example": "Von 0 auf 27,8 m/s in 8,4 s: a = 3,3095… → 3,31 m/s², Weg und Verschiebung 116,76 m. Von +10 auf −10 m/s in 4 s: a = −5 m/s², Verschiebung 0 m und Weg 20 m.",
  "faq": [
    {
      "q": "Darf die Beschleunigung negativ sein?",
      "a": "Ja, das Vorzeichen bezeichnet die Achsenrichtung. Bei v < 0 und a < 0 nimmt der Geschwindigkeitsbetrag zu. Abbremsen erfordert entgegengesetzte Richtungen von Geschwindigkeit und Beschleunigung."
    },
    {
      "q": "Wie rechne ich km/h in m/s um?",
      "a": "Teile durch 3,6: 100 km/h = 27,777… m/s. Die im Beispiel verwendeten 27,8 m/s sind gerundet."
    },
    {
      "q": "Warum unterscheiden sich Weg und Verschiebung bei einer Umkehr?",
      "a": "Die Verschiebung addiert gerichtete Abschnitte mit Vorzeichen. Der Weg addiert ihre Längen; von +10 auf −10 m/s in 4 s sind es zweimal 10 m."
    },
    {
      "q": "Gilt das bei veränderlicher Beschleunigung?",
      "a": "(v − v₀)/t liefert weiterhin den Mittelwert. Endgeschwindigkeit, Weg und Verschiebung hier setzen einen linearen Geschwindigkeitsverlauf voraus; beliebige Bewegung lässt sich aus zwei Endwerten nicht bestimmen."
    },
    {
      "q": "Wie gebe ich einen Start aus dem Stand ein, und wird Luftwiderstand berechnet?",
      "a": "Setze die Anfangsgeschwindigkeit auf 0. Kräfte und Luftwiderstand werden nicht modelliert; einzugeben sind gemessene Endwerte oder eine angenommene konstante Beschleunigung."
    }
  ],
  "disclaimer": "Geradliniges Modell mit konstanter Beschleunigung; bei beliebigem Verlauf ist der tatsächliche Weg aus Endgeschwindigkeiten nicht bekannt."
};
