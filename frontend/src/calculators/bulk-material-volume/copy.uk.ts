import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор сипкого матеріалу",
  "slug": "sypkyy-material",
  "shortDescription": "Об'єм і маса щебеню, піску або відсіву на засипку майданчика.",
  "seoTitle": "Калькулятор сипкого матеріалу — об'єм і маса засипки",
  "seoDescription": "Розрахуйте об'єм і масу щебеню, піску або відсіву на засипку майданчика за розмірами, товщиною шару та насипною густиною.",
  "h1": "Калькулятор сипкого матеріалу",
  "keywords": [
    "розрахунок щебеню",
    "скільки піску на засипку",
    "калькулятор відсіву"
  ]
};

export const bulkMaterialVolumeCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
