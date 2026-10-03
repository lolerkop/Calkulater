import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertIlluminanceCopyEs: CalculatorCopy = {
  "name": "Conversor de iluminancia",
  "slug": "conversor-de-iluminancia",
  "shortDescription": "Convierte la iluminancia entre lux, bujías-pie y fots.",
  "seoTitle": "Conversor de iluminancia — lux, bujías-pie y fots",
  "seoDescription": "Convierte la iluminancia entre lux, kilolux, bujías-pie, fots y nox.",
  "h1": "Conversor de iluminancia",
  "keywords": [
    "conversor de iluminancia",
    "lux a bujías-pie",
    "nivel de iluminación"
  ],
  "longDescription": "Convierte la iluminancia entre lux, kilolux, mililux, bujías-pie, fots y nox. El lux aparece en las normas de iluminación de los puestos de trabajo y la bujía-pie, en la documentación estadounidense de alumbrado.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Las unidades se convierten mediante lux y sus factores: se tienen en cuenta los prefijos, las relaciones de superficie y el factor histórico elegido para nox.",
  "example": "Ejemplo de conversión de un valor: 500 lx ≈ 46,45 bujías-pie. Es un ejemplo numérico, no un requisito para un puesto de trabajo.",
  "faq": [
    {
      "q": "¿En qué se diferencia la iluminancia del flujo luminoso?",
      "a": "El flujo luminoso se mide en lúmenes y describe la lámpara entera; la iluminancia es el flujo que cae sobre un metro cuadrado de superficie."
    },
    {
      "q": "¿Qué es una bujía-pie?",
      "a": "Un lumen por pie cuadrado. Como el pie está definido de forma exacta, una bujía-pie son 10,7639 lux."
    },
    {
      "q": "¿Dónde se usa el fot?",
      "a": "En el sistema CGS: un lumen por centímetro cuadrado, es decir, diez mil lux."
    },
    {
      "q": "¿Se pueden convertir lux en vatios?",
      "a": "No: son magnitudes distintas, y la relación depende del espectro de la fuente."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
