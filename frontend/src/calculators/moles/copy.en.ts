import type { CalculatorCopy } from '../../lib/platform/types';

export const molesCopyEn: CalculatorCopy = {
  name: 'Moles calculator',
  slug: 'moles-calculator',
  shortDescription: 'Moles from a mass and a molar mass, plus the number of particles.',
  longDescription:
    'Converts a mass into an amount of substance and back, and shows how many particles that is. The Avogadro constant is exact — 6.02214076×10²³ mol⁻¹ by the 2019 SI definition — so there is nothing to round in the calculation. The molar mass is entered as an ordinary number: the calculator does not parse a chemical formula and does not pretend to be a reference table, but neither does it get one wrong on your behalf.',
  seoTitle: 'Moles calculator — amount of substance from mass',
  seoDescription: 'Calculate the amount of substance in moles from a mass and a molar mass, along with the number of particles.',
  h1: 'Moles calculator',
  keywords: ['moles calculator', 'amount of substance', 'Avogadro number', 'mole'],
  howToUse: ['Choose whether you know the mass or the amount of substance.', 'Enter the value.', 'Give the molar mass of the substance from a reference table.'],
  howItWorks:
    'n = m / M — the mass divided by the molar mass. The reverse mode finds the mass as m = n · M. The number of particles is the amount multiplied by the Avogadro constant N_A = 6.02214076×10²³ mol⁻¹.',
  example: '18 grams of water at a molar mass of 18.02 g/mol gives 0.9989 mol — slightly under one mole.',
  faq: [
    { q: 'Where do I get the molar mass?', a: 'From the periodic table: add up the atomic masses of every atom in the formula. The calculator does not derive it — it does not parse chemical formulas and does not pretend to be a reference.' },
    { q: 'Why is 18 grams of water not exactly one mole?', a: 'Because the molar mass of water is about 18.02, not 18. Exactly one mole is 18.02 grams; the difference is small but visible in the result.' },
    { q: 'What does the number of particles mean?', a: 'How many molecules, atoms or ions that amount of substance contains. It is the amount in moles multiplied by the Avogadro constant.' },
    { q: 'Is the Avogadro constant rounded?', a: 'No. Since 2019 it has been fixed exactly at 6.02214076×10²³ mol⁻¹ — it defines the unit rather than being measured.' },
  ],
};
