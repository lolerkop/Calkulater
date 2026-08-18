import type { CalculatorCopy } from '../../lib/platform/types';

export const moduloCopyEn: CalculatorCopy = {
  name: 'Remainder calculator',
  slug: 'remainder-calculator',
  shortDescription: 'Divide with remainder and see the quotient and the check.',
  longDescription:
    'Divides one whole number by another and shows the remainder, the quotient and the identity that ties them together. The sign convention is the one used by school arithmetic and by most programming languages: the quotient truncates towards zero and the remainder follows the dividend.',
  seoTitle: 'Remainder calculator — division with remainder online',
  seoDescription: 'Divide whole numbers with remainder: remainder, quotient and the check a = b × q + r.',
  h1: 'Remainder calculator',
  keywords: ['remainder calculator', 'division with remainder', 'modulo'],
  howToUse: ['Enter the dividend.', 'Enter the divisor.', 'Read the remainder and the quotient.'],
  howItWorks: 'The quotient is the division truncated towards zero; the remainder is what the identity a = b × q + r leaves over.',
  example: '17 divided by 5 gives quotient 3 and remainder 2, because 17 = 5 × 3 + 2.',
  faq: [
    { q: 'What happens with negative numbers?', a: 'The remainder takes the sign of the dividend: −17 and 5 give quotient −3 and remainder −2, since −17 = 5 × (−3) + (−2).' },
    { q: 'Is this the same as the modulo in Python?', a: 'No. Python returns a remainder with the sign of the divisor, so −17 mod 5 is 3 there. This calculator follows the truncating convention.' },
    { q: 'Can I use decimals?', a: 'No. Division with remainder is defined for whole numbers, so decimal input is rejected instead of being rounded.' },
    { q: 'Why is the check line shown?', a: 'It makes the answer verifiable at a glance: multiply the divisor by the quotient, add the remainder and you get the dividend back.' },
  ],
};
