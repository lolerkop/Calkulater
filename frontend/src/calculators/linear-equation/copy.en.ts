import type { CalculatorCopy } from '../../lib/platform/types';

export const linearEquationCopyEn: CalculatorCopy = {
  name: 'Linear equation calculator',
  slug: 'linear-equation-calculator',
  shortDescription: 'Solves ax + b = c and shows every step.',
  longDescription:
    'Moves the constant across, divides by the coefficient and checks the answer by substitution. The degenerate cases are answers rather than input errors: with a zero coefficient the equation collapses to b = c, which is either true for every x or true for none, and both outcomes are stated plainly instead of being hidden behind a dash.',
  seoTitle: 'Linear equation calculator — solve ax + b = c',
  seoDescription: 'Solve a linear equation of the form ax + b = c with the steps shown and the answer checked by substitution.',
  h1: 'Linear equation calculator',
  keywords: ['linear equation calculator', 'solve for x', 'ax + b = c'],
  howToUse: ['Enter the coefficient in front of x.', 'Enter the constant term and the right-hand side.', 'Read the root and the steps.'],
  howItWorks: 'x = (c − b) ÷ a whenever a is not zero; if a is zero the equation reduces to comparing b with c.',
  example: 'For 3x + 5 = 20, moving 5 gives 3x = 15 and dividing gives x = 5.',
  faq: [
    { q: 'What happens when the coefficient is zero?', a: 'The x term disappears and the equation becomes b = c. If that is true, every number is a root; if not, there is none.' },
    { q: 'Are negative coefficients supported?', a: 'Yes, all three values may be negative or fractional. The sign is carried through the division.' },
    { q: 'Why show a substitution check?', a: 'It puts the root back into the original equation. Getting the right-hand side back confirms the answer at a glance.' },
    { q: 'Can it solve quadratics?', a: 'No, this is degree one only. A separate calculator handles equations with an x squared term.' },
  ],
};
