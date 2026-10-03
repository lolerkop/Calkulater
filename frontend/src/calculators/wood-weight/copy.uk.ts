import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор ваги деревини",
  "slug": "vaga-derevyny",
  "shortDescription": "Вага деревини за її об’ємом, породою і вологістю.",
  "seoTitle": "Калькулятор ваги деревини за породою і вологістю",
  "seoDescription": "Порахуйте, скільки важить деревина за об’ємом, породою і вологістю, з показаною густиною, з якої вийшла відповідь.",
  "h1": "Калькулятор ваги деревини",
  "keywords": [
    "вага деревини",
    "вага кубометра лісу",
    "густина деревини за породою",
    "вага пиломатеріалів"
  ]
};
export const woodWeightCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
