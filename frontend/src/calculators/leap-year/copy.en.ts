import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const leapYearCopyEn: CalculatorCopy = {
  name: 'Leap year calculator',
  slug: 'leap-year',
  shortDescription: 'Check whether a year is a leap year and find the nearest ones.',
  seoTitle: 'Leap year calculator — is this year a leap year',
  seoDescription: 'Check whether a year is a leap year, see the length of February and the nearest leap years.',
  h1: 'Leap year calculator',
  keywords: ['leap year', 'is it a leap year', 'February 29'],

    ...dateTimeWave15ContractContent.en['leap-year'],
  };
