import type { CalculatorCopy } from '../../lib/platform/types';

export const powerRootCopyEs: CalculatorCopy = {
  "name": "Calculadora de potencias y raíces",
  "slug": "potencias-y-raices",
  "shortDescription": "Potencias y raíces dentro del dominio real admitido.",
  "seoTitle": "Calculadora de potencias y raíces en línea",
  "seoDescription": "Potencias y raíces dentro del dominio real admitido. Bases negativas, exponentes fraccionarios y control de rango.",
  "h1": "Calculadora de potencias y raíces",
  "keywords": [
    "calculadora de potencias",
    "calculadora de raíces",
    "calculadora de exponentes",
    "raíz cúbica"
  ],
  "longDescription": "Calcula aⁿ o a^(1/n) en los números reales. Por ejemplo, 2¹⁰ = 1024 y la raíz cúbica de −8 es −2. Con base negativa, el modo potencia admite exponentes enteros y el modo raíz exige un índice entero positivo e impar. Con base no negativa también se admite un índice de raíz positivo fraccionario, interpretado como exponente recíproco, además del índice entero habitual.",
  "howItWorks": "Para un entero positivo n, aⁿ es el producto de n factores a. Si a ≠ 0, a⁰ = 1 y a⁻ⁿ = 1/aⁿ. El exponente racional m/n combina una raíz de índice n y una potencia m dentro de su dominio real. El modo raíz calcula a^(1/n); con a negativo extrae el signo solo si n es entero impar. Los campos aceptan números, no expresiones como 1/3.",
  "example": "Dos elevado a la décima potencia es 1024, y la raíz cúbica de 27 es 3.",
  "howToUse": [
    "Elija potencia o raíz.",
    "Introduzca la base como número.",
    "Introduzca el exponente o un índice positivo de raíz; ∛27 usa índice 3."
  ],
  "faq": [
    {
      "q": "¿Por qué no puedo extraer la raíz cuadrada de un número negativo?",
      "a": "Porque cualquier número real al cuadrado es no negativo, así que no existe tal raíz real. Sí existe entre los números complejos, pero ese es otro dominio."
    },
    {
      "q": "¿Y la raíz cúbica de un número negativo?",
      "a": "Existe y se calcula: ∛−8 = −2, ya que (−2)³ = −8. Lo mismo vale para cualquier raíz de índice impar."
    },
    {
      "q": "¿Qué significa un exponente negativo?",
      "a": "Uno dividido entre la misma potencia con exponente positivo: 2⁻³ es 1/2³, es decir, 0,125."
    },
    {
      "q": "¿Por qué cualquier número elevado a cero da uno?",
      "a": "Para a ≠ 0, aⁿ/aⁿ = a⁰ da uno. Esta página rechaza 0⁰ en lugar de elegir una de sus convenciones por el usuario."
    },
    {
      "q": "¿Puedo usar un exponente fraccionario?",
      "a": "Sí, con base no negativa: el exponente 0,5 da la raíz cuadrada. El campo no interpreta 1/3; para la raíz cúbica elija el modo raíz e índice 3. Las potencias fraccionarias de bases negativas quedan fuera de este cálculo, aunque algunos casos racionales existen matemáticamente."
    }
  ],
  "disclaimer": "El cálculo y la presentación se redondean. Esta página rechaza 0⁰ como entrada ambigua; es una regla del producto. El cero solo se admite con exponente o índice de raíz positivo. Con base negativa, el exponente entero está limitado en valor absoluto a 9007199254740991 y el índice impar de raíz a ese límite positivo. El desbordamiento o la pérdida de un resultado no nulo producen un error."
};
