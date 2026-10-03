import type { CalculatorCopy } from '../../lib/platform/types';

export const convertCookingWeightCopyDe: CalculatorCopy = {
  "name": "Umrechner für Küchenmaße nach Gewicht",
  "slug": "kuechenmasse-gewicht",
  "shortDescription": "Tassen, Löffel und Milliliter in Gramm — und zurück — für eine gewählte Zutat.",
  "seoTitle": "Küchenmaße in Gramm umrechnen: Tassen und Löffel",
  "seoDescription": "Rechne Tassen, Esslöffel und Milliliter für Mehl, Zucker, Honig und andere Zutaten in Gramm um und wieder zurück.",
  "h1": "Umrechner für Küchenmaße nach Gewicht",
  "keywords": [
    "Tassen in Gramm",
    "Küchengewicht umrechnen",
    "Esslöffel in Gramm",
    "Volumen in Gewicht Küche",
    "Tassen in Gramm umrechnen"
  ],
  "longDescription": "Rechnet das gewählte Küchenvolumen mit einer angesetzten Zutatendichte in eine ungefähre Masse um und zurück. Die Dichte steht im Ergebnis; sie ist keine Messung deiner Portion. Dieser Rechner verwendet eine Tasse mit 240 ml. Prüfe dein Messgefäß und die im Rezept gemeinte Konvention.",
  "howToUse": [
    "Wähle die Zutat — die Dichte ist es, die aus Volumen Gewicht macht.",
    "Wähle die Einheit, in der du misst.",
    "Trage die Menge ein.",
    "Wechsle die Richtung, wenn du Gramm hast und Volumen brauchst."
  ],
  "howItWorks": "Die Menge wird über den Einheitenfaktor in Milliliter umgerechnet und mit der Dichte der Zutat multipliziert. In der anderen Richtung werden Gramm durch die Dichte geteilt und danach in die gewählte Einheit zurückgerechnet.",
  "example": "Mit der angenommenen Mehldichte von 0,53 g/ml ergibt eine Tasse mit 240 ml eine Schätzung von 127,2 g.",
  "faq": [
    {
      "q": "Wie sind die Massen von Wasser, Mehl und Honig zu verstehen?",
      "a": "Es sind Schätzungen mit den Modelldichten: Eine Tasse mit 240 ml ergibt 240 g Wasser bei 1 g/ml, 127,2 g Mehl bei 0,53 g/ml und 340,8 g Honig bei 1,42 g/ml. Die tatsächliche Portion kann abweichen."
    },
    {
      "q": "Wie genau sind die Dichten?",
      "a": "Es sind feste Näherungswerte und keine Prüfung der konkreten Zutat. Zusammensetzung, Feuchte und Füllweise verändern die Portionsmasse; genauer ist es, die Zutat zu wiegen."
    },
    {
      "q": "Welche Tasse wird verwendet?",
      "a": "Gewählt sind 240 ml, eine Konvention etwa für die FDA-Nährwertkennzeichnung. Das unterscheidet sich von einer metrischen Tasse mit 250 ml und einer üblichen US-Tasse mit etwa 236,59 ml; das Wort cup allein legt kein Volumen fest."
    },
    {
      "q": "Kann ich Gramm zurück in Tassen umrechnen?",
      "a": "Ja, wechsle die Richtung. Es wird dieselbe Dichte verwendet, hin und zurück ergibt also wieder die Ausgangszahl."
    },
    {
      "q": "Warum nicht einfach eine Waage nehmen?",
      "a": "Tu das, wenn du eine hast. Das hier ist für Rezepte in Tassen, wenn du Gramm hast, oder umgekehrt."
    }
  ],
  "disclaimer": "Näherungsrechnung mit festen Dichten. Die gewählte Tasse fasst 240 ml; wiege die Zutat für eine genaue Masse."
};
