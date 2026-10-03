import type { CalculatorCopy } from '../../lib/platform/types';
import { photonEnergyContractContent } from './contractContent';

export const photonEnergyCopyEn: CalculatorCopy = {
  name: "Photon energy calculator",
  slug: "photon-energy",
  shortDescription: "Photon energy and frequency from wavelength.",
  seoTitle: "Photon energy calculator \u2014 from wavelength",
  seoDescription: "Calculate photon energy in joules and electronvolts, plus frequency and wavenumber, from the wavelength.",
  h1: "Photon energy calculator",
  keywords: ["photon energy", "planck constant", "light wavelength", "electronvolt"],
  ...photonEnergyContractContent.en,
};
