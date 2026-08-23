import type { CalculatorCopy } from '../../lib/platform/types';

export const sampleSizeCopyEn: CalculatorCopy = {
  name: "Sample size calculator",
  slug: "sample-size",
  shortDescription: "How many respondents you need for a given accuracy.",
  longDescription:
    "This is the inverse of a confidence interval: there the number of respondents is known and the interval width comes out, here the acceptable error is given and the number of people comes out. A proportion of 50 % yields the largest sample \u2014 p\u00b7(1\u2212p) peaks exactly in the middle \u2014 which is why it is the default: you cannot err on the high side. The finite population correction kicks in once the population size is known: surveying 384 people out of a village of 500 is unnecessary.",
  seoTitle: "Sample size calculator \u2014 how many respondents to survey",
  seoDescription: "Calculate the required sample size from confidence level, margin of error and expected proportion, with a finite population correction.",
  h1: "Sample size calculator",
  keywords: ["sample size", "representative sample", "margin of error", "confidence level"],
  howToUse: [
    "Margin of error is half the interval width: \"\u00b13 %\" means 3.",
    "Set the expected proportion to 50 % if unknown: that gives the largest and therefore safe sample.",
    "Set population to zero when it is large or unknown \u2014 the correction then stays off.",
    "This assumes simple random sampling. Cluster or quota designs need more people.",
  ],
  howItWorks: "n\u2080 = z\u00b2\u00b7p\u00b7(1\u2212p)/e\u00b2; with a known population n = n\u2080/(1 + (n\u2080\u22121)/N).",
  example: "At 95 % with a 5 % margin you need 385 people whatever the size of the city.",
  faq: [
    { q: "Why is the sample largest at 50 %?", a: "Because the formula contains p\u00b7(1\u2212p), which peaks exactly at one half. At 10 % or 90 % the variance is smaller and you need a third as many \u2014 but if you do not know the proportion beforehand, 50 % is the safe choice." },
    { q: "Why does the sample barely depend on city size?", a: "Without the correction the population size does not enter the formula at all: precision comes from the number surveyed, not from the share of the population. The correction only bites when the sample is comparable to the population \u2014 from about one twentieth." },
    { q: "What does moving from 95 % to 99 % cost?", a: "The critical value rises from 1.96 to 2.58 and the sample as its square, so 1.73 times. It is the most expensive setting: halving the error is cheaper than four points of extra confidence." },
    { q: "Does this cover A/B tests?", a: "Partly: this sizes ONE proportion. Comparing two variants calls for a difference-of-proportions calculation and roughly twice as many people \u2014 one sample per variant." },
  ],
};
