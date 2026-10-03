import type { CalculatorCopy } from '../../lib/platform/types';

export const primeFactorizationCopyEn: CalculatorCopy = {
  "name": "Prime factorisation calculator",
  "slug": "prime-factorisation",
  "shortDescription": "Break a number into prime factors and count its divisors.",
  "longDescription": "Factor an integer from 2 to 1000000000000 into primes and read its power notation, number of distinct primes and positive-divisor count. Factors of 2 are removed first; odd candidates are then tested up to the square root of the current remainder. Any remainder greater than one is included as a prime factor. The factorization is unique up to the order of the factors.",
  "seoTitle": "Prime factorisation calculator — factor a number into primes",
  "seoDescription": "Factorise a whole number into primes, see the canonical form with exponents and the number of divisors.",
  "h1": "Prime factorisation calculator",
  "keywords": [
    "prime factorisation",
    "prime factors",
    "divisors of a number"
  ],
  "howToUse": [
    "Enter a whole number of two or more.",
    "Read the factorisation.",
    "Check the divisor count if you need it."
  ],
  "howItWorks": "Trial division runs up to the square root of the number; whatever is left above one is itself prime.",
  "example": "360 = 2³ · 3² · 5, giving (3+1)(2+1)(1+1) = 24 divisors. Removing factors of 2 leaves 45; removing factors of 3 leaves 5, which is included as the remaining prime.",
  "faq": [
    {
      "q": "How is the divisor count obtained?",
      "a": "Multiply each exponent increased by one. For 2³ · 3² · 5 that is 4 × 3 × 2 = 24."
    },
    {
      "q": "Why can I not factorise one?",
      "a": "This page starts at 2. One has no prime factors; its factorization can be represented by the empty product, equal to 1. One is not prime: a prime has exactly two distinct positive divisors."
    },
    {
      "q": "Is there an upper limit?",
      "a": "This page accepts n ≤ 10¹². The bound limits trial-division cost. It is not where Number integers start losing precision: the general safe-integer bound is 9007199254740991."
    },
    {
      "q": "How do I know a number is prime?",
      "a": "Its factorisation is the number itself and the calculator says so on a separate line."
    }
  ]
};
