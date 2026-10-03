import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const pricePerUnitCopyEn: CalculatorCopy = {
  "name": "Price per unit calculator",
  "slug": "price-per-unit-calculator",
  "shortDescription": "Price per kilogram, litre or piece, and a comparison of two packs.",
  "seoTitle": "Price per unit calculator — compare pack sizes",
  "seoDescription": "Calculate the price per kilogram, litre or piece and compare two packs to see which is cheaper.",
  "h1": "Price per unit calculator",
  "keywords": ["price per unit calculator", "price per kg", "unit price comparison", "which pack is cheaper"],
  ...contract.en,
};
