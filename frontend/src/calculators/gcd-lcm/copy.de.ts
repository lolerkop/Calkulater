import type { CalculatorCopy } from '../../lib/platform/types';

export const gcdLcmCopyDe: CalculatorCopy = {
  "name": "Rechner für ggT und kgV",
  "slug": "ggt-kgv-rechner",
  "shortDescription": "Größter gemeinsamer Teiler und kleinstes gemeinsames Vielfaches einer Zahlenliste.",
  "seoTitle": "ggT und kgV berechnen",
  "seoDescription": "Finde den größten gemeinsamen Teiler und das kleinste gemeinsame Vielfache zweier oder mehrerer Zahlen.",
  "h1": "Rechner für ggT und kgV",
  "keywords": [
    "ggT berechnen",
    "kgV berechnen",
    "größter gemeinsamer Teiler",
    "kleinstes gemeinsames Vielfaches",
    "ggT kgV"
  ],
  "longDescription": "Bestimmt den größten gemeinsamen Teiler und das kleinste positive gemeinsame Vielfache einer Liste positiver ganzer Zahlen. Beide Werte werden paarweise mit exakter Ganzzahlarithmetik berechnet. Die Zeile zur Teilerfremdheit bedeutet nur, dass der ggT der gesamten Liste 1 ist. Bei mindestens drei Zahlen ist das nicht gleichbedeutend mit paarweiser Teilerfremdheit: 6, 10, 15 haben ggT 1, aber kgV 30 statt ihres Produkts 900.",
  "howItWorks": "Der ggT einer Liste wird paarweise mit dem euklidischen Algorithmus gefaltet: ggT(a,b,c) = ggT(ggT(a,b),c). Das kgV folgt derselben Reihenfolge über kgV(a,b) = a ÷ ggT(a,b) × b. Beide Ergebnisse sind genaue ganze Zahlen.",
  "example": "Für 24, 36, 60 und 84 ist der größte gemeinsame Teiler 12 und das kleinste gemeinsame Vielfache 2520.",
  "howToUse": [
    "Trage zwei oder mehr ganze Zahlen ein.",
    "Trenne sie mit Leerzeichen, Semikola oder Zeilenumbrüchen.",
    "Die Zahlen müssen ganz und größer als null sein.",
    "Das Ergebnis gilt für die ganze Liste auf einmal."
  ],
  "faq": [
    {
      "q": "Wie viele Zahlen darf ich eintragen?",
      "a": "2 bis 1000 positive ganze Zahlen mit insgesamt höchstens 20000 Zeichen. Das ist eine Seitengrenze. Auch das kgV muss innerhalb von 9007199254740991 bleiben."
    },
    {
      "q": "Warum werden Brüche abgewiesen?",
      "a": "Dieses Werkzeug verarbeitet ausschließlich positive ganze Zahlen. Für rationale Zahlen braucht man eine eigene Definition gemeinsamer Teiler und Vielfacher; der Rechner ersetzt die Aufgabe nicht stillschweigend durch Bruchrechnung."
    },
    {
      "q": "Was bedeutet die Zeile zur Teilerfremdheit?",
      "a": "Kein Teiler größer als 1 ist allen Zahlen gemeinsam. Bei paarweise teilerfremden Zahlen ist das kgV ihr Produkt; ein gemeinsamer ggT von 1 allein reicht für längere Listen nicht aus. Gegenbeispiel: 6, 10, 15 ergeben ggT 1 und kgV 30."
    },
    {
      "q": "Wofür wird das kgV eigentlich gebraucht?",
      "a": "Am häufigsten, um Brüche auf einen gemeinsamen Nenner zu bringen, und für Fragen danach, wann Zyklen zusammenfallen: zwei Ereignisse mit Perioden von 12 und 18 Tagen treffen nach 36 Tagen zusammen, ihrem kgV. Für das Zusammentreffen von Zyklen wird ein gemeinsamer Start vorausgesetzt; bei verschiedenen Phasen reicht das kgV allein nicht aus."
    },
    {
      "q": "Warum kann die Rechnung bei einer langen Liste anhalten?",
      "a": "Das kgV wächst sehr schnell und übersteigt bei einer großen Menge den Bereich genauer ganzer Zahlen. Einen gerundeten Wert anzuzeigen kommt nicht infrage, weil er sich nicht mehr durch die Ausgangszahlen teilen ließe, deshalb hält die Rechnung ehrlich an."
    }
  ],
  "disclaimer": "Zulässig sind 2 bis 1000 positive ganze Zahlen mit insgesamt höchstens 20000 Zeichen. Jede Zahl und das endgültige kgV dürfen 9007199254740991 nicht überschreiten. Trennen Sie Zahlen durch Leerzeichen, Zeilenumbrüche oder Semikola; ein Komma ohne folgendes Leerzeichen wird als Teil einer Zahl gelesen. Ungültige, gebrochene oder zu große Eingaben werden nicht gerundet."
};
