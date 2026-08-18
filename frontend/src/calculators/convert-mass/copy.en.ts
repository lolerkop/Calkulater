import type { CalculatorCopy } from '../../lib/platform/types';

export const massCopyEn: CalculatorCopy = {
  name: 'Mass converter',
  slug: 'mass-converter',
  shortDescription: 'Convert mass between metric and imperial units.',
  longDescription:
    'Converts mass between milligrams, grams, kilograms, tonnes, ounces, pounds and stones. Imperial units are defined exactly, so converting pounds to grams is exact rather than approximate.',
  seoTitle: 'Mass converter — kilograms, pounds, ounces',
  seoDescription: 'Convert mass between milligrams, grams, kilograms, tonnes, ounces, pounds and stones.',
  h1: 'Mass converter',
  keywords: ['mass converter', 'kg to lb', 'ounces to grams'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit has an exact factor to the kilogram, and conversion goes through that base.',
  example: 'A pound is exactly 453.59237 grams and a stone is fourteen pounds.',
  faq: [
    { q: 'Is the pound conversion exact?', a: 'Yes. The pound is defined as exactly 0.45359237 kg, so the result is exact by definition rather than rounded.' },
    { q: 'How is an ounce different from a troy ounce?', a: 'This converter uses the avoirdupois ounce used in trade. The troy ounce for precious metals is heavier and is not included.' },
    { q: 'What is a stone?', a: 'A British unit of 14 pounds, about 6.35 kg. It is still used for body weight in the UK and Ireland.' },
    { q: 'Are mass and weight the same?', a: 'In everyday use yes, but strictly weight depends on gravity. This converter works with mass.' },
  ],
};
