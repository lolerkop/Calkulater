import type { CalculatorCopy } from '../../lib/platform/types';

export const leasePaymentCopyEn: CalculatorCopy = {
  name: "Lease payment calculator",
  slug: "lease-payment",
  shortDescription: "Monthly lease payment with a residual value.",
  longDescription:
    "A lease differs from a loan by its residual value: you buy down not the whole item but the gap between price and residual, which makes the payment noticeably lower. The finance charge, however, is taken on the SUM of the financed amount and the residual \u2014 the lessor's money is tied up in the whole item, not just the part being repaid. That explains why a large residual lowers the payment less than people expect.",
  seoTitle: "Lease payment calculator \u2014 with residual value",
  seoDescription: "Calculate the monthly lease payment from price, down payment, residual share, term and annual rate.",
  h1: "Lease payment calculator",
  keywords: ["lease payment", "residual value", "car lease", "lease down payment"],
  howToUse: [
    "The residual share is what remains to buy out at the end; car leases usually run 20\u201345 %.",
    "The annual rate here is the leasing markup convention, not a loan APR.",
    "The down payment reduces both the depreciation and the finance part, so it bites harder than on a loan.",
    "Insurance, tax and servicing are not in the payment \u2014 cost them separately.",
  ],
  howItWorks: "Payment = (financed \u2212 residual)/term + (financed + residual)\u00d7rate/2400.",
  example: "2 M with a 400 K down payment, 40 % residual and 12 % gives 41,111.11 a month.",
  faq: [
    { q: "Why is a lease payment lower than a loan payment?", a: "Because the term only buys down the gap to the residual, not the whole price. The residual is either paid off in one go at the end or the item is returned \u2014 the payment is lower, but ownership does not transfer automatically." },
    { q: "Why is interest charged on the residual too?", a: "The lessor\u2019s money is invested in the whole item, not only in the part being repaid. So the charge is taken on the sum of financed amount and residual \u2014 which is what gives the 2400 divisor instead of 1200." },
    { q: "Bigger down payment or smaller residual?", a: "The down payment cuts both parts of the payment at once, so it works harder. A larger residual lowers the payment but pushes the cost to the end of the term and raises the total finance charge." },
    { q: "What is the annual markup?", a: "A leasing convention for showing the cost of money: what percentage of the price is added per year. It is NOT the same as a loan APR and the two cannot be compared directly." },
  ],
};
