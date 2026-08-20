import type { CalculatorCopy } from '../../lib/platform/types';

export const geomPyramidCopyEn: CalculatorCopy = {
  name: 'Pyramid calculator',
  slug: 'pyramid-calculator',
  shortDescription: 'Volume, slant height and surface areas of a regular pyramid.',
  longDescription:
    'There are two apothems in a pyramid and confusing them is the usual error. The base apothem lies flat inside the base, running from its centre to the middle of a side. The slant height is the altitude of a triangular face, measured up the sloping surface, and it is the one that enters the lateral surface area. The second is always longer than the first because it is the hypotenuse formed with the pyramid\'s height. The third in the volume formula is not an approximation: any pyramid or cone occupies exactly a third of the prism or cylinder standing on the same base at the same height.',
  seoTitle: 'Pyramid calculator — volume and surface area',
  seoDescription:
    'Calculate the volume, slant height, lateral and total surface of a regular pyramid from the base sides, side length and height.',
  h1: 'Pyramid calculator',
  keywords: ['pyramid calculator', 'pyramid volume', 'slant height', 'pyramid surface area'],
  howToUse: [
    'Choose the length unit for every input.',
    'Enter how many sides the base polygon has.',
    'Enter the length of one base side.',
    'Enter the vertical height from the base to the apex.',
  ],
  howItWorks:
    'Base apothem = side ÷ (2 × tan(π ÷ n)). Slant height is the hypotenuse of the height and that apothem. Volume = base area × height ÷ 3.',
  example: 'A square pyramid with a 6 cm side and 9 cm height holds 108 cm³ with a slant height of 9.487 cm.',
  faq: [
    {
      q: 'Is the height measured vertically or along a face?',
      a: 'Vertically, from the centre of the base to the apex. The measurement along a face is the slant height, and it is returned as a result rather than taken as an input.',
    },
    {
      q: 'Why is the volume a third rather than a half?',
      a: 'Because three identical pyramids fill a prism of the same base and height exactly. It is a geometric fact, not a rounded coefficient.',
    },
    {
      q: 'Does this work for the Great Pyramid?',
      a: 'Yes, as a square pyramid: four base sides, a side of about 230 m and a height near 146 m. The result is close to 2.6 million cubic metres.',
    },
    {
      q: 'What about a pyramid whose apex is off-centre?',
      a: 'The volume formula still holds, but the faces are no longer identical and the single slant height stops being meaningful. This calculation assumes a regular pyramid.',
    },
  ],
};
