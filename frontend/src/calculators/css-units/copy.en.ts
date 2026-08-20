import type { CalculatorCopy } from '../../lib/platform/types';

export const cssUnitsCopyEn: CalculatorCopy = {
  name: 'CSS units converter',
  slug: 'css-units-converter',
  shortDescription: 'Convert px, rem, em, pt and the other CSS length units.',
  longDescription:
    'Everything passes through the CSS pixel, which is a reference unit rather than a physical one: an inch here is always exactly 96 pixels regardless of the screen it lands on. The absolute units — pt, pc, in, cm, mm — are fixed multiples of that pixel and never change. The relative ones depend on context, and that is the whole difference between them: rem is the same everywhere because it follows the root font size, while em follows the parent and therefore multiplies by itself in nested elements, which is exactly how a list three levels deep ends up with unreadably small text.',
  seoTitle: 'CSS units converter — px, rem, em, pt',
  seoDescription:
    'Convert CSS units between px, rem, em, pt, pc, in, cm and mm, taking the root font size and the parent font size into account.',
  h1: 'CSS units converter',
  keywords: ['css units', 'px to rem', 'em vs rem', 'pt converter'],
  howToUse: [
    'Enter the value you want to convert.',
    'Choose the unit it is written in and the unit you want.',
    'Set the root font size — 16 px unless the page overrides it.',
    'Set the parent font size only if you are working with em.',
  ],
  howItWorks:
    'The value is converted to CSS pixels first: rem uses the root size, em the parent size, and pt, pc, in, cm and mm are fixed multiples. It is then divided by the target unit.',
  example: 'With a 16 px root, 24 px is 1.5 rem and 18 pt.',
  faq: [
    {
      q: 'What is the difference between rem and em?',
      a: 'rem is relative to the root font size and therefore stable across the page. em is relative to the parent, so it compounds in nested elements: 0.9 em three levels deep is 0.73 of the base.',
    },
    {
      q: 'Is a CSS centimetre a real centimetre?',
      a: 'Not on screen. It is defined as 96/2.54 CSS pixels, so it matches a physical centimetre only in print or on a display that happens to match the reference density.',
    },
    {
      q: 'Should I use px or rem for font sizes?',
      a: 'rem respects the reader\'s browser font-size setting, which px overrides. For accessibility that usually settles the question in favour of rem.',
    },
    {
      q: 'Why is the root font size adjustable here?',
      a: 'Because pages sometimes change it. If your CSS sets html { font-size: 62.5% }, the root is 10 px and every rem conversion shifts accordingly.',
    },
  ],
};
