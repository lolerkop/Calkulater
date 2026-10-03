import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const probabilityBasicCopyEn: CalculatorCopy = {
  name: "Probability calculator",
  slug: "probability-calculator",
  shortDescription: "Probability of an event, its complement and of two independent events.",
  seoTitle: "Probability calculator — outcomes, complement and independent events",
  seoDescription: "Calculate the probability of an event from favourable outcomes, the probability of its complement, and probabilities of two independent events.",
  h1: "Probability calculator",
  keywords: ["probability calculator", "probability of an event", "complement probability", "independent events"],
  ...mathWave8ContractContent.en,
};
