import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const timeDurationCopyEn: CalculatorCopy = {
  name: 'Time duration calculator',
  slug: 'time-duration-calculator',
  shortDescription: 'Duration between two times, or a time shifted by a duration.',
  seoTitle: 'Time duration calculator — hours and minutes between times',
  seoDescription: 'Calculate the duration between two times, or add and subtract hours and minutes from a time.',
  h1: 'Time duration calculator',
  keywords: ['time duration', 'hours between times', 'add time'],

    ...dateTimeWave15ContractContent.en['time-duration'],
  };
