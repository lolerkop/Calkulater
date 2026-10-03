import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const paybackPeriodCopyEn: CalculatorCopy = {
  name: "Payback period calculator",
  slug: "payback-period",
  shortDescription: "How long an investment takes to pay for itself.",
  seoTitle: "Payback period calculator — simple and discounted",
  seoDescription: "Calculate the payback period of an investment from the annual cash flow, with discounting at a given rate.",
  h1: "Payback period calculator",
  keywords: ["payback period","discounted payback","cash flow","investment appraisal"],
  ...contractContent.en,
};
