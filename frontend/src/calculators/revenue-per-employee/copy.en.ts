import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const revenuePerEmployeeCopyEn: CalculatorCopy = {
  name: 'Revenue per employee calculator',
  slug: 'revenue-per-employee',
  shortDescription: "Annual revenue divided by a whole employee count.",
  seoTitle: 'Revenue per employee calculator — labour productivity',
  seoDescription: "Calculate annual revenue per employee from annual revenue and a whole headcount. The monthly row divides this annual measure by 12; fractional FTE are not supported.",
  h1: 'Revenue per employee calculator',
  keywords: ['revenue per employee', 'labour productivity', 'headcount efficiency'],
  ...contractContent.en,
};
