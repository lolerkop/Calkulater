import type { CalculatorCopy } from '../../lib/platform/types';

export const primeFactorizationCopyEs: CalculatorCopy = {
  "name": "Calculadora de factorización en primos",
  "slug": "factorizacion-en-primos",
  "shortDescription": "Descompón un número en factores primos y cuenta sus divisores.",
  "seoTitle": "Calculadora de factorización en primos — descomponer un número",
  "seoDescription": "Descompón un número entero en factores primos y consulta la forma canónica con exponentes y el número de divisores.",
  "h1": "Calculadora de factorización en primos",
  "keywords": [
    "factorización en primos",
    "factores primos",
    "divisores de un número"
  ],
  "longDescription": "Descompone un entero entre 2 y 1000000000000 en factores primos y muestra la notación con exponentes, el número de primos distintos y la cantidad de divisores positivos. Primero se eliminan todos los factores 2; después se prueban candidatos impares hasta la raíz del resto actual. Si queda un resto mayor que uno, se añade como factor primo. La descomposición es única salvo por el orden de los factores.",
  "howItWorks": "La división por tanteo llega hasta la raíz cuadrada del número; lo que queda por encima de uno es primo en sí mismo.",
  "example": "360 = 2³ · 3² · 5 da (3+1)(2+1)(1+1) = 24 divisores. Al quitar los factores 2 queda 45; al quitar los factores 3 queda 5, que se añade como primo restante.",
  "howToUse": [
    "Introduce un número entero de dos en adelante.",
    "Consulta la descomposición.",
    "Comprueba el número de divisores si lo necesitas."
  ],
  "faq": [
    {
      "q": "¿Cómo se obtiene el número de divisores?",
      "a": "Multiplicando cada exponente aumentado en uno. Para 2³ · 3² · 5 son 4 × 3 × 2 = 24."
    },
    {
      "q": "¿Por qué no puedo descomponer el uno?",
      "a": "Esta página admite números desde 2. El uno no tiene factores primos; puede representarse mediante el producto vacío, igual a 1. El uno no es primo: un primo tiene exactamente dos divisores positivos distintos."
    },
    {
      "q": "¿Hay un límite superior?",
      "a": "Aquí se admite n ≤ 10¹². El límite acota el coste de la división de prueba, no el inicio de la pérdida de precisión de Number: el límite general de enteros seguros es 9007199254740991."
    },
    {
      "q": "¿Cómo sé si un número es primo?",
      "a": "Su descomposición es el propio número, y la calculadora lo dice en una línea aparte."
    }
  ]
};
