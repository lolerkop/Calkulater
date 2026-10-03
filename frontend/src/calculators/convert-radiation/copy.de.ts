import type { CalculatorCopy } from '../../lib/platform/types';

export const convertRadiationCopyDe: CalculatorCopy = {
  "name": "Umrechner für die Strahlendosis",
  "slug": "strahlendosis-umrechner",
  "shortDescription": "Sievert, Millisievert, Mikrosievert und Rem, in beide Richtungen umgerechnet.",
  "seoTitle": "Strahlendosis umrechnen: Sievert, Millisievert, Rem",
  "seoDescription": "Rechne zwischen Sievert, Millisievert, Mikrosievert, Nanosievert, Rem und Millirem um.",
  "h1": "Umrechner für die Strahlendosis",
  "keywords": [
    "Sievert in Rem",
    "Strahlendosis umrechnen",
    "mSv in µSv",
    "Millirem umrechnen"
  ],
  "longDescription": "Rechnet Einheiten der Äquivalentdosis um: Sv, mSv, µSv, nSv, rem und mrem. Dosimetrische Größe und Expositionszeitraum müssen gleich bleiben. Energiedosis in Gray, Aktivität in Becquerel und Dosisleistung in Sv/h gehören nicht zur Liste.",
  "howItWorks": "1 mSv = 10⁻³ Sv; 1 µSv = 10⁻⁶ Sv; 1 nSv = 10⁻⁹ Sv; 1 rem = 0,01 Sv; 1 mrem = 10⁻⁵ Sv. Der Eingabewert wird mit dem Verhältnis der Einheitenfaktoren multipliziert. Die Faktoren sind exakt, Maschinenrechnung und Anzeige werden gerundet. Endliche nichtnegative Eingaben einschließlich null sind möglich. Kleine Werte erscheinen in wissenschaftlicher Schreibweise; Überlauf oder Verlust zu null führen zu einem Fehler.",
  "example": "1 mSv = 1000 µSv; 250 mrem = 2,5 mSv. 1 nSv = 1 × 10⁻⁹ Sv und ist keine Dosis null.",
  "howToUse": [
    "Gib einen endlichen nichtnegativen Dosiswert ein.",
    "Wähle Ausgangs- und Zieleinheit derselben dosimetrischen Größe.",
    "Lies den Faktor in der Verhältniszeile; der Expositionszeitraum bleibt gleich."
  ],
  "faq": [
    {
      "q": "Warum fehlt Gy?",
      "a": "Gray misst absorbierte Energie je Masse: 1 Gy = 1 J/kg. Die Äquivalentdosis in Sv verwendet Strahlungs-Wichtungsfaktoren. Der Zusammenhang benötigt ein Expositionsmodell, keinen allgemeinen Einheitenfaktor."
    },
    {
      "q": "Kann Bq in Sv umgerechnet werden?",
      "a": "Nein. Becquerel misst die Quellenaktivität, nicht die Dosis. Eine Dosisberechnung benötigt Strahlungseigenschaften, Geometrie und Expositionsbedingungen."
    },
    {
      "q": "Sind Äquivalentdosis und effektive Dosis austauschbar?",
      "a": "Nein, obwohl beide in Sv angegeben werden. Die effektive Dosis berücksichtigt zusätzlich Gewebegewichte. Der Rechner ändert Einheiten, nicht die Bedeutung der Größe."
    },
    {
      "q": "Was ist mit µSv/h?",
      "a": "Das ist Dosisleistung, keine Dosis. Hier gibt es keine Zeiteingabe. Für eine Dosis ist ein separates Modell zur zeitlichen Integration nötig."
    },
    {
      "q": "Bestimmt das Ergebnis die Sicherheit?",
      "a": "Nein. Ohne Dosisart, Zeitraum und Expositionsbedingungen beschreibt eine Zahl kein Risiko. Der Rechner legt keine medizinischen oder gesetzlichen Grenzwerte fest."
    }
  ],
  "disclaimer": "Nur Einheiten derselben dosimetrischen Größe werden geändert. Gy, Bq und Dosisleistungen werden nicht umgerechnet; Risiko oder Zulässigkeit werden nicht beurteilt. Die Anzeige wird gerundet."
};
