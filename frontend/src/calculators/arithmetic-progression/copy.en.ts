import type { CalculatorCopy } from '../../lib/platform/types';

export const arithmeticProgressionCopyEn: CalculatorCopy = {
  name: "Arithmetic progression calculator",
  slug: "arithmetic-progression-calculator",
  shortDescription: "The nth term and the sum of an arithmetic progression from the first term and the common difference.",
  longDescription:
    "Finds any term of a progression and the sum of the whole series from three values: the first term, the common difference and the term number. The sum uses the closed form Sₙ = n(a₁+aₙ)/2 rather than adding the terms in a loop — at a large term number a loop would accumulate rounding error, while the formula answers in a single step. The difference may be negative, in which case the series decreases and the sum still comes out right. The table shows the first ten terms so the pattern is visible, but the nth term and the sum refer to the full series, not to the slice on screen.",
  seoTitle: "Arithmetic progression calculator online",
  seoDescription: "Find the nth term and the sum of an arithmetic progression from the first term, the common difference and the term number.",
  h1: "Arithmetic progression calculator",
  keywords: ["arithmetic progression calculator", "nth term calculator", "sum of arithmetic series", "common difference"],
  howToUse: [
    "Enter the first term of the progression.",
    "Enter the common difference — how much each term adds to the previous one.",
    "Enter the number of the term you need.",
    "For a decreasing series use a negative difference.",
  ],
  howItWorks:
    "The nth term is aₙ = a₁ + (n−1)d. The sum of the first n terms is Sₙ = n(a₁ + aₙ)/2 — the number of terms times the average of the first and last.",
  example: "With a₁ = 3 and d = 5 the tenth term is 48 and the sum of the first ten terms is 255.",
  faq: [
    { q: "How does an arithmetic progression differ from a geometric one?", a: "An arithmetic progression ADDS the same number to each term; a geometric one MULTIPLIES each term by the same number. That is why an arithmetic series grows in a straight line while a geometric one grows ever more steeply." },
    { q: "Can the common difference be negative?", a: "Yes, and that is the ordinary decreasing case. With a₁ = 100 and d = −7 the fifteenth term is 2 and the sum of fifteen terms is 765." },
    { q: "Why is the sum computed with a formula rather than by adding?", a: "The closed form Sₙ = n(a₁+aₙ)/2 answers in one step and at the same precision as the nth term itself. Adding hundreds of terms in a loop would accumulate rounding error where none has to occur." },
    { q: "What happens when the difference is zero?", a: "The series becomes constant: every term equals the first, and the sum is the first term times the number of terms. The formulas keep working without special cases." },
    { q: "Why does the table show only ten terms?", a: "The pattern is already clear from the first three, and hundreds of rows would add nothing. The nth term and the sum are still computed for the full series rather than the slice shown." },
  ],
};
