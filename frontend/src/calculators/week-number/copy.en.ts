import type { CalculatorCopy } from '../../lib/platform/types';

export const weekNumberCopyEn: CalculatorCopy = {
  name: 'Week number calculator',
  slug: 'week-number-calculator',
  shortDescription: 'ISO week number and day of year for any date.',
  longDescription:
    'Shows the ISO 8601 week number, the day of the year and how many days remain. Week 1 is the week containing the first Thursday, which is why early January can still belong to the previous year.',
  seoTitle: 'Week number calculator — ISO week and day of year',
  seoDescription: 'Find the ISO 8601 week number, day of the year and days remaining for any date.',
  h1: 'Week number calculator',
  keywords: ['week number', 'iso week', 'day of year'],
  howToUse: ['Pick a date.', 'Read the ISO week and the day of the year.', 'Check which year the week belongs to near the boundary.'],
  howItWorks: 'Week = floor((day of year − ISO weekday + 10) / 7), with the year adjusted at the boundaries.',
  example: '18 August 2026 is day 230 and falls in ISO week 34.',
  faq: [
    { q: 'Why does 1 January sometimes show week 52?', a: 'ISO week 1 is the week containing the first Thursday. If the year starts on a Friday, Saturday or Sunday, those days still belong to the last week of the previous year.' },
    { q: 'Can a year have 53 weeks?', a: 'Yes, when it starts on a Thursday, or when it is a leap year starting on a Wednesday.' },
    { q: 'Does the week start on Sunday?', a: 'Not in ISO 8601 — the week runs Monday to Sunday. Systems that start on Sunday use a different numbering.' },
    { q: 'Is the day of year affected by leap years?', a: 'Yes. From 1 March onward every date shifts by one day, and the year has 366 days instead of 365.' },
  ],
};
