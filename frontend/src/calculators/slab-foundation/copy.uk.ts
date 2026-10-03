import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор плитного фундаменту",
  "slug": "plytnyy-fundament",
  "shortDescription": "Об’єм бетону і армувальна сітка для плитного фундаменту.",
  "seoTitle": "Калькулятор плитного фундаменту: бетон і арматура",
  "seoDescription": "Порахуйте об’єм бетону та довжину і вагу армувальної сітки для плитного фундаменту.",
  "h1": "Калькулятор плитного фундаменту",
  "keywords": [
    "плитний фундамент",
    "бетон для плити",
    "розрахунок арматурної сітки",
    "об’єм бетону фундаменту"
  ]
};
export const slabFoundationCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
