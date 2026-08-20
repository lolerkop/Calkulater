import type { CalculatorCopy } from '../../lib/platform/types';

export const earlyRepaymentCopyEn: CalculatorCopy = {
  name: 'Early loan repayment calculator',
  slug: 'early-loan-repayment-calculator',
  shortDescription: 'Interest saved and term shortened by a regular extra payment.',
  longDescription:
    'An extra payment works on the balance, and the balance sets next month\'s interest — which is why the effect compounds and why there is no closed formula for it. The calculation walks the loan month by month: interest on the current balance comes off the payment, the rest reduces the principal, and the shorter balance produces less interest next time. On a long expensive loan the result is startling: ten thousand a month on a twenty-year mortgage at eighteen per cent cuts the term from 240 payments to 108 and saves more than the original principal. The saving is measured against what the schedule would have cost, because that is the question people are actually asking.',
  seoTitle: 'Early loan repayment calculator — interest saved',
  seoDescription:
    'Calculate the interest saved and the term shortened by paying a regular extra amount on top of the scheduled monthly loan payment.',
  h1: 'Early loan repayment calculator',
  keywords: ['early repayment calculator', 'interest saved', 'extra loan payment', 'shorten loan term'],
  howToUse: [
    'Enter the loan amount and the annual rate.',
    'Enter the original term in years.',
    'Enter how much extra you plan to pay each month.',
    'Confirm your bank applies extra payments to the principal, not to future instalments.',
  ],
  howItWorks:
    'The scheduled annuity payment is computed first, then the loan is amortised month by month with the extra amount added. The saving is the scheduled total minus what was actually paid.',
  example: 'On 3,000,000 at 18% over 20 years, an extra 10,000 a month ends the loan after 108 payments instead of 240.',
  faq: [
    {
      q: 'Does the extra payment shorten the term or reduce the instalment?',
      a: 'Here it shortens the term, which saves far more interest. Many banks offer both; reducing the instalment keeps you in debt for the full term and saves much less.',
    },
    {
      q: 'Why is there no simple formula for this?',
      a: 'Because each extra payment changes the balance, which changes next month\'s interest, which changes how much of the following payment reduces the principal. The chain has to be walked month by month.',
    },
    {
      q: 'Is early repayment always worth it?',
      a: 'Compare the loan rate against what the same money would earn elsewhere. Paying off an eighteen per cent loan is a guaranteed eighteen per cent return; against a five per cent mortgage the answer is far less obvious.',
    },
    {
      q: 'What if the payment does not cover the interest?',
      a: 'Then the debt grows rather than falls and the loan never ends. The calculation refuses such input instead of counting thousands of months.',
    },
  ],
};
