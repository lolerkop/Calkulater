import type { CalculatorCopy } from '../../lib/platform/types';

export const emergencyFundCopyEn: CalculatorCopy = {
  name: 'Emergency fund calculator',
  slug: 'emergency-fund-calculator',
  shortDescription: 'Fund target in months of expenses, and progress towards it.',
  longDescription:
    'An emergency fund is measured in months, not in money. Half a million is six months of calm at expenses of 85,000 and under two months at expenses of 300,000, so the target is set in months and the amount derives from it rather than the other way round. Progress and coverage are capped at the target on purpose: saving beyond it does not give you a hundred and twenty per cent of a cushion, it gives you a cushion plus spare money, and that spare money belongs in a different calculation — one about returns rather than about safety.',
  seoTitle: 'Emergency fund calculator — months of cover',
  seoDescription:
    'Calculate an emergency fund target from monthly expenses and the months of cover you want, with progress and the amount still needed.',
  h1: 'Emergency fund calculator',
  keywords: ['emergency fund calculator', 'rainy day fund', 'months of expenses', 'savings target'],
  howToUse: [
    'Enter your real monthly expenses, not your income.',
    'Choose how many months of cover you want.',
    'Enter what you have already set aside for this purpose.',
    'Count only money you could actually reach within a day or two.',
  ],
  howItWorks:
    'Target = monthly expenses × months of cover. Progress is the saved amount against that target, capped at one hundred per cent.',
  example: 'Expenses of 85,000 with a six-month goal need 510,000; 210,000 saved covers 2.471 months.',
  faq: [
    {
      q: 'How many months should the fund cover?',
      a: 'Three to six is the usual advice for stable salaried work, and six to twelve for irregular income, a single earner or a specialised job that takes longer to replace.',
    },
    {
      q: 'Should I use expenses or income?',
      a: 'Expenses, and the real ones. Income overstates the target for anyone who saves part of it, and the fund exists to cover what you must spend, not what you happen to earn.',
    },
    {
      q: 'Where should the fund be kept?',
      a: 'Somewhere reachable within a day or two and not exposed to price swings. A fund you cannot access on the day you lose your job is not performing its only function.',
    },
    {
      q: 'Why is progress capped at a hundred per cent?',
      a: 'Because a fund is either complete or not. Anything beyond the target is ordinary savings, and mixing the two hides when the safety goal was actually met.',
    },
  ],
};
