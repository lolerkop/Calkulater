import type { CalculatorCopy } from '../../lib/platform/types';

export const geomPrismCopyEn: CalculatorCopy = {
  name: 'Prism calculator',
  slug: 'prism-calculator',
  shortDescription: 'Volume and surface areas of a regular prism from base side and height.',
  longDescription:
    'A right prism with a regular polygon base is fully described by three numbers: how many sides the base has, how long each is, and how tall the solid stands. The base area comes from the apothem — the distance from the centre to the middle of a side — which is why the tangent is taken of π divided by the number of sides, in radians rather than degrees. The lateral surface is simply the perimeter times the height, because unrolling the sides of a right prism gives a plain rectangle. A cuboid is the special case with four sides, and a triangular prism the smallest one possible.',
  seoTitle: 'Prism calculator — volume and surface area',
  seoDescription:
    'Calculate the volume, base area, lateral and total surface of a regular prism from the number of base sides, the side length and the height.',
  h1: 'Prism calculator',
  keywords: ['prism calculator', 'prism volume', 'prism surface area', 'regular prism'],
  howToUse: [
    'Choose the length unit for every input.',
    'Enter how many sides the base polygon has.',
    'Enter the length of one base side.',
    'Enter the height of the prism.',
  ],
  howItWorks:
    'Apothem = side ÷ (2 × tan(π ÷ n)). Base area = perimeter × apothem ÷ 2. Volume = base area × height, and the lateral surface is perimeter × height.',
  example: 'A hexagonal prism with a 4 cm side and 10 cm height holds 415.69 cm³.',
  faq: [
    {
      q: 'What makes a prism regular?',
      a: 'A regular polygon as the base and side faces perpendicular to it. Slanted prisms have the same volume but a larger lateral surface, which this calculation does not cover.',
    },
    {
      q: 'Why does the base area need an apothem?',
      a: 'Because a regular polygon splits into identical triangles from its centre, each with the side as base and the apothem as height. Summing them gives perimeter × apothem ÷ 2.',
    },
    {
      q: 'Is a cuboid a prism?',
      a: 'Yes, a prism with a four-sided base. Entering four sides gives exactly the square-based case, and the formulas reduce to the familiar ones.',
    },
    {
      q: 'What happens as the number of sides grows?',
      a: 'The base approaches a circle and the prism approaches a cylinder. At a hundred sides the difference in volume is already under a tenth of a per cent.',
    },
  ],
};
