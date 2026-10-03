import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const utilityTotalCopyEn: CalculatorCopy = {
  ...{
  "name": "Utility bills calculator",
  "slug": "utility-bills",
  "shortDescription": "Adds up metered utilities and fixed charges into one monthly total.",
  "seoTitle": "Utility bills calculator: meters, tariffs and fixed charges",
  "seoDescription": "Add up electricity, water and gas from meter readings and tariffs, plus fixed charges, into one monthly total.",
  "h1": "Utility bills calculator",
  "keywords": [
    "utility bills calculator",
    "monthly utilities total",
    "meter readings cost",
    "electricity water gas bill"
  ]
},
  ...contractContent.en,
};
