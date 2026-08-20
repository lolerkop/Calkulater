import type { CalculatorCopy } from '../../lib/platform/types';

export const fibonacciCopyEn: CalculatorCopy = {
  name: "Fibonacci calculator",
  slug: "fibonacci-calculator",
  shortDescription: "The nth Fibonacci number, the sum of the series and the ratio between neighbours.",
  longDescription:
    "Computes a Fibonacci number from its position, the sum of everything before it, and the ratio to the previous term — the one that approaches the golden ratio as the position grows. Numbering runs from F₁ = 0 and F₂ = 1 and stays consistent: the alternative convention starting at 1 would shift every answer by one place. The calculation stops at the 78th term, and that bound is measured rather than round — from the 79th onward the series leaves the range of exact whole numbers and the answer would quietly drift from the true one. Up to 78 both the terms and the sums are exact.",
  seoTitle: "Fibonacci calculator online",
  seoDescription: "Find the nth Fibonacci number, the sum of the series and the ratio between neighbouring terms that approaches the golden ratio.",
  h1: "Fibonacci calculator",
  keywords: ["fibonacci calculator", "fibonacci sequence", "nth fibonacci number", "golden ratio"],
  howToUse: [
    "Enter the position of the term you need.",
    "Numbering starts at F₁ = 0 and F₂ = 1.",
    "Positions from the first to the seventy-eighth are available.",
    "The ratio to the previous term appears from the third onward.",
  ],
  howItWorks:
    "Every term is the sum of the two before it: Fₙ = Fₙ₋₁ + Fₙ₋₂ with F₁ = 0 and F₂ = 1. The ratio between neighbouring terms approaches the golden ratio of 1.618 as the position grows.",
  example: "The twentieth term is 4,181, the sum of the first twenty is 10,945, and the ratio to the previous term is already 1.618.",
  faq: [
    { q: "Where does the series start?", a: "Here it starts at zero: F₁ = 0, F₂ = 1, F₃ = 1, F₄ = 2 and so on. Another common convention makes the first term 1, which shifts every position by one — the tenth term would then be 55 rather than 34." },
    { q: "Why can't I go past the 78th term?", a: "From the 79th on, the numbers no longer fit exactly in the whole-number range the browser computes with, and the answer would drift from the true one while still looking plausible. The bound was checked against exact arithmetic: up to 78 both terms and sums match." },
    { q: "How is the series related to the golden ratio?", a: "The ratio between neighbouring terms approaches 1.6180339… as the position grows. By the tenth term it is 1.619, and by the twentieth it is indistinguishable from the limit to four decimal places." },
    { q: "Why do the first two terms have no ratio?", a: "There is nothing to divide by: the first term has no predecessor and the second one's predecessor is zero. Omitting the row is more honest than printing infinity." },
    { q: "What is the sum of the first n terms?", a: "It is always one less than the term at position n+2. The sum of the first ten is 88, and the twelfth term is 89." },
  ],
};
