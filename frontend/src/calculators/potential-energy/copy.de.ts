import type { CalculatorCopy } from '../../lib/platform/types';

export const potentialEnergyCopyDe: CalculatorCopy = {
  name: "Rechner für die potentielle Energie",
  slug: "potentielle-energie-rechner",
  shortDescription: "Potentielle Energie, Höhe oder Masse aus E = mgh.",
  seoTitle: "Potentielle Energie berechnen — E = mgh",
  seoDescription: "Berechne potentielle Energie, Höhe oder Masse aus E = mgh mit dem Normwert g = 9,80665 m/s².",
  h1: "Rechner für die potentielle Energie",
  keywords: ["potentielle Energie berechnen", "Lageenergie", "E gleich mgh", "Höhenenergie"],
  longDescription: "Ermittle die Energieänderung beim Anheben einer Last über einen gewählten Nullpunkt oder berechne Höhe beziehungsweise Masse rückwärts. E = mgh nimmt hier konstante Erdgravitation an; es ist kein Modell für Bahnen, Federn oder elektrische Felder. Vergleiche zwei Positionen über ihren vertikalen Höhenunterschied. Verluste und Wirkungsgrad sind nicht enthalten.",
  howToUse: ["Wähle Energie, Höhe oder Masse; jeder Modus benötigt die beiden anderen Größen.", "Verwende kg, m und J. Beim Anheben zählt die vertikale Höhendifferenz, nicht die Länge der Treppe oder Rampe.", "Die Eingaben für Höhe und Energie sind relativ zum gewählten Nullpunkt nichtnegativ. Zur Massenberechnung muss die Höhe positiv sein."],
  howItWorks: "E = m · 9,80665 · h; h = E/(m · 9,80665); m = E/(9,80665 · h). g ist die Normfallbeschleunigung, kein gemessener lokaler Wert. Das Modell gilt für Höhenänderungen klein gegenüber dem Erdradius; die direkte Energieberechnung braucht eine positive Masse.",
  example: "5 kg × 9,80665 m/s² × 10 m = 490,3325 J, angezeigt als 490,33 J. Umgekehrt ergeben 490,3325 J und 5 kg eine Höhe von 10 m. 98,0665 J bei 2 m entsprechen 5 kg. Für Rückrechnungen die ungerundete Energie verwenden.",
  faq: [{"q": "Muss die Höhe über dem Meer liegen?", "a": "Nur wenn der Meeresspiegel der Nullpunkt ist. Für eine Last vom Boden zum Regal zählt deren Höhendifferenz."}, {"q": "Was bedeutet Energie null?", "a": "Bei positiver Masse auf Höhe null gilt E = 0 relativ zu diesem Bezug. Andere Energieformen des Körpers können vorhanden sein."}, {"q": "Lässt sich die Leistung eines Hubwerks abschätzen?", "a": "E ist die ideale Hubarbeit. Durch die benötigte Zeit geteilt ergibt sie die mittlere Nutzleistung; die Eingangsleistung hängt zusätzlich von nicht berücksichtigten Verlusten ab."}, {"q": "Kann die Normfallbeschleunigung durch einen lokalen Wert ersetzt werden?", "a": "Hier ist g auf 9,80665 m/s² festgelegt. Der lokale Wert hängt von Ort und Höhe ab; die Rechnung ist keine geodätische Messung. Gibt eine Aufgabe ein anderes g vor, verwende E = mgh mit diesem Wert separat."}],
  disclaimer: "E = mgh bei konstanter Normfallbeschleunigung. Negative Bezugshöhen, lokale Gravitation und Wirkungsgrad sind keine Eingaben.",
};
