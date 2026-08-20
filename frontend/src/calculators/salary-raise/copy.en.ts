import type { CalculatorCopy } from '../../lib/platform/types';

export const salaryRaiseCopyEn: CalculatorCopy = {
  name: 'Salary raise calculator',
  slug: 'salary-raise-calculator',
  shortDescription: 'Raise percentage from a new salary, or the new salary from a percentage.',
  longDescription:
    'The two directions matter because negotiations run in percentages while decisions are made in money. Given the new figure, the calculator returns the percentage; given the percentage, it returns the figure. Both show the difference in currency alongside, which is the number that actually changes anything: ten per cent on a small salary and three per cent on a large one can be the same amount of money. A decrease is shown honestly as a negative percentage rather than hidden as zero — the arithmetic works the same in both directions, and pretending otherwise would misdescribe what happened.',
  seoTitle: 'Salary raise calculator — percentage and amount',
  seoDescription:
    'Calculate the raise percentage from a previous and a new salary, or the new salary from a given percentage, with the difference in money.',
  h1: 'Salary raise calculator',
  keywords: ['salary raise calculator', 'raise percentage', 'new salary', 'pay increase'],
  howToUse: [
    'Choose whether you know the new salary or the percentage.',
    'Enter the previous salary.',
    'Enter either the new salary or the raise percentage.',
    'Compare offers on the difference in money, not on the percentage alone.',
  ],
  howItWorks:
    'Percentage = (new ÷ previous − 1) × 100. The reverse gives new = previous × (1 + percentage ÷ 100).',
  example: 'Going from 120,000 to 148,000 is a 23.33% raise and 28,000 more a month.',
  faq: [
    {
      q: 'Should the percentage be taken from gross or net pay?',
      a: 'From gross, because that is what employment contracts state. A gross raise does not translate one to one into take-home pay once tax brackets are involved.',
    },
    {
      q: 'Does this account for inflation?',
      a: 'No. A five per cent raise during eight per cent inflation is a pay cut in real terms, and comparing the two figures is a separate calculation.',
    },
    {
      q: 'Why is a decrease shown as a negative percentage?',
      a: 'Because it is one. Clamping it to zero would hide the direction of the change, and the arithmetic behaves identically either way.',
    },
    {
      q: 'Why show the difference in money as well?',
      a: 'Because percentages hide the base. Three per cent on a large salary can beat ten per cent on a small one, and only the money column makes that visible.',
    },
  ],
};
