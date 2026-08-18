import type { CalculatorCopy } from '../../lib/platform/types';

export const dtiCopyEn: CalculatorCopy = {
  name: 'Debt-to-income calculator',
  slug: 'debt-to-income',
  shortDescription: 'What share of income goes to servicing debt.',
  longDescription:
    'The debt-to-income ratio divides monthly debt payments by monthly income. Lenders read it as a measure of how much room a borrower has left, and the thresholds shown here are the common benchmarks rather than any rule of law.',
  seoTitle: 'Debt-to-income calculator — DTI ratio and what is left',
  seoDescription: 'Calculate your debt-to-income ratio, see the assessment band and what remains after payments.',
  h1: 'Debt-to-income calculator',
  keywords: ['debt to income', 'DTI ratio', 'debt burden'],
  howToUse: ['Enter total monthly debt payments.', 'Enter monthly income.', 'Read the ratio and what is left.'],
  howItWorks: 'DTI = debt payments ÷ income × 100. Up to 30% is usually comfortable, up to 43% elevated, above that high.',
  example: 'Payments of 45,000 against income of 150,000 give a DTI of 30%.',
  faq: [
    { q: 'Which payments count?', a: 'Regular obligations: loan and mortgage instalments, card minimums, instalment plans. Rent and utilities are usually left out unless your lender includes them.' },
    { q: 'Is income before or after tax?', a: 'Take the amount that actually reaches you. Using pre-tax income understates the burden.' },
    { q: 'Are the thresholds a rule?', a: 'No. They are common benchmarks; each lender applies its own limits and its own list of what counts as debt.' },
    { q: 'Why does the ratio exceed 100%?', a: 'Payments are larger than income. The calculator shows it rather than clamping, because the situation itself is the answer.' },
  ],
};
