import type { CalculatorCopy } from '../../lib/platform/types';

export const powerRootCopyEn: CalculatorCopy = {
  name: "Power and root calculator",
  slug: "power-and-root-calculator",
  shortDescription: "Raise a number to any power or take a root of any degree.",
  longDescription:
    "Raises a number to a power and takes a root of any degree, fractional exponents included. An odd root of a negative number does exist — the cube root of −8 is −2 — and it is computed here from the absolute value with the sign taken out separately, because raising a negative base to a fractional exponent yields no real answer: that exponent is not always defined for negative bases. An even root of a negative number has no real value, so the calculation stops rather than showing an empty result. Zero to a negative power is rejected for the same reason: it is a division by zero.",
  seoTitle: "Power and root calculator online",
  seoDescription: "Raise a number to any power or take a root of any degree, including cube and fractional roots.",
  h1: "Power and root calculator",
  keywords: ["power calculator", "root calculator", "exponent calculator", "cube root"],
  howToUse: [
    "Choose the operation — power or root.",
    "Enter the number you are working with.",
    "Enter the degree: 2 for a square or square root, 3 for a cube or cube root.",
    "The exponent may be negative or fractional.",
  ],
  howItWorks:
    "Raising to a power: aⁿ multiplies the number by itself n times, and for fractional n it is the same as a root. Taking a root: ⁿ√a is the number that gives a when raised to the nth power. A negative exponent means one divided by the positive power: 2⁻³ = 1/8.",
  example: "Two to the tenth power is 1,024, and the cube root of 27 is 3.",
  faq: [
    { q: "Why can't I take the square root of a negative number?", a: "Because any real number squared is non-negative, so no such real root exists. It does exist among complex numbers, but that is a different domain." },
    { q: "What about the cube root of a negative number?", a: "That exists and is computed: ∛−8 = −2, since (−2)³ = −8. The same holds for any odd root." },
    { q: "What does a negative exponent mean?", a: "One divided by the same power with a positive exponent: 2⁻³ is 1/2³, that is 0.125." },
    { q: "Why is any number to the power of zero equal to one?", a: "Because dividing powers subtracts exponents: aⁿ ÷ aⁿ = a⁰, and the left-hand side is one. Zero itself is the exception — 0⁰ has no agreed value." },
    { q: "Can I use a fractional exponent?", a: "Yes. A power of 0.5 is the square root and 1/3 is the cube root. A fractional exponent is not accepted for a negative base: it is not always defined, and substituting a plausible value would be wrong." },
  ],
};
