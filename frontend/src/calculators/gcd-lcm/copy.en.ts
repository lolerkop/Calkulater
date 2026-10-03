import type { CalculatorCopy } from '../../lib/platform/types';

export const gcdLcmCopyEn: CalculatorCopy = {
  "name": "GCD and LCM calculator",
  "slug": "gcd-and-lcm-calculator",
  "shortDescription": "Greatest common divisor and least common multiple of a list of numbers.",
  "seoTitle": "GCD and LCM calculator online",
  "seoDescription": "Find the greatest common divisor and the least common multiple of two or more numbers.",
  "h1": "GCD and LCM calculator",
  "keywords": [
    "gcd calculator",
    "lcm calculator",
    "greatest common divisor",
    "least common multiple"
  ],
  "longDescription": "Finds the greatest common divisor and least positive common multiple of a list of positive integers. Both are folded pairwise using exact integer arithmetic. The coprime row means only that the GCD of the entire list is 1. For three or more numbers that is not the same as every pair being coprime: 6, 10, 15 have GCD 1 but LCM 30, not their product 900.",
  "howItWorks": "The GCD of a list is folded pairwise with Euclid's algorithm: GCD(a,b,c) = GCD(GCD(a,b),c). The LCM follows the same order through LCM(a,b) = a ÷ GCD(a,b) × b. Both results are exact integers.",
  "example": "For 24, 36, 60 and 84 the greatest common divisor is 12 and the least common multiple is 2,520.",
  "howToUse": [
    "Enter two or more whole numbers.",
    "Separate them with spaces, semicolons or line breaks.",
    "The numbers must be whole and greater than zero.",
    "The result covers the whole list at once."
  ],
  "faq": [
    {
      "q": "How many numbers can I enter?",
      "a": "From 2 to 1000 positive integers, within 20000 characters. This is a page limit. The LCM must also fit within 9007199254740991."
    },
    {
      "q": "Why are fractions rejected?",
      "a": "This tool handles positive integers only. Rational numbers require a separate definition of common divisor and multiple; the calculator does not silently turn the task into fraction arithmetic."
    },
    {
      "q": "What does the coprime row mean?",
      "a": "No divisor greater than 1 is common to the whole list. The LCM equals the product for pairwise coprime numbers; a collective GCD of 1 alone is insufficient for a longer list. Counterexample: 6, 10, 15 give GCD 1 and LCM 30."
    },
    {
      "q": "What is the LCM actually used for?",
      "a": "Most often for putting fractions over a common denominator, and for questions about cycles lining up: two events with periods of 12 and 18 days coincide after 36 days, which is their LCM. Cycle alignment assumes a shared starting time; different phases require more than an LCM."
    },
    {
      "q": "Why can the calculation stop on a long list?",
      "a": "The LCM grows very quickly and for a large set it exceeds the exact-integer range. Showing a rounded value is not an option, because it would no longer divide by the original numbers, so the calculation stops honestly instead."
    }
  ],
  "disclaimer": "Enter 2 to 1000 positive integers, within 20000 characters. Each integer and the final LCM must be at most 9007199254740991. Separate numbers by spaces, line breaks or semicolons; a comma without a following space is treated as part of a number. Invalid, fractional or oversized inputs are not rounded."
};
