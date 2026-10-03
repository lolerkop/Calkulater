import type { CalculatorCopy } from '../../lib/platform/types';
import { inverseSquareContractContent } from './contractContent';

export const inverseSquareCopyEn: CalculatorCopy = {
  name: "Inverse square law calculator",
  slug: "inverse-square-law",
  shortDescription: "How intensity falls with distance from a point source.",
  seoTitle: "Inverse square law calculator — intensity and distance",
  seoDescription: "Calculate how linear intensity or illuminance changes with distance from a point source using the inverse-square model.",
  h1: "Inverse square law calculator",
  keywords: ["inverse square law", "intensity and distance", "illuminance", "level falloff"],
  ...inverseSquareContractContent.en,
};
