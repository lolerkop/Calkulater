import type { CalculatorCopy } from '../../lib/platform/types';
import { relativityDilationContractContent } from './contractContent';

export const relativityDilationCopyEn: CalculatorCopy = {
  name: "Time dilation calculator",
  slug: "time-dilation",
  shortDescription: "Lorentz factor, time dilation and length contraction.",
  seoTitle: "Time dilation calculator \u2014 Lorentz factor",
  seoDescription: "Calculate the Lorentz factor, time dilation and length contraction from a fraction of the speed of light.",
  h1: "Time dilation calculator",
  keywords: ["time dilation", "lorentz factor", "length contraction", "special relativity"],
  ...relativityDilationContractContent.en,
};
