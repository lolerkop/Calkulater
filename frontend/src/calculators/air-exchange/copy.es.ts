import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de renovaciones de aire por hora",
  "slug": "renovaciones-de-aire-por-hora",
  "shortDescription": "Caudal de aire necesario a partir del volumen de la sala y la tasa de renovación.",
  "seoTitle": "Calculadora de renovaciones de aire por hora — caudal necesario",
  "seoDescription": "Calcula el caudal de aire necesario a partir de la superficie de la sala, la altura del techo y las renovaciones por hora, en m³/h y l/s.",
  "h1": "Calculadora de renovaciones de aire por hora",
  "keywords": [
    "renovaciones de aire por hora",
    "caudal de aire necesario",
    "dimensionar un ventilador",
    "ventilación de una sala"
  ]
};

export const airExchangeCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
