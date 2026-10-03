import type { CalculatorCopy } from '../../lib/platform/types';

export const ohmsLawCopyDe: CalculatorCopy = {
  name: "Rechner zum ohmschen Gesetz",
  slug: "ohmsches-gesetz-rechner",
  shortDescription: "Spannung, Strom oder Widerstand aus dem bekannten Paar, mit Verlustleistung.",
  seoTitle: "Ohmsches Gesetz — Spannung, Strom, Widerstand, Leistung",
  seoDescription: "Berechne die fehlende Spannung, Stromstärke oder den Widerstand und die Verlustleistung einer ohmschen Last aus zwei Größen.",
  h1: "Rechner zum ohmschen Gesetz",
  keywords: ["ohmsches Gesetz", "Spannung berechnen", "Widerstand", "elektrische Leistung"],
  longDescription: "Ermittle die fehlende Spannung, Stromstärke oder den Widerstand einer ohmschen Last sowie die Verlustleistung. Wähle das bekannte Paar: U/I, U/R oder I/R. Leistung ist ein Ergebnis, kein Eingabemodus. Die Werte sind nichtnegative Beträge; Stromrichtung, die nichtlineare Kennlinie einer Diode und temperaturabhängiger Widerstand werden nicht modelliert.",
  howToUse: ["Wähle das tatsächlich bekannte Paar; das dritte als berechnet markierte Feld wird nicht verwendet.", "Verwende Volt, Ampere und Ohm. Teile Milliampere durch 1000: 20 mA = 0,020 A.", "Vergleiche die Verlustleistung mit der Bauteilbelastbarkeit unter den vorgesehenen Kühlbedingungen; ein Bauteilnennwert wird hier nicht ausgewählt."],
  howItWorks: "U = IR; I = U/R bei R > 0; R = U/I bei I > 0. P = UI = I²R = U²/R bei positivem R. Für Gleichstrom ist das die Widerstandsleistung; für eine rein ohmsche Wechselstromlast sind Effektivwerte einzusetzen.",
  example: "12 V und 2 A ergeben R = 12/2 = 6,00 Ω und P = 12 × 2 = 24,00 W. 5 V an 250 Ω ergeben I = 0,020 A und P = 0,10 W. U = 0 bei R = 100 Ω ergibt I = 0 und P = 0.",
  faq: [{"q": "Kann die Leistung statt der Spannung eingegeben werden?", "a": "Nein. Unterstützt werden U/I, U/R und I/R; die Leistung folgt nach Berechnung der dritten Größe."}, {"q": "Wann ist null beim Ohmschen Gesetz zulässig?", "a": "U = 0 bei R > 0 ergibt keinen Strom. Auch I = 0 mit bekanntem R ergibt U = P = 0. R aus I = 0 oder I aus R = 0 zu bestimmen ist nicht definiert."}, {"q": "Gilt das für einen Motor oder eine Diode?", "a": "Nicht allgemein. Reaktive Lasten benötigen Impedanz und Leistungsfaktor; eine Diode besitzt keinen konstanten ohmschen Widerstand U/I."}, {"q": "Wie ändert sich die Leistung bei doppeltem Widerstand und gleicher Spannung?", "a": "Bei ideal konstantem U gilt I = U/R und P = U²/R. Doppeltes R halbiert Strom und Leistung. Bei 12 V und 6 Ω sind es 24 W, bei 12 Ω nur 12 W. Bei konstantem Strom gilt dagegen P = I²R."}],
  disclaimer: "Ideale ohmsche Last mit konstantem Widerstand. Die Rechnung bestätigt weder Schaltungs- noch Kühlungs- oder Bauteilsicherheit.",
};
