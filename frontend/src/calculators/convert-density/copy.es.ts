import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertDensityCopyEs: CalculatorCopy = {
  "name": "Conversor de densidad",
  "slug": "conversor-de-densidad",
  "shortDescription": "Convierte densidades entre kg/m³, g/cm³ y libras por pie cúbico.",
  "seoTitle": "Conversor de densidad — kg/m³, g/cm³ y lb/ft³",
  "seoDescription": "Convierte densidades entre kilogramos por metro cúbico, gramos por centímetro cúbico, kilogramos por litro y libras por pie cúbico.",
  "h1": "Conversor de densidad",
  "keywords": [
    "conversor de densidad",
    "kg/m3 a g/cm3",
    "densidad del agua"
  ],
  "longDescription": "Convierte densidades entre kilogramos por metro cúbico, gramos por centímetro cúbico, kilogramos por litro, toneladas por metro cúbico, gramos por litro, libras por pie cúbico y por galón estadounidense, y onzas por pulgada cúbica.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del kilogramo por metro cúbico con factores exactos.",
  "example": "El agua ronda 1 g/cm³, es decir, 1000 kg/m³ o unas 62,43 libras por pie cúbico.",
  "faq": [
    {
      "q": "¿Por qué 1 g/cm³ equivale a 1000 kg/m³?",
      "a": "Un kilogramo tiene mil gramos y un metro cúbico, un millón de centímetros cúbicos; un millón dividido entre mil son mil."
    },
    {
      "q": "¿Cuál es la densidad del agua?",
      "a": "Alrededor de 1 g/cm³ a 4 °C. El valor exacto depende de la temperatura, así que esta herramienta convierte unidades y no consulta sustancias."
    },
    {
      "q": "¿Se puede convertir densidad en masa?",
      "a": "No: para eso hace falta un volumen. La densidad es masa por volumen, y el conversor trabaja solo con esa magnitud."
    },
    {
      "q": "¿Qué galón se utiliza?",
      "a": "El estadounidense, de 3,785411784 litros. El galón imperial es mayor y aquí no se usa."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
