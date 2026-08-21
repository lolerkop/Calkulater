import type { CalculatorCopy } from '../../lib/platform/types';

export const linoleumCopyEn: CalculatorCopy = {
  name: "Linoleum calculator",
  slug: "linoleum",
  shortDescription: "Running metres of roll flooring for a room, with strips, seams and offcut.",
  longDescription:
    "Roll flooring has arithmetic of its own, unlike laminate: you buy running metres of a fixed-width roll, not an area. Strips run along the length of the room, and their number is the room width divided by the roll width, rounded up — which is also where the seams come from, one fewer than the strips, so a room exactly one roll wide has none. The offcut is shown separately: the difference between what you buy and what you lay is what ends up rolled in the corner, and it is better known in advance than discovered on delivery.",
  seoTitle: "Linoleum calculator: running metres, strips and seams",
  seoDescription: "Work out how many running metres of linoleum a room takes, how many strips and seams that means, and how much offcut is left.",
  h1: "Linoleum calculator",
  keywords: ["linoleum calculator", "roll flooring metres", "vinyl flooring calculator", "flooring seams"],
  howToUse: [
    "Enter the room length and width.",
    "Enter the width of the roll you are buying — 2, 2.5, 3, 3.5 and 4 m are common.",
    "Add an allowance for trimming at the walls.",
    "Check the seam count: a wider roll may remove it entirely.",
  ],
  howItWorks:
    "Strips are the room width divided by the roll width, rounded up. Running metres are strips times the room length plus the allowance, and the area bought is that length times the roll width.",
  example: "A 5 by 3.5 m room on a 3 m roll with 5 % allowance takes 10.5 running metres in two strips with one seam.",
  faq: [
    { q: "Which way should the strips run?", a: "Along the length, and ideally along the light from the window so the seam is least visible. This calculator assumes strips run the length of the room." },
    { q: "How do I avoid a seam?", a: "Buy a roll at least as wide as the room. That is why 3.5 and 4 m rolls exist — a single piece in an ordinary room has no join to come apart." },
    { q: "Why is so much left over?", a: "Because you buy whole roll width. A 3.5 m room on a 3 m roll needs a second strip of which only half a metre is used; the rest is the price of the seam being where it is." },
    { q: "Is the allowance really needed?", a: "Yes. Walls are rarely square and the sheet has to run up them slightly before trimming. Five per cent is a modest, common figure." },
    { q: "Does this work for vinyl and carpet too?", a: "Yes — any roll goods sold by running metre at a fixed width follow the same arithmetic." },
  ],
};
