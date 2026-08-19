import type { CalculatorCopy } from '../../lib/platform/types';

export const stripFoundationCopyEn: CalculatorCopy = {
  name: 'Strip foundation calculator',
  slug: 'strip-foundation-calculator',
  shortDescription: 'Concrete volume for a strip from its length, width and depth.',
  longDescription:
    'Works out the concrete volume for a strip foundation. What you enter is the length of the strip itself, not the outline of the building: the strip also runs under the internal load-bearing walls, and their length adds to the outer perimeter. Substituting the building perimeter is the usual mistake, and it under-orders by exactly the internal walls. Net volume and volume with an allowance are reported separately: you check against the first and order the second.',
  seoTitle: 'Strip foundation calculator — concrete volume',
  seoDescription: 'Calculate the concrete volume for a strip foundation from the strip length, width and depth with an allowance.',
  h1: 'Strip foundation calculator',
  keywords: ['strip foundation calculator', 'concrete for a foundation', 'foundation volume'],
  howToUse: ['Add up the outer outline and every internal strip.', 'Enter the strip width and depth.', 'Set the allowance and read the volume to order.'],
  howItWorks:
    'The volume is the strip length multiplied by the width and depth of its section. That figure is multiplied by one plus the allowance as a fraction, while the net volume stays on its own line.',
  example: 'A 40 m strip with a 0.4 × 0.8 m section is 12.8 m³ of concrete; with a 5 % allowance you order 13.44 m³.',
  faq: [
    { q: 'Do I enter the strip length or the building perimeter?', a: 'The strip length. It also runs under the internal load-bearing walls, and that has to be added to the outer outline — otherwise the order falls short by exactly those walls.' },
    { q: 'How is this different from the concrete calculator?', a: 'The concrete calculator covers three pour shapes in general. This one covers only the strip, but from the quantity it is actually measured by, and with labels that stop the strip length being confused with the size of the house.' },
    { q: 'How do I allow for the sand bed?', a: 'You do not — it is not concrete. Work its volume out separately from the same strip length and the bedding thickness.' },
    { q: 'Should reinforcement be subtracted?', a: 'No. The steel volume is small next to the concrete and in practice is not subtracted.' },
  ],
};
