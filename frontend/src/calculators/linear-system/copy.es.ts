import type { CalculatorCopy } from '../../lib/platform/types';

export const linearSystemCopyEs: CalculatorCopy = {
  "name": "Calculadora de sistemas de ecuaciones lineales",
  "slug": "sistema-de-ecuaciones-lineales",
  "shortDescription": "Resuelve un sistema de dos ecuaciones lineales con dos incógnitas por la regla de Cramer.",
  "seoTitle": "Calculadora de sistemas de ecuaciones lineales — dos incógnitas",
  "seoDescription": "Resuelve un sistema de dos ecuaciones lineales con dos incógnitas por la regla de Cramer y consulta el determinante principal que decide si hay solución.",
  "h1": "Calculadora de sistemas de ecuaciones lineales",
  "keywords": [
    "sistema de ecuaciones lineales",
    "calculadora regla de cramer",
    "dos incógnitas",
    "ecuaciones simultáneas"
  ],
  "longDescription": "Encuentra el par único x, y de a₁x + b₁y = c₁ y a₂x + b₂y = c₂ mediante la regla de Cramer. Si cada ecuación tiene algún coeficiente de x o y no nulo, representa la intersección de dos rectas. Una fila con todos sus coeficientes nulos puede representar una identidad o una contradicción. Con Δ = 0 no hay un par único: el cálculo se detiene sin clasificar entre ninguna solución e infinitas soluciones.",
  "howItWorks": "Δ = a₁b₂ − a₂b₁, Δx = c₁b₂ − c₂b₁, Δy = a₁c₂ − a₂c₁. Si Δ ≠ 0, x = Δx/Δ e y = Δy/Δ. Si Δ = 0, las fórmulas de Cramer no dan un par único; hace falta otro método para clasificar el sistema. Los coeficientes cero se admiten y deben introducirse explícitamente, no dejarse en blanco.",
  "example": "Para 2x + 3y = 13 y 4x − y = 5 el determinante es −14 y la solución es x = 2, y = 3.",
  "howToUse": [
    "Escribe ambas ecuaciones en la forma ax + by = c.",
    "Introduce los coeficientes de la primera ecuación: a₁, b₁ y c₁.",
    "Introduce los coeficientes de la segunda: a₂, b₂ y c₂.",
    "Una incógnita ausente significa coeficiente cero, no un campo vacío."
  ],
  "faq": [
  {
    "q": "¿Qué significa un determinante nulo?",
    "a": "Con Δ = 0 no hay un par único x, y. Puede no haber soluciones o haber infinitas; este modelo no distingue los casos. Las rectas paralelas o coincidentes solo describen casos en que cada fila representa una recta. Una fila 0x + 0y = c puede ser una identidad o una contradicción."
  },
  {
    "q": "¿Los coeficientes pueden ser negativos o decimales?",
    "a": "Sí, se admiten coeficientes negativos y decimales finitos. Un determinante nulo no es la única causa de detención: el resultado también debe quedar dentro del rango numérico."
  },
  {
    "q": "¿Cómo introduzco una ecuación con una sola incógnita?",
    "a": "Pon cero como coeficiente de la incógnita ausente. La ecuación 3x = 12 queda como a = 3, b = 0, c = 12."
  },
  {
    "q": "¿Por qué la regla de Cramer y no la sustitución?",
    "a": "Si Δ ≠ 0, la regla de Cramer da directamente el par único x, y. La sustitución o la eliminación producen el mismo resultado matemático. Un Δ nulo no decide la existencia: hace falta otro método para distinguir entre ninguna solución e infinitas soluciones."
  }
],
  "disclaimer": "Se admiten coeficientes finitos, negativos y decimales. Los determinantes se calculan a partir de la representación binaria de las entradas y los resultados se redondean. Los valores pequeños no nulos usan notación científica. Un Δ, x o y no representable produce un error de rango. Un sistema casi dependiente es sensible a la incertidumbre de sus coeficientes; mostrar más cifras no elimina esa sensibilidad."
};
