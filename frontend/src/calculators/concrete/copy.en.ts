import type { CalculatorCopy } from '../../lib/platform/types';

export const concreteCopyEn: CalculatorCopy = {
  name: 'Concrete calculator',
  slug: 'concrete-calculator',
  shortDescription: 'Concrete volume for a slab, a strip or columns, with an allowance.',
  longDescription:
    'Works out the concrete volume for the three usual pour shapes — a slab, a strip and columns — and adds an allowance for losses. Net volume and volume with the allowance are reported separately: you order the second and check against the first. The allowance is taken from the unrounded volume, otherwise rounding would accumulate twice and push the order upward. The shapes are calculated separately because all they share is a single multiplication, while their inputs differ.',
  seoTitle: 'Concrete calculator — volume for a slab, strip or columns',
  seoDescription: 'Calculate the concrete volume for a slab, a strip foundation or columns, with an allowance for losses.',
  h1: 'Concrete calculator',
  keywords: ['concrete calculator', 'concrete volume', 'how much concrete', 'concrete for a foundation'],
  howToUse: ['Choose the pour shape.', 'Enter its dimensions.', 'Set the allowance for losses and read the volume to order.'],
  howItWorks:
    'A slab is length by width by thickness. A strip is its length by width and depth. Columns are the section area by height and count. The resulting volume is multiplied by one plus the allowance as a fraction.',
  example: 'A 6 × 4 m slab 0.2 m thick is 4.8 m³ net; with a 5 % allowance you order 5.04 m³.',
  faq: [
    { q: 'What allowance should I use?', a: 'Usually 5–10 % for losses in delivery, spillage and an uneven base. The exact figure depends on how the site is prepared, which is why it is entered rather than assumed.' },
    { q: 'Why is the net volume shown separately?', a: 'Because they are different numbers: the net volume checks the geometry, the other is what you order. Confusing them is a reliable way to run short on the last cubic metre.' },
    { q: 'How is this different from the strip foundation calculator?', a: 'This one covers three pour shapes and the general volume. The strip foundation calculator works the same strip out from the building perimeter, with the checks specific to it.' },
    { q: 'Is reinforcement accounted for?', a: 'No. The steel inside a pour is small next to the concrete, and in practice it is not subtracted.' },
  ],
};
