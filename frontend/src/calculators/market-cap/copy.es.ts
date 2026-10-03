import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const marketCapCopyEs: CalculatorCopy = {
  "name": "Calculadora de capitalización bursátil",
  "slug": "capitalizacion-bursatil",
  "shortDescription": "Capitalización bursátil a partir del número de acciones y el precio por acción.",
  "seoTitle": "Calculadora de capitalización bursátil — acciones × precio",
  "seoDescription": "Calcula la capitalización bursátil de una empresa a partir de las acciones en circulación y el precio de la acción, o halla el precio a partir de la capitalización.",
  "h1": "Calculadora de capitalización bursátil",
  "keywords": [
    "calculadora de capitalización bursátil",
    "capitalización de mercado",
    "valoración de una empresa por acciones"
  ],
  ...contractContent.es,
};
