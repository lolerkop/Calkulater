import type { CalculatorCopy } from '../../lib/platform/types';

export const cpaCplCpiCopyEn: CalculatorCopy = {
  name: 'CPA, CPL and CPI calculator',
  slug: 'cpa-cpl-cpi-calculator',
  shortDescription: 'Cost per action, lead or install from the budget and the number of actions.',
  longDescription:
    'The three metrics share one division and differ only in what counts as an action: any target action for CPA, an enquiry or lead for CPL, an app install for CPI. Keeping them on one page is deliberate — three separate calculators doing the same division would be three copies of the same page, and the confusion they cause is not arithmetic but definition. What actually decides the number is where you draw the line: counting form opens instead of submitted forms can halve a CPL without a single thing changing in the campaign.',
  seoTitle: 'CPA, CPL and CPI calculator — cost per action',
  seoDescription:
    'Calculate the cost per action, per lead or per app install from an advertising budget and the number of actions received.',
  h1: 'CPA, CPL and CPI calculator',
  keywords: ['cpa calculator', 'cost per lead', 'cost per install', 'cost per action'],
  howToUse: [
    'Choose what the campaign counts as an action.',
    'Enter the advertising budget spent.',
    'Enter how many actions that budget produced.',
    'Take both figures from the same period and the same campaign.',
  ],
  howItWorks:
    'Cost per action = budget ÷ actions. The per-thousand figure is that result multiplied by a thousand, which is how media buying is often quoted.',
  example: 'A budget of 84,000 that produced 320 leads gives a CPL of 262.50.',
  faq: [
    {
      q: 'What is the difference between CPA, CPL and CPI?',
      a: 'Only the definition of the action. CPA counts whatever the campaign treats as a conversion, CPL counts leads or enquiries, CPI counts app installs. The division itself is identical.',
    },
    {
      q: 'Should the budget include agency fees?',
      a: 'Include them if you want the true cost of an action. Ad-platform spend alone understates it, and campaigns are often compared on different bases without anyone noticing.',
    },
    {
      q: 'Why does my CPL differ from the ad platform’s?',
      a: 'Platforms count conversions their own way, usually with an attribution window and their own definition of a lead. Counting confirmed enquiries in your own CRM almost always gives a higher figure.',
    },
    {
      q: 'Is a lower cost per action always better?',
      a: 'No. Cheap actions of poor quality can cost more per sale than expensive good ones. This figure needs to be read next to what an action is actually worth to you.',
    },
  ],
};
