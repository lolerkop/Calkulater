import type { CalculatorCopy } from '../../lib/platform/types';

export const binomialProbabilityCopyEn: CalculatorCopy = {
  name: "Binomial probability calculator",
  slug: "binomial-probability-calculator",
  shortDescription: "Probability of exactly k, at most k and at least k successes in a run of independent trials.",
  longDescription:
    "Computes probabilities for a run of independent trials with the same chance of success each time. The formula C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ has three factors doing different jobs: how many ways the successes can be arranged among the trials, how likely those successes are, and how likely the remaining failures are. Alongside the exact figure it shows the cumulative «at most» and «at least» probabilities — in practice those are the ones usually wanted — plus the expected value and standard deviation of the run.",
  seoTitle: "Binomial probability calculator — exactly k successes",
  seoDescription: "Calculate the binomial probability of exactly k, at most k or at least k successes across a run of independent trials.",
  h1: "Binomial probability calculator",
  keywords: ["binomial probability calculator", "probability of k successes", "bernoulli trials", "cumulative binomial"],
  howToUse: [
    "Enter the number of trials in the run.",
    "Enter the number of successes the probability is wanted for.",
    "Enter the probability of success in a single trial, from 0 to 1.",
    "Choose whether you need the exact or the cumulative probability.",
  ],
  howItWorks:
    "The probability of exactly k successes is C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Cumulative values come from summing over the relevant k. The expected value is n·p and the deviation the root of n·p·(1−p).",
  example: "Exactly three heads in ten tosses of a fair coin has probability 0.1172 — about 11.72% of runs.",
  faq: [
    { q: "When does this formula apply?", a: "When trials are independent, their number is fixed and the chance of success is the same each time. If trials influence each other the model does not fit." },
    { q: "How does «at most k» differ from «exactly k»?", a: "The cumulative probability sums every outcome up to and including k. In practice the question is usually «no more than how many», not «exactly this many»." },
    { q: "Why are combinations not computed from factorials?", a: "Because 20! already exceeds exact representation, while the combination itself is a small whole number. It is built by successive multiplication and division." },
    { q: "What happens at a probability of 0 or 1?", a: "The outcome becomes certain: at p = 1 every trial succeeds, at p = 0 none does. The standard deviation is zero in both cases." },
    { q: "Why can successes not exceed trials?", a: "Because no such outcome exists. Formally the probability is zero, but in practice it is a typo, so the calculation stops." },
  ],
};
