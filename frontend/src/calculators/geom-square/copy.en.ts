import type { CalculatorCopy } from '../../lib/platform/types';

export const geomSquareCopyEn: CalculatorCopy = {
  name: 'Square calculator',
  slug: 'square-calculator',
  shortDescription: 'Area, perimeter and diagonal of a square from any one of them.',
  longDescription:
    'Solves a square from whichever value you happen to have: the side, the area or the perimeter. All four quantities come back together, so a floor area of 49 m² immediately tells you the 7 m wall it runs along and the 9.9 m diagonal you would measure across it. The length unit is chosen once and never converted — the area is simply reported in its square.',
  seoTitle: 'Square calculator — area, perimeter, diagonal',
  seoDescription: 'Calculate the area, perimeter and diagonal of a square from its side, area or perimeter.',
  h1: 'Square calculator',
  keywords: ['square calculator', 'area of a square', 'perimeter of a square', 'square diagonal'],
  howToUse: ['Pick the length unit you measured in.', 'Choose which value you know.', 'Enter it and read the other three.'],
  howItWorks: 'S = a², P = 4a and d = a√2, so a side found from the area as a = √S feeds the same three results.',
  example: 'A square room with a 5 m side has an area of 25 m², a perimeter of 20 m and a diagonal of 7.071 m.',
  faq: [
    { q: 'Can I enter the area instead of the side?', a: 'Yes. Choose the area mode and the side is recovered as its square root, then the perimeter and diagonal follow from it.' },
    { q: 'Why is the area shown in squared units?', a: 'Because that is what an area is. If you entered centimetres, the area is in square centimetres — multiplying by a linear factor to change unit would be wrong.' },
    { q: 'Is a zero side accepted?', a: 'No. A square with no side is not a figure, so the calculator reports the problem instead of returning a plausible zero.' },
    { q: 'How is the diagonal found?', a: 'By the Pythagorean theorem across two equal sides, which reduces to d = a√2.' },
  ],
};
