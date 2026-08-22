import type { CalculatorCopy } from '../../lib/platform/types';

export const stressStrainCopyEn: CalculatorCopy = {
  name: "Stress, strain and Young's modulus calculator",
  slug: "stress-strain",
  shortDescription: "Stress, strain and Young's modulus for a specimen in tension.",
  longDescription:
    "Solves tension three ways: the stress a load puts on a cross-section, the modulus of a material from a measured elongation, and how far a specimen of known modulus will stretch. A newton per square millimetre is exactly a megapascal, so no conversion factor appears anywhere. The distinction from a spring's Hooke law matters: spring stiffness belongs to one particular part and depends on its geometry, while Young's modulus belongs to the material itself and is the same for every specimen cut from it.",
  seoTitle: "Stress strain calculator — Young's modulus from a tensile test",
  seoDescription: "Calculate stress, strain and Young's modulus in tension from force, cross-section, original length and measured elongation.",
  h1: "Stress, strain and Young's modulus calculator",
  keywords: ["stress strain calculator", "youngs modulus calculator", "tensile stress calculator", "elongation calculator"],
  howToUse: [
    "Choose what to solve for: stress, modulus or elongation.",
    "Enter the force in newtons and the cross-section in square millimetres.",
    "For modulus and elongation, give the specimen's original length.",
    "Remember the yield point: beyond it the deformation stops being elastic and the calculation loses its meaning.",
  ],
  howItWorks: "Stress = force ÷ area; strain = elongation ÷ length; modulus = stress ÷ strain.",
  example: "10 kN on 100 mm² gives 100 MPa, and 0.5 mm of stretch over a metre gives a modulus of 200 GPa — steel.",
  faq: [
    { q: "How does Young's modulus differ from spring stiffness?", a: "Stiffness belongs to one particular part: the same steel gives different values in a thin and a thick spring. Young's modulus belongs to the material and is the same for any specimen of it, whatever the dimensions." },
    { q: "Why do newtons per mm² come out as megapascals directly?", a: "Because a pascal is a newton per square metre, and a square millimetre is a million times smaller. The units coincide exactly, so nothing needs converting." },
    { q: "Up to what load is this valid?", a: "Up to the material's yield point. Beyond it the deformation stops being elastic, the specimen does not return to its original length, and a modulus computed from such a measurement describes nothing. The limit differs by material and is not known to this calculation." },
    { q: "Does it apply to compression?", a: "For many metals the modulus in compression is practically the same and the formulas coincide. Concrete, cast iron and composites behave differently in tension and compression, so the result cannot be carried across." },
  ],
};
