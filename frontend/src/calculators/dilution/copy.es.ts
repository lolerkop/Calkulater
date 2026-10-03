import type { CalculatorCopy } from '../../lib/platform/types';

export const dilutionCopyEs: CalculatorCopy = {
  "name": "Calculadora de diluciones",
  "slug": "calculadora-de-diluciones",
  "shortDescription": "La regla C₁V₁ = C₂V₂ despejada para cualquiera de los dos volúmenes.",
  "seoTitle": "Calculadora de diluciones — C1V1 = C2V2",
  "seoDescription": "Calcula una dilución con la regla C₁V₁ = C₂V₂: el volumen final o el volumen de disolución madre necesario.",
  "h1": "Calculadora de diluciones",
  "keywords": [
    "calculadora de diluciones",
    "c1v1 c2v2",
    "dilución de una disolución madre",
    "preparar una disolución"
  ],
  "longDescription": "Halla el volumen final o el de disolución madre para diluir según C₁V₁ = C₂V₂. Las concentraciones deben expresar cantidad o masa por volumen de disolución, como mol/l o g/l. Los porcentajes en masa no sirven en esta ecuación de volúmenes sin información de densidad. La línea de disolvente estima la diferencia de volúmenes.",
  "howToUse": [
    "Elige el volumen final o el de disolución madre.",
    "Introduce ambas concentraciones en las mismas unidades por volumen de disolución.",
    "Introduce el volumen conocido en ml y consulta el resultado."
  ],
  "howItWorks": "Se conserva la cantidad de sustancia disuelta: C₁V₁ = C₂V₂. El volumen final es C₁V₁/C₂ y el inicial, C₂V₂/C₁. Los campos de volumen usan ml; ambas concentraciones deben tener la misma definición y unidades. Restar los volúmenes supone que son aditivos.",
  "example": "Se enrasan 50 ml de una disolución de 2 mol/l hasta un volumen final de 200 ml para obtener 0,5 mol/l. La diferencia de 150 ml estima la adición de disolvente; enrasar hasta el volumen final evita suponer que todos los volúmenes de mezcla se suman exactamente.",
  "faq": [
    {
      "q": "¿Qué concentraciones sirven en C₁V₁ = C₂V₂?",
      "a": "Cantidad o masa por volumen, como mol/l o g/l. El porcentaje masa/volumen definido expresamente en g por 100 ml también es proporcional a la concentración en masa. El porcentaje en masa tiene otro denominador: sin masas de disolución o una densidad adecuada no puede sustituir a una concentración por volumen."
    },
    {
      "q": "¿Puede la dilución aumentar la concentración?",
      "a": "No. Este modelo añade disolvente y exige que la concentración final no supere la inicial. Concentrar o evaporar son operaciones diferentes."
    },
    {
      "q": "¿El volumen final es la cantidad de disolvente que se añade?",
      "a": "No, incluye la disolución madre. V₂−V₁ estima la adición si los volúmenes son aditivos; es más preciso enrasar hasta el volumen final calculado."
    },
    {
      "q": "¿Sirve la fórmula para cualquier mezcla porcentual?",
      "a": "No. Identifica qué significa el porcentaje. Las fracciones en masa y molares no son concentraciones por volumen. Los porcentajes en volumen requieren una definición coherente y supuestos sobre los volúmenes; aquí no se modela la contracción ni la expansión de mezcla."
    }
  ],
  "disclaimer": "El modelo conserva el soluto para concentraciones por volumen. La adición es aproximada; las fracciones en masa y los volúmenes no aditivos necesitan otro modelo."
};
