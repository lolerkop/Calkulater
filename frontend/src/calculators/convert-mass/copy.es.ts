import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertMassCopyEs: CalculatorCopy = {
  "name": "Conversor de masa",
  "slug": "conversor-de-masa",
  "shortDescription": "Convierte masas entre unidades métricas e imperiales.",
  "seoTitle": "Conversor de masa — kilogramos, libras y onzas",
  "seoDescription": "Convierte masas entre miligramos, gramos, kilogramos, toneladas, onzas, libras y stones.",
  "h1": "Conversor de masa",
  "keywords": [
    "conversor de masa",
    "kg a lb",
    "onzas a gramos",
    "libras"
  ],
  "longDescription": "Convierte masas entre miligramos, gramos, kilogramos, toneladas, onzas, libras y stones. Los factores de las unidades están definidos exactamente; el cálculo y la pantalla tienen precisión finita.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad tiene un factor exacto respecto al kilogramo, y la conversión pasa por esa base.",
  "example": "Una libra son exactamente 453,59237 gramos y un stone, catorce libras.",
  "faq": [
    {
      "q": "¿Es exacta la conversión de la libra?",
      "a": "La libra avoirdupois está definida exactamente: 1 lb = 0,45359237 kg. La aritmética de precisión finita y el redondeo pueden limitar las cifras mostradas."
    },
    {
      "q": "¿En qué se diferencian la onza y la onza troy?",
      "a": "Este conversor usa la onza avoirdupois, la del comercio. La onza troy de los metales preciosos es más pesada y no está incluida."
    },
    {
      "q": "¿Qué es un stone?",
      "a": "Una unidad británica de 14 libras, unos 6,35 kg. Todavía se usa para el peso corporal en el Reino Unido e Irlanda."
    },
    {
      "q": "¿Son lo mismo masa y peso?",
      "a": "En el uso corriente sí, pero en rigor el peso depende de la gravedad. Este conversor trabaja con la masa."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
