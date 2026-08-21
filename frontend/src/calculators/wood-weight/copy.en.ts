import type { CalculatorCopy } from '../../lib/platform/types';

export const woodWeightCopyEn: CalculatorCopy = {
  name: "Wood weight calculator",
  slug: "wood-weight",
  shortDescription: "Weight of timber from its volume, species and moisture content.",
  longDescription:
    "Turns cubic metres of timber into kilograms, which needs the species: oak is a third heavier than spruce for the same volume. Reference densities are given at 12 % moisture, the standard condition tables are normalised to, and the conversion from there is linear — one per cent of moisture adds one per cent of weight. That model is coarse for green timber, where the water can weigh as much as the wood, so the density actually used is always printed as its own line: a weight you cannot trace back to a density is a weight you cannot check.",
  seoTitle: "Wood weight calculator by species and moisture",
  seoDescription: "Work out how much timber weighs from its volume, species and moisture content, with the density used shown alongside.",
  h1: "Wood weight calculator",
  keywords: ["wood weight calculator", "timber weight per cubic metre", "wood density by species", "lumber weight"],
  howToUse: [
    "Enter the volume in cubic metres.",
    "Choose the species — density varies by a third across common ones.",
    "Enter the moisture content: 12 % is dry, 20 % is air-dried, higher is green.",
    "Check the density line to see what the answer was built on.",
  ],
  howItWorks:
    "Density is the reference density for the species, adjusted by one per cent for each per cent of moisture away from 12 %. Weight is volume times that density.",
  example: "One cubic metre of pine at 12 % moisture weighs 520 kg.",
  faq: [
    { q: "Why does moisture change the weight so much?", a: "Because water is part of what you are lifting. Freshly felled softwood can be half water by weight, which is why a green log and a seasoned one of the same size feel like different objects." },
    { q: "Where does 12 % come from?", a: "It is the conventional reference condition for timber tables — roughly what wood settles at indoors. Quoting a density without a moisture content means very little." },
    { q: "Is the linear adjustment accurate?", a: "Near the reference it is close enough for loading and transport. Far above it — green timber at 60 % — the real relationship bends, and the answer is an estimate." },
    { q: "Does this work for boards as well as logs?", a: "Yes, if you enter the actual volume. The board volume calculator will give you that figure from dimensions and count." },
    { q: "Why is my species not listed?", a: "The list holds the common construction species with well-established reference densities. Adding rarer ones would mean quoting numbers that are not equally well settled." },
  ],
};
