import type { CalculatorCopy } from '../../lib/platform/types';

export const linearSystemCopyEn: CalculatorCopy = {
  "name": "System of linear equations calculator",
  "slug": "linear-system-calculator",
  "shortDescription": "Solves a system of two linear equations in two unknowns by Cramer’s rule.",
  "seoTitle": "System of linear equations calculator — two unknowns",
  "seoDescription": "Solve a system of two linear equations in two unknowns by Cramer’s rule and see the main determinant that decides whether a solution exists.",
  "h1": "System of linear equations calculator",
  "keywords": [
    "system of linear equations",
    "cramer rule calculator",
    "two unknowns",
    "simultaneous equations"
  ],
  "longDescription": "Finds the unique pair x, y for a₁x + b₁y = c₁ and a₂x + b₂y = c₂ using Cramer’s rule. If each equation has a nonzero x or y coefficient, this is geometrically the intersection of two lines. An all-zero coefficient row can instead represent an identity or a contradiction. At Δ = 0 there is no unique pair: this calculator stops without classifying no solution versus infinitely many.",
  "howItWorks": "Δ = a₁b₂ − a₂b₁, Δx = c₁b₂ − c₂b₁, Δy = a₁c₂ − a₂c₁. For Δ ≠ 0, x = Δx/Δ and y = Δy/Δ. At Δ = 0 Cramer’s formulas cannot give a unique pair; another method is needed to classify the system. Zero coefficients are valid and must be entered explicitly rather than left blank.",
  "example": "For 2x + 3y = 13 and 4x − y = 5 the determinant is −14 and the solution is x = 2, y = 3.",
  "howToUse": [
    "Write both equations in the form ax + by = c.",
    "Enter the coefficients of the first equation: a₁, b₁ and c₁.",
    "Enter the coefficients of the second equation: a₂, b₂ and c₂.",
    "A missing unknown means a coefficient of zero, not an empty field."
  ],
  "faq": [
  {
    "q": "What does a zero determinant mean?",
    "a": "At Δ = 0 there is no unique pair x, y. There may be no solutions or infinitely many; this model does not distinguish them. Parallel or coincident lines describe only cases where each row actually represents a line. A row 0x + 0y = c can be an identity or a contradiction."
  },
  {
    "q": "Can coefficients be negative or fractional?",
    "a": "Yes, finite negative and decimal coefficients are valid. A zero determinant is not the only stopping condition: the result must also remain within the number range."
  },
  {
    "q": "How do I enter an equation with only one unknown?",
    "a": "Put zero as the coefficient of the missing unknown. The equation 3x = 12 becomes a = 3, b = 0, c = 12."
  },
  {
    "q": "Why Cramer’s rule and not substitution?",
    "a": "For Δ ≠ 0, Cramer’s rule directly gives the unique pair x, y. Substitution or elimination gives the same mathematical result. A zero Δ does not settle existence: another method is needed to distinguish no solutions from infinitely many."
  }
],
  "disclaimer": "Finite coefficients, including negative and decimal values, are accepted. Determinants are calculated from the binary representations of the entered numbers and results are rounded. Small nonzero values use scientific notation. An unrepresentable Δ, x or y gives a range error. A nearly dependent system is sensitive to coefficient uncertainty; more displayed digits do not remove that sensitivity."
};
