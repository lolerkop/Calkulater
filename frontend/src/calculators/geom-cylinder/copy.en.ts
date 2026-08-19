import type { CalculatorCopy } from '../../lib/platform/types';

export const geomCylinderCopyEn: CalculatorCopy = {
  name: "Cylinder calculator",
  slug: "cylinder-calculator",
  shortDescription: "Volume, lateral and total surface area of a cylinder from radius and height.",
  longDescription:
    "Works a cylinder — the shape of a barrel, a pipe, a tank or a well ring. Besides the volume it reports two surfaces, and the difference matters: the lateral one is what you need for wrapping or lagging a pipe, the total one for painting a vessel including its base and lid. Volume comes in the cube of the chosen unit, surfaces in its square.",
  seoTitle: "Cylinder calculator — volume and surface area",
  seoDescription: "Calculate the volume, lateral and total surface area of a cylinder from its radius and height.",
  h1: "Cylinder calculator",
  keywords: ["cylinder calculator", "volume of a cylinder", "cylinder surface area", "tank volume calculator"],
  howToUse: ["Choose the length unit.", "Enter the base radius and the height.", "Read the volume and both surfaces."],
  howItWorks: "V = π · r² · h, the lateral surface is 2πrh and the total is 2πr(r + h) — the lateral surface plus two bases.",
  example: "A cylinder of radius 3 m and height 10 m has a volume of 282.743 m³ and a lateral surface of 188.496 m².",
  faq: [
    { q: "How does the lateral surface differ from the total?", a: "The lateral one is the wall alone, which unrolls into a rectangle 2πr by h. The total adds the two circular bases to it." },
    { q: "How do I convert the volume to litres?", a: "A cubic decimetre is a litre and a cubic metre is a thousand litres, so compute in metres and multiply by 1000." },
    { q: "Does this work for a pipe?", a: "For the outer volume and area, yes. The bore is a separate calculation from the inner radius; wall thickness is not modelled here." },
    { q: "What if I know the diameter?", a: "Enter half of it. The radius is half the diameter, and substituting the diameter would overstate the volume fourfold." },
  ],
};
