import type { CalculatorCopy } from '../../lib/platform/types';

export const slabFoundationCopyEn: CalculatorCopy = {
  name: "Slab foundation calculator",
  slug: "slab-foundation",
  shortDescription: "Concrete volume and reinforcing mesh for a raft slab.",
  longDescription:
    "Works out both halves of a slab foundation: the concrete you pour and the steel you lay in it. The number of bars along a side is the side divided by the spacing, rounded down, plus one — the bar at the far edge is not optional, and without that plus one the mesh would come up one row short at every edge. Two layers are assumed, top and bottom, so the length doubles. Mass per metre comes from the cross-section and the density of steel, 7,850 kg/m³, which is a reference figure rather than a fitted coefficient, and it gives the familiar 0.888 kg/m for 12 mm bar.",
  seoTitle: "Slab foundation calculator: concrete and rebar",
  seoDescription: "Calculate the concrete volume and the length and weight of reinforcing mesh for a raft slab foundation.",
  h1: "Slab foundation calculator",
  keywords: ["slab foundation calculator", "raft slab concrete", "rebar mesh calculator", "foundation concrete volume"],
  howToUse: [
    "Enter the length, width and thickness of the slab.",
    "Enter the mesh spacing — 200 mm is a common choice.",
    "Enter the rebar diameter in millimetres.",
    "Add an allowance for what is lost in delivery and pouring.",
  ],
  howItWorks:
    "Concrete is length by width by thickness plus the allowance. Bars along each direction are the opposite side divided by the spacing, rounded down, plus one, and the whole mesh is doubled for two layers. Mass per metre is the circle area of the bar times the density of steel.",
  example: "A 10 by 8 slab, 0.3 m thick with 200 mm mesh of 12 mm bar, needs 25.2 m³ of concrete and 1,452.46 kg of steel.",
  faq: [
    { q: "Why plus one bar?", a: "Because the bars start at one edge and must also reach the other. Ten spacings across two metres means eleven bars, not ten." },
    { q: "Are two layers always right?", a: "For a raft slab, usually yes: the top layer works in one direction of bending and the bottom in the other. A thin slab on firm ground is sometimes built with one." },
    { q: "Where does 0.888 kg per metre come from?", a: "From the geometry: a 12 mm circle is 113.1 mm², and steel at 7,850 kg/m³ gives 0.888 kg for every metre of it. It is arithmetic, not a table lookup." },
    { q: "Is the overlap of bars included?", a: "No. Bars longer than the slab need lapping, and the lap length depends on the diameter and the class of concrete. Add it to the allowance if your bars are shorter than the slab." },
    { q: "Why a separate calculator if the general concrete one gives volume?", a: "Because a slab needs more than a pour. This one also counts the mesh in two layers with the extra bar at each edge — something a volume-of-a-shape calculation does not give you." },
  ],
};
