import type { CalculatorCopy } from '../../lib/platform/types';

export const geomTriangleCopyEs: CalculatorCopy = {
  "name": "Calculadora de triángulo",
  "slug": "calculadora-de-triangulo",
  "shortDescription": "Área del triángulo con tres lados o base y altura; perímetro y clasificación requieren los tres lados.",
  "seoTitle": "Calculadora de triángulo — área por tres lados o por la altura",
  "seoDescription": "Área del triángulo con tres lados o base y altura; perímetro y clasificación requieren los tres lados.",
  "h1": "Calculadora de triángulo",
  "keywords": [
    "calculadora de triángulo",
    "área de un triángulo",
    "fórmula de Herón",
    "perímetro de un triángulo"
  ],
  "longDescription": "Resuelve un triángulo de dos maneras: a partir de tres lados con la fórmula de Herón, o a partir de una base y su altura como la mitad de su producto. Los tres lados se comprueban antes contra la desigualdad triangular: si dos cualesquiera no superan al tercero, la figura no existe, y la calculadora lo dice en lugar de devolver un cero que se lee como una respuesta. También indica el tipo de triángulo: rectángulo, acutángulo u obtusángulo.",
  "howItWorks": "Primero p = (a+b+c)/2, después S = √(p(p−a)(p−b)(p−c)). Los cuatro factores son p y tres diferencias. El cálculo usa la expresión equivalente S = √[(a+b+c)(−a+b+c)(a−b+c)(a+b−c)/16], conservando las diferencias pequeñas antes de redondear. Con base a y altura perpendicular h: S = ah/2. El perímetro a+b+c y la clasificación por cuadrados de lados requieren los tres lados.",
  "example": "Un triángulo de lados 3, 4 y 5 m es rectángulo: su área son 6 m² y su perímetro, 12 m.",
  "howToUse": [
    "Elige tres lados, o una base y su altura perpendicular correspondiente.",
    "Introduce longitudes positivas en una misma unidad.",
    "En el modo de lados, dos cualesquiera deben sumar estrictamente más que el tercero; solo ese modo da perímetro y clasificación angular.",
    "Cerca de una forma plana, un pequeño error de medida puede cambiar mucho el área."
  ],
  "faq": [
    {
      "q": "¿Por qué se rechazan algunos conjuntos de lados?",
      "a": "Para obtener un área positiva, dos lados cualesquiera deben sumar más que el tercero. Con lados 1, 2 y 3 los puntos están en una línea: un caso degenerado de área cero, excluido de esta calculadora."
    },
    {
      "q": "¿Qué es la fórmula de Herón?",
      "a": "Primero p = (a+b+c)/2, después S = √(p(p−a)(p−b)(p−c)). Los cuatro factores son p y tres diferencias. El cálculo usa la expresión equivalente S = √[(a+b+c)(−a+b+c)(a−b+c)(a+b−c)/16], conservando las diferencias pequeñas antes de redondear."
    },
    {
      "q": "¿Cómo se decide el tipo de triángulo?",
      "a": "Comparando el cuadrado del lado mayor con la suma de los cuadrados de los otros dos: si son iguales es rectángulo, si es menor es acutángulo y si es mayor, obtusángulo."
    },
    {
      "q": "¿La altura debe corresponder a la base introducida?",
      "a": "Sí. La altura debe caer sobre la base que has introducido; si no, la mitad de su producto no es el área de este triángulo."
    },
    {
      "q": "¿La base y la altura determinan el perímetro del triángulo?",
      "a": "No. Con la misma base y altura, el área coincide pero los otros lados pueden variar. Base 6 y altura 4 dan área 12; en el triángulo simétrico los dos lados miden 5, pero cambian al desplazar el vértice."
    }
  ],
  "disclaimer": "Solo triángulos planos de área positiva. Los lados colineales quedan fuera del alcance de este cálculo. La clasificación compara los números introducidos sin tolerancia de medición; no certifica el ángulo de un objeto real. Los resultados se redondean."
};
