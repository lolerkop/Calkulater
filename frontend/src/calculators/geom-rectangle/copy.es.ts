import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRectangleCopyEs: CalculatorCopy = {
  "name": "Calculadora de rectángulo",
  "slug": "calculadora-de-rectangulo",
  "shortDescription": "Área, perímetro y diagonal de un rectángulo a partir de sus lados o de su área.",
  "seoTitle": "Calculadora de rectángulo — área, perímetro y diagonal",
  "seoDescription": "Calcula el área, el perímetro y la diagonal de un rectángulo a partir de dos lados, o halla el lado que falta a partir del área.",
  "h1": "Calculadora de rectángulo",
  "keywords": [
    "calculadora de rectángulo",
    "área de un rectángulo",
    "perímetro de un rectángulo",
    "diagonal del rectángulo"
  ],
  "longDescription": "Resuelve un rectángulo en ambos sentidos: dos lados dan el área, el perímetro y la diagonal, mientras que un área más un lado dan el otro lado. Ese segundo modo responde a la pregunta que surge de verdad al cortar o al planificar una estancia: «necesito 30 m² y el ancho es de 6 m, ¿qué largo tiene la pieza?». La diagonal sale del teorema de Pitágoras y es la que se mide para comprobar que las esquinas están realmente a escuadra.",
  "howItWorks": "S = a · b, P = 2(a + b) y d = √(a² + b²); en el segundo modo el lado que falta es b = S ÷ a.",
  "example": "Una habitación de 8 × 3 m tiene un área de 24 m², un perímetro de 22 m y una diagonal de 8,544 m.",
  "howToUse": [
    "En el modo de lados mide dos lados adyacentes del rectángulo.",
    "En el modo de área introduce un área positiva y un lado positivo.",
    "Usa una unidad común para las longitudes y su cuadrado para el área.",
    "Al comprobar un trazado real, verifica además la forma y ambas diagonales."
  ],
  "faq": [
    {
      "q": "¿Para qué sirve la diagonal?",
      "a": "Una diagonal d = √(a²+b²) comprueba el ángulo recto entre los lados adyacentes correspondientes, medidos de forma independiente. Una sola coincidencia no demuestra los cuatro ángulos de un cuadrilátero cualquiera. Verifica también lados opuestos, la otra diagonal y precisión de las medidas."
    },
    {
      "q": "¿Cómo hallo el segundo lado a partir del área?",
      "a": "Elige el modo «el área y un lado»: el otro lado sale por división, y el perímetro y la diagonal se calculan después con ambos."
    },
    {
      "q": "¿Y si los dos lados son iguales?",
      "a": "Sale un cuadrado. El cálculo lo admite y devuelve valores correctos; la figura es sencillamente un caso particular."
    },
    {
      "q": "¿Por qué no puedo convertir el área multiplicando por 100?",
      "a": "Porque pasar de metros a centímetros eleva al cuadrado el factor lineal: un metro cuadrado son 10.000 centímetros cuadrados, no 100."
    },
    {
      "q": "¿El área por sí sola determina un rectángulo?",
      "a": "No. Un área de 24 m² puede corresponder a lados de 8 y 3 m, o de 6 y 4 m; sus perímetros son 22 y 20 m. Por eso el modo inverso necesita también un lado."
    }
  ],
  "disclaimer": "Modelo de rectángulo, con cuatro ángulos rectos supuestos. Una diagonal coincidente solo comprueba el ángulo entre los dos lados correspondientes. El área no incluye reservas, juntas ni desperdicios; los resultados se redondean."
};
