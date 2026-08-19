import type { CalculatorCopy } from '../../lib/platform/types';

export const hydrostaticPressureCopyEn: CalculatorCopy = {
  name: 'Hydrostatic pressure calculator',
  slug: 'hydrostatic-pressure-calculator',
  shortDescription: 'Pressure of a liquid column from density and depth.',
  longDescription:
    'Works out the pressure a column of liquid creates: p = ρgh. It depends on neither the shape of the vessel nor its volume — only on density, depth and the standard acceleration of free fall, taken as 9.80665. External pressure on top is optional: without it the result is the gauge pressure of the column, with it the absolute pressure, and the calculator says which, because confusing them is an error of exactly one atmosphere.',
  seoTitle: 'Hydrostatic pressure calculator — p = ρgh',
  seoDescription: 'Calculate the hydrostatic pressure of a liquid column from density and depth, with or without atmospheric pressure.',
  h1: 'Hydrostatic pressure calculator',
  keywords: ['hydrostatic pressure calculator', 'pressure at depth', 'liquid column pressure'],
  howToUse: ['Enter the density of the liquid: fresh water is 1000 kg/m³.', 'Give the depth.', 'Add external pressure if you need it — atmospheric is 101,325 Pa.'],
  howItWorks:
    'p = ρ·g·h with g = 9.80665 m/s². Any external pressure is added to the result. Neither the shape of the vessel nor its volume enters the formula: at the same depth the pressure is the same in a lake and in a narrow tube.',
  example: 'Ten metres of fresh water gives a column pressure of 98,066.5 Pa — almost one atmosphere.',
  faq: [
    { q: 'Does the pressure depend on the shape of the vessel?', a: 'No. Only density and depth enter the formula, so at the same depth a narrow tube and a wide pool give the same pressure — the hydrostatic paradox.' },
    { q: 'How does gauge pressure differ from absolute?', a: 'Gauge is measured from atmospheric, absolute from zero. With no external pressure the result is gauge; add 101,325 Pa to get absolute.' },
    { q: 'Which density should I use?', a: 'Fresh water is 1000 kg/m³, sea water about 1025, diesel roughly 840. It is entered because it depends on temperature and composition.' },
    { q: 'How is this different from the pressure calculator?', a: 'That one treats pressure as force divided by area. Here the pressure comes from the weight of a liquid column, and depth enters the formula rather than a contact area.' },
  ],
};
