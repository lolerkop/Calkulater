import type { CalculatorCopy } from '../../lib/platform/types';

export const powerToWeightCopyEn: CalculatorCopy = {
  name: 'Power to weight ratio calculator',
  slug: 'power-to-weight-calculator',
  shortDescription: 'Specific power in kW per tonne, hp per tonne and kg per hp.',
  longDescription:
    'Divides engine power by vehicle mass and shows the result the three ways people actually discuss it. Horsepower here is the metric one, 735.49875 W, which is the figure printed in European vehicle documents; the mechanical variant differs by about one and a half percent and would quietly spoil any comparison.',
  seoTitle: 'Power to weight ratio calculator — kW per tonne and kg per hp',
  seoDescription: 'Calculate a power-to-weight ratio in kilowatts per tonne, horsepower per tonne and kilograms per horsepower.',
  h1: 'Power to weight ratio calculator',
  keywords: ['power to weight calculator', 'kw per tonne', 'kg per hp'],
  howToUse: ['Enter engine power and pick its unit.', 'Enter the kerb weight.', 'Add any extra load you want included.'],
  howItWorks: 'Power is converted to kilowatts, mass to tonnes, and the ratio follows; kg per hp is the same relationship inverted.',
  example: '150 hp in a 1400 kg car is 110.32 kW over 1.4 t, which is 78.80 kW per tonne.',
  faq: [
    { q: 'Which horsepower is used?', a: 'The metric one, 735.49875 W, also written PS. It is what appears in vehicle documents across Europe.' },
    { q: 'Should I include passengers and fuel?', a: 'That is your choice. Kerb weight is the usual basis for comparison, and the extra load field lets you add whatever you want counted.' },
    { q: 'Why show kilograms per horsepower as well?', a: 'Many people remember the figure that way, and a lower number means better acceleration, which some find more intuitive.' },
    { q: 'Does this predict acceleration?', a: 'Only roughly. Gearing, traction, aerodynamics and where the power arrives in the rev range all matter and are not modelled.' },
  ],
};
