import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertCookingVolumeCopyEs: CalculatorCopy = {
  "name": "Conversor de volumen de cocina",
  "slug": "conversor-de-volumen-de-cocina",
  "shortDescription": "Convierte tazas, cucharadas y mililitros: la medida métrica y la estadounidense no coinciden.",
  "seoTitle": "Conversor de volumen de cocina — tazas, cucharadas y mililitros",
  "seoDescription": "Convierte volúmenes de cocina entre tazas, cucharadas, cucharaditas, mililitros y onzas líquidas.",
  "h1": "Conversor de volumen de cocina",
  "keywords": [
    "taza a ml",
    "cucharada en ml",
    "medidas de cocina",
    "conversor de cocina"
  ],
  "longDescription": "Convierte volúmenes de cocina entre mililitros, litros, cucharaditas, cucharadas, tazas y onzas líquidas. La taza estadounidense son 236,59 ml y la métrica, 250 ml, así que cada medida se nombra de forma explícita.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada medida se convierte a través del mililitro con factores exactos.",
  "example": "Una taza estadounidense son unos 236,59 ml y una métrica, 250 ml. La diferencia es de alrededor del 5–6 %, según la base de comparación; se convierten medidas, no se predice el resultado de una receta.",
  "faq": [
    {
      "q": "¿A qué taza se refiere una receta?",
      "a": "Depende de la fuente: la taza estadounidense son 236,59 ml y la métrica, 250 ml. Aquí ambas se nombran de forma explícita para que la elección sea tuya."
    },
    {
      "q": "¿Se puede convertir una taza de harina a gramos?",
      "a": "No: para eso hace falta la densidad del ingrediente concreto, y este conversor trabaja solo con volumen."
    },
    {
      "q": "¿Cuántas cucharaditas hay en una cucharada?",
      "a": "Tres, tanto en el sistema métrico como en el estadounidense."
    },
    {
      "q": "¿Qué es una onza líquida?",
      "a": "La onza líquida estadounidense son exactamente 29,5735295625 ml; la imperial es distinta y aquí no se usa."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
