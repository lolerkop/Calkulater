import type { CalculatorCopy } from '../../lib/platform/types';

export const workdayCostCopyEn: CalculatorCopy = {
  name: 'Working day cost calculator',
  slug: 'workday-cost-calculator',
  shortDescription: 'What one working day and one working hour are worth at your salary.',
  longDescription:
    'Turns a monthly salary into the price of a day and of an hour — a figure that makes a day off, an hour of overtime and the daily commute all comparable. The number of working days and the length of a shift stay ordinary fields with sensible defaults: they differ between months and between schedules, so no working calendar is baked in to decide for you.',
  seoTitle: 'Working day and hour cost calculator',
  seoDescription: 'Work out the cost of a single working day and hour from a monthly salary and the number of working days.',
  h1: 'Working day cost calculator',
  keywords: ['working day cost', 'hourly rate from salary', 'cost of an hour of work'],
  howToUse: ['Enter the monthly salary.', 'Give the number of working days this month and the shift length.', 'Read the cost of a day and of an hour.'],
  howItWorks:
    'The salary is divided by the number of working days to give the cost of a day; dividing that by the shift length gives the cost of an hour. Both follow the figures you entered — no monthly norm is substituted behind your back.',
  example: 'A salary of 100 000 across 21 working days of eight hours gives 4 761.90 per day and 595.24 per hour.',
  faq: [
    { q: 'Why must the number of working days be entered by hand?', a: 'Because it changes from month to month and from schedule to schedule. Fixing one number for every case would present a convenient assumption as a fact.' },
    { q: 'Gross or net salary?', a: 'Whichever you prefer to reason about. The calculation is linear, so the cost of a day comes back in the same terms as the salary you entered.' },
    { q: 'Is this suitable for costing overtime?', a: 'As a reference point, yes — the hourly figure shows what the time is worth. Overtime itself is usually paid at a premium rate, which has to be applied separately.' },
    { q: 'How do I account for holidays and sick leave?', a: 'Reduce the number of working days by the ones you do not actually work. The remaining days become more expensive, which is exactly how the salary is spread.' },
  ],
};
