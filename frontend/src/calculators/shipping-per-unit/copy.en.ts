import type { CalculatorCopy } from '../../lib/platform/types';

export const shippingPerUnitCopyEn: CalculatorCopy = {
  name: 'Shipping per unit calculator',
  slug: 'shipping-per-unit',
  shortDescription: 'What logistics adds to the cost of one item.',
  longDescription:
    'Spreads the cost of a delivery, and optionally of packaging, across the units it carried. The figure belongs in unit economics next to the variable cost, because it grows with volume just as materials do.',
  seoTitle: 'Shipping per unit calculator — logistics cost per item',
  seoDescription: 'Calculate shipping cost per unit from the delivery cost, the number of units and optional packaging.',
  h1: 'Shipping per unit calculator',
  keywords: ['shipping per unit', 'logistics cost per item', 'delivery cost'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'Per unit = (shipping + packaging) ÷ units in the batch.',
  example: 'A delivery of 1,500 carrying 25 units costs 60 per unit.',
  faq: [
    { q: 'Should packaging be included?', a: 'Include it if you pay for it per batch. Leave the field empty and only the delivery is spread.' },
    { q: 'Why must units be whole?', a: 'A batch holds whole items; a fractional count means the batch or the data is wrong.' },
    { q: 'Does this belong in variable costs?', a: 'Yes. Logistics grows with volume, so it sits alongside materials in contribution margin.' },
    { q: 'What about returns?', a: 'Return shipping is a separate cost. Add it to the delivery figure only if you want the fully loaded number.' },
  ],
};
