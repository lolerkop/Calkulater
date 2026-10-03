import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор лінолеуму",
  "slug": "linoleum-ua",
  "shortDescription": "Погонні метри рулонного покриття на кімнату зі смугами, швами й обрізками.",
  "seoTitle": "Калькулятор лінолеуму: погонні метри, смуги і шви",
  "seoDescription": "Порахуйте, скільки погонних метрів лінолеуму забирає кімната, скільки це смуг і швів і скільки лишиться обрізків.",
  "h1": "Калькулятор лінолеуму",
  "keywords": [
    "розрахунок лінолеуму",
    "погонні метри рулону",
    "калькулятор покриття підлоги",
    "шви покриття"
  ]
};

export const linoleumCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
