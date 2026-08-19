import type { CalculatorCopy } from '../../lib/platform/types';

export const densityCopyEn: CalculatorCopy = {
  name: "Density calculator",
  slug: "density-calculator",
  shortDescription: "Density, mass or volume of a substance from ρ = m ÷ V.",
  longDescription:
    "Ties mass, volume and density together and solves the relation in any direction: mass and volume give the density, density and volume give the mass you need for a load calculation. This is not a unit conversion — the density converter turns kg/m³ into g/cm³ and back, whereas this page computes the quantity itself from its physical definition. The two tasks come up together but they are different questions.",
  seoTitle: "Density calculator — ρ = m ÷ V",
  seoDescription: "Calculate the density of a substance, its mass or its volume from ρ = m ÷ V in SI units.",
  h1: "Density calculator",
  keywords: ["density calculator", "density of a substance", "mass from density", "rho = m/v"],
  howToUse: ["Choose the quantity you need.", "Enter the other two in SI units.", "Read the result — density is also shown in g/cm³."],
  howItWorks: "ρ = m ÷ V, so m = ρ · V and V = m ÷ ρ. One kilogram per cubic metre equals 0.001 g/cm³.",
  example: "A tonne of water occupies a cubic metre, so its density is 1000 kg/m³ — that is 1 g/cm³.",
  faq: [
    { q: "How is this different from the density converter?", a: "The converter turns one density unit into another. Here the density is computed from mass and volume by definition — different tasks, and they usually come up one after the other." },
    { q: "Why is the density also shown in g/cm³?", a: "Because material references usually quote it that way: water at 1 g/cm³ reads more easily than 1000 kg/m³." },
    { q: "Can I get the mass of a part from its volume?", a: "Yes. Choose the mass mode, take the material density from a reference and enter the volume — you get the mass of the blank." },
    { q: "Are voids and porosity accounted for?", a: "No. The average density of the body is computed: mass divided by the whole occupied volume, pores included." },
  ],
};
