import type { CalculatorCopy } from '../../lib/platform/types';

export const factorialCopyEs: CalculatorCopy = {
  "name": "Calculadora de factorial",
  "slug": "calculadora-de-factorial",
  "shortDescription": "n! exacto para números enteros hasta 170.",
  "seoTitle": "Calculadora de factorial — n! exacto hasta 170",
  "seoDescription": "Calcula el factorial exacto de un número entero hasta 170, con el número de cifras y la notación científica al lado.",
  "h1": "Calculadora de factorial",
  "keywords": [
    "calculadora de factorial",
    "n factorial",
    "factorial exacto"
  ],
  "longDescription": "Calcula n! como entero exacto para n de 0 a 170. BigInt conserva todas las cifras del producto; al lado aparecen el número de cifras y una forma científica breve. Ya 20! supera el límite entero seguro general del tipo numérico habitual, aunque 20! todavía es representable exactamente. Eso no implica que todos los factoriales mayores empiecen a redondearse en el mismo paso.",
  "howItWorks": "n! es el producto de todos los enteros de 1 a n, y 0! se define como 1.",
  "example": "10! son 3 628 800, y 20! ya son 2 432 902 008 176 640 000.",
  "howToUse": [
    "Introduce un número entero de 0 a 170.",
    "Consulta el valor exacto.",
    "Comprueba el número de cifras en los resultados muy grandes."
  ],
  "faq": [
    {
      "q": "¿Por qué se para en 170?",
      "a": "Es un límite de esta página, no de la aritmética. 170! ya tiene 307 cifras, y más allá la respuesta deja de ser algo que se pueda leer."
    },
    {
      "q": "¿El resultado es exacto?",
      "a": "Sí, el valor principal conserva todas las cifras mediante BigInt. Superar 2⁵³ − 1 elimina la garantía general de enteros exactos del tipo numérico habitual, sin forzar un error precisamente en 20!. La fila científica abreviada no sustituye al valor completo."
    },
    {
      "q": "¿Por qué 0! vale uno?",
      "a": "Es el producto vacío: multiplicar nada deja el elemento neutro del producto, y la definición mantiene coherentes las fórmulas combinatorias."
    },
    {
      "q": "¿Puedo usar un número con decimales?",
      "a": "No, esta página solo admite enteros de 0 a 170. La extensión usa Γ(n + 1), no Γ(n), y requiere un cálculo aparte con su propio dominio."
    }
  ],
  "disclaimer": "El límite de 170 es una regla de la página, no un límite matemático del factorial ni de BigInt. El resultado principal es exacto. La forma científica conserva las primeras siete cifras sin redondear la última; los resultados de una cifra muestran una sola. El valor de 170! tiene 307 cifras. Se rechazan entradas fraccionarias, negativas, vacías o incorrectas."
};
