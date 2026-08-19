import type { CalculatorCopy } from '../../lib/platform/types';

export const factorialCopyEn: CalculatorCopy = {
  name: "Factorial calculator",
  slug: "factorial-calculator",
  shortDescription: "Exact n! for whole numbers up to 170.",
  longDescription:
    "Multiplies every whole number up to n, in exact integer arithmetic. By 20! the result already exceeds what ordinary browser numbers hold safely, so anything less than exact arithmetic would quietly drop the low digits and present a rounding as the answer.",
  seoTitle: "Factorial calculator — exact n! up to 170",
  seoDescription: "Calculate the exact factorial of a whole number up to 170, with the digit count and scientific form shown alongside.",
  h1: "Factorial calculator",
  keywords: ["factorial calculator", "n factorial", "exact factorial"],
  howToUse: ["Enter a whole number from 0 to 170.", "Read the exact value.", "Check the digit count for very large results."],
  howItWorks: "n! is the product of every whole number from 1 to n, and 0! is defined as 1.",
  example: "10! is 3 628 800, and 20! is already 2 432 902 008 176 640 000.",
  faq: [
    { q: "Why stop at 170?", a: "That is a limit of this page, not of the arithmetic. 170! already runs to 307 digits, and beyond it the answer stops being something you can read." },
    { q: "Is the result exact?", a: "Yes, every digit. Ordinary numbers lose precision past 20!, so exact integer arithmetic is used throughout." },
    { q: "Why is 0! equal to one?", a: "It is the empty product: multiplying nothing together leaves the multiplicative identity, and the definition keeps the combinatorial formulas consistent." },
    { q: "Can I use a fraction?", a: "No. Extending factorials to non-integers is the gamma function, which is a different calculation." },
  ],
};
