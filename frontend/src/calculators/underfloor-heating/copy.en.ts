import type { CalculatorCopy } from '../../lib/platform/types';

export const underfloorHeatingCopyEn: CalculatorCopy = {
  name: "Underfloor heating pipe calculator",
  slug: "underfloor-heating",
  shortDescription: "Pipe length and number of loops for a wet underfloor heating layout.",
  longDescription:
    "Works out how much pipe a floor takes and how many loops it has to be split into. The edge zone is laid tighter than the rest — losses are higher along an outside wall — so the area is split in two with its own spacing for each, rather than averaged into one figure. An average would look plausible and leave a cold strip along the window. The loop count rounds up, because pipe longer than the limit does not work hydraulically and «2.3 loops» means three.",
  seoTitle: "Underfloor heating pipe calculator: length and loops",
  seoDescription: "Calculate the pipe length and the number of loops for underfloor heating from area, spacing and edge zone.",
  h1: "Underfloor heating pipe calculator",
  keywords: ["underfloor heating calculator", "pipe length underfloor", "heating loop length", "floor heating spacing"],
  howToUse: [
    "Enter the heated floor area — not the whole room if furniture blocks part of it.",
    "Enter the pipe spacing; 150 mm is a common choice.",
    "Enter the edge zone area and its tighter spacing.",
    "Set the maximum loop length your manifold and pump allow.",
  ],
  howItWorks:
    "Pipe length is the main area divided by its spacing plus the edge zone divided by its own spacing, all increased by the allowance. Loops are that length divided by the maximum, rounded up.",
  example: "20 m² at 150 mm with a 4 m² edge zone at 100 mm takes 161.33 m of pipe in two loops.",
  faq: [
    { q: "Why is the edge zone laid tighter?", a: "Because heat leaves faster near an outside wall and a window. Same spacing everywhere gives an even pipe layout and an uneven floor." },
    { q: "What limits loop length?", a: "Pressure drop. Beyond roughly 90–120 m for 16 mm pipe the pump cannot push enough water through, and the far end of the loop runs cold." },
    { q: "Should I count the whole room?", a: "Count what you actually heat. Pipe is not usually laid under fitted kitchen units or a bath, and including them buys pipe you will not use." },
    { q: "Does spacing change the heat output?", a: "Yes — tighter spacing means more pipe per square metre and more heat. This calculator gives you the pipe for a spacing you choose, not the spacing for a heat demand." },
    { q: "Is the screed included?", a: "No. Screed volume is a separate calculation from area and thickness." },
  ],
};
