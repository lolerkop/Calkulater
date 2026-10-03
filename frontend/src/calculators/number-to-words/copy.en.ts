import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const numberToWordsCopyEn: CalculatorCopy = {
  name: "Number to words converter",
  slug: "number-to-words",
  shortDescription: "Write a whole number in words; the separate amount line is fixed to RUB and00 kopecks.",
  seoTitle: "Number to words converter — write numbers out online",
  seoDescription: "Write a signed whole number from−999,999,999,999 to999,999,999,999 in words. The separate amount line uses RUB and00 kopecks.",
  h1: "Number to words converter",
  keywords: ["number to words", "amount in words", "spell out numbers", "write numbers in words"],
  ...contractContent.en
};
