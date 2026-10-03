import type { CalculatorCopy } from '../../lib/platform/types';

export const waistRatioCopyDe: CalculatorCopy = {
  "name": "Rechner für die Taillenverhältnisse",
  "slug": "taille-groesse-verhaeltnis",
  "shortDescription": "WHtR und WHR mit Messprotokoll und bedingten NICE-Grenzen für Erwachsenenscreening.",
  "longDescription": "Berechnet zwei einheitenlose Verhältnisse: Taille zu Größe (WHtR) und Taille zu Hüfte (WHR). Die Kategorie betrifft nur WHtR und das Screening zentraler Fettansammlung, nicht allgemeine Gesundheit. NICE-Grenzen gelten für Erwachsene mit BMI unter 35: 0,4–<0,5 ohne erhöhte zentrale Fettansammlung, 0,5–<0,6 erhöht, ab 0,6 hoch. BMI wird hier nicht berechnet; prüfe die Bedingung getrennt. Unter 0,4 liegt außerhalb dieser drei Kategorien und ergibt keine Untergewichtsdiagnose.",
  "seoTitle": "Taille-zu-Größe und Taille-zu-Hüfte berechnen",
  "seoDescription": "WHtR und WHR mit Messprotokoll und bedingten NICE-Grenzen für Erwachsenenscreening.",
  "h1": "Rechner für die Taillenverhältnisse",
  "keywords": [
    "Taille zu Größe",
    "Taille-Hüft-Verhältnis",
    "WHtR Rechner",
    "Taillenumfang Gesundheit",
    "Taille zu Groesse"
  ],
  "howToUse": [
    "Finde untere Rippen und obere Hüfte; miss Taille mittig dazwischen nach normalem Ausatmen.",
    "Halte das Band waagerecht ohne Hautdruck oder Einziehen des Bauchs.",
    "Miss die breiteste Hüftumfassung und Größe ohne Schuhe; trage Zentimeter ein.",
    "Lies die Kategorie als bedingtes Erwachsenenscreening bei BMI<35, nicht als persönlichen Befund."
  ],
  "howItWorks": "WHtR = Taille/Größe; WHR = Taille/Hüfte. Die Kategorie verwendet ungerundetes WHtR: 0,4≤r<0,5; 0,5≤r<0,6; r≥0,6. Exakt 0,5 und 0,6 gehören zum nächsten Bereich. Die Anzeige ist gerundet; das Kategorieintervall zeigt die verwendete Seite der Grenze.",
  "example": "84 cm/178 cm=0,4719; 100 cm Hüfte ergibt WHR=0,84.80 cm/160 cm=0,5 liegt bereits im erhöhten Bereich; 79 cm/160 cm=0,4938 darunter. Sehr nahe Werte können gerundet gleich erscheinen; die Einstufung erfolgt vorher.",
  "faq": [
    {
      "q": "Wo messe ich Taille für diese WHtR-Grenzen?",
      "a": "NICE verwendet die Mitte zwischen untersten Rippen und oberer Hüfte nach natürlichem Ausatmen. Engste Stelle oder Nabel können abweichen; Messprotokolle nicht mischen."
    },
    {
      "q": "Warum WHtR neben dem üblichen BMI?",
      "a": "BMI beschreibt Gewicht bezogen auf Größe, WHtR den Bauchumfang bezogen auf Größe. NICE nutzt ergänzendes Screening Erwachsener mit BMI<35. Keine der Zahlen bestätigt allein Gesundheit."
    },
    {
      "q": "Sind WHtR-Grenzen für verschiedene Menschen gleich?",
      "a": "Die genannten NICE-Erwachsenenkategorien gelten für Geschlechter und ethnische Gruppen bei BMI<35. Das garantiert keinen gleichen persönlichen Risikowert; Schwangerschaft und andere Umfangsänderungen brauchen eigenen Kontext."
    },
    {
      "q": "Warum zeigt WHR keine Geschlechtskategorie?",
      "a": "Taille zu Hüfte ist eine eigene Kennzahl mit anderen Bedingungen und Grenzen. Das Formular fragt kein Geschlecht und zeigt nur WHR-Arithmetik ohne Urteil aus einer verborgenen Annahme."
    },
    {
      "q": "Was folgt aus einer erhöhten Taillenkategorie?",
      "a": "Sie ist Anlass, weitere Beurteilung mit medizinischen Fachpersonen zu besprechen, keine eigene Diagnose oder Behandlung. Auch ein Bereich ohne Erhöhung schließt andere Risiken nicht aus."
    }
  ],
  "disclaimer": "Umfangsverhältnisse und bedingtes WHtR-Screening Erwachsener mit BMI<35. Keine Gesamtdiagnose; Schwangerschaft und Veränderungen des Bauchumfangs erfordern getrennte Beurteilung."
};
