import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const scaleModelCopyEn: CalculatorCopy = {
  name: "Model scale calculator",
  slug: "scale-model-converter",
  shortDescription: "Convert sizes between the original and the model at a 1:N scale.",
  seoTitle: "Model scale calculator — 1:87, 1:43, 1:72",
  seoDescription: "Convert a real size into a model size and back at any scale, and find the scale itself from a pair of measurements.",
  h1: "Model scale calculator",
  keywords: ["model scale calculator", "1:87 scale", "scale converter", "model size calculator"],
  ...contractContent.en
};
