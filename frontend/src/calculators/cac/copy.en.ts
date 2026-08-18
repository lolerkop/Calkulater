import type { CalculatorCopy } from '../../lib/platform/types';

export const cacCopyEn: CalculatorCopy = {
  name: 'Customer acquisition cost calculator',
  slug: 'customer-acquisition-cost',
  shortDescription: 'How much each new customer costs, and whether it pays off.',
  longDescription:
    'Customer acquisition cost divides marketing and sales spend by the customers those efforts brought in. On its own the figure says little; paired with the revenue a customer brings it shows whether acquisition pays for itself.',
  seoTitle: 'CAC calculator — customer acquisition cost and LTV to CAC',
  seoDescription: 'Calculate customer acquisition cost from spend and customers acquired, plus the LTV to CAC ratio.',
  h1: 'Customer acquisition cost calculator',
  keywords: ['customer acquisition cost', 'CAC', 'LTV to CAC'],
  howToUse: ['Enter marketing and sales spend for the period.', 'Enter how many customers it brought.', 'Add average revenue per customer for the ratio.'],
  howItWorks: 'CAC = spend ÷ customers acquired. The ratio divides average revenue per customer by that cost.',
  example: 'Spending 100,000 to acquire 50 customers gives a CAC of 2,000.',
  faq: [
    { q: 'Which costs belong in the spend?', a: 'Everything spent on winning customers: advertising, sales salaries, agency fees, tools. Leave out costs of serving customers you already have.' },
    { q: 'What ratio is healthy?', a: 'A common benchmark is three to one or better. Below one to one every new customer loses money.' },
    { q: 'Why must customers be a whole number?', a: 'You cannot acquire part of a customer; a fractional input means the period or the source data is wrong.' },
    { q: 'Over what period should this be measured?', a: 'The same period the spend covers. Mixing a month of spend with a quarter of customers flatters the figure.' },
  ],
};
