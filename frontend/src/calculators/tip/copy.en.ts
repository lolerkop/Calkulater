import type { CalculatorCopy } from '../../lib/platform/types';

export const tipCopyEn: CalculatorCopy = {
  name: 'Tip calculator',
  slug: 'tip-calculator',
  shortDescription: 'Tip, total and an even split across the table.',
  longDescription:
    'Adds a tip of your chosen percentage to the bill and divides the total by the number of people. Rounding each share up recalculates the total too, because if everyone puts down whole notes the table pays more than the bill — showing the old figure would be untrue. The percentage is yours to set: customs differ by country and by venue.',
  seoTitle: 'Tip calculator — tip, total and split per person',
  seoDescription: 'Work out the tip, the total bill and how much each person pays, with optional rounding up per share.',
  h1: 'Tip calculator',
  keywords: ['tip calculator', 'split the bill', 'gratuity calculator'],
  howToUse: ['Enter the bill amount.', 'Set the tip percentage you want to leave.', 'Enter how many people are splitting it.'],
  howItWorks: 'tip = bill × percent ÷ 100; total = bill + tip; each share is the total divided by the number of people.',
  example: 'A 5400 bill with a 15 percent tip comes to 6210, which is 1552.50 each across four people.',
  faq: [
    { q: 'How much should I tip?', a: 'That depends on the country and the venue, so the percentage is yours to choose. The calculator does not suggest a norm or fill one in for you.' },
    { q: 'What does rounding each share up do?', a: 'It rounds every person to a whole unit, which usually leaves a little more than the bill. That surplus is shown as its own line so nothing is hidden.' },
    { q: 'Is service already included subtracted?', a: 'No. Whether a service charge replaces the tip is a judgement about your bill, not something the arithmetic can decide.' },
    { q: 'Can I use it without splitting?', a: 'Yes. Leave the count at one and you simply get the tip and the total.' },
  ],
};
