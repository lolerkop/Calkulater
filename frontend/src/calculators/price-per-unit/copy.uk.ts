import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const pricePerUnitCopyUk: CalculatorCopy = {
  "name": "Калькулятор ціни за одиницю",
  "slug": "tsina-za-odynytsyu",
  "shortDescription": "Ціна за кілограм, літр або штуку та порівняння двох упаковок.",
  "seoTitle": "Калькулятор ціни за одиницю — порівняння упаковок",
  "h1": "Калькулятор ціни за одиницю",
  "keywords": ["ціна за одиницю", "ціна за кілограм", "порівняти упаковки"],
  ...contract.uk,
};
