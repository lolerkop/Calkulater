import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const sampleSizeCopyEn: CalculatorCopy = {
  name: "Sample size calculator",
  slug: "sample-size",
  shortDescription: "How many respondents you need for a given accuracy.",
  seoTitle: "Sample size calculator \u2014 how many respondents to survey",
  seoDescription: "Calculate the required sample size from confidence level, margin of error and expected proportion, with a finite population correction.",
  h1: "Sample size calculator",
  keywords: ["sample size", "representative sample", "margin of error", "confidence level"],
  ...mathWave8ContractContent.en,
};
