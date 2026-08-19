import type { CalculatorCopy } from '../../lib/platform/types';

export const probabilityBasicCopyEn: CalculatorCopy = {
  name: "Probability calculator",
  slug: "probability-calculator",
  shortDescription: "Probability of an event, its complement and of two independent events.",
  longDescription:
    "Computes basic probability four ways: the share of favourable outcomes, the probability of the complement, and both the joint occurrence and the \"at least one\" case for two independent events. That last one is where intuition fails most often: \"at least one\" of two 50% events is not 100% but 75%, because probabilities cannot simply be added — the correct formula subtracts the overlap.",
  seoTitle: "Probability calculator — outcomes, complement and independent events",
  seoDescription: "Calculate the probability of an event from favourable outcomes, the probability of its complement, and probabilities of two independent events.",
  h1: "Probability calculator",
  keywords: ["probability calculator", "probability of an event", "complement probability", "independent events"],
  howToUse: ["Choose what you are computing.", "Enter the outcomes or the event probabilities.", "Read the probability as a fraction, a percentage and odds."],
  howItWorks: "The probability of an event is favourable outcomes divided by all outcomes. The complement is 1 − p. Both independent events: p₁ · p₂. At least one: p₁ + p₂ − p₁ · p₂.",
  example: "One favourable outcome out of six gives a probability of 0.1667, that is 16.667 %.",
  faq: [
    { q: "Why is \"at least one\" of two 50% events not 100%?", a: "Because probabilities cannot simply be added: adding would count the case where both happen twice. The correct formula subtracts that overlap: 0.5 + 0.5 − 0.25 = 0.75." },
    { q: "What does \"independent events\" mean?", a: "That the outcome of one does not affect the other: two coin tosses are independent, whereas drawing two cards without replacement is not, and needs a different formula." },
    { q: "How do I read the odds?", a: "Odds of \"5 to 1\" mean five unfavourable outcomes for every favourable one. It is the same information as the probability, written differently." },
    { q: "Can a probability exceed one?", a: "No. One means a certain event and nothing exceeds it — which is why there cannot be more favourable outcomes than outcomes in total." },
  ],
};
