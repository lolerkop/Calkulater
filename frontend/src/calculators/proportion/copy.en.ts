import type { CalculatorCopy } from '../../lib/platform/types';

export const proportionCopyEn: CalculatorCopy = {
  "name": "Proportion calculator",
  "slug": "proportion-calculator",
  "shortDescription": "Solve a : b = c : d for any of the four terms.",
  "longDescription": "Solve a/b = c/d for the selected term. The unknown field is hidden; enter only the three known values. Denominators b and d must remain nonzero after solving. The diagonally opposite term must also be nonzero for a unique answer using the selected formula. Zero numerators a or c are allowed. The result shows the missing term, completed proportion, quotient and cross products.",
  "seoTitle": "Proportion calculator — solve a : b = c : d online",
  "seoDescription": "Find any term of a proportion by cross multiplication, with the completed proportion and the check.",
  "h1": "Proportion calculator",
  "keywords": [
    "proportion calculator",
    "cross multiplication",
    "ratio"
  ],
  "howToUse": [
    "Choose which term to find.",
    "Fill in the three known terms.",
    "Read the answer and the check."
  ],
  "howItWorks": "For b ≠ 0 and d ≠ 0, a/b = c/d is equivalent to ad = bc. Hence a = bc/d, b = ad/c, c = ad/b and d = bc/a, requiring a nonzero divisor in the selected formula. The intermediate binary product is retained exactly before the quotient is rounded.",
  "example": "In 2 : 3 = 4 : d the fourth term is 3 × 4 ÷ 2 = 6.",
  "faq": [
    {
      "q": "Why is one field hidden?",
      "a": "The term you are solving for is computed, so leaving it visible would invite a value that is then ignored."
    },
    {
      "q": "Which term cannot be zero?",
      "a": "The original equality requires b ≠ 0 and d ≠ 0. The diagonally opposite term must also be nonzero for division in the chosen formula. A zero divisor can lead to no solution or many solutions; this page does not classify those cases."
    },
    {
      "q": "Can the terms be negative?",
      "a": "Yes, finite negative and fractional values are allowed when the denominators and formula divisor are nonzero. A zero numerator is valid, but 0/0 is not a defined ratio."
    },
    {
      "q": "What is the cross-product check?",
      "a": "The products a·d and b·c use the internally computed missing term before display rounding. This is a numeric check, not a proof of exact decimal data: the rounded term shown may not reproduce the products literally."
    }
  ],
  "disclaimer": "All three known values must be finite. The missing term, quotient and displayed products must fit the numeric range without a nonzero value rounding to zero; otherwise an error is shown. Ordinary notation rounds to four decimal places; very small and large values use scientific notation."
};
