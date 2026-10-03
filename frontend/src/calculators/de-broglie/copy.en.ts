import type { CalculatorCopy } from '../../lib/platform/types';
import { deBroglieContractContent } from './contractContent';

export const deBroglieCopyEn: CalculatorCopy = {
  name: "De Broglie wavelength calculator",
  slug: "de-broglie-wavelength",
  shortDescription: "The wavelength of a particle from its mass and speed.",
  seoTitle: "De Broglie wavelength calculator — from mass and speed",
  seoDescription: "Calculate the de Broglie wavelength of an electron, proton or any particle from its mass and speed, with momentum, kinetic energy and a light-speed fraction.",
  h1: "De Broglie wavelength calculator",
  keywords: ["de broglie wavelength", "electron wavelength", "planck constant", "particle momentum"],
  ...deBroglieContractContent.en,
};
