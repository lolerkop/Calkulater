import type { CalculatorCopy } from '../../lib/platform/types';

export const beamStressCopyEn: CalculatorCopy = {
  name: "Beam bending stress calculator",
  slug: "beam-bending-stress",
  shortDescription: "Bending stress from the moment and the shape of the beam's cross-section.",
  longDescription:
    "The section modulus decides everything. For a rectangle it is b·h²/6, with the height squared: a board stood on edge carries three times what the same board carries laid flat. The difference from tension matters — there the stress is uniform across the section and equals force over area, while in bending it varies linearly from the neutral axis and peaks at the outer fibre, so the area alone is not enough and the shape is what counts.",
  seoTitle: "Beam bending stress calculator — section modulus",
  seoDescription: "Calculate bending stress in a beam from the bending moment and the cross-section shape, rectangle or circle, with the section modulus.",
  h1: "Beam bending stress calculator",
  keywords: ["bending stress calculator", "section modulus", "beam calculation", "bending moment"],
  howToUse: [
    "Enter the bending moment in newton-metres: for a simply supported beam with a central load it is force times span over four.",
    "Section sizes are in millimetres.",
    "For a rectangle the height is the dimension along the load, that is vertically.",
    "Compare the result with the allowable stress of your material — it depends on the grade and is not assumed here.",
  ],
  howItWorks: "Section modulus: rectangle b·h²/6, circle π·d³/32. Stress = moment ÷ section modulus.",
  example: "A 100×200 mm rectangular section under 4.5 kN·m carries a bending stress of 6.75 MPa.",
  faq: [
    { q: "Why does a board on edge carry so much more?", a: "Because the section height enters the modulus squared. Turning a 50×150 board from flat to on edge triples its resistance to bending." },
    { q: "How does this differ from a tension calculation?", a: "In tension the stress is uniform across the section and equals force over area. In bending it varies linearly from the neutral axis and peaks at the edge, so the shape of the section matters more than its area." },
    { q: "Why is there no allowable stress?", a: "It depends on the steel grade, the timber species and the safety factors of the applicable code. Baking in one number would present a special case as a general rule." },
    { q: "Is this a complete beam check?", a: "No. This is bending stress in the elastic range and in one plane only. Deflection, buckling, shear and torsion are separate calculations." },
  ],
};
