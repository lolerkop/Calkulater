import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRhombusCopyEs: CalculatorCopy = {
  "name": "Calculadora de rombo",
  "slug": "calculadora-de-rombo",
  "shortDescription": "Área, lado, perímetro y altura de un rombo a partir de sus dos diagonales.",
  "seoTitle": "Calculadora de rombo: área, lado y perímetro",
  "seoDescription": "Calcula el área, el lado, el perímetro y la altura de un rombo a partir de sus dos diagonales.",
  "h1": "Calculadora de rombo",
  "keywords": [
    "calculadora de rombo",
    "área de un rombo",
    "lado de un rombo",
    "perímetro del rombo"
  ],
  "longDescription": "Calcula área, lado, perímetro y altura de un rombo a partir de sus dos diagonales completas. Las diagonales de un rombo se cortan en ángulo recto y se bisecan, así que el lado es la hipotenusa de un triángulo rectángulo de catetos d₁/2 y d₂/2, y el área es la mitad de su producto. La altura sale del área como h = S/a, sin necesidad de conocer ningún ángulo. Un rombo con diagonales iguales es un cuadrado, y la calculadora lo resuelve sin tratarlo como caso aparte.",
  "howItWorks": "Área S = d₁·d₂/2. El lado a = √((d₁/2)² + (d₂/2)²), porque las diagonales se bisecan en ángulo recto. Perímetro P = 4a y altura h = S/a.",
  "example": "Un rombo con diagonales de 6 y 8 cm tiene un área de 24 cm², un lado de 5 cm y una altura de 4,8 cm.",
  "howToUse": [
    "Comprueba que la figura sea un rombo con cuatro lados iguales.",
    "Introduce las longitudes completas de ambas diagonales, no sus mitades, en una misma unidad.",
    "El área usa el cuadrado de esa unidad.",
    "La altura no supera al lado y coincide con él en un cuadrado."
  ],
  "faq": [
    {
      "q": "¿Por qué el área es la mitad del producto de las diagonales?",
      "a": "Las diagonales dividen el rombo en cuatro triángulos rectángulos de catetos d₁/2 y d₂/2. Su área conjunta suma d₁·d₂/2."
    },
    {
      "q": "¿En qué se diferencian un rombo y un paralelogramo?",
      "a": "Un rombo es un paralelogramo con cuatro lados iguales. Todo paralelogramo tiene lados opuestos iguales, pero los adyacentes pueden diferir. Dos longitudes de diagonal determinan un rombo salvo su posición; un paralelogramo general necesita además el ángulo entre diagonales u otros datos."
    },
    {
      "q": "¿Y si las diagonales son iguales?",
      "a": "Sale un cuadrado: un rombo con ángulos rectos. El cálculo no cambia: el lado resulta d/√2 y la altura coincide con el lado."
    },
    {
      "q": "¿Puedo usar un lado y un ángulo en su lugar?",
      "a": "Matemáticamente sí, pero esta calculadora pide diagonales. En la práctica son más fáciles de obtener: un ángulo necesita un transportador y una diagonal, solo una regla."
    },
    {
      "q": "¿Por qué la altura es menor que el lado?",
      "a": "La altura es la distancia entre dos lados paralelos, mientras que el propio lado va inclinado. Coincidirían solo en un cuadrado apoyado sobre su lado, es decir, con ángulo recto."
    },
    {
      "q": "¿Bastan diagonales perpendiculares para todas las fórmulas del rombo?",
      "a": "No. También deben bisecarse y los cuatro lados han de ser iguales. Otro cuadrilátero con diagonales perpendiculares puede compartir la fórmula de área, pero √((d₁/2)²+(d₂/2)²) para el lado y 4a para el perímetro no son fórmulas generales."
    }
  ],
  "disclaimer": "Se supone que las diagonales son perpendiculares y se bisecan, como en un rombo. Dos longitudes de diagonal no determinan de este modo un cuadrilátero cualquiera. Todas las dimensiones deben ser positivas; los resultados se redondean."
};
