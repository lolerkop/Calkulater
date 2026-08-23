import type { CalculatorCopy } from '../../lib/platform/types';

export const paperQuantityCopyEn: CalculatorCopy = {
  name: "Paper weight and sheets calculator",
  slug: "paper-weight-and-sheets",
  shortDescription: "Ream mass from sheet size, grammage and sheet count.",
  longDescription:
    "Paper is specified in grams per square metre but bought by the sheet, and the A series is what ties the two together. Under ISO 216 an A0 sheet is exactly one square metre, and each next size is half the previous one. So \"80 gsm\" on A4 means exactly 80/16 = 5 grams per sheet, and a 500-sheet ream weighs 2.5 kilograms. That matters for postage brackets, for picking a printer and for working out freight.",
  seoTitle: "Paper weight calculator — by size, grammage and sheet count",
  seoDescription: "Calculate the mass of a paper ream from A0–A6 size, grammage in grams per square metre and the number of sheets.",
  h1: "Paper weight and sheets calculator",
  keywords: ["paper weight", "paper grammage", "gsm", "a4 sheet weight"],
  howToUse: [
    "Grammage is printed on the wrapper: 80 gsm is office paper, 160–300 is card and photo stock.",
    "Sizes follow ISO 216, where A0 is one square metre and each next size is half of it.",
    "For a non-standard size take the nearest one and scale by the area ratio.",
    "The mass excludes packaging: the box and wrapper add on top.",
  ],
  howItWorks: "Mass = sheet area × grammage × number of sheets.",
  example: "A ream of 500 A4 sheets at 80 gsm weighs exactly 2 kilograms.",
  faq: [
    { q: "Why does an A4 ream weigh what it does?", a: "Because A0 is one square metre and A4 is sixteen times smaller. At 80 gsm a sheet weighs 5 grams, so 500 sheets come to 2500 grams of paper; at 64 gsm the same ream lands at 2 kg." },
    { q: "How does grammage differ from thickness?", a: "Grammage is mass per area, while thickness also depends on how bulky the fibre is. Two 80 gsm papers can differ in thickness by half again: loose offset stock is thicker than dense coated stock." },
    { q: "How do I work out postage?", a: "Add up all the sheets and include the envelope. Postal rates come in steps, so what matters is not the exact weight but which step it falls into — the calculation shows whether you stay inside." },
    { q: "What is \"sheets per kilogram\"?", a: "The inverse figure: how many sheets of this size and grammage fit into a kilogram. It is handy for wholesale, where paper is sold by the tonne but used by the sheet." },
  ],
};
