import type { CalculatorCopy } from '../../lib/platform/types';

export const quadraticEquationCopyEs: CalculatorCopy = {
  "name": "Calculadora de ecuaciones de segundo grado",
  "slug": "ecuacion-de-segundo-grado",
  "shortDescription": "Resuelve ax² + bx + c = 0 y consulta el discriminante.",
  "seoTitle": "Calculadora de ecuaciones de segundo grado — raíces y discriminante",
  "seoDescription": "Raíces de ax² + bx + c = 0, discriminante y coordenada x del vértice con a ≠ 0. Raíces reales y comprobación del rango numérico.",
  "h1": "Calculadora de ecuaciones de segundo grado",
  "keywords": [
    "ecuación de segundo grado",
    "discriminante",
    "raíces de una ecuación"
  ],
  "longDescription": "Resuelve ax² + bx + c = 0 con a ≠ 0 en los números reales. Muestra el discriminante, el número de raíces reales distintas y la coordenada x del vértice. Si D = 0, la única raíz mostrada tiene multiplicidad dos. Las raíces complejas y el caso lineal a = 0 quedan fuera de este modelo.",
  "howItWorks": "D = b² − 4ac: si D > 0, x₁,₂ = (−b ± √D)/(2a); si D = 0, x = −b/(2a); si D < 0 no hay raíces reales. El eje de simetría es xV = −b/(2a). El vértice es el par (xV, f(xV)), pero aquí solo se muestra xV. El cálculo de dos raíces usa una variante numéricamente estable y la relación x₁x₂ = c/a.",
  "example": "x² − 5x + 6 tiene D = 1 y raíces 3 y 2, porque se factoriza como (x − 3)(x − 2).",
  "howToUse": [
    "Introduce el coeficiente a, que no puede ser cero.",
    "Introduce los coeficientes b y c.",
    "Consulta las raíces y el discriminante."
  ],
  "faq": [
    {
      "q": "¿Por qué se rechaza a = 0?",
      "a": "La ecuación deja de ser de segundo grado. Responder al caso lineal daría un resultado verosímil a una pregunta distinta."
    },
    {
      "q": "¿Y las raíces complejas?",
      "a": "Quedan fuera de esta calculadora. Con discriminante negativo indica que no hay raíces reales."
    },
    {
      "q": "¿Para qué sirve el vértice?",
      "a": "El vértice está sobre el eje de simetría xV = −b/(2a). Esta es su coordenada x, no el par completo ni el valor mínimo o máximo de la función. Ese valor requiere calcular f(xV) por separado."
    },
    {
      "q": "¿Cómo se redondean las raíces?",
      "a": "Normalmente los enteros aparecen sin decimales y los demás valores con cuatro decimales. Para 0 < |x| < 0,0001 o |x| ≥ 10¹² se usa notación científica con seis cifras significativas para que una raíz pequeña no nula no parezca cero."
    }
  ],
  "disclaimer": "Los coeficientes deben ser finitos, con a ≠ 0. Se calcula con su representación numérica binaria. Las raíces se muestran normalmente con cuatro decimales; para |x| < 0,0001 o ≥ 10¹² se usa notación científica con seis cifras significativas. Un discriminante, coordenada x del vértice o raíz no representable genera un error de rango en lugar de desbordamiento o cero falso."
};
