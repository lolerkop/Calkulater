import type { CalculatorCopy } from '../../lib/platform/types';

export const dilutionCopyEn: CalculatorCopy = {
  name: 'Dilution calculator',
  slug: 'dilution-calculator',
  shortDescription: 'The C₁V₁ = C₂V₂ rule solved for either volume.',
  longDescription:
    'Solves the dilution problem in both directions: what volume to make the solution up to, and how much of the stock solution to take. A separate line reports how much solvent has to be added, which is usually the number actually wanted at the bench. The final concentration cannot exceed the initial one: adding solvent never makes a solution stronger, so such input is rejected rather than quietly solved as evaporation.',
  seoTitle: 'Dilution calculator — C1V1 = C2V2',
  seoDescription: 'Calculate a dilution using the C₁V₁ = C₂V₂ rule: the final volume or the volume of stock solution needed.',
  h1: 'Dilution calculator',
  keywords: ['dilution calculator', 'c1v1 c2v2', 'stock solution dilution', 'prepare a solution'],
  howToUse: ['Choose which volume you need to find.', 'Enter the other three quantities.', 'Read the answer and the volume of solvent to add.'],
  howItWorks:
    'The amount of dissolved substance does not change on dilution, so the product of concentration and volume stays the same: C₁·V₁ = C₂·V₂. The volume of solvent is the difference between the final and the initial volume.',
  example: '50 mL of a 2 M solution made up to 200 mL gives 0.5 M — that is 150 mL of solvent added.',
  faq: [
    { q: 'Which units should the concentrations be in?', a: 'Any, as long as both are in the same ones. The rule works on a ratio, so molarity, per cent and grams per litre all serve equally well.' },
    { q: 'Why can the final concentration not be higher than the initial one?', a: 'Because that is no longer dilution. Adding solvent cannot raise a concentration — that needs evaporation, which is different physics and a different answer.' },
    { q: 'What does the "solvent to add" line show?', a: 'The difference between the final and initial volumes — how much actually has to be poured in. That is the figure usually needed when a solution is made up by hand.' },
    { q: 'Is the volume change on mixing accounted for?', a: 'No. Volumes are treated as additive, the usual approximation for dilute aqueous solutions. For concentrated mixtures check against the density.' },
  ],
};
