import type { CalculatorCopy } from '../../lib/platform/types';

export const audienceGrowthCopyEn: CalculatorCopy = {
  name: 'Audience growth calculator',
  slug: 'audience-growth-calculator',
  shortDescription: 'Total audience growth and the average rate for one period.',
  longDescription:
    'Two numbers describe the same growth and answer different questions. Total growth says how much larger the audience became; growth per period says what pace would produce that same result if it were spread evenly. Doubling over a year and doubling over a month share a total figure and have nothing else in common, which is why comparing channels on total growth alone is misleading. The per-period rate is what makes accounts of different ages comparable, and the net gain keeps the percentages honest — a hundred per cent on a base of twelve is twelve people.',
  seoTitle: 'Audience growth calculator — total and per period',
  seoDescription:
    'Calculate total audience growth and the average per-period rate from a starting figure, an ending figure and the number of periods.',
  h1: 'Audience growth calculator',
  keywords: ['audience growth calculator', 'growth rate', 'follower gain', 'social media analytics'],
  howToUse: [
    'Enter the audience size at the start of the period.',
    'Enter the audience size at the end.',
    'Enter how many periods passed between the two measurements.',
    'Keep the period unit consistent — months or weeks, but not both.',
  ],
  howItWorks:
    'Total growth = (end ÷ start − 1) × 100. Growth per period is the same ratio taken to the power of one over the number of periods, minus one.',
  example: 'Going from 12,000 to 18,500 over six periods is 54.17% in total and 7.49% per period.',
  faq: [
    {
      q: 'Why is the per-period rate lower than total growth divided by periods?',
      a: 'Because growth compounds. Each period grows on top of the previous one, so the even pace that reaches the same endpoint is always below the simple average.',
    },
    {
      q: 'Can this handle a shrinking audience?',
      a: 'Yes. If the end figure is below the start, both rates come out negative — an honest description of decline rather than a hidden zero.',
    },
    {
      q: 'What counts as a period here?',
      a: 'Whatever unit you measured in: a month, a week, a campaign. The calculator does not care, as long as the count and the two measurements refer to the same unit.',
    },
    {
      q: 'Why show the net gain as well?',
      a: 'Percentages hide the base. Growing from twelve to twenty-four is a hundred per cent and twelve people, and the gain column is what keeps that in view.',
    },
  ],
};
