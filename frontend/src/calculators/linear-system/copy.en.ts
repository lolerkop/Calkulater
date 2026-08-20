import type { CalculatorCopy } from '../../lib/platform/types';

export const linearSystemCopyEn: CalculatorCopy = {
  name: 'System of linear equations calculator',
  slug: 'linear-system-calculator',
  shortDescription: 'Solves a system of two linear equations in two unknowns by Cramer’s rule.',
  longDescription:
    'Two linear equations in two unknowns describe two straight lines, and solving the system means finding where they cross. Cramer’s rule gets there through determinants rather than substitution, which keeps the arithmetic short and makes the special case visible: when the main determinant is zero the lines are parallel or identical, so there is either no crossing point at all or an infinite number of them. The calculator shows that determinant next to the answer precisely because it is the thing that decides whether an answer exists.',
  seoTitle: 'System of linear equations calculator — two unknowns',
  seoDescription:
    'Solve a system of two linear equations in two unknowns by Cramer’s rule and see the main determinant that decides whether a solution exists.',
  h1: 'System of linear equations calculator',
  keywords: ['system of linear equations', 'cramer rule calculator', 'two unknowns', 'simultaneous equations'],
  howToUse: [
    'Write both equations in the form ax + by = c.',
    'Enter the coefficients of the first equation: a₁, b₁ and c₁.',
    'Enter the coefficients of the second equation: a₂, b₂ and c₂.',
    'A missing unknown means a coefficient of zero, not an empty field.',
  ],
  howItWorks:
    'The main determinant is Δ = a₁b₂ − a₂b₁. Then x = (c₁b₂ − c₂b₁) ÷ Δ and y = (a₁c₂ − a₂c₁) ÷ Δ. A zero determinant means the system has no single solution.',
  example: 'For 2x + 3y = 13 and 4x − y = 5 the determinant is −14 and the solution is x = 2, y = 3.',
  faq: [
    {
      q: 'What does a zero determinant mean?',
      a: 'The two lines are parallel or the same line. Parallel lines never meet, identical lines meet everywhere, and neither case can be reported as a single pair of numbers.',
    },
    {
      q: 'Can coefficients be negative or fractional?',
      a: 'Yes. Any real numbers work, including negatives and decimals; only the determinant being zero stops the calculation.',
    },
    {
      q: 'How do I enter an equation with only one unknown?',
      a: 'Put zero as the coefficient of the missing unknown. The equation 3x = 12 becomes a = 3, b = 0, c = 12.',
    },
    {
      q: 'Why Cramer’s rule and not substitution?',
      a: 'For two equations both give the same answer, but the determinant form separates the question "is there a solution" from the answer itself, and that is the part people usually get wrong.',
    },
  ],
};
