import type { CalculatorCopy } from '../../lib/platform/types';

export const aprApyCopyEn: CalculatorCopy = {
  name: 'APR and APY calculator',
  slug: 'apr-apy-calculator',
  shortDescription: 'Conversion between the nominal and the effective annual rate.',
  longDescription:
    'The gap between the two rates is compounding inside the year, and nothing else. A nominal rate states what is charged per period multiplied by the number of periods; an effective rate states what a year actually costs, because what was charged in the first period goes on to earn interest itself. Eighteen per cent nominal with monthly compounding is 19.56 per cent effective, and a lender is free to quote whichever number suits the advertisement. Converting between them is the only way to compare offers whose compounding schedules differ.',
  seoTitle: 'APR and APY calculator — nominal and effective rate',
  seoDescription:
    'Convert a nominal annual rate into an effective one and back using the number of compounding periods, with the per-period rate and yearly multiple.',
  h1: 'APR and APY calculator',
  keywords: ['apr apy calculator', 'effective annual rate', 'nominal rate', 'compounding'],
  howToUse: [
    'Choose the direction of the conversion.',
    'Enter the rate you already know.',
    'Enter how many times a year interest is compounded.',
    'Compare offers on the effective rate, not the advertised one.',
  ],
  howItWorks:
    'APY = (1 + APR ÷ 100 ÷ m) raised to m, minus one. The reverse takes the m-th root of the yearly multiple and multiplies the result by m.',
  example: 'A nominal 18% compounded monthly is an effective 19.56% a year.',
  faq: [
    {
      q: 'Which rate is larger?',
      a: 'The effective one, whenever interest compounds more than once a year. With annual compounding the two coincide exactly, which is the simplest check that a conversion is correct.',
    },
    {
      q: 'Does more frequent compounding keep raising the effective rate?',
      a: 'It raises it, but with diminishing returns. Eighteen per cent gives 19.56% monthly and 19.72% daily; the limit of continuous compounding is 19.72% as well, so there is a ceiling.',
    },
    {
      q: 'Which rate do banks advertise?',
      a: 'Whichever looks better. Deposits are usually advertised on the effective rate and loans on the nominal one, so comparing two products on the numbers as printed is often comparing different things.',
    },
    {
      q: 'Does this include fees?',
      a: 'No. This is compounding only. Origination fees, insurance and account charges change the true cost of a loan and are outside the conversion.',
    },
  ],
};
