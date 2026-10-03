import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertAreaCopyEs: CalculatorCopy = {
  "name": "Conversor de superficie",
  "slug": "conversor-de-superficie",
  "shortDescription": "Convierte superficies entre unidades métricas e imperiales.",
  "seoTitle": "Conversor de superficie — m², hectáreas, acres y pies cuadrados",
  "seoDescription": "Convierte superficies entre metros cuadrados, hectáreas, acres, pies cuadrados y pulgadas cuadradas.",
  "h1": "Conversor de superficie",
  "keywords": [
    "conversor de superficie",
    "hectáreas a acres",
    "m2 a ft2",
    "metros cuadrados"
  ],
  "longDescription": "Convierte superficies entre milímetros, centímetros, metros y kilómetros cuadrados, hectáreas, pulgadas y pies cuadrados y acres. Las definiciones de las unidades fijan los factores; el cálculo y la pantalla tienen precisión finita.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad tiene un factor exacto respecto al metro cuadrado.",
  "example": "Una hectárea son 10.000 m² y un acre son 4046,8564224 m².",
  "faq": [
    {
      "q": "¿En qué se diferencian la hectárea y el acre?",
      "a": "La hectárea son exactamente 10.000 m², mientras que el acre son 4046,86 m². Una hectárea equivale a unos 2,47 acres."
    },
    {
      "q": "¿Por qué los factores no son los cuadrados de los de longitud?",
      "a": "Lo son, pero están escritos como números terminados: así el conversor no depende de un análisis dimensional y resulta fácil de comprobar."
    },
    {
      "q": "¿Sirve para parcelas?",
      "a": "Sí, la hectárea y el acre son medidas habituales de terreno. Para documentos, compruébalo contra la medición oficial."
    },
    {
      "q": "¿Son exactas las unidades imperiales de superficie?",
      "a": "Sí. Una pulgada cuadrada son 0,00064516 m² por la propia definición de la pulgada."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
