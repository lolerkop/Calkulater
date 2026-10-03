import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор площі даху",
  "slug": "ploshcha-dakhu",
  "shortDescription": "Площа схилів за розмірами основи та ухилом, у градусах або відсотках.",
  "seoTitle": "Калькулятор площі даху — схили за ухилом",
  "seoDescription": "Обчисліть площу даху за довжиною і шириною основи та ухилом у градусах або відсотках.",
  "h1": "Калькулятор площі даху",
  "keywords": [
    "площа даху",
    "калькулятор покрівлі",
    "площа схилу"
  ]
};
export const roofAreaCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
