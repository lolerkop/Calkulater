import type { CalculatorCopy } from '../../lib/platform/types';

export const combinatoricsCopyEn: CalculatorCopy = {
  "name": "Combinations and permutations calculator",
  "slug": "combinations-permutations-calculator",
  "shortDescription": "Combinations and permutations, with or without repetition.",
  "longDescription": "Count selections in four models: unordered combinations or ordered selections, each with or without repetition. n and k are integers from 0 to 1000; without repetition, k cannot exceed n. An empty selection k = 0 has one arrangement in every mode, even when n = 0. With n = 0 and k > 0, repetition yields zero possibilities. The primary answer is an exact BigInt integer with every digit; the additional scientific notation is only a compact approximation.",
  "seoTitle": "Combinations and permutations calculator — nCr and nPr",
  "seoDescription": "Calculate combinations and permutations with or without repetition, with exact whole-number results.",
  "h1": "Combinations and permutations calculator",
  "keywords": [
    "combinations calculator",
    "permutations calculator",
    "nCr nPr"
  ],
  "howToUse": [
    "Choose combinations or permutations.",
    "Say whether repetition is allowed.",
    "Enter the set size and the sample size."
  ],
  "howItWorks": "Without repetition: C(n,k) = n!/[k!(n−k)!] and P(n,k) = n!/(n−k)!. With repetition and n ≥ 1: C(n+k−1,k) and nᵏ. For k = 0 the empty choice counts once; for n = 0 and k > 0 with repetition the count is zero. Integer arithmetic stays exact without converting the result to Number.",
  "example": "Choosing 5 cards from 52 gives C(52, 5) = 2 598 960 possible hands.",
  "faq": [
    {
      "q": "What is the difference between combinations and permutations?",
      "a": "Order. Combinations treat AB and BA as the same selection; permutations count them separately."
    },
    {
      "q": "When can the sample exceed the set?",
      "a": "Only with repetition allowed. Drawing 5 items from 3 kinds makes sense if each kind can be taken more than once."
    },
    {
      "q": "Why is the result computed in exact integers?",
      "a": "BigInt preserves all integer digits. Beyond 9007199254740991, Number has no general exactness guarantee, although individual values can still be exact. C(60,30) = 118264581564861424 is representable, but C(61,30) = 232714176627630544 is not."
    },
    {
      "q": "Why is there an upper limit?",
      "a": "The limits n, k ≤ 1000 bound loops and output length on this page. They are not mathematical limits: C(n,0) = 1 also for larger n. Binomial coefficients use successive exact multiplications and divisions."
    }
  ]
};
