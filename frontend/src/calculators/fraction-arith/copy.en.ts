import type { CalculatorCopy } from '../../lib/platform/types';

export const fractionArithCopyEn: CalculatorCopy = {
  "name": "Fraction calculator",
  "slug": "fraction-calculator",
  "shortDescription": "Add, subtract, multiply and divide fractions with exact reduction.",
  "seoTitle": "Fraction calculator — add, subtract, multiply, divide",
  "seoDescription": "Add, subtract, multiply and divide fractions with an exact result and automatic reduction.",
  "h1": "Fraction calculator",
  "keywords": [
    "fraction calculator",
    "adding fractions",
    "dividing fractions",
    "simplify fraction"
  ],
  "longDescription": "Adds, subtracts, multiplies and divides two fractions while keeping integer numerators and denominators until reduction. One third has no finite decimal representation; rounding intermediate decimal values can change an answer. Exactly, 1/3 + 2/3 is 1, but not every numerical method necessarily returns 0.99999… The decimal row is a rounded reference; the main result is the exact reduced fraction.",
  "howItWorks": "Addition and subtraction go through the common denominator b·d, multiplication multiplies numerators and denominators, and division multiplies by the reciprocal of the second fraction. The result is reduced by the GCD and the sign is carried in the numerator.",
  "example": "1/2 + 1/3 = 5/6 — exactly, with no intermediate rounding.",
  "howToUse": [
    "Choose the operation.",
    "Enter the numerators and denominators of both fractions.",
    "Read the exact, reduced result."
  ],
  "faq": [
    {
      "q": "Why not just add the decimal values?",
      "a": "A fraction retains an exact integer ratio. For example, rounding 1/3 and 2/3 to 0.33 and 0.67 loses each term’s precision even though their sum happens to remain 1. Here reduction happens before decimal display."
    },
    {
      "q": "Is the result reduced automatically?",
      "a": "Yes, by the greatest common divisor of numerator and denominator. 6/12 is shown as 1/2, and the factor it was reduced by is reported on its own line."
    },
    {
      "q": "Where does a minus sign go?",
      "a": "Into the numerator. −1/2 and 1/−2 mean the same thing, so the denominator is always normalised to be positive."
    },
    {
      "q": "Is there a limit on the size of the numbers?",
      "a": "Yes, one million in magnitude for each. That keeps every intermediate product inside the exact-integer range, so the result cannot silently lose precision."
    }
  ],
  "disclaimer": "Each numerator and denominator must be an integer of magnitude at most 1000000. Both denominators must be nonzero; division also requires a nonzero second numerator. Zero numerators are valid. The exact fraction is not rounded. The decimal value uses up to six decimal places; for 0 < |x| < 10⁻⁶, scientific notation has seven significant digits."
};
