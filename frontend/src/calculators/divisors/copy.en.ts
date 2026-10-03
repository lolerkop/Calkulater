import type { CalculatorCopy } from '../../lib/platform/types';

export const divisorsCopyEn: CalculatorCopy = {
  "name": "Divisors calculator",
  "slug": "divisors-calculator",
  "shortDescription": "Positive divisors: the first 40, full count, sum and proper-divisor sum.",
  "longDescription": "Find positive divisors of an integer n from 1 to 1000000000000, their count, their sum and the proper-divisor sum excluding n itself. Each divisor i up to √n provides its partner n/i. For a square, the coincident square root is counted once. Totals use the entire set; the main result previews only the first 40 divisors. For n = 1 the set contains just one; one is not prime.",
  "seoTitle": "Divisors calculator — all divisors, count and sum",
  "seoDescription": "Find positive divisors of an integer up to 10¹²: preview the first 40, with the full divisor count, sum and proper-divisor sum.",
  "h1": "Divisors calculator",
  "keywords": [
    "divisors calculator",
    "factors of a number",
    "sum of divisors"
  ],
  "howToUse": [
    "Enter a whole number of one or more.",
    "View the first 40 divisors; the full count and sums are shown separately.",
    "Check the count and sum below it."
  ],
  "howItWorks": "Every i up to the square root that divides n contributes both i and n ÷ i; the pair coincides for a perfect square.",
  "example": "360 has 24 divisors adding up to 1170.",
  "faq": [
    {
      "q": "How is this different from prime factorisation?",
      "a": "Factorisation gives the prime building blocks; this gives every number that divides evenly. Building one list from the other still takes work."
    },
    {
      "q": "Why does a perfect square have an odd count?",
      "a": "Its square root pairs with itself, so one divisor has no distinct partner and the total comes out odd."
    },
    {
      "q": "What makes a number perfect?",
      "a": "Its proper divisors add up to the number itself. Six is the smallest: one plus two plus three."
    },
    {
      "q": "Why are numbers capped at a trillion?",
      "a": "For n ≤ 10¹², trial division up to √n needs at most a million checks. This is the page’s workload limit; actual time depends on the device. Larger integers also have divisors, but this tool does not accept them."
    }
  ]
};
