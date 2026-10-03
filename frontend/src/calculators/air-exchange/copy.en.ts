import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Air changes per hour calculator",
  "slug": "air-changes-per-hour",
  "shortDescription": "Required airflow from room volume and the air change rate.",
  "seoTitle": "Air changes per hour calculator — required airflow",
  "seoDescription": "Calculate the required airflow from room area, ceiling height and air changes per hour — in m³/h and L/s.",
  "h1": "Air changes per hour calculator",
  "keywords": [
    "air changes per hour",
    "required airflow",
    "fan sizing",
    "room ventilation"
  ]
};

export const airExchangeCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
