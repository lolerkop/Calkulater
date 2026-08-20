import type { CalculatorCopy } from '../../lib/platform/types';

export const cpcCopyEn: CalculatorCopy = {
  name: 'CPC calculator',
  slug: 'cpc-calculator',
  shortDescription: 'Cost per click from budget and clicks, plus CPM and click-through rate.',
  longDescription:
    'Cost per click needs only two numbers, and the calculator asks for a third because impressions unlock two more metrics that say something the first cannot. CPC tells you what traffic costs; CPM tells you what attention costs; the click-through rate tells you how well the creative converts attention into traffic. Together they separate two very different problems that a rising CPC alone cannot distinguish — an auction that has become more expensive, and an advert that has stopped working. Zero impressions therefore means "not reported": CPC stays valid, and the other two rows are simply left out.',
  seoTitle: 'CPC calculator — cost per click, CPM and CTR',
  seoDescription:
    'Calculate the cost per click from an advertising budget and the number of clicks, plus CPM and click-through rate when impressions are known.',
  h1: 'CPC calculator',
  keywords: ['cpc calculator', 'cost per click', 'cpm', 'click-through rate'],
  howToUse: [
    'Enter the advertising budget spent.',
    'Enter how many clicks it produced.',
    'Add impressions — CPM and CTR are computed from them.',
    'Enter zero for impressions when the platform does not report them.',
  ],
  howItWorks:
    'CPC = budget ÷ clicks. With impressions known, CPM = budget ÷ impressions × 1000 and CTR = clicks ÷ impressions × 100.',
  example: 'A budget of 36,000 with 1,450 clicks and 92,000 impressions gives a CPC of 24.83 and a CTR of 1.58%.',
  faq: [
    {
      q: 'Why did my CPC go up?',
      a: 'Either the auction got more expensive or the click-through rate fell. Looking at CPC alone cannot tell these apart, which is what the CPM and CTR rows are for.',
    },
    {
      q: 'What counts as a good click-through rate?',
      a: 'It depends entirely on the placement. Search advertising on precise queries often runs several per cent; display banners are frequently below one tenth of a per cent, and comparing the two is meaningless.',
    },
    {
      q: 'Can I calculate CPC without impressions?',
      a: 'Yes. Only CPM and the click-through rate need impressions; enter zero there and both rows are simply left out.',
    },
    {
      q: 'Is a lower CPC always better?',
      a: 'No. Cheap clicks from an untargeted audience can cost more per sale than expensive ones from a precise query. Cost per click means little without the conversion rate beside it.',
    },
  ],
};
