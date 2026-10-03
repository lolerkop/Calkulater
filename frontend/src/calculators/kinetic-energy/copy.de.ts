import type { CalculatorCopy } from '../../lib/platform/types';

export const kineticEnergyCopyDe: CalculatorCopy = {
  name: "Rechner für die kinetische Energie",
  slug: "kinetische-energie-rechner",
  shortDescription: "Kinetische Energie, Geschwindigkeit oder Masse aus E = ½mv².",
  seoTitle: "Kinetische Energie berechnen — E = ½mv²",
  seoDescription: "Berechne kinetische Energie, Geschwindigkeit oder Masse aus E = ½mv² in SI-Einheiten.",
  h1: "Rechner für die kinetische Energie",
  keywords: ["kinetische Energie berechnen", "Bewegungsenergie", "E gleich halb m v Quadrat"],
  longDescription: "Berechne die translatorische Bewegungsenergie, die Geschwindigkeit aus der Energie oder die Masse aus Energie und Geschwindigkeit. Vergleiche Geschwindigkeiten im selben Bezugssystem: Die Energie hängt von der Bewegung relativ zum Beobachter ab. ½mv² ist klassisch; Rotation, Verformung beim Aufprall und relativistische Effekte sind ausgeschlossen. Energie allein bestimmt keinen Bremsweg.",
  howToUse: ["Wähle die gesuchte Größe und gib die anderen beiden in kg, m/s und J ein.", "Gib den Geschwindigkeitsbetrag ein. Teile km/h durch 3,6: 36 km/h = 10 m/s.", "Geschwindigkeit null ist für die Energieberechnung gültig; zur Massenberechnung ist die Division durch v² dann nicht definiert."],
  howItWorks: "E = m v²/2; v = √(2E/m); m = 2E/v². Die direkte Rechnung benötigt positive Masse; Geschwindigkeit und Energie sind nichtnegativ. Berechnet wird der Geschwindigkeitsbetrag ohne Richtung. Doppelte Geschwindigkeit bedeutet bei gleicher Masse vierfache Energie.",
  example: "2 kg bei 3 m/s: E = 2 × 3²/2 = 9 J. Bei 6 m/s hat derselbe Körper 36 J. Umgekehrt ergeben E = 100 J und m = 8 kg eine Geschwindigkeit √25 = 5 m/s; E = 50 J und v = 10 m/s ergeben m = 1 kg.",
  faq: [{"q": "Kann die Geschwindigkeit negativ sein?", "a": "Das Feld erwartet den Betrag. Entgegengesetzte Geschwindigkeiten +v und −v haben durch das Quadrat die gleiche Energie."}, {"q": "Ist das die gesamte Energie eines Rades?", "a": "Nein. Zur translatorischen Energie mv²/2 kommt die Rotationsenergie Iω²/2. Das Trägheitsmoment wird hier nicht eingegeben."}, {"q": "Erhalte ich Bremsweg oder Aufprallkraft?", "a": "Nein. Der Bremsweg benötigt Bremskräfte und Bedingungen; eine mittlere Aufprallkraft benötigt Stoppweg oder Stoppzeit und ein Kollisionsmodell."}, {"q": "Wie wird Energie in Kilojoule eingegeben?", "a": "Das Feld verwendet Joule: 1 kJ = 1000 J. Für 1 kJ und 80 kg gib 1000 und 80 ein: v = √(2000/80) = 5 m/s. Eine Eingabe von 1 statt 1000 verändert die Rechnung, nicht nur die Beschriftung."}],
  disclaimer: "Klassische translatorische Bewegungsenergie. Geschwindigkeiten vergleichbar mit der Lichtgeschwindigkeit benötigen relativistische Rechnung.",
};
