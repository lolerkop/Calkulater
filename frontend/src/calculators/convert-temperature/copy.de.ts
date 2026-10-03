import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertTemperatureCopyDe: CalculatorCopy = {
  "name": "Temperatur-Umrechner",
  "slug": "temperatur-umrechner",
  "shortDescription": "Zwischen Celsius, Fahrenheit, Kelvin und Rankine umrechnen.",
  "seoTitle": "Temperatur umrechnen — Celsius, Fahrenheit, Kelvin",
  "seoDescription": "Rechne Temperaturen zwischen Celsius, Fahrenheit, Kelvin und Rankine um, mit exakten Fixpunkten der Skalen.",
  "h1": "Temperatur-Umrechner",
  "keywords": [
    "Temperatur umrechnen",
    "Celsius Fahrenheit",
    "Kelvin",
    "Rankine"
  ],
  "longDescription": "Temperaturskalen unterscheiden sich in zwei Dingen: wo ihr Nullpunkt liegt und wie groß ein Grad ist. Celsius und Kelvin teilen die Schrittweite, aber nicht den Nullpunkt; Fahrenheit und Rankine ebenso. Der Rechner rechnet zwischen allen vier Skalen um und behandelt negative Werte korrekt — ein Punkt, an dem eine reine Faktorumrechnung scheitert.",
  "howToUse": [
    "Trage den Temperaturwert ein, auch mit Minuszeichen.",
    "Wähle die Ausgangsskala.",
    "Wähle die Zielskala.",
    "Lies den umgerechneten Wert ab."
  ],
  "howItWorks": "Alle Umrechnungen laufen über Kelvin als gemeinsame Bezugsskala. Von Celsius nach Kelvin werden 273,15 addiert, von Fahrenheit nach Celsius gilt (°F − 32) × 5 ÷ 9, und Rankine ist Kelvin × 9 ÷ 5. Weil jede Skala einen eigenen Nullpunkt hat, ist die Umrechnung eine Verschiebung mit Streckung und keine einfache Multiplikation.",
  "example": "−40 °C entsprechen −40 °F — der einzige Punkt, an dem beide Skalen denselben Zahlenwert zeigen. In Kelvin sind das 233,15 K, in Rankine 419,67 °R.",
  "faq": [
    {
      "q": "Prüft der Rechner die physikalische Zulässigkeit?",
      "a": "Nein. Er rechnet endliche Eingaben algebraisch um, auch negative Kelvinwerte. Gewöhnliche physikalische Temperaturen liegen nicht unter dem absoluten Nullpunkt; die thermodynamische Anwendbarkeit der Eingabe wird hier nicht geprüft."
    },
    {
      "q": "Wo liegt der absolute Nullpunkt in Celsius?",
      "a": "Bei −273,15 °C. Genau diese Zahl ist die Verschiebung zwischen der Celsius- und der Kelvinskala."
    },
    {
      "q": "Warum ist −40 in Celsius und Fahrenheit gleich?",
      "a": "Beide Geraden schneiden sich in genau einem Punkt. Setzt man °C = °F in die Umrechnungsformel ein, ergibt sich −40 als einzige Lösung."
    },
    {
      "q": "Wofür wird Rankine noch verwendet?",
      "a": "Rankine ist eine absolute Skala mit der Schrittweite von Fahrenheit und begegnet vor allem in der US-amerikanischen Thermodynamik und Verfahrenstechnik."
    }
  ],
  "disclaimer": "Das Ergebnis ist eine gerundete Einheitenumrechnung. Prüfe den eingegebenen Wert und die gewählten Einheiten."
};
