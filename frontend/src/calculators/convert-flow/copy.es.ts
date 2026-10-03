import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertFlowCopyEs: CalculatorCopy = {
  "name": "Conversor de caudal",
  "slug": "conversor-de-caudal",
  "shortDescription": "Convierte caudal volumétrico entre m³/h, litros por minuto y CFM.",
  "seoTitle": "Conversor de caudal — m³/h, l/min, CFM y GPM",
  "seoDescription": "Convierte caudal volumétrico entre metros cúbicos por hora, litros por minuto, pies cúbicos por minuto y galones por minuto.",
  "h1": "Conversor de caudal",
  "keywords": [
    "conversor de caudal",
    "m3/h a l/min",
    "CFM",
    "GPM"
  ],
  "longDescription": "Convierte caudal volumétrico entre metros cúbicos por segundo y por hora, litros por segundo, minuto y hora, pies cúbicos por minuto y galones estadounidenses por minuto.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del metro cúbico por segundo con factores exactos.",
  "example": "Un metro cúbico por hora son 16,67 litros por minuto.",
  "faq": [
    {
      "q": "¿Es caudal volumétrico o másico?",
      "a": "Volumétrico: trabaja con volumen por unidad de tiempo y no necesita la densidad de la sustancia."
    },
    {
      "q": "¿Qué son CFM y GPM?",
      "a": "CFM son pies cúbicos por minuto, habituales en ventilación; GPM son galones estadounidenses por minuto, habituales en bombas."
    },
    {
      "q": "¿Cómo obtengo el caudal másico?",
      "a": "Multiplica el caudal volumétrico por la densidad de la sustancia. Hay un conversor de densidad aparte."
    },
    {
      "q": "¿A qué galón se refiere GPM?",
      "a": "Aquí se usa el galón estadounidense: 3,785411784 L. Comprueba qué significa GPM en la fuente; el galón imperial tiene otro volumen."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
