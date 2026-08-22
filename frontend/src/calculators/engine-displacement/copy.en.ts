import type { CalculatorCopy } from '../../lib/platform/types';

export const engineDisplacementCopyEn: CalculatorCopy = {
  name: "Engine displacement calculator",
  slug: "engine-displacement",
  shortDescription: "Displacement from bore, stroke and cylinder count.",
  longDescription:
    "The figure on the papers is rounded: \"1.8 litres\" can mean 1796 or 1816 cubic centimetres, while tax and customs work from the exact number. Here it comes out of the three dimensions printed in parts catalogues and stamped on the block. A separate row gives the stroke-to-bore ratio: it explains why two engines of the same displacement behave differently — a long-stroke pulls from low revs, a short-stroke likes to spin.",
  seoTitle: "Engine displacement calculator — from bore and stroke",
  seoDescription: "Calculate engine displacement from cylinder bore, piston stroke and cylinder count, in cubic centimetres and litres.",
  h1: "Engine displacement calculator",
  keywords: ["engine displacement", "engine size", "cylinder bore", "piston stroke"],
  howToUse: [
    "Bore and stroke in millimetres, as parts catalogues print them.",
    "Boring the block changes the bore but not the stroke: enter the actual liner size.",
    "A stroke-to-bore ratio above one means a long-stroke engine, below one a short-stroke.",
    "This is the swept volume. The total combustion chamber volume is larger by the clearance volume.",
  ],
  howItWorks: "V = π/4 · D² · S · n, with cubic millimetres divided by 1000.",
  example: "Four cylinders of 82×86 mm give 1816.67 cm³ — the familiar \"1.8 litres\".",
  faq: [
    { q: "Why do the papers say something else?", a: "The stated displacement is rounded to a tenth, and sometimes to the model's marketing figure. The exact volume from the cylinder dimensions differs by tens of cubic centimetres, and that is the number customs and tax work from." },
    { q: "What does boring the block do?", a: "Every extra millimetre of bore adds volume quadratically: on an 82 mm engine, boring to 83 adds about 45 cm³ across four cylinders. The stroke stays put — it is set by the crankshaft." },
    { q: "How does a long-stroke engine differ?", a: "With stroke larger than bore the piston runs at a higher mean speed at the same revs, so the engine pulls from low down but revs out worse. A short-stroke is the reverse, which is why sports cars favour it." },
    { q: "Does this work for a motorcycle?", a: "Yes, the formula does not care about the vehicle. For a single-cylinder engine enter one and the calculation shows the same volume in both rows." },
  ],
};
