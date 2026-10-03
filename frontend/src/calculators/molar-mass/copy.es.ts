import type { CalculatorCopy } from '../../lib/platform/types';

export const molarMassCopyEs: CalculatorCopy = {
  "name": "Calculadora de masa molar",
  "slug": "calculadora-de-masa-molar",
  "shortDescription": "Masa molar a partir de una fórmula química, con la aportación de cada elemento desglosada.",
  "seoTitle": "Calculadora de masa molar a partir de una fórmula química",
  "seoDescription": "Calcula la masa molar a partir de una fórmula química, con la aportación de cada elemento y su proporción de la masa total.",
  "h1": "Calculadora de masa molar",
  "keywords": [
    "calculadora de masa molar",
    "calculadora de peso molecular",
    "masa fórmula",
    "calculadora g/mol"
  ],
  "longDescription": "Analiza fórmulas con los ocho elementos admitidos H, C, N, O, Na, S, Cl y Ca. Calcula masa molar y composición con pesos atómicos estándar aproximados asignados. Admite paréntesis y cifras enteras ordinarias; no admite la notación de hidratos con punto, cargas, isótopos ni otros elementos.",
  "howToUse": [
    "Introduce la fórmula en letras latinas: el símbolo del elemento en mayúscula inicial y el índice como número.",
    "Usa paréntesis para los grupos: Ca(OH)2.",
    "La masa molar puede pasarse directamente a la calculadora de cantidad de sustancia."
  ],
  "howItWorks": "La fórmula se analiza carácter a carácter, y un multiplicador tras un paréntesis de cierre se aplica a todo el grupo. Las masas de los elementos se multiplican por su número de átomos y se suman.",
  "example": "El ácido sulfúrico H2SO4 pesa 98,072 g/mol, de los que casi dos tercios son oxígeno.",
  "faq": [
    {
      "q": "¿Por qué no toda la tabla periódica?",
      "a": "Porque las masas atómicas son valores de referencia y no pueden escribirse de memoria: un error en la tercera cifra parece verosímil y ningún cálculo lo delataría. Ampliar la tabla exige contrastarla con una fuente primaria."
    },
    {
      "q": "¿De dónde salen las masas atómicas?",
      "a": "Son los pesos atómicos estándar de la IUPAC en forma abreviada, los mismos valores que imprimen las tablas de referencia."
    },
    {
      "q": "¿Cómo introduzco fórmulas y grupos?",
      "a": "Usa símbolos latinos y cifras ordinarias, como H2SO4 o Ca(OH)2. Respeta las mayúsculas, por ejemplo Cl. El multiplicador tras un paréntesis afecta a todo el grupo; se rechazan los grupos vacíos y los índices cero."
    },
    {
      "q": "¿Cómo escribo un hidrato admitido?",
      "a": "Para CaSO4·2H2O introduce CaSO4(H2O)2: se admiten Ca, S, O y H, pero no la notación con punto. El factor 2 añade cuatro átomos H y dos O. Los ejemplos con Cu o Al no funcionan porque esos elementos no están en la tabla."
    },
    {
      "q": "¿Qué límites tiene el análisis?",
      "a": "Como máximo 1000 caracteres tras quitar espacios y 64 niveles de paréntesis. Los índices y el número total de átomos deben ser enteros positivos representables con seguridad, como máximo 9007199254740991. Otros símbolos y los valores fuera de estos límites producen un error."
    }
  ],
  "disclaimer": "Cálculo para H, C, N, O, Na, S, Cl y Ca con pesos atómicos estándar aproximados. No se consideran la composición isotópica, las cargas ni otros elementos."
};
