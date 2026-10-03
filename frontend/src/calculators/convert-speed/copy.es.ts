import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertSpeedCopyEs: CalculatorCopy = {
  "name": "Conversor de velocidad",
  "slug": "conversor-de-velocidad",
  "shortDescription": "Convierte velocidades entre km/h, m/s, mph y nudos.",
  "seoTitle": "Conversor de velocidad — km/h, m/s, mph y nudos",
  "seoDescription": "Convierte velocidades entre kilómetros por hora, metros por segundo, millas por hora, nudos y pies por segundo.",
  "h1": "Conversor de velocidad",
  "keywords": [
    "conversor de velocidad",
    "kmh a mph",
    "nudos",
    "m/s"
  ],
  "longDescription": "Convierte velocidades entre metros por segundo, kilómetros por hora, millas por hora, nudos y pies por segundo. Los nudos se usan en navegación marítima y aérea, y las millas por hora en las señales de tráfico estadounidenses y británicas.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del metro por segundo con factores exactos.",
  "example": "36 km/h son exactamente 10 m/s, y un nudo son 1,852 km/h.",
  "faq": [
    {
      "q": "¿Qué es un nudo?",
      "a": "Una milla náutica por hora, es decir, 1,852 km/h. Se usa en navegación marítima y aérea."
    },
    {
      "q": "¿Por qué 36 km/h son exactamente 10 m/s?",
      "a": "Divide el valor numérico en km/h entre 3,6 para obtener m/s: 36/3,6 = 10. En sentido contrario, multiplica por 3,6; el factor sale de 1000 metros y 3600 segundos."
    },
    {
      "q": "¿Es exacta la conversión de mph?",
      "a": "Sí. La milla está definida como 1609,344 m, de modo que una mph son exactamente 0,44704 m/s."
    },
    {
      "q": "¿Sirve para correr?",
      "a": "El ritmo de carrera se mide normalmente en minutos por kilómetro: para eso hay una calculadora de ritmo aparte."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
