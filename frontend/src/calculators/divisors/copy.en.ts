import type { CalculatorCopy } from '../../lib/platform/types';

export const divisorsCopyEn: CalculatorCopy = {
  name: "Divisors calculator",
  slug: "divisors-calculator",
  shortDescription: "Every divisor of a number, with count and sum.",
  longDescription:
    "Trial division runs only up to the square root: each divisor found immediately yields its partner, so a number near a trillion needs a million steps rather than a trillion. A perfect square pairs with itself, and that duplicate is removed — otherwise the count would come out even where it is always odd.",
  seoTitle: "Divisors calculator — all divisors, count and sum",
  seoDescription: "List every divisor of a whole number with the count, the sum and whether the number is prime or perfect.",
  h1: "Divisors calculator",
  keywords: ["divisors calculator", "factors of a number", "sum of divisors"],
  howToUse: ["Enter a whole number of one or more.", "Read the full list of divisors.", "Check the count and sum below it."],
  howItWorks: "Every i up to the square root that divides n contributes both i and n ÷ i; the pair coincides for a perfect square.",
  example: "360 has 24 divisors adding up to 1170.",
  faq: [
    { q: "How is this different from prime factorisation?", a: "Factorisation gives the prime building blocks; this gives every number that divides evenly. Building one list from the other still takes work." },
    { q: "Why does a perfect square have an odd count?", a: "Its square root pairs with itself, so one divisor has no distinct partner and the total comes out odd." },
    { q: "What makes a number perfect?", a: "Its proper divisors add up to the number itself. Six is the smallest: one plus two plus three." },
    { q: "Why are numbers capped at a trillion?", a: "Trial division to the square root of a trillion is already a million steps. Beyond that the page would stop feeling instant." },
  ],
};
