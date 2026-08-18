import type { CalculatorCopy } from '../../lib/platform/types';

export const timeDurationCopyEn: CalculatorCopy = {
  name: 'Time duration calculator',
  slug: 'time-duration-calculator',
  shortDescription: 'Duration between two times, or a time shifted by a duration.',
  longDescription:
    'Works out how long it is between two times, or what time it becomes after adding or subtracting a duration. Times that cross midnight are handled as a normal case rather than an error.',
  seoTitle: 'Time duration calculator — hours and minutes between times',
  seoDescription: 'Calculate the duration between two times, or add and subtract hours and minutes from a time.',
  h1: 'Time duration calculator',
  keywords: ['time duration', 'hours between times', 'add time'],
  howToUse: ['Choose what to calculate.', 'Enter the times in hours and minutes.', 'Read the duration or the resulting time.'],
  howItWorks: 'Everything is converted to minutes from midnight, then wrapped into a 24-hour day.',
  example: 'From 22:15 to 06:45 is 8 hours 30 minutes.',
  faq: [
    { q: 'What if the end time is earlier than the start?', a: 'It is treated as crossing midnight, which is what an overnight shift needs. The result is flagged on its own line.' },
    { q: 'Can the duration be longer than a day?', a: 'Durations you add or subtract can exceed 24 hours; the resulting time wraps around the clock.' },
    { q: 'Are seconds supported?', a: 'No. The calculator works in whole minutes, which is what shift and schedule arithmetic needs.' },
    { q: 'What happens to out-of-range values?', a: 'Hours are clamped to 0–23 and minutes to 0–59, so a typo produces a sensible time rather than a broken result.' },
  ],
};
