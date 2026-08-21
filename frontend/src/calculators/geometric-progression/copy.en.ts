import type { CalculatorCopy } from '../../lib/platform/types';

export const geometricProgressionCopyEn: CalculatorCopy = {
  name: "Geometric progression calculator",
  slug: "geometric-progression",
  shortDescription: "The n-th term, the sum of the series and the terms themselves.",
  longDescription:
    "A twin of the arithmetic progression calculator, table included, with two differences that matter. The ratio cannot be zero — a series multiplied by nothing collapses at the second term and is not a progression. And when the ratio is smaller than one in absolute value the sum of the infinite series appears, which is usually why anyone opens a geometric progression in the first place. The representable range is stated openly: at a ratio of ten and fifty terms the last term is ten to the forty-ninth, and printing that as an ordinary number would be quietly dishonest.",
  seoTitle: "Geometric progression calculator: n-th term and sum",
  seoDescription: "Work out the n-th term, the sum of the series and the sum of the infinite series of a geometric progression.",
  h1: "Geometric progression calculator",
  keywords: ["geometric progression calculator", "n-th term of a geometric sequence", "sum of geometric series", "infinite geometric series"],
  howToUse: [
    "Enter the first term — it may be negative.",
    "Enter the ratio: 2 doubles each step, 0.5 halves it.",
    "Enter how many terms you need, up to fifty.",
    "The table lists the first twenty terms.",
  ],
  howItWorks:
    "The n-th term is the first term times the ratio to the power of n minus one. The sum is the first term times one minus the ratio to the n-th, divided by one minus the ratio; when the ratio is one the sum is simply the first term times n.",
  example: "Starting at 2 with a ratio of 3, the tenth term is 39,366 and the series sums to 59,048.",
  faq: [
    { q: "Why is a ratio of zero rejected?", a: "Because every term after the first would be zero. That is not a progression, and showing a table of zeroes would suggest the input made sense." },
    { q: "When does the infinite sum exist?", a: "When the ratio is between minus one and one, exclusive. Then the terms shrink fast enough for the total to settle on a finite number." },
    { q: "Can the ratio be negative?", a: "Yes. The terms then alternate in sign, and the sum formula handles it without change." },
    { q: "Why fifty terms and not more?", a: "Because beyond that the values leave the range where an ordinary decimal is readable. The limit is a display honesty limit, not an arithmetic one." },
    { q: "Is a progression the same thing as compound interest?", a: "The arithmetic is the same and the names differ: the ratio is one plus the rate. The difference is that here you see the sequence of terms, while money calculators show only the total." },
  ],
};
