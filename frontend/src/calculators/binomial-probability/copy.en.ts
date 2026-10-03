import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const binomialProbabilityCopyEn: CalculatorCopy = {
  name: "Binomial probability calculator",
  slug: "binomial-probability-calculator",
  shortDescription: "Probability of exactly k, at most k and at least k successes in a run of independent trials.",
  seoTitle: "Binomial probability calculator — exactly k successes",
  seoDescription: "Calculate the binomial probability of exactly k, at most k or at least k successes across a run of independent trials.",
  h1: "Binomial probability calculator",
  keywords: ["binomial probability calculator", "probability of k successes", "bernoulli trials", "cumulative binomial"],
  ...mathWave8ContractContent.en,
};
