import type { CalculatorCopy } from '../../lib/platform/types';

export const proportionCopyEs: CalculatorCopy = {
  "name": "Calculadora de proporciones",
  "slug": "calculadora-de-proporciones",
  "shortDescription": "Resuelve a : b = c : d para cualquiera de los cuatro términos.",
  "seoTitle": "Calculadora de proporciones — resolver a : b = c : d en línea",
  "seoDescription": "Halla cualquier término de una proporción por multiplicación cruzada, con la proporción completa y la comprobación.",
  "h1": "Calculadora de proporciones",
  "keywords": [
    "calculadora de proporciones",
    "multiplicación cruzada",
    "regla de tres"
  ],
  "longDescription": "Resuelve a/b = c/d para el término seleccionado. Su campo se oculta: introduce solo los tres valores conocidos. Los denominadores b y d deben seguir siendo distintos de cero tras el cálculo. El término diagonalmente opuesto también debe ser no nulo para obtener una respuesta única mediante la fórmula elegida. Los numeradores a o c pueden valer cero. Se muestran el término, la proporción completa, el cociente y los productos cruzados.",
  "howItWorks": "Con b ≠ 0 y d ≠ 0, a/b = c/d equivale a ad = bc. Por tanto, a = bc/d, b = ad/c, c = ad/b y d = bc/a, con divisor no nulo en la fórmula elegida. El producto binario intermedio se conserva exactamente antes de redondear el cociente.",
  "example": "En 2 : 3 = 4 : d el cuarto término es 3 × 4 ÷ 2 = 6.",
  "howToUse": [
    "Elige qué término hay que hallar.",
    "Rellena los tres términos conocidos.",
    "Consulta la respuesta y la comprobación."
  ],
  "faq": [
    {
      "q": "¿Por qué se oculta uno de los campos?",
      "a": "El término que estás despejando se calcula, así que dejarlo a la vista invitaría a escribir un valor que luego se ignora."
    },
    {
      "q": "¿Qué término no puede ser cero?",
      "a": "La igualdad original exige b ≠ 0 y d ≠ 0. El término diagonalmente opuesto también debe ser no nulo para dividir en la fórmula elegida. Un divisor cero puede producir ninguna solución o muchas; esta página no clasifica esos casos."
    },
    {
      "q": "¿Los términos pueden ser negativos?",
      "a": "Sí, se admiten valores negativos y fraccionarios finitos con denominadores y divisor de la fórmula no nulos. Un numerador cero es válido, pero 0/0 no es una razón definida."
    },
    {
      "q": "¿Qué es la comprobación de los productos?",
      "a": "a·d y b·c usan el término calculado internamente antes del redondeo de presentación. Es una comprobación numérica, no una prueba de exactitud de los datos decimales: el término redondeado mostrado puede no reproducir literalmente los productos."
    }
  ],
  "disclaimer": "Los tres valores conocidos deben ser finitos. El término, el cociente y los productos mostrados deben caber en el rango numérico sin perder valores no nulos al redondearse a cero; en caso contrario aparece un error. La notación normal redondea a cuatro decimales; los valores muy pequeños y grandes usan notación científica."
};
