import type { CalculatorCopy } from '../../lib/platform/types';

export const goldenRatioCopyEn: CalculatorCopy = {
  name: 'Golden ratio calculator',
  slug: 'golden-ratio-calculator',
  shortDescription: 'Split a segment in the ratio φ, or find the partner to a given size.',
  longDescription:
    'Splits a segment in the golden ratio and finds the partner to a size you already have. φ = (1 + √5)/2 is computed from the square root at full precision and rounded only on output: writing 1.618 as the source of truth would lose the precision exactly where it is wanted. Useful in layout and typography, where φ is used to pick a column width against a page or a heading size against body text.',
  seoTitle: 'Golden ratio calculator — split a segment by φ',
  seoDescription: 'Split a segment in the golden ratio or find the second size by φ = (1 + √5)/2.',
  h1: 'Golden ratio calculator',
  keywords: ['golden ratio calculator', 'phi calculator', 'divine proportion', 'golden section'],
  howToUse: ['Choose whether to split a segment or find a partner.', 'Enter the length you know.', 'Read both parts, or both sizes.'],
  howItWorks:
    'φ = (1 + √5)/2 ≈ 1.618034. A segment is split so that the whole is to the larger part as the larger is to the smaller: the larger part is the length divided by φ. In partner mode the known size is multiplied and divided by φ, giving both of its neighbours in the series.',
  example: 'A segment of 100 splits into 61.8034 and 38.1966 — their ratio equals the ratio of the whole to the larger part.',
  faq: [
    { q: 'Why is φ not simply set to 1.618?', a: 'Because φ is irrational. It is computed from the square root at full precision and rounded only on output — otherwise the ratio of the parts would stop being exact by the second division.' },
    { q: 'How can I check the split is right?', a: 'Divide the whole by the larger part, and the larger by the smaller: both give the same number φ. That is the definition.' },
    { q: 'Where is the golden ratio actually used?', a: 'In layout and typography — picking a column width against a page, a heading size against body text, the proportions of a card. It is a compositional device, not a law of nature.' },
    { q: 'Is it related to the Fibonacci numbers?', a: 'Yes: the ratio of consecutive Fibonacci numbers tends to φ. That is why 34 and 55 are almost a golden pair, as the partner mode shows.' },
  ],
};
