import type { CalculatorCopy } from '../../lib/platform/types';

export const fuelConsumptionCopyEn: CalculatorCopy = {
  name: 'Fuel consumption calculator',
  slug: 'fuel-consumption-calculator',
  shortDescription: 'Litres per 100 km from a fill-up, or the fuel a trip will need.',
  longDescription:
    'Takes the litres you actually put in and the distance you actually covered, and turns them into consumption. The reciprocal figure in kilometres per litre appears alongside because people ask for it, and a third mode works forwards instead: give a distance and a known consumption and it returns the fuel required.',
  seoTitle: 'Fuel consumption calculator — litres per 100 km',
  seoDescription: 'Calculate fuel consumption in litres per 100 km from litres used and distance covered, or the fuel needed for a trip.',
  h1: 'Fuel consumption calculator',
  keywords: ['fuel consumption calculator', 'litres per 100 km', 'fuel economy'],
  howToUse: ['Choose what you want to work out.', 'Fill the tank, drive, and note the litres and kilometres.', 'Enter both and read the consumption.'],
  howItWorks: 'litres per 100 km = litres ÷ kilometres × 100; fuel for a trip is distance ÷ 100 × consumption.',
  example: '42 litres over 560 km is 42 ÷ 560 × 100 = 7.5 litres per 100 km.',
  faq: [
    { q: 'Is this a miles-per-gallon converter?', a: 'No. It computes consumption from the litres and kilometres you measured. Converting between L/100 km and mpg is a separate job that needs a reciprocal conversion.' },
    { q: 'Why does my figure differ from the on-board computer?', a: 'The computer estimates from injector timing and resets on its own schedule. A brim-to-brim measurement over a full tank is the more reliable comparison.' },
    { q: 'Should I measure over one tank or several?', a: 'Several is better. Single-tank figures swing with traffic and terrain, and averaging over a few fill-ups smooths that out.' },
    { q: 'Are city and motorway figures different?', a: 'Substantially. The calculator uses only what you enter, so measure the kind of driving you actually want to know about.' },
  ],
};
