import type { CalculatorCopy } from '../../lib/platform/types';

export const gcdLcmCopyEn: CalculatorCopy = {
  name: "GCD and LCM calculator",
  slug: "gcd-and-lcm-calculator",
  shortDescription: "Greatest common divisor and least common multiple of a list of numbers.",
  longDescription:
    "Finds the GCD and the LCM for a whole list at once rather than for a single pair. The GCD comes from Euclid's algorithm folded across the list pairwise, and the LCM is accumulated through LCM(a,b) = a·b ÷ GCD(a,b), dividing before multiplying so the product does not overflow sooner than it has to. Both are computed in exact integer arithmetic and never rounded: a rounded LCM would stop dividing evenly by the original numbers while still looking plausible. A separate row reports whether the numbers are coprime — the case where the GCD is 1 and the LCM is simply their product.",
  seoTitle: "GCD and LCM calculator online",
  seoDescription: "Find the greatest common divisor and the least common multiple of two or more numbers.",
  h1: "GCD and LCM calculator",
  keywords: ["gcd calculator", "lcm calculator", "greatest common divisor", "least common multiple"],
  howToUse: [
    "Enter two or more whole numbers.",
    "Separate them with spaces, semicolons or line breaks.",
    "The numbers must be whole and greater than zero.",
    "The result covers the whole list at once.",
  ],
  howItWorks:
    "The GCD of a list is folded pairwise with Euclid's algorithm: GCD(a,b,c) = GCD(GCD(a,b),c). The LCM follows the same order through LCM(a,b) = a ÷ GCD(a,b) × b. Both results are exact integers.",
  example: "For 24, 36, 60 and 84 the greatest common divisor is 12 and the least common multiple is 2,520.",
  faq: [
    { q: "How many numbers can I enter?", a: "Two or more, with no upper limit. Both values fold across the list pairwise, so ten numbers are no harder than two." },
    { q: "Why are fractions rejected?", a: "The GCD and LCM are defined for whole numbers. Fractions are handled differently — through the GCD of the numerators and the LCM of the denominators — and that is an operation on fractions rather than on the numbers in a list." },
    { q: "What does the coprime row mean?", a: "That the numbers share no divisor other than one, meaning the GCD is 1. In that case the LCM is simply their product." },
    { q: "What is the LCM actually used for?", a: "Most often for putting fractions over a common denominator, and for questions about cycles lining up: two events with periods of 12 and 18 days coincide after 36 days, which is their LCM." },
    { q: "Why can the calculation stop on a long list?", a: "The LCM grows very quickly and for a large set it exceeds the exact-integer range. Showing a rounded value is not an option, because it would no longer divide by the original numbers, so the calculation stops honestly instead." },
  ],
};
