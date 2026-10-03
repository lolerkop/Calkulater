import type { CalculatorCopy } from '../../lib/platform/types';
import { halfLifeContractContent } from './contractContent';

export const halfLifeCopyEn: CalculatorCopy = {
  name: "Half-life calculator",
  slug: "half-life",
  shortDescription: "Remaining amount from a half-life, or the time to reach a given remainder.",
  seoTitle: "Half-life calculator — remaining amount and time",
  seoDescription: "Work out how much substance remains after a given time, or how long to wait for the remainder you need.",
  h1: "Half-life calculator",
  keywords: ["half-life", "radioactive decay", "remaining amount", "mean lifetime"],
  ...halfLifeContractContent.en,
};
