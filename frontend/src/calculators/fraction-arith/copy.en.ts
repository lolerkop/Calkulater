import type { CalculatorCopy } from '../../lib/platform/types';

export const fractionArithCopyEn: CalculatorCopy = {
  name: "Fraction calculator",
  slug: "fraction-calculator",
  shortDescription: "Add, subtract, multiply and divide fractions with exact reduction.",
  longDescription:
    "Works fractions exactly, in whole numbers, without going through decimals. That matters: one third has no finite decimal form, and rounding on the way makes 1/3 + 2/3 come out as 0.99999… instead of one. Here the numerator and denominator stay integral to the end, the result is reduced by the greatest common divisor and the sign is carried in the numerator. The decimal value is shown alongside as a reference, not as the basis of the arithmetic.",
  seoTitle: "Fraction calculator — add, subtract, multiply, divide",
  seoDescription: "Add, subtract, multiply and divide fractions with an exact result and automatic reduction.",
  h1: "Fraction calculator",
  keywords: ["fraction calculator", "adding fractions", "dividing fractions", "simplify fraction"],
  howToUse: ["Choose the operation.", "Enter the numerators and denominators of both fractions.", "Read the exact, reduced result."],
  howItWorks: "Addition and subtraction go through the common denominator b·d, multiplication multiplies numerators and denominators, and division multiplies by the reciprocal of the second fraction. The result is reduced by the GCD and the sign is carried in the numerator.",
  example: "1/2 + 1/3 = 5/6 — exactly, with no intermediate rounding.",
  faq: [
    { q: "Why not just add the decimal values?", a: "Because one third has no finite decimal form. Round it and 1/3 + 2/3 comes out as 0.99999… instead of one, and the error compounds from there." },
    { q: "Is the result reduced automatically?", a: "Yes, by the greatest common divisor of numerator and denominator. 6/12 is shown as 1/2, and the factor it was reduced by is reported on its own line." },
    { q: "Where does a minus sign go?", a: "Into the numerator. −1/2 and 1/−2 mean the same thing, so the denominator is always normalised to be positive." },
    { q: "Is there a limit on the size of the numbers?", a: "Yes, one million in magnitude for each. That keeps every intermediate product inside the exact-integer range, so the result cannot silently lose precision." },
  ],
};
