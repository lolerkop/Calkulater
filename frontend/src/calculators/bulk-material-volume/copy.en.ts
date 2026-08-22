import type { CalculatorCopy } from '../../lib/platform/types';

export const bulkMaterialVolumeCopyEn: CalculatorCopy = {
  name: "Bulk material calculator",
  slug: "bulk-material-volume",
  shortDescription: "Volume and mass of gravel, sand or screenings for a base layer.",
  longDescription:
    "Works out how much loose material a base layer takes: the volume, the mass in tonnes and the number of 25 kg bags. The density here is the bulk density, not the density of the rock itself: loose gravel weighs about 1.4–1.6 t/m³ while solid granite is 2.7, and using the rock figure would nearly double the mass. It differs from a concrete calculator — that works out a mix by composition and grade, whereas this covers a single material and answers how much of it to order.",
  seoTitle: "Bulk material calculator — volume and mass of a base layer",
  seoDescription: "Calculate the volume and mass of gravel, sand or screenings for a base layer from the area, layer thickness and bulk density.",
  h1: "Bulk material calculator",
  keywords: ["gravel calculator", "how much sand for a base", "bulk material volume calculator", "aggregate calculator"],
  howToUse: [
    "Enter the length and width of the area being filled.",
    "Set the layer thickness in centimetres.",
    "Give the bulk density: gravel 1.4–1.6, sand 1.5–1.7, screenings 1.4 t/m³.",
    "Add a compaction allowance — under a roller usually 5–15%.",
  ],
  howItWorks: "Volume = length × width × layer thickness, with centimetres brought to metres by dividing by 100. Mass = volume including allowance × bulk density.",
  example: "A 5 × 4 m area with a 10 cm layer and 5% allowance needs 2.1 m³ of gravel — 3.36 tonnes.",
  faq: [
    { q: "Which density do I enter?", a: "The bulk density, not the rock density. Loose gravel is 1.4–1.6 t/m³ and sand 1.5–1.7. Granite's 2.7 describes the stone, not a heap with air between the grains." },
    { q: "Why an allowance for compaction?", a: "Under a roller the layer settles, so the volume in the truck exceeds the volume in the finished base. Five to fifteen per cent covers the difference." },
    { q: "How is this different from a concrete calculator?", a: "Concrete is worked out by mix and grade: cement, sand, aggregate and water in proportion. Here a single material is measured, and the answer is how many cubic metres and tonnes to order." },
    { q: "Why so many bags?", a: "Because a 25 kg bag is roughly 0.016 m³. Above a cubic metre loose delivery is far cheaper." },
  ],
};
