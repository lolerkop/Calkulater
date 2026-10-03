import type { CalculatorCopy } from '../../lib/platform/types';

export const momentumCopyEn: CalculatorCopy = {
  "name": "Momentum calculator",
  "slug": "momentum-calculator",
  "shortDescription": "Signed momentum, mass or velocity from p = m · v.",
  "seoTitle": "Momentum calculator — p = m · v",
  "seoDescription": "Calculate a body’s signed momentum or velocity on one axis, or positive mass from p = m · v, in SI units.",
  "h1": "Momentum calculator",
  "keywords": [
    "momentum calculator",
    "linear momentum",
    "p = mv calculator"
  ],
  "longDescription": "Calculates a body’s momentum component on one chosen axis and solves p = mv for velocity or mass. Velocity and momentum may be negative: their sign gives direction, while positive mass preserves that sign. The accompanying kinetic energy remains non-negative. This is a classical single-body model, not a complete multidimensional collision or relativistic-momentum calculation.",
  "howToUse": [
    "Choose momentum, velocity or mass.",
    "Enter a strictly positive mass in kg and signed velocity in m/s or momentum in kg·m/s on one axis.",
    "To find mass, velocity must be non-zero and momentum must have the same non-zero sign.",
    "Zero velocity gives zero momentum in the forward mode; p = v = 0 cannot determine mass."
  ],
  "howItWorks": "p = mv, v = p/m and m = p/v. With m > 0, p and v have matching signs. Eₖ = mv²/2 = pv/2 ≥ 0. For fixed mass, doubling speed doubles momentum magnitude and quadruples kinetic energy.",
  "example": "3 kg at +4 m/s gives p = +12 kg·m/s and Eₖ = 24 J; at −4 m/s it gives p = −12 kg·m/s with the same 24 J. p = −18 kg·m/s and v = −9 m/s imply m = 2 kg.",
  "faq": [
    {
      "q": "How does momentum differ from kinetic energy?",
      "a": "Momentum is a vector proportional to velocity; energy is a scalar proportional to speed squared. Opposite momenta can cancel while the corresponding kinetic energies add."
    },
    {
      "q": "Why does momentum matter in collisions?",
      "a": "Total vector momentum is conserved for a chosen system with no external impulse. An individual body’s momentum can change, and an inelastic collision can transfer kinetic energy into deformation and heat."
    },
    {
      "q": "What does zero velocity mean?",
      "a": "For a positive mass it gives p = 0 and Eₖ = 0 in the chosen frame. In the inverse mode, p = v = 0 fits any positive mass."
    },
    {
      "q": "Is the direction of momentum included?",
      "a": "Yes, on one axis: keep a common positive direction for p and v. Two- or three-dimensional motion requires components that this form does not request."
    },
    {
      "q": "How does momentum relate to stopping force?",
      "a": "Momentum change equals the time integral of net external force. Momentum alone does not determine stopping force or distance without a time, force model and other conditions."
    }
  ],
  "disclaimer": "One-axis components, constant positive mass and classical speeds; momentum conservation requires no external impulse on the system. Motion is along the chosen axis; if only one component of three-dimensional velocity is entered, the energy row does not give the body’s total kinetic energy."
};
