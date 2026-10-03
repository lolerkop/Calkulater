import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertAngleCopyEs: CalculatorCopy = {
  "name": "Conversor de ángulos",
  "slug": "conversor-de-angulos",
  "shortDescription": "Convierte ángulos entre grados, radianes, gradianes y vueltas.",
  "seoTitle": "Conversor de ángulos — grados, radianes, gradianes y minutos de arco",
  "seoDescription": "Convierte ángulos entre grados, radianes, gradianes, vueltas, minutos y segundos de arco.",
  "h1": "Conversor de ángulos",
  "keywords": [
    "conversor de ángulos",
    "grados a radianes",
    "gradianes",
    "minutos de arco"
  ],
  "longDescription": "Convierte ángulos entre radianes, grados, gradianes, vueltas, minutos y segundos de arco. Por definición, 180° = π rad y 400 gradianes = una vuelta; el resultado numérico mostrado se redondea.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "La conversión usa la relación de cada unidad con el radián, como 1° = π/180 rad. El cálculo utiliza una aproximación numérica de π, así que el resultado no es una expresión simbólica del ángulo exacto.",
  "example": "180 grados son π radianes, y un grado son 60 minutos de arco o 3600 segundos de arco.",
  "faq": [
    {
      "q": "¿Qué es un gradián?",
      "a": "La centésima parte de un ángulo recto, de modo que una vuelta completa son 400 gradianes. Se usa en topografía."
    },
    {
      "q": "¿Por qué usar π/180 y no un decimal corto?",
      "a": "La relación definitoria es 1° = π/180 rad. El cálculo usa la aproximación numérica disponible de π y redondea la pantalla; escribir 0,0174533 rad reduce aún más la precisión."
    },
    {
      "q": "¿Dónde se usan los minutos de arco?",
      "a": "En astronomía, navegación y óptica: un minuto de arco es la sexagésima parte de un grado."
    },
    {
      "q": "¿Sirve para latitudes y longitudes?",
      "a": "Convierte el ángulo en sí. La notación de coordenadas en grados, minutos y segundos es otro formato distinto."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
