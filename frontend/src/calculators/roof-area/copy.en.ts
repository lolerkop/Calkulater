import type { CalculatorCopy } from '../../lib/platform/types';

export const roofAreaCopyEn: CalculatorCopy = {
  name: 'Roof area calculator',
  slug: 'roof-area-calculator',
  shortDescription: 'Slope area from the footprint and the pitch, in degrees or per cent.',
  longDescription:
    'Works out the roof area from the footprint dimensions and the pitch. Worth knowing before you start: for any roof of constant pitch over the same footprint the area is the same — the footprint divided by the cosine of the angle. A single-slope, a gable and a hip roof differ not in the total but in how many planes it is split across, so the shape changes the breakdown rather than the sum. The pitch is given in degrees or as a percentage, and a percentage is converted through an arctangent rather than treated as an angle.',
  seoTitle: 'Roof area calculator — slopes from the pitch',
  seoDescription: 'Calculate the roof area from the footprint length and width and the pitch in degrees or per cent.',
  h1: 'Roof area calculator',
  keywords: ['roof area calculator', 'roof pitch area', 'slope area', 'roofing calculator'],
  howToUse: ['Choose the roof shape.', 'Enter the footprint length and width.', 'Give the pitch in degrees or as a percentage.'],
  howItWorks:
    'The footprint area is divided by the cosine of the pitch: a slope is longer than its projection by exactly that factor. The angle is converted to radians explicitly, and a percentage pitch becomes an angle through an arctangent. At 90 degrees the slope is vertical, the cosine goes to zero and no area exists.',
  example: 'A gable roof over a 10 × 8 m footprint at a 30° pitch has an area of 92.376 m² — 46.188 m² per slope.',
  faq: [
    { q: 'Why do a single-slope and a gable roof have the same area?', a: 'Because it depends only on the footprint and the pitch. A gable splits the same area across two slopes half the size — the sum does not change.' },
    { q: 'How does a percentage pitch differ from degrees?', a: 'A percentage is the rise over the run times a hundred. The angle follows through an arctangent: a 100 % pitch is 45°, not 90°.' },
    { q: 'Are the eaves included?', a: 'No. Enter the dimensions of the rectangle the roof actually covers, including the overhang if you want it counted.' },
    { q: 'Why is no per-slope area shown for a hip roof?', a: 'Because it depends on the ridge length, which is not asked for here. The total remains correct: it follows from the footprint and the pitch alone.' },
  ],
};
