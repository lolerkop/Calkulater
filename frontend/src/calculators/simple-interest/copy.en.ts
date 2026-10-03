import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const simpleInterestCopyEn: CalculatorCopy = {
  name: "Simple interest calculator",
  slug: "simple-interest",
  shortDescription: "Interest charged on the initial amount only, in both directions.",
  seoTitle: "Simple interest calculator — interest and required rate",
  seoDescription: "Calculate simple interest on the initial amount, the total and the rate needed for a given interest.",
  h1: "Simple interest calculator",
  keywords: ["simple interest","interest calculator","required rate"],
  ...contractContent.en,
};
