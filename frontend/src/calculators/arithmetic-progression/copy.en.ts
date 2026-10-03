import type { CalculatorCopy } from '../../lib/platform/types';

export const arithmeticProgressionCopyEn: CalculatorCopy = {
  "name": "Arithmetic progression calculator",
  "slug": "arithmetic-progression-calculator",
  "shortDescription": "The nth term and the sum of an arithmetic progression from the first term and the common difference.",
  "longDescription": "Find the nth term and the sum of the first n terms from a₁ and the constant difference d. A negative difference gives a decreasing sequence; zero gives a constant one. The index must be an integer from 1 to 9007199254740991. The table previews the first ten terms, while the term and sum cover all n. Closed formulas avoid iterating through a huge sequence; intermediate binary products and sums are retained until each final result is rounded.",
  "seoTitle": "Arithmetic progression calculator online",
  "seoDescription": "Find the nth term and the sum of an arithmetic progression from the first term, the common difference and the term number.",
  "h1": "Arithmetic progression calculator",
  "keywords": [
    "arithmetic progression calculator",
    "nth term calculator",
    "sum of arithmetic series",
    "common difference"
  ],
  "howToUse": [
    "Enter the first term of the progression.",
    "Enter the common difference — how much each term adds to the previous one.",
    "Enter the number of the term you need.",
    "For a decreasing series use a negative difference."
  ],
  "howItWorks": "The nth term is aₙ = a₁ + (n−1)d. The sum of the first n terms is Sₙ = n(a₁ + aₙ)/2 — the number of terms times the average of the first and last.",
  "example": "With a₁ = 3 and d = 5 the tenth term is 48 and the sum of the first ten terms is 255.",
  "faq": [
    {
      "q": "How does an arithmetic progression differ from a geometric one?",
      "a": "An arithmetic progression adds a constant difference; a geometric one multiplies by a constant ratio. Geometric sequences need not grow: with a₁ > 0 and 0 < r < 1 they decrease."
    },
    {
      "q": "Can the common difference be negative?",
      "a": "Yes, and that is the ordinary decreasing case. With a₁ = 100 and d = −7 the fifteenth term is 2 and the sum of fifteen terms is 765."
    },
    {
      "q": "Why is the sum computed with a formula rather than by adding?",
      "a": "Sₙ = n(a₁ + aₙ)/2 avoids summing n terms in a loop. This implementation retains exact intermediate binary arithmetic and rounds each final numeric result. Arbitrary decimal inputs and the displayed digits still have finite precision."
    },
    {
      "q": "What happens when the difference is zero?",
      "a": "The series becomes constant: every term equals the first, and the sum is the first term times the number of terms. The formulas keep working without special cases."
    },
    {
      "q": "Why does the table show only ten terms?",
      "a": "The pattern is already clear from the first three, and hundreds of rows would add nothing. The nth term and the sum are still computed for the full series rather than the slice shown."
    }
  ],
  "disclaimer": "a₁ and d must be finite. Overflow or a nonzero term or sum rounding to zero produces an error, including preview terms. Small and large values use scientific notation; displayed values are rounded."
};
