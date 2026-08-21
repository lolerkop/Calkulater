import type { CalculatorCopy } from '../../lib/platform/types';

export const pileFoundationCopyEn: CalculatorCopy = {
  name: "Pile foundation calculator",
  slug: "pile-foundation",
  shortDescription: "Concrete for bored piles and the grillage beam that ties them together.",
  longDescription:
    "Prices both halves of a pile foundation. A pile is treated as a cylinder — circle area times depth — and the grillage is the beam that runs on top of them, added to their sum rather than counted instead of it. Both are poured from the same concrete, but the ratio between them shows where it actually goes: the grillage usually turns out to be three times heavier than the piles themselves, which is worth seeing before the mixer is ordered. The grillage is optional — zeros in its dimensions mean «there isn't one», not a mistake.",
  seoTitle: "Pile foundation calculator: piles and grillage concrete",
  seoDescription: "Calculate the concrete volume for bored piles and the grillage beam, with the split between them shown separately.",
  h1: "Pile foundation calculator",
  keywords: ["pile foundation calculator", "bored pile concrete", "grillage volume", "post foundation concrete"],
  howToUse: [
    "Enter how many piles the plan has, and their diameter and depth.",
    "Enter the grillage beam dimensions, or zeros if there is none.",
    "Add an allowance for what is lost in delivery and pouring.",
    "Compare the two volumes: the grillage is usually the larger.",
  ],
  howItWorks:
    "One pile is the circle area times the depth. Multiplied by the count that gives the piles; the grillage is length by width by height, and both together plus the allowance give the total.",
  example: "Twelve 300 mm piles 1.8 m deep with a 32 m grillage need 6.979 m³ of concrete.",
  faq: [
    { q: "Why is the grillage bigger than the piles?", a: "Because it runs the whole perimeter. Twelve piles of 300 mm hold about 1.5 m³ between them, while 32 m of 400 by 400 beam is over 5 m³ on its own." },
    { q: "What if I have no grillage?", a: "Leave its dimensions at zero. The piles are then the whole job, which is how a fence or a light deck is usually built." },
    { q: "Does depth mean the whole pile or the part in the ground?", a: "Whatever you will pour. If the pile stands proud of the ground, include that part — it takes concrete too." },
    { q: "Is the reinforcement included?", a: "No. Pile cages and grillage bars depend on the design and are a separate count." },
    { q: "Why not just use the strip foundation calculator?", a: "Because a strip is one continuous trench of concrete, while this is discrete columns plus a beam on top. The two parts are counted separately here, and their ratio is the useful part." },
  ],
};
