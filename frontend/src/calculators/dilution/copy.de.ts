import type { CalculatorCopy } from '../../lib/platform/types';

export const dilutionCopyDe: CalculatorCopy = {
  "name": "Verdünnungsrechner",
  "slug": "verduennungsrechner",
  "shortDescription": "Die Regel C₁V₁ = C₂V₂, nach beiden Volumina aufgelöst.",
  "seoTitle": "Verdünnung berechnen — C₁V₁ = C₂V₂",
  "seoDescription": "Berechne eine Verdünnung nach der Regel C₁V₁ = C₂V₂: das Endvolumen oder das nötige Volumen der Stammlösung.",
  "h1": "Verdünnungsrechner",
  "keywords": [
    "Verdünnung berechnen",
    "C1V1 C2V2",
    "Stammlösung verdünnen",
    "Lösung ansetzen",
    "Verduennung berechnen",
    "Verduennungsrechner"
  ],
  "longDescription": "Bestimmt das Endvolumen oder das Volumen der Stammlösung bei einer Verdünnung nach C₁V₁ = C₂V₂. Die Konzentrationen müssen Stoffmenge oder Masse je Lösungsvolumen ausdrücken, etwa mol/l oder g/l. Massenprozente eignen sich ohne Dichteangabe nicht für diese Volumengleichung. Die gesonderte Lösungsmittelzeile schätzt die Volumendifferenz.",
  "howToUse": [
    "Wähle Endvolumen oder Volumen der Stammlösung.",
    "Trage beide Konzentrationen in derselben Einheit je Lösungsvolumen ein.",
    "Gib das bekannte Volumen in ml ein und lies das Ergebnis."
  ],
  "howItWorks": "Die gelöste Stoffmenge bleibt erhalten: C₁V₁ = C₂V₂. Das Endvolumen ist C₁V₁/C₂, das Ausgangsvolumen C₂V₂/C₁. Die Volumenfelder verwenden ml; beide Konzentrationen benötigen dieselbe Definition und Einheit. Das Subtrahieren der Volumina setzt Additivität voraus.",
  "example": "50 ml einer Lösung mit 2 mol/l werden auf ein Endvolumen von 200 ml aufgefüllt, um 0,5 mol/l zu erhalten. Die Differenz von 150 ml schätzt die Zugabe; fülle auf das Endvolumen auf, statt Mischungsvolumina als immer exakt additiv anzunehmen.",
  "faq": [
    {
      "q": "Welche Konzentrationen passen zu C₁V₁ = C₂V₂?",
      "a": "Stoffmenge oder Masse je Volumen, etwa mol/l oder g/l. Ausdrückliche Masse/Volumen-Prozente in g je 100 ml sind ebenfalls proportional zur Massenkonzentration. Massenprozente haben einen anderen Nenner: Ohne Lösungsmassen oder eine passende Dichte ersetzen sie keine Konzentration je Volumen."
    },
    {
      "q": "Kann Verdünnen die Konzentration erhöhen?",
      "a": "Nein. Dieses Modell fügt Lösungsmittel hinzu und verlangt eine Endkonzentration höchstens in Höhe der Ausgangskonzentration. Konzentrieren und Eindampfen sind andere Vorgänge."
    },
    {
      "q": "Ist das Endvolumen die zuzugebende Lösungsmittelmenge?",
      "a": "Nein, es enthält auch die Stammlösung. V₂−V₁ schätzt die Zugabe bei additiven Volumina; genauer ist es, auf das berechnete Endvolumen aufzufüllen."
    },
    {
      "q": "Gilt die Formel für jede Prozentmischung?",
      "a": "Nein. Kläre die Bedeutung der Prozentangabe. Massen- und Stoffmengenanteile sind keine Konzentrationen je Volumen. Volumenprozente benötigen eine einheitliche Definition und Volumenannahmen; Kontraktion oder Ausdehnung beim Mischen wird hier nicht modelliert."
    }
  ],
  "disclaimer": "Das Modell erhält den gelösten Stoff bei Konzentration je Volumen. Die Zugabe ist eine Näherung; Massenanteile und nichtadditive Volumina benötigen ein anderes Modell."
};
