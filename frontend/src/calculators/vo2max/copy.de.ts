import type { CalculatorCopy } from '../../lib/platform/types';

export const vo2maxCopyDe: CalculatorCopy = {
  "name": "VO2max-Rechner",
  "slug": "vo2max-rechner",
  "shortDescription": "Zwei empirische VO₂max-Schätzungen aus vorhandenen Cooper oder Pulsdaten mit Anwendungsgrenzen.",
  "longDescription": "Schätzt die relative maximale Sauerstoffaufnahme mit zwei getrennten empirischen Modellen. Cooper nutzt eine bereits gemessene 12-Minuten-Strecke; die Originalstudie verglich Läufe von 115 Air-Force-Männern mit Labortests. 15,3×HRmax/HRrest wurde zunächst an 46 gut trainierten Männern von 21–51 Jahren geprüft. Diese Gruppen belegen keine gleiche Eignung für alle Besucher. Atemgasanalyse misst Sauerstoffaufnahme direkt; Strecken oder Pulsrechnungen ersetzen sie nicht.",
  "seoTitle": "VO2max-Rechner — Cooper-Test und Herzfrequenz",
  "seoDescription": "Zwei empirische VO₂max-Schätzungen aus vorhandenen Cooper oder Pulsdaten mit Anwendungsgrenzen.",
  "h1": "VO2max-Rechner",
  "keywords": [
    "VO2max",
    "Cooper-Test",
    "Ausdauer",
    "maximale Sauerstoffaufnahme"
  ],
  "howToUse": [
    "Wähle die Methode mit bereits vorhandenen geeigneten Daten.",
    "Gib eine echte 12-Minuten-Strecke aus einem angemessenen Test an; hier wird kein Beginn maximaler Belastung verlangt.",
    "Im Pulsmodus gib Ruhe und bekannten Maximalpuls an; ein aus Alter geschätzter Maximalpuls bringt einen weiteren Fehler ein.",
    "Vergleiche Wiederholungen einer Methode unter ähnlichen Bedingungen."
  ],
  "howItWorks": "Gebräuchliche Streckenschätzung: VO₂max = (D−504,9)/44,73, D in Metern. Pulsschätzung: VO₂max =15,3×HRmax/HRrest. Ausgabe in ml Sauerstoff/kg/min. Bei D≤504,9 ist der erste Ausdruck nicht positiv und die Schätzung nicht verfügbar. Diese mathematische Grenze validiert nicht jede größere Strecke.",
  "example": "2600 m in 12 min: (2600−504,9)/44,73=46,839 ml/kg/min. Pulsmodus: Maximum 190, Ruhe 60 →15,3×190/60=48,45. Mit Ruhe 55 ergibt sich 52,855. Verschiedene Annahmen bedeuten keine gegenseitige Bestätigung.",
  "faq": [
    {
      "q": "Welche VO₂max-Schätzung ist hier verlässlicher?",
      "a": "Es gibt keinen allgemeingültigen Gewinner. Strecke hängt von Bedingungen und Tempowahl ab, Pulsverhältnis von Messungen und Studiengruppe. Dezimalstellen bedeuten keine persönliche Genauigkeit."
    },
    {
      "q": "Welches errechnete VO₂max gilt als gut?",
      "a": "Der Rechner setzt keine universellen Alters oder Geschlechtsnormen. Die Bewertung hängt von Gruppe und Methode ab; ein Einzelwert ist weder Diagnose noch Belastungsfreigabe."
    },
    {
      "q": "Soll ich den Maximalpuls eigens für VO₂max bestimmen?",
      "a": "Nicht für diese Rechnung. Nutze vorhandene Daten einer geeigneten Untersuchung. Maximaltests verlangen geeignete Teilnehmer; Unvorbereitete benötigen eine individuell ausgewählte Untersuchung."
    },
    {
      "q": "Kann ich Cooper und Pulsverhältnis vergleichen?",
      "a": "Es sind zwei Modelle; Übereinstimmung bestätigt keine gemessene Sauerstoffaufnahme. Die erste Pulsprüfung betraf trainierte Männer 21–51, keinen allgemein sicheren Testersatz."
    },
    {
      "q": "Wie wirkt sich Streckenfehler auf Cooper aus?",
      "a": "In dieser Formel verändern 50 m den Wert um 50/44,73≈1,118 ml/kg/min. Bahnlänge, letzte Teilrunde und GPS-Messung zählen auch ohne Fitnessänderung."
    }
  ],
  "disclaimer": "Empirische Schätzungen, keine Diagnose oder Trainingsverordnung. Cooper Institute beschreibt Tests für offenbar gesunde regelmäßig aktive Teilnehmer. Krankheiten und pulswirksame Medikamente begrenzen das Pulsmodell."
};
