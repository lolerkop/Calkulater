import type { CalculatorCopy } from '../../lib/platform/types';

export const linearEquationCopyEn: CalculatorCopy = {
  "name": "Linear equation calculator",
  "slug": "linear-equation-calculator",
  "shortDescription": "Solves ax + b = c and shows every step.",
  "seoTitle": "Linear equation calculator — solve ax + b = c",
  "seoDescription": "Solve a linear equation of the form ax + b = c with the steps shown and the answer checked by substitution.",
  "h1": "Linear equation calculator",
  "keywords": [
    "linear equation calculator",
    "solve for x",
    "ax + b = c"
  ],
  "longDescription": "Solves the numerical equation ax + b = c by moving b, dividing by a and showing substitution of the calculated x. At a = 0 the question becomes b = c: if true, every real x works; otherwise there is no solution. Both cases are meaningful answers. For x on both sides, collect the coefficients before entering them.",
  "howItWorks": "x = (c − b) ÷ a whenever a is not zero; if a is zero the equation reduces to comparing b with c.",
  "example": "For 3x + 5 = 20, moving 5 gives 3x = 15 and dividing gives x = 5.",
  "howToUse": [
    "Enter the coefficient in front of x.",
    "Enter the constant term and the right-hand side.",
    "Read the root and the steps."
  ],
  "faq": [
    {
      "q": "What happens when the coefficient is zero?",
      "a": "The x term disappears and the equation becomes b = c. If that is true, every number is a root; if not, there is none."
    },
    {
      "q": "Are negative coefficients supported?",
      "a": "Yes, all three values may be negative or fractional. The sign is carried through the division."
    },
    {
      "q": "Why show a substitution check?",
      "a": "Substituting the calculated x helps check signs and rearrangement. The row is rounded, so a visible equality does not prove last-digit accuracy. Check the original coefficients algebraically when an exact fractional answer is needed."
    },
    {
      "q": "Can it solve quadratics?",
      "a": "No, this is degree one only. A separate calculator handles equations with an x squared term."
    }
  ],
  "disclaimer": "Enter finite numerical coefficients, including zero and negative values. Steps and substitution are rounded to six significant digits; small and large values use scientific notation. Substitution is a numerical check, not proof that the rounded text is exact. The calculation stops if a displayed intermediate result or x falls outside the number range."
};
