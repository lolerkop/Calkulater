import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const sleepTimeCopyEn: CalculatorCopy = {
  name: 'Sleep time calculator',
  slug: 'sleep-time-calculator',
  shortDescription: "Wake-up time or bedtime using assumed 90-minute blocks.",
  seoTitle: 'Sleep time calculator — 90-minute cycles',
  seoDescription: "Compare wake-up times and bedtimes using fixed 90-minute blocks and time to fall asleep; the formula does not identify actual sleep stages.",
  h1: 'Sleep time calculator',
  keywords: ["sleep time calculator", "bedtime planning", "wake-up time", "90 minute blocks"],

    ...dateTimeWave15ContractContent.en['sleep-time'],
  };
