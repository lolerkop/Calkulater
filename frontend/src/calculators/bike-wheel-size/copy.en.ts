import type { CalculatorCopy } from '../../lib/platform/types';

export const bikeWheelSizeCopyEn: CalculatorCopy = {
  name: "Bicycle wheel size calculator",
  slug: "bike-wheel-size",
  shortDescription: "Diameter and circumference of a bicycle wheel from ETRTO or inches.",
  longDescription:
    "Two ways to enter a size, because the rim says one thing and cyclists say another. ETRTO gives the bead seat diameter of the rim and the width of the tyre in millimetres, and the wheel diameter is the rim plus TWO widths — the tyre sits above and below. The inch size is rounded heritage, so «26 inches» and ETRTO 559 come out differently: whatever you enter is what gets calculated. The circumference is what a bike computer wants, and what the gear ratio calculator takes as an input — there is nowhere else to get it except here or from the box the tyre came in.",
  seoTitle: "Bicycle wheel size calculator: diameter and circumference",
  seoDescription: "Work out the diameter, circumference and revolutions per kilometre of a bicycle wheel from ETRTO or inches.",
  h1: "Bicycle wheel size calculator",
  keywords: ["bike wheel circumference", "ETRTO calculator", "wheel size calculator", "bike computer wheel size"],
  howToUse: [
    "Look at the tyre sidewall: ETRTO is two numbers like 25-622.",
    "Enter the second one as the rim and the first as the tyre width.",
    "Or switch to inches if that is all you know.",
    "Use the circumference to set up a bike computer.",
  ],
  howItWorks:
    "In ETRTO mode the diameter is the rim plus twice the tyre width. In inch mode it is the inches times 25.4. The circumference is pi times the diameter, and revolutions per kilometre is a million millimetres divided by it.",
  example: "A 25-622 tyre gives a 672 mm wheel and a circumference of 2,111.15 mm.",
  faq: [
    { q: "Where do I find the ETRTO size?", a: "On the tyre sidewall, as two numbers separated by a dash: 25-622 means 25 mm wide on a 622 mm rim. It is the only size marking that is actually standardised." },
    { q: "Why is the tyre width counted twice?", a: "Because the tyre sits on both sides of the rim. The wheel grows by one tyre width at the top and one at the bottom." },
    { q: "Why do inches and ETRTO disagree?", a: "Because inch sizes are historical labels, not measurements. 26 inches is 660.4 mm by arithmetic but a 26-inch MTB rim is 559 mm — the difference is the tyre and the rounding." },
    { q: "Is this figure exact enough for a bike computer?", a: "It is a good start. For real accuracy roll the wheel one turn under your own weight and measure — a loaded tyre is slightly smaller than a free one." },
    { q: "How does this relate to the gear ratio calculator?", a: "That one asks for the wheel circumference. This is where the number comes from." },
  ],
};
