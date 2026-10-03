import type { CalculatorCopy } from '../../lib/platform/types';

export const ratioCopyEn: CalculatorCopy = {
  "name": "Ratio calculator",
  "slug": "ratio-calculator",
  "shortDescription": "Simplify a ratio and divide an amount in proportion.",
  "longDescription": "Simplify a ratio of positive parts and optionally divide an amount in proportion to the weights. Accepts 2–1000 parts in at most 20000 characters. Integer parts no larger than 9007199254740991 are reduced by their exact GCD. Fractional parts are displayed unreduced here, although a decimal ratio can mathematically be scaled to integers. Integer-part sums retain all digits; fractional weights and allocations use finite binary precision. A blank amount or zero disables allocation.",
  "seoTitle": "Ratio calculator: simplify and divide an amount",
  "seoDescription": "Simplify a ratio, see each part's share as a percentage and split an amount in the given proportion.",
  "h1": "Ratio calculator",
  "keywords": [
    "ratio calculator",
    "simplify ratio",
    "divide in proportion",
    "ratio to percentage"
  ],
  "howToUse": [
    "Enter 2–1000 positive parts separated by spaces, colons or semicolons; do not group digits with spaces inside a number.",
    "Leave the amount at zero to simplify the ratio only.",
    "Enter an amount to split it in this proportion."
  ],
  "howItWorks": "Whole parts are divided by their greatest common divisor — that is the simplification. Each part's share = part ÷ sum of the parts. With an amount given, a part receives amount × part ÷ sum of the parts.",
  "example": "The ratio 2:3:5 applied to 6,000 gives 1,200, 1,800 and 3,000, and the first part's share is 20%.",
  "faq": [
    {
      "q": "How is this different from a proportion?",
      "a": "A proportion solves an equation like a/b = c/d for the missing term. This is a different task: simplifying a ratio and splitting an amount across it, with nothing unknown."
    },
    {
      "q": "Why aren't fractional parts simplified?",
      "a": "This is an implementation choice, not a mathematical impossibility. Multiplying 1.5:2.5 by 2 gives 3:5 after reduction. This page performs exact GCD reduction only for integer parts and retains fractional weights for share calculations."
    },
    {
      "q": "How many parts can I enter?",
      "a": "Enter 2–1000 positive finite parts, in at most 20000 characters. Separate them with spaces, colons or semicolons. A comma without following whitespace is decimal; a comma followed by whitespace separates parts."
    },
    {
      "q": "Why is the sum taken from the entered values?",
      "a": "So the percentages match what you typed. For 12:18 the sum of the parts is 30 rather than 5, even though the simplified form is 2:3."
    },
    {
      "q": "How do I split an amount unevenly?",
      "a": "Give the parts in the proportion you want: 50:30:20 splits an amount in that ratio, while 1:1:1 divides it equally three ways."
    }
  ],
  "disclaimer": "The allocation amount must be finite and nonnegative; negative or malformed input produces an error. Rounded percentages may not add to exactly 100%. Allocations do not balance cents; monetary payments need a separate rounding policy. A nonzero share or allocation rounding to zero is rejected."
};
