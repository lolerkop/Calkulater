import type { CalculatorCopy } from '../../lib/platform/types';

export const vacationAccrualCopyEn: CalculatorCopy = {
  name: 'Vacation accrual calculator',
  slug: 'vacation-accrual-calculator',
  shortDescription: 'Leave balance from the annual entitlement, months worked and days taken.',
  longDescription:
    'Leave accrues evenly rather than arriving in full in January: work half a year and you have earned half the annual entitlement, whatever the calendar has planned. On a twenty-eight-day entitlement that is 2.333 days a month — a fractional number that payroll will not round up in your favour, and the reason a balance rarely comes out as a whole number of days. A negative balance is shown as it is, because taking leave in advance of accruing it is an ordinary arrangement rather than an input error, and hiding it as zero would misstate what you owe if you left tomorrow.',
  seoTitle: 'Vacation accrual calculator — leave balance',
  seoDescription:
    'Calculate a leave balance from the annual entitlement in days, the number of months worked and the days already taken.',
  h1: 'Vacation accrual calculator',
  keywords: ['vacation accrual calculator', 'leave balance', 'holiday days', 'leave per month'],
  howToUse: [
    'Enter the annual leave entitlement in days.',
    'Enter how many months have been worked in the leave year.',
    'Enter the days already taken.',
    'Part months usually count as whole ones — check the local rule.',
  ],
  howItWorks:
    'Accrued per month = annual days ÷ 12. Accrued = that figure × months worked. The balance is accrued minus days taken.',
  example: 'A 28-day entitlement after 7 months with 5 days taken leaves a balance of 11.333 days.',
  faq: [
    {
      q: 'Why is the monthly figure fractional?',
      a: 'Because twenty-eight days do not divide evenly into twelve months. Payroll systems keep the fraction and settle it on departure rather than rounding each month.',
    },
    {
      q: 'Can the balance be negative?',
      a: 'Yes, and it means leave was taken in advance. That is a normal arrangement; the negative figure is what would be deducted if the employment ended now.',
    },
    {
      q: 'Do part months count?',
      a: 'In most systems a part month over a certain threshold counts as a whole one, but the threshold varies. Enter whole months as your local rule counts them.',
    },
    {
      q: 'Does unused leave carry over?',
      a: 'That depends on the jurisdiction and the contract. Some allow carry-over with a deadline, others require payment instead, and this calculation covers neither.',
    },
  ],
};
