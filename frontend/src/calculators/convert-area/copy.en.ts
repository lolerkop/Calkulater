import type { CalculatorCopy } from '../../lib/platform/types';

export const areaCopyEn: CalculatorCopy = {
  name: 'Area converter',
  slug: 'area-converter',
  shortDescription: 'Convert area between metric and imperial units.',
  longDescription:
    'Converts area between square millimetres, centimetres, metres and kilometres, hectares, square inches and feet, and acres. The squared factors are exact, so land measurements do not accumulate rounding error.',
  seoTitle: 'Area converter — m², hectares, acres, square feet',
  seoDescription: 'Convert area between square metres, hectares, acres, square feet and square inches.',
  h1: 'Area converter',
  keywords: ['area converter', 'hectares to acres', 'm2 to ft2'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit has an exact factor to the square metre.',
  example: 'A hectare is 10,000 m² and an acre is 4046.8564224 m².',
  faq: [
    { q: 'How is a hectare different from an acre?', a: 'A hectare is exactly 10,000 m² while an acre is 4046.86 m². One hectare is about 2.47 acres.' },
    { q: 'Why are the factors not squares of length factors?', a: 'They are, but written out as finished numbers so the converter does not depend on dimensional analysis and stays easy to verify.' },
    { q: 'Is it suitable for land plots?', a: 'Yes, hectares and acres are standard land measures. For documents, check against the official survey.' },
    { q: 'Are the imperial area units exact?', a: 'Yes. A square inch is 0.00064516 m² by the definition of the inch.' },
  ],
};
