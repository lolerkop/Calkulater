import type { CalculatorCopy } from '../../lib/platform/types';

export const pipeWeightCopyEn: CalculatorCopy = {
  name: "Pipe weight calculator",
  slug: "pipe-weight",
  shortDescription: "Pipe mass from outside diameter, wall thickness, length and material density.",
  longDescription:
    "A pipe is computed from the annulus between the outside and inside diameters, not from a circle with a correction. Because of that, doubling the wall does not double the mass: the increment depends on the diameter as well. The inside diameter is printed as its own row — it is what fittings are chosen by and what flow capacity depends on, and it is exactly what gets confused with the outside diameter when ordering.",
  seoTitle: "Pipe weight calculator — by diameter, wall and length",
  seoDescription: "Calculate the mass of a steel or plastic pipe from its outside diameter, wall thickness, length and material density.",
  h1: "Pipe weight calculator",
  keywords: ["pipe weight", "pipe mass", "mass per metre", "inside diameter"],
  howToUse: [
    "Enter the outside diameter — that is what the pipe is marked with, while fittings often quote the inside one.",
    "Density: steel 7850, stainless 7900, copper 8960, aluminium 2700, polyethylene about 950 kg/m³.",
    "The wall must be less than half the outside diameter, otherwise no bore is left.",
    "The internal volume tells you how much water or coolant the circuit holds.",
  ],
  howItWorks: "Annular section π/4·(D² − d²) in metres times length and density; the inside diameter is D − 2·wall.",
  example: "A steel 108×4 pipe six metres long weighs 61.6 kg — about 10.3 kg per metre.",
  faq: [
    { q: "Why does twice the wall not mean twice the weight?", a: "The annulus is what carries the mass, and its area depends on the diameter as well as the wall. On a 108×4 pipe the wall is a small share of the circle, so doubling it adds less than expected — while the bore shrinks a great deal." },
    { q: "What density should I use for stainless?", a: "About 7900 kg/m³ against 7850 for ordinary steel — under a per cent of difference, barely visible in the mass. Copper, aluminium and plastic differ far more." },
    { q: "Will this match a mill certificate?", a: "Nearly: certificates allow for wall tolerance and for a welded seam, so an actual batch can differ by a few per cent. For load and delivery calculations this precision is enough." },
    { q: "How do I compute a square tube?", a: "This calculation is for round pipe. For a rectangular section, take the difference between two rectangles and allow for the corner radii." },
  ],
};
