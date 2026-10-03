import type { CalculatorCopy } from '../../lib/platform/types';

export const factorialCopyEn: CalculatorCopy = {
  "name": "Factorial calculator",
  "slug": "factorial-calculator",
  "shortDescription": "Exact n! for whole numbers up to 170.",
  "seoTitle": "Factorial calculator — exact n! up to 170",
  "seoDescription": "Calculate the exact factorial of a whole number up to 170, with the digit count and scientific form shown alongside.",
  "h1": "Factorial calculator",
  "keywords": [
    "factorial calculator",
    "n factorial",
    "exact factorial"
  ],
  "longDescription": "Calculates n! as an exact integer for n from 0 to 170. BigInt retains every product digit, with the digit count and a compact scientific form alongside. Already 20! exceeds the general safe-integer limit of the ordinary number type, although 20! itself is still exactly representable; that does not mean all larger factorials begin rounding at the same step.",
  "howItWorks": "n! is the product of every whole number from 1 to n, and 0! is defined as 1.",
  "example": "10! is 3 628 800, and 20! is already 2 432 902 008 176 640 000.",
  "howToUse": [
    "Enter a whole number from 0 to 170.",
    "Read the exact value.",
    "Check the digit count for very large results."
  ],
  "faq": [
    {
      "q": "Why stop at 170?",
      "a": "That is a limit of this page, not of the arithmetic. 170! already runs to 307 digits, and beyond it the answer stops being something you can read."
    },
    {
      "q": "Is the result exact?",
      "a": "Yes, the main value retains every digit using BigInt. Exceeding 2⁵³ − 1 removes the ordinary number type’s general exact-integer guarantee, rather than forcing an error specifically at 20!. The compact scientific row does not replace the full value."
    },
    {
      "q": "Why is 0! equal to one?",
      "a": "It is the empty product: multiplying nothing together leaves the multiplicative identity, and the definition keeps the combinatorial formulas consistent."
    },
    {
      "q": "Can I use a fraction?",
      "a": "No, this page accepts integers from 0 to 170 only. The extension uses Γ(n + 1), not Γ(n), and requires a separate calculation with its own domain."
    }
  ],
  "disclaimer": "The limit of 170 is a page rule, not a mathematical limit of factorials or BigInt. The main result is exact. The scientific form retains the first seven digits without rounding the last; single-digit results use one digit. The value of 170! has 307 digits. Fractional, negative, blank or invalid input is rejected."
};
