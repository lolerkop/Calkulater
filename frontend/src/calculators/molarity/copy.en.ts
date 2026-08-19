import type { CalculatorCopy } from '../../lib/platform/types';

export const molarityCopyEn: CalculatorCopy = {
  name: 'Molarity calculator',
  slug: 'molarity-calculator',
  shortDescription: 'Molar concentration of a solution from moles or from a mass.',
  longDescription:
    'Works out molar concentration — how many moles of dissolved substance there are per litre of solution. If the amount of substance is not known it can be derived here from a mass and a molar mass, without a separate calculation first. The volume is converted to litres before the formula is applied, so millilitres and cubic metres are picked from a list rather than converted by hand: that conversion is where the mistake usually happens, producing a number a thousand times out and entirely plausible.',
  seoTitle: 'Molarity calculator — solution concentration in mol/L',
  seoDescription: 'Calculate the molar concentration of a solution from the amount of substance or from a mass and a molar mass.',
  h1: 'Molarity calculator',
  keywords: ['molarity calculator', 'molar concentration', 'moles per litre', 'solution concentration'],
  howToUse: ['Choose whether you know the amount of substance or its mass.', 'Enter the value, and the molar mass if you are working from a mass.', 'Pick the volume unit and enter the volume of solution.'],
  howItWorks:
    'C = n / V, where n is the amount of substance in moles and V the volume of solution in litres. Given a mass, the amount is first found as n = m / M. The chosen volume unit is converted to litres before the division.',
  example: 'Half a mole in two litres of solution gives a concentration of 0.25 mol/L.',
  faq: [
    { q: 'Is molarity based on the volume of solution or of solvent?', a: 'On the volume of the finished solution. They are not the same: dissolving changes the volume, so a litre of water plus the substance is not a litre of solution.' },
    { q: 'How do I find molarity from a mass?', a: 'Choose the mass mode and give the molar mass of the substance. The amount is found as mass divided by molar mass, and the rest of the calculation is identical.' },
    { q: 'Why must the volume unit be selected?', a: 'Because the formula works in litres. Millilitres and cubic metres are converted automatically — without that the result would be a thousand times out and still look plausible.' },
    { q: 'How does molarity differ from percentage concentration?', a: 'Molarity counts particles, percentage concentration counts mass. For the same solution these are two different numbers and one must not be substituted for the other.' },
  ],
};
