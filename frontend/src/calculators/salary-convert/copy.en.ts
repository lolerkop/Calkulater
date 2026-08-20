import type { CalculatorCopy } from '../../lib/platform/types';

export const salaryConvertCopyEn: CalculatorCopy = {
  name: 'Salary period converter',
  slug: 'salary-period-converter',
  shortDescription: 'Convert a salary between hourly, daily, monthly and yearly.',
  longDescription:
    'Everything converts through a single denominator — the working hour — with a day of 8 hours, a week of 40, a month of 168 and a year of 2,016. These are working norms rather than a calendar, which is why a year is exactly twelve of these months with no adjustment for the length of February or for public holidays. Counting any other way produces different answers for the same salary depending on which month you ask about. All four periods are shown at once because the real task is usually comparing offers quoted in different units, and converting them one at a time means comparing from memory.',
  seoTitle: 'Salary converter — hourly, daily, monthly, yearly',
  seoDescription:
    'Convert a salary between hourly, daily, weekly, monthly and yearly using a 168-hour working month, with every period shown at once.',
  h1: 'Salary period converter',
  keywords: ['salary converter', 'hourly to annual salary', 'annual salary', 'daily rate'],
  howToUse: [
    'Enter the amount you already know.',
    'Choose the period that amount refers to.',
    'Choose the period you want it converted into.',
    'The remaining periods are shown alongside for comparison.',
  ],
  howItWorks:
    'The amount is divided by the hours in its own period and multiplied by the hours in the target one. Day 8 h, week 40 h, month 168 h, year 2,016 h.',
  example: '180,000 a month is 2,160,000 a year and about 1,071.43 an hour.',
  faq: [
    {
      q: 'Why is a month 168 hours rather than the actual calendar?',
      a: 'Because a working month of 21 days at 8 hours is the standard used in contracts. Using real calendar lengths would give a different hourly rate for the same salary in every month of the year.',
    },
    {
      q: 'Does this account for holidays and paid leave?',
      a: 'No. Paid leave effectively raises the hourly value of an annual salary, and unpaid leave lowers it; both sit outside this straightforward conversion.',
    },
    {
      q: 'Should I compare offers on the hourly figure?',
      a: 'It is the fairest common unit when the schedules differ. Comparing a four-day week against a five-day one on monthly pay alone hides a twenty per cent difference in hourly terms.',
    },
    {
      q: 'Is the amount gross or net?',
      a: 'Whatever you enter. The conversion is proportional, so gross in gives gross out, and net in gives net out.',
    },
  ],
};
