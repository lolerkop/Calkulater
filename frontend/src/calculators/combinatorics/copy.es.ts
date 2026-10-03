import type { CalculatorCopy } from '../../lib/platform/types';

export const combinatoricsCopyEs: CalculatorCopy = {
  "name": "Calculadora de combinaciones y permutaciones",
  "slug": "combinaciones-y-permutaciones",
  "shortDescription": "Combinaciones y permutaciones, con o sin repetición.",
  "seoTitle": "Calculadora de combinaciones y permutaciones — nCr y nPr",
  "seoDescription": "Calcula combinaciones y permutaciones con o sin repetición, con resultados enteros exactos.",
  "h1": "Calculadora de combinaciones y permutaciones",
  "keywords": [
    "calculadora de combinaciones",
    "calculadora de permutaciones",
    "nCr nPr",
    "combinatoria"
  ],
  "longDescription": "Cuenta selecciones en cuatro modelos: combinaciones sin importar el orden o selecciones ordenadas, con o sin repetición. n y k son enteros entre 0 y 1000; sin repetición, k no puede superar n. La selección vacía k = 0 tiene una posibilidad en todos los modos, incluso con n = 0. Con n = 0 y k > 0, la repetición da cero posibilidades. El resultado principal es un entero BigInt exacto con todas sus cifras; la notación científica adicional es solo una aproximación abreviada.",
  "howItWorks": "Sin repetición: C(n,k) = n!/[k!(n−k)!] y P(n,k) = n!/(n−k)!. Con repetición y n ≥ 1: C(n+k−1,k) y nᵏ. Para k = 0, la selección vacía cuenta una vez; para n = 0 y k > 0 con repetición, el resultado es cero. La aritmética entera es exacta y no convierte el resultado a Number.",
  "example": "Elegir 5 cartas de 52 da C(52, 5) = 2 598 960 manos posibles.",
  "howToUse": [
    "Elige combinaciones o permutaciones.",
    "Indica si se permite la repetición.",
    "Introduce el tamaño del conjunto y el de la muestra."
  ],
  "faq": [
    {
      "q": "¿Qué diferencia hay entre combinaciones y permutaciones?",
      "a": "El orden. Las combinaciones tratan AB y BA como la misma selección; las permutaciones las cuentan por separado."
    },
    {
      "q": "¿Cuándo puede la muestra superar al conjunto?",
      "a": "Solo con repetición permitida. Sacar 5 elementos de 3 clases tiene sentido si cada clase puede tomarse más de una vez."
    },
    {
      "q": "¿Por qué el resultado se calcula con enteros exactos?",
      "a": "BigInt conserva todas las cifras enteras. Por encima de 9007199254740991, Number no garantiza exactitud para todos los enteros, aunque algunos valores siguen siendo exactos. C(60,30) = 118264581564861424 es representable, pero C(61,30) = 232714176627630544 no lo es."
    },
    {
      "q": "¿Por qué hay un límite superior?",
      "a": "n, k ≤ 1000 limita los bucles y la longitud de la salida en esta página. No es un límite matemático: C(n,0) = 1 también para n mayores. Los coeficientes binomiales se calculan con multiplicaciones y divisiones exactas sucesivas."
    }
  ]
};
