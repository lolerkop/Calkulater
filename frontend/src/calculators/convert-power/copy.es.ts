import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertPowerCopyEs: CalculatorCopy = {
  "name": "Conversor de potencia",
  "slug": "conversor-de-potencia",
  "shortDescription": "Convierte potencia entre vatios, kilovatios y los dos tipos de caballo.",
  "seoTitle": "Conversor de potencia — vatios, kilovatios, caballos y BTU/h",
  "seoDescription": "Convierte potencia entre vatios, kilovatios, megavatios, caballo mecánico y métrico y BTU por hora.",
  "h1": "Conversor de potencia",
  "keywords": [
    "conversor de potencia",
    "kw a cv",
    "caballos de potencia",
    "BTU/h"
  ],
  "longDescription": "Convierte potencia entre vatios, kilovatios, megavatios, caballo mecánico, caballo métrico y BTU por hora. El caballo mecánico y el métrico son unidades distintas: este conversor las mantiene separadas en lugar de promediarlas.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del vatio con factores definidos.",
  "example": "100 kW son unos 136 caballos métricos, o unos 134 caballos mecánicos.",
  "faq": [
    {
      "q": "¿Por qué hay dos clases de caballo?",
      "a": "El caballo mecánico son 550 ft·lbf/s = 745,6999 W; el métrico son 75 kgf·m/s = 735,49875 W exactos. Se diferencian en torno a un 1,4 %."
    },
    {
      "q": "¿Cuál usan las fichas de los coches?",
      "a": "Comprueba la definición de la ficha: hp mecánico y PS métrico son unidades distintas. El país o el idioma por sí solos no las eligen; los kW se convierten a cualquiera de ellas de forma explícita."
    },
    {
      "q": "¿Para qué se usan los BTU por hora?",
      "a": "Para la capacidad de calefacción y aire acondicionado. Un kilovatio son unos 3412 BTU/h."
    },
    {
      "q": "¿El kilovatio hora es una unidad de potencia?",
      "a": "No, es de energía: potencia multiplicada por tiempo. Para kilovatios hora usa el conversor de energía."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
