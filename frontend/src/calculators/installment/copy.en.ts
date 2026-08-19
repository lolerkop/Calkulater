import type { CalculatorCopy } from '../../lib/platform/types';

export const installmentCopyEn: CalculatorCopy = {
  name: 'Instalment plan calculator',
  slug: 'installment-calculator',
  shortDescription: 'The monthly payment on an instalment plan with a markup, plus the schedule.',
  longDescription:
    'Works out the payment on an instalment plan: the price less the down payment is multiplied by the markup and divided evenly across the term. No interest accrues on the outstanding balance — that is what separates an instalment plan from a loan — so the schedule is linear and the markup is charged once on the whole amount. An interest-free plan is not a special case but a markup of zero: the payment is a plain division and the overpayment is nil.',
  seoTitle: 'Instalment plan calculator — payment and schedule',
  seoDescription: 'Calculate the monthly payment on an instalment plan with a down payment and a markup, with a month-by-month schedule.',
  h1: 'Instalment plan calculator',
  keywords: ['instalment calculator', 'instalment plan payment', 'interest-free instalment'],
  howToUse: ['Enter the purchase price and the down payment.', 'Give the term and the retailer markup.', 'Read the payment and the schedule.'],
  howItWorks:
    'The financed amount is the price less the down payment. It is multiplied by the markup and divided evenly across the months. The final payment takes the kopecks left over by rounding, so the payments add up to exactly the total.',
  example: 'A 60,000 purchase with 10,000 down over six months at a 12 % markup gives a payment of 9,333.33 and an overpayment of 6,000.',
  faq: [
    { q: 'How is an instalment plan different from a loan?', a: 'The markup is charged once on the whole amount and no interest accrues on the balance. That makes the schedule linear, and paying early shortens the term without reducing the markup.' },
    { q: 'How do I model an interest-free plan?', a: 'Leave the markup at zero. The amount is divided evenly across the term and the overpayment is nil — no separate mode is needed for it.' },
    { q: 'Why is the final payment a few kopecks different?', a: 'Because the total rarely divides evenly across the term. The remainder goes into the last payment, otherwise the payments would not add up to the price.' },
    { q: 'Are insurance or fees included?', a: 'No. If the retailer adds them to the purchase, fold them into the price — the calculation is linear, so the result stays correct.' },
  ],
};
