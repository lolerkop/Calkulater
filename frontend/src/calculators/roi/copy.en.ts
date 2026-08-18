import type { CalculatorCopy } from '../../lib/platform/types';

export const roiCopyEn: CalculatorCopy = {
  name: 'ROI calculator',
  slug: 'roi-calculator',
  shortDescription: 'Return on investment, with additional costs counted properly.',
  longDescription:
    'Return on investment compares profit with everything the investment cost. Additional costs enter both the numerator and the denominator, because they are as much a part of the investment as the principal — counting them only against profit flatters the result.',
  seoTitle: 'ROI calculator — return on investment in per cent',
  seoDescription: 'Calculate return on investment from the amount received and the amount invested, including additional costs.',
  h1: 'ROI calculator',
  keywords: ['ROI calculator', 'return on investment', 'investment return'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'ROI = (received − invested − additional) ÷ (invested + additional) × 100.',
  example: 'Receiving 130,000 on an investment of 100,000 is a return of 30%.',
  faq: [
    { q: 'Why do additional costs appear twice?', a: 'They reduce profit and they increase what was invested. Counting them only against profit overstates the return.' },
    { q: 'How is this different from advertising ROI?', a: 'The formula is the same; the difference is what counts as the investment. The advertising version uses campaign spend and campaign revenue.' },
    { q: 'Does ROI account for time?', a: 'No. Thirty per cent over one year and over five years look identical here — use compound growth for annualised figures.' },
    { q: 'What does a negative ROI mean?', a: 'Less came back than went in. The calculator shows it rather than clamping to zero.' },
  ],
};
