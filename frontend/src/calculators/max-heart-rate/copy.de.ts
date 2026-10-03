import type { CalculatorCopy } from '../../lib/platform/types';

export const maxHeartRateCopyDe: CalculatorCopy = {
  "name": "Rechner für den Maximalpuls",
  "slug": "maximalpuls-rechner",
  "shortDescription": "Altersbezogene Pulsschätzungen und Prozent von Maximum oder Reserve mit Grenzen der Studiengruppen.",
  "longDescription": "Zeigt eine altersbezogene Schätzung der maximalen Herzfrequenz und rechnerische Prozentbereiche. Tanaka ist eine Regression für gesunde Erwachsene, Gulati beschreibt den mittleren Spitzenpuls symptomfreier Frauen. Beides ist keine gemessene Herzgrenze. Mit Ruhepuls gelten Prozente für die Reserve, sonst für das geschätzte Maximum. Die Intervalle bestimmen weder individuelle aerobe Schwellen noch Fettverbrennung oder sichere Belastung. 18–120 Jahre sind der Eingabebereich, kein Nachweis gleicher Genauigkeit über alle Altersstufen.",
  "seoTitle": "Maximalpuls schätzen — drei Altersformeln",
  "seoDescription": "Altersbezogene Pulsschätzungen und Prozent von Maximum oder Reserve mit Grenzen der Studiengruppen.",
  "h1": "Rechner für den Maximalpuls",
  "keywords": [
    "Maximalpuls berechnen",
    "Pulsbereiche",
    "Karvonen-Formel",
    "Herzfrequenzreserve"
  ],
  "howToUse": [
    "Gib ein ganzzahliges Erwachsenenalter ein und wähle die passende Studiengruppe.",
    "Für die Reserve gib gemessenen Ruhepuls an; leer oder 0 bedeutet nicht angegeben.",
    "Prüfe die Spalte: Prozent des Maximums und der Reserve ergeben andere Grenzen.",
    "Vergleiche Modelle und kläre einen persönlichen Trainingsplan gesondert."
  ],
  "howItWorks": "HRmax: 220−Alter; Tanaka 208−0,7×Alter; Gulati 206−0,88×Alter. Mit Ruhepuls R: Grenze =R+p(HRmax−R), p von 0,5 bis 1. Ohne R: Grenze =pHRmax. Nur die Anzeige wird auf ganze Schläge/min gerundet.",
  "example": "35 Jahre: 220−35=185/min. Ruhe 60 ergibt Reserve 125; 70–80%: 60+0,7×125=147,5→148 und 60+0,8×125=160. Ohne Ruhepuls ergeben 70–80% des Maximums 130–148. Mit 60 Jahren: herkömmlich 160, Tanaka 166/min.",
  "faq": [
    {
      "q": "Wie genau ist die maximale Herzfrequenz aus dem Alter?",
      "a": "Sie ist eine Populationsschätzung. Das persönliche Maximum kann abweichen; es gibt hier kein garantiertes Fehlerintervall. Ein passender Pulswert begründet keine Diagnose."
    },
    {
      "q": "Was bedeutet die Auswahl Tanaka oder Gulati?",
      "a": "Tanaka 208−0,7×Alter wurde an gesunden Erwachsenen untersucht. Gulati 206−0,88×Alter beschreibt den mittleren Spitzenpuls symptomfreier Frauen. Gegenüber Tanaka ist 220−Alter nach 40 niedriger, davor höher."
    },
    {
      "q": "Warum braucht der Prozentbereich den Ruhepuls?",
      "a": "Er verändert die Prozentbasis. Maximum 185 und Ruhe 60 ergeben bei 70% Reserve 147,5, bei 70% Maximum 129,5. Das sind unterschiedliche Rechnungen ohne automatische Fitnessbeurteilung."
    },
    {
      "q": "Wie bereite ich einen Ruhepuls für die Rechnung vor?",
      "a": "Miss in ruhigen vergleichbaren Bedingungen in Schlägen/min. Schlaf, Stress und Medikamente können ihn verändern. Ruhepuls muss unter dem geschätzten Maximum liegen; fehlerhafter Text gilt nicht als null."
    },
    {
      "q": "Darf ich bis zum obersten Tabellenwert trainieren?",
      "a": "Die Tabelle verordnet keine Belastung und prüft keine Sicherheit. Krankheiten und pulswirksame Medikamente benötigen individuelle Beratung. Erreiche das geschätzte Maximum nicht bloß zur Kontrolle."
    }
  ],
  "disclaimer": "Altersbezogene Schätzung für Erwachsene, keine gemessene Herzgrenze oder Trainingsverordnung. Feste Prozente bestimmen keine individuellen physiologischen Schwellen."
};
