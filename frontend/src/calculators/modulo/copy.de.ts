import type { CalculatorCopy } from '../../lib/platform/types';

export const moduloCopyDe: CalculatorCopy = {
  "name": "Restrechner",
  "slug": "division-mit-rest",
  "shortDescription": "Mit Rest teilen und Quotient samt Probe sehen.",
  "seoTitle": "Division mit Rest — Rest und Quotient berechnen",
  "seoDescription": "Teile ganze Zahlen mit Rest: Rest, Quotient und die Probe a = b × q + r. Quotient gegen null abgeschnitten; Rest mit Vorzeichen des Dividenden.",
  "h1": "Restrechner",
  "keywords": [
    "Division mit Rest",
    "Rest berechnen",
    "Modulo",
    "Quotient und Rest"
  ],
  "longDescription": "Teilt die ganze Zahl a durch die ganze Zahl b ≠ 0 und zeigt den exakten Quotienten q, den Rest r und die Identität a = bq + r. Der Quotient wird hier wie bei ganzzahligen JavaScript-Operationen gegen null abgeschnitten: Ein von null verschiedener Rest hat das Vorzeichen des Dividenden. Andere Konventionen können bei negativen Zahlen andere Ergebnisse liefern.",
  "howItWorks": "Der Quotient ist die gegen null abgeschnittene Division; der Rest ist das, was die Gleichung a = b × q + r übrig lässt.",
  "example": "17 geteilt durch 5 ergibt den Quotienten 3 und den Rest 2, denn 17 = 5 × 3 + 2.",
  "howToUse": [
    "Trage den Dividenden ein.",
    "Trage den Divisor ein.",
    "Lies Rest und Quotient ab."
  ],
  "faq": [
    {
      "q": "Was passiert bei negativen Zahlen?",
      "a": "Der Rest übernimmt das Vorzeichen des Dividenden: −17 und 5 ergeben den Quotienten −3 und den Rest −2, denn −17 = 5 × (−3) + (−2)."
    },
    {
      "q": "Ist das dasselbe wie Modulo in Python?",
      "a": "Nein. Python liefert einen Rest mit dem Vorzeichen des Divisors, −17 mod 5 sind dort also 3. Dieser Rechner folgt der abschneidenden Regel."
    },
    {
      "q": "Kann ich Dezimalzahlen verwenden?",
      "a": "Nein. Die Division mit Rest ist für ganze Zahlen festgelegt, eine dezimale Eingabe wird deshalb abgewiesen statt gerundet."
    },
    {
      "q": "Wozu die Zeile mit der Probe?",
      "a": "Sie macht die Antwort auf einen Blick nachprüfbar: multipliziere den Divisor mit dem Quotienten, addiere den Rest, und du hast den Dividenden zurück."
    }
  ],
  "disclaimer": "Jede Eingabe muss ganzzahlig sein und darf dem Betrag nach 9007199254740991 nicht überschreiten; b ≠ 0. Eingaben werden nicht zu ganzen Zahlen gerundet. Division und Rest werden exakt ganzzahlig berechnet. Bei 17 ÷ −5 ergibt das Abschneiden q = −3 und r = 2; ein nicht negativer Rest ist nicht für alle Vorzeichen vorgeschrieben."
};
