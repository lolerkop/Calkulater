import type { CalculatorCopy } from '../../lib/platform/types';

export const adBudgetFunnelCopyEn: CalculatorCopy = {
  name: 'Ad budget funnel calculator',
  slug: 'ad-budget-funnel-calculator',
  shortDescription: 'Clicks, orders, revenue and ROAS from a budget and a conversion rate.',
  longDescription:
    'Where ROAS grades money already spent, this unrolls a budget forwards: how many clicks it buys, how many of those become orders, and what revenue results. Each stage multiplies into the next, so an error in the conversion rate damages the answer exactly as much as an error in the cost per click — and conversion is usually the figure people estimate most casually. The cost per order sits next to the revenue for a reason: comparing it against the average order value is the quickest test of whether the plan can work at all, before any money is committed.',
  seoTitle: 'Ad budget funnel calculator — clicks, orders, ROAS',
  seoDescription:
    'Turn an advertising budget into clicks, orders and revenue using the cost per click, conversion rate and average order value, with ROAS.',
  h1: 'Ad budget funnel calculator',
  keywords: ['ad budget calculator', 'roas', 'cost per order', 'advertising funnel'],
  howToUse: [
    'Enter the budget you plan to spend.',
    'Enter the cost per click you expect from the auction.',
    'Enter the conversion rate from click to order.',
    'Enter the average order value for the products advertised.',
  ],
  howItWorks:
    'Clicks = budget ÷ cost per click. Orders = clicks × conversion ÷ 100. Revenue = orders × average order value, and ROAS is revenue ÷ budget.',
  example: 'A budget of 150,000 at 24 per click with 2.4% conversion and a 4,900 order value returns 735,000 — a ROAS of 4.9.',
  faq: [
    {
      q: 'Which input should I be most careful with?',
      a: 'The conversion rate. It multiplies through the whole chain, and a guess of 3% against a real 1.5% halves the revenue while looking like a small difference on the page.',
    },
    {
      q: 'What ROAS is good enough?',
      a: 'It depends on the margin. At a thirty per cent margin, a ROAS of 3.33 only breaks even on the goods; anything below that loses money however impressive the revenue looks.',
    },
    {
      q: 'Does the revenue include returns?',
      a: 'No. It is gross revenue on orders placed. In categories with high return rates the usable figure can be a fifth lower.',
    },
    {
      q: 'Why show the cost per order separately?',
      a: 'Because it compares directly with the average order value and with your margin. If an order costs more to acquire than it earns, the funnel is broken regardless of how the totals look.',
    },
  ],
};
