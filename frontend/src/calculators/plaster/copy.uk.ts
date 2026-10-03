import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор штукатурки",
  "slug": "shtukaturka",
  "shortDescription": "Скільки сухої суміші потрібно на стіну за заданої товщини шару.",
  "seoTitle": "Калькулятор штукатурки — витрата суміші на стіну",
  "seoDescription": "Обчисліть масу штукатурної суміші та кількість мішків за площею стіни, товщиною шару та витратою.",
  "h1": "Калькулятор штукатурки",
  "keywords": [
    "калькулятор штукатурки",
    "витрата штукатурки",
    "штукатурка на м2"
  ]
};

export const plasterCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
