import type { CalculatorCopy } from '../../lib/platform/types';

export const beamDeflectionCopyEn: CalculatorCopy = {
  name: "Beam deflection calculator",
  slug: "beam-deflection",
  shortDescription: "Deflection of a simply supported beam under uniform or point load.",
  longDescription:
    "A beam usually disappoints by sagging rather than breaking: the floor carries the load but springs underfoot and cracks the finishes. Under a uniform load the deflection grows as the fourth power of the span, so an extra half metre of span costs more than any sensible increase in section. Watch the load unit: uniform loading is in kilonewtons PER METRE, a point load is a single force in kilonewtons.",
  seoTitle: "Beam deflection calculator — uniform and point load",
  seoDescription: "Calculate the deflection of a simply supported beam from load, span, modulus of elasticity and second moment of area.",
  h1: "Beam deflection calculator",
  keywords: ["beam deflection", "floor stiffness", "second moment of area", "relative deflection"],
  howToUse: [
    "The load unit follows the scheme: uniform is kilonewtons per metre, point is kilonewtons.",
    "Modulus of elasticity: softwood about 10 GPa, steel 210, aluminium 70.",
    "Take the second moment of area from a section table, or compute b·h³/12 for a rectangle in centimetres.",
    "The \"limit 1/250\" row shows a common span-based benchmark — compare the deflection against it.",
  ],
  howItWorks: "Uniform 5wL⁴/(384EI), point FL³/(48EI); EI built from GPa and cm⁴.",
  example: "A timber beam with 1000 cm⁴ over a 3 m span under 2 kN/m deflects 21.09 mm.",
  faq: [
    { q: "Why does deflection grow so sharply with span?", a: "Under a uniform load it is proportional to the fourth power of the span. Going from three metres to four triples the deflection, and no reasonable increase in section depth makes that back." },
    { q: "What does a deeper section buy?", a: "The second moment of area grows as the cube of the depth: a 50×200 joist is 2.37 times stiffer than a 50×150. That is why beams are set on edge rather than flat — the same section works far harder." },
    { q: "What does 1/250 mean?", a: "It is the relative deflection: span divided by deflection. The larger the denominator, the stiffer the structure. 1/250 is a common benchmark for floors; finished ceilings usually call for stiffer." },
    { q: "Is the beam's own weight included?", a: "No — add it to the uniform load yourself. For a timber beam it is usually a fraction of a kilonewton per metre and often small next to the imposed load." },
  ],
};
