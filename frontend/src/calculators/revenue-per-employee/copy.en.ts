import type { CalculatorCopy } from '../../lib/platform/types';

export const revenuePerEmployeeCopyEn: CalculatorCopy = {
  name: 'Revenue per employee calculator',
  slug: 'revenue-per-employee',
  shortDescription: 'How much revenue each person on the payroll brings.',
  longDescription:
    'Revenue per employee divides annual revenue by headcount. It is the crudest measure of labour productivity and the easiest to compare across years, because it does not depend on salary levels or on how costs are allocated.',
  seoTitle: 'Revenue per employee calculator — labour productivity',
  seoDescription: 'Calculate revenue per employee from annual revenue and headcount, with the monthly figure per person.',
  h1: 'Revenue per employee calculator',
  keywords: ['revenue per employee', 'labour productivity', 'headcount efficiency'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'Revenue per employee = annual revenue ÷ headcount.',
  example: 'Revenue of 12,000,000 across 40 employees gives 300,000 per person a year.',
  faq: [
    { q: 'Should part-time staff be counted?', a: 'Convert them to full-time equivalents before entering the number, otherwise the measure silently mixes two different units.' },
    { q: 'Are contractors included?', a: 'That is your choice, but keep it the same across years or the trend stops meaning anything.' },
    { q: 'What is a good figure?', a: 'It only makes sense within an industry. Software and retail differ by an order of magnitude.' },
    { q: 'Why is the monthly figure shown?', a: 'It is easier to weigh against salaries, which are usually thought of monthly.' },
  ],
};
