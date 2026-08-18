import type { CalculatorCopy } from '../../lib/platform/types';

export const torqueCopyEn: CalculatorCopy = {
  name: 'Torque converter',
  slug: 'torque-converter',
  shortDescription: 'Convert torque between N·m, kgf·m and pound-force feet.',
  longDescription:
    'Converts torque between newton metres, kilonewton metres, newton centimetres, kilogram-force metres, pound-force feet, pound-force inches and ounce-force inches.',
  seoTitle: 'Torque converter — N·m, kgf·m, lbf·ft',
  seoDescription: 'Convert torque between newton metres, kilogram-force metres, pound-force feet and pound-force inches.',
  h1: 'Torque converter',
  keywords: ['torque converter', 'nm to lb-ft', 'tightening torque'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit converts through the newton metre using exact force and length factors.',
  example: 'A tightening torque of 100 N·m is about 73.76 pound-force feet.',
  faq: [
    { q: 'How is torque different from force?', a: 'Torque is force times lever arm, so its unit is compound: a newton multiplied by a metre.' },
    { q: 'Is the pound-force foot conversion exact?', a: 'Yes: the pound, the foot and standard gravity are all exactly defined, so 1 lbf·ft is exactly 1.3558179483314 N·m.' },
    { q: 'What is an ounce-force inch?', a: 'A small US unit for precision mechanics: one sixteenth of a pound-force inch.' },
    { q: 'Can torque be converted to energy?', a: 'No. A newton metre of torque and a joule of energy share dimensions but are different quantities.' },
  ],
};
