import type { CalculatorCopy } from '../../lib/platform/types';

export const annuityCopyEn: CalculatorCopy = {
  name: 'Annuity payment calculator',
  slug: 'annuity-calculator',
  shortDescription: 'The level payment and a month-by-month schedule of interest against principal.',
  longDescription:
    'Works out the level annuity payment and breaks it down month by month: early on almost all of it is interest, later almost all of it is principal, and the schedule shows exactly where the crossover falls. The loan calculator answers "what will this cost" and compares payment schemes; this page is the annuity formula itself together with its schedule, so the table is the main answer. The final payment absorbs the accumulated rounding drift, which is why the balance closes at exactly zero.',
  seoTitle: 'Annuity payment calculator — payment and amortisation schedule',
  seoDescription: 'Calculate the annuity payment and get a month-by-month schedule of interest, principal and remaining balance.',
  h1: 'Annuity payment calculator',
  keywords: ['annuity calculator', 'annuity payment', 'amortisation schedule', 'annuity formula'],
  howToUse: ['Enter the debt amount and the annual rate.', 'Give the term in months.', 'Read the payment, then the schedule below it.'],
  howItWorks:
    'A = S · i / (1 − (1 + i)^−n), where i is the monthly rate — the annual rate divided by 12 and by 100. Interest each month accrues on the outstanding balance, and whatever is left of the payment reduces the principal. At a zero rate the denominator collapses, so the debt is simply divided by the term.',
  example: 'A million at 12 % for a year gives a payment of 88,848.79: in the first month 10,000 goes to interest and 78,848.79 to principal.',
  faq: [
    { q: 'How does this differ from the loan calculator?', a: 'The loan calculator prices the whole product: it compares annuity against differentiated payments and allows for extra payments and a one-off fee. This page computes the annuity formula itself and shows the schedule — where each payment actually goes.' },
    { q: 'Why does the last payment differ by a few kopecks?', a: 'Interest and principal are rounded every month, so a run of identical payments never matches the debt exactly. The final payment takes whatever is left, which closes the schedule at exactly zero.' },
    { q: 'Why is almost everything interest at the start?', a: 'Interest accrues on the outstanding balance, and at the start that balance is at its largest. As it falls, the same payment clears an ever larger share of the principal.' },
    { q: 'What happens at a zero rate?', a: 'The formula does not apply — its denominator becomes zero. In that case the debt is divided evenly across the term and there is no overpayment.' },
  ],
};
