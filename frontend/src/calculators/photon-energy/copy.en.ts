import type { CalculatorCopy } from '../../lib/platform/types';

export const photonEnergyCopyEn: CalculatorCopy = {
  name: "Photon energy calculator",
  slug: "photon-energy",
  shortDescription: "Photon energy and frequency from wavelength.",
  longDescription:
    "Photon energy is inversely proportional to wavelength: blue light carries twice the energy of red, and ultraviolet is already able to break chemical bonds \u2014 hence both sunburn and fading. The quantity is tiny, around 10\u207b\u00b9\u2079 joules, so the headline answer is shown in exponent form with the same result in electronvolts beside it, where it comes out as a number of order one.",
  seoTitle: "Photon energy calculator \u2014 from wavelength",
  seoDescription: "Calculate photon energy in joules and electronvolts, plus frequency and wavenumber, from the wavelength.",
  h1: "Photon energy calculator",
  keywords: ["photon energy", "planck constant", "light wavelength", "electronvolt"],
  howToUse: [
    "Wavelength in nanometres: visible light runs roughly 380\u2013780 nm.",
    "For X-rays and gamma radiation use fractions of a nanometre \u2014 the calculation holds there too.",
    "Electronvolts are handier than joules: visible light is 1.6\u20133.3 eV.",
    "Wavenumber in reciprocal centimetres is the spectroscopist\u2019s unit.",
  ],
  howItWorks: "E = hc/\u03bb, with h = 6.62607015\u00b710\u207b\u00b3\u2074 J\u00b7s and c = 299 792 458 m/s.",
  example: "Green light at 550 nm carries 3.612\u00b710\u207b\u00b9\u2079 J, that is 2.254 eV.",
  faq: [
    { q: "Why is ultraviolet more harmful than visible light?", a: "Because photon energy is inversely proportional to wavelength. At 300 nm it is about 4.1 eV \u2014 enough to break many chemical bonds; red light is 1.8 eV and such a photon breaks no bond however many arrive." },
    { q: "Does photon energy depend on brightness?", a: "No. Brightness is the number of photons per second, while each photon\u2019s energy follows only from the wavelength. That is exactly the explanation of the photoelectric effect: weak ultraviolet ejects electrons, powerful red light does not." },
    { q: "What is an electronvolt?", a: "The energy an electron gains crossing one volt: 1.602\u00b710\u207b\u00b9\u2079 J. In these units photon energies, bond energies and levels come out as numbers of order one rather than powers of ten." },
    { q: "How do energy and frequency relate?", a: "Directly: E = h\u03bd. Wavelength and frequency are tied by the speed of light, so any two of the three fix the third." },
  ],
};
