import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const shippingPerUnitCopyEn: CalculatorCopy = {
  name: 'Shipping per unit calculator',
  slug: 'shipping-per-unit',
  shortDescription: 'What logistics adds to the cost of one item.',
  seoTitle: 'Shipping per unit calculator — logistics cost per item',
  seoDescription: 'Calculate shipping cost per unit from the delivery cost, the number of units and optional packaging.',
  h1: 'Shipping per unit calculator',
  keywords: ['shipping per unit', 'logistics cost per item', 'delivery cost'],
  ...contractContent.en,
};
