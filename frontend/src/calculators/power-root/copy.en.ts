import type { CalculatorCopy } from '../../lib/platform/types';

export const powerRootCopyEn: CalculatorCopy = {
  "name": "Power and root calculator",
  "slug": "power-and-root-calculator",
  "shortDescription": "Powers and roots within the supported real domain.",
  "seoTitle": "Power and root calculator online",
  "seoDescription": "Powers and roots within the supported real domain. Negative bases, fractional exponents and number-range checks.",
  "h1": "Power and root calculator",
  "keywords": [
    "power calculator",
    "root calculator",
    "exponent calculator",
    "cube root"
  ],
  "longDescription": "Calculates aⁿ or a^(1/n) in the real domain. For example, 2¹⁰ = 1024 and the cube root of −8 is −2. A negative base requires an integer exponent in power mode and a positive odd integer index in root mode. For a nonnegative base, a positive fractional root index is also supported as a reciprocal-power operation, beyond the usual integer-index root.",
  "howItWorks": "For a positive integer n, aⁿ is a product of n factors a. For nonzero a, a⁰ = 1 and a⁻ⁿ = 1/aⁿ. A rational exponent m/n combines an nth root and an mth power in its real domain. Root mode evaluates a^(1/n); for negative a it extracts the sign only when n is an odd integer. The fields accept numbers rather than expressions such as 1/3.",
  "example": "Two to the tenth power is 1,024, and the cube root of 27 is 3.",
  "howToUse": [
    "Choose power or root.",
    "Enter the base as a number.",
    "Enter an exponent for power or a positive index for root; ∛27 uses index 3."
  ],
  "faq": [
    {
      "q": "Why can't I take the square root of a negative number?",
      "a": "Because any real number squared is non-negative, so no such real root exists. It does exist among complex numbers, but that is a different domain."
    },
    {
      "q": "What about the cube root of a negative number?",
      "a": "That exists and is computed: ∛−8 = −2, since (−2)³ = −8. The same holds for any odd root."
    },
    {
      "q": "What does a negative exponent mean?",
      "a": "One divided by the same power with a positive exponent: 2⁻³ is 1/2³, that is 0.125."
    },
    {
      "q": "Why is any number to the power of zero equal to one?",
      "a": "For nonzero a, aⁿ/aⁿ = a⁰ gives one. This page rejects 0⁰ rather than choosing one of its conventions for the user."
    },
    {
      "q": "Can I use a fractional exponent?",
      "a": "Yes, for a nonnegative base: exponent 0.5 gives the square root. The field does not parse 1/3; use root mode with index 3 for a cube root. Fractional powers of negative bases are outside this calculator, even though some rational cases exist mathematically."
    }
  ],
  "disclaimer": "Calculations and display are rounded. This page rejects 0⁰ as ambiguous input; that is a product convention. Zero is accepted only with a positive exponent or root index. With a negative base, integer exponents are limited in magnitude to 9007199254740991 and odd root indices to that positive limit. Overflow or loss of a nonzero result produces an error."
};
