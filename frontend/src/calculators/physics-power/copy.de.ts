import type { CalculatorCopy } from '../../lib/platform/types';

export const physicsPowerCopyDe: CalculatorCopy = {
  name: "Rechner für die mechanische Leistung",
  slug: "mechanische-leistung",
  shortDescription: "Leistung, Arbeit oder Zeit aus P = W ÷ t.",
  seoTitle: "Mechanische Leistung berechnen — P = W ÷ t",
  seoDescription: "Berechne mechanische Leistung, Arbeit oder Zeit aus P = W ÷ t in SI-Einheiten.",
  h1: "Rechner für die mechanische Leistung",
  keywords: ["mechanische Leistung berechnen", "Arbeit und Zeit", "Leistung Formel", "Watt berechnen"],
  longDescription: "Verknüpfe mechanische Arbeit mit der benötigten Zeit: Berechne mittlere Leistung, Dauer oder Arbeit bei konstanter mittlerer Leistung. Vergleiche damit Hubgeschwindigkeit und Energieübertragung. Ein Watt entspricht einem Joule je Sekunde; Leistung ist kein Energievorrat. Das Ergebnis ist keine elektrische Eingangsleistung eines Motors, da Verluste und Wirkungsgrad fehlen.",
  howToUse: ["Wähle Leistung, Zeit oder Arbeit und gib die beiden bekannten Größen ein.", "Verwende Joule, Sekunden und Watt: Minuten mit 60 und Kilojoule mit 1000 multiplizieren.", "Arbeit und Leistung sind hier nichtnegativ. Für Leistung und Arbeit muss die Dauer positiv sein; Leistung null bestimmt keine Dauer."],
  howItWorks: "Pmittel = W/t; t = W/P; W = Pmittel t. Das ist der Mittelwert über ein Intervall; veränderliche Leistung benötigt Integration über die Zeit. Metrische Pferdestärke: 1 PS = 735,49875 W. Vorzeichenbehaftete Kraftarbeit kann allgemein negativ sein; diese Oberfläche berechnet jedoch nichtnegative übertragene Energie.",
  example: "1000 J in 10 s ergeben P = 100 W = 0,136 PS. Dieselbe Arbeit in 20 s ergibt 50 W. Umgekehrt benötigen 600 J bei 50 W 12 s; 75 W übertragen in 4 s eine Arbeit von 300 J.",
  faq: [{"q": "Ist das die momentane Motorleistung?", "a": "Nein. W/t ergibt den Mittelwert über das Zeitintervall. Spitzen- oder Momentanleistung kann davon abweichen."}, {"q": "Kann die Hubarbeit aus mgh verwendet werden?", "a": "Ja, als ideale Nutzarbeit. Geteilt durch die Zeit ergibt sie mittlere Nutzleistung; für die Motor-Eingangsleistung fehlt noch der Wirkungsgrad."}, {"q": "Warum bestimmt Leistung null keine Zeit?", "a": "Arbeit größer null wird bei Leistung null in keiner endlichen Zeit erbracht. Bei Arbeit und Leistung null ist die Dauer ebenfalls unbestimmt: 0/0 liefert keine Antwort."}, {"q": "Ist die metrische Pferdestärke mit mechanischer hp identisch?", "a": "Nein. Hier gilt die metrische PS mit 735,49875 W. Mechanische hp entsprechen etwa 745,6999 W. 100 W sind deshalb rund 0,136 PS. Prüfe vor dem Vergleich von Gerätedaten die verwendete Einheit."}],
  disclaimer: "Mittlere nichtnegative mechanische Leistung. Wirkungsgrad, Lastspitzen und elektrische Versorgungsleistung werden nicht berechnet.",
};
