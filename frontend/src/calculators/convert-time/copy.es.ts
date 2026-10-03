import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertTimeCopyEs: CalculatorCopy = {
  "name": "Conversor de tiempo",
  "slug": "conversor-de-tiempo",
  "shortDescription": "Convierte duraciones entre milisegundos, segundos, minutos, horas, días y semanas.",
  "seoTitle": "Conversor de tiempo — segundos, minutos, horas, días y semanas",
  "seoDescription": "Convierte una duración entre milisegundos, segundos, minutos, horas, días y semanas.",
  "h1": "Conversor de tiempo",
  "keywords": [
    "conversor de tiempo",
    "horas a minutos",
    "segundos a horas",
    "duración"
  ],
  "longDescription": "Convierte una duración entre milisegundos, segundos, minutos, horas, días y semanas. Los meses y los años se dejan fuera a propósito: su duración no es fija, y un único multiplicador daría una respuesta verosímil y equivocada.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del segundo con factores exactos.",
  "example": "90 minutos son 1,5 horas, y una semana son exactamente 604.800 segundos.",
  "faq": [
    {
      "q": "¿Por qué faltan los meses y los años?",
      "a": "Un mes tiene de 28 a 31 días y un año puede ser bisiesto. Un multiplicador fijo elegiría una suposición por ti y en silencio."
    },
    {
      "q": "¿Cómo obtengo el tiempo entre dos fechas?",
      "a": "Con la calculadora de diferencia de fechas: trabaja con el calendario y no con un multiplicador."
    },
    {
      "q": "¿Un día son siempre 86.400 segundos aquí?",
      "a": "Sí. Los segundos intercalares y los cambios de hora son efectos del calendario, no definiciones de unidad."
    },
    {
      "q": "¿Puedo convertir el ritmo de carrera con esto?",
      "a": "No: el ritmo mezcla tiempo y distancia. De eso se ocupa la calculadora de ritmo."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
