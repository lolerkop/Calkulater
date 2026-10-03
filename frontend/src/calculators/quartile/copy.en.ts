import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const quartileCopyEn: CalculatorCopy = {
  name: "Quartile and percentile calculator",
  slug: "quartile",
  shortDescription: "Quartiles, interquartile range, whisker bounds and outliers from a list of numbers.",
  seoTitle: "Quartile calculator — interquartile range and outliers",
  seoDescription: "Compute Q1, the median, Q3, the interquartile range, whisker bounds and the number of outliers from a list of numbers.",
  h1: "Quartile and percentile calculator",
  keywords: ["quartiles", "interquartile range", "outliers", "box plot"],
  ...mathWave8ContractContent.en,
};
