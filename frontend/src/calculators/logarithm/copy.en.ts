import type { CalculatorCopy } from '../../lib/platform/types';

export const logarithmCopyEn: CalculatorCopy = {
  name: 'Logarithm calculator',
  slug: 'logarithm-calculator',
  shortDescription: 'Common, natural and any-base logarithms with a check.',
  longDescription:
    'Finds the exponent to which the base must be raised to give the number. All three modes use one formula, ln x divided by ln b, and the result comes with a check by exponentiation.',
  seoTitle: 'Logarithm calculator — log base 10, natural log and any base',
  seoDescription: 'Calculate a logarithm to base 10, base e or any base you choose, with the domain checked before the result.',
  h1: 'Logarithm calculator',
  keywords: ['logarithm calculator', 'log base 2', 'natural logarithm'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'log_b(x) = ln x ÷ ln b; the common and natural modes only fix the base.',
  example: 'log to base 2 of 1024 is 10, because 2 raised to the tenth power is 1024.',
  faq: [
    { q: 'Why must the number be positive?', a: 'No power of a positive base ever gives zero or a negative number, so the logarithm has no value there.' },
    { q: 'Why can the base not be one?', a: 'One raised to any power is still one, so the equation has no single answer.' },
    { q: 'What is e?', a: 'The base of natural logarithms, about 2.71828. It appears wherever growth is continuous.' },
    { q: 'What is the check line for?', a: 'It raises the base to the result. Getting the original number back confirms the answer at a glance.' },
  ],
};
