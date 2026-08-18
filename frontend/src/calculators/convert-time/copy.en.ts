import type { CalculatorCopy } from '../../lib/platform/types';

export const timeCopyEn: CalculatorCopy = {
  name: 'Time converter',
  slug: 'time-converter',
  shortDescription: 'Convert time between milliseconds, seconds, minutes, hours, days and weeks.',
  longDescription:
    'Converts a duration between milliseconds, seconds, minutes, hours, days and weeks. Months and years are deliberately left out: their length is not fixed, so a single multiplier would give a plausible but wrong answer.',
  seoTitle: 'Time converter — seconds, minutes, hours, days, weeks',
  seoDescription: 'Convert a duration between milliseconds, seconds, minutes, hours, days and weeks.',
  h1: 'Time converter',
  keywords: ['time converter', 'hours to minutes', 'seconds to hours'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit converts through the second using exact factors.',
  example: '90 minutes is 1.5 hours, and one week is exactly 604,800 seconds.',
  faq: [
    { q: 'Why are months and years missing?', a: 'A month is 28 to 31 days and a year may be a leap year. A fixed multiplier would silently pick one assumption for you.' },
    { q: 'How do I get the time between two dates?', a: 'Use the date difference calculator — it works with the calendar rather than with a multiplier.' },
    { q: 'Is a day always 86,400 seconds here?', a: 'Yes. Leap seconds and daylight saving shifts are calendar effects, not unit definitions.' },
    { q: 'Can I convert running pace with this?', a: 'No — pace mixes time and distance. The pace calculator handles that.' },
  ],
};
