import type { CalculatorCopy } from '../../lib/platform/types';

export const deBroglieCopyEn: CalculatorCopy = {
  name: "De Broglie wavelength calculator",
  slug: "de-broglie-wavelength",
  shortDescription: "The wavelength of a particle from its mass and speed.",
  longDescription:
    "Every body has wave properties, but for macroscopic ones they are negligible: a thrown ball gets a wavelength thirty-odd orders of magnitude smaller than an atomic nucleus, and nothing can observe it. The meaningful range is particles, so mass is entered in units of 10⁻²⁷ kg: an electron is 0.00091093837, a proton 1.6726. The difference from a wave calculator: that one ties the speed, frequency and length of an elastic wave, while here the length comes from the particle's momentum through Planck's constant.",
  seoTitle: "De Broglie wavelength calculator — from mass and speed",
  seoDescription: "Calculate the de Broglie wavelength of an electron, proton or any particle from its mass and speed, with momentum and frequency.",
  h1: "De Broglie wavelength calculator",
  keywords: ["de broglie wavelength", "electron wavelength", "planck constant", "particle momentum"],
  howToUse: [
    "Mass in units of 10⁻²⁷ kg: electron 0.00091093837, proton 1.67262, neutron 1.67493.",
    "Speed in kilometres per second — handier than metres: electrons in instruments run at thousands of km/s.",
    "The nanometre row helps compare against interatomic spacings of about 0.1–0.3 nm.",
    "For macroscopic bodies the calculation is formally right but the result is unobservable.",
  ],
  howItWorks: "λ = h / (m · v), with h = 6.62607015·10⁻³⁴ J·s.",
  example: "An electron at 1000 km/s has a wavelength of 7.27·10⁻¹⁰ metres — under a nanometre.",
  faq: [
    { q: "Why has a ball no noticeable wave?", a: "Because wavelength is inversely proportional to momentum. A 150-gram ball at 30 m/s gets about 10⁻³⁴ metres — twenty orders below an atomic nucleus, and no instrument can resolve that." },
    { q: "Why mass in units of 10⁻²⁷ kg?", a: "An electron's mass in kilograms is 9.11·10⁻³¹, and the browser writes such numbers in exponent form, which the input field does not accept. In units of 10⁻²⁷ the value stays an ordinary decimal." },
    { q: "Why does electron wavelength matter?", a: "It sets the resolution limit of an electron microscope. Faster electrons mean a shorter wave and finer visible detail — which is exactly why such microscopes see what a light microscope cannot." },
    { q: "Does the formula hold near light speed?", a: "Not in this form: there the momentum is relativistic and the answer differs noticeably. This calculation is meant for speeds well below light speed." },
  ],
};
