import type { CalculatorCopy } from '../../lib/platform/types';
import { coulombContractContent } from './contractContent';

export const coulombCopyEn: CalculatorCopy = {
  name: "Coulomb's law calculator",
  slug: "coulombs-law",
  shortDescription: "The force between two point charges.",
  seoTitle: "Coulomb's law calculator \u2014 force between charges",
  seoDescription: "Calculate the force between two point charges by Coulomb's law, with field strength and potential energy.",
  h1: "Coulomb's law calculator",
  keywords: ["coulombs law", "force between charges", "electrostatics", "electric field strength"],
  ...coulombContractContent.en,
};
