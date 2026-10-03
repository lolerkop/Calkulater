import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de flecha de una viga",
  "slug": "flecha-de-una-viga",
  "shortDescription": "Flecha de una viga biapoyada con carga uniforme o puntual.",
  "seoTitle": "Calculadora de flecha de una viga — carga uniforme y puntual",
  "seoDescription": "Calcula la flecha de una viga biapoyada a partir de la carga, la luz, el módulo de elasticidad y el momento de inercia.",
  "h1": "Calculadora de flecha de una viga",
  "keywords": [
    "flecha de una viga",
    "rigidez de un forjado",
    "momento de inercia",
    "flecha relativa"
  ]
};

export const beamDeflectionCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
