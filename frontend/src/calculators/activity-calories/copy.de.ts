import type { CalculatorCopy } from '../../lib/platform/types';

export const activityCaloriesCopyDe: CalculatorCopy = {
  "name": "Kalorienrechner für Sport",
  "slug": "kalorienverbrauch-sport",
  "shortDescription": "Gesamtenergie einer Einheit nach MET, mit 1-MET-Bezug und Differenz für dieselbe Zeit.",
  "longDescription": "Schätzt die gesamte Energie einer Einheit einschließlich des Ruheverbrauchs während derselben Minuten. Die Vorgaben beschreiben konkrete Tätigkeiten des 2024 Adult Compendium für 19–59 Jahre: Gehen zum Vergnügen, allgemeines Radfahren, Kraulen in mittlerem Tempo und Laufen mit etwa 9,7–10,1 km/h. Es sind Gruppenwerte, keine Messung deines Stoffwechsels. Zusätzliche Zeilen zeigen den Standardverbrauch bei 1 MET und die Differenz dazu, damit Ruheverbrauch in einer Tagesrechnung nicht doppelt gezählt wird.",
  "seoTitle": "Kalorienrechner für Sport — MET, Gewicht und Dauer",
  "seoDescription": "Gesamtenergie einer Einheit nach MET, mit 1-MET-Bezug und Differenz für dieselbe Zeit.",
  "h1": "Kalorienrechner für Sport",
  "keywords": [
    "Kalorienverbrauch Sport",
    "Kalorien beim Laufen",
    "Kalorien beim Radfahren",
    "MET Kalorienrechner"
  ],
  "howToUse": [
    "Wähle die passende Beschreibung; für andere Belastung gib MET selbst ein.",
    "Trage Kilogramm und Minuten dieser Intensität ein.",
    "Berechne Abschnitte unterschiedlicher Intensität einzeln und addiere die Energie.",
    "Vergleiche die Summe mit 1 MET über dasselbe Intervall."
  ],
  "howItWorks": "E = MET ×3,5×m/200×t; m in kg, t in Minuten, E in kcal. Standard 1 MET =3,5 ml Sauerstoff/kg/min; die Umrechnung setzt etwa 5 kcal je Liter Sauerstoff an. E₁ =3,5 mt/200; Differenz =E−E₁. Vorgabecodes: 17160 —3,5; 01014 —7; 18290 —8; 12050 —9,3 MET. Gesamtwert und Stundenverbrauch werden auf ganze kcal gerundet, außer kleinen Werten über null. Unter 1 MET ist die Differenz zu 1 MET negativ: sie vergleicht Modelle, bei weiterhin positivem Gesamtverbrauch.",
  "example": "Radfahren: 70 kg, 45 min, 7 MET →386 kcal (ungerundet 385,875). 1 MET über diese Zeit ergibt 55,125 kcal, die Differenz 330,75 kcal. Bei 1 MET, 70 kg und 60 min entstehen 73,5 kcal vor Rundung (angezeigt: 74 kcal), mit Differenz null.",
  "faq": [
    {
      "q": "Was bedeutet MET beim Energieverbrauch?",
      "a": "Es ist das Verhältnis zum Standardruheverbrauch. 7 MET bedeutet dessen siebenfachen Verbrauch über dieselbe Zeit, nicht sieben zusätzliche Ruheverbräuche."
    },
    {
      "q": "Warum ist Gewicht ein Faktor der MET-Rechnung?",
      "a": "Bei gleichen MET und gleicher Zeit multipliziert ein Wechsel von 70 auf 90 kg die Schätzung mit 90/70. Das ist eine Modelleigenschaft, kein Nachweis des gemessenen Verbrauchs zweier Personen."
    },
    {
      "q": "Wie wähle ich MET für ein anderes Tempo?",
      "a": "Vergleiche Geschwindigkeit, Untergrund, Technik und Anstrengung mit der Beschreibung. 8 MET Kraulen meint hier etwa 45,7 m/min. Eine allgemeingültige Fehlerquote gibt es nicht."
    },
    {
      "q": "Enthält die Einheit den Ruheverbrauch?",
      "a": "Ja, der Gesamtwert enthält ihn. Die 1-MET-Zeile zeigt den angenommenen Ruhewert derselben Minuten, danach folgt die Differenz. Dein persönlicher Ruheverbrauch kann abweichen."
    },
    {
      "q": "Darf ich alle Sportkalorien zum Tagesverbrauch addieren?",
      "a": "Prüfe, was die Tagesrechnung bereits enthält. Die volle Summe kann Ruhe und übliche Bewegung doppelt zählen. Auch die Differenz zu 1 MET misst kein Ernährungsdefizit."
    }
  ],
  "disclaimer": "MET-Näherung für Erwachsene; die 2024-Vorgaben gelten für 19–59 Jahre. Keine persönliche Stoffwechselmessung oder Ernährung und Trainingsvorgabe."
};
