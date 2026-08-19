import type { CalculatorCopy } from '../../lib/platform/types';

export const plasterCopyEn: CalculatorCopy = {
  name: 'Plaster calculator',
  slug: 'plaster-calculator',
  shortDescription: 'How much dry mix a wall needs at a given layer thickness.',
  longDescription:
    'Works out the mass of dry mix and the number of bags from the wall area and the layer thickness. Consumption stays a field you can see and change: gypsum, cement and lime mixes differ, and the manufacturer prints their own figure on the bag. The default of 8.5 kg per square metre per millimetre of layer is a typical gypsum mix — an assumption stated on the page, not a standard. Bags round up, because half a bag is not sold.',
  seoTitle: 'Plaster calculator — dry mix needed for a wall',
  seoDescription: 'Calculate the mass of plaster mix and the number of bags from the wall area, layer thickness and consumption.',
  h1: 'Plaster calculator',
  keywords: ['plaster calculator', 'plaster consumption', 'plaster per m2', 'bags of plaster'],
  howToUse: ['Give the wall area, or its length and height.', 'Enter the layer thickness and the consumption from the bag.', 'Read the mass of mix and the number of bags.'],
  howItWorks:
    'Mass = area × layer thickness in millimetres × consumption per square metre at one millimetre. The number of bags is the mass divided by the bag weight and rounded up.',
  example: 'A 20 m² wall at a 10 mm layer and a consumption of 8.5 needs 1,700 kg of mix — 57 bags of 30 kg.',
  faq: [
    { q: 'Where does the consumption figure come from?', a: 'From the packaging: manufacturers state it in kilograms per square metre at a one-millimetre layer. The default is a typical gypsum mix and is worth replacing with your own.' },
    { q: 'How is this different from the screed calculator?', a: 'Screed levels a floor and is figured from the layer volume over the floor area. Plaster goes on a wall, and its consumption is quoted per millimetre of thickness.' },
    { q: 'How thick should the plaster layer be?', a: 'Thick enough to bring the wall into plane — 5–10 mm on a flat wall, more where the deviation is visible. Judge it from the beacons rather than from an average figure.' },
    { q: 'Are openings and reveals accounted for?', a: 'No. Subtract the openings and add the reveals yourself: their geometry differs in every room.' },
  ],
};
