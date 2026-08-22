import type { CalculatorCopy } from '../../lib/platform/types';

export const scaleModelCopyEn: CalculatorCopy = {
  name: "Model scale calculator",
  slug: "scale-model-converter",
  shortDescription: "Convert sizes between the original and the model at a 1:N scale.",
  longDescription:
    "Converts three ways: what the model size will be, what the original measured, and what scale an existing pair of sizes represents. The scale denominator is a first-class input in a modeller's own vocabulary — 1:87, 1:43, 1:72 — not an anonymous term of a proportion you have to arrange yourself. Answers come in millimetres, and a scale you look up is printed the familiar way, as 1:N.",
  seoTitle: "Model scale calculator — 1:87, 1:43, 1:72",
  seoDescription: "Convert a real size into a model size and back at any scale, and find the scale itself from a pair of measurements.",
  h1: "Model scale calculator",
  keywords: ["model scale calculator", "1:87 scale", "scale converter", "model size calculator"],
  howToUse: [
    "Choose what to find: the model size, the real size, or the scale itself.",
    "Enter sizes in millimetres — that is how drawings are marked and models are measured.",
    "The scale denominator is the second number of the notation: for 1:87 it is 87.",
    "The field being solved is labelled \"computed\" and filled in by the calculation.",
  ],
  howItWorks: "Model = original ÷ denominator; original = model × denominator; scale = original ÷ model.",
  example: "A 4350 mm wagon at 1:87 gives a 50 mm model.",
  faq: [
    { q: "What does the second number in 1:87 mean?", a: "How many times smaller the model is. At 1:87 every millimetre of the model stands for 87 millimetres of the real thing." },
    { q: "How is this different from a proportion calculator?", a: "A proportion solves an anonymous a : b = c : d and leaves you to place the denominator. Here the scale is its own field, answers carry millimetres, and a scale you look up prints as 1:N." },
    { q: "The scale came out fractional — is that wrong?", a: "No. An arbitrary pair of sizes rarely lands on a round number: 1:12.5 simply means the original is 12.5 times larger. For standard rulers pick the nearest accepted scale." },
    { q: "Does it work for areas and volumes?", a: "The fields handle linear sizes. Area shrinks by N² and volume by N³, so square metres must not be entered here." },
  ],
};
