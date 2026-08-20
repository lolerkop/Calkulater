import type { CalculatorCopy } from '../../lib/platform/types';

export const cogsCopyEn: CalculatorCopy = {
  name: 'COGS calculator',
  slug: 'cogs-calculator',
  shortDescription: 'Cost of goods sold from opening inventory, purchases and closing stock.',
  longDescription:
    'Cost of goods sold is measured by stock movement rather than by supplier invoices: purchases are added to the opening inventory, and whatever is left at the end of the period is subtracted. What remains is the cost of the goods that actually reached customers. The difference between "spent" and "sold" matters here: stocking up raises the month\'s cash outflow without raising the cost of sales, because the goods are still on the shelf and will be counted later, when they sell. That is why this formula stops gross profit from swinging with the delivery schedule.',
  seoTitle: 'COGS calculator — cost of goods sold',
  seoDescription:
    'Calculate the cost of goods sold from opening inventory, purchases during the period and closing stock, plus the goods available for sale.',
  h1: 'COGS calculator',
  keywords: ['cogs calculator', 'cost of goods sold', 'inventory movement', 'cost of sales'],
  howToUse: [
    'Enter the value of the stock the period started with.',
    'Enter how much inventory was purchased during the period.',
    'Enter the value of the stock left at the end of the period.',
    'Use the same prices for all three figures — purchase prices, not retail.',
  ],
  howItWorks:
    'COGS = opening inventory + purchases − closing inventory. The intermediate figure, goods available for sale, is the sum of the first two: everything that could have been sold during the period.',
  example: 'Opening stock 320,000, purchases 780,000, closing stock 415,000 — cost of goods sold is 685,000.',
  faq: [
    {
      q: 'Why is closing stock subtracted rather than added?',
      a: 'Because it has not been sold. Only goods that reached customers belong in the period\'s cost of sales; everything else stays an asset and is counted in the period when it sells.',
    },
    {
      q: 'Do inbound freight costs count as purchases?',
      a: 'Yes, when they increase the value of the goods on the shelf. Outbound delivery to the customer is a selling expense and does not belong in this formula.',
    },
    {
      q: 'What if the stock was never counted?',
      a: 'Without a closing figure the calculation only gives goods available for sale. Estimating the closing stock from bookkeeping records is acceptable, but any error in it passes straight into COGS — it is subtracted one for one.',
    },
    {
      q: 'Why is COGS higher than my purchases?',
      a: 'The warehouse shrank during the period: you sold not only what you bought but also what was carried over. That is a normal situation, not an input error.',
    },
  ],
};
