import type { CalculatorCopy } from '../../lib/platform/types';

export const budgetCopyEn: CalculatorCopy = {
  name: '50/30/20 budget calculator',
  slug: 'budget-50-30-20-calculator',
  shortDescription: 'Split income into needs, wants and savings.',
  longDescription:
    'The 50/30/20 rule splits income after tax into three parts: half for needs, a third for wants and a fifth for savings. It is a starting point rather than a law — the value is in seeing all three numbers at once.',
  seoTitle: '50/30/20 budget calculator — needs, wants and savings',
  seoDescription: 'Split your monthly income after tax into needs, wants and savings using the 50/30/20 rule.',
  h1: '50/30/20 budget calculator',
  keywords: ['50/30/20 budget', 'budget rule', 'monthly budget'],
  howToUse: ['Enter monthly income after tax.', 'Compare the three amounts with what you actually spend.', 'Adjust the categories that differ most.'],
  howItWorks: 'Needs = 50% of income, wants = 30%, savings = 20%.',
  example: 'Income of 100,000 gives 50,000 for needs, 30,000 for wants and 20,000 for savings.',
  faq: [
    { q: 'What counts as a need?', a: 'Housing, food, transport, utilities, medicine and minimum debt payments — anything you cannot skip next month.' },
    { q: 'Is the split strict?', a: 'No. It is a reference point. In expensive cities needs often exceed half, and the useful step is to see by how much.' },
    { q: 'Before or after tax?', a: 'After tax, and after mandatory deductions — otherwise every share is overstated.' },
    { q: 'What if savings do not fit?', a: 'Start from what is left and raise it gradually. A small regular share beats an ambitious one you abandon.' },
  ],
};
