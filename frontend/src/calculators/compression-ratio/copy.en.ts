import type { CalculatorCopy } from '../../lib/platform/types';

export const compressionRatioCopyEn: CalculatorCopy = {
  name: "Compression ratio calculator",
  slug: "compression-ratio",
  shortDescription: "Compression ratio from swept and chamber volume.",
  longDescription:
    "Compression ratio is the total cylinder volume divided by the combustion chamber volume, and it drives both efficiency and the fuel the engine demands. The sensitivity is sharp and one-sided: shaving a cubic centimetre off the chamber lifts the ratio noticeably, while adding one to the swept volume barely moves it. Hence the practice: compression is raised at the head, not by boring the block.",
  seoTitle: "Compression ratio calculator",
  seoDescription: "Calculate engine compression ratio from the swept volume of one cylinder and the combustion chamber volume.",
  h1: "Compression ratio calculator",
  keywords: ["compression ratio", "combustion chamber", "swept volume", "engine tuning"],
  howToUse: [
    "The swept volume is for ONE cylinder, not the whole engine.",
    "Chamber volume is measured by filling the head with liquid with the valves closed.",
    "The full chamber includes the gasket and the deck clearance \u2014 measure them in.",
    "This gives the geometric ratio; engines with late intake closing run a lower effective one.",
  ],
  howItWorks: "Compression ratio = (swept volume + chamber) / chamber.",
  example: "A 454.17 cm\u00b3 cylinder with a 45 cm\u00b3 chamber gives 11.093.",
  faq: [
    { q: "What does a higher compression ratio buy?", a: "More efficiency and more power from the same capacity: the charge burns at higher pressure and gives up more of its energy. The price is octane demand \u2014 push it too far and detonation begins." },
    { q: "Why does skimming the head raise it so much?", a: "Because the chamber sits in the denominator and it is small. Removing 3 cm\u00b3 from 45 is seven per cent of the denominator; the same 3 cm\u00b3 on a 454 cm\u00b3 swept volume is under one per cent." },
    { q: "How does geometric differ from effective compression?", a: "Geometric is computed from volumes; effective starts when the intake valve actually closes. Engines with late closing run noticeably lower effective compression, which is exactly why they tolerate a high geometric figure." },
    { q: "What about forced induction?", a: "Boost raises the intake pressure and the total pressure at the end of compression. That is why turbocharged engines run a LOWER geometric ratio \u2014 otherwise detonation arrives sooner." },
  ],
};
