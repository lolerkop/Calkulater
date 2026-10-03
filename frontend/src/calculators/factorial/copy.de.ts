import type { CalculatorCopy } from '../../lib/platform/types';

export const factorialCopyDe: CalculatorCopy = {
  "name": "Fakultätsrechner",
  "slug": "fakultaet-rechner",
  "shortDescription": "Genaues n! für ganze Zahlen bis 170.",
  "seoTitle": "Fakultät berechnen — genaues n! bis 170",
  "seoDescription": "Berechne die genaue Fakultät einer ganzen Zahl bis 170, mit Stellenzahl und wissenschaftlicher Schreibweise daneben.",
  "h1": "Fakultätsrechner",
  "keywords": [
    "Fakultät berechnen",
    "n Fakultät",
    "Fakultaet berechnen",
    "Fakultät Rechner"
  ],
  "longDescription": "Berechnet n! als exakte ganze Zahl für n von 0 bis 170. BigInt erhält jede Stelle des Produkts; daneben stehen die Stellenanzahl und eine kompakte wissenschaftliche Schreibweise. Schon 20! liegt über der allgemeinen sicheren Ganzzahlgrenze des gewöhnlichen Zahlentyps, obwohl gerade 20! noch exakt darstellbar ist. Daraus folgt kein einheitlicher Schritt, ab dem alle größeren Fakultäten gerundet werden.",
  "howItWorks": "n! ist das Produkt jeder ganzen Zahl von 1 bis n, und 0! ist als 1 festgelegt.",
  "example": "10! sind 3 628 800, und 20! sind bereits 2 432 902 008 176 640 000.",
  "howToUse": [
    "Trage eine ganze Zahl von 0 bis 170 ein.",
    "Lies den genauen Wert ab.",
    "Prüfe bei sehr großen Ergebnissen die Stellenzahl."
  ],
  "faq": [
    {
      "q": "Warum ist bei 170 Schluss?",
      "a": "Das ist eine Grenze dieser Seite und nicht der Rechnung. 170! hat bereits 307 Stellen, und darüber hinaus hört die Antwort auf, lesbar zu sein."
    },
    {
      "q": "Ist das Ergebnis genau?",
      "a": "Ja, der Hauptwert erhält durch BigInt jede Stelle. Oberhalb von 2⁵³ − 1 entfällt die allgemeine Exaktheitsgarantie für ganze Zahlen des gewöhnlichen Zahlentyps; gerade 20! muss deshalb nicht fehlerhaft sein. Die kompakte wissenschaftliche Zeile ersetzt den vollständigen Wert nicht."
    },
    {
      "q": "Warum ist 0! gleich eins?",
      "a": "Es ist das leere Produkt: multipliziert man nichts, bleibt das neutrale Element der Multiplikation, und die Festlegung hält die kombinatorischen Formeln stimmig."
    },
    {
      "q": "Kann ich einen Bruch eintragen?",
      "a": "Nein, hier werden nur ganze Zahlen von 0 bis 170 akzeptiert. Die Erweiterung verwendet Γ(n + 1), nicht Γ(n), und benötigt eine eigene Berechnung mit eigenem Definitionsbereich."
    }
  ],
  "disclaimer": "Die Grenze 170 ist eine Seitenregel, keine mathematische Grenze der Fakultät oder von BigInt. Das Hauptergebnis ist exakt. Die wissenschaftliche Form übernimmt die ersten sieben Ziffern ohne Rundung der letzten; einstellige Ergebnisse zeigen eine Ziffer. 170! hat 307 Stellen. Gebrochene, negative, leere oder ungültige Eingaben werden abgewiesen."
};
