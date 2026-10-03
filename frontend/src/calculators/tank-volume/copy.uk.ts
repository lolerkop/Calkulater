import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор обʼєму ємності",
  "slug": "obyem-yemnosti",
  "shortDescription": "Повний обʼєм бака та обʼєм налитого за заданого рівня.",
  "seoTitle": "Калькулятор обʼєму ємності — бак, цистерна, бочка",
  "seoDescription": "Розрахуйте повний обʼєм ємності та обʼєм налитого за рівнем для вертикального бака, горизонтальної цистерни та прямокутної ванни.",
  "h1": "Калькулятор обʼєму ємності",
  "keywords": [
    "обʼєм ємності",
    "обʼєм цистерни",
    "скільки літрів у бочці"
  ]
};
export const tankVolumeCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
