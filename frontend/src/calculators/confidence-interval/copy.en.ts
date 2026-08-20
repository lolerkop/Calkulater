import type { CalculatorCopy } from '../../lib/platform/types';

export const confidenceIntervalCopyEn: CalculatorCopy = {
  name: "Confidence interval calculator",
  slug: "confidence-interval-calculator",
  shortDescription: "Confidence interval for a mean from sample size, standard deviation and confidence level.",
  longDescription:
    "Shows the range the true mean is likely to lie in, given a sample mean, a standard deviation and a sample size. The width is set not by the spread itself but by the standard error of the mean: the deviation divided by the square root of the sample size. The practical consequence follows directly — halving the interval requires four times the sample, not twice. Critical values are those of the normal distribution: 1.645 for 90%, 1.96 for 95% and 2.576 for 99%.",
  seoTitle: "Confidence interval calculator for a mean",
  seoDescription: "Calculate a confidence interval for a mean from the sample mean, standard deviation, sample size and confidence level.",
  h1: "Confidence interval calculator",
  keywords: ["confidence interval calculator", "standard error of the mean", "confidence level", "interval estimate"],
  howToUse: [
    "Enter the sample mean — it may be negative.",
    "Enter the sample standard deviation.",
    "Enter the sample size; it must be at least two.",
    "Choose the confidence level — a higher level gives a wider interval.",
  ],
  howItWorks:
    "Standard error = deviation ÷ square root of the sample size. Margin of error = critical value × standard error. The interval is the mean ± the margin of error.",
  example: "A mean of 100 with a deviation of 15 over a sample of 36 gives 95.1 … 104.9 at the 95% level.",
  faq: [
    { q: "Why does sample size enter through a square root?", a: "Because averaging reduces spread in proportion to the root of the number of observations. Halving the interval takes four times the sample." },
    { q: "Is the Student distribution used?", a: "No — critical values of the normal distribution are applied. On small samples the true interval is slightly wider, and that is a deliberate simplification." },
    { q: "Why is a sample of one rejected?", a: "Because a single value has no spread: the standard error would be meaningless and the interval shown would be a number without content." },
    { q: "What does a 95% confidence level mean?", a: "That across repeated experiments about 95% of such intervals would contain the true mean. It is a property of the method, not a probability for one particular interval." },
    { q: "Can the deviation be zero?", a: "Yes. If every value is identical there is no spread and the interval collapses to a point — the calculation reports that honestly." },
  ],
};
