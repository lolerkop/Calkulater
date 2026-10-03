import type { CalculatorCopy } from '../../lib/platform/types';

export const phPohCopyDe: CalculatorCopy = {
  "name": "pH- und pOH-Rechner",
  "slug": "ph-wert-rechner",
  "shortDescription": "pH aus der Wasserstoffionenkonzentration und zurück, mit pOH und Milieu.",
  "seoTitle": "pH und pOH berechnen — Säuregrad einer Lösung",
  "seoDescription": "Berechne den pH-Wert aus der Wasserstoffionenkonzentration oder die Konzentration aus dem pH-Wert, samt pOH und Milieu.",
  "h1": "pH- und pOH-Rechner",
  "keywords": [
    "pH-Wert berechnen",
    "pH und pOH",
    "Säuregrad einer Lösung",
    "Wasserstoffionenkonzentration"
  ],
  "longDescription": "Eine Lehrrechnung aus der H⁺-Konzentration in mol/l oder einem vorgegebenen pH. Streng genommen ist pH durch die Wasserstoffionenaktivität definiert. Hier wird die Aktivität durch die Konzentration bezogen auf 1 mol/l angenähert, wie üblich für ausreichend verdünnte Lösungen. Für pOH wird pKw = 14 bei 25 °C angenommen. Temperatur und Aktivitätskoeffizienten sind keine Eingaben.",
  "howItWorks": "pH = −log₁₀ a(H⁺). Das Modell verwendet a(H⁺) ≈ [H⁺]/c° mit c° = 1 mol/l; umgekehrt [H⁺] ≈ c° × 10⁻pH. pOH = 14 − pH. Der neutrale Modellpunkt liegt bei pH 7. Das Produkt akzeptiert pH von 0 bis 14 und entsprechende positive Konzentrationen. Dies sind Rechnergrenzen, keine allgemeinen Grenzen der pH-Skala.",
  "example": "Bei [H⁺] = 10⁻³ mol/l ergibt das Modell pH 3,00 und pOH 11,00. Bei pH 8,4 ergeben sich ungefähr 3,981 × 10⁻⁹ mol/l und pOH 5,60.",
  "howToUse": [
    "Wähle H⁺-Konzentration oder pH.",
    "Gib eine endliche positive Konzentration in mol/l oder pH von 0 bis 14 ein.",
    "Deute das Ergebnis innerhalb der Näherung bei 25 °C."
  ],
  "faq": [
    {
      "q": "Ist pH + pOH immer 14?",
      "a": "Nein. Die Summe ist pKw und hängt von Temperatur und Medium ab. Hier gilt die Lehrannahme pKw = 14 bei 25 °C; andere Temperaturen werden nicht berechnet."
    },
    {
      "q": "Ist Konzentration die genaue Definition des pH?",
      "a": "Nein. Die Definition verwendet die dimensionslose Aktivität. Die Konzentrationsnäherung berücksichtigt keine Aktivitätskoeffizienten und kann bei konzentrierten Lösungen ungenau sein."
    },
    {
      "q": "Kann pH außerhalb von 0–14 liegen?",
      "a": "Ja, die Skala bleibt auch dort sinnvoll. Dieser Rechner akzeptiert bewusst nur 0–14 und modelliert solche Lösungen nicht."
    },
    {
      "q": "Warum wird Konzentration null abgelehnt?",
      "a": "Der Logarithmus von null ist nicht definiert. Leere oder fehlerhafte Eingaben führen ebenfalls zu einem Fehler statt zu einem Ersatzwert null."
    }
  ],
  "disclaimer": "Aktivität wird durch Konzentration angenähert; pKw = 14 bei 25 °C. Der Produktbereich 0–14 ist keine physikalische pH-Grenze. Ionenstärke, Temperatur und Messkorrekturen werden nicht modelliert."
};
