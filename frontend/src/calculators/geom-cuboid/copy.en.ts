import type { CalculatorCopy } from '../../lib/platform/types';

export const geomCuboidCopyEn: CalculatorCopy = {
  name: 'Cuboid calculator',
  slug: 'cuboid-calculator',
  shortDescription: 'Volume, surface area and space diagonal from three edges.',
  longDescription:
    'Solves a rectangular cuboid from its three edges: volume, surface area, space diagonal and the total edge length. The diagonal is the figure that answers whether an object will fit into a box cornerwise. A cube is not treated as a separate shape — it is the special case of three equal edges and goes through the same calculation. The length unit is chosen once: volume comes back in its cube and area in its square.',
  seoTitle: 'Cuboid calculator — volume, surface area, diagonal',
  seoDescription: 'Calculate the volume, surface area and space diagonal of a rectangular cuboid from its three edges.',
  h1: 'Cuboid calculator',
  keywords: ['cuboid calculator', 'volume of a box', 'surface area', 'space diagonal'],
  howToUse: ['Pick the length unit.', 'Enter the three edges.', 'Read the volume, the surface and the diagonal.'],
  howItWorks:
    'V = abc; S = 2(ab + bc + ca); the space diagonal d = √(a² + b² + c²) follows from applying Pythagoras twice. The total edge length is 4(a + b + c), because there are four edges in each direction.',
  example: 'A 3 × 4 × 5 cm box has a volume of 60 cm³, a surface of 94 cm² and a diagonal of 7.071 cm.',
  faq: [
    { q: 'What does the space diagonal tell me?', a: 'The distance between opposite corners — the longest segment that fits inside. It is what you check to see whether something will go into a box cornerwise.' },
    { q: 'Does this handle a cube?', a: 'Yes. A cube is a cuboid with three equal edges: enter the same value three times and every formula still holds.' },
    { q: 'Why is the volume in cubic units and the surface in square ones?', a: 'Because volume is measured in the cube of the chosen unit and area in its square. Converting either with a linear factor would be wrong.' },
    { q: 'How do I get the weight from the volume?', a: 'Multiply the volume by the density of the material — that is what the density calculator does, and the volume carries straight over.' },
  ],
};
