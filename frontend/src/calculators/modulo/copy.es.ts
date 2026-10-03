import type { CalculatorCopy } from '../../lib/platform/types';

export const moduloCopyEs: CalculatorCopy = {
  "name": "Calculadora de resto",
  "slug": "calculadora-de-resto",
  "shortDescription": "Divide con resto y consulta el cociente y la comprobación.",
  "seoTitle": "Calculadora de resto — división con resto en línea",
  "seoDescription": "Divide números enteros con resto: resto, cociente y la comprobación a = b × q + r.",
  "h1": "Calculadora de resto",
  "keywords": [
    "calculadora de resto",
    "división con resto",
    "módulo"
  ],
  "longDescription": "Divide el entero a entre el entero no nulo b y muestra el cociente q, el resto r y la identidad a = bq + r exactos. Aquí el cociente se trunca hacia cero, como en las operaciones enteras de JavaScript: el resto no nulo tiene el signo del dividendo. Otros convenios pueden dar resultados distintos con números negativos.",
  "howItWorks": "El cociente es la división truncada hacia cero; el resto es lo que deja la identidad a = b × q + r.",
  "example": "17 entre 5 da cociente 3 y resto 2, porque 17 = 5 × 3 + 2.",
  "howToUse": [
    "Introduce el dividendo.",
    "Introduce el divisor.",
    "Consulta el resto y el cociente."
  ],
  "faq": [
    {
      "q": "¿Qué ocurre con los números negativos?",
      "a": "El resto toma el signo del dividendo: −17 y 5 dan cociente −3 y resto −2, ya que −17 = 5 × (−3) + (−2)."
    },
    {
      "q": "¿Es lo mismo que el módulo de Python?",
      "a": "No. Python devuelve un resto con el signo del divisor, así que allí −17 mod 5 es 3. Esta calculadora sigue el convenio de truncamiento."
    },
    {
      "q": "¿Puedo usar decimales?",
      "a": "No. La división con resto está definida para números enteros, así que un dato decimal se rechaza en vez de redondearse."
    },
    {
      "q": "¿Por qué se muestra la línea de comprobación?",
      "a": "Hace la respuesta verificable de un vistazo: multiplica el divisor por el cociente, suma el resto y recuperas el dividendo."
    }
  ],
  "disclaimer": "Cada entrada debe ser un entero con valor absoluto máximo de 9007199254740991; b ≠ 0. Las entradas no se redondean a enteros. La división y el resto se calculan con aritmética entera exacta. Para 17 ÷ −5, el truncamiento da q = −3 y r = 2; este convenio no exige un resto no negativo para todos los signos."
};
