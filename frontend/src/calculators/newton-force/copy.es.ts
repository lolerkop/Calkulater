import type { CalculatorCopy } from '../../lib/platform/types';

export const newtonForceCopyEs: CalculatorCopy = {
  "name": "Calculadora de la segunda ley de Newton",
  "slug": "segunda-ley-de-newton",
  "shortDescription": "Fuerza, masa o aceleración a partir de F = m · a.",
  "seoTitle": "Calculadora de la segunda ley de Newton — F = ma",
  "seoDescription": "Calcula la fuerza, la masa o la aceleración con la segunda ley de Newton F = m · a en unidades del SI.",
  "h1": "Calculadora de la segunda ley de Newton",
  "keywords": [
    "calculadora de la segunda ley de Newton",
    "calculadora de fuerza",
    "calculadora f = ma",
    "masa a partir de la fuerza"
  ],
  "longDescription": "Relaciona el módulo de la fuerza externa resultante, una masa positiva constante y el módulo de la aceleración mediante F = ma. Introduce la resultante tras considerar los sentidos, no la suma de módulos de fuerzas opuestas. No se calculan direcciones. La fila adicional del peso usa mg con la gravedad estándar convencional de 9,80665 m/s²; no mide la gravedad local ni la lectura de una báscula en un ascensor acelerado.",
  "howToUse": [
    "Elige fuerza, masa o aceleración.",
    "Usa kg, N y m/s²; considera los sentidos al obtener la fuerza resultante.",
    "Para hallar la masa, ambos módulos conocidos deben ser positivos; F = a = 0 no determina la masa.",
    "La aceleración cero es válida al hallar la fuerza, y la resultante cero al hallar la aceleración de una masa positiva."
  ],
  "howItWorks": "Para masa constante en un sistema inercial: F = ma, m = F/a y a = F/m. F y a son módulos no negativos de vectores con sentidos coherentes. El peso de referencia W = mgₙ usa gₙ = 9,80665 m/s²; no es la resultante si otras fuerzas equilibran la gravedad.",
  "example": "10 kg y 2 m/s² dan 20 N de fuerza resultante y un peso de referencia de 98,0665 N. Una tracción de 30 N y un rozamiento opuesto de 10 N requieren introducir 20 N, no 40 N.",
  "faq": [
    {
      "q": "¿En qué se diferencia la fuerza del peso?",
      "a": "Fuerza es un concepto general. Aquí F es la resultante y el peso de referencia es mgₙ. Un apoyo puede equilibrar el peso y dar F = 0 en reposo."
    },
    {
      "q": "¿Por qué se rechaza la aceleración cero al hallar la masa?",
      "a": "Con F = a = 0 sirve cualquier masa positiva. F > 0 con a = 0 contradice este modelo de masa constante finita; dividir entre cero no determina la masa."
    },
    {
      "q": "¿La aceleración puede ser cero al hallar la fuerza?",
      "a": "Sí: con m > 0 se obtiene F = 0. En cambio, F = 0 con a > 0 no da una masa positiva en el modo inverso."
    },
    {
      "q": "¿Se tiene en cuenta el rozamiento?",
      "a": "No automáticamente. Incluye rozamiento, tracción y otras fuerzas externas en la suma vectorial antes de introducir el módulo resultante."
    },
    {
      "q": "¿La gravedad estándar es la gravedad exacta de mi localidad?",
      "a": "No. 9,80665 m/s² es un valor convencional. La gravedad local varía y la fuerza del apoyo depende también de la aceleración del sistema."
    }
  ],
  "disclaimer": "Modelo clásico de masa positiva constante y módulos resultantes; no deduce fuerzas individuales ni direcciones."
};
