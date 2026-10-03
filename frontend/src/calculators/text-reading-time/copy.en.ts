import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const textReadingTimeCopyEn: CalculatorCopy = {
  name: "Reading time calculator",
  slug: "reading-time-calculator",
  shortDescription: "How many minutes a text takes to read silently, and how long the same text takes aloud.",
  seoTitle: "Reading time calculator for text and speeches",
  seoDescription: "Find out how long a text takes to read silently and how long it takes read aloud, from a word count or from the text itself.",
  h1: "Reading time calculator",
  keywords: ["reading time calculator", "speech time calculator", "how long to read", "words to minutes"],
  ...contractContent.en
};
