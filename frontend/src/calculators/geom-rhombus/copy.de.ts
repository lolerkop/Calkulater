import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRhombusCopyDe: CalculatorCopy = {
  "name": "Rautenrechner",
  "slug": "raute-rechner",
  "shortDescription": "Fläche, Seite, Umfang und Höhe einer Raute aus ihren beiden Diagonalen.",
  "seoTitle": "Raute berechnen: Fläche, Seite und Umfang",
  "seoDescription": "Berechne Fläche, Seite, Umfang und Höhe einer Raute aus ihren beiden Diagonalen.",
  "h1": "Rautenrechner",
  "keywords": [
    "Raute berechnen",
    "Fläche Raute",
    "Seite einer Raute",
    "Umfang Raute",
    "Rautenflaeche"
  ],
  "longDescription": "Berechnet Fläche, Seite, Umfang und Höhe einer Raute aus ihren beiden vollständigen Diagonalen. Die Diagonalen einer Raute schneiden sich rechtwinklig und halbieren einander, die Seite ist deshalb die Hypotenuse eines rechtwinkligen Dreiecks mit den Katheten d₁/2 und d₂/2, und die Fläche ist das halbe Produkt. Die Höhe folgt aus der Fläche als h = S/a, ganz ohne einen Winkel zu kennen. Eine Raute mit gleichen Diagonalen ist ein Quadrat, und der Rechner behandelt diesen Fall ohne Sonderweg.",
  "howItWorks": "Fläche S = d₁·d₂/2. Die Seite a = √((d₁/2)² + (d₂/2)²), weil sich die Diagonalen rechtwinklig halbieren. Umfang P = 4a und Höhe h = S/a.",
  "example": "Eine Raute mit den Diagonalen 6 und 8 cm hat eine Fläche von 24 cm², eine Seite von 5 cm und eine Höhe von 4,8 cm.",
  "howToUse": [
    "Prüfe, ob die Figur eine Raute mit vier gleichen Seiten ist.",
    "Gib die vollständigen Längen beider Diagonalen ein, nicht deren Hälften, in derselben Einheit.",
    "Die Fläche steht im Quadrat dieser Einheit.",
    "Die Höhe ist höchstens so groß wie die Seite und stimmt beim Quadrat mit ihr überein."
  ],
  "faq": [
    {
      "q": "Warum ist die Fläche das halbe Produkt der Diagonalen?",
      "a": "Die Diagonalen zerschneiden die Raute in vier rechtwinklige Dreiecke mit den Katheten d₁/2 und d₂/2. Ihre Flächen ergeben zusammen d₁·d₂/2."
    },
    {
      "q": "Wie unterscheidet sich eine Raute von einem Parallelogramm?",
      "a": "Eine Raute ist ein Parallelogramm mit vier gleichen Seiten. Jedes Parallelogramm hat gleiche Gegenseiten, seine Nachbarseiten können verschieden sein. Zwei Diagonalenlängen bestimmen eine Raute bis auf ihre Lage; ein allgemeines Parallelogramm braucht zusätzlich den Diagonalenwinkel oder andere Angaben."
    },
    {
      "q": "Was, wenn die Diagonalen gleich sind?",
      "a": "Du bekommst ein Quadrat — eine Raute mit rechten Winkeln. Die Rechnung ändert sich nicht: die Seite ergibt sich zu d/√2, und die Höhe gleicht der Seite."
    },
    {
      "q": "Kann ich stattdessen eine Seite und einen Winkel nehmen?",
      "a": "Rechnerisch ja, aber dieser Rechner will Diagonalen. In der Praxis sind sie leichter zu bekommen: ein Winkel braucht einen Winkelmesser, eine Diagonale nur ein Lineal."
    },
    {
      "q": "Warum ist die Höhe kleiner als die Seite?",
      "a": "Die Höhe ist der Abstand zweier paralleler Seiten, während die Seite selbst schräg verläuft. Beide fielen nur bei einem auf der Seite stehenden Quadrat zusammen, also im rechten Winkel."
    },
    {
      "q": "Genügen senkrechte Diagonalen für alle Rautenformeln?",
      "a": "Nein. Sie müssen einander auch halbieren und alle vier Seiten müssen gleich lang sein. Ein anderes Viereck mit senkrechten Diagonalen kann dieselbe Flächenformel haben; √((d₁/2)²+(d₂/2)²) als Seite und 4a als Umfang gelten jedoch nicht allgemein."
    }
  ],
  "disclaimer": "Die Diagonalen werden als senkrecht und einander halbierend angenommen, wie bei einer Raute. Ein beliebiges Viereck wird durch zwei Diagonalenlängen so nicht bestimmt. Alle Maße müssen positiv sein; Ergebnisse sind gerundet."
};
