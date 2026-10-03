import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de linóleo",
  "slug": "calculadora-de-linoleo",
  "shortDescription": "Metros lineales de suelo en rollo para una habitación, con tiras, juntas y recorte.",
  "seoTitle": "Calculadora de linóleo: metros lineales, tiras y juntas",
  "seoDescription": "Calcula cuántos metros lineales de linóleo lleva una habitación, cuántas tiras y juntas supone y cuánto recorte queda.",
  "h1": "Calculadora de linóleo",
  "keywords": [
    "calculadora de linóleo",
    "metros de suelo en rollo",
    "calculadora de vinilo",
    "juntas de suelo"
  ]
};

export const linoleumCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
