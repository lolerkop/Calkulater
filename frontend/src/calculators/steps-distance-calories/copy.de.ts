import type { CalculatorCopy } from '../../lib/platform/types';

export const stepsDistanceCaloriesCopyDe: CalculatorCopy = {
  "name": "Rechner für Schritte in Strecke und Kalorien",
  "slug": "schritte-in-kilometer",
  "shortDescription": "Strecke aus Schritten und gemessener Länge oder Größe; Energie mit offenem änderbarem Faktor.",
  "longDescription": "Rechnet gezählte Schritte über die Länge eines einzelnen Schritts in Strecke um. Ohne Messung gilt die angenommene Näherung 0,415×Größe, keine universell validierte Beziehung. Der Modus mit gemessener Länge erlaubt eine persönliche Streckenkalibrierung. Energie folgt getrennt aus einem änderbaren Koeffizienten in kcal/kg/km, anfangs 0,53. Dessen Definition bestimmt Gesamt oder zusätzlichen Verbrauch; ohne Zeit und Herkunft des Faktors kann der Rechner Ruheenergie nicht abziehen.",
  "seoTitle": "Schritte in Strecke und Kalorien — Schrittlänge und Gewicht",
  "seoDescription": "Strecke aus Schritten und gemessener Länge oder Größe; Energie mit offenem änderbarem Faktor.",
  "h1": "Rechner für Schritte in Strecke und Kalorien",
  "keywords": [
    "Schritte in km",
    "Schritte in Kalorien",
    "Schrittzähler Strecke",
    "Schrittlänge berechnen",
    "Schrittlaenge berechnen"
  ],
  "howToUse": [
    "Gib eine ganze Schrittzahl ein; null ergibt null Strecke und Energie.",
    "Miss beispielsweise 20 Schritte und teile die Zentimeter durch 20.",
    "Gib einen einzelnen Schritt an, keinen vollständigen Gangzyklus aus zwei Schritten.",
    "Verwende Gewicht und einen klar definierten Energiefaktor; 0,53 ist eine Anfangsannahme."
  ],
  "howItWorks": "Größenmodus: L =0,415 H; Messmodus: L vorgegeben, Längen in cm. D =N×L/100000 km. E =c×m×D kcal; c in kcal/kg/km, m in kg. Schritte je Kilometer =100000/L. Zähler, Länge und Faktor liefern getrennte Unsicherheiten.",
  "example": "20 Schritte über 14 m ergeben 70 cm/Schritt. 10000 Schritte sind 7 km; 70 kg und c=0,53 ergeben 0,53×70×7=259,7 kcal vor der Rundung, also 260 kcal im Ergebnis. 175 cm Größe liefern 72,625 cm, 7,263 km und 269 kcal.",
  "faq": [
    {
      "q": "Wie verlässlich ist die Schätzung 0,415×Größe?",
      "a": "Sie ist eine angenommene Anfangsnäherung ohne allgemeine Fehlerquote. Tempo, Schuhe, Beinlänge und Bewegungssituation verändern die Schrittlänge. Eine vergleichbare persönliche Messung ist meist hilfreicher."
    },
    {
      "q": "Wie messe ich einen Schritt für den Schrittzähler?",
      "a": "Gehe eine bekannte Strecke im üblichen Tempo und teile durch einzelne gezählte Schritte. 14 m mit 20 Schritten ergeben 70 cm. Ein Gangzyklus vom selben Fuß zum selben Fuß enthält zwei Schritte."
    },
    {
      "q": "Warum ist der Energiekoeffizient für Schritte änderbar?",
      "a": "Tempo, Steigung und Last beeinflussen die Energie. 0,53 ist hier eine Annahme, keine erwiesene Norm für jedes Gehen. Verwende einen Faktor mit klaren Einheiten und Bedingungen."
    },
    {
      "q": "Enthalten Schrittkalorien den Ruheverbrauch?",
      "a": "Das hängt vom eingegebenen Faktor ab. Ein Gesamtfaktor ergibt Gesamtenergie, ein zusätzlicher Faktor zusätzliche Energie. Ohne Zeit prüft der Rechner dies nicht und misst kein Ernährungsdefizit."
    },
    {
      "q": "Wie unterscheidet sich die Schrittberechnung von MET?",
      "a": "Hier beginnt die Rechnung mit der Strecke aus Schritten. MET nutzt Tätigkeit und Dauer. Modelle müssen nicht übereinstimmen; behalte Annahmen beim Vergleich von Spaziergängen bei."
    }
  ],
  "disclaimer": "Strecken und Energieschätzung unter vorgegebenen Annahmen, keine persönliche Stoffwechselmessung. Der Größenansatz ist eine Erwachsenennäherung und berücksichtigt keine Kinder oder Bewegungseinschränkungen."
};
