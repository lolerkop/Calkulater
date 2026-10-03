import type { CalculatorCopy } from '../../lib/platform/types';

export const fibonacciCopyEn: CalculatorCopy = {
  "name": "Fibonacci calculator",
  "slug": "fibonacci-calculator",
  "shortDescription": "The nth Fibonacci number, the sum of the series and the ratio between neighbours.",
  "longDescription": "Compute a term, the inclusive sum of the first n terms and the preceding term. Here F₁ = 0 and F₂ = 1, so the first index means zero. From n = 3 onward the approximate ratio to the previous term is also shown. BigInt retains every digit of integer terms and sums. Indices are integers from 1 to 78: this retained page limit is not a limit of the recurrence or of BigInt. The table previews the first ten terms.",
  "seoTitle": "Fibonacci calculator online",
  "seoDescription": "Find the nth Fibonacci number, the sum of the series and the ratio between neighbouring terms that approaches the golden ratio.",
  "h1": "Fibonacci calculator",
  "keywords": [
    "fibonacci calculator",
    "fibonacci sequence",
    "nth fibonacci number",
    "golden ratio"
  ],
  "howToUse": [
    "Enter the position of the term you need.",
    "Numbering starts at F₁ = 0 and F₂ = 1.",
    "Positions from the first to the seventy-eighth are available.",
    "The ratio to the previous term appears from the third onward."
  ],
  "howItWorks": "F₁ = 0, F₂ = 1 and Fₙ = Fₙ₋₁ + Fₙ₋₂. The first n terms sum to Fₙ₊₂ − 1. The common convention F₀ = 0 starts one index earlier, so compare initial terms before using an index from another source.",
  "example": "The twentieth term is 4,181, the sum of the first twenty is 10,945, and the ratio to the previous term is already 1.618.",
  "faq": [
    {
      "q": "Where does the series start?",
      "a": "Here it starts at zero: F₁ = 0, F₂ = 1, F₃ = 1, F₄ = 2 and so on. Another common convention makes the first term 1, which shifts every position by one — the tenth term would then be 55 rather than 34."
    },
    {
      "q": "Why can't I go past the 78th term?",
      "a": "78 is the retained limit of this page. With this indexing, the 79th term is 8944394323791464 and is still a safe Number integer; the 80th exceeds the general safe-integer bound. BigInt could continue the sequence, but that input is outside this page’s supported range."
    },
    {
      "q": "How is the series related to the golden ratio?",
      "a": "The ratio between neighbouring terms approaches 1.6180339… as the position grows. By the tenth term it is 1.619, and by the twentieth it is indistinguishable from the limit to four decimal places."
    },
    {
      "q": "Why do the first two terms have no ratio?",
      "a": "There is nothing to divide by: the first term has no predecessor and the second one's predecessor is zero. Omitting the row is more honest than printing infinity."
    },
    {
      "q": "What is the sum of the first n terms?",
      "a": "It is always one less than the term at position n+2. The sum of the first ten is 88, and the twelfth term is 89."
    }
  ]
};
