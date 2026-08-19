import type { CalculatorCopy } from '../../lib/platform/types';

export const ruleOf72CopyEn: CalculatorCopy = {
  name: 'Rule of 72 calculator',
  slug: 'rule-of-72-calculator',
  shortDescription: 'How long money takes to double, and how far the shortcut is off.',
  longDescription:
    'Seventy-two divided by the rate gives the doubling time in years — an approximation you can do in your head. The exact figure from logarithms sits beside it along with the gap between them, not to replace the rule but to show where it starts to mislead. At eight percent the gap is under a week; at half a percent the rule is five years out.',
  seoTitle: 'Rule of 72 calculator — doubling time and its error',
  seoDescription: 'Estimate how many years an investment takes to double with the rule of 72, next to the exact figure and the difference.',
  h1: 'Rule of 72 calculator',
  keywords: ['rule of 72', 'doubling time calculator', 'investment doubling'],
  howToUse: ['Enter the annual rate.', 'Read the rule-of-72 estimate.', 'Compare it with the exact figure beside it.'],
  howItWorks: 'The estimate is 72 ÷ rate; the exact time is ln 2 ÷ ln(1 + rate ÷ 100), assuming annual compounding.',
  example: 'At 8 percent the rule gives 72 ÷ 8 = 9 years, and the exact answer is 9.01.',
  faq: [
    { q: 'Why 72 and not 70?', a: 'Seventy-two divides evenly by many common rates — 2, 3, 4, 6, 8, 9, 12 — which is what makes the shortcut usable in your head.' },
    { q: 'When does the rule stop working?', a: 'Below about 4 percent and above about 12 percent the gap grows quickly. That is why the difference is shown as its own line.' },
    { q: 'Is this the same as a compound interest calculator?', a: 'No. A compound interest calculator grows a balance over a period you choose; this one answers a single question — when does it double.' },
    { q: 'What compounding does it assume?', a: 'Annual. More frequent compounding shortens the exact time slightly, and the rule does not account for it.' },
  ],
};
