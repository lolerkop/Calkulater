import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de cimentación por pilotes",
  "slug": "cimentacion-por-pilotes",
  "shortDescription": "Hormigón para pilotes perforados y para el encepado que los une.",
  "seoTitle": "Calculadora de cimentación por pilotes: hormigón de pilotes y encepado",
  "seoDescription": "Calcula el volumen de hormigón de los pilotes perforados y del encepado, con el reparto entre ambos mostrado por separado.",
  "h1": "Calculadora de cimentación por pilotes",
  "keywords": [
    "calculadora de cimentación por pilotes",
    "hormigón de pilotes perforados",
    "volumen del encepado",
    "hormigón para pilares de cimentación"
  ]
};

export const pileFoundationCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
