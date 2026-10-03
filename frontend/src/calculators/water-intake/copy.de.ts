import type { CalculatorCopy } from '../../lib/platform/types';

export const waterIntakeCopyDe: CalculatorCopy = {
  "name": "Rechner für eine Flüssigkeitsschätzung",
  "slug": "wasserbedarf-rechner",
  "shortDescription": "Lehrschätzung für Flüssigkeit aus Gewicht, Aktivität und Hitzeannahmen, kein vorgeschriebener Trinkbedarf.",
  "longDescription": "Zeigt ein Lehrszenario mit drei angenommenen Faktoren: 33 ml/kg Körpergewicht, 350 ml je 30 Aktivitätsminuten und 10% mehr auf die ganze Summe bei Hitze. Eine Primärvalidierung genau dieser Kombination wurde nicht festgestellt; die Ausgabe ist daher eine Modellschätzung und kein Trinkbedarf. Zum Vergleich beschreibt EFSA angemessene Gesamtwasserzufuhr aus Essen und Getränken: 2 L für erwachsene Frauen, 2,5 L für Männer bei mäßiger Temperatur und Aktivität. Diese Bevölkerungswerte sind weder die Rechnerformel noch eine persönliche Verordnung.",
  "seoTitle": "Flüssigkeit schätzen — Gewicht, Aktivität und Hitze",
  "seoDescription": "Lehrschätzung für Flüssigkeit aus Gewicht, Aktivität und Hitzeannahmen, kein vorgeschriebener Trinkbedarf.",
  "h1": "Rechner für eine Flüssigkeitsschätzung",
  "keywords": [
    "Wasserbedarf berechnen",
    "wie viel Wasser trinken",
    "täglicher Flüssigkeitsbedarf",
    "Wasser am Tag",
    "taeglicher Fluessigkeitsbedarf"
  ],
  "howToUse": [
    "Gib Kilogramm und nichtnegative Aktivitätsminuten ein.",
    "Wähle Hitze für den festen Modellfaktor.",
    "Lies Gewicht, Bewegung und Hitzezuschlag getrennt.",
    "Verstehe Liter oder Gläser nicht als Pflichtmenge reinen Wassers; berücksichtige Essen und persönliche Einschränkungen."
  ],
  "howItWorks": "B =0,033 m L; A =0,35 t/30 L; Q =(B+A)×k, k=1 ohne oder 1,1 mit Hitze. Zuschlag =(B+A)×0,1. Gläser =Q/0,25. Die Koeffizienten sind Annahmen; das Modell misst weder Schweißverlust noch Elektrolytersatz.",
  "example": "72 kg, 45 min: B=2,376 L, A=0,525 L, Summe 2,901 L oder 11,604 Glasäquivalente. Hitze: 2,901×1,1=3,191 L (ungerundet 3,1911), Zuschlag 0,2901 L. Null Bewegung lässt nur den Gewichtsanteil.",
  "faq": [
    {
      "q": "Zählen Tee und Kaffee zur gesamten Wasserzufuhr?",
      "a": "Ja, Getränke und Feuchtigkeit aus Essen zählen mit. Das validiert nicht die Faktoren 33/350/1,1 und verordnet keine Menge eines bestimmten Getränks."
    },
    {
      "q": "Warum vervielfacht Hitze die ganze Modellsumme?",
      "a": "Es ist eine angenommene Szenarioregel, keine gemessene physiologische Beziehung. 10% gelten für Gewicht plus Bewegung; wirkliche Verluste hängen von Bedingungen und Person ab."
    },
    {
      "q": "Soll ich mehr als die berechnete Flüssigkeitsmenge trinken?",
      "a": "Der Rechner setzt weder Minimum noch Maximum und empfiehlt kein erzwungenes Trinken. Bei verordneten Flüssigkeitsbeschränkungen gelten persönliche Anweisungen statt dieses Modells."
    },
    {
      "q": "Wie gut sind 33 ml Wasser pro Kilogramm belegt?",
      "a": "Hier sind sie eine Anfangsannahme ohne bestätigte allgemeine Genauigkeit. Bedarf folgt nicht nur aus Gewicht; Alter, Ernährung, Gesundheit und Aktivität spielen ebenfalls eine Rolle."
    },
    {
      "q": "Wie lese ich die angezeigte Anzahl Wassergläser?",
      "a": "Sie rechnet nur Liter in 250-ml-Portionen um. 11,604 Gläser entsprechen rechnerisch 2,901 L, keiner Pflicht zu so viel reinem Wasser zusätzlich zu Essen und Getränken."
    }
  ],
  "disclaimer": "Lehrszenario, kein Trinkbedarf oder Behandlungshinweis. Kindheit, Schwangerschaft, Stillzeit und Flüssigkeitsbeschränkungen benötigen getrennte Beurteilung; das Modell berücksichtigt sie nicht."
};
