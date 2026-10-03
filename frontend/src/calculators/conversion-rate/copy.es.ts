import type { CalculatorCopy } from '../../lib/platform/types';

export const conversionRateCopyEs: CalculatorCopy = {
  "name": "Calculadora de tasa de conversión",
  "slug": "tasa-de-conversion",
  "shortDescription": "Proporción de visitas con una acción objetivo y coste por visita que convierte.",
  "seoTitle": "Calculadora de tasa de conversión y coste por conversión",
  "seoDescription": "Calcula la tasa de conversión de visitas a acciones objetivo, el coste por conversión y las visitas por conversión.",
  "h1": "Calculadora de tasa de conversión",
  "keywords": [
    "calculadora de tasa de conversión",
    "conversión de un sitio web",
    "coste por conversión",
    "CPA"
  ],
  "longDescription": "Esta calculadora mide la proporción de visitas con al menos una acción objetivo definida. Cada visita entra en el numerador como máximo una vez, de modo que el resultado queda entre 0 y 100 %. No es un recuento de eventos: dos pedidos en una visita siguen siendo una visita con conversión. Un presupuesto positivo añade el coste de una visita así y la inversa muestra las visitas medias por conversión. Esa media describe la muestra observada y no garantiza la siguiente venta.",
  "howItWorks": "Tasa de conversión (%) = visitas con la acción elegida ÷ todas las visitas × 100. Conversiones significa aquí visitas que convierten, no todos los eventos repetidos. Con un numerador positivo, visitas por conversión = todas las visitas ÷ visitas que convierten. Con presupuesto positivo, coste por conversión = presupuesto ÷ visitas que convierten. Con cero conversiones, la tasa es 0 % y se omiten ambas filas con ese denominador. Un presupuesto vacío o 0 omite la fila monetaria.",
  "howToUse": [
    "Usa sesiones de visita de la misma muestra y periodo; usuarios únicos y páginas vistas son otros denominadores.",
    "Cuenta visitas con al menos una acción elegida, una vez como máximo por visita. Ambos recuentos deben ser enteros entre 0 y 9 007 199 254 740 991 y el total debe ser positivo.",
    "No introduzcas todos los eventos repetidos ni créditos fraccionarios de atribución como visitas que convierten.",
    "El presupuesto opcional debe ser no negativo y corresponder a la muestra. El símbolo monetario es formato local sin tipo de cambio. Compara con objetivos y fuentes de tráfico coherentes."
  ],
  "example": "240 visitas que convierten de 8 000 dan 240 ÷ 8 000 × 100 = 3,00 %. Con presupuesto 60 000, el coste es 60 000 ÷ 240 = 250,00 y las visitas por conversión son 8 000 ÷ 240 ≈ 33,333. Cero conversiones de 5 000 visitas dan 0,00 % y no se calculan coste ni inversa.",
  "faq": [
    {
      "q": "¿Cómo difiere esta conversión de la tasa de clics?",
      "a": "La tasa de clics divide clics publicitarios entre impresiones. Aquí el denominador son visitas al sitio y el numerador, visitas con la acción elegida. Clics, sesiones, usuarios y páginas vistas no son intercambiables."
    },
    {
      "q": "¿Puedo contar todos los pedidos o varios objetivos por visita?",
      "a": "Para la proporción de visitas exitosas, combina objetivos y cuenta cada visita una sola vez. Todos los eventos divididos entre visitas pueden superar el 100 %, pero es otra métrica fuera de esta forma."
    },
    {
      "q": "¿Por qué faltan coste e inversa con cero conversiones?",
      "a": "Ambas fórmulas exigirían dividir entre cero. Una tasa cero con visitas positivas sigue siendo válida. Un presupuesto 0 omite aquí el cálculo monetario y no muestra una conversión gratuita."
    },
    {
      "q": "¿33,333 visitas garantizan una venta?",
      "a": "No. Es la inversa de la tasa observada: 100 ÷ 3 ≈ 33,333. Planificar con ella presupone una probabilidad constante; no se ofrece pronóstico ni intervalo de confianza."
    },
    {
      "q": "¿Cómo comparar un 3 % con el periodo anterior?",
      "a": "Mantén definición de objetivo, recuento de visitas, mezcla de tráfico y ventana de observación. Una tasa menor no demuestra un fallo del sitio: las conversiones pueden aumentar con más tráfico. No se aplica una referencia sectorial universal."
    }
  ],
  "disclaimer": "Proporción observada de visitas que convierten y coste condicional. Sin pronóstico, análisis de significación ni cambio de divisas."
};
