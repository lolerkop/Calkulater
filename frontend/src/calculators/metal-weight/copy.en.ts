import type { CalculatorCopy } from '../../lib/platform/types';

export const metalWeightCopyEn: CalculatorCopy = {
  name: "Metal bar weight calculator",
  slug: "metal-weight",
  shortDescription: "Mass of round, square and flat bar from the section size and length.",
  longDescription:
    "Works out the mass of a metal bar from its cross-section area, length and alloy density. The density is entered by hand rather than picked from a grade table: across steels it differs in the third digit, while aluminium, brass and copper differ in the first, and substituting a book figure would mean answering for an alloy the page knows nothing about. Alongside the mass it gives the weight per metre and how many metres go into a tonne — two lines that let a supplier's invoice be checked without recalculating anything.",
  seoTitle: "Metal bar weight calculator — round, square and flat bar",
  seoDescription: "Calculate the weight of metal bar stock: round, square or flat, from the cross-section dimensions, length and alloy density.",
  h1: "Metal bar weight calculator",
  keywords: ["metal weight calculator", "steel bar weight calculator", "flat bar weight", "weight per metre of steel"],
  howToUse: [
    "Choose the cross-section: round, square or flat bar.",
    "Enter the diameter or side in millimetres; a flat bar takes both sides.",
    "Give the length in metres.",
    "Set the alloy density: steel 7.85, aluminium 2.7, brass 8.5 g/cm³.",
  ],
  howItWorks: "Mass = cross-section area × length × density. The area is π(d/2)² for a round bar, a² for a square and a × b for a flat. Millimetres are brought to metres by dividing by a million.",
  example: "A steel round bar 20 mm across and 6 m long weighs 14.797 kg — 2.466 kg per metre.",
  faq: [
    { q: "Why enter the density by hand?", a: "Because it depends on the alloy. Steels differ in the third digit, while aluminium against brass differs threefold, and picking a number for you would mean answering for a grade the page does not know." },
    { q: "What density should I use for steel?", a: "For structural and low-alloy steels normally 7.85 g/cm³. Austenitic stainless is slightly heavier, around 7.9." },
    { q: "Does this work for tube or angle?", a: "No. Those have a hollow section and their area is a difference of two shapes. This page covers solid profiles: round, square and flat." },
    { q: "Why does the actual weight differ?", a: "Rolling tolerances. Stock is supplied with dimensional deviation, and on long profiles a couple of per cent is ordinary." },
  ],
};
