import type { CalculatorCopy } from '../../lib/platform/types';

export const arithmeticProgressionCopyEs: CalculatorCopy = {
  "name": "Calculadora de progresión aritmética",
  "slug": "progresion-aritmetica",
  "shortDescription": "El término n-ésimo y la suma de una progresión aritmética a partir del primer término y la diferencia.",
  "seoTitle": "Calculadora de progresión aritmética online",
  "seoDescription": "Halla el término n-ésimo y la suma de una progresión aritmética a partir del primer término, la diferencia y el número de término.",
  "h1": "Calculadora de progresión aritmética",
  "keywords": [
    "progresión aritmética",
    "término n-ésimo",
    "suma de una progresión",
    "diferencia común"
  ],
  "longDescription": "Calcula el término n y la suma de los primeros n términos a partir de a₁ y la diferencia constante d. Una diferencia negativa produce una sucesión decreciente; cero, una constante. El índice debe ser un entero entre 1 y 9007199254740991. La tabla muestra los diez primeros términos y los resultados abarcan los n términos. Las fórmulas cerradas evitan recorrer una sucesión enorme; los productos y sumas binarios intermedios se conservan hasta el redondeo final.",
  "howItWorks": "El término n-ésimo es aₙ = a₁ + (n−1)d. La suma de los n primeros términos es Sₙ = n(a₁ + aₙ)/2: el número de términos por la media del primero y el último.",
  "example": "Con a₁ = 3 y d = 5, el décimo término es 48 y la suma de los diez primeros es 255.",
  "howToUse": [
    "Introduce el primer término de la progresión.",
    "Introduce la diferencia: cuánto suma cada término al anterior.",
    "Introduce el número del término que necesitas.",
    "Para una serie decreciente usa una diferencia negativa."
  ],
  "faq": [
    {
      "q": "¿En qué se diferencia una progresión aritmética de una geométrica?",
      "a": "Una progresión aritmética suma una diferencia constante; una geométrica multiplica por una razón constante. Una geométrica no tiene por qué crecer: con a₁ > 0 y 0 < r < 1 decrece."
    },
    {
      "q": "¿La diferencia puede ser negativa?",
      "a": "Sí, y es el caso decreciente de toda la vida. Con a₁ = 100 y d = −7, el término decimoquinto es 2 y la suma de quince términos es 765."
    },
    {
      "q": "¿Por qué la suma se calcula con una fórmula y no sumando?",
      "a": "Sₙ = n(a₁ + aₙ)/2 evita sumar n términos en un bucle. Esta implementación conserva la aritmética binaria intermedia exacta y redondea cada resultado numérico al final. Las entradas decimales arbitrarias y las cifras mostradas siguen teniendo precisión finita."
    },
    {
      "q": "¿Qué ocurre cuando la diferencia es cero?",
      "a": "La serie se vuelve constante: todos los términos valen lo mismo que el primero, y la suma es el primer término por el número de términos. Las fórmulas siguen funcionando sin casos especiales."
    },
    {
      "q": "¿Por qué la tabla muestra solo diez términos?",
      "a": "El patrón ya se ve con los tres primeros, y cientos de filas no añadirían nada. El término n-ésimo y la suma se calculan igualmente para la serie completa y no para el trozo mostrado."
    }
  ],
  "disclaimer": "a₁ y d deben ser finitos. El desbordamiento o la pérdida de un término o suma no nulos al redondearse a cero generan un error, también en la tabla. Los valores pequeños y grandes usan notación científica; la presentación está redondeada."
};
