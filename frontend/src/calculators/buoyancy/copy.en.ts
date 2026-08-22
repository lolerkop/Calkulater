import type { CalculatorCopy } from '../../lib/platform/types';

export const buoyancyCopyEn: CalculatorCopy = {
  name: "Buoyant force calculator",
  slug: "buoyancy-force",
  shortDescription: "Archimedes' force, the body's weight, and whether it floats.",
  longDescription:
    "Buoyant force depends only on the body's volume and the fluid's density — not on what is inside it. An empty barrel and a full barrel of the same size get the same Archimedes force; their weight is what differs. So the answer to \"will it float\" comes from the net force, not the buoyant force: positive lifts, negative sinks, and an exact zero means the neutral buoyancy divers aim for.",
  seoTitle: "Buoyant force calculator — Archimedes' principle",
  seoDescription: "Calculate the buoyant force from body volume and fluid density, with weight, net force and displaced mass.",
  h1: "Buoyant force calculator",
  keywords: ["archimedes force", "buoyant force", "buoyancy", "displaced water"],
  howToUse: [
    "Volume means the whole submerged volume, not the volume of material: a hollow part displaces by its outer contour.",
    "Fluid density: fresh water 1000, sea water about 1025, diesel about 840, mercury 13 546 kg/m³.",
    "A positive net force floats the body, a negative one sinks it, zero holds it mid-water.",
    "The calculation is for a fully submerged body. One floating on the surface displaces exactly its own mass.",
  ],
  howItWorks: "F = ρ · g · V with g = 9.80665; the net force is F − m · g.",
  example: "A 15 kg body of 20 litres in water gets 196.13 N against a weight of 147.1 N — it floats.",
  faq: [
    { q: "Why does a heavy ship not sink?", a: "What counts is not mass but the volume of water displaced. A steel hull encloses a huge volume of air, so it displaces more water than its own mass. A breach fills that volume with water, displacement drops — and the ship sinks." },
    { q: "What does neutral buoyancy give you?", a: "The net force is exactly zero: the body neither rises nor falls. A diver reaches it with a buoyancy compensator, a submarine with ballast tanks." },
    { q: "Why is floating easier in the sea?", a: "Its density is about 1025 against 1000 for fresh water, so the buoyant force is two and a half per cent larger at the same volume. In the Dead Sea, above 1200, a person cannot sink at all." },
    { q: "Do I need the body's own density?", a: "No — volume and mass are enough, and their ratio is the density. The calculation deliberately takes what is easier to measure: mass on a scale, volume by displaced water." },
  ],
};
