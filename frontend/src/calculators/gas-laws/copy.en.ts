import type { CalculatorCopy } from '../../lib/platform/types';
import { gasLawsContractContent } from './contractContent';

export const gasLawsCopyEn: CalculatorCopy = {
  name: "Combined gas law calculator",
  slug: "combined-gas-law",
  shortDescription: "A gas moving between two states: p₁V₁/T₁ = p₂V₂/T₂.",
  seoTitle: "Combined gas law calculator — p₁V₁/T₁ = p₂V₂/T₂",
  seoDescription: "Calculate the pressure, volume or temperature of a gas moving between two states with the combined gas law.",
  h1: "Combined gas law calculator",
  keywords: ["combined gas law calculator", "boyle's law calculator", "charles law calculator", "p1v1 t1 p2v2 t2"],
  ...gasLawsContractContent.en,
};
