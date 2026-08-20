import type { CalculatorCopy } from '../../lib/platform/types';

export const gravitationalForceCopyEn: CalculatorCopy = {
  name: 'Gravitational force calculator',
  slug: 'gravitational-force-calculator',
  shortDescription: 'Attraction between two bodies from the law of universal gravitation.',
  longDescription:
    'The gravitational constant is tiny, and that is exactly why everyday objects do not visibly attract each other: two tonnes two metres apart pull with about 1.7·10⁻⁵ newtons, the weight of a speck of dust. Gravity only becomes noticeable at planetary masses, which is why exponential notation is not decoration here but the only way to show both ends of the range on one page. The acceleration of the first body is given separately because the force on the two bodies is equal while their accelerations are not — and that asymmetry is the whole reason the apple falls rather than the Earth rising to meet it.',
  seoTitle: 'Gravitational force calculator — two bodies',
  seoDescription:
    'Calculate the force of universal gravitation between two masses at a given distance, along with the acceleration of the first body.',
  h1: 'Gravitational force calculator',
  keywords: ['gravitational force calculator', 'law of universal gravitation', 'constant G', 'attraction between bodies'],
  howToUse: [
    'Enter the two masses in kilograms.',
    'Enter the distance between their centres in metres.',
    'For a body on a planet, use the planet radius rather than the height above ground.',
    'Read the acceleration row to see the effect on the first body.',
  ],
  howItWorks:
    'F = G × m₁ × m₂ ÷ r², with G = 6.674·10⁻¹¹ N·m²/kg². The acceleration of the first body is that force divided by its own mass, which reduces to G × m₂ ÷ r².',
  example: 'Two 50,000-tonne ships a hundred metres apart attract with 16.685 N.',
  faq: [
    {
      q: 'Why is the distance measured between centres?',
      a: 'Because a spherically symmetric body attracts as though all its mass sat at its centre. For a person on Earth that means the planet radius, roughly 6,371 km, not their height.',
    },
    {
      q: 'Why does the force on both bodies come out the same?',
      a: 'Because gravity is mutual and the formula is symmetric in the two masses. What differs is the acceleration, since each body divides the same force by its own mass.',
    },
    {
      q: 'How does the force change with distance?',
      a: 'As the inverse square. Doubling the distance quarters the force, and tripling it leaves a ninth — which is why orbital mechanics is so sensitive to altitude.',
    },
    {
      q: 'Why do I never feel the attraction of nearby objects?',
      a: 'Because G is about 6.674·10⁻¹¹. Two people standing a metre apart attract with roughly 10⁻⁷ newtons, thousands of times weaker than the friction holding their shoes still.',
    },
  ],
};
