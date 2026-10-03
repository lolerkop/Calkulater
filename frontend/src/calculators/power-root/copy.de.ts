import type { CalculatorCopy } from '../../lib/platform/types';

export const powerRootCopyDe: CalculatorCopy = {
  "name": "Rechner für Potenzen und Wurzeln",
  "slug": "potenz-wurzel-rechner",
  "shortDescription": "Potenzen und Wurzeln im unterstützten reellen Bereich.",
  "seoTitle": "Potenzen und Wurzeln berechnen",
  "seoDescription": "Potenzen und Wurzeln im unterstützten reellen Bereich. Negative Basen, gebrochene Exponenten und Bereichsprüfung.",
  "h1": "Rechner für Potenzen und Wurzeln",
  "keywords": [
    "Potenz berechnen",
    "Wurzel ziehen",
    "Kubikwurzel",
    "Potenzrechner"
  ],
  "longDescription": "Berechnet aⁿ oder a^(1/n) im reellen Bereich. Beispielsweise ist 2¹⁰ = 1024 und die dritte Wurzel aus −8 gleich −2. Eine negative Basis verlangt beim Potenzieren einen ganzzahligen Exponenten und beim Wurzelziehen einen positiven ungeraden ganzzahligen Grad. Für eine nicht negative Basis ist auch ein positiver gebrochener Wurzelgrad möglich: Er wird als Kehrwertexponent interpretiert, über den üblichen ganzzahligen Wurzelgrad hinaus.",
  "howItWorks": "Für eine positive ganze Zahl n ist aⁿ ein Produkt aus n Faktoren a. Für a ≠ 0 gilt a⁰ = 1 und a⁻ⁿ = 1/aⁿ. Der rationale Exponent m/n verbindet eine n-te Wurzel und eine m-te Potenz im zulässigen reellen Bereich. Der Wurzelmodus berechnet a^(1/n); bei negativem a wird das Vorzeichen nur für ungerades ganzzahliges n herausgezogen. Die Felder akzeptieren Zahlen, keine Ausdrücke wie 1/3.",
  "example": "Zwei hoch zehn sind 1024, und die dritte Wurzel aus 27 ist 3.",
  "howToUse": [
    "Wählen Sie Potenz oder Wurzel.",
    "Geben Sie die Basis als Zahl ein.",
    "Geben Sie einen Exponenten oder einen positiven Wurzelgrad ein; ∛27 benötigt den Grad 3."
  ],
  "faq": [
    {
      "q": "Warum kann ich keine Quadratwurzel aus einer negativen Zahl ziehen?",
      "a": "Weil jede reelle Zahl im Quadrat nicht negativ ist, eine solche reelle Wurzel gibt es also nicht. Unter den komplexen Zahlen gibt es sie, aber das ist ein anderer Bereich."
    },
    {
      "q": "Und die dritte Wurzel aus einer negativen Zahl?",
      "a": "Die gibt es, und sie wird berechnet: ∛−8 = −2, denn (−2)³ = −8. Dasselbe gilt für jede Wurzel ungeraden Grades."
    },
    {
      "q": "Was bedeutet ein negativer Exponent?",
      "a": "Eins geteilt durch dieselbe Potenz mit positivem Exponenten: 2⁻³ ist 1/2³, also 0,125."
    },
    {
      "q": "Warum ist jede Zahl hoch null gleich eins?",
      "a": "Für a ≠ 0 ergibt aⁿ/aⁿ = a⁰ den Wert eins. Diese Seite weist 0⁰ zurück, statt eine der möglichen Konventionen auszuwählen."
    },
    {
      "q": "Kann ich einen gebrochenen Exponenten verwenden?",
      "a": "Ja, bei nicht negativer Basis: Der Exponent 0,5 ergibt die Quadratwurzel. Das Feld wertet 1/3 nicht aus; für die Kubikwurzel wählen Sie den Wurzelmodus und den Grad 3. Gebrochene Potenzen negativer Basen unterstützt dieser Rechner nicht, obwohl manche rationale Fälle mathematisch existieren."
    }
  ],
  "disclaimer": "Berechnung und Anzeige sind gerundet. Diese Seite weist 0⁰ als mehrdeutige Eingabe zurück; das ist eine Produktregel. Null ist nur bei positivem Exponenten oder Wurzelgrad zulässig. Bei negativer Basis beträgt die Betragsgrenze für ganze Exponenten 9007199254740991; derselbe positive Grenzwert gilt für ungerade Wurzelgrade. Überlauf oder Verlust eines von null verschiedenen Ergebnisses führt zu einer Fehlermeldung."
};
