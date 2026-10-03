import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const leasePaymentCopyEn: CalculatorCopy = {
  "name": "Lease payment calculator",
  "slug": "lease-payment",
  "shortDescription": "Monthly lease payment with a residual value.",
  "seoTitle": "Lease payment calculator — with residual value",
  "seoDescription": "Calculate the monthly lease payment from price, down payment, residual share, term and annual rate.",
  "h1": "Lease payment calculator",
  "keywords": [
    "lease payment",
    "residual value",
    "car lease",
    "lease down payment"
  ],
  "resultTitle": "Lease payment calculator",
  ...contractContent.en,
};
