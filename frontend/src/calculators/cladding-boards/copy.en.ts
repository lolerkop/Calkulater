import type { CalculatorCopy } from '../../lib/platform/types';

export const claddingBoardsCopyEn: CalculatorCopy = {
  name: "Cladding boards calculator",
  slug: "cladding-boards",
  shortDescription: "How many boards a wall takes once the overlap is accounted for.",
  longDescription:
    "Works out how many boards a wall needs when they are laid with an overlap. The overlap is the whole point of the correction: a 190 mm board lapped by 20 mm only covers 170, so dividing wall area by board area undercounts by roughly a tenth. This differs from costing boards by the cubic metre — that answers volume and price, this answers coverage, and the result is measured in pieces and linear metres.",
  seoTitle: "Cladding boards calculator — board count with overlap",
  seoDescription: "Calculate how many cladding boards a wall needs: effective width after the overlap, a cutting allowance and the linear metres required.",
  h1: "Cladding boards calculator",
  keywords: ["cladding boards calculator", "how many boards for a wall", "shiplap calculator", "board and batten calculator"],
  howToUse: [
    "Enter the wall area, leaving openings in if you want them as extra allowance.",
    "Give the catalogue length and full width of the board.",
    "Set the overlap — how far neighbouring boards cover each other.",
    "Add a cutting allowance, usually between 5 and 15%.",
  ],
  howItWorks: "Effective width = width − overlap. Boards = wall area including waste, divided by the product of board length and effective width, rounded up.",
  example: "A 30 m² wall with 3 × 0.19 m boards, a 0.02 m overlap and 10% waste takes 65 boards — 195 linear metres.",
  faq: [
    { q: "Why not just divide the area by the board area?", a: "Because the overlap eats part of every board. At 190 mm wide with a 20 mm lap only 170 mm works, and without that correction you fall short by roughly a tenth." },
    { q: "How is this different from costing boards by volume?", a: "That answers cubic metres and price. This answers coverage with the overlap included, and the result is pieces and linear metres." },
    { q: "What overlap should I use?", a: "On shiplap and tongue-and-groove profiles it is set by the joint, usually 10–20 mm. With plain lapped boards you choose it, most often 20–30 mm." },
    { q: "Should I subtract windows and doors?", a: "You can, but then raise the allowance: short offcuts above and below openings rarely all get used." },
  ],
};
