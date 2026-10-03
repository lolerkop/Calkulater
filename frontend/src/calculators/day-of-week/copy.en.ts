import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const dayOfWeekCopyEn: CalculatorCopy = {
  name: 'Day of the week calculator',
  slug: 'day-of-week',
  shortDescription: 'Which day of the week a date falls on.',
  seoTitle: 'Day of the week calculator — weekday for any date',
  seoDescription: "Find a Gregorian date’s weekday, ordinal day, ISO week number and week-year. The weekend flag marks Saturday and Sunday without public holidays.",
  h1: 'Day of the week calculator',
  keywords: ['day of the week', 'what day was it', 'weekday calculator'],
  ...contractContent.en,
};
