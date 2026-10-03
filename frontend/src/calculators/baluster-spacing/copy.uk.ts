import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор кроку балясин",
  "slug": "krok-balyasyn",
  "shortDescription": "Скільки балясин на проліт за граничного просвіту між ними.",
  "seoTitle": "Калькулятор кроку балясин — кількість за граничним просвітом",
  "seoDescription": "Розрахуйте кількість балясин на проліт за шириною стійки та граничним просвітом, із фактичним зазором і кроком між осями.",
  "h1": "Калькулятор кроку балясин",
  "keywords": [
    "крок балясин",
    "відстань між балясинами",
    "кількість балясин"
  ]
};

export const balusterSpacingCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
