import type { CalculatorCopy } from '../../lib/platform/types';

export const leapYearCopyEn: CalculatorCopy = {
  name: 'Leap year calculator',
  slug: 'leap-year',
  shortDescription: 'Check whether a year is a leap year and find the nearest ones.',
  longDescription:
    'Applies the Gregorian rule: a year divisible by four is a leap year, except century years, which must also be divisible by four hundred. That is why 1900 was ordinary and 2000 was not.',
  seoTitle: 'Leap year calculator — is this year a leap year',
  seoDescription: 'Check whether a year is a leap year, see the length of February and the nearest leap years.',
  h1: 'Leap year calculator',
  keywords: ['leap year', 'is it a leap year', 'February 29'],
  howToUse: ['Enter the year.', 'Read the answer.', 'Check the nearest leap years if you need them.'],
  howItWorks: 'Divisible by 4 and either not divisible by 100 or divisible by 400.',
  example: '2024 is a leap year, 1900 was not, and 2000 was — because it divides by 400.',
  faq: [
    { q: 'Why is the century exception needed?', a: 'A tropical year is about 365.2422 days, slightly less than 365.25. Dropping three leap days every four centuries keeps the calendar aligned with the seasons.' },
    { q: 'Was 1900 a leap year?', a: 'No. It divides by 100 but not by 400, so February had 28 days.' },
    { q: 'How often does a leap year occur?', a: 'Every four years, apart from those century exceptions — 97 leap years in every 400.' },
    { q: 'Does the rule work for old dates?', a: 'The Gregorian calendar was introduced in 1582; for earlier dates the Julian rule applied, where every fourth year was a leap year without exception.' },
  ],
};
