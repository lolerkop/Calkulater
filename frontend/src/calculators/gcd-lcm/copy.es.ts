import type { CalculatorCopy } from '../../lib/platform/types';

export const gcdLcmCopyEs: CalculatorCopy = {
  "name": "Calculadora de MCD y MCM",
  "slug": "calculadora-de-mcd-y-mcm",
  "shortDescription": "Máximo común divisor y mínimo común múltiplo de una lista de números.",
  "seoTitle": "Calculadora de MCD y MCM en línea",
  "seoDescription": "Halla el máximo común divisor y el mínimo común múltiplo de dos o más números. Lista de enteros positivos y resultados exactos.",
  "h1": "Calculadora de MCD y MCM",
  "keywords": [
    "calculadora de mcd",
    "calculadora de mcm",
    "máximo común divisor",
    "mínimo común múltiplo"
  ],
  "longDescription": "Halla el máximo común divisor y el mínimo común múltiplo positivo de una lista de enteros positivos. Ambos se acumulan por parejas con aritmética entera exacta. La fila de coprimos solo significa que el MCD de toda la lista es 1. Con tres o más números eso no equivale a que cada pareja sea coprima: 6, 10, 15 tienen MCD 1, pero MCM 30, no su producto 900.",
  "howItWorks": "El MCD de una lista se pliega por parejas con el algoritmo de Euclides: MCD(a,b,c) = MCD(MCD(a,b),c). El MCM sigue el mismo orden mediante MCM(a,b) = a ÷ MCD(a,b) × b. Ambos resultados son enteros exactos.",
  "example": "Para 24, 36, 60 y 84 el máximo común divisor es 12 y el mínimo común múltiplo, 2520.",
  "howToUse": [
    "Introduce dos o más números enteros.",
    "Sepáralos con espacios, punto y coma o saltos de línea.",
    "Los números deben ser enteros y mayores que cero.",
    "El resultado abarca toda la lista a la vez."
  ],
  "faq": [
    {
      "q": "¿Cuántos números puedo introducir?",
      "a": "Entre 2 y 1000 enteros positivos, en un máximo de 20000 caracteres. Es un límite de la página. El MCM también debe caber dentro de 9007199254740991."
    },
    {
      "q": "¿Por qué se rechazan las fracciones?",
      "a": "Esta herramienta trabaja solo con enteros positivos. Los racionales requieren una definición aparte de divisor y múltiplo comunes; el cálculo no transforma la tarea en operaciones con fracciones sin indicarlo."
    },
    {
      "q": "¿Qué significa la fila de coprimos?",
      "a": "No hay divisor mayor que 1 común a toda la lista. El MCM es el producto si los números son coprimos por parejas; un MCD conjunto de 1 no basta en listas más largas. Contraejemplo: 6, 10, 15 dan MCD 1 y MCM 30."
    },
    {
      "q": "¿Para qué sirve realmente el MCM?",
      "a": "Sobre todo para poner fracciones sobre un denominador común y para saber cuándo coinciden ciclos: dos sucesos con periodos de 12 y 18 días coinciden a los 36, que es su MCM. La coincidencia de ciclos supone un inicio común; con fases diferentes no basta el MCM."
    },
    {
      "q": "¿Por qué puede detenerse el cálculo con una lista larga?",
      "a": "El MCM crece muy deprisa y con un conjunto grande supera el rango entero exacto. Mostrar un valor redondeado no es una opción, porque ya no sería divisible por los números originales, así que el cálculo se detiene con honestidad."
    }
  ],
  "disclaimer": "Se admiten entre 2 y 1000 enteros positivos, en un máximo de 20000 caracteres. Cada entero y el MCM final deben ser como máximo 9007199254740991. Separe los números con espacios, saltos de línea o punto y coma; una coma sin espacio posterior se interpreta como parte de un número. No se redondean entradas incorrectas, fraccionarias ni demasiado grandes."
};
