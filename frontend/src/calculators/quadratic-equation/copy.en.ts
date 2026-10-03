import type { CalculatorCopy } from '../../lib/platform/types';

export const quadraticEquationCopyEn: CalculatorCopy = {
  "name": "Quadratic equation calculator",
  "slug": "quadratic-equation",
  "shortDescription": "Solve ax² + bx + c = 0 and see the discriminant.",
  "seoTitle": "Quadratic equation calculator — roots and discriminant",
  "seoDescription": "Roots of ax² + bx + c = 0, discriminant and vertex x-coordinate for a ≠ 0. Real roots with checks for the supported number range.",
  "h1": "Quadratic equation calculator",
  "keywords": [
    "quadratic equation",
    "discriminant",
    "roots of an equation"
  ],
  "longDescription": "Solves ax² + bx + c = 0 for a ≠ 0 in the real domain. It shows the discriminant, the number of distinct real roots and the vertex x-coordinate. At D = 0 the single displayed root has multiplicity two. Complex roots and the linear case a = 0 are outside this model.",
  "howItWorks": "D = b² − 4ac: for D > 0, x₁,₂ = (−b ± √D)/(2a); for D = 0, x = −b/(2a); for D < 0 there are no real roots. The symmetry axis is xV = −b/(2a). The vertex is the pair (xV, f(xV)), but only xV is displayed here. The numerical two-root calculation uses a stable formula variant and x₁x₂ = c/a.",
  "example": "x² − 5x + 6 has D = 1 and roots 3 and 2, because it factors into (x − 3)(x − 2).",
  "howToUse": [
    "Enter coefficient a, which cannot be zero.",
    "Enter coefficients b and c.",
    "Read the roots and the discriminant."
  ],
  "faq": [
    {
      "q": "Why is a = 0 rejected?",
      "a": "The equation stops being quadratic. Answering the linear case instead would give a plausible result to a different question."
    },
    {
      "q": "What about complex roots?",
      "a": "They are outside this calculator. With a negative discriminant it states that there are no real roots."
    },
    {
      "q": "What is the vertex for?",
      "a": "The vertex lies on the symmetry axis xV = −b/(2a). This is its x-coordinate, not the full coordinate pair or the minimum or maximum function value. That value requires a separate evaluation of f(xV)."
    },
    {
      "q": "How are the roots rounded?",
      "a": "Usually integers are shown without decimals and other values to four decimal places. For 0 < |x| < 0.0001 or |x| ≥ 10¹², scientific notation uses six significant digits so a small nonzero root does not look like zero."
    }
  ],
  "disclaimer": "Coefficients must be finite, with a ≠ 0. Calculations use their binary number representations. Roots are normally displayed to four decimal places; at |x| < 0.0001 or ≥ 10¹², scientific notation uses six significant digits. An unrepresentable discriminant, vertex x-coordinate or root produces a range error rather than overflow or a false zero."
};
