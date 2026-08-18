import type { CalculatorCopy } from '../../lib/platform/types';

export const savingsRateCopyEn: CalculatorCopy = {
  name: 'Savings rate calculator',
  slug: 'savings-rate-calculator',
  shortDescription: 'The share of income left after expenses.',
  longDescription:
    'The savings rate shows what part of your income you keep. It does not depend on how much you earn, which makes it a fair way to compare one month against another.',
  seoTitle: 'Savings rate calculator — what share of income you keep',
  seoDescription: 'Work out your savings rate: the share of income left after expenses, and the amount saved.',
  h1: 'Savings rate calculator',
  keywords: ['savings rate calculator', 'how much to save', 'personal budget'],
  howToUse: ['Enter income for a month or another period.', 'Enter expenses for the same period.', 'Compare the rate with earlier periods.'],
  howItWorks: 'Savings rate = (income − expenses) / income × 100%. It is independent of currency and income size.',
  example: 'Income 100,000 and expenses 70,000 give savings of 30,000 and a rate of 30%.',
  faq: [
    { q: 'What is a good savings rate?', a: 'Around 10% keeps a budget stable and roughly 20% is comfortable. Consistency matters more than one high month.' },
    { q: 'What counts as income?', a: 'Money that actually arrived during the period, after tax. Keep one-off amounts separate or the rate will swing.' },
    { q: 'Why is my rate negative?', a: 'Expenses exceeded income, so the gap was covered from savings or borrowing. The calculator flags this on its own line.' },
  ],
};
