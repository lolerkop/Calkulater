import type { CalculatorCopy } from '../../lib/platform/types';

export const molesCopyEs: CalculatorCopy = {
  "name": "Calculadora de moles",
  "slug": "calculadora-de-moles",
  "shortDescription": "Moles a partir de una masa y una masa molar, más el número de partículas.",
  "seoTitle": "Calculadora de moles — cantidad de sustancia a partir de la masa",
  "seoDescription": "Calcula la cantidad de sustancia en moles a partir de una masa y una masa molar, junto con el número de partículas.",
  "h1": "Calculadora de moles",
  "keywords": [
    "calculadora de moles",
    "cantidad de sustancia",
    "número de Avogadro",
    "mol"
  ],
  "longDescription": "Relaciona masa, masa molar y cantidad de sustancia, y muestra el número calculado de entidades especificadas. Introduce la masa molar en g/mol; no se analizan fórmulas químicas. La constante de Avogadro es exacta, pero la masa molar introducida y el resultado informático no necesariamente lo son.",
  "howItWorks": "n = m/M, y en sentido inverso m = nM; N = nN_A, con N_A = 6,02214076 × 10²³ mol⁻¹ por definición del SI. La masa se introduce en g. Masa y cantidad deben ser finitas y no negativas; la masa molar debe ser finita y positiva. Si cualquier resultado mostrado desborda o una magnitud positiva se pierde hasta cero, se devuelve un error de rango. Los valores finitos pequeños y grandes usan notación científica.",
  "example": "18 g con M = 18,02 g/mol introducido dan 0,9989 mol redondeados. Para 1 mol con el mismo M, la masa es 18,02 g y N = 6,02214076 × 10²³ entidades antes del redondeo visual.",
  "howToUse": [
    "Elige el cálculo a partir de masa o cantidad de sustancia.",
    "Introduce masa en g o cantidad en mol.",
    "Introduce la masa molar en g/mol de la misma entidad que deseas contar."
  ],
  "faq": [
    {
      "q": "¿Qué es una entidad?",
      "a": "Una molécula, átomo, ion u otra entidad elemental especificada. Su masa molar debe referirse a esa misma entidad."
    },
    {
      "q": "¿De dónde sale la masa molar?",
      "a": "De la composición y pesos atómicos adecuados o de una referencia comprobada. Las mezclas necesitan un modelo de composición media, que aquí no se determina."
    },
    {
      "q": "¿Por qué 18 g de agua no son exactamente un mol?",
      "a": "El ejemplo usa M = 18,02 g/mol redondeado. 18/18,02 es algo menor que uno; otra elección coherente de M cambia el resultado."
    },
    {
      "q": "¿Es exacta la constante de Avogadro?",
      "a": "Sí, 6,02214076 × 10²³ mol⁻¹ está fijado por definición. La división, multiplicación y visualización informática siguen redondeándose. El número de entidades es una estimación del modelo, no un recuento individual."
    },
    {
      "q": "¿Puede ser cero la masa o cantidad de sustancia?",
      "a": "Sí. Masa cero da 0 mol y 0 entidades; 0 mol da 0 g y 0 entidades con masa molar positiva. Perder una magnitud positiva hasta cero durante el cálculo produce un error."
    }
  ],
  "disclaimer": "El usuario proporciona la masa molar. El número de entidades sigue el modelo especificado; no se determinan composiciones de mezclas ni de isótopos. Todas las magnitudes mostradas deben caber en el rango numérico."
};
