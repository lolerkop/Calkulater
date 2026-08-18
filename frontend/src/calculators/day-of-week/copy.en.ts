import type { CalculatorCopy } from '../../lib/platform/types';

export const dayOfWeekCopyEn: CalculatorCopy = {
  name: 'Day of the week calculator',
  slug: 'day-of-week',
  shortDescription: 'Which day of the week a date falls on.',
  longDescription:
    'Tells you the weekday for any date, together with its position in the year, the ISO week number and whether it falls on a weekend. Dates are read without a timezone shift, so the answer does not change with where you are.',
  seoTitle: 'Day of the week calculator — weekday for any date',
  seoDescription: 'Find the day of the week for any date, with the day of the year, the ISO week number and whether it is a weekend.',
  h1: 'Day of the week calculator',
  keywords: ['day of the week', 'what day was it', 'weekday calculator'],
  howToUse: ['Enter the values.', 'Check the domain if a field is rejected.', 'Read the result.'],
  howItWorks: 'The weekday comes from the calendar date itself; the ISO week is the one containing the first Thursday of the year.',
  example: '29 February 2024 was a Thursday and the 60th day of the year.',
  faq: [
    { q: 'Does the timezone matter?', a: 'No. The date is read as a plain calendar date, so the answer is the same everywhere.' },
    { q: 'Why does 1 January sometimes belong to the previous year?', a: 'Under ISO 8601 week one is the week containing the first Thursday. A year starting on a Friday, Saturday or Sunday begins in the last week of the year before.' },
    { q: 'Does it work for past centuries?', a: 'It follows the Gregorian calendar. For dates before its introduction in 1582 the Julian calendar applied and the weekday differs.' },
    { q: 'Are leap days handled?', a: 'Yes. 29 February exists only in leap years, and the day-of-year count shifts accordingly.' },
  ],
};
