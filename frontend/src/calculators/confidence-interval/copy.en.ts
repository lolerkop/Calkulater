import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const confidenceIntervalCopyEn: CalculatorCopy = {
  name: "Confidence interval calculator",
  slug: "confidence-interval-calculator",
  shortDescription: "Confidence interval for a mean from sample size, standard deviation and confidence level.",
  seoTitle: "Confidence interval calculator for a mean",
  seoDescription: "Calculate a confidence interval for a mean from the sample mean, standard deviation, sample size and confidence level.",
  h1: "Confidence interval calculator",
  keywords: ["confidence interval calculator", "standard error of the mean", "confidence level", "interval estimate"],
  ...mathWave8ContractContent.en,
};
