import type { CalculatorCopy } from '../../lib/platform/types';

export const modularScaleCopyEn: CalculatorCopy = {
  name: 'Modular scale calculator',
  slug: 'modular-scale-calculator',
  shortDescription: 'Typographic sizes from a base and a ratio, with a table of steps.',
  longDescription:
    'A modular scale produces type sizes by multiplication rather than by eye: every step is the previous one multiplied by a fixed ratio, so headings, body text and captions stay in a single relationship no matter how many sizes a design ends up needing. Step zero is the base — normally body text — with positive steps climbing towards headings and negative steps descending to captions and fine print. The ratio does most of the work: 1.2 gives a quiet scale where sizes stay close together, while 1.618 opens gaps wide enough that a heading two steps up is more than twice the body size.',
  seoTitle: 'Modular scale calculator — typographic sizes',
  seoDescription:
    'Build a modular type scale from a base size and a ratio, with a table of steps above and below the base for headings and captions.',
  h1: 'Modular scale calculator',
  keywords: ['modular scale calculator', 'typographic scale', 'font sizes', 'type ratio'],
  howToUse: [
    'Enter the base size — usually the body text size.',
    'Choose a ratio: 1.2 for a tight scale, 1.618 for a dramatic one.',
    'Enter how many steps you need above the base for headings.',
    'Enter how many steps you need below it for captions and fine print.',
  ],
  howItWorks:
    'Each size is base × ratio raised to the step number. Step zero is the base itself, positive steps grow, negative steps shrink.',
  example: 'A base of 16 with a ratio of 1.25 reaches 48.828 five steps up and 10.24 two steps down.',
  faq: [
    {
      q: 'Which ratio should I pick?',
      a: 'Ratios between 1.125 and 1.25 keep sizes close and suit dense interfaces. Larger ones — 1.414, 1.5, 1.618 — give strong contrast and work better for editorial layouts with few levels.',
    },
    {
      q: 'Should I round the sizes?',
      a: 'For CSS there is no need: browsers handle fractional pixels and rem values fine. Round only when a design system requires whole numbers, and round the whole scale the same way.',
    },
    {
      q: 'Does the base have to be the body size?',
      a: 'It does not have to be, but it usually should be. Anchoring the scale to the size people read most keeps the rest of the sizes in a defined relationship to it.',
    },
    {
      q: 'Why does the scale grow so fast at the top?',
      a: 'Because it is geometric. Each step multiplies rather than adds, so distances widen as the steps climb — that is the property that keeps the small end finely spaced without cramping the large end.',
    },
  ],
};
