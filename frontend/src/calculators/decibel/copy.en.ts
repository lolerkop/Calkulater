import type { CalculatorCopy } from '../../lib/platform/types';

export const decibelCopyEn: CalculatorCopy = {
  name: "Decibel calculator",
  slug: "decibel-calculator",
  shortDescription: "Add noise levels and convert a ratio of quantities into decibels.",
  longDescription:
    "Decibel levels do not add arithmetically, and that is the central misconception about noise: two sources of 80 dB give 83.01 dB, not 160. Powers add, and a decibel is the logarithm of their ratio, so the sum is taken by returning to the linear scale first. Doubling the power always adds exactly 3.01 dB, whatever level you start from. The second mode converts a ratio into decibels, and the multiplier differs there: ten for power, twenty for amplitude, because power goes as the square of amplitude.",
  seoTitle: "Decibel calculator — add noise levels and convert ratios to dB",
  seoDescription: "Add the noise levels of several sources by the rules of the logarithmic scale and convert a ratio of powers or amplitudes into decibels.",
  h1: "Decibel calculator",
  keywords: ["decibel calculator", "add noise levels", "dB ratio", "sound level addition"],
  howToUse: [
    "To add, list the source levels separated by spaces: 80 75 68.",
    "Compare the answer with the arithmetic-sum row — the gap is the whole point of a logarithmic scale.",
    "To convert a ratio, choose whether you have power or amplitude: the multiplier differs.",
    "The ratio is taken as the final value over the initial one.",
  ],
  howItWorks: "Sum of levels = 10·log₁₀(Σ10^(Lᵢ/10)). Power ratio = 10·log₁₀(p₂/p₁); amplitude ratio = 20·log₁₀(p₂/p₁).",
  example: "Two sources of 80 dB together give 83.01 dB, not 160.",
  faq: [
    { q: "Why do two 80 dB sources give 83 and not 160?", a: "Because a decibel is the logarithm of a power ratio, not the quantity itself. The powers add: two equal ones double the total, and doubling the power is exactly 3.01 dB." },
    { q: "Does doubling always add 3 dB?", a: "Yes, and that is a property of the logarithm: the increment does not depend on the starting level. From 40 dB or from 100 dB, doubling the power adds the same 3.01 dB." },
    { q: "When is the multiplier 10 and when 20?", a: "Ten for power, intensity and energy. Twenty for amplitude, voltage and sound pressure, because power goes as the square of those." },
    { q: "Can loudness be added this way?", a: "No. The calculation adds physical levels. Perceived loudness grows more slowly: doubling the power is heard as a small increase, and about +10 dB is what sounds twice as loud." },
  ],
};
