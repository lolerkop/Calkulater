import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRightTriangleCopyEs: CalculatorCopy = {
  "name": "Calculadora de triángulo rectángulo",
  "slug": "triangulo-rectangulo",
  "shortDescription": "Hipotenusa, cateto, área y perímetro por el teorema de Pitágoras.",
  "seoTitle": "Calculadora de triángulo rectángulo — hipotenusa y cateto",
  "seoDescription": "Halla la hipotenusa a partir de dos catetos o el cateto que falta a partir de la hipotenusa, además del área y el perímetro de un triángulo rectángulo.",
  "h1": "Calculadora de triángulo rectángulo",
  "keywords": [
    "triángulo rectángulo",
    "teorema de Pitágoras",
    "hallar la hipotenusa",
    "hallar el cateto"
  ],
  "longDescription": "Completa un triángulo rectángulo en cualquier sentido: dos catetos dan la hipotenusa, y un cateto más la hipotenusa dan el otro cateto. El segundo modo es el más estricto: la hipotenusa debe ser más larga que el cateto, o el valor bajo la raíz se vuelve negativo y el resultado deja de existir. Este es el cálculo que hay detrás del truco del 3-4-5 con que los albañiles comprueban una esquina a escuadra.",
  "howItWorks": "a² + b² = c², de donde c = √(a² + b²) y b = √(c² − a²). El área de un triángulo rectángulo es la mitad del producto de sus catetos.",
  "example": "Catetos de 3 y 4 m dan una hipotenusa de 5 m, un área de 6 m² y un perímetro de 12 m.",
  "howToUse": [
    "Elige dos catetos, o un cateto y la hipotenusa.",
    "Los catetos forman el ángulo recto; la hipotenusa está enfrente.",
    "Usa longitudes positivas en una sola unidad.",
    "En el modo inverso la hipotenusa debe ser estrictamente mayor que el cateto conocido.",
    "Un triángulo general requiere otro cálculo."
  ],
  "faq": [
    {
      "q": "¿Por qué la hipotenusa no puede ser igual a un cateto?",
      "a": "La hipotenusa es el lado más largo de un triángulo rectángulo. Si fueran iguales, el otro cateto valdría cero y el triángulo se degeneraría en un segmento."
    },
    {
      "q": "¿Qué es la regla del 3-4-5?",
      "a": "Un truco de replanteo: marca 3 y 4 unidades sobre dos lados, y si la diagonal mide exactamente 5, el ángulo entre ellos es recto. Es un caso particular del teorema de Pitágoras."
    },
    {
      "q": "¿Cómo se calcula el área?",
      "a": "Como la mitad del producto de los catetos: son perpendiculares, así que uno hace de base y el otro de altura."
    },
    {
      "q": "¿La hipotenusa puede ser más corta que un cateto?",
      "a": "No. Ese conjunto de datos no describe un triángulo, y la calculadora lo dice en lugar de devolver la raíz de un número negativo."
    },
    {
      "q": "¿Por qué importan las medidas cuando hipotenusa y cateto casi coinciden?",
      "a": "El otro cateto es b = √((c−a)(c+a)). Una diferencia c−a pequeña puede tener un gran error relativo. Redondear c y a al mismo valor crea un caso degenerado; conserva la precisión original de las medidas."
    }
  ],
  "disclaimer": "El ángulo recto es una condición del modelo; dos longitudes no lo demuestran. Se excluyen los casos de área cero. Un resultado redondeado no sustituye la comprobación de ángulos, tolerancias y precisión de las medidas."
};
