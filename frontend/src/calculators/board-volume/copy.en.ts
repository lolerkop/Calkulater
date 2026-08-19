import type { CalculatorCopy } from '../../lib/platform/types';

export const boardVolumeCopyEn: CalculatorCopy = {
  name: 'Board volume calculator',
  slug: 'board-volume-calculator',
  shortDescription: 'Volume of timber, of a single board, and boards per cubic metre.',
  longDescription:
    'Converts board length and section into cubic metres — the unit timber is sold in. Length is measured in metres and the section in millimetres, and that conversion is exactly where mental arithmetic goes wrong: multiplying millimetres as if they were metres is out by a factor of a million while still looking like a plausible figure. Here it is done explicitly. A separate line gives how many such boards fit into a cubic metre, which is usually the number checked at the yard.',
  seoTitle: 'Board volume calculator — cubic metres of timber',
  seoDescription: 'Calculate the volume of boards in cubic metres from length and section, the volume of one board and boards per cubic metre.',
  h1: 'Board volume calculator',
  keywords: ['board volume calculator', 'timber volume', 'boards per cubic metre', 'lumber calculator'],
  howToUse: ['Enter the board length in metres and the width and thickness in millimetres.', 'Give the number of boards.', 'Add a price per cubic metre if you need the cost.'],
  howItWorks:
    'The volume of one board is its length multiplied by the width and thickness converted from millimetres by dividing by a thousand. The total multiplies that by the count, and boards per cubic metre is the reciprocal of one board volume.',
  example: 'A 6 m × 150 × 25 mm board takes 0.0225 m³; fifty of them make 1.125 m³, and a cubic metre holds 44.44 of them.',
  faq: [
    { q: 'Why are width and thickness in millimetres?', a: 'Because that is how timber sections are marked: 150 × 25. The conversion to metres happens inside the calculation, so there is no need to type 0.15 and 0.025 and no chance to slip a decimal.' },
    { q: 'How many boards are in a cubic metre?', a: 'It is the reciprocal of one board volume. For 6 m × 150 × 25 mm that is 44.44 — a fractional figure is normal here and shows that whole boards will never make an exact cubic metre.' },
    { q: 'Is wane or shrinkage included?', a: 'No. The calculation is geometric and uses the nominal size. Dried planed timber measures less than nominal, so allow for that separately.' },
    { q: 'Does it work for beams?', a: 'Yes, for any rectangular section: length, width and thickness are entered the same way.' },
  ],
};
