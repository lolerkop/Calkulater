import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const recipeCostCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de coste de una receta",
  "slug": "coste-de-una-receta",
  "shortDescription": "Coste de un plato a partir de su lista de ingredientes, y el precio de una ración.",
  "seoTitle": "Calculadora de coste de una receta y coste por ración",
  "seoDescription": "Calcula el coste de un plato a partir de una lista de ingredientes con precios y consulta lo que cuesta una ración.",
  "h1": "Calculadora de coste de una receta",
  "keywords": [
    "calculadora de coste de una receta",
    "coste por ración",
    "calculadora de coste de alimentos",
    "desglose del coste de un plato"
  ]
},
  ...contractContent.es,
};
