import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertVolumeCopyEs: CalculatorCopy = {
  "name": "Conversor de volumen",
  "slug": "conversor-de-volumen",
  "shortDescription": "Convierte volúmenes entre litros, metros cúbicos y galones.",
  "seoTitle": "Conversor de volumen — litros, metros cúbicos y galones",
  "seoDescription": "Convierte volúmenes entre litros, mililitros, metros cúbicos, pies cúbicos y galones estadounidenses o imperiales.",
  "h1": "Conversor de volumen",
  "keywords": [
    "conversor de volumen",
    "litros a galones",
    "metros cúbicos",
    "pies cúbicos"
  ],
  "longDescription": "Convierte volúmenes entre mililitros, litros, centímetros, metros y pies cúbicos, más galones estadounidenses e imperiales. El galón estadounidense y el británico se diferencian en torno a un 20 %, así que la lista los mantiene separados.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad tiene un factor exacto respecto al metro cúbico.",
  "example": "Un galón estadounidense son 3,785 litros y uno imperial, 4,546 litros.",
  "faq": [
    {
      "q": "¿En qué se diferencian el galón estadounidense y el imperial?",
      "a": "Son medidas históricamente distintas: 3,785 litros frente a 4,546. Ese 20 % de diferencia pasa desapercibido con facilidad en una receta o en un manual."
    },
    {
      "q": "¿Es lo mismo un litro que un decímetro cúbico?",
      "a": "Sí, exactamente. El litro está definido como un decímetro cúbico, es decir, 0,001 m³."
    },
    {
      "q": "¿Es lo mismo un mililitro que un centímetro cúbico?",
      "a": "Sí, exactamente. Ambos equivalen a 10⁻⁶ m³."
    },
    {
      "q": "¿Incluye las medidas de cocina?",
      "a": "Las tazas y las cucharadas no: su volumen cambia según el país. Para eso hace falta un conversor de cocina específico."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
