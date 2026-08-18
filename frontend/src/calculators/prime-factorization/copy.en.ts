import type { CalculatorCopy } from '../../lib/platform/types';

export const primeFactorizationCopyEn: CalculatorCopy = {
  name: 'Prime factorisation calculator',
  slug: 'prime-factorisation',
  shortDescription: 'Break a number into prime factors and count its divisors.',
  longDescription:
    'Factorises a whole number into primes by trial division and shows the canonical form with exponents, how many distinct primes it has and how many divisors follow from them.',
  seoTitle: 'Prime factorisation calculator — factor a number into primes',
  seoDescription: 'Factorise a whole number into primes, see the canonical form with exponents and the number of divisors.',
  h1: 'Prime factorisation calculator',
  keywords: ['prime factorisation', 'prime factors', 'divisors of a number'],
  howToUse: ['Enter a whole number of two or more.', 'Read the factorisation.', 'Check the divisor count if you need it.'],
  howItWorks: 'Trial division runs up to the square root of the number; whatever is left above one is itself prime.',
  example: '360 = 2³ · 3² · 5, which gives (3+1)(2+1)(1+1) = 24 divisors.',
  faq: [
    { q: 'How is the divisor count obtained?', a: 'Multiply each exponent increased by one. For 2³ · 3² · 5 that is 4 × 3 × 2 = 24.' },
    { q: 'Why can I not factorise one?', a: 'One has no prime factors, so the factorisation is undefined rather than empty.' },
    { q: 'Is there an upper limit?', a: 'Yes. Above 10¹² trial division becomes slow and ordinary numeric precision starts to lose digits, so larger input is rejected instead of answered wrongly.' },
    { q: 'How do I know a number is prime?', a: 'Its factorisation is the number itself and the calculator says so on a separate line.' },
  ],
};
