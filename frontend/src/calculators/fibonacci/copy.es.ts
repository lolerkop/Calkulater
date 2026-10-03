import type { CalculatorCopy } from '../../lib/platform/types';

export const fibonacciCopyEs: CalculatorCopy = {
  "name": "Calculadora de Fibonacci",
  "slug": "calculadora-de-fibonacci",
  "shortDescription": "El n-ésimo número de Fibonacci, la suma de la serie y la razón entre términos vecinos.",
  "seoTitle": "Calculadora de Fibonacci en línea",
  "seoDescription": "Halla el n-ésimo número de Fibonacci, la suma de la serie y la razón entre términos vecinos, que se acerca al número áureo.",
  "h1": "Calculadora de Fibonacci",
  "keywords": [
    "calculadora de fibonacci",
    "sucesión de fibonacci",
    "n-ésimo número de fibonacci",
    "número áureo"
  ],
  "longDescription": "Calcula un término, la suma de los primeros n términos incluido el término solicitado y el anterior. Aquí F₁ = 0 y F₂ = 1: el primer índice corresponde a cero. Desde n = 3 se muestra también la razón aproximada respecto al término anterior. BigInt conserva todas las cifras de los términos y sumas enteros. Se admiten índices enteros entre 1 y 78; este límite de la página no es un límite de la recurrencia ni de BigInt. La tabla muestra diez términos.",
  "howItWorks": "F₁ = 0, F₂ = 1 y Fₙ = Fₙ₋₁ + Fₙ₋₂. Los primeros n términos suman Fₙ₊₂ − 1. La convención habitual F₀ = 0 empieza un índice antes: compara los términos iniciales al usar un índice de otra fuente.",
  "example": "El vigésimo término es 4181, la suma de los veinte primeros es 10 945 y la razón respecto al anterior ya es 1,618.",
  "howToUse": [
    "Introduce la posición del término que necesitas.",
    "La numeración empieza en F₁ = 0 y F₂ = 1.",
    "Están disponibles las posiciones de la primera a la septuagésima octava.",
    "La razón respecto al anterior aparece a partir del tercero."
  ],
  "faq": [
    {
      "q": "¿Dónde empieza la serie?",
      "a": "Aquí empieza en cero: F₁ = 0, F₂ = 1, F₃ = 1, F₄ = 2 y así sucesivamente. Otra convención habitual hace que el primer término sea 1, lo que desplaza todas las posiciones: el décimo término sería entonces 55 en lugar de 34."
    },
    {
      "q": "¿Por qué no puedo pasar del término 78?",
      "a": "78 es el límite conservado de esta página. Con esta numeración, el término 79 vale 8944394323791464 y sigue siendo un entero seguro de Number; el término 80 supera el límite general de enteros seguros. BigInt podría continuar, pero esta página no admite esos índices."
    },
    {
      "q": "¿Qué relación tiene la serie con el número áureo?",
      "a": "La razón entre términos vecinos se acerca a 1,6180339… conforme crece la posición. En el décimo término ya vale 1,619 y en el vigésimo es indistinguible del límite con cuatro decimales."
    },
    {
      "q": "¿Por qué los dos primeros términos no tienen razón?",
      "a": "Porque no hay entre qué dividir: el primero no tiene predecesor y el predecesor del segundo es cero. Omitir la fila es más honesto que escribir infinito."
    },
    {
      "q": "¿Cuánto suman los n primeros términos?",
      "a": "Siempre uno menos que el término de la posición n+2. La suma de los diez primeros es 88 y el duodécimo término es 89."
    }
  ]
};
