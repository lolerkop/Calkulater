import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertLengthCopyEs: CalculatorCopy = {
  "name": "Conversor de longitud",
  "slug": "conversor-de-longitud",
  "shortDescription": "Convierte longitudes entre unidades métricas e imperiales.",
  "seoTitle": "Conversor de longitud — metros, pies, pulgadas y millas",
  "seoDescription": "Convierte longitudes entre metros, centímetros, kilómetros, pulgadas, pies, yardas, millas y millas náuticas.",
  "h1": "Conversor de longitud",
  "keywords": [
    "conversor de longitud",
    "metros a pies",
    "pulgadas a cm",
    "millas"
  ],
  "longDescription": "Convierte longitudes entre unidades métricas e imperiales: milímetros, centímetros, metros, kilómetros, pulgadas, pies, yardas, millas y millas náuticas. Los factores de las unidades están definidos exactamente; el cálculo y la pantalla tienen precisión finita.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad tiene un factor exacto respecto al metro, y la conversión pasa por esa base.",
  "example": "Una pulgada son exactamente 2,54 cm, y una milla, exactamente 1609,344 m.",
  "faq": [
    {
      "q": "¿Son exactas las conversiones imperiales?",
      "a": "Se usan las definiciones internacionales: 1 pulgada = 0,0254 m y 1 pie = 0,3048 m. Los factores definitorios son exactos, pero la pantalla se redondea. No se incluye el pie topográfico histórico de EE. UU."
    },
    {
      "q": "¿Qué es una milla náutica?",
      "a": "Exactamente 1852 metros; se usa en navegación marítima y aérea. Es más larga que la milla terrestre de 1609,344 m."
    },
    {
      "q": "¿El conversor funciona en ambos sentidos?",
      "a": "Sí. Intercambia la unidad de origen y la de destino y la conversión va en sentido contrario."
    },
    {
      "q": "¿Por qué la misma unidad devuelve el valor sin cambios?",
      "a": "Convertir una unidad a sí misma no pasa por la base, así que no se introduce ninguna deriva de coma flotante."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
