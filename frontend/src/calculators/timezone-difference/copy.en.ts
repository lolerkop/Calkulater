import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const timezoneDifferenceCopyEn: CalculatorCopy = {
  name: "Time zone difference calculator",
  slug: "time-zone-difference-calculator",
  shortDescription: "Convert a time between two UTC offsets, midnight rollover included.",
  seoTitle: "Time zone difference calculator by UTC offset",
  seoDescription: "Convert a time between two time zones using their UTC offsets, including fractional offsets and rollover past midnight.",
  h1: "Time zone difference calculator",
  keywords: ["time zone difference calculator", "utc offset converter", "convert time between zones", "what time is it there"],

    ...dateTimeWave15ContractContent.en['timezone-difference'],
  };
