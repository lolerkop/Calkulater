import type { CalculatorCopy } from '../../lib/platform/types';

export const bonusCopyEn: CalculatorCopy = {
  name: 'Bonus calculator',
  slug: 'bonus-calculator',
  shortDescription: 'Bonus before and after tax from salary, percentage and tax rate.',
  longDescription:
    'A bonus announced as a percentage of salary and a bonus received on a card are two different numbers, and the distance between them is the withheld tax. "A thirty per cent bonus" describes what is accrued; what an employee actually sees is what remains after deduction, and the surprise is usually unpleasant precisely because the announcement never mentions which figure it means. Both are shown side by side here for that reason, along with the amount withheld, so the arithmetic behind the difference is visible rather than assumed.',
  seoTitle: 'Bonus calculator — gross and take-home',
  seoDescription:
    'Calculate a bonus before tax and the take-home amount from a base salary, the bonus percentage and the income tax rate.',
  h1: 'Bonus calculator',
  keywords: ['bonus calculator', 'take-home bonus', 'bonus percentage', 'tax on bonus'],
  howToUse: [
    'Enter the base salary the bonus is calculated from.',
    'Enter the bonus as a percentage of that salary.',
    'Enter the income tax rate that applies.',
    'A bonus above one hundred per cent is normal for annual awards.',
  ],
  howItWorks:
    'Bonus before tax = salary × percentage ÷ 100. Tax is that amount times the rate, and the take-home figure is what is left.',
  example: 'A 35% bonus on a salary of 145,000 is 50,750 before tax and 44,152.50 after 13%.',
  faq: [
    {
      q: 'Is a bonus taxed differently from salary?',
      a: 'In most systems it is ordinary income and taxed at the same rate. Some countries apply separate withholding rules to one-off payments, which can change the timing without changing the total.',
    },
    {
      q: 'Should the percentage be taken from gross or net salary?',
      a: 'From gross, essentially always. Employment contracts state bonuses as a share of the accrued salary, before any deduction.',
    },
    {
      q: 'Why does my bonus differ from this figure?',
      a: 'Common reasons are social contributions on top of income tax, a bonus prorated for time worked, or a base that includes allowances the calculation here does not know about.',
    },
    {
      q: 'Can the bonus percentage exceed one hundred?',
      a: 'Yes, and for annual awards it often does — a thirteenth salary is a hundred per cent by definition. The calculation handles any non-negative percentage.',
    },
  ],
};
