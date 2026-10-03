import type { CalculatorCopy } from '../../lib/platform/types';

export const geomTrapezoidCopyEs: CalculatorCopy = {
  "name": "Calculadora de trapecio",
  "slug": "calculadora-de-trapecio",
  "shortDescription": "Área de un trapecio a partir de sus dos bases y la altura; perímetro con los lados oblicuos.",
  "seoTitle": "Calculadora de trapecio — área y perímetro",
  "seoDescription": "Calcula el área de un trapecio a partir de sus dos bases y su altura, y el perímetro a partir de sus lados oblicuos.",
  "h1": "Calculadora de trapecio",
  "keywords": [
    "calculadora de trapecio",
    "área de un trapecio",
    "perímetro de un trapecio"
  ],
  "longDescription": "Calcula el área de un trapecio como la semisuma de los dos lados paralelos por la altura: la fórmula que hay detrás de una parcela en pendiente, un faldón de cubierta o la pared de una tolva. Los lados oblicuos son opcionales: sin ellos obtienes el área, y con ellos también el perímetro. La altura aquí es la distancia perpendicular entre las bases, no la longitud de un lado oblicuo, y ese es el error más frecuente al medir.",
  "howItWorks": "S = ((a + b) ÷ 2) · h: el área es la base media por la altura; el perímetro es la suma de los cuatro lados.",
  "example": "Bases de 10 y 6 m con altura de 4 m dan base media de 8 m y área de 32 m². Sin los lados laterales se desconoce el perímetro. Otro ejemplo compatible: bases de 8 y 2 m, altura de 4 m y lados de 5 m; base media de 5 m, área de 20 m² y perímetro de 20 m.",
  "howToUse": [
    "Introduce las dos bases paralelas y su separación perpendicular en una misma unidad.",
    "Para calcular solo el área deja ambos lados laterales vacíos o a cero.",
    "Para el perímetro introduce los dos lados positivos, compatibles con bases y altura.",
    "Una longitud sobre una pendiente se mide en el plano de la figura, no en su proyección."
  ],
  "faq": [
    {
      "q": "¿Qué altura pide la fórmula?",
      "a": "La distancia perpendicular entre las rectas que contienen las bases. Un lado lateral no es menor que la altura; en un trapecio rectángulo uno puede coincidir con ella. Esa igualdad no hace degenerado todo el trapecio."
    },
    {
      "q": "¿Qué es la base media?",
      "a": "El segmento que une los puntos medios de los lados oblicuos. Vale la semisuma de las bases, y el área es sencillamente la base media por la altura."
    },
    {
      "q": "¿Hay que introducir los lados oblicuos?",
      "a": "No. Dos lados vacíos o a cero indican que no se solicita perímetro; área y base media siguen disponibles. El perímetro necesita ambos lados positivos, no menores que la altura y compatibles con las bases. Un lado ausente no se deduce automáticamente."
    },
    {
      "q": "¿La fórmula vale para cualquier trapecio?",
      "a": "Sí: isósceles, rectángulo o irregular. Lo único que importa es que las dos bases introducidas sean el par de lados paralelos."
    },
    {
      "q": "¿Por qué se rechazan bases 10 y 6, altura 4 y lados de 5 y 5?",
      "a": "En un trapecio isósceles la proyección horizontal de cada lado es (10−6)/2 = 2. Con altura 4, el lado debe medir √20 ≈ 4,472, no 5. Los lados de 5 sí encajan con bases 8 y 2 y altura 4, con proyecciones de 3."
    }
  ],
  "disclaimer": "Figura plana convexa con bases paralelas y altura positiva; se aceptan bases iguales como paralelogramo. La comprobación de los lados admite solo redondeo de cálculo, no tolerancias de construcción. El área no incluye material de reserva."
};
