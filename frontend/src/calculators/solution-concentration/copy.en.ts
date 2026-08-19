import type { CalculatorCopy } from '../../lib/platform/types';

export const solutionConcentrationCopyEn: CalculatorCopy = {
  name: 'Solution concentration calculator',
  slug: 'solution-concentration-calculator',
  shortDescription: 'Per cent by mass, mass per volume and parts per million.',
  longDescription:
    'Works out the concentration of a solution in the two most common forms plus parts per million. The mode is an explicit choice because per cent by mass and per cent by volume are different quantities, and swapping one for the other gives a different number under the same name. There cannot be more substance than solution: such input is rejected rather than clamped to a hundred per cent, since clamping would turn a mistake into a plausible answer.',
  seoTitle: 'Solution concentration calculator — per cent and ppm',
  seoDescription: 'Calculate the concentration of a solution: per cent by mass, mass per volume and parts per million.',
  h1: 'Solution concentration calculator',
  keywords: ['solution concentration calculator', 'percentage concentration', 'mass fraction', 'ppm calculator'],
  howToUse: ['Choose the form of concentration.', 'Enter the mass of dissolved substance.', 'Give the mass or the volume of the finished solution.'],
  howItWorks:
    'Per cent by mass is the mass of substance divided by the mass of solution and multiplied by a hundred. Mass per volume divides the same mass by the volume of solution. Parts per million is the same ratio multiplied by a million.',
  example: '25 grams of substance in 500 grams of solution gives 5 % by mass, leaving 475 grams of solvent.',
  faq: [
    { q: 'Do I enter the mass of the solution or of the solvent?', a: 'The mass of the finished solution — substance and solvent together. The mass of solvent is reported separately as the difference.' },
    { q: 'How does per cent by mass differ from mass per volume?', a: 'In the denominator. One uses the mass of the solution in grams, the other its volume in millilitres. Whenever the density is not one, the two figures differ.' },
    { q: 'What is ppm?', a: 'Parts per million — the same ratio of masses multiplied by a million rather than a hundred. It suits very dilute solutions where the percentage runs into thousandths.' },
    { q: 'Why can I not enter more substance than solution?', a: 'Because no such solution exists: the substance is part of its mass. Clamping the result at a hundred per cent would present an input error as a correct answer.' },
  ],
};
