import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertFrequencyCopyEs: CalculatorCopy = {
  "name": "Conversor de frecuencia",
  "slug": "conversor-de-frecuencia",
  "shortDescription": "Convierte frecuencia entre hercios, kilohercios, megahercios y rpm.",
  "seoTitle": "Conversor de frecuencia — Hz, kHz, MHz, GHz y rpm",
  "seoDescription": "Convierte frecuencia entre hercios, kilohercios, megahercios, gigahercios y revoluciones por minuto.",
  "h1": "Conversor de frecuencia",
  "keywords": [
    "conversor de frecuencia",
    "ghz a mhz",
    "rpm",
    "hercios"
  ],
  "longDescription": "Convierte frecuencia entre hercios, kilohercios, megahercios, gigahercios, milihercios y revoluciones por minuto. Los gigahercios aparecen en las especificaciones de procesadores y wifi, y las rpm en las fichas de los motores.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Las unidades con prefijos del SI se convierten a hercios mediante sus factores; las revoluciones por minuto se dividen entre 60.",
  "example": "El wifi de 2,4 GHz son 2400 MHz, y un motor a 3000 rpm gira a 50 Hz.",
  "faq": [
    {
      "q": "¿Qué relación hay entre hercios y rpm?",
      "a": "Para frecuencia de giro, 1 Hz = 1 revolución por segundo = 60 rpm. En general, el hercio cuenta ciclos por segundo, que no tienen que ser giros."
    },
    {
      "q": "¿Por qué los procesadores se miden en gigahercios?",
      "a": "Un gigahercio son mil millones de ciclos por segundo: una escala cómoda para los chips actuales."
    },
    {
      "q": "¿En qué se diferencian mHz y MHz?",
      "a": "La m minúscula es mili, la milésima parte de un hercio; la M mayúscula es mega, un millón de hercios. Entre ambos hay un factor de mil millones."
    },
    {
      "q": "¿Se puede convertir frecuencia en periodo?",
      "a": "El periodo es el inverso de la frecuencia. Este conversor no hace transformaciones inversas: divide uno entre la frecuencia por tu cuenta."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
