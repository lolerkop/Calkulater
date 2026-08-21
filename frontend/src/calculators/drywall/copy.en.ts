import type { CalculatorCopy } from '../../lib/platform/types';

export const drywallCopyEn: CalculatorCopy = {
  name: "Drywall calculator",
  slug: "drywall",
  shortDescription: "Sheets, profile and screws for a plasterboard wall or ceiling.",
  longDescription:
    "Counts what a plasterboard job takes. The allowance is applied to the area of every layer, not just one: offcuts appear in each layer, and a single-layer allowance runs out halfway through a double-layer skin. Sheets round up — a shop will not sell you half of one. Profile is counted as studs at the spacing you choose plus horizontal noggins roughly every metre, which is common practice rather than a rule, so treat that line as approximate. Screws are sixty per sheet per layer, the usual fixing density for a wall.",
  seoTitle: "Drywall calculator: sheets, profile and screws",
  seoDescription: "Work out how many plasterboard sheets, metres of profile and screws a wall or ceiling needs, including layers and allowance.",
  h1: "Drywall calculator",
  keywords: ["drywall calculator", "plasterboard sheets", "metal stud spacing", "drywall screws count"],
  howToUse: [
    "Enter the area you are covering.",
    "Enter the sheet size you are buying.",
    "Choose the number of layers: one for most walls, two for better sound or fire performance.",
    "Set the stud spacing and an allowance for offcuts.",
  ],
  howItWorks:
    "Area times layers plus the allowance gives the board area needed; divided by one sheet's area and rounded up, that is the sheet count. Profile is area over spacing plus area over three, and screws are sixty per sheet per layer.",
  example: "40 m² in one layer of 2.5 by 1.2 sheets with 10 % allowance comes to 15 sheets.",
  faq: [
    { q: "Why is the allowance applied per layer?", a: "Because you cut every layer. A second layer is deliberately offset from the first so the joints do not line up, which produces its own offcuts." },
    { q: "How exact is the profile figure?", a: "It is an estimate. Studs at your spacing are firm; the horizontal noggins are counted at roughly one per metre of height, which is the usual practice but not a standard." },
    { q: "Why sixty screws per sheet?", a: "That is the common density for a wall at 250 mm along the edges and 300 mm in the field. Ceilings take more; buy a margin either way, they are cheap and running out is not." },
    { q: "Is the frame at 600 mm always right?", a: "600 mm suits a 1200 mm sheet width, which is why it is common. 400 mm gives a stiffer wall and takes half again as much profile." },
    { q: "Does this include filler and tape?", a: "No. Those depend on joint length and the number of coats, and are usually bought by the bucket rather than calculated." },
  ],
};
