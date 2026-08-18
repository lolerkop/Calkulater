import type { CalculatorCopy } from '../../lib/platform/types';

export const quadraticEquationCopyEn: CalculatorCopy = {
  name: 'Quadratic equation calculator',
  slug: 'quadratic-equation',
  shortDescription: 'Solve ax² + bx + c = 0 and see the discriminant.',
  longDescription:
    'Solves a quadratic equation and shows the roots, the discriminant that decides how many there are, and the vertex of the parabola. A zero leading coefficient is reported as invalid rather than silently treated as a linear equation.',
  seoTitle: 'Quadratic equation calculator — roots and discriminant',
  seoDescription: 'Solve ax² + bx + c = 0 online: roots, discriminant, number of roots and the vertex.',
  h1: 'Quadratic equation calculator',
  keywords: ['quadratic equation', 'discriminant', 'roots of an equation'],
  howToUse: ['Enter coefficient a, which cannot be zero.', 'Enter coefficients b and c.', 'Read the roots and the discriminant.'],
  howItWorks: 'D = b² − 4ac decides the count: two roots when positive, one when zero, none real when negative.',
  example: 'x² − 5x + 6 has D = 1 and roots 3 and 2, because it factors into (x − 3)(x − 2).',
  faq: [
    { q: 'Why is a = 0 rejected?', a: 'The equation stops being quadratic. Answering the linear case instead would give a plausible result to a different question.' },
    { q: 'What about complex roots?', a: 'They are outside this calculator. With a negative discriminant it states that there are no real roots.' },
    { q: 'What is the vertex for?', a: 'It is the axis of symmetry, −b / 2a, the point where the parabola turns.' },
    { q: 'How are the roots rounded?', a: 'Whole roots are shown as whole numbers; the rest to four decimal places.' },
  ],
};
