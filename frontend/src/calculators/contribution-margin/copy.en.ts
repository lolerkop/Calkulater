import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const contributionMarginCopyEn: CalculatorCopy = {
  name: "Contribution margin calculator",
  slug: "contribution-margin",
  shortDescription: "What is left of the price after variable costs.",
  seoTitle: "Contribution margin calculator — margin per unit and its share",
  seoDescription: "Calculate contribution margin per unit, its share of the price and the margin on a given volume.",
  h1: "Contribution margin calculator",
  keywords: ["contribution margin","margin per unit","unit economics"],
  ...contractContent.en,
};
